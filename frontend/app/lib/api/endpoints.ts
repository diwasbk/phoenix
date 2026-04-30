const API = {
    AUTH: {
        LOGIN: '/auth/login'
    },
    ADMISSION: {
        APPLY: '/admission/apply',
        GET_ALL: '/admission/all',
        UPDATE_BY_ID: (admissionId: string) => `/admission/update/${admissionId}`,
        DELETE_BY_ID: (admissionId: string) => `/admission/delete/${admissionId}`
    },
    INQUIRY: {
        SEND: "/inquiry/submit",
        GET_ALL: "/inquiry/all"
    }
};

export default API;