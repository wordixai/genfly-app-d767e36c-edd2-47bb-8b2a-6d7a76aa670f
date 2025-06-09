import { Award, Coffee, Heart, Users } from "lucide-react";

const features = [
  {
    icon: Coffee,
    title: "Premium Beans",
    description: "Sourced directly from the world's finest coffee growing regions"
  },
  {
    icon: Award,
    title: "Expert Roasting",
    description: "Master roasters with over 20 years of experience craft every blend"
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every cup is prepared with care and attention to detail"
  },
  {
    icon: Users,
    title: "Community First",
    description: "A welcoming space where connections are made over great coffee"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Where Coffee
              <span className="block text-amber-600">Meets Passion</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              For over a decade, Brewhouse has been more than just a coffee shop. We're a community hub where amazing coffee brings people together. Our commitment to quality starts with sourcing the finest beans and extends to every cup we serve.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <feature.icon className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Coffee shop interior"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">10+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">50k+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;