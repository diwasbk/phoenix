const API = {
    AUTH: {
        GOOGLE_LOGIN: "/auth/google/login",
        SIGN_UP: "/auth/signup",
        LOGIN: '/auth/login',
        CHANGE_PASSWORD: "/auth/change-password",
        REQUEST_PASSWORD_RESET_EMAIL: "/auth/request-password-reset-email",
        RESET_ACCOUNT_PASSWORD: "/auth/reset-account-password",
        ENABLE_2FA: "/auth/2fa/enable",
        VERIFY_2FA_SETUP: "/auth/2fa/verify/setup",
        VERIFY_2FA_LOGIN: "/auth/2fa/verify/login",
        DISABLE_2FA: "/auth/2fa/disable",
    },
    APPLICATION: {
        SUBMIT: '/application/submit',
        GET_ALL: '/application/all',
        GET_BY_ID: (applicationId: string) => `/application/${applicationId}`,
        UPDATE_BY_ID: (applicationId: string) => `/application/update/${applicationId}`,
        DELETE_BY_ID: (applicationId: string) => `/application/delete/${applicationId}`
    },
    INQUIRY: {
        SEND: "/inquiry/send",
        GET_ALL: "/inquiry/all",
        DELETE_BY_ID: (inquiryId: string) => `/inquiry/delete/${inquiryId}`
    }
};

export default API;