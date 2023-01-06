import { StatusBar } from "expo-status-bar"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import AllMessagesScreen from "./screens/AllMessagesScreen"
import ConversationScreen from "./screens/ConversationScreen"
import DashboardScreen from './screens/DashboardScreen'
import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from './screens/RegisterScreen'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const TabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen name="AllMessages" component={AllMessagesScreen} />
      <Tab.Screen name="Home" component={DashboardScreen} />
    </Tab.Navigator>
  )
}

export default function App() {
  
  const globalScreenOptions = {
    headerStyle: {
      backgroundColor: '#242424',
    },
    headerTitleStyle: {
      color: '#fff',
      fontSize: 18,
    },
  }

  return (
    <>
      <StatusBar style="light"/>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Register"
          screenOptions={globalScreenOptions}
        >

          <Stack.Screen 
            name='TabBar'
            component={TabBar}
          />

          <Stack.Screen
            name="AllMessages"
            component={AllMessagesScreen} 
            options={{ title: 'Messages' }}
          />

          <Stack.Screen
            name="Conversation"
            component={ConversationScreen}
            options={({route}) => ({
              title: route.params.contactName,
              headerBackTitleVisible: false,
            })}
          />

          <Stack.Screen
            name="Login"
            component={LoginScreen} 
            options={{ title: 'Login' }}
          />

          <Stack.Screen
            name="Register"
            component={RegisterScreen} 
            options={{ title: 'Register' }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}