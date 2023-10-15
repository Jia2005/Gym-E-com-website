
    const products = [
        { name: 'Product 1', gender: 'male', type: 'tops', image: 'img1.png' },
        { name: 'Product 2', gender: 'female', type: 'tops', image: 'img2.png' },
        { name: 'Product 3', gender: 'male', type: 'tops', image: 'img3.png' },
        { name: 'Product 4', gender: 'female', type: 'joggers', image: 'img4.png' },
        { name: 'Product 5', gender: 'male', type: 'joggers', image: 'img5.png' },
        { name: 'Product 6', gender: 'female', type: 'joggers', image: 'img6.png' },
        { name: 'Product 7', gender: 'male', type: 'shoes', image: 'img7.png' },
        { name: 'Product 8', gender: 'male', type: 'shoes', image: 'img8.png' },
        { name: 'Product 9', gender: 'female', type: 'shoes', image: 'img9.png' },
    ];


    function filterAndDisplayProducts() {
        const maleFilter = document.getElementById('maleFilter').checked;
        const femaleFilter = document.getElementById('femaleFilter').checked;
        const topsFilter = document.getElementById('topsFilter').checked;
        const joggersFilter = document.getElementById('joggersFilter').checked;
        const shoesFilter = document.getElementById('shoesFilter').checked;

        const filteredProducts = products.filter(product => {
            return (
                (maleFilter && product.gender === 'male' || femaleFilter && product.gender === 'female') &&
                (topsFilter && product.type === 'tops' || joggersFilter && product.type === 'joggers' || shoesFilter && product.type === 'shoes')
            );
        });

        const productList = document.getElementById('productList');
        productList.innerHTML = '';

        filteredProducts.forEach((product, index) => {
            const productCard = document.createElement('div');
            productCard.classList.add('col-lg-4', 'col-md-6', 'col-sm-12');
            productCard.innerHTML = `
                <div class="card product-card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">Description of ${product.name}.</p>
                        <button class="btn btn-primary btn-buy">Buy Now</button>
                    </div>
                </div>
            `;
            productList.appendChild(productCard);
        });
    }

    
    document.getElementById('maleFilter').addEventListener('change', filterAndDisplayProducts);
    document.getElementById('femaleFilter').addEventListener('change', filterAndDisplayProducts);
    document.getElementById('topsFilter').addEventListener('change', filterAndDisplayProducts);
    document.getElementById('joggersFilter').addEventListener('change', filterAndDisplayProducts);
    document.getElementById('shoesFilter').addEventListener('change', filterAndDisplayProducts);

   
    filterAndDisplayProducts();
