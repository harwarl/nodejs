const productModel = require('./product.model');

module.exports = {
    Query: {
        products: () => {
            return productModel
                .getProducts();
        },

        productsByPrice: (_, args) => {
            return productModel
                .getProductsByPrice(
                    args.min,
                    args.max
                );
        },

        productById: (_, args) => {
            return productModel
                .getProductById(args.id);
        }
    },

    Mutation: {
        addNewProduct: (_, args) => {
            return productModel
                .addNewProduct(
                    args.id,
                    args.description,
                    args.price
                );
        },
        
        addNewProductReview: (_, args) => {
            return productModel
                .addNewProductReview(
                    args.id,
                    args.rating,
                    args.comment
                )
        }
    }
}