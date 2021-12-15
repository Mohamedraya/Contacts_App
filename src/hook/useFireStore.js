/*import {useState,useEffect} from "react";
import {onSnapshot,collection} from "firebase/firestore";
import db from "../firebase/Firebase";

function useFireStore ()  {
   
    const [employees,setEmployees] = useState([]);

    useEffect(() => 
      onSnapshot(collection(db,"employees"),(snapshot) => 
    setEmployees(snapshot.docs.map((doc) => ({...doc.data(),id: doc.id})))
    ,[]));

    return employees;
}

export default useFireStore;*/