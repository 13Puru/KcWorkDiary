import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, BarChart3, Shield, Clock, Award } from 'lucide-react';

const WelcomePage: React.FC = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Digital Work Diary',
      description: 'Maintain comprehensive records of your daily teaching activities and academic work.',
    },
    {
      icon: BarChart3,
      title: 'Progress Tracking',
      description: 'Monitor your teaching progress with detailed analytics and monthly reports.',
    },
    {
      icon: Users,
      title: 'Class Management',
      description: 'Track student attendance, class schedules, and academic performance efficiently.',
    },
    {
      icon: Shield,
      title: 'Secure & Verified',
      description: 'Your data is protected with advanced security measures and verification systems.',
    },
  ];

  const stats = [
    { number: '150+', label: 'Active Teachers' },
    { number: '5000+', label: 'Students Served' },
    { number: '25+', label: 'Departments' },
    { number: '99.9%', label: 'Uptime' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-college-light to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-college-navy leading-tight">
                Welcome to{' '}
                <span className="text-college-blue">Karimganj College</span>{' '}
                Work Diary System
              </h1>
              <p className="text-xl text-college-gray mt-6 leading-relaxed">
                Streamline your academic workflow with our comprehensive digital diary system. 
                Track classes, manage schedules, and maintain detailed records of your teaching activities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button className="btn-primary text-lg px-8 py-3">
                  Get Started Today
                </button>
                <button className="btn-secondary text-lg px-8 py-3">
                  Learn More
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Karimganj College Campus"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-college-navy">Excellence in Education</p>
                    <p className="text-sm text-college-gray">Since 1965</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-college-navy mb-4">
              Powerful Features for Modern Educators
            </h2>
            <p className="text-xl text-college-gray max-w-3xl mx-auto">
              Our comprehensive platform provides everything you need to manage your academic responsibilities efficiently.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-college-blue/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-college-blue" />
                </div>
                <h3 className="text-xl font-semibold text-college-navy mb-3">
                  {feature.title}
                </h3>
                <p className="text-college-gray leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-college-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Our Academic Community
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join hundreds of educators who have transformed their workflow with our platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-college-navy to-college-blue">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Teaching Experience?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join Karimganj College's digital revolution and take your academic management to the next level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-college-blue hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-college-blue font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                Contact Support
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WelcomePage;