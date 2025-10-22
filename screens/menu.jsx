import React, {useState} from "react";
import { useEffect } from "react";
import styles from '../styles/styles.jsx';
import CardGrid from '../components/cardGrid.jsx'
import { StatusBar, StyleSheet, useColorScheme, View, Text, Button, ScrollView, TouchableOpacity, ImageBackground, Image, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {getCategories} from '../services/productsApi.js';



const MenuScreen = () => {
    const navigation = useNavigation();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
    const fetchCategories = async () => {
        const data = await getCategories();
        setCategories(data);
    };
    fetchCategories();
}, []);

    const handleCategoryPress = (category) => {
        console.log("clicked")
        navigation.navigate('CategoryDetail', {
            categoryTitle: category.title,
            categoryItems: category.items,
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
                <CardGrid cart_bool={false} items={categories} onItemPress={handleCategoryPress}/>
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