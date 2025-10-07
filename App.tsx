import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/home.jsx'
import MenuScreen from './screens/menu.jsx'
import { Image } from 'react-native';

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
      <Stack.Screen name="Settings" component={MenuScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen name="HomeTab" component={HomeStack}  options={{
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => (
              <Image
                source={require('./assets/home.png')}
                style={{
                  width: size,
                  height: size,
                  tintColor: color,
                  // petit effet focus optionnel:
                  opacity: focused ? 1 : 0.6
                }}
                resizeMode="contain"
              />
            ),
            tabBarLabel: 'Home'
          }}/>
        <Tab.Screen name="MenuTab" component={MenuStack} options={{headerShown:false, tabBarIcon: ({ color, size, focused }) => (
              <Image
                source={require('./assets/burger.png')}
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
      </Tab.Navigator>
    </NavigationContainer>
  );
}
