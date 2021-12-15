import React ,{useState}from 'react';
import { View ,StyleSheet,Image,Text} from 'react-native';
import {DrawerContentScrollView,DrawerItem} from "@react-navigation/drawer";
import ListItemSperator from './ListItemSperator';
import LogoutModal from './LogoutModal';
import AntDesign from "react-native-vector-icons/AntDesign";
import colors from '../config/colors';

function DrawerContent({navigation,...props}) {

    const [ ModalVisible, setModalVisible ] = useState(false);
    return (
       <View style={styles.container}>
         <View style={styles.view}>
            <Image source={require("../assets/jacket.jpg")} style={styles.image}/>
            <Text>Hiii</Text>
         </View>
         <DrawerContentScrollView  { ...props }>
        <LogoutModal
          onBack={ () => setModalVisible(false) }
          onPress={ () => {setModalVisible(false);}}
          visible={ ModalVisible }
        />

        <DrawerItem
          label="Home"
          onPress={ () => {
            navigation.navigate('HomeScreen');
          } }
        />
        <ListItemSperator />
        <DrawerItem
          label="Logout"
          onPress={ () => {
            navigation.closeDrawer();
            setModalVisible(true);
          } }
        />
        <ListItemSperator />
      </DrawerContentScrollView>
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    view: {
        backgroundColor: colors.secondary,
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center"
    },

    image: {
        width: 100,
        height: 100,
        borderRadius: 50
    }
});

export default DrawerContent;