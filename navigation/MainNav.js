import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
// import Home from "../screens/Home";
import TabNav from "./Tab";
import Search from "../screens/Search";
const MainNav =()=>{
  const Stack = createStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='Welcome' component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={SignUp} />
      <Stack.Screen name="Tab" component={TabNav} />
      <Stack.Screen name='Search' component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default MainNav;