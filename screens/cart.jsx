import React, {useState} from "react";
import { useEffect } from "react";
import styles from '../styles/styles.jsx';
import CardGrid from '../components/cardGrid.jsx'
import { StatusBar, StyleSheet, useColorScheme, View, Text, Button, ScrollView, TouchableOpacity, ImageBackground, Image, Platform } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import {getCategories, getProductsWithImageUrls} from '../services/productsApi.js';
import { getCartItems } from "../services/cartApi.js";
import {delItemFromCart} from '../services/cartApi.js';



const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const fetchCartItems = async () => {
            const data = await getCartItems();
            console.log('Fetched cart items:', data);
            const productsWithImages = await getProductsWithImageUrls(data);
            setCartItems(productsWithImages);
        };
    
    useFocusEffect(
        React.useCallback(() => {
            fetchCartItems();
        }, [])
    );

    const handleDeleteItem = async (itemId) => {
        await delItemFromCart(itemId);
        await fetchCartItems(); 
    };

    return (
        <ScrollView>
            <View style={{backgroundColor: '#fff7c8ff'}}>
                <View style={{ flexDirection: 'row', paddingHorizontal: 10, marginBottom: 8 }}>
                </View>
                <Text style={styles.text}>Cart</Text>
                <View style={{ flexDirection: 'row', paddingHorizontal: 10, marginBottom: 8 }}>
                </View>
                <CardGrid cart_bool={true} items={cartItems} cart_function={handleDeleteItem} cart_text={'Delete'}/>
            </View>
            
            <ImageBackground 
                source={require('../assets/app/restaurant.jpg')}
                style={styles.backgroundImage}
                resizeMode='cover'
            />
        </ScrollView>
    )
}
export default Cart;