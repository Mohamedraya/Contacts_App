import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import ModalWindow from "../components/ModalWindow";
import AppNavigation from "./HomeNavigation";
import colors from "../config/colors";
import DrawerContent from "../components/DrawerContent";

const drawer = createDrawerNavigator();


const DrawerNavigation = () => {
    return (
     <drawer.Navigator screenOptions={{headerTintColor: "white"}} drawerContent={(props) => <DrawerContent {...props}/>}>
        <drawer.Screen name="Home"   component={AppNavigation} 
                       options={{title: "",drawerLabel: "Home",headerStyle:{backgroundColor: colors.secondary}}}/>
        <drawer.Screen name="LogOut" component={ModalWindow} />
     </drawer.Navigator>
    );
   
}

export default DrawerNavigation;