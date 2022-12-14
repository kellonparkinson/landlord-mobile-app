import { StatusBar } from "expo-status-bar"
import { SafeAreaView } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import AllMessagesScreen from "./screens/AllMessagesScreen"
import ConversationScreen from "./screens/ConversationScreen"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <StatusBar style="light"/>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AllMessages">

          <Stack.Screen
            name="AllMessages"
            component={AllMessagesScreen} 
            options={{title: 'MESSAGES',
              headerStyle: {backgroundColor: '#2b2b2b'},
              headerTitleStyle: {color: '#fff'} }}
          />

          <Stack.Screen name="Conversation" component={ConversationScreen}/>

        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}