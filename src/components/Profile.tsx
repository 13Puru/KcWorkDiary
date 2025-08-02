import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Building, GraduationCap, Calendar, Shield, Edit, Camera } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

const Profile: React.FC = () => {
  const { user } = useAuth();

  if (!user) return null;

  const profileSections = [
    {
      title: 'Personal Information',
      fields: [
        { label: 'Full Name', value: user.name, icon: User },
        { label: 'Email Address', value: user.email, icon: Mail },
        { label: 'Designation', value: user.designation, icon: GraduationCap },
        { label: 'Department', value: user.department, icon: Building },
      ]
    },
    {
      title: 'Account Details',
      fields: [
        { label: 'Member Since', value: user.createdAt.toLocaleDateString(), icon: Calendar },
        { label: 'Verification Status', value: user.isVerified ? 'Verified' : 'Pending', icon: Shield },
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-college-navy">Profile</h1>
          <p className="text-college-gray mt-1">Manage your account information and settings.</p>
        </div>
        <button className="btn-primary flex items-center space-x-2">
          <Edit className="h-4 w-4" />
          <span>Edit Profile</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-1"
        >
          <div className="card text-center">
            <div className="relative inline-block mb-4">
              <div className="w-24 h-24 bg-college-blue rounded-full flex items-center justify-center mx-auto">
                {user.photo ? (
                  <img
                    src={user.photo}
                    alt={user.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                ) : (
                  <User className="h-12 w-12 text-white" />
                )}
              </div>
              <button className="absolute bottom-0 right-0 bg-white border-2 border-gray-200 rounded-full p-2 hover:bg-gray-50 transition-colors duration-200">
                <Camera className="h-4 w-4 text-college-gray" />
              </button>
            </div>
            <h3 className="text-xl font-semibold text-college-navy">{user.name}</h3>
            <p className="text-college-gray">{user.designation}</p>
            <p className="text-sm text-college-gray">{user.department}</p>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                user.isVerified 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                <Shield className="h-4 w-4 mr-1" />
                {user.isVerified ? 'Verified Account' : 'Pending Verification'}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Profile Information */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2 space-y-6"
        >
          {profileSections.map((section, sectionIndex) => (
            <div key={section.title} className="card">
              <h3 className="text-lg font-semibold text-college-navy mb-4">{section.title}</h3>
              <div className="space-y-4">
                {section.fields.map((field, fieldIndex) => (
                  <div key={field.label} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                    <div className="flex items-center space-x-3">
                      <div className="bg-college-light p-2 rounded-lg">
                        <field.icon className="h-4 w-4 text-college-blue" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{field.label}</span>
                    </div>
                    <span className={`text-sm ${
                      field.label === 'Verification Status' 
                        ? user.isVerified ? 'text-green-600' : 'text-yellow-600'
                        : 'text-college-navy'
                    } font-medium`}>
                      {field.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Quick Actions */}
          <div className="card">
            <h3 className="text-lg font-semibold text-college-navy mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button className="btn-secondary flex items-center justify-center space-x-2">
                <Edit className="h-4 w-4" />
                <span>Update Information</span>
              </button>
              <button className="btn-secondary flex items-center justify-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Request Verification</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;