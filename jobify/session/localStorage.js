import {
    AsyncStorage,
  } from "react-native";

const Id = async ()=>{
    try 
    {    
     const user = await AsyncStorage.get("user");
      return user
    }catch(err) 
    {
        console.log(err);
    }
}
export default Id