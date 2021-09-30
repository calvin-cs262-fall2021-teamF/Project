import React from 'react';
import { Image,StyleSheet, Text, View } from 'react-native';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style = {{color:'#36C8EC',fontSize:50,alignItems:'center'}}> 
      About Us</Text>
      <Text style={{alignItem:"right",fontSize:20}}>
        Diente members:Peter Peng, Sean Ebenmelu, Sharon Velpula, Beinan Xu, Richmond Yevudza
      </Text>
      <Image source={{uri:"https://www.grantspassschool.com/wp-content/uploads/2018/10/preschoolkidsbanner2.jpg"}} style ={{width:490,height:215}}/>

    </View>  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    justifyContent: 'top',
    alignItems: 'center',
    

  },
});