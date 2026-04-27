import { createSlice } from "@reduxjs/toolkit";
import { STORAGE_KEYS } from "../../Constants";
import { Storage } from "../../Utils";
const StoredUser = Storage.getItem(STORAGE_KEYS.USER)
    ? JSON.parse(Storage.getItem(STORAGE_KEYS.USER)!)
    : null;

const initialState = {
    token: StoredUser?.token || null,
    user: StoredUser || null,
    role: StoredUser?.role || null,
    isAuthenticated: !!StoredUser?.token,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLogin: (state, action) => {
            const data = action.payload;

            if (!data?.token) return;

            state.token = data.token;
            state.user = data;
            state.role = data.role;
            state.isAuthenticated = true;

            Storage.setItem(STORAGE_KEYS.TOKEN, data.token);
            Storage.setItem(STORAGE_KEYS.USER, JSON.stringify(data));
        },

        setSignOut(state) {
            state.token = null;
            state.user = null;
            state.role = null;
            state.isAuthenticated = false;

            Storage.clear();
            window.location.reload();
        },
    },
});

export const { setSignOut, setLogin } = authSlice.actions;
export default authSlice.reducer;