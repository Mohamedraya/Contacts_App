import React from 'react';
import { StyleSheet ,View} from 'react-native';
import AppButton from './AppButton';
import Modal from "react-native-modal";
import colors from "../config/colors";


function ImageModal({onPress1,onPress2,onPress3,visible}) {
    return (
        <Modal transparent={true} animationIn={"slideInUp"} animationInTiming={500}
          animationOutTiming={ 500 } isVisible={ visible }backdropOpacity={ 0.4 }
           onBackdropPress={ onPress3 }>
         
         <View style={styles.container}>
            <AppButton title="Open Camera" style={styles.btn} onPress={onPress1}/>
            <AppButton title="Open Gallery" style={styles.btn} onPress={onPress2}/>
            <AppButton title="cancel" style={styles.btn} onPress={onPress3}/>
         </View>
        
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 5,
        padding: 35,
        paddingHorizontal: 50,
        alignItems: "center",
    },

    btn: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: 15,
        marginVertical: 10
    }
})

export default ImageModal;