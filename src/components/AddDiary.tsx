import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Calendar, Clock, Users, BookOpen, FileText, Save } from 'lucide-react';

interface DiaryFormData {
  date: string;
  subject: string;
  topic: string;
  classType: 'theory' | 'practical' | 'tutorial';
  duration: number;
  studentsPresent: number;
  totalStudents: number;
  remarks?: string;
}

const AddDiary: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<DiaryFormData>();

  const onSubmit = async (data: DiaryFormData) => {
    try {
      // TODO: Replace with actual API call
      console.log('Diary entry:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert('Diary entry added successfully!');
      reset();
    } catch (error) {
      console.error('Failed to add diary entry:', error);
      alert('Failed to add diary entry. Please try again.');
    }
  };

  const subjects = [
    'Computer Networks',
    'Database Systems',
    'Software Engineering',
    'Data Structures',
    'Operating Systems',
    'Web Development',
    'Machine Learning',
    'Computer Graphics',
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-college-navy">Add Diary Entry</h1>
        <p className="text-college-gray mt-1">Record your daily teaching activities and class details.</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card max-w-4xl"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="inline h-4 w-4 mr-1" />
                Date
              </label>
              <input
                type="date"
                {...register('date', { required: 'Date is required' })}
                className="input-field"
                defaultValue={new Date().toISOString().split('T')[0]}
              />
              {errors.date && (
                <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
              )}
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <BookOpen className="inline h-4 w-4 mr-1" />
                Subject
              </label>
              <select
                {...register('subject', { required: 'Subject is required' })}
                className="input-field"
              >
                <option value="">Select subject</option>
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
              {errors.subject && (
                <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
              )}
            </div>
          </div>

          {/* Topic */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <FileText className="inline h-4 w-4 mr-1" />
              Topic Covered
            </label>
            <input
              type="text"
              {...register('topic', { required: 'Topic is required' })}
              className="input-field"
              placeholder="Enter the topic covered in class"
            />
            {errors.topic && (
              <p className="mt-1 text-sm text-red-600">{errors.topic.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Class Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Class Type
              </label>
              <select
                {...register('classType', { required: 'Class type is required' })}
                className="input-field"
              >
                <option value="">Select type</option>
                <option value="theory">Theory</option>
                <option value="practical">Practical</option>
                <option value="tutorial">Tutorial</option>
              </select>
              {errors.classType && (
                <p className="mt-1 text-sm text-red-600">{errors.classType.message}</p>
              )}
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Clock className="inline h-4 w-4 mr-1" />
                Duration (hours)
              </label>
              <input
                type="number"
                step="0.5"
                min="0.5"
                max="8"
                {...register('duration', { 
                  required: 'Duration is required',
                  min: { value: 0.5, message: 'Minimum duration is 0.5 hours' },
                  max: { value: 8, message: 'Maximum duration is 8 hours' }
                })}
                className="input-field"
                placeholder="1.5"
              />
              {errors.duration && (
                <p className="mt-1 text-sm text-red-600">{errors.duration.message}</p>
              )}
            </div>

            {/* Total Students */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Users className="inline h-4 w-4 mr-1" />
                Total Students
              </label>
              <input
                type="number"
                min="1"
                {...register('totalStudents', { 
                  required: 'Total students is required',
                  min: { value: 1, message: 'Must be at least 1 student' }
                })}
                className="input-field"
                placeholder="50"
              />
              {errors.totalStudents && (
                <p className="mt-1 text-sm text-red-600">{errors.totalStudents.message}</p>
              )}
            </div>
          </div>

          {/* Students Present */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Users className="inline h-4 w-4 mr-1" />
              Students Present
            </label>
            <input
              type="number"
              min="0"
              {...register('studentsPresent', { 
                required: 'Students present is required',
                min: { value: 0, message: 'Cannot be negative' }
              })}
              className="input-field"
              placeholder="45"
            />
            {errors.studentsPresent && (
              <p className="mt-1 text-sm text-red-600">{errors.studentsPresent.message}</p>
            )}
          </div>

          {/* Remarks */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Remarks (Optional)
            </label>
            <textarea
              {...register('remarks')}
              rows={4}
              className="input-field resize-none"
              placeholder="Any additional notes or observations about the class..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => reset()}
              className="btn-secondary"
            >
              Reset Form
            </button>
            <button
              type="submit"
              className="btn-primary flex items-center space-x-2"
            >
              <Save className="h-4 w-4" />
              <span>Save Entry</span>
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default AddDiary;