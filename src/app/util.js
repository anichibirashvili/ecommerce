import decode from 'jwt-decode';


export const getUser = () => {
    const token =localStorage.getItem("token");
    return token ? decode(token) : null;
};

export const isUserAdmin = () => {
    const token = getUser();
    return token ? token.role.includes("admin") : null;
};

export const checkTokenValidity = (token) => {
    const expirationDate = getUser() ? getUser().exp : null;
    const isExpired = expirationDate * 1000 < new Date().getTime();
    return isExpired;
  };