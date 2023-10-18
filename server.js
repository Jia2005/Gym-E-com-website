const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs'); // Set EJS as the template engine

// Initialize cart and wishlist arrays
const cart = [];
const wishlist = [];

app.use(express.json()); 
app.get('/', (req, res) => {
    const product = "Nike Men's Grey Jersey"; // Replace this with the actual product data
    res.render('index', { pageTitle: 'Product Description', product: product });
});
app.get('/protein', (req, res) => {
    const product = "Bigmuscles Protein Powder"; // Replace this with the actual product data
    res.render('protein', { pageTitle: 'Product Description', product: product });
});

app.get('/dumbell', (req, res) => {
    const product = "Dumbell"; // Replace this with the actual product data
    res.render('dumbell', { pageTitle: 'Product Description', product: product });
});

app.get('/cart', (req, res) => {
  // Render the cart.ejs file when accessing the /cart URL
  res.render('cart', { pageTitle: 'My Cart', cart });
});

app.get('/wish', (req, res) => {
  // Render the wishlist.ejs template with wishlist data
  res.render('wishlist', { pageTitle: 'My Wishlist', wishlist });
});

app.get('/addToCart', (req, res) => {
    const product = {
        name: 'Nike Men\'s Grey Jersey', // Product name
        quantity: 1, // Initial quantity
    };

    // Check if the product is already in the cart
    const itemIndex = cart.findIndex(item => item.name === product.name);

    if (itemIndex === -1) {
        // Item not in cart, add it
        cart.push(product);
    } else {
        // Item already in cart, increment quantity (limited to 5)
        if (cart[itemIndex].quantity < 5) {
            cart[itemIndex].quantity++;
        } else {
            // Limit reached
            res.status(400).json({ message: 'Sorry, this item is out of stock.' });
            return;
        }
    }

    // Send a success response with a message
    res.json({ message: 'Product added to cart.' });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
