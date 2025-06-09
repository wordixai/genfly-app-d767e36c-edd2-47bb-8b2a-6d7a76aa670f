const Hero = () => {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Perfect Coffee
            <span className="block text-amber-600">Every Morning</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-md">
            Start your day with our expertly crafted coffee blends, made from the finest beans sourced from around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 transition-colors">
              Order Now
            </button>
            <button className="border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-600 hover:text-white transition-colors">
              View Menu
            </button>
          </div>
        </div>
        
        <div className="relative">
          <div className="aspect-square rounded-full bg-gradient-to-br from-amber-200 to-orange-300 p-8">
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Coffee cup"
              className="w-full h-full object-cover rounded-full shadow-2xl"
            />
          </div>
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
            <span className="text-2xl">☕</span>
          </div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-100 rounded-full shadow-lg flex items-center justify-center">
            <span className="text-4xl">🫘</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;