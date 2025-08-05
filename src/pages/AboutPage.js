import React from 'react';
import Card from '../components/common/Card';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">About Kings Modern Academy</h1>

      <section className="mb-8">
        <Card title="About Us">
          <p className="text-gray-700 mb-4">
            Kings Modern Academy is a leading educational institution in Dar es Salaam, dedicated to providing a high-quality learning experience for students from Nursery to Secondary levels. We foster an environment of academic excellence, personal growth, and community engagement.
          </p>
        </Card>
      </section>

      <section className="mb-8">
        <Card title="Welcome to Kings">
          <p className="text-gray-700 mb-4">
            We extend a warm welcome to all prospective students and families. At Kings Modern Academy, we are committed to unlocking each child's potential through a balanced curriculum, dedicated teachers, and a supportive school culture.
          </p>
        </Card>
      </section>

      <section className="mb-8">
        <Card title="Child Protection">
          <p className="text-gray-700">
            The safety and well-being of our students are paramount. We adhere to strict child protection policies and ensure a secure environment for all learners.
          </p>
        </Card>
      </section>

      <section>
        <Card title="Academic Calendar">
          <p className="text-gray-700">
            Our academic calendar is designed to provide a structured learning journey throughout the year. Please refer to the official school portal for the most up-to-date term dates, holidays, and key school events.
          </p>
          {/* Link to a more detailed calendar or PDF could be added here */}
        </Card>
      </section>
    </div>
  );
};

export default AboutPage;
