import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
// import useAuth from "./useAuth";


const useAdminPay = () => {
    
    const axiosSecure = useAxiosSecure();
    // const {user}= useAuth();
    const { refetch, data: payment = []} =useQuery({
        queryKey: ['payment'],
        queryFn: async () =>{
            const res =await axiosSecure.get(`/payment`)
            return res.data;
        }
    })
    return [payment,refetch]
    
};

export default useAdminPay;