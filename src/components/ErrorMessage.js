import React from "react";
import {Text,StyleSheet} from "react-native";


function ErrorMessage({error}) {
    return (
        <Text style={styles.text}>{error}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        color: "red",
        fontSize: 20,
        marginVertical: 16,
        marginHorizontal: 36
    }
});

export default ErrorMessage;