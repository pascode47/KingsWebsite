import React from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const CategoriesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">School Sections</h1>

      <section className="my-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card title="Nursery">
            <p className="text-gray-700 mb-4">
              Our Nursery program focuses on early childhood development, fostering curiosity, creativity, and social skills in a safe and stimulating environment.
            </p>
            <Button className="bg-blue-500 hover:bg-blue-600">Learn More</Button>
          </Card>
          <Card title="Primary">
            <p className="text-gray-700 mb-4">
              The Primary section provides a robust academic foundation, encouraging critical thinking, problem-solving, and a love for learning through engaging activities and experienced educators.
            </p>
            <Button className="bg-green-500 hover:bg-green-600">Learn More</Button>
          </Card>
          <Card title="Secondary">
            <p className="text-gray-700 mb-4">
              Our Secondary program prepares students for higher education and future careers, offering a comprehensive curriculum, specialized subjects, and opportunities for personal and academic growth.
            </p>
            <Button className="bg-red-500 hover:bg-red-600">Learn More</Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default CategoriesPage;
