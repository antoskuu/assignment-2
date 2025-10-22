const getCartId = () => {
    let cartId = localStorage.getItem('cartId');
    if (!cartId) {
        cartId = crypto.randomUUID();
        localStorage.setItem('cartId', cartId);
    }
    return cartId;
};

export const addItemToCart = async (itemId) => {
    const cartId = getCartId();
    
    const response = await fetch (`${API_BASE}/cart?user_id=${cartId}&itemId=${itemId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.json();
};

export const getCartItems = async () => {
    const cartId = getCartId();
    const response = await fetch(`${API_BASE}/cart?user_id=${cartId}`);
    const data = await response.json();
    return data;
};