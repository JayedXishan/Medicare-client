import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

import { useContext } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";


const useBuyerPay = () => {
    
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const {data: payment = [] } = useQuery({
        queryKey: ["payment", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment/buyer/${user.email}`);
            return res.data;
        }
    })
    return [payment]
    
};

export default useBuyerPay;