import { StatusBar, StyleSheet, useColorScheme, View, Text, Button, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';




const Card = ({ title, image }) => {
    const imageSource = typeof image === 'string' ? { uri: image } : image;
    
    return(
    <View style={{width : 120, aspectRatio: 1, backgroundColor: 'white', borderRadius: 10, alignItems: "center", justifyContent:"flex-end"}}   >
        <Image source={imageSource} style={{ margin : -20, width:100, height:100 }}/>
        <Text style={{fontWeight:900, fontSize:15, margin : 8}}>{title}</Text>
    </View>
)
};


export default Card;