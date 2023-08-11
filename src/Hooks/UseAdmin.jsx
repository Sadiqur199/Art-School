import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './UseAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const UseAdmin = () => {
const {user} = useContext(AuthContext);
const [axiosSecure] = useAxiosSecure()
const {data: isAdmin , isLoading:isAdminLoading} = useQuery({
  queryKey:['isAdmin', user?.email],
  queryFn: async () => {
    const res = await axiosSecure.get(`/users/admin/${user?.email}`)
    console.log('isAdmin Response',res)
    return res.data.admin
  }
})

return [isAdmin,isAdminLoading]

};

export default UseAdmin;