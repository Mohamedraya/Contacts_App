import React ,{useEffect,useState}from 'react';
import { Platform,FlatList,View,SafeAreaView,StyleSheet,StatusBar,ActivityIndicator} from 'react-native';
import ListItemSperator from './ListItemSperator';
import ListItem from './ListItem';
import AppButton from './AppButton';
import { useNavigation } from '@react-navigation/core';
//import { getDatabase, ref,onValue} from "firebase/database";
import db from "../firebase/FirebaseConfig";
import {  collection,query,getDocs,limit,startAfter,orderBy} from 'firebase/firestore';
import colors from '../config/colors';



const information = [
    {
      name: "mohamed",
      email: "ali@gmau",
      phone: "015486787",
      image: require("../assets/jacket.jpg")
    },
  
    {
      name: "Ahmed",
      email: "ali@gmau",
      phone: "01597564",
      image: require("../assets/jacket.jpg")
    },

    {
      name: "Ahmed",
      email: "ali@gmau",
      phone: "01597560",
      image: require("../assets/jacket.jpg")
    },

    {
      name: "Ahmed",
      email: "ali@gmau",
      phone: "01597577",
      image: require("../assets/jacket.jpg")
    }
  ]


function EmployeesList () {
  
    const navigation = useNavigation();
    const [employees,setEmployees] = useState([]);
    const [loading,setLoading] = useState(false);
    const [lastVisible,setlastVisible] = useState({});
    const [refresh,setRefresh] = useState(false);
    const [page,setPage] = useState(1);
  
    
    useEffect(() => {
      getData();
           
    } , [page]);

    const getData = async () => {
      
      if (page === 1) {
        const data = await getDocs(query(collection(db,"employees")),
        orderBy("name",limit(6)));
        console.log(data);
        setlastVisible(data.docs[data.docs.length - 1]);
        setEmployees(data.docs.map(doc =>( {...doc.data(),id: doc.id})));
        
      }else if (page > 1) {
        setLoading(true);
        const data = await getDocs(query(collection(db,"employees"),
        orderBy("name",limit(6),startAfter(lastVisible))))
        setLoading(false);
      }
      
    }

       
    const renderLoader = () => {
      if(!loading) return null;
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#aaa"/>
        </View>
      );
    };


    return (
      
       <SafeAreaView style={styles.container}> 
        <FlatList data={employees} keyExtractor={item => {item.phone}} ItemSeparatorComponent={ListItemSperator} 
                  onEndReached={() => {setPage(page + 1)}} ListFooterComponent={renderLoader}
                  //refreshing={refresh} onRefresh={setRefresh(true)}                
                renderItem={({item}) => {<ListItem name={item.name} email={item.email} phone={item.phone} 
                                                  image={item.image} onPress={() =>navigation.navigate("DetailsScreen",item) }/>}}/>
        <AppButton title="Add" style={styles.addButton} onPress={() => {navigation.navigate("AddEmpScreen")}}/>
       </SafeAreaView>      
                                                        
    );
}

//ListFooterComponent={renderLoader(load={loading})} onEndReached={getData()} onEndReachedThreshold={0}

const styles = StyleSheet.create({
    container: {
        padding: Platform.OS === "android" ? StatusBar.currentHeight: 0,
        flex: 1
    },

    addButton: {
      width: 60,
      height: 60,
      backgroundColor: colors.secondary,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: "center",
      alignSelf: "flex-end",
      marginRight: 25
    },

    loader: {
      marginVertical: 16,
      alignItems: "center"
    }
});

export default EmployeesList;