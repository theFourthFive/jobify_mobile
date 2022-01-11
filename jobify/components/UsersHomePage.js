import { StatusBar } from 'expo-status-bar';
import { Button,Image, StyleSheet, Text, TextInput, View,ScrollView,FlatList } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings'

const UsersHomePage=(props)=> {
    return (
        <View style={styles.users}>
            <View style={styles.user}>
                <Image style={styles.img} source={{ uri: props.user.imageUrl }}></Image>
                <View style={styles.userr}>
                    <Text>{props.user.firstName} {props.user.LastName}</Text>
                    <Text>Adress.....</Text>
                </View>
                    <AirbnbRating style={styles.star} count={5} size={25} showRating={false} startingValue={1}  ratingColor='#f94368' ratingBackgroundColor='#f9b313' type='custom' />
            </View>
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
      },
      img:{
          width:70,
          height:80,
          borderRadius:15
      },
      user:{
          flex:1,
          flexDirection:"row",
          alignItems:"center",
      },
      userr:{
        flex:1,
        flexDirection:"column",
        marginLeft:15
      },
      
      
});
export default UsersHomePage