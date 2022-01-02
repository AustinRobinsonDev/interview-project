// api calls
import api from './users';

export const getUsers = async () => {
    const response = await api.get("/user");
    return response.data;
}

export const getAddresses = async () => {
    const response = await api.get("/address");
    return response.data;
}