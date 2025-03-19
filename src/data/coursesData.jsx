const searchData = {
    products: Array.from({ length: 100 }, (_, i) => ({
      id: i + 1,
      name: `Product ${i + 1}`,
      description: `This is product ${i + 1}, a high-quality item.`,
      price: `$${(Math.random() * 100).toFixed(2)}`,
      image: "https://via.placeholder.com/100", // Placeholder image
    })),
  };
  
  export default searchData;
  
  