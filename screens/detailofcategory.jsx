import React, {useState} from "react";
import styles from '../styles/styles.jsx';
import CardGrid from '../components/cardGrid.jsx'
import data from '../database/dummydata.js'
import { StatusBar, StyleSheet, useColorScheme, View, Text, Button, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CategoryDetailScreen = ({route}) => {
    const { categoryTitle, items } = route.params;
    const navigation = useNavigation();
    
    return (
    <ScrollView>
    <View style={{backgroundColor: '#fff7c8ff'}}>
    <TouchableOpacity 
            onPress={() => navigation.goBack()}
            style={{
                padding: 10,
                margin: 10,
                alignSelf: 'flex-start'
            }}
        >
            <Text style={{ fontSize: 24 }}>←</Text>
        </TouchableOpacity>        
        <Text style={styles.text}>{categoryTitle}</Text>
        
        <CardGrid items={items} />
    </View>


        <ImageBackground 
          source={require('../assets/restaurant.jpg')}
          style={styles.backgroundImage}
          resizeMode='cover'
        ></ImageBackground>
</ScrollView>
    )


}


export default CategoryDetailScreen;

// const [meatFilter, setMeatFilter] = useState('beef');
    
//     const filteredBurgers = burgerItems.filter(b => b.meat === meatFilter);


// <View style={{ flexDirection: 'row', paddingHorizontal: 10, marginBottom: 8 }}>
//         <TouchableOpacity
//             onPress={() => setMeatFilter('beef')}
//             style={{
//             backgroundColor: meatFilter === 'beef' ? '#c52a59ff' : '#59595993',
//             paddingVertical: 6,
//             paddingHorizontal: 14,
//             borderRadius: 20,
//             marginRight: 8,
//             }}
//         >
//             <Text style={{ color: 'white', fontSize: 12 }}>Beef</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//             onPress={() => setMeatFilter('chicken')}
//             style={{
//             backgroundColor: meatFilter === 'chicken' ? '#c52a59ff' : '#59595993',
//             paddingVertical: 6,
//             paddingHorizontal: 14,
//             borderRadius: 20,
//             }}
//         >
//             <Text style={{ color: 'white', fontSize: 12 }}>Chicken</Text>
//         </TouchableOpacity>
//         </View>