const products = [
    {
        id: 'red blue',
        description: 'Red Show',
        price: 43,
        reviews: []
    },
    {
        id: 'blue blue',
        description: 'blue Show',
        price: 23,
        reviews: []
    }
]

function getProducts() {
    return products;
}

function getProductsByPrice(min, max) {
    return products.filter((product) => {
        return product.price >= min && product.price <= max;
    })
}

function getProductById(id){
    return products.find((product)=>{
        return product.id.toString() === id.toString();
    })
}

function addNewProduct(id, description, price){
    const newProduct = {
        id,
        description,
        price,
        reviews: []
    }
    products.push(newProduct);
    return newProduct;
}

function addNewProductReview(id, rating, comment){
    const matchedProduct = getProductById(id);
    if(matchedProduct){
        const newProductReview = {
            rating,
            comment
        }
        matchedProduct.reviews.push(newProductReview);
        return newProductReview;
    }
}

module.exports = {
    getProducts,
    getProductsByPrice,
    getProductById,
    addNewProduct,
    addNewProductReview
}