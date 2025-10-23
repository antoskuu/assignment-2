import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { API_BASE } from './config.js';



const CART_ID_KEY = 'cartId';

const getCartId = async () => {
    try {
        let cartId = await AsyncStorage.getItem(CART_ID_KEY);
        if (!cartId) {
            cartId = uuidv4();
            await AsyncStorage.setItem(CART_ID_KEY, cartId);
        }
        return cartId;
    } catch (e) {
        console.warn('Storage error in getCartId', e);
        return null;
    }
};


export const addItemToCart = async (itemId, title) => {

    const cartId = await getCartId();
    const response = await fetch (`${API_BASE}/cart?id=${itemId}&title=${title}&user_id=${cartId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    console.log('Response status for adding item to cart:', response.status);
    parseInt(response.status) >= 400 && console.warn('Error adding item to cart:', response.status);

    return response.json();
};

export const getCartItems = async () => {
    const cartId = await getCartId();
    console.log('Fetching cart items for cart ID:', cartId);
    console.log('API URL:', `${API_BASE}/cart?user_id=${cartId}`);
    const response = await fetch(`${API_BASE}/cart?user_id=${cartId}`);
    const data = await response.json();
    return data;
};



export const delItemFromCart = async (itemId) => {
    const cartId = await getCartId();
    const response = await fetch (`${API_BASE}/cart?id=${itemId}&user_id=${cartId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    console.log('Response status for deleting item from cart:', response.status);
    parseInt(response.status) >= 400 && console.warn('Error deleting item from cart:', response.status);

    return response.json();
};