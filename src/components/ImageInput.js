import React ,{useState}from 'react';
import {View,StyleSheet,TouchableWithoutFeedback, Image} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import colors from '../config/colors';
import ImageModal from './ImageModal';



function ImageInput({onPress,source}) {

  /*  return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={onPress}>
       
         <Image source={{uri: source}} style={styles.img}/>
                       
         </TouchableWithoutFeedback>       
     </View> 
      
    );*/
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
          {!source && <AntDesign name="camerao" size={40} color={colors.medium}/>}
          {source  && <Image source={{uri: source}} style={styles.image}/>}
        </View>
      </TouchableWithoutFeedback>
    );
}
////{source ?      : <AntDesign name="camerao" size={40} color={colors.medium}/>}
const styles = StyleSheet.create({
  /* container: {  
       justifyContent: "center",
       alignItems: "center",
       alignContent: "center"      
   },

   img: {
     width: 100,
     height: 100,
     borderRadius: 50
   },

   imgee: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.secondary
  },*/

  container: {
    backgroundColor: colors.secondary,
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
},

image: {
    width: "100%",
    height: "100%"
}

});

export default ImageInput;