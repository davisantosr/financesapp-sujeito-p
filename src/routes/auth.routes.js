 import React from 'react';
 import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

 const AuthStack = createStackNavigator();
 
 const AuthRoutes = () => {
   return (
     <AuthStack.Navigator>
       <AuthStack.Screen 
        options={{
          headerShown: false
        }}
        name={'SignIn'} 
        component={SignIn}
        
        />
        <AuthStack.Screen 
        options={{
          headerStyle: {
            backgroundColor: '#131313',
            borderBottomWidth: 1,
            borderBottomColor: '#00b94a'
          },
          headerTintColor: '#fff',
          headerTitle: 'Voltar'
        }}
        name={'SignUp'} 
        component={SignUp}
        
        />
     </AuthStack.Navigator>
   )
 }
 
 export default AuthRoutes;
 