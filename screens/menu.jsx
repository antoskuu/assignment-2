import React, {useState} from "react";
import styles from '../styles/styles.jsx';
import CardGrid from '../components/cardGrid.jsx'
import data from '../database/dummydata.js'
import { StatusBar, StyleSheet, useColorScheme, View, Text, Button, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';

const MenuScreen = ({navigation}) => {
      const burgerItems = data.burgers
      const [meatFilter, setMeatFilter] = useState('beef'); 
    
      const filteredBurgers = burgerItems.filter(b => b.meat === meatFilter);
    
    return (
    <ScrollView>
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
</ScrollView>
    )


}


export default MenuScreen;