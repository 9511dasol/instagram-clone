import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";


const rootReducer = combineReducers({
    user: userSlice,
});

export type Rootstate = ReturnType<typeof rootReducer>;


export default rootReducer;