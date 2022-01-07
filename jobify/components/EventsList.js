import React from 'react';
import {Text,ScrollView,View,Image,StyleSheet} from 'react-native';
import CardItem from './CardItem';

const styles = StyleSheet.create({
 container: {
     marginTop:200
 }
})

const  EventList = () => {
  return (
 <View style={styles.container} >
 <ScrollView >
  <CardItem/>
  <CardItem/>
  <CardItem/>
  <CardItem/>
  <CardItem/>
  <CardItem/>
  </ScrollView>
 </View>

  );
}


export default EventList ;
