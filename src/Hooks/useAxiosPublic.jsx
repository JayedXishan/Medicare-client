import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://final-assign-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;