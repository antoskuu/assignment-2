import { Pressable, TouchableOpacity, View, Dimensions } from 'react-native';


import Card from './card.jsx'

const ITEM_SPACING = 30;


const CardGrid = ({ items = [], onItemPress }) => {
return (
    <View 
    style={{
        flex:1,
        flexDirection: "row",           
        flexWrap: 'wrap',
        justifyContent: 'center' ,
        alignContent: 'flex-start',

} }

>
    {items.map(item => (
        <Pressable
          key={item.id || item.title}
          onPress={() => onItemPress?.(item)}
          style={{
            margin: ITEM_SPACING / 2,

      }}
        >
          <Card {...item} />
        </Pressable>
    ))}
    </View>
);
};


export default CardGrid;