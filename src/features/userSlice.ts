import { createSlice, PayloadAction  } from "@reduxjs/toolkit";

interface User{
    uid: string;
    username: string | null;
    // isLoading: boolean;
    email: string | null;
}

interface UserState {
    userName: string | null,
    isLoading:boolean,
    email: string | null;
}

const initialState: UserState = {
    userName: null,
    isLoading:true,
    email: null,
}


export const userSlice = createSlice({
    name: "user", // 슬라이스 이름을 "insname"으로 설정하면, 생성된 액션 타입은 다음과 같습니다
    // insname/loginUser
    // insname/logoutUser
    // insname/setLoading
    initialState, // 사용자 정보
    reducers: { // 함수 정의
        loginUser: (state, action:PayloadAction<User>) => {
            state.userName = action.payload.username;
            state.email = action.payload.email
        },
        logoutUser : state => {
            state.userName = null;
            state.email = null;
        },
        setLoading : (state, action:PayloadAction<boolean>) =>{
            state.isLoading = action.payload
        }
    }
});

export const {loginUser, logoutUser, setLoading} = userSlice.actions;

export default userSlice.reducer;