import React from 'react';
import {Text,ScrollView,View,Image,StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    card_template:{
        flex: 1,
        width: 250,
        height: 250,
        marginBottom :25
      },
      card_image: {
        width: 250,
        height: 250,
        borderRadius : 10
      },
      card_title: {
        position: 'absolute',
        left: 0,
        top: 250
      }
})

const  CardItem = () => {
  return (
 <View style={styles.card_template}>
    <Image
      style={styles.card_image}
      source={{uri: 'https://wallpapercave.com/wp/wp2349397.jpg'}}/>
    <Text style={styles.card_title}>Some Text</Text>
 </View>

  );
}


export default CardItem ;
