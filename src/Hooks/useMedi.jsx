import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

import { useContext } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";


const useMedi = () => {
    
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const {data: category = [] } = useQuery({
        queryKey: ["category", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/category/seller/${user.email}`);
            return res.data;
        }
    })
    return [category]
    
};

export default useMedi;