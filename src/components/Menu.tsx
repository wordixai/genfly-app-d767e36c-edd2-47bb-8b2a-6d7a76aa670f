const menuItems = [
  {
    name: "Espresso",
    description: "Rich and bold single shot of premium coffee",
    price: "$3.50",
    image: "https://images.unsplash.com/photo-1510591509543-27bec4946d2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Cappuccino",
    description: "Perfect balance of espresso, steamed milk and foam",
    price: "$4.75",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Latte",
    description: "Smooth espresso with creamy steamed milk",
    price: "$5.25",
    image: "https://images.unsplash.com/photo-1570968915860-54d5aa120826?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Cold Brew",
    description: "Smooth, refreshing coffee brewed cold for 12 hours",
    price: "$4.50",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  }
];

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium coffee drinks, each crafted with passion and precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                  <span className="text-lg font-bold text-amber-600">{item.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button className="w-full bg-amber-600 text-white py-2 rounded-full hover:bg-amber-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;