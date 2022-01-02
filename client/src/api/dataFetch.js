// api calls
import api from './users';

export const getUsers = async () => {
    try {
        const response = await api.get("/user");
        return response.data;
    } catch (err) {
        console.log(err.response)
    }
}

export const getAddresses = async () => {
    try {
        const response = await api.get("/address");
        return response.data; 
    } catch (err) {
        console.log(err.response)
    }
}