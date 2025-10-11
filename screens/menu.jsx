import React, {useState} from "react";
import styles from '../styles/styles.jsx';
import CardGrid from '../components/cardGrid.jsx'
import data from '../database/dummydata.js'
import { StatusBar, StyleSheet, useColorScheme, View, Text, Button, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MenuScreen = () => {
    const navigation = useNavigation();
    
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
                <CardGrid items={data.categories} onItemPress={handleCategoryPress}/>
            </View>
            
            <ImageBackground 
                source={require('../assets/restaurant.jpg')}
                style={styles.backgroundImage}
                resizeMode='cover'
            />
        </ScrollView>
    )
}

export default MenuScreen;