import React from "react";
//import AddEmpScreen from "./src/screens/AddEmpScreen";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "./src/navigation/DrawerNavigation"

function App () {

  return (
    <NavigationContainer>
      <DrawerNavigation/>
    </NavigationContainer>   
  );
}

export default App;