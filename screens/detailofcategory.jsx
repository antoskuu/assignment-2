import React, {useState} from "react";
import styles from '../styles/styles.jsx';
import CardGrid from '../components/cardGrid.jsx'
import { StatusBar, StyleSheet, useColorScheme, View, Text, Button, ScrollView, TouchableOpacity, ImageBackground, Image, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CategoryDetailScreen = ({route}) => {
    const { categoryTitle, items } = route.params;
    const navigation = useNavigation();
    const API_BASE = Platform.OS === 'android' ? 'http://10.0.2.2:3000' : 'http://localhost:3000';
    
    const itemsWithImageUrls = items.map(item => ({
        ...item,
        image: `${API_BASE}/${item.image}`
    }));
    console.log(itemsWithImageUrls);

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
        
        <CardGrid items={itemsWithImageUrls} />
    </View>


        <ImageBackground 
          source={require('../assets/app/restaurant.jpg')}
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