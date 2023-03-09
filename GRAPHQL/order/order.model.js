const orders = [
    {
        date: '2005-05-06',
        subtotal: 90.22,
        items: [
            {
                product: {
                    id: 'blue blue',
                    description: 'blue Show',
                    price: 23
                }, 
                quantity: 4
            }
        ]
    }
]

function getOrders(){
    return orders;
}

module.exports = {
    getOrders
}