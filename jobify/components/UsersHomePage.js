import { StatusBar } from 'expo-status-bar';
import { Button,Image, StyleSheet, Text, TextInput, View,ScrollView,FlatList } from 'react-native';


const UsersHomePage=(props)=> {
    return (
        <View style={styles.users}>
            <Text>{props.user.firstName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    users:{
        flex:1,
        width: 350,
        height: 84,
        marginTop:10,
        borderWidth:2,
        backgroundColor: "white",
        opacity:0.8,
        borderRadius:17
      },
      text:{
        color:'#00BFFF',
        
      }
      
});
export default UsersHomePage