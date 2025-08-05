import React from 'react';
import HeroSlider from '../components/common/HeroSlider';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="relative">
      <HeroSlider />

      {/* Discover Our School Section */}
      <section className="min-h-screen bg-gray-50 flex items-center py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fadeIn">
            Discover Our School
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Card title="Nursery" className="h-full bg-white shadow-xl">
                <p className="text-gray-700 mb-6">Nurturing young minds from the start with a play-based learning approach in a safe, stimulating environment.</p>
                <Link to="/categories">
                  <Button className="bg-blue-500 hover:bg-blue-600 w-full">Learn More</Button>
                </Link>
              </Card>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Card title="Primary" className="h-full bg-white shadow-xl">
                <p className="text-gray-700 mb-6">Building a strong foundation through comprehensive curriculum and personalized attention to each student.</p>
                <Link to="/categories">
                  <Button className="bg-green-500 hover:bg-green-600 w-full">Learn More</Button>
                </Link>
              </Card>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Card title="Secondary" className="h-full bg-white shadow-xl">
                <p className="text-gray-700 mb-6">Preparing students for academic excellence and future success with advanced programs and guidance.</p>
                <Link to="/categories">
                  <Button className="bg-red-500 hover:bg-red-600 w-full">Learn More</Button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Kings Section */}
      <section className="min-h-screen bg-blue-600 text-white flex items-center py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Why Choose Kings?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-2">Academic Excellence</h3>
              <p>Consistently high academic achievements and results</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-2">Small Class Sizes</h3>
              <p>Personalized attention and interactive learning</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold mb-2">Expert Teachers</h3>
              <p>Highly qualified and experienced educators</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-2">Extra-Curricular</h3>
              <p>Wide range of activities and programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="min-h-screen bg-gray-50 flex items-center py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">What Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Card className="h-full bg-white shadow-xl">
                <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 italic mb-6">"Kings has been an amazing experience. The teachers are supportive and the learning environment is fantastic!"</p>
                <p className="font-semibold text-blue-600">- Aisha, Year 10</p>
              </Card>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Card className="h-full bg-white shadow-xl">
                <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 italic mb-6">"I love the school activities and the friends I've made here. It's a great place to grow and learn."</p>
                <p className="font-semibold text-blue-600">- Ben, Year 7</p>
              </Card>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Card className="h-full bg-white shadow-xl">
                <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 italic mb-6">"The teachers here really care about our success. They make learning fun and engaging every day!"</p>
                <p className="font-semibold text-blue-600">- Sarah, Year 9</p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
