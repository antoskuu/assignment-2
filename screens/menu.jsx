import React, {useState} from "react";
import { useEffect } from "react";
import styles from '../styles/styles.jsx';
import CardGrid from '../components/cardGrid.jsx'
import { StatusBar, StyleSheet, useColorScheme, View, Text, Button, ScrollView, TouchableOpacity, ImageBackground, Image, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';




const MenuScreen = () => {
    const navigation = useNavigation();
    const [categories, setCategories] = useState([]);
    const API_BASE = Platform.OS === 'android' ? 'http://10.0.2.2:3000' : 'http://localhost:3000';

    useEffect(() => {
        const getCategories = async () => {
            console.log("fetching categories");
            const response = await fetch(`${API_BASE}/categories`);
            const data = await response.json();
            
            const categoriesWithImageUrls = data.map(category => ({
                ...category,
                image: `${API_BASE}/${category.image}`
            }));
            
            setCategories(categoriesWithImageUrls);
        };
        getCategories();
    }, []);

    const handleCategoryPress = (category) => {
        console.log("clicked")
        navigation.navigate('CategoryDetail', {
            categoryTitle: category.title,
            items: category.items
        });
    };

    
    return (
        <ScrollView>
            <View style={{backgroundColor: '#fff7c8ff'}}>
                <View style={{ flexDirection: 'row', paddingHorizontal: 10, marginBottom: 8 }}>
                </View>
                <Text style={styles.text}>Categories</Text>
                <View style={{ flexDirection: 'row', paddingHorizontal: 10, marginBottom: 8 }}>
                </View>
                <CardGrid items={categories} onItemPress={handleCategoryPress}/>
            </View>
            
            <ImageBackground 
                source={require('../assets/app/restaurant.jpg')}
                style={styles.backgroundImage}
                resizeMode='cover'
            />
        </ScrollView>
    )
}

export default MenuScreen;