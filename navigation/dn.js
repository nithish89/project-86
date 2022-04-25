import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "./screens/Feed";
import CreateStory from "./screens/CreateStory";

const Drawer = createDrawerNavigator();

const DrawerNavigatore = () =>
{
    return
    (
        <Drawer.Navigator>
            <Drawer.Screen name = "home" component = {TabNavigator}/>
            <Drawer.Screen name = "Profile" component = {Profile}/>

        </Drawer.Navigator>
    )
}