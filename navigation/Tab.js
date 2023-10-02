import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Dining from "../screens/Dining";
import { MaterialCommunityIcons,FontAwesome } from "@expo/vector-icons";
import { View, Text } from "react-native";
const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarActiveTintColor: "#235347", tabBarLabelStyle:{fontSize:15} }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome
              name="home"
              size={24}
              color= {focused ? '#235347' : 'grey'}
            />
          ),
          
        }}
      />
      <Tab.Screen name="Dining" component={Dining} options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="silverware-variant"
              size={24}
              color= {focused ? '#235347' : 'grey'}
            />
          ),
          
        }}/>
    </Tab.Navigator>
  );
};

export default TabNav;
