const products = [
        { name: 'Dumbell', type: 'weights', image: 'https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/cv4GCjuUxcgr5AABQAt1qdCQ' },
        { name: 'kettlebell', type: 'weights', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6oy1_H8eTzT5xuqoS5LgUEIhU_neT_yAOIraoGbDlWvw9BL3Nr86NVJ10jYWydlHdBAw&usqp=CAU' },
        { name: 'barbell', type: 'weights', image: 'https://m.media-amazon.com/images/I/41NZyBUa-lL.jpg' },
        { name: 'treadmill', type: 'cardio', image: 'https://v.fastcdn.co/u/db28084b/61790081-0-Smart-run-1.png' },
        { name: 'Assault Bike', type: 'cardio', image: 'https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/gZNKESJuEE5QqZFaCVeZjx8h' },
        { name: 'step machine ', type: 'cardio', image: 'https://5.imimg.com/data5/SELLER/Default/2023/5/308380990/DQ/NO/ND/60633516/stair-stepper-machine-500x500.png' },
        { name: 'benches', type: 'racks and benches', image: 'https://www.theflexnest.com/cdn/shop/products/Benchfinal_1080x.jpg?v=1639229095' },
        { name: 'Pull-up bars', type: 'racks and benches', image: 'https://m.media-amazon.com/images/I/71N2N1akPwL._AC_UL480_FMwebp_QL65_.jpg' },
        { name: 'cages', type: 'racks and benches', image: 'https://m.media-amazon.com/images/I/71N2N1akPwL._AC_UL480_FMwebp_QL65_.jpg' },
        {name: 'core sliders', type: 'accessories', image: 'https://img.fruugo.com/product/5/57/622670575_max.jpg' },
         {name: 'jumprope', type: 'accessories', image: 'https://m.media-amazon.com/images/I/61VqnE79V2L.jpg' },
        ];


    function filterAndDisplayProducts() {
        const cardio = document.getElementById('cardio').checked;
        const femaleFilter = document.getElementById('weights').checked;
        const topsFilter = document.getElementById('racks and benches').checked;
        const joggersFilter = document.getElementById('accessories').checked;
       
        const filteredProducts = products.filter(product => {
            return (
               
                (cardio && product.type === 'cardio' || weights && product.type === 'weights' || racks and benches && product.type === 'racks and benches')
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

    
    document.getElementById('cardio').addEventListener('change', filterAndDisplayProducts);
    document.getElementById('weights').addEventListener('change', filterAndDisplayProducts);
    document.getElementById('racks and benches').addEventListener('change', filterAndDisplayProducts);
    document.getElementById('accessories').addEventListener('change', filterAndDisplayProducts);
   

   
    filterAndDisplayProducts();