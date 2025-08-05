import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../common/Card';
import Button from '../common/Button';

const ApplicationSelector = () => {
  const navigate = useNavigate();

  const applicationTypes = [
    {
      id: 'nursery-primary',
      title: 'Nursery & Primary School',
      description: 'Application for Nursery (KG II - KG III) and Primary classes (Grade 1 - Grade 7)',
      grades: 'KG II, KG III, Grade 1-7',
      interviewSubjects: {
        'KG II - KG III': 'Math Concepts, Communication, Relation and Environmental Care',
        'Grade 1-2': 'Arithmetic, Reading Skills, Writing Skills and Health Care',
        'Grade 3-4': 'Mathematics, English, Kiswahili, Science and Geography',
        'Grade 5-7': 'Mathematics, English, Kiswahili, Science, and CME/SST'
      },
      color: 'blue'
    },
    {
      id: 'secondary',
      title: 'Secondary School',
      description: 'Application for Secondary school (Form 1 - Form 4)',
      grades: 'Form 1, Form 2, Form 3, Form 4',
      interviewSubjects: {
        'All Forms': 'Mathematics, English and Science'
      },
      color: 'green'
    }
  ];

  const handleApplicationSelect = (type) => {
    navigate(`/application/${type}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Online Application System
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Submit your application online and generate an official application form 
            automatically. Choose your application category below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {applicationTypes.map((type) => (
            <Card key={type.id} className="p-8 hover:shadow-xl transition-shadow">
              <div className="text-center">
                <h2 className={`text-2xl font-bold text-${type.color}-600 mb-4`}>
                  {type.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {type.description}
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Available Grades:
                  </h3>
                  <p className="text-gray-600">{type.grades}</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Interview Subjects:
                  </h3>
                  {Object.entries(type.interviewSubjects).map(([grade, subjects]) => (
                    <div key={grade} className="mb-2">
                      <span className="font-medium text-blue-600">{grade}:</span>
                      <span className="text-gray-600 ml-2">{subjects}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant={type.color}
                  size="lg"
                  onClick={() => handleApplicationSelect(type.id)}
                  className="w-full"
                >
                  Start Application
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-6 max-w-4xl mx-auto">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">
                Important Information
              </h3>
              <div className="mt-2 text-sm text-yellow-700">
                <ul className="list-disc pl-5 space-y-1">
                  <li>All applications require an interview at Kings School premises</li>
                  <li>Application forms are non-refundable</li>
                  <li>Primary application fee: Contact school for details</li>
                  <li>Secondary application fee: TSh 20,000</li>
                  <li>Ensure all information matches official documents (birth certificate, etc.)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationSelector;
