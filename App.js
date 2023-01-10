import { StatusBar } from "expo-status-bar"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

import AllMessagesScreen from "./screens/AllMessagesScreen"
import ConversationScreen from "./screens/ConversationScreen"
import DashboardScreen from './screens/DashboardScreen'
import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from './screens/RegisterScreen'
import ContactsScreen from './screens/ContactsScreen'
import NewMessage from "./screens/NewMessage"

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="AllMessages"
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: '#242424',
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 18,
        },
        tabBarIcon: ({ focused, color }) => {
          let iconName

          if (route.name === 'AllMessages') {
            iconName = focused ? 'chat-bubble' : 'chat-bubble-outline'
          } else if (route.name === 'Home') {
            iconName = focused ? 'view-dashboard' : 'view-dashboard-outline'
          } else if (route.name === 'Contacts') {
            iconName = focused ? 'account-multiple' : 'account-multiple-outline'
          }

          if (route.name === 'AllMessages') {
            return <MaterialIcons name={iconName} size={24} color={color} />
          } else if (route.name === 'Home' || route.name === 'Contacts') {
            return <MaterialCommunityIcons name={iconName} size={24} color={color} />
          }
        },
        tabBarActiveTintColor: '#d1ff17',
        tabBarInactiveTintColor: '#727272',
        tabBarStyle: {
          backgroundColor: '#242424',
          height: 80,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 14
        }
      })}
    >

      <Tab.Screen
        name="Home"
        component={DashboardScreen}
        options={{ title: 'Dashboard' }}
      />
      <Tab.Screen
        name="AllMessages"
        component={AllMessagesScreen}
        options={{ title: 'Messages' }}
      />
      <Tab.Screen
        name="Contacts"
        component={ContactsScreen}
        options={{ title: 'Contacts' }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  
  const stackScreenOptions = {
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
          initialRouteName="Tabs"
          screenOptions={stackScreenOptions}
        >

          <Stack.Screen 
            name='Tabs'
            component={Tabs}
            options={{ headerShown: false }}
          />

          {/* <Stack.Screen
            name="AllMessages"
            component={AllMessagesScreen} 
            options={{ title: 'Messages' }}
          /> */}

          <Stack.Screen
            name="Conversation"
            component={ConversationScreen}
            // options={({route}) => ({
            //   title: route.params.contactName,
            //   headerBackTitleVisible: false,
            // })}
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

          <Stack.Screen
            name="NewMessage"
            component={NewMessage}
            options={{ title: 'New Message'}}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}