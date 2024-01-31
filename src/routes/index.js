import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import Registrations from '../pages/Registrations'
import Main from '../pages/Main'
import Lots from '../pages/Lots'
import Weighing from '../pages/Weighing'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false}}
            />

            <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false}}
            />

            <Stack.Screen
            name="Registrations"
            component={Registrations}
            options={{ headerShown: false}}
            />

            <Stack.Screen
            name="Main"
            component={Main}
            options={{ headerShown: false}}
            />

            <Stack.Screen
            name="Lots"
            component={Lots}
            options={{ headerShown: false}}
            />
            
            <Stack.Screen
            name="Weighing"
            component={Weighing}
            options={{ headerShown: false}}
            />
            

        </Stack.Navigator>
    )
}