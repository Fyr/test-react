export const requestDog = () => {
    return { type: 'REQUESTED_DOG' }
};

export const requestDogSuccess = (data) => {
    return { type: 'REQUESTED_DOG_SUCCEEDED', url: data.message }
};

export const requestDogError = () => {
    return { type: 'REQUESTED_DOG_FAILED' }
};

export const fetchDog = () => {
    return { type: 'FETCHED_DOG' }
};

export const requestCat = () => {
    return { type: 'REQUESTED_CAT' }
};

export const requestCatSuccess = (data) => {
    return { type: 'REQUESTED_CAT_SUCCEEDED', url: data[0].url }
};

export const requestCatError = () => {
    return { type: 'REQUESTED_CAT_FAILED' }
};

export const fetchCat = () => {
    return { type: 'FETCHED_CAT' }
};