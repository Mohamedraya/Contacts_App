import React, { useState } from 'react';
import { Text, Pressable, View ,StyleSheet} from "react-native";
import Modal from 'react-native-modal';



function LogoutModal ({visible,onBack,onPress}) {
    return (
        <Modal transparent={true} animationIn={"slideInUp"} animationInTiming={500}
        animationOutTiming={ 500 } isVisible={ visible }backdropOpacity={ 0.4 }
        onBackdropPress={ onBack }>

            <View style={styles.mainView}>
               <View style={styles.modalView}>
                   <Text>Do You Want TO exit</Text>
                   <Pressable style={styles.button} onPress={onPress}>
                      <Text>Logout</Text>
                   </Pressable>
               </View>
            </View>

        </Modal>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    modalView: {
        backgroundColor: "white",
        borderRadius: 5,
        padding: 35,
        paddingHorizontal: 50,
        alignItems: "center",
        
    },

    button: {
        borderRadius: 2,
        padding: 10,
        elevation: 2,
    },
});

export default LogoutModal;