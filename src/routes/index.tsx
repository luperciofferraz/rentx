import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../hooks/auth'; 

import { AppTabRoutes } from './app.tab.routes';
import { AuthRoutes } from './auth.routes';

export function Routes() {

   const { user } = useAuth();

   return (

      <NavigationContainer>

        {
            console.log('UserId:' + user.id != 'undefined' ? user.name + ' - ' + user.id : user.id )
        }        
        
        { 
            user.id ? <AppTabRoutes /> : <AuthRoutes /> 
        }

      </NavigationContainer>

   );
}