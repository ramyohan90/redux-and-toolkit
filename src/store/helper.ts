
export interface AuthState {
    user: string;
    isLoggedIn: boolean;
    token: string | null;
}

export const AuthStateInit: AuthState = {
    user: 'N/A',
    isLoggedIn: false,
    token: null
}
