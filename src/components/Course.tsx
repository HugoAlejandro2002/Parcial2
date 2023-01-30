import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../themes/global";


export const Course = (props: any) => {
    const { title='ARte', teacher='Alexis', price='100$', image=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png` } = props;
    return (
      <View style={styles.containerCard}>
        <Image source={{uri:image}} style={styles.imageStyle} />
        <View style={{justifyContent:'flex-start'}}>
          <Text style={{ fontSize: 20, color:'grey', fontWeight:'bold'}}>{title}</Text>
          <Text style={globalStyles.contentText}>{teacher}</Text>
        </View>
        <View style={styles.detailsPrice}>
          <Text style={ globalStyles.contentText}>{price}</Text>
          <Text style={{ fontSize: 16, color: 'green' }}>Best seller</Text>
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    containerCard:{
      borderRadius:15, 
      margin: 5, 
      backgroundColor:'white', 
      padding:5,
      width:200,
    },
    detailsPrice:{
      flexDirection:'row', 
      justifyContent:'space-between'
    },
    imageStyle:{ 
      width: 150, 
      height: 150,
       alignSelf:'flex-end'
    }
    
})