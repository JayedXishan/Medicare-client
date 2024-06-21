import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
// import useAuth from "./useAuth";


const useUser = () => {
    
    const axiosSecure = useAxiosSecure();
    // const {user}= useAuth();
    const { refetch, data: usr = []} =useQuery({
        queryKey: ['usr'],
        queryFn: async () =>{
            const res =await axiosSecure.get(`/users`)
            return res.data;
        }
    })
    return [usr,refetch]
    
};

export default useUser;