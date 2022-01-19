import { StatusBar } from 'expo-status-bar';
import { Button,Image, StyleSheet, Text, TextInput, View,ScrollView,FlatList } from 'react-native';
import moment from "moment";
import colors from '../assets/colors/colors';
const EventHomePage=(props)=> {
    return (
        <View style={styles.off}>
            <Image style={styles.image} source={{ uri: props.offer.imageUri }}></Image>
            <Text style={styles.text}>Type : {props.offer.eventName}</Text>
            <Text style={styles.text}>Place : {props.offer.location}</Text>
            <Text style={styles.text}>Posted At : {moment(props.offer.createdAt).fromNow()}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    off:{
        flex:1,
        margin:5,
        width: 209,
        height: 234,
        borderRadius:15,
      },
      image:{
        flex:1,
        width: 195,
        borderRadius:15,
      },
      text:{
        color:colors.blueDark,
        fontWeight: 'bold',
      }
      
});
export default EventHomePage




