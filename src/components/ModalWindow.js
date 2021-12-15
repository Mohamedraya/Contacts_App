import React ,{useState}from "react";
import {View,StyleSheet,Modal,Button,Text} from "react-native";
import colors from "../config/colors";


function ModalWindow() {
    const [modalVisible, setModalVisible] = useState(false);
    return (
       <View style={styles.mainContainer}>
           <Button title="Open" onPress={() => setModalVisible(true)}/>
           <Modal transparent visible={modalVisible} >
            <View style={styles.modal}>
             <View style={styles.modalContainer}>
               <Text>Are You Sure you want to exit?</Text>
             </View>
        </View>
    </Modal>        
       </View>
    );
}

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    modal: {
        flex: 1,
        backgroundColor: colors.primary,
        justifyContent : "center",
        alignItems: "center"
    },

    modalContainer: {
        width: "80%",
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20
    }
});

export default ModalWindow;