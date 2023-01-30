import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { globalStyles } from '../themes/global';

export const Category = (props: any) => {
    const { title='Arte', icon = 'car-outline'} = props
    return (
      <View style={styles.containerCategory}>
        <Icon name={icon} size={32} color='grey' />
        <Text style={globalStyles.contentText}>{title}</Text>
      </View>
    );
};

const styles = StyleSheet.create({
    containerCategory:{ 
        flexDirection:'row',
        alignItems: 'center', 
        borderRadius:20,
        backgroundColor:'#f8f8f2',
        margin:10,
        padding:5
    }
})