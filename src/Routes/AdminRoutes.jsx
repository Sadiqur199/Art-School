import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { ColorRing } from 'react-loader-spinner'; 
import UseAdmin from '../Hooks/UseAdmin';

const AdminRoutes = ({children}) => {
  const { user, loading } = useContext(AuthContext)
  const [isAdmin , isAdminLoading] = UseAdmin()

  const location = useLocation()


  if (loading || isAdminLoading) {
    return <div className='ml-[800px]'>
      <ColorRing
        visible={true}
        height="90"
        width="90"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </div>
  }


  if (user && isAdmin) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>
};

export default AdminRoutes;