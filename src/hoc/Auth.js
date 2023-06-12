import React from 'react';

export const Auth = (Component) => {
    
    const user = {
        isAdmin:true,
        isBuyer:false
    };
   const ModifiedComp = (props) =>{
        return <Component {...props} user={user} isLogin={true} />
   } 
  return ModifiedComp
  
}
