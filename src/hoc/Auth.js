import React from 'react';
import jwt_decode from "jwt-decode";

export const Auth = (Component) => {
    const isAdmin =  () =>{
            const userAccessToken =  localStorage.getItem('UserAccessToken');
            const User = userAccessToken ? jwt_decode(userAccessToken) : null; 
            if (User !== null && User?.user?.username === 'SHEOKAND') {
                return true;
            }else{
                return false;
            }
    }
   const ModifiedComp =  (props) =>{
        const checkAdmin = isAdmin();
        return <Component {...props} isAdmin={checkAdmin} />
   } 
  return ModifiedComp
  
}
