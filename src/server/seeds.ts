export function generateSeeds (server: any) {
  let store1 = server.create("store", {
    storeId: "store1",
    name: "Tech Haven",
    category: "Electronics",
    location: {
      address: "123 Main St",
      number: "45A",
      zipCode: "10001",
    },
    createdAt: new Date("2023-01-10"),
    updatedAt: new Date("2023-09-10"),
  });

  server.create("product", {
    productId: "prod1",
    store: store1,
    name: "Smartphone",
    category: "Electronics",
    quantity: 50,
    price: 799.99,
    isAvailable: true,
  });

  server.create("product", {
    productId: "prod2",
    store: store1,
    name: "Laptop",
    category: "Electronics",
    quantity: 20,
    price: 1299.99,
    isAvailable: true,
  });

  let store2 = server.create("store", {
    storeId: "store2",
    name: "Accessory Central",
    category: "Accessories",
    location: {
      address: "456 Side Ave",
      number: "78",
      zipCode: "10002",
    },
    createdAt: new Date("2023-02-15"),
    updatedAt: new Date("2023-08-25"),
  });

  server.create("product", {
    productId: "prod3",
    store: store2,
    name: "Headphones",
    category: "Accessories",
    quantity: 100,
    price: 99.99,
    isAvailable: true,
  });

  server.create("product", {
    productId: "prod4",
    store: store2,
    name: "Tablet",
    category: "Electronics",
    quantity: 35,
    price: 499.99,
    isAvailable: true,
  });

  let store3 = server.create("store", {
    storeId: "store3",
    name: "Gamer Zone",
    category: "Electronics",
    location: {
      address: "789 Play Blvd",
      number: "12",
      zipCode: "10003",
    },
    createdAt: new Date("2023-03-05"),
    updatedAt: new Date("2023-08-20"),
  });

  server.create("product", {
    productId: "prod5",
    store: store3,
    name: "Gaming Console",
    category: "Electronics",
    quantity: 15,
    price: 399.99,
    isAvailable: false,
  });

  server.create("product", {
    productId: "prod6",
    store: store3,
    name: "Smart TV",
    category: "Electronics",
    quantity: 10,
    price: 1199.99,
    isAvailable: true,
  });

  let store4 = server.create("store", {
    storeId: "store4",
    name: "Home Essentials",
    category: "Home Appliances",
    location: {
      address: "321 Home St",
      number: "54B",
      zipCode: "10004",
    },
    createdAt: new Date("2023-04-12"),
    updatedAt: new Date("2023-08-30"),
  });

  server.create("product", {
    productId: "prod7",
    store: store4,
    name: "Blender",
    category: "Home Appliances",
    quantity: 75,
    price: 49.99,
    isAvailable: true,
  });

  server.create("product", {
    productId: "prod8",
    store: store4,
    name: "Microwave Oven",
    category: "Home Appliances",
    quantity: 25,
    price: 199.99,
    isAvailable: true,
  });

  let store5 = server.create("store", {
    storeId: "store5",
    name: "Appliance World",
    category: "Home Appliances",
    location: {
      address: "654 Work Ave",
      number: "90",
      zipCode: "10005",
    },
    createdAt: new Date("2023-05-20"),
    updatedAt: new Date("2023-09-05"),
  });

  server.create("product", {
    productId: "prod9",
    store: store5,
    name: "Vacuum Cleaner",
    category: "Home Appliances",
    quantity: 40,
    price: 299.99,
    isAvailable: true,
  });

  server.create("product", {
    productId: "prod10",
    store: store5,
    name: "Air Fryer",
    category: "Home Appliances",
    quantity: 30,
    price: 149.99,
    isAvailable: true,
  });
}