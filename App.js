import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from '@react-navigation/bottom-tabs';

export default function App()
{
    return
    (
        <NavigationContainer>
          <DrawerNavigator/>
        </NavigationContainer>        
    )
}