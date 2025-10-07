import React, {useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';

// Wanted to try adding a gradient overlay
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles/styles.jsx';
import CardGrid from '../components/cardGrid.jsx'
import data from '../database/dummydata.js'

const HomeScreen = ({navigation}) => {
    const burgerItems = data.burgers
    const drinkItems = data.drinks
  const [meatFilter, setMeatFilter] = useState('beef'); 

  const filteredBurgers = burgerItems.filter(b => b.meat === meatFilter);
    return (
<ScrollView style={styles.ScrollView} contentContainerStyle={styles.scrollContent}>
        <ImageBackground
          source={require('../assets/burger.jpg')}
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
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <Text style={styles.text}>The best burgers in town! - Trondheim</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.mainButton} onPress={() => navigation.navigate('MenuTab')} >
                <Text style={{color: 'white'}}>Menu</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.secondaryButton} onPress={() => {}} >
                <Text style={{color: 'white'}}>Reservations</Text>
              </TouchableOpacity>
            </View>
            <Text style={{color: '#ffffff'}}>Address: 123 Burger Veg, Trondheim</Text>
          </View>
        <LinearGradient
            colors={['transparent', '#fff7c8ff']}
            style={styles.gradientOverlayBottom}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
          />
        </ImageBackground>
        
        <View style={{height: 280, backgroundColor: '#fff7c8ff'}}>
          <Text style={styles.text}>Burgers</Text>
          <View style={{ flexDirection: 'row', paddingHorizontal: 10, marginBottom: 8 }}>
            <TouchableOpacity
              onPress={() => setMeatFilter('beef')}
              style={{
                backgroundColor: meatFilter === 'beef' ? '#c52a59ff' : '#59595993',
                paddingVertical: 6,
                paddingHorizontal: 14,
                borderRadius: 20,
                marginRight: 8,
              }}
            >
              <Text style={{ color: 'white', fontSize: 12 }}>Beef</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setMeatFilter('chicken')}
              style={{
                backgroundColor: meatFilter === 'chicken' ? '#c52a59ff' : '#59595993',
                paddingVertical: 6,
                paddingHorizontal: 14,
                borderRadius: 20,
              }}
            >
              <Text style={{ color: 'white', fontSize: 12 }}>Chicken</Text>
            </TouchableOpacity>
          </View>
          <CardGrid items={filteredBurgers} />
        </View>
        

        <ImageBackground 
          source={require('../assets/restaurant.jpg')}
          style={styles.backgroundImage}
          resizeMode='cover'
        ></ImageBackground>
      </ScrollView>

    )


}


export default HomeScreen;



