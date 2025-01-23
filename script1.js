const recipes = [
    {
        id: 1,
        title: "Pancakes",
        category: "Breakfast",
        description: "Fluffy pancakes perfect for a morning treat.",
        image: "./images/pancake.jpg",
        details: {
            ingredients: ["1 cup flour", "1 egg", "1/2 cup milk", "1 tsp baking powder"],
            instructions: "Mix all ingredients, pour on a hot pan, cook until golden.",
            time: "15 minutes"
        },
        rating: 4
    },
   
    {
        id: 2,
        title: "Caesar Salad",
        category: "Lunch",
        description: "A classic salad with crunchy croutons and creamy dressing.",
        image: "./images/Casesar salad.jpg", 
        details: {
            ingredients: ["Lettuce", "Croutons", "Caesar dressing", "Parmesan cheese"],
            instructions: "Toss all ingredients together, serve fresh.",
            time: "10 minutes"
        },
        rating: 3
    },
    {
        id: 3,
        title: "Chocolate Cake",
        category: "Dessert",
        description: "A rich and moist chocolate cake, perfect for any occasion.",
        image: "./images/chocolate cake.jpg",
        details: {
            ingredients: ["1 cup sugar", "1/2 cup cocoa powder", "1 cup flour", "2 eggs"],
            instructions: "Mix ingredients, bake at 350°F for 30 minutes.",
            time: "1 hour"
        },
        rating: 5
    },
    {
        id: 4,
        title: "Scrambled Eggs",
        category: "Breakfast",
        description: "Creamy scrambled eggs with a soft texture.",
        image: "./images/scrambled-eggs.jpg",  
        details: {
            ingredients: ["2 eggs", "1 tbsp butter", "Salt", "Pepper"],
            instructions: "Whisk eggs with salt and pepper, cook in a pan with butter on low heat.",
            time: "5 minutes"
        },
        rating: 5
    },
    
    {
        id: 5,
        title: "Grilled Cheese Sandwich",
        category: "Lunch",
        description: "A classic grilled cheese sandwich with crispy golden bread and melty cheese.",
        image: "./images/Grilled-Cheese.jpg",  
        details: {
            ingredients: ["2 slices of bread", "2 slices of cheese", "Butter"],
            instructions: "Butter both sides of the bread, place cheese in between, and grill until golden and cheese is melted.",
            time: "5 minutes"
        },
        rating: 4
    },
    {
        id: 6,
        title: "Apple Pie",
        category: "Dessert",
        description: "A classic apple pie with a buttery, flaky crust and sweet cinnamon apples.",
        image: "./images/apple-pie.jpg",  
        details: {
            ingredients: ["Apples", "Sugar", "Cinnamon", "Butter", "Pie crust"],
            instructions: "Fill pie crust with apple filling, bake until golden brown.",
            time: "1 hour 15 minutes"
        },
        rating: 5
    },
    
    {
        id: 7,
        title: "Avocado Toast",
        category: "Breakfast",
        description: "Ripe avocado on toasted bread, perfect for a healthy start.",
        image: "./images/Avocado.jpg",  
        details: {
            ingredients: ["1 ripe avocado", "2 slices of whole-grain bread", "Salt", "Pepper", "Lemon juice"],
            instructions: "Toast the bread, mash avocado with lemon juice, spread on toast, and season.",
            time: "10 minutes"
        },
        rating: 4
    },

    {
        id: 8,
        title: "Chicken Caesar Salad",
        category: "Lunch",
        description: "A fresh Caesar salad with grilled chicken and creamy dressing.",
        image: "./images/Chicken-Caesar-Salad.jpg",  
        details: {
            ingredients: ["Grilled chicken", "Romaine lettuce", "Croutons", "Caesar dressing", "Parmesan cheese"],
            instructions: "Toss the lettuce, chicken, croutons, and dressing together. Top with Parmesan cheese.",
            time: "15 minutes"
        },
        rating: 5
    },
    {
        id: 9,
        title: "Cheesecake",
        category: "Dessert",
        description: "A creamy and rich cheesecake with a graham cracker crust.",
        image: "./images/cheesecake.jpg",  
        details: {
            ingredients: ["Cream cheese", "Sugar", "Eggs", "Graham crackers"],
            instructions: "Mix ingredients, pour into crust, bake and chill.",
            time: "4 hours (includes chilling time)"
        },
        rating: 5
    },
    {
        id: 10,
        title: "French Toast",
        category: "Breakfast",
        description: "Golden-brown French toast with a hint of cinnamon and vanilla.",
        image: "./images/french-toast.jpg", 
        details: {
            ingredients: ["2 slices of bread", "2 eggs", "1/2 cup milk", "1 tsp cinnamon", "1 tsp vanilla extract"],
            instructions: "Whisk eggs, milk, cinnamon, and vanilla. Dip bread slices and cook in a pan until golden on both sides.",
            time: "10 minutes"
        },
        rating: 5
    },
    {
        id: 11,
        title: "Vegetable Stir Fry",
        category: "Lunch",
        description: "A healthy vegetable stir fry with a soy sauce glaze.",
        image: "./images/vegetable_stir_fry.jpg",  
        details: {
            ingredients: ["Broccoli", "Carrots", "Bell peppers", "Soy sauce", "Garlic", "Ginger"],
            instructions: "Stir-fry vegetables in a pan with garlic and ginger, then add soy sauce to finish.",
            time: "20 minutes"
        },
        rating: 4
    },
    {
        id: 12,
        title: "Lemon Meringue Pie",
        category: "Dessert",
        description: "A tangy and sweet lemon pie topped with a light, fluffy meringue.",
        image: "./images/lemon-meringue-pie.jpg",  
        details: {
            ingredients: ["2 lemons", "1 cup sugar", "3 eggs", "2 tbsp cornstarch", "Pie crust"],
            instructions: "Prepare lemon filling with sugar, eggs, and cornstarch; bake until set, then top with meringue and bake until golden.",
            time: "1 hour 15 minutes"
        },
        rating: 5
    },
    {
        id: 13,
        title: "Paneer Masala",
        category: "Lunch",
        description: "A flavorful and creamy curry made with paneer (Indian cottage cheese) and a blend of aromatic spices.",
        image: "./images/Paneer masala.jpg",  
        details: {
            "ingredients": [
                "Paneer (cottage cheese)",
                "Onions",
                "Tomatoes",
                "Ginger-garlic paste",
                "Cumin seeds",
                "Coriander powder",
                "Turmeric powder",
                "Garam masala",
                "Fresh cream",
                "Salt",
                "Oil"
            ],
            instructions: "Heat oil, sauté onions, add ginger-garlic paste, and spices. Add tomatoes, cook until soft, then add paneer and simmer with cream.",
            time: "45 minutes",
            
        },
        rating: 4
    },
    {
        id: 14,
        title: "Aloo Paratha",
        category: "Breakfast",
        description: "A popular Indian breakfast dish made with stuffed whole wheat flatbread and spiced mashed potatoes.",
        image: "./images/AlooParatha.jpg",
        details: {
            "ingredients": [
                "Whole wheat flour",
                "Potatoes",
                "Onion",
                "Cumin seeds",
                "Coriander powder",
                "Chili powder",
                "Turmeric powder",
                "Cilantro",
                "Salt",
                "Oil or ghee"
            ],
            instructions: "Prepare a dough with whole wheat flour. For the filling, cook mashed potatoes with spices and cilantro. Stuff the dough with the filling, roll into parathas, and cook on a griddle with oil or ghee.",
            time: "30 minutes",
           
        },
        rating: 3
    },
    {
        id: 15,    
        title: "Gulab Jamun",
        category: "Dessert",
        description: "Soft and syrup-soaked fried dough balls made with khoya and soaked in a fragrant sugar syrup.",
        image: "./images/GulabJamun.jpg",
        details: {
            ingredients: [
                "Khoya (reduced milk)",
                "All-purpose flour",
                "Baking soda",
                "Sugar",
                "Water",
                "Rose water",
                "Cardamom",
                "Oil (for frying)"
            ],
            instructions: "Make a dough with khoya, flour, baking soda, and a little water. Shape into small balls, fry until golden, and soak in warm sugar syrup flavored with cardamom and rose water.",
            time: "1 hour",
           
        },
        rating: 5
    },
    {
        id: 16,
        title: "Paneer Tikka",
        category: "Lunch",
        description: "A popular Indian appetizer made with marinated paneer cubes, grilled to perfection with a smoky flavor.",
        image: "./images/Paneertikka.jpg",  
        details: {
            ingredients: [
                "Paneer (cottage cheese)",
                "Yogurt",
                "Ginger-garlic paste",
                "Red chili powder",
                "Turmeric powder",
                "Cumin powder",
                "Garam masala",
                "Lemon juice",
                "Kasuri methi (dried fenugreek leaves)",
                "Salt",
                "Oil"
            ],
            instructions: "Mix yogurt, spices, and lemon juice to make a marinade. Coat paneer cubes with the marinade and let it sit for 30 minutes. Grill or bake the paneer until golden and smoky.",
            time: "1 hour (including marination)",
           
        },
        rating: 4
    },
    {
        id: 17,
        title: "Vegetable Upma",
        category: "Breakfast",
        description: "A savory South Indian dish made with semolina and mixed vegetables, often served with chutney.",
        image: "./images/VegetableUpma.jpg",
        details: {
            ingredients: [
                "Semolina (Rava)",
                "Onion",
                "Tomato",
                "Carrot",
                "Peas",
                "Mustard seeds",
                "Curry leaves",
                "Ginger",
                "Green chili",
                "Salt",
                "Oil"
            ],
            instructions: "Heat oil, add mustard seeds and curry leaves. Add chopped vegetables, sauté, and then add semolina. Roast it, then add water and cook until the upma thickens. Garnish with cilantro.",
            time: "20 minutes",
            
        },
        rating: 4
    },
    {
        id: 18,
        title: "Rasgulla",
        category: "Dessert",
        description: "Soft, spongy white balls made from fresh cheese (chenna) soaked in sugar syrup.",
        image: "./images/Rasgulla.jpg",
        details: {
            ingredients: [
                "Milk",
                "Lemon juice",
                "Sugar",
                "Water",
                "Cardamom"
            ],
            instructions: "Curdle the milk using lemon juice and drain to make chenna. Knead the chenna into smooth dough and form small balls. Boil them in a syrup of sugar and water until they expand and absorb the syrup.",
            time: "1.5 hours",
          
        },
        rating: 5
    }
    
];

function displayRecipes(filteredRecipes) {
    const recipeGrid = document.getElementById("recipeGrid");
    recipeGrid.innerHTML = "";
    filteredRecipes.forEach(recipe => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");
        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
            <p>${recipe.description}</p>
            <button onclick="viewRecipe(${recipe.id})">View Recipe</button>
            <div class="rating">
                <div class="stars">
                    ${renderRating(recipe.id)}
                </div>
            </div>
        `;
        recipeGrid.appendChild(recipeCard);
    });
}

function searchRecipes() {
    const searchTerm = document.getElementById("searchBar").value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchTerm) ||
        recipe.description.toLowerCase().includes(searchTerm)
    );
    displayRecipes(filteredRecipes);
}

function filterByCategory(category) {
    const filteredRecipes = category === 'All' ? recipes : recipes.filter(recipe => recipe.category === category);
    displayRecipes(filteredRecipes);
}

function renderRating(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    const rating = recipe.rating || 0;
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += `<span class="star ${i <= rating ? 'filled' : ''}" onclick="updateRating(${recipeId}, ${i})">★</span>`;
    }
    return stars;
}

function updateRating(recipeId, rating) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (recipe) {
        recipe.rating = rating;
        displayRecipes(recipes); 
    }
}

function viewRecipe(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (recipe) {
        const recipeDetailPage = `
            <div class="recipe-details">


            
                <h2>${recipe.title}</h2>
                <img src="${recipe.image}" alt="${recipe.title}">
                <h3>Ingredients:</h3>
                <ul>
                    ${recipe.details.ingredients.map(item => `<li>${item}</li>`).join('')}
                </ul>
                <h3>Instructions:</h3>
                <p>${recipe.details.instructions}</p>
                <p><strong>Cooking Time:</strong> ${recipe.details.time}</p>
                <div class="rating">
                    <h3>Rating:</h3>
                    <div class="stars">
                        ${renderRating(recipeId)}
                    </div>
                </div>
                <button onclick="goBack()">Back</button>
            </div>
        `;
        document.body.innerHTML = recipeDetailPage;
    }
}

function goBack() {
    document.body.innerHTML = `
        <header>
            <h1>Recipe Book</h1>
            <input type="text" id="searchBar" placeholder="Search for recipes..." onkeyup="searchRecipes()">
        </header>
        <div class="categories">
            <button onclick="filterByCategory('All')">All</button>
            <button onclick="filterByCategory('Breakfast')">Breakfast</button>
            <button onclick="filterByCategory('Lunch')">Lunch</button>
            <button onclick="filterByCategory('Dessert')">Dessert</button>
        </div>
        <div id="recipeGrid" class="recipe-grid"></div>
        <footer>
            <p>&copy; 2025 Recipe Book</p>
            <div class="social-media">
                <a href="https://twitter.com" target="_blank">Twitter</a>
                <a href="https://facebook.com" target="_blank">Facebook</a>
                <a href="https://instagram.com" target="_blank">Instagram</a>
            </div>
        </footer>
        <button onclick="scrollToTop()" id="backToTopBtn" title="Back to Top">↑</button>
    `;
    displayRecipes(recipes);
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function submitRecipe(event) {
    event.preventDefault();

    const newRecipe = {
        id: recipes.length + 1,
        title: document.getElementById('recipeTitle').value,
        category: document.getElementById('recipeCategory').value,
        description: document.getElementById('recipeDescription').value,
        image: document.getElementById('recipeImage').value,
        details: {
            ingredients: document.getElementById('recipeIngredients').value.split("\n"),
            instructions: document.getElementById('recipeInstructions').value,
            time: "Unknown"
        }
    };

    recipes.push(newRecipe);
    displayRecipes(recipes);
    alert("Recipe submitted successfully!");
}

window.onscroll = function() {
    const backToTopBtn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};


displayRecipes(recipes);

// Scroll to top functionality
window.onscroll = function() {
    toggleBackToTopButton();
};

function toggleBackToTopButton() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("backToTopBtn").style.display = "block";
    } else {
        document.getElementById("backToTopBtn").style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Submit Recipe Form functionality
function submitRecipe(event) {
    event.preventDefault();

    const title = document.getElementById("recipeTitle").value;
    const category = document.getElementById("recipeCategory").value;
    const description = document.getElementById("recipeDescription").value;
    const image = document.getElementById("recipeImage").value;
    const ingredients = document.getElementById("recipeIngredients").value;
    const instructions = document.getElementById("recipeInstructions").value;

    console.log("Recipe Submitted:");
    console.log("Title: ", title);
    console.log("Category: ", category);
    console.log("Description: ", description);
    console.log("Image URL: ", image);
    console.log("Ingredients: ", ingredients);
    console.log("Instructions: ", instructions);

    // Optionally: Hide the form after submission
    document.getElementById("submitRecipeForm").style.display = "none";
    alert("Recipe Submitted Successfully!");
}
