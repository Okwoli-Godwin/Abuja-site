import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { AdminData } from "./Allinterfaces";

const initialState = {
    currentUser: {} as any | null
}

const ReduxState = createSlice({
    name: "CUR",
    initialState,
    reducers: {
        Admin: (state, { payload }: PayloadAction<AdminData>) => {
            state.currentUser = payload
        },

        logoutAdmin: (state) => {
            state.currentUser = null
        }
    }
});

export const { Admin } = ReduxState.actions;

export default ReduxState.reducer;