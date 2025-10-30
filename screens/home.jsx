import React, {useState, useCallback} from "react";
import { View, Text, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles/styles.jsx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';


const HomeScreen = ({navigation}) => {    
    const [name, setName] = useState('');
    const [city, setCity] = useState('');

    useFocusEffect(
        useCallback(() => {
            const load = async () => {
                const n = await AsyncStorage.getItem('settings_name');
                const c = await AsyncStorage.getItem('settings_city');
                if (n) setName(n);
                if (c) setCity(c);
            };
            load();
        }, [])
    );

    return (
<ScrollView style={styles.ScrollView} contentContainerStyle={styles.scrollContent}>
        <ImageBackground
          source={require('../assets/app/burger.jpg')}
          style={styles.backgroundImage}
          resizeMode='cover'
        >
          <LinearGradient
            colors={['#fff7c8ff', 'transparent']}
            style={styles.gradientOverlayTop}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
          />
          
          <View style={styles.contentOverlay}>
            <Image source={require('../assets/app/logo.png')} style={styles.logo} />
            {name ? <Text style={styles.text}>Hello, {name}</Text> : null}
            <Text style={styles.text}>The best burgers in town! - {city || 'Trondheim'}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.mainButton} onPress={() => navigation.navigate('MenuTab')} >
                <Text style={{color: 'white'}}>Menu</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.secondaryButton} onPress={() => {}} >
                <Text style={{color: 'white'}}>Reservations</Text>
              </TouchableOpacity>
            </View>
            <Text style={{color: '#ffffff'}}>Address: 123 Burger Veg, {city || 'Trondheim'}</Text>
          </View>
        <LinearGradient
            colors={['transparent', '#fff7c8ff']}
            style={styles.gradientOverlayBottom}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
          />
        </ImageBackground>
        
        <ImageBackground 
          source={require('../assets/app/restaurant.jpg')}
          style={styles.backgroundImage}
          resizeMode='cover'
        ></ImageBackground>
      </ScrollView>

    )


}


export default HomeScreen;



