import { API_BASE } from './config.js';


export const getCategories = async () => {

        console.log("fetching categories");
        const response = await fetch(`${API_BASE}/categories`);
        const data = await response.json();
        
        const categoriesWithImageUrls = data.map(category => ({
            ...category,
            image: `${API_BASE}/images/${category.image}`
        }));
        return categoriesWithImageUrls;
    };

export const getProductsWithImageUrls = (products) => {
    const itemsWithImageUrls = products.map(item => ({
        ...item,
        image: `${API_BASE}/images/${item.image}`
    }));
    return itemsWithImageUrls;
};