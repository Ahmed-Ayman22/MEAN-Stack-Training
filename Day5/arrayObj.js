var products = [
  { id: 1, name: "Laptop", price: 18500, category: "Electronics", quantity: 4 },
  { id: 2, name: "Mouse", price: 180, category: "Electronics", quantity: 25 },
  { id: 3, name: "Notebook", price: 35, category: "Stationery", quantity: 100 },
  { id: 4, name: "Desk Lamp", price: 420, category: "Home", quantity: 0 }
];

var nextId = 5;

function printProducts(list) {
  console.table(list);
  return list;
}

function createProduct(name, price, category, quantity) {
  name = String(name).trim();
  category = String(category).trim();
  price = Number(price);
  quantity = Number(quantity);

  if (name === "") {
    console.log("Name is required");
    return null;
  }

  if (price <= 0 || isNaN(price)) {
    console.log("Price must be greater than 0");
    return null;
  }

  if (category === "") {
    console.log("Category is required");
    return null;
  }

  if (quantity < 0 || isNaN(quantity)) {
    console.log("Quantity must be 0 or greater");
    return null;
  }

  var product = {
    id: nextId,
    name: name,
    price: price,
    category: category,
    quantity: quantity
  };

  nextId++;
  products.push(product);

  console.log("Product added");
  return product;
}

function getAllProducts() {
  return printProducts(products);
}

function getProductById(id) {
  id = Number(id);

  var product = products.find(function (p) {
    return p.id === id;
  });

  if (!product) {
    console.log("Product not found");
    return null;
  }

  console.table([product]);
  return product;
}

function updateProduct(id, name, price, category, quantity) {
  id = Number(id);

  var product = products.find(function (p) {
    return p.id === id;
  });

  if (!product) {
    console.log("Product not found");
    return null;
  }

  name = String(name).trim();
  category = String(category).trim();
  price = Number(price);
  quantity = Number(quantity);

  if (name === "" || category === "") {
    console.log("Name and category are required");
    return null;
  }

  if (price <= 0 || isNaN(price)) {
    console.log("Invalid price");
    return null;
  }

  if (quantity < 0 || isNaN(quantity)) {
    console.log("Invalid quantity");
    return null;
  }

  product.name = name;
  product.price = price;
  product.category = category;
  product.quantity = quantity;

  console.log("Product updated");
  return product;
}

function deleteProduct(id) {
  id = Number(id);

  var index = products.findIndex(function (p) {
    return p.id === id;
  });

  if (index === -1) {
    console.log("Product not found");
    return null;
  }

  var answer = confirm("Are you sure you want to delete this product?");

  if (!answer) {
    console.log("Delete cancelled");
    return null;
  }

  var deletedProduct = products.splice(index, 1);
  console.log("Product deleted");
  return deletedProduct[0];
}

function filterProducts(keyword) {
  keyword = String(keyword).trim().toLowerCase();

  var result = products.filter(function (p) {
    return p.name.trim().toLowerCase().includes(keyword) ||
           p.category.trim().toLowerCase().includes(keyword);
  });

  return printProducts(result);
}

function someNameExists(name) {
  name = String(name).trim().toLowerCase();

  return products.some(function (p) {
    return p.name.trim().toLowerCase() === name;
  });
}

function sortByPrice(order) {
  order = order || "asc";

  var result = products.slice();

  result.sort(function (a, b) {
    if (order.toLowerCase() === "desc") {
      return b.price - a.price;
    }

    return a.price - b.price;
  });

  return printProducts(result);
}

function getStoreStats() {
  var totalValue = products.reduce(function (total, p) {
    return total + (p.price * p.quantity);
  }, 0);

  var totalPrice = products.reduce(function (total, p) {
    return total + p.price;
  }, 0);

  var averagePrice = 0;

  if (products.length > 0) {
    averagePrice = totalPrice / products.length;
  }

  var outOfStock = products.filter(function (p) {
    return p.quantity === 0;
  }).length;

  var stats = {
    totalProducts: products.length,
    totalValue: totalValue,
    averagePrice: Number(averagePrice.toFixed(2)),
    outOfStock: outOfStock
  };

  console.table(stats);
  return stats;
}

function groupByCategory() {
  return products.reduce(function (result, p) {
    if (!result[p.category]) {
      result[p.category] = [];
    }

    result[p.category].push(p);
    return result;
  }, {});
}

function filterByPriceRange(min, max) {
  min = min === undefined ? 0 : Number(min);
  max = max === undefined ? Infinity : Number(max);

  var result = products.filter(function (p) {
    return p.price >= min && p.price <= max;
  });

  return printProducts(result);
}

const inStock = (list) => list.filter(p => p.quantity > 0);

function withAfterAction(fn, callback) {
  var result = fn();
  callback(result);
  return result;
}

const store = (() => {
  return {
    products: products,
    add: createProduct,
    getAll: getAllProducts,
    getById: getProductById,
    update: updateProduct,
    remove: deleteProduct,
    search: filterProducts,
    stats: getStoreStats
  };
})();

function addMany(...items) {
  var added = [];

  items.forEach(function (item) {
    var product = createProduct(
      item.name,
      item.price,
      item.category,
      item.quantity
    );

    if (product) {
      added.push(product);
    }
  });

  return added;
}

function startApp() {
  var running = true;

  while (running) {
    var choice = prompt(
      "===== NTI Mini Store =====\n\n" +
      "1) Add product\n" +
      "2) Show all products\n" +
      "3) Show product by ID\n" +
      "4) Update product\n" +
      "5) Delete product\n" +
      "6) Search / Filter\n" +
      "0) Exit"
    );

    switch (choice) {
      case "1":
        var name = prompt("Product name:");
        var price = prompt("Price:");
        var category = prompt("Category:");
        var quantity = prompt("Quantity:");

        if (name !== null && price !== null && category !== null && quantity !== null) {
          createProduct(name, price, category, quantity);
        }
        break;

      case "2":
        getAllProducts();
        break;

      case "3":
        var id = prompt("Product ID:");
        if (id !== null) {
          getProductById(id);
        }
        break;

      case "4":
        var updateId = prompt("Product ID:");
        var oldProduct = getProductById(updateId);

        if (oldProduct) {
          var newName = prompt("New name:", oldProduct.name);
          var newPrice = prompt("New price:", oldProduct.price);
          var newCategory = prompt("New category:", oldProduct.category);
          var newQuantity = prompt("New quantity:", oldProduct.quantity);

          if (newName !== null && newPrice !== null && newCategory !== null && newQuantity !== null) {
            updateProduct(updateId, newName, newPrice, newCategory, newQuantity);
          }
        }
        break;

      case "5":
        var deleteId = prompt("Product ID:");
        if (deleteId !== null) {
          deleteProduct(deleteId);
        }
        break;

      case "6":
        var keyword = prompt("Search by name or category:");
        if (keyword !== null) {
          filterProducts(keyword);
        }
        break;

      case "0":
        running = false;
        console.log("Bye!");
        break;

      default:
        console.log("Invalid choice");
    }
  }
}

console.log("===== MINI STORE LOADED =====");
console.log("Use startApp() to start the menu");
