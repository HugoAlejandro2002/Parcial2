import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeScreen } from "../screens/HomeScreen";


export const StackNavigation = () =>{
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            screenOptions = {{
                headerShown: false,
            }}
            initialRouteName="ScreenHome">
            
            <Stack.Screen name = 'ScreenHome' component={HomeScreen}/>           
        </Stack.Navigator>
    );
}