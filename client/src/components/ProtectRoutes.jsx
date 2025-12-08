import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import AuthenticatedLayout from './AuthenticatedLayout';
function ProtectRoutes({children}) {
    console.log(children)
    const accessToken = localStorage.getItem('accessToken');
    console.log(accessToken)
    if(!accessToken){
        return <Navigate to='/login'/>
    }
    // if(accessToken){
    //     return <Navigate to='/'/>
    // }
  return (
    <div>
      <AuthenticatedLayout>
      {children}
      </AuthenticatedLayout>

    </div>
  )
}

export default ProtectRoutes
