import type { CommonDataType, MessageStatus } from "./Common";
// Form values (UI)
export interface LoginFormValues {
    email: string;
    password: string;
}

// API payload (backend)
export interface LoginPayload {
    userName: string;
    password: string;
}
export interface ChangePasswordPayload {
    email?: string;
    oldPassword?: string;
    newPassword?: string;
    confirmPassword?: string;
}
export interface User extends LoginPayload, CommonDataType {
    fullName: string;
    phoneNumber: string;
    profileImage: string;
    role: string;
}

export interface LoginResponse extends MessageStatus {
    data: {
        token: string;
        user: User;
    };
}


export interface UpdatePasswordPayload {
    email: string;
    newPassword: string;
    confirmPassword: string;
}

export interface UpdatePasswordFormValues {
    newPassword: string;
    confirmPassword: string;
}
