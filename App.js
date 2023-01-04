import { StatusBar } from "expo-status-bar"
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
            options={{
              title: 'MESSAGES',
              headerStyle: {
                backgroundColor: '#242424',
              },
              headerTitleStyle: {
                color: '#fff',
              },
            }}
          />

          <Stack.Screen
            name="Conversation"
            component={ConversationScreen}
            options={({route}) => ({
                title: route.params.contactName,
                headerStyle: {
                  backgroundColor: '#242424',
                },
                headerTitleStyle: {
                  color: '#fff',
                  fontSize: 16,
                },
                headerBackTitleVisible: false,
            })}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}