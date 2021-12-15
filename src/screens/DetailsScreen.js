import React from "react";
import {View,Text,StyleSheet,Image} from "react-native";
import colors from "../config/colors";


function DetailsScreen({route}) {

   const item = route.params;
    
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={item.image}/>
            <View style={styles.details}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.email}>{item.email}</Text>
              <Text style={styles.phone}>{item.phone}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: "center",
    },

    details: {
        alignItems: "center"
    },

    image: {
        width: 150,
        height: 150,
        borderRadius: 75
    },

    name: {
        fontSize: 40,
        color: colors.dark,
        marginVertical: 5
    },

    email: {
       fontSize: 30,
       color: colors.dark,
       marginVertical: 5
    },

    phone: {
        fontSize: 20,
        color: colors.dark
    },

    description: {
        fontSize: 20,
        textAlign: "center"
    }
});

export default DetailsScreen;