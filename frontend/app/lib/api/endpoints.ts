const API = {
    AUTH: {
        LOGIN: '/auth/login'
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
    },
};

export default API;