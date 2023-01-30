import React from "react";
import { View } from "react-native";
import { Categories } from "../components/Categories";
import { Courses } from "../components/Courses";
import { GettingUser } from "../components/GettingUser";


export const HomeScreen = (props: any) => {

    const { username='Hugo', courses, categories } = props;
    return (<>
    <View style={{position:'absolute',zIndex:-1}}>
    </View>
    <View style={{ flex: 1,margin:5, backgroundColor:'#97d3cd',borderRadius:15}}>
        <GettingUser username={username} />
        <Courses courses={courses} />
        <Categories categories={categories} />
        <Categories categories={categories} />
    </View>
    </>
    );
};