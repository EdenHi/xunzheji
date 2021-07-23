import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import BtnRoute from "./BtnRoute"
import { My, Tour, Forum, Store, Home, Login, Register, FindPass } from "../pages/index"
import Ranking from '../Ranking';
import { startClock } from 'react-native-reanimated';
import luntan from '../components/danmu/Barrage';
import Chats from '../pages/chat/Chats';
import articel from '../pages/article/comment/article_detail'
const Stack = createStackNavigator();


export default function StackNav() {
    return (
        <Stack.Navigator headerMode="none" >            


            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="BtnRoute" component={BtnRoute} />
            <Stack.Screen name="MyScreen" component={My} />
            <Stack.Screen name="Tour" component={Tour} />
            <Stack.Screen name="Forum" component={Forum} />
            <Stack.Screen name="Store" component={Store} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="FindPass" component={FindPass} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Ranking" component={Ranking} />
            <Stack.Screen name="Chats" component={Chats} />
            <Stack.Screen name="luntan" component={luntan}/>
            <Stack.Screen name="articel" component={articel}/>
        </Stack.Navigator>
    )
}