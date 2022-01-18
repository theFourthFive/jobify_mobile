import { StatusBar } from 'expo-status-bar';
import { Button,Image, StyleSheet, Text, TextInput, View,ScrollView,FlatList } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings'
import colors from '../assets/colors/colors';

const UsersHomePage=(props)=> {
    return (
        <View style={styles.users}>
            <View style={styles.user}>
                <Image style={styles.img} source={{ uri: props.user.imageUrl }}></Image>
                <View style={styles.userr}>
                    <Text style={{color:colors.blue,fontWeight: 'bold',}}>{props.user.firstName} {props.user.LastName}</Text>
                    <Text style={{color:colors.blueDark}} >Adress.....</Text>
                </View>
                    <AirbnbRating style={styles.star} count={props.user.avgRating} isDisabled={true} onFinishRating={(x)=>{alert("thanks for your help" , x)}} reviews = {['Terrible', 'Bad', 'Okay', 'Good', 'Great']} defaultRating={9} size={25} showRating={true} startingValue={5}  ratingColor={colors.gold} ratingBackgroundColor={colors.gold} type='custom' />
                    
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
        marginLeft:15,
        
      },
      star:{
          color:colors.gold,
      }
      
      
});
export default UsersHomePage