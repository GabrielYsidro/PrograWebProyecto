const api = import.meta.env.VITE_API_URL;

export const postOrden = async ({ userId, totalAmount, status, shipping, payment, items }) => {

    const transformedItems = items.map(item => ({
    pokemon_id: item.id,
    quantity: item.quantity
    }));

    try {
        const res = await fetch(`${api}/order/create`, {
            method: 'POST',
            headers : {
                'Content-Type' : 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
            userId,
            totalAmount,
            status,
            shipping,
            payment,
            items: transformedItems
        })
        });
    } catch (err) {
        console.error('Error al enviar la orden:', err.message || err);
        throw err;
    }

}