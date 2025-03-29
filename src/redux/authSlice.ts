import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
    name: string;
    email: string;
}

interface AuthState {
    user: User | null;
    isLoggedIn: boolean;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    isLoggedIn: false,
    loading: false,
    error: null,
};

const api = axios.create({
    baseURL: "https://salon-booking-backend-oxwm.onrender.com/auth",
});

export const register = createAsyncThunk(
    "auth/register",
    async (userData: { name: string; email: string; password: string }, { rejectWithValue }) => {
        try {
            const response = await api.post("/register", userData);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user","true");
            localStorage.setItem("userdata", JSON.stringify(response.data.user));
            return response.data.user;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Registration failed");
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async (credentials: { email: string; password: string }, { rejectWithValue }) => {
        try {
            const response = await api.post("/login", credentials);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user","true");
            localStorage.setItem("userdata", JSON.stringify(response.data.user));
            return response.data.user;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Login failed");
        }
    }
);

export const logout = createAsyncThunk("auth/logout", async () => {
    localStorage.removeItem("token");
    return null;
});

export const checkAuthStatus = createAsyncThunk(
    "auth/check",
    async (_, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("token");
            if (!token) return null;

            const response = await api.get("/verify-token", {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data.user;
        } catch (error) {
            localStorage.removeItem("token");
            return rejectWithValue("Error checking auth status");
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            state.isLoggedIn = true;
        },
        clearUser: (state) => {
            state.user = null;
            state.isLoggedIn = false;
        },
    },
    extraReducers: (builder) => {
        builder
            // Register user
            .addCase(register.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.loading = false;
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            // Login user
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.loading = false;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            // Logout user
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
                state.isLoggedIn = false;
            })
            // Check auth status
            .addCase(checkAuthStatus.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = !!action.payload;
            })
            .addCase(checkAuthStatus.rejected, (state) => {
                state.user = null;
                state.isLoggedIn = false;
            });
    },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
