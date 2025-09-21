import { View, Text, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';

// Wanted to try adding a gradient overlay
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles/styles.jsx';


function HomePage() {
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
              <TouchableOpacity style={styles.mainButton} onPress={() => {}} >
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
        
        <View style={{height: 150, backgroundColor: '#fff7c8ff'}}>
          <Text style={styles.text}>Come !</Text>
        </View>

        <ImageBackground 
          source={require('../assets/restaurant.jpg')}
          style={styles.backgroundImage}
          resizeMode='cover'
        ></ImageBackground>
      </ScrollView>
  )
}


export default HomePage;