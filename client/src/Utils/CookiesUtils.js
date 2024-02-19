import Cookies from 'js-cookie';

// Functions for handling user data
export const setUserData = (userData) => {
    Cookies.set('userData', JSON.stringify(userData), { expires: 1, secure: true });
};

export const getUserData = () => {
    const userDataString = Cookies.get('userData');
    return userDataString ? JSON.parse(userDataString) : null;
};

export const removeUserData = () => {
    Cookies.remove('userData');
};

// Functions for handling tokens
export const setToken = (token) => {
    Cookies.set('customerJwtToken', token, { expires: 1, secure: true });
};

export const getToken = () => {
    return Cookies.get('customerJwtToken');
};

export const removeToken = () => {
    Cookies.remove('customerJwtToken');
};


export const setProfileBg = (color) => {
    Cookies.set('profileBg', color);
};

export const getProfileBg = (color) => {
    Cookies.get('profileBg');
};

