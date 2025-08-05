import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import Card from '../common/Card';

const SecondaryApplicationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // Student's Particulars
    studentName: '',
    gender: '',
    sex: '',
    dateOfBirth: '',
    placeOfBirth: '',
    nationality: '',
    religion: '',
    
    // Grade Applied
    gradeApplied: '',
    
    // Previous School Details
    previousSchoolName: '',
    dateFrom: '',
    dateTo: '',
    reasonForTransfer: '',
    whyChooseKings: '',
    
    // Father's Particulars
    fatherName: '',
    fatherAddress: '',
    fatherEmail: '',
    fatherMobile: '',
    fatherOfficePhone: '',
    fatherResidence: '',
    fatherOccupation: '',
    
    // Mother's Particulars
    motherName: '',
    motherAddress: '',
    motherEmail: '',
    motherMobile: '',
    motherOfficePhone: '',
    motherResidence: '',
    motherOccupation: '',
    
    // Guardian's Particulars
    guardianName: '',
    guardianRelationship: '',
    guardianAddress: '',
    guardianEmail: '',
    guardianOfficePhone: '',
    guardianMobile: '',
    guardianResidence: '',
    guardianOccupation: '',
    
    // Academic Progress
    academicSchoolName: '',
    academicDistrict: '',
    headTeacherName: '',
    headTeacherMobile: '',
    yearCompleted: '',
    psleNumber: '',
    premNumber: '',
    
    // Class Performance
    mathsGrade: '',
    englishGrade: '',
    kiswahiliGrade: '',
    scienceGrade: '',
    civicMoralGrade: '',
    socialStudiesGrade: '',
    overallGrade: '',
    
    // Head Teacher Comments
    pupilCharacter: '',
    generalRemarks: '',
    
    // Interview Language
    interviewLanguage: '',
    
    // Parent Declaration
    parentGuardianName: '',
    studentNameConfirm: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to the generated form view
    navigate('/application/secondary/preview', { state: { formData } });
  };

  const gradeOptions = ['Form One', 'Form Two', 'Form Three', 'Form Four'];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Kings Secondary School Application Form
          </h1>
          <p className="text-gray-600">
            Fill out all required information to generate your official application form
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <p className="text-sm text-blue-800">
              <strong>Application Fee:</strong> TSh 20,000 (Non-refundable) | 
              <strong> Interview Subjects:</strong> Mathematics, English and Science
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Student's Particulars */}
          <Card className="p-6">
            <h2 className="text-xl font-bold text-green-600 mb-4 border-b pb-2">
              STUDENT'S PARTICULARS
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Student's Name *
                </label>
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Names must match birth certificate & Grade Seven registration"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Gender *
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Place of Birth *
                </label>
                <input
                  type="text"
                  name="placeOfBirth"
                  value={formData.placeOfBirth}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nationality *
                </label>
                <input
                  type="text"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Religion
                </label>
                <input
                  type="text"
                  name="religion"
                  value={formData.religion}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
          </Card>

          {/* Grade Applied */}
          <Card className="p-6">
            <h2 className="text-xl font-bold text-green-600 mb-4 border-b pb-2">
              GRADE APPLIED
            </h2>
            <div className="grid md:grid-cols-4 gap-4">
              {gradeOptions.map(grade => (
                <label key={grade} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="gradeApplied"
                    value={grade}
                    checked={formData.gradeApplied === grade}
                    onChange={handleInputChange}
                    required
                    className="text-green-600 focus:ring-green-500"
                  />
                  <span className="text-sm font-medium">{grade}</span>
                </label>
              ))}
            </div>
          </Card>

          {/* Previous School Details */}
          <Card className="p-6">
            <h2 className="text-xl font-bold text-green-600 mb-4 border-b pb-2">
              DETAILS OF PREVIOUS SCHOOL ATTENDED
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name of the School *
                </label>
                <input
                  type="text"
                  name="previousSchoolName"
                  value={formData.previousSchoolName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Why choose Kings? *
                </label>
                <textarea
                  name="whyChooseKings"
                  value={formData.whyChooseKings}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
          </Card>

          {/* Parents' Particulars - Father */}
          <Card className="p-6">
            <h2 className="text-xl font-bold text-green-600 mb-4 border-b pb-2">
              PARENTS' PARTICULARS - Father's Details
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Father's Full Names *
                </label>
                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile No *
                </label>
                <input
                  type="tel"
                  name="fatherMobile"
                  value={formData.fatherMobile}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Occupation
                </label>
                <input
                  type="text"
                  name="fatherOccupation"
                  value={formData.fatherOccupation}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
          </Card>

          {/* Parents' Particulars - Mother */}
          <Card className="p-6">
            <h2 className="text-xl font-bold text-green-600 mb-4 border-b pb-2">
              PARENTS' PARTICULARS - Mother's Details
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mother's Full Names *
                </label>
                <input
                  type="text"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile No *
                </label>
                <input
                  type="tel"
                  name="motherMobile"
                  value={formData.motherMobile}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Occupation
                </label>
                <input
                  type="text"
                  name="motherOccupation"
                  value={formData.motherOccupation}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
          </Card>

          {/* Interview Language */}
          <Card className="p-6">
            <h2 className="text-xl font-bold text-green-600 mb-4 border-b pb-2">
              INTERVIEW LANGUAGE
            </h2>
            <div className="flex gap-6">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="interviewLanguage"
                  value="English"
                  checked={formData.interviewLanguage === 'English'}
                  onChange={handleInputChange}
                  required
                  className="text-green-600 focus:ring-green-500"
                />
                <span className="text-sm font-medium">English</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="interviewLanguage"
                  value="Kiswahili"
                  checked={formData.interviewLanguage === 'Kiswahili'}
                  onChange={handleInputChange}
                  required
                  className="text-green-600 focus:ring-green-500"
                />
                <span className="text-sm font-medium">Kiswahili</span>
              </label>
            </div>
          </Card>

          {/* Parent/Guardian Declaration */}
          <Card className="p-6">
            <h2 className="text-xl font-bold text-green-600 mb-4 border-b pb-2">
              PARENTS/GUARDIAN DECLARATION
            </h2>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  I declare that the above information is correct to the best of my knowledge. 
                  I understand that providing wrong information may attract disciplinary action, 
                  including my child being suspended from school forth worth. I do promise that 
                  I shall ensure the applicant meets the school requirements and I will equally 
                  participate in school development programs as requested by the school management.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Parent/Guardian Name *
                  </label>
                  <input
                    type="text"
                    name="parentGuardianName"
                    value={formData.parentGuardianName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Student Name (confirm) *
                  </label>
                  <input
                    type="text"
                    name="studentNameConfirm"
                    value={formData.studentNameConfirm}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
            </div>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-between items-center pt-6">
            <Button
              type="button"
              variant="secondary"
              onClick={() => navigate('/admission')}
            >
              Back to Application Types
            </Button>
            <Button
              type="submit"
              variant="green"
              size="lg"
            >
              Generate Application Form
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SecondaryApplicationForm;
