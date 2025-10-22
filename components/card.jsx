import { StatusBar, StyleSheet, useColorScheme, View, Text, Button, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';

function AddToCart({cart_bool}) {
    if (cart_bool) {
        return (
            <TouchableOpacity style={{ backgroundColor: '#ffcc00', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, marginBottom: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Add to Cart</Text>
            </TouchableOpacity>
        );
    }
}

const Card = ({ cart_bool, title, image }) => {
    const imageSource = typeof image === 'string' ? { uri: image } : image;
    
    return(
    <View style={{width : 120, aspectRatio: 1, backgroundColor: 'white', borderRadius: 10, alignItems: "center", justifyContent:"flex-end"}}   >
        <Image source={imageSource} style={{ margin : -20, width:100, height:100 }}/>
        <Text style={{fontWeight:900, fontSize:15, margin : 8}}>{title}</Text>

        <AddToCart cart_bool={cart_bool} />
    </View>
)
};


export default Card;