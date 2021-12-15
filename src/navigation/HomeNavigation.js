import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AntDesign from "react-native-vector-icons/AntDesign";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import AddEmpScreen from "../screens/AddEmpScreen";
import { NavigationContainer } from "@react-navigation/native";


const Stack = createStackNavigator();

const AppNavigation = ({navigation}) => {
    return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen}/>
        <Stack.Screen name="AddEmpScreen" component={AddEmpScreen}/>
    </Stack.Navigator>
    );
}

export default AppNavigation;
//<Stack.Screen name="DetailsScreen" component={DetailsScreen}/>
  //      <Stack.Screen name="AddEmpScreen" component={AddEmpScreen}/>