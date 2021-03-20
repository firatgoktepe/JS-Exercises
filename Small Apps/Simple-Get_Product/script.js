var ProductController = (function(){

    //Add Product

    var collection = [];
    const addProduct = product => {
        collection.push(product);
    }

    // Remove Product
    
    const removeProduct = product => {

        let index = collection.indexOf(product);
        if (index >= 0) {
            collection.splice(index,1);
        }
        
    }

    // Get Product 

    const getProduct = () => {
        return collection;
    }

    return{
        addProduct,
        removeProduct,
        getProduct
    }

})();

var products = [
    {name: "Samsung S7", price: 2000 },
    {name: "Samsung S8", price: 3000 },
    {name: "Samsung S9", price: 4000 }   
];

ProductController.addProduct(products[0]);
ProductController.addProduct(products[1]);
ProductController.addProduct(products[2]);

//console.log(ProductController.getProduct());

let container = document.querySelector('.container');
let ul_products = document.querySelector('.products');

let html = `

    <li class="product">${products[0].name}</li>
    <li class="product">${products[1].name}</li>
    <li class="product">${products[2].name}</li>

`;
 

ul_products.innerHTML = html;

