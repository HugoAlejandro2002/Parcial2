import React from "react";
import { ScrollView, Text, View } from "react-native";
import { globalStyles } from "../themes/global";
import { Category } from "./Category";



export const Categories = (props : any) => {
//    const { categories } = props
    const categories = [{ title:'Arte', icon : 'car-outline'},{ title:'Arte', icon : 'car-outline'}]
    return (
      <View>
        <View style={globalStyles.titleSection}>
          <Text style={globalStyles.titles}>Categories</Text>
          <Text style={{ fontSize: 16 }}>See all</Text>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ flexDirection: 'row' }}
        >
          {categories.map((category, index) => (
            <Category key={index} category={category} />
          ))}
        </ScrollView>
      </View>
    );
  };