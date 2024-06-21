import React, { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../FirebaseProvider/FirebaseProvider';
import { useQuery } from '@tanstack/react-query';

const useSeller = () => {
    const {user} =useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const {data: isSeller , isPending: isSellerLoading} = useQuery({
        queryKey: [user?.email, 'isSeller'],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/users/seller/${user.email}`);
            console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isSeller ,isSellerLoading]
};

export default useSeller;