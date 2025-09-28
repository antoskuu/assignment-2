import { StatusBar, StyleSheet, useColorScheme, View, Text, Button, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';


import Card from './card.jsx'

const CardGrid = ({ items = []}) => {
return (
    <ScrollView 
    horizontal
    contentContainerStyle={{ paddingHorizontal: 10}}
    style={{flexDirection: "row" }}
    showsHorizontalScrollIndicator={false}
>
    {items.map(item => (
        <View
        key={item.id || item.title} style = {{margin:10}}
        >
        <Card {...item} />
        </View>
    ))}
    </ScrollView>
);
};


export default CardGrid;