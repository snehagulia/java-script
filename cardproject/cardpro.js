const cardContainer = document.querySelector(".container")    //all cards add
const searchInput = document.getElementById("srh-box")        //search box
const filtersDiv = document.getElementById("filters")          //category btn's add honge

const products = [
    // 🖥️ Electronics
    {
        id: 1,
        name: "Apple iPhone 15",
        category: "Electronics",
        price: 79999,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1695049679790-3b99e9b3f7c1",
        description: "Latest iPhone 15 with A17 chip and dynamic island design."
    },
    {
        id: 2,
        name: "Samsung Galaxy S24",
        category: "Electronics",
        price: 74999,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1614693059483-1c81d3a73631",
        description: "Samsung’s newest Galaxy S24 with powerful camera and AI features."
    },
    {
        id: 3,
        name: "Sony WH-1000XM5 Headphones",
        category: "Electronics",
        price: 29999,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1580894908361-967195033215",
        description: "Industry-leading noise cancellation wireless headphones."
    },
    {
        id: 4,
        name: "Apple MacBook Air M2",
        category: "Electronics",
        price: 114999,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
        description: "Powerful and lightweight laptop powered by M2 chip."
    },
    {
        id: 5,
        name: "Canon EOS R50 Mirrorless Camera",
        category: "Electronics",
        price: 58999,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1519183071298-a2962e402c3a",
        description: "Compact mirrorless camera perfect for travel and content creation."
    },

    // 👕 Fashion
    {
        id: 6,
        name: "Men's Denim Jacket",
        category: "Fashion",
        price: 1999,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1520975918318-3b9ae79b0e3b",
        description: "Classic blue denim jacket for casual styling."
    },
    {
        id: 7,
        name: "Women's Floral Dress",
        category: "Fashion",
        price: 1599,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
        description: "Lightweight summer floral dress made from soft fabric."
    },
    {
        id: 8,
        name: "Adidas Running Shoes",
        category: "Fashion",
        price: 4499,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
        description: "Lightweight and comfortable shoes for running and gym."
    },
    {
        id: 9,
        name: "Men’s Leather Wallet",
        category: "Fashion",
        price: 899,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1603808033192-082d8b8e6f44",
        description: "Premium quality leather wallet with multiple compartments."
    },
    {
        id: 10,
        name: "Women's Handbag",
        category: "Fashion",
        price: 2399,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1627123063281-1a2f9c8dc03d",
        description: "Elegant leather handbag for daily use and special occasions."
    },

    // 🪑 Furniture
    {
        id: 11,
        name: "Wooden Dining Table Set",
        category: "Furniture",
        price: 15999,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1616628188469-4638d6f9e7f7",
        description: "6-seater solid wood dining table with chairs."
    },
    {
        id: 12,
        name: "Office Chair",
        category: "Furniture",
        price: 6999,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1598300053650-3a9e1dbd9d1b",
        description: "Ergonomic office chair with lumbar support and breathable mesh."
    },
    {
        id: 13,
        name: "Queen Size Bed",
        category: "Furniture",
        price: 20999,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1615874959474-d609d1f46b3e",
        description: "Modern queen size bed made from teak wood."
    },
    {
        id: 14,
        name: "Bookshelf Rack",
        category: "Furniture",
        price: 4499,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
        description: "Multi-layer wooden bookshelf for your study or living room."
    },
    {
        id: 15,
        name: "Sofa Set 3-Seater",
        category: "Furniture",
        price: 27999,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1616627985066-dfb1b24d29e4",
        description: "Comfortable 3-seater fabric sofa set."
    },

    // 🏋️‍♂️ Sports
    {
        id: 16,
        name: "Yonex Badminton Racket",
        category: "Sports",
        price: 2999,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1599058917212-d750089bc07b",
        description: "Professional-grade badminton racket for intermediate players."
    },
    {
        id: 17,
        name: "Nivia Football",
        category: "Sports",
        price: 1199,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1603202662351-3f3b38d43351",
        description: "High-quality PU football suitable for all surfaces."
    },
    {
        id: 18,
        name: "Cricket Bat",
        category: "Sports",
        price: 2499,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1611751196998-0b0c21cf32d0",
        description: "Kashmir willow cricket bat ideal for practice and matches."
    },
    {
        id: 19,
        name: "Yoga Mat",
        category: "Sports",
        price: 899,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1584270354949-1f5f1c715b34",
        description: "Non-slip yoga mat with comfortable cushioning."
    },
    {
        id: 20,
        name: "Gym Gloves",
        category: "Sports",
        price: 699,
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1605296867424-35fc25c9219e",
        description: "Breathable gym gloves for better grip and protection."
    },

    // 💄 Beauty
    {
        id: 21,
        name: "L’Oreal Shampoo",
        category: "Beauty",
        price: 499,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1612817159949-bc3f0d3c7c11",
        description: "Nourishing shampoo for smooth and shiny hair."
    },
    {
        id: 22,
        name: "Maybelline Lipstick",
        category: "Beauty",
        price: 699,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1600185365683-5b4f66e6ff6d",
        description: "Long-lasting matte lipstick in vibrant shades."
    },
    {
        id: 23,
        name: "Beardo Beard Oil",
        category: "Beauty",
        price: 349,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1596464716121-03a74ac8fbb4",
        description: "Softens and strengthens beard hair for a groomed look."
    },
    {
        id: 24,
        name: "Nykaa Kajal",
        category: "Beauty",
        price: 249,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1612817159444-31e6d6d8a89e",
        description: "Waterproof and smudge-proof kajal for bold eyes."
    },
    {
        id: 25,
        name: "Nivea Moisturizer",
        category: "Beauty",
        price: 299,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1612817159985-21a7f6d56c11",
        description: "Hydrating moisturizer suitable for all skin types."
    },

    // 🛒 Grocery
    {
        id: 26,
        name: "Tata Tea Gold",
        category: "Grocery",
        price: 499,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
        description: "Premium tea blend for rich taste and aroma."
    },
    {
        id: 27,
        name: "Aashirvaad Atta 10kg",
        category: "Grocery",
        price: 549,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1622201794668-55610d54f6b2",
        description: "Whole wheat flour made from high-quality grains."
    },
    {
        id: 28,
        name: "Fortune Sunflower Oil",
        category: "Grocery",
        price: 1399,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1615485298891-66c47b4b8b36",
        description: "Refined sunflower oil for light and healthy cooking."
    },
    {
        id: 29,
        name: "Kellogg’s Corn Flakes",
        category: "Grocery",
        price: 399,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1621072154693-c0a69bcd2fbe",
        description: "Breakfast cereal made from golden corn."
    },
    {
        id: 30,
        name: "Amul Butter 500g",
        category: "Grocery",
        price: 285,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1603046891738-5e6a31f0a0d8",
        description: "Rich and creamy butter made from pure milk."
    },

    // ⌚ Accessories
    {
        id: 31,
        name: "Fossil Smartwatch",
        category: "Accessories",
        price: 15999,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1587825140708-060baabcb1d4",
        description: "Stylish smartwatch with fitness and notification tracking."
    },
    {
        id: 32,
        name: "Ray-Ban Sunglasses",
        category: "Accessories",
        price: 7499,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1508253578933-e2ed06c88a76",
        description: "Classic aviator sunglasses with UV protection."
    },
    {
        id: 33,
        name: "Titan Analog Watch",
        category: "Accessories",
        price: 2999,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1587825140400-8a9e9a8a63ee",
        description: "Elegant stainless steel wristwatch for men."
    },
    {
        id: 34,
        name: "Boat Earbuds",
        category: "Accessories",
        price: 2499,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1611808592198-9a32e8ff94a0",
        description: "Wireless Bluetooth earbuds with deep bass."
    },
    {
        id: 35,
        name: "HP Wireless Mouse",
        category: "Accessories",
        price: 799,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1587825140401-3e1e6898b85c",
        description: "Compact wireless mouse with long battery life."
    },

    // 📚 Books
    {
        id: 36,
        name: "The Alchemist",
        category: "Books",
        price: 399,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
        description: "Inspirational novel by Paulo Coelho about dreams and destiny."
    },
    {
        id: 37,
        name: "Atomic Habits",
        category: "Books",
        price: 499,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
        description: "Bestseller on building better habits by James Clear."
    },
    {
        id: 38,
        name: "Rich Dad Poor Dad",
        category: "Books",
        price: 399,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
        description: "Personal finance classic by Robert Kiyosaki."
    },
    {
        id: 39,
        name: "Think Like a Monk",
        category: "Books",
        price: 459,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
        description: "Jay Shetty shares lessons on mindfulness and purpose."
    },
    {
        id: 40,
        name: "Wings of Fire",
        category: "Books",
        price: 299,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
        description: "Autobiography of Dr. A.P.J. Abdul Kalam."
    },

    // 🧸 Toys
    {
        id: 41,
        name: "LEGO Classic Set",
        category: "Toys",
        price: 2499,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1618675526672-d3f0c9983e5d",
        description: "Creative building block set for kids aged 6+."
    },
    {
        id: 42,
        name: "Remote Control Car",
        category: "Toys",
        price: 1999,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6",
        description: "Rechargeable RC car with fast speed and durable design."
    },
    {
        id: 43,
        name: "Teddy Bear 3ft",
        category: "Toys",
        price: 1399,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6",
        description: "Soft and cuddly teddy bear for gifting and décor."
    },
    {
        id: 44,
        name: "Uno Card Game",
        category: "Toys",
        price: 299,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1609505848912-1802b1b4e4c9",
        description: "Fun and fast-paced card game for friends and family."
    },
    {
        id: 45,
        name: "Puzzle Cube",
        category: "Toys",
        price: 249,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1610173828365-d3f3ab04a0c8",
        description: "3x3 speed cube for kids and adults."
    },

    // 🧹 Home Essentials
    {
        id: 46,
        name: "Philips LED Bulb 9W",
        category: "Home Essentials",
        price: 199,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb",
        description: "Energy-efficient LED bulb with long life span."
    },
    {
        id: 47,
        name: "Milton Thermosteel Bottle",
        category: "Home Essentials",
        price: 899,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1597314380985-1f27f977c94b",
        description: "Keeps beverages hot or cold for up to 24 hours."
    },
    {
        id: 48,
        name: "Prestige Pressure Cooker",
        category: "Home Essentials",
        price: 2499,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1606813902915-443a5e38c9f8",
        description: "Durable aluminum pressure cooker with safety valve."
    },
    {
        id: 49,
        name: "Borosil Glass Lunch Box",
        category: "Home Essentials",
        price: 1299,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1610910861465-58e7c45f6c60",
        description: "Microwave-safe glass lunch box for office or travel."
    },
    {
        id: 50,
        name: "Godrej Lock Set",
        category: "Home Essentials",
        price: 699,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1606920569406-2893c78887e8",
        description: "Heavy-duty lock set for home security."
    }
];  //cards ka full database
const categories = ["all", ...new Set(products.map(p => p.category))]

categories.forEach((category) => {
    const btn = 
    document.createElement("button");           //har catrgory ke liye ek button
    btn.innerText = category;                              //new button + category ka naam
    btn.classList.add("filter-btn");                       //btn ko class di for css
    filtersDiv.appendChild(btn);                            //btn page me add hua
    btn.addEventListener("click", () => {
        if (category === "all") {
            showCards(products);
        } else {
            const filtered = products.filter(
                item => item.category === category
            );
            showCards(filtered);

        }
    });
});
// products.map((product) => {                               //map loop jaisa kaam karta hai     card bnana
//     const card = document.createElement("div")
//     card.classList.add("card")                           // card ko css class for style   | ${...}products ka real dadt yaha aa jayega
//     card.innerHTML = `                                           
//           <img src=${product.image} />  
//           <h3>${product.name}</h3>                        
//          <h4>₹ ${product.price}</h4>
//          <p>${product.description}</p>`
//     cardContainer.appendChild(card)       //jo card bna use container k ander daal diya
// })

function showCards(items) {
    cardContainer.innerHTML = ""
    items.map((product) => {
        const card = document.createElement("div")
        card.classList.add("card")

        card.innerHTML = `
          <img src="${product.image}" />  
          <h3>${product.name}</h3>                        
          <h4>₹ ${product.price}</h4>
          <p>${product.description}</p>
        `

        cardContainer.appendChild(card)
    })
}
showCards(products);
searchInput.addEventListener("input", () => {
    const searchValue =
        searchInput.value.toLowerCase()
    const filteredProducts =
        products.filter((product) =>
            product.name.toLowerCase().includes(searchValue)

        )

    showCards(filteredProducts);
})




