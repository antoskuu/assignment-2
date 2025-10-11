const burgerItems = [
    { id: 1, title: 'Classic Beef',  meat: 'beef', image: require('../assets/beefburger.png') },
    { id: 2, title: 'Cheese Beef', meat: 'beef', image: require('../assets/beefburger.png') },
    { id: 3, title: 'BBQ Beef', meat: 'beef', image: require('../assets/beefburger.png') },
    { id: 4, title: 'Crispy Chicken', meat: 'chicken', image: require('../assets/burger2.png') },
    { id: 5, title: 'Spicy Chicken', meat: 'chicken', image: require('../assets/burger2.png') },
    { id: 6, title: 'Teriyaki Chicken', meat: 'chicken', image: require('../assets/burger2.png') },
    { id: 7, title: 'Mayo Chicken', meat: 'chicken', image: require('../assets/burger2.png') },
];

const drinkItems = [
    { id: 1, title: 'Coke' , image: require('../assets/drink.png') },
    { id: 2, title: 'Coke Zero' , image: require('../assets/drink.png') },
    { id: 3, title: 'Solo' , image: require('../assets/solo.png') },
    { id: 4, title: 'Ice Tea' , image: require('../assets/icetea.png') },
];

const menusItems = [
    { id: 1, title: 'Beef Menu' , image: require('../assets/menu.png') },
    { id: 2, title: 'Spicy Chicken Menu' , image: require('../assets/menu.png') },
    { id: 3, title: 'BBQ Beef menu' , image: require('../assets/menu.png') },
];

export default {
    burgers: {
        categoryImage: require('../assets/beefburger.png'),
        items: burgerItems
    },

    drinks: {
        categoryImage: require('../assets/drink.png'),
        items: drinkItems
    },

    categories: [
        {
            id: 'menus',
            title: 'Menus',
            image: require('../assets/menu.png'),
            items: menusItems
        },{
            id: 'burgers',
            title: 'Burgers',
            image: require('../assets/beefburger.png'),
            items: burgerItems
        },
        {
            id: 'drinks',
            title: 'Drinks',
            image: require('../assets/drink.png'),
            items: drinkItems
        }
    ]
}