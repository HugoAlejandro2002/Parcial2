import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Course } from "./Course";
import { globalStyles } from "../themes/global";


export const Courses = (props: any) => {
    //const {courses} = props
    const courses = [ { id:'1',title:'Arte de Politicas', teacher:'Alexis', price:'100$', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png' }, {id:'2', title:'ARte', teacher:'Alexis', price:'100$', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'  }]
    return (
      <View>
        <View style={globalStyles.titleSection}>
          <Text style={globalStyles.titles}>Popular Courses</Text>
          <Text style={{ fontSize: 16 }}>See all</Text>
        </View>
        <FlatList
          data={courses}
          renderItem={({ item }) => <Course {...item} />}
          keyExtractor={(item) => item.id}
          horizontal
        />
      </View>
    );
  };
