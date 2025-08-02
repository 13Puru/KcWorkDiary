import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { BookOpen, Users, Clock, TrendingUp, Calendar, CheckCircle, XCircle } from 'lucide-react';
import { MonthlyStats } from '../types';

const Dashboard: React.FC = () => {
  // Mock data - replace with actual API calls
  const monthlyStats: MonthlyStats = {
    allottedClasses: 120,
    classesTaken: 108,
    classesNotTaken: 12,
    attendancePercentage: 90,
  };

  const chartData = [
    { name: 'Week 1', allotted: 30, taken: 28, notTaken: 2 },
    { name: 'Week 2', allotted: 30, taken: 27, notTaken: 3 },
    { name: 'Week 3', allotted: 30, taken: 29, notTaken: 1 },
    { name: 'Week 4', allotted: 30, taken: 24, notTaken: 6 },
  ];

  const pieData = [
    { name: 'Classes Taken', value: monthlyStats.classesTaken, color: '#10b981' },
    { name: 'Classes Not Taken', value: monthlyStats.classesNotTaken, color: '#ef4444' },
  ];

  const recentActivities = [
    { id: 1, type: 'class', subject: 'Computer Networks', time: '2 hours ago', status: 'completed' },
    { id: 2, type: 'diary', subject: 'Database Systems', time: '4 hours ago', status: 'pending' },
    { id: 3, type: 'class', subject: 'Software Engineering', time: '1 day ago', status: 'completed' },
    { id: 4, type: 'verification', subject: 'Monthly Report', time: '2 days ago', status: 'approved' },
  ];

  const statCards = [
    {
      title: 'Allotted Classes',
      value: monthlyStats.allottedClasses,
      icon: BookOpen,
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
    },
    {
      title: 'Classes Taken',
      value: monthlyStats.classesTaken,
      icon: CheckCircle,
      color: 'bg-green-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
    },
    {
      title: 'Classes Not Taken',
      value: monthlyStats.classesNotTaken,
      icon: XCircle,
      color: 'bg-red-500',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600',
    },
    {
      title: 'Attendance Rate',
      value: `${monthlyStats.attendancePercentage}%`,
      icon: TrendingUp,
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-college-navy">Dashboard</h1>
          <p className="text-college-gray mt-1">Welcome back! Here's your monthly overview.</p>
        </div>
        <div className="flex items-center space-x-2 mt-4 sm:mt-0">
          <Calendar className="h-5 w-5 text-college-gray" />
          <span className="text-sm text-college-gray">
            {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`card ${stat.bgColor} border-l-4 ${stat.color.replace('bg-', 'border-')}`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className={`text-2xl font-bold ${stat.textColor} mt-1`}>{stat.value}</p>
              </div>
              <div className={`p-3 rounded-full ${stat.color}`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="card"
        >
          <h3 className="text-lg font-semibold text-college-navy mb-4">Weekly Class Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="taken" fill="#10b981" name="Classes Taken" />
              <Bar dataKey="notTaken" fill="#ef4444" name="Classes Not Taken" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Pie Chart */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="card"
        >
          <h3 className="text-lg font-semibold text-college-navy mb-4">Class Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Recent Activities */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="card"
      >
        <h3 className="text-lg font-semibold text-college-navy mb-4">Recent Activities</h3>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-full ${
                  activity.status === 'completed' ? 'bg-green-100' :
                  activity.status === 'approved' ? 'bg-blue-100' : 'bg-yellow-100'
                }`}>
                  {activity.type === 'class' && <BookOpen className="h-4 w-4 text-green-600" />}
                  {activity.type === 'diary' && <Clock className="h-4 w-4 text-yellow-600" />}
                  {activity.type === 'verification' && <CheckCircle className="h-4 w-4 text-blue-600" />}
                </div>
                <div>
                  <p className="font-medium text-college-navy">{activity.subject}</p>
                  <p className="text-sm text-college-gray">{activity.time}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                activity.status === 'completed' ? 'bg-green-100 text-green-800' :
                activity.status === 'approved' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {activity.status}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;