import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const AdmissionPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Admissions</h1>

      {/* Online Application System Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-lg mb-8 text-center">
        <h2 className="text-3xl font-bold mb-4">🎓 Online Application System Now Available!</h2>
        <p className="text-xl mb-6">
          Apply online and generate your official application form instantly. 
          Choose your category below and get started today!
        </p>
        <Button 
          onClick={() => navigate('/applications')}
          variant="white"
          size="lg"
          className="bg-white text-blue-600 hover:bg-gray-100"
        >
          Start Online Application
        </Button>
      </div>

      <section className="mb-8">
        <Card title="Apply for Nursery & Primary">
          <p className="text-gray-700 mb-4">
            Admissions for our Nursery (KG II-III) and Primary (Grade 1-7) programs. 
            Our nurturing environment focuses on building strong academic foundations and fostering creativity.
            <br /><br />
            <strong>Interview Subjects:</strong>
            <br />• KG II-III: Math Concepts, Communication, Environmental Care
            <br />• Grade 1-2: Arithmetic, Reading, Writing, Health Care
            <br />• Grade 3-4: Mathematics, English, Kiswahili, Science, Geography
            <br />• Grade 5-7: Mathematics, English, Kiswahili, Science, CME/SST
          </p>
          <div className="flex gap-4">
            <Button 
              onClick={() => navigate('/application/nursery-primary')}
              className="bg-blue-500 hover:bg-blue-600"
            >
              Apply Online
            </Button>
            <Button variant="secondary">Download Form</Button>
          </div>
        </Card>
      </section>

      <section className="mb-8">
        <Card title="Apply for Secondary">
          <p className="text-gray-700 mb-4">
            The Secondary program (Form 1-4) prepares students for future success with comprehensive 
            Science, Business and Computer Science studies including Counselling and Guidance.
            <br /><br />
            <strong>Application Fee:</strong> TSh 20,000 (Non-refundable)
            <br /><strong>Interview Subjects:</strong> Mathematics, English and Science
            <br /><strong>Requirements:</strong> Must have completed Standard VII
          </p>
          <div className="flex gap-4">
            <Button 
              onClick={() => navigate('/application/secondary')}
              className="bg-green-500 hover:bg-green-600"
            >
              Apply Online
            </Button>
            <Button variant="secondary">Download Form</Button>
          </div>
        </Card>
      </section>

      <section className="mb-8">
        <Card title="Application Process">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-3 text-blue-600">Online Application</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Choose your application category</li>
                <li>Fill out the online form</li>
                <li>Upload required documents</li>
                <li>Generate and print your application</li>
                <li>Submit to school with required fees</li>
                <li>Attend interview on scheduled date</li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3 text-green-600">Required Documents</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Birth Certificate</li>
                <li>Passport-style photos</li>
                <li>Previous school records</li>
                <li>PSLE results (for secondary)</li>
                <li>Medical examination form</li>
                <li>Parent/Guardian identification</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      <section>
        <Card title="School Information">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-3">Contact Information</h3>
              <p className="text-gray-700 mb-2">
                <strong>Location:</strong> Goba, along Mbezi-Goba Road<br />
                <strong>Email:</strong> info@kingsschool.ac.tz<br />
                <strong>Website:</strong> www.kingsschool.ac.tz<br />
                <strong>Mobile:</strong> +255 788 257 667 / +255 695 400 007<br />
                <strong>P.O. Box:</strong> 31060, Dar es Salaam
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">School Performance</h3>
              <p className="text-gray-700">
                Kings School is one of the best performing schools academically in Dar es Salaam. 
                In 2024 Grade Seven NECTA Examination, we achieved an average of 277.162 out of 300 
                (92.39% - Grade A performance).
              </p>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default AdmissionPage;
