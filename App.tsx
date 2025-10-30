import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/home.jsx'
import MenuScreen from './screens/menu.jsx'
import { Image } from 'react-native';
import CategoryDetailScreen from './screens/detailofcategory.jsx'
import { SafeAreaView } from 'react-native-safe-area-context';
import Cart from './screens/cart.jsx';
import Settings from './screens/settings.jsx';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}

function MenuStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Menu" component={MenuScreen} options={{headerShown:false}}/>
      <Stack.Screen name="CategoryDetail" component={CategoryDetailScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Settings} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HomeTab" component={HomeStack} options={{
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => (
              <Image
                source={require('./assets/app/home.png')}
                style={{
                  width: size,
                  height: size,
                  tintColor: color,
                  opacity: focused ? 1 : 0.6
                }}
                resizeMode="contain"
              />
            ),
            tabBarLabel: 'Home'
          }}/>
        <Tab.Screen name="MenuTab" component={MenuStack} options={{
            headerShown:false, 
            tabBarIcon: ({ color, size, focused }) => (
              <Image
                source={require('./assets/app/burger.png')}
                style={{
                  width: size,
                  height: size,
                  tintColor: color,
                  opacity: focused ? 1 : 0.6
                }}
                resizeMode="contain"
              />
            ),
            tabBarLabel: 'Menu'
          }}/>
          <Tab.Screen name="CartTab" component={Cart} options={{
            headerShown:false, 
            tabBarIcon: ({ color, size, focused }) => (
              <Image
                source={require('./assets/app/cart.png')}
                style={{
                  width: size,
                  height: size,
                  tintColor: color,
                  opacity: focused ? 1 : 0.6
                }}
                resizeMode="contain"
              />
            ),
            tabBarLabel: 'Cart'
          }}/>
          <Tab.Screen name="SettingsTab" component={SettingsStack} options={{
            headerShown:false, 
            tabBarIcon: ({ color, size, focused }) => (
              <Image
                source={require('./assets/app/profile.png')}
                style={{
                  width: size,
                  height: size,
                  tintColor: color,
                  opacity: focused ? 1 : 0.6
                }}
                resizeMode="contain"
              />
            ),
            tabBarLabel: 'Profile'
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
}