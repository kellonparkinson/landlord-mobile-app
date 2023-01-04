import { StatusBar } from "expo-status-bar"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import AllMessagesScreen from "./screens/AllMessagesScreen"
import ConversationScreen from "./screens/ConversationScreen"
import DashboardScreen from './screens/DashboardScreen'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen name="Home" component={DashboardScreen} />
      <Tab.Screen name="AllMessages" component={AllMessagesScreen} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="light"/>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AllMessages" screenOptions={{headerShown: false}}>

          <Stack.Screen 
            name='Tabs'
            component={Tabs}
          />

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