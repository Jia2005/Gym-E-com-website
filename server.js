const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs'); // Set EJS as the template engine

// Initialize cart and wishlist arrays
const cart = [];
const wishlist = [];

app.get('/', (req, res) => {
  // Render the index.ejs file when accessing the root URL
  res.render('index', { pageTitle: 'Product Description' });
});

app.get('/cart', (req, res) => {
  // Render the cart.ejs file when accessing the /cart URL
  res.render('cart', { pageTitle: 'My Cart', cart });
});

app.get('/wish', (req, res) => {
  // Render the wishlist.ejs template with wishlist data
  res.render('wishlist', { pageTitle: 'My Wishlist', wishlist });
});

// Add item to cart
app.get('/addToCart', (req, res) => {
  const product = {
    name: 'Nike Men\'s Grey Jersey', // Product name
    quantity: 1, // Initial quantity
  };

  const itemIndex = cart.findIndex((item) => item.name === product.name);

  if (itemIndex === -1) {
    // Item not in cart, add it
    cart.push(product);
  } else {
    // Item already in cart, increment quantity (limited to 5)
    if (cart[itemIndex].quantity < 5) {
      cart[itemIndex].quantity++;
    } else {
      // Limit reached
      res.send('Sorry, this item is out of stock.');
      return;
    }
  }

  // Redirect back to the product description page
  res.redirect('/');
});

// Add item to wishlist
app.get('/addToWishlist', (req, res) => {
  const product = {
    name: 'Nike Men\'s Grey Jersey', // Product name
  };

  // Check if the product is already in the wishlist
  if (!wishlist.some((item) => item.name === product.name)) {
    // Add the product to the wishlist
    wishlist.push(product);
  }

  // Redirect back to the product description page
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
