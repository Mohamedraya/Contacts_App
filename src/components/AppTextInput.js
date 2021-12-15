import React from 'react';
import { View ,TextInput,StyleSheet} from 'react-native';
import colors from "../config/colors";
import ErrorMessage from './ErrorMessage';


function AppTextInput ({placeholder,...otherProps}) {
    return (
      
        <TextInput style={styles.input} placeholder={placeholder} {...otherProps}/>
          
    );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: colors.light,
        borderRadius: 25,
        borderWidth: 1,
        padding: 15,
        width: "100%",
        marginVertical: 15
        
    }
})

export default AppTextInput;

