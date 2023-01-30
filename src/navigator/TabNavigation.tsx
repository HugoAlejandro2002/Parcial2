import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { MyCourse } from '../screens/MyCourse';
import { WishList } from '../screens/WishList';
import Icon from 'react-native-vector-icons/Ionicons';
import { Account } from '../screens/Account';
import { StackNavigation } from './StackNavigation';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
    return (
        
        <Tab.Navigator
        screenOptions = {{
                headerShown: false,
            }}
            initialRouteName="Home">
            <Tab.Screen 
                name="Explore" 
                component={StackNavigation}
                options={{
                    tabBarIcon: ({focused, color, size}) => {
                      let iconName: string;
                      if (focused) {
                        iconName = 'compass-sharp';
                      } else {
                        iconName = 'compass-sharp';
                      }
                      return <Icon name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#97d3cd',
                    tabBarInactiveTintColor: 'grey',
                  }} />
            <Tab.Screen 
                name="My Course" 
                component={MyCourse}
                options={{
                    tabBarIcon: ({focused, color, size}) => {
                      let iconName: string;
                      if (focused) {
                        iconName = 'play-circle-outline';
                      } else {
                        iconName = 'play-circle-outline';
                      }
                      return <Icon name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#97d3cd',
                    tabBarInactiveTintColor: 'grey',
                  }}
            
            />
            <Tab.Screen 
                name="WishList"
                component={WishList}
                options={{
                tabBarIcon: ({focused, color, size}) => {
                      let iconName: string;
                      if (focused) {
                        iconName = 'heart-outline';
                      } else {
                        iconName = 'heart-outline';
                      }
                      return <Icon name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#97d3cd',
                    tabBarInactiveTintColor: 'grey',
                  }}/>
            <Tab.Screen 
                name="Account" 
                component={Account}
                options={{
                    tabBarIcon: ({focused, color, size}) => {
                          let iconName: string;
                          if (focused) {
                            iconName = 'person-outline';
                          } else {
                            iconName = 'person-outline';
                          }
                          return <Icon name={iconName} size={size} color={color} />;
                        },
                        tabBarActiveTintColor: '#97d3cd',
                        tabBarInactiveTintColor: 'grey',
                      }}  
                />
        </Tab.Navigator>
    );
};