const initialStateApi = {
    url: '',
    loading: false,
    error: false,
};

export const apiReducer = (state = initialStateApi, action) => {
    switch (action.type) {
        case 'REQUESTED_DOG':
            return {
                url: '',
                loading: true,
                error: false,
            };
        case 'REQUESTED_DOG_SUCCEEDED':
            return {
                url: action.url,
                loading: false,
                error: false,
            };
        case 'REQUESTED_DOG_FAILED':
            return {
                url: '',
                loading: false,
                error: true,
            };
        case 'REQUESTED_CAT':
            return {
                url: '',
                loading: true,
                error: false,
            };
        case 'REQUESTED_CAT_SUCCEEDED':
            return {
                url: action.url,
                loading: false,
                error: false,
            };
        case 'REQUESTED_CAT_FAILED':
            return {
                url: '',
                loading: false,
                error: true,
            };
    }
    return state;
}