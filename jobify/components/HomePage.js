import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
const HomePage=()=> {
  var [offers , setoffers] = useState([])
  var [users,setusers] = useState([])
 useEffect( () =>{
   const URL = `${server.Ip}/events/`
   const URL1 = `${server.Ip}/workers/`
  axios.get(URL).then((response)=>{
    setoffers(response.data)
  }).catch(err=>{
    console.log(err)
  })
  axios.get(URL1).then((res)=>{
    setusers(res.data)
  }).catch(err=>{
    console.log(err)
  })
 
},[])




  return (
    <View>
        <Text>
            Home Pageee
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default HomePage