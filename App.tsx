import { StatusBar, StyleSheet, useColorScheme, View, Text, Button, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'light-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function HomePage() {
  return (
      <ScrollView style={styles.ScrollView} contentContainerStyle={styles.scrollContent}>
        <ImageBackground
          source={require('./burgouzz_illu.jpg')}
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
            <Image source={require('./burgouzz.png')} style={styles.logo} />
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
          source={require('./burgouzz_place.jpg')}
          style={styles.backgroundImage}
          resizeMode='cover'
        ></ImageBackground>
      </ScrollView>
  )
}


function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: safeAreaInsets.top }]}>
      <HomePage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homePage: {
    flex: 1, // 
  },
  text: {
    fontSize: 35,
    color: '#000000ff',
    textAlign: 'center',
    fontWeight: '900',
    paddingTop: 10,
  },
  buttonContainer : {
    flexDirection:'row',
    padding : 10,
    margin : 10
  },
  ScrollView : {
    flex: 1,
  },
  mainButton : {
    margin : 10,
    paddingTop : 15,
    paddingBottom : 15,
    paddingLeft : 25,
    paddingRight : 25,
    borderRadius : 50,
    backgroundColor : '#c52a59ff',
    color : 'white'
  },
  secondaryButton : {
    margin : 10,
    paddingTop : 15,
    paddingBottom : 15,
    paddingLeft : 25,
    paddingRight : 25,
    borderRadius : 50,
    borderColor : 'white',
    borderWidth : 2,
    backgroundColor : 'transparent',
  },
  scrollContent: {
    flexGrow: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 800,
    paddingVertical: 50,
    position: 'relative',
  },
  gradientOverlayTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '40%',
    zIndex: 1,
  },
  gradientOverlayBottom: {
    position: 'absolute',
    top: '75%',
    left: 0,
    right: 0,
    height: '40%', 
    zIndex: 1,
  },
  contentOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginTop: -250,
    marginBottom: 100,
  },
});

export default App;
