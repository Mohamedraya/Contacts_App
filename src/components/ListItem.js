import React from "react";
import {View,Text,StyleSheet,Image,TouchableOpacity} from "react-native";


function ListItem ({name,email,phone,image,onPress}) {

    return (
        <TouchableOpacity onPress={onPress}>
           <View style={styles.container}>
              <Image style={styles.image} source={{uri: image}}/>
              <View style={styles.detailsContainer}>
                 <Text>Name</Text>
                 <Text>Email</Text>
                 <Text>Phone</Text>
              </View>
              <View style={styles.detailsContainer}>
                 <Text>{name}</Text>
                 <Text>{email}</Text>
                 <Text>{phone}</Text>
              </View>
           </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        alignItems: "center"
    },

    image: {
        width: 70,
        height: 70,
        borderRadius: 35
    },

    detailsContainer: {
        //flex: 1,
        marginHorizontal: 10,
        //justifyContent: "center"
    }
})

export default ListItem;
