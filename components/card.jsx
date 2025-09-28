import { StatusBar, StyleSheet, useColorScheme, View, Text, Button, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';




const Card = ({ title, image }) => {
    return(
    <View style={{width : 160, aspectRatio: 1, backgroundColor: 'white', borderRadius: 10, alignItems: "center", justifyContent:"flex-end"}}   >
        <Image source={image} style={{ width:120, height:120 }}/>
        <Text style={{fontWeight:900, fontSize:15, padding : 15}}>{title}</Text>
    </View>
)
};


export default Card;