import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
// import useAuth from "./useAuth";


const useBanner = () => {
    
    const axiosSecure = useAxiosSecure();
    // const {user}= useAuth();
    const { refetch, data: banner = []} =useQuery({
        queryKey: ['banner'],
        queryFn: async () =>{
            const res =await axiosSecure.get(`/addbanner`)
            return res.data;
        }
    })
    return [banner,refetch]
    
};

export default useBanner;