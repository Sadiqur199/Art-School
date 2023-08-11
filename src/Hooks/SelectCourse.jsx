import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './UseAxiosSecure';

const SelectCourse = () => {

  const { user , loading} = useContext(AuthContext)
  const token = localStorage.getItem('access-token')
  const [axiosSecure] = useAxiosSecure();
  const { isLoading, refetch, data: select = [] } = useQuery({
    queryKey: ['select', user?.email],
    enabled: !loading,
    queryFn: async () =>{
      const response = await axiosSecure(`/select?email=${user?.email}`)
      return response.data
    }
  })

  return [select, refetch]

};

export default SelectCourse;