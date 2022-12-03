import { StatusBar } from "expo-status-bar"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import AllMessagesScreen from "./screens/AllMessagesScreen"
import ConversationScreen from "./screens/ConversationScreen"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <StatusBar style="dark"/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="All Messages" component={AllMessagesScreen}/>
          <Stack.Screen name="Conversation" component={ConversationScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}