/*import React ,{useState}from "react";
import {StyleSheet,StatusBar,ScrollView,Image,Text} from "react-native";
import {useForm} from "react-hook-form";
//import {setDoc} from "firebase/firestore";
//import db from "../firebase/Firebase";
import AppButton from "./AppButton";
import ImageInput from "./ImageInput";
import colors from "../config/colors";
import ControllerForm from "./ControllerForm";


function AddEmp(props) {
    const [imageUrl,setImageUrl] = useState();
    const {control,handleSubmit,formState:{errors},reset} = useForm();
    
    const submit = async () => {
        //const docRef = doc(db,"employees","employee001");
        //const payload = {name: "ali" , email: "ali@gmail.com", phone: "02365974",description: "ok lpo bvc fdsx rd"};
        //await setDoc(docRef,payload);
        console.log(errors);
        reset();
    }
    
    return (
       <ScrollView contentContainerStyle={styles.contianer}>
            
            <Image source={require("../assets/jacket.jpg")} style={styles.image}/>
            <ControllerForm name="name" control={control}  defaultValue=""
                            placeholder="Name" errors={errors}
                            rules={{required: (true,"Employee Name Is Required")}} 
                            //error={ errors.name ? errors.name.message : null }
                            />
            

            <ControllerForm name="email" control={control} defaultValue="" 
                            placeholder="email" errors={errors}
                            rules={{required: (true,"Email Is Required")}}
                            //error={ errors.name ? errors.name.message : null }
                            />


           <ControllerForm name="phone" control={control} defaultValue=""
                            placeholder="phone" errors={errors}
                            rules={{required: (true,"Phone Is Required")}}
                            //error={ errors.name ? errors.name.message : null }
                            />
                                                           
            
            <ControllerForm name="description" control={control} defaultValue="" 
                            placeholder="Description"  multiLine={true} numberOfLines={5}
                            rules={{required: (true,"Description Is Required")}}
                            errors={errors}
                            //error={ errors.name ? errors.name.message : null }
                            />

            
            
            <AppButton title="Add" style={styles.button} onPress={() => {handleSubmit(submit)}}/>
       </ScrollView>
    );
}

const styles = StyleSheet.create({
    contianer: {
        padding: StatusBar.currentHeight,
        alignItems: "center",       
    },

    image: {
        width: 80,
        height: 80,
        borderRadius: 35
    },

    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: 15,
        marginVertical: 10
     },
});


export default AddEmp;*/

import React ,{useState}from "react";
import { Text, View, TextInput, PermissionsAndroid, StyleSheet, StatusBar, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from '@react-navigation/core';
import ImageInput from "./ImageInput";
import AppButton from "./AppButton";
import colors from "../config/colors";
import { collection, addDoc } from "firebase/firestore";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { getStorage, ref ,uploadBytes ,getDownloadURL } from "firebase/storage";
import db from "../firebase/FirebaseConfig";
import ImageModal from "./ImageModal";



export default function AddEmp() {
  const { control, handleSubmit, formState: { errors }, getValues,reset } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      description: '',
      image: ""
    },
    mode: "onBlur"
  });

  const navigation = useNavigation();
  const [visible,setVisible] = useState(false);
  const [image,setImage] = useState();

  const onSubmit = async () => {

    const storage = getStorage();
    const response = await fetch(image);
    const blob = await response.blob();

    const imageName = image.substring(image.lastIndexOf('/') + 1);
    const storageRef = ref(storage,'image/' + imageName);
    const uploadTask = uploadBytes(storageRef, blob);
    
    uploadTask.then((snapshot) => {
      console.log('Uploaded ' + name);});

    getDownloadURL(snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
    });

    const docRef = (collection(db, "employees"));
    const payload = {
      name: getValues("name"),
      email: getValues("email"),
      phone: getValues("phone"),
      description: getValues("description"),
      image: downloadURL,
    };
    addDoc(docRef, payload);
    reset();
    navigation.goBack();
  }

 

  const openCamera = async () => {
  const grantedcamera = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.CAMERA,
    {
      title: "App Camera Permission",
      message:"App needs access to your camera ",
      buttonNeutral: "Ask Me Later",
      buttonNegative: "Cancel",
      buttonPositive: "OK"
    }
  );
  const grantedstorage = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    {
      title: "App Camera Permission",
      message:"App needs access to your camera ",
      buttonNeutral: "Ask Me Later",
      buttonNegative: "Cancel",
      buttonPositive: "OK"
    }
  );
  if (grantedcamera === PermissionsAndroid.RESULTS.GRANTED && grantedstorage ===  PermissionsAndroid.RESULTS.GRANTED) {
    console.log("Camera & storage permission given");
      
    var options = {
      mediaType: 'photo', //to allow only photo to select ...no video
      saveToPhotos:true,  //to store captured photo via camera to photos or else it will be stored in temp folders and will get deleted on temp clear
      includeBase64:false,
    };

    launchCamera (options, (res) => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
       // let source = res;
        // var resourcePath1 = source.assets[0].uri;
        const source =  res.assets.map(item => item.uri);
        //const source = { uri: res.uri };
        console.log('response', JSON.stringify(res));

         setImage(source.toString());       
         setVisible(false);
      }
    });


  } else {
    console.log("Camera permission denied");
  }};

const openGallery = () => {
  let options = {
    storageOption: {
      path: "images",
      mediaType: "photo"
    },
    includeBase64: true
  };
  launchImageLibrary(options,res => {
    console.log("response = ", res);
    if(res.didCancel) {
      console.log("user cansel image picker");
    }else if (res.error) {
      console.log("imagepicker error", res.error);
    }else if (res.customButton) {
      console.log("user",res.customButton);
    }else {
      const source =  res.assets.map(item => item.uri);
      setImage(source.toString());
      setVisible(false);
    }
  })
  
}

return (
    <ScrollView contentContainerStyle={styles.contianer}>
      <ImageModal visible={visible} onPress1={openCamera} onPress2={openGallery}
                  onPress3={() => {setVisible(false)}}/>
      <ImageInput onPress={() => {setVisible(true)}} source={image}/>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Name"
          />
        )}
        name="name"
      />
      {errors.name && <Text style={styles.txt}>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Email"
          />
        )}
        name="email"
      />

      {errors.email && <Text style={styles.txt}>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Phone"
          />
        )}
        name="phone"
      />
      {errors.phone && <Text style={styles.txt}>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Description"
            multiline
            numberOfLines={4}
          />
        )}
        name="description"
      />
      {errors.description && <Text style={styles.txt}>This is required.</Text>}

      <AppButton title="Submit" onPress={handleSubmit(onSubmit)} style={styles.button} />
    </ScrollView>
  );
        }

const styles = StyleSheet.create({

  contianer: {
    padding: StatusBar.currentHeight,
    alignItems: "center",
  },

  input: {
    backgroundColor: colors.light,
    borderRadius: 25,
    borderWidth: 1,
    padding: 15,
    width: "100%",
    marginVertical: 15
  },

  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 15,
    marginVertical: 10
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 35
  },

  txt: {
    color: "red"
  }
})

//<ImageInput imageUrl={imageUrl} onChangeImage={(uri) => setImageUrl(uri)}/>