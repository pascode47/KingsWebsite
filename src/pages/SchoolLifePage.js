import React from 'react';
import Card from '../components/common/Card';

const SchoolLifePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">School Life</h1>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-center mb-6">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Placeholder for Gallery Images */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <Card key={i} className="overflow-hidden p-0">
              <img src={`/path/to/gallery-image-${i}.jpg`} alt="" className="w-full h-48 object-cover" />
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-center mb-6">School Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card title="Sports">
            <p className="text-gray-700 mb-4">
              We offer a wide range of sports, including football, basketball, athletics, and swimming, promoting teamwork, discipline, and healthy competition.
            </p>
          </Card>
          <Card title="Clubs & Societies">
            <p className="text-gray-700 mb-4">
              Students can join various clubs such as debate, science, art, music, and drama, allowing them to explore their interests and develop new skills.
            </p>
          </Card>
          <Card title="Cultural Events">
            <p className="text-gray-700 mb-4">
              Our school celebrates diversity through various cultural events, performances, and festivals throughout the academic year.
            </p>
          </Card>
          <Card title="Community Service">
            <p className="text-gray-700 mb-4">
              We encourage students to engage in community service, fostering a sense of social responsibility and making a positive impact.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default SchoolLifePage;
