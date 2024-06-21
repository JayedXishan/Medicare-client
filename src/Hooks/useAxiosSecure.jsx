import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../FirebaseProvider/FirebaseProvider';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
    const { logout } = useContext(AuthContext);
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        return Promise.reject(error);
    })

    // interceptors 401 and 403 status
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
        if(status === 401){
            await logout();
            navigate('/login');
        }
        return Promise.reject(error);
    })
    return axiosSecure;
};

export default useAxiosSecure;