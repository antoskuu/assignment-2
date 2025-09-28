import { View, Text, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useState } from 'react';

// Wanted to try adding a gradient overlay
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles/styles.jsx';
import Card from '../components/card.jsx'
import CardGrid from '../components/cardGrid.jsx'

function HomePage() {
  const burgerItems = [
    { id: 1, title: 'Classic Beef', type: 'beef', image: require('../assets/beefburger.png') },
    { id: 2, title: 'Cheese Beef', type: 'beef', image: require('../assets/beefburger.png') },
    { id: 3, title: 'BBQ Beef', type: 'beef', image: require('../assets/beefburger.png') },
    { id: 4, title: 'Crispy Chicken', type: 'chicken', image: require('../assets/burger2.png') },
    { id: 5, title: 'Spicy Chicken', type: 'chicken', image: require('../assets/burger2.png') },
    { id: 6, title: 'Teriyaki Chicken', type: 'chicken', image: require('../assets/burger2.png') },
    { id: 7, title: 'Mayo Chicken', type: 'chicken', image: require('../assets/burger2.png') },

  ];

  const [meatFilter, setMeatFilter] = useState('beef'); 

  const filteredBurgers = burgerItems.filter(b => b.type === meatFilter);

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
        <View style={{height: 250, backgroundColor: '#fff7c8ff'}}>
          <Text style={styles.text}>Drinks</Text>
          
            <CardGrid
            items={[
              { id: 1, title: 'Coke' , image: require('../assets/drink.png') },
              { id: 2, title: 'Coke Zero' , image: require('../assets/drink.png') },
              { id: 3, title: 'Solo' , image: require('../assets/drink.png') },
              { id: 4, title: 'Ice Tea' , image: require('../assets/drink.png') }
            ]} />
          
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