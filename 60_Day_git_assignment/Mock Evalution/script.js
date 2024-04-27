fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    displayProducts(data);
    fetchCategories();
  })
  .catch((error) => console.error("Error fetching products:", error));

function displayProducts(products) {
  let productGrid = document.getElementById("product");
  productGrid.innerHTML = "";
  products.forEach((product) => {
    let productItem = document.createElement("div");
    productItem.classList.add("product");
    productItem.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>$${product.price}</p>
    `;
    productGrid.appendChild(productItem);
  });
}

function fetchCategories() {
  fetch("https://fakestoreapi.com/products/categories")
    .then((response) => response.json())
    .then((categories) => {
      let categorySelect = document.getElementById("category");
      categories.forEach((category) => {
        let option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
      });
      categorySelect.addEventListener("change", () => {
        filterProducts(categorySelect.value);
      });
      let searchInput = document.getElementById("search");
      searchInput.addEventListener("input", () => {
        searchProducts(searchInput.value.toLowerCase());
      });
      let sort = document.getElementById("sort");
      sort.addEventListener("change", () => {
        sortProducts(sort.value);
      });
    })
    .catch((error) => console.error("Error fetching categories:", error));
}

function filterProducts(category) {
  fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then((response) => response.json())
    .then((products) => {
      displayProducts(products);
    })
    .catch((error) =>
      console.error("Error filtering products by category:", error)
    );
}

function searchProducts(query) {
  fetch(`https://fakestoreapi.com/products`)
    .then((response) => response.json())
    .then((products) => {
      const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(query)
      );
      displayProducts(filteredProducts);
    })
    .catch((error) => console.error("Error searching products:", error));
}

function sortProducts(order) {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
      if (order === "ascending") {
        products.sort((a, b) => a.price - b.price);
      } else {
        products.sort((a, b) => b.price - a.price);
      }
      displayProducts(products);
    })
    .catch((error) => console.error("Error sorting products:", error));
}
