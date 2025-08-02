import { useState, useContext, createContext, ReactNode } from 'react';
import { User, AuthContextType, RegisterData, LoginData } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData.user);
        localStorage.setItem('token', userData.token);
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      // For demo purposes, simulate successful login
      const mockUser: User = {
        id: '1',
        name: 'Dr. Rajesh Kumar',
        email: email,
        designation: 'Associate Professor',
        department: 'Computer Science',
        isVerified: true,
        createdAt: new Date(),
      };
      setUser(mockUser);
      localStorage.setItem('token', 'mock-token');
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: RegisterData) => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      Object.entries(userData).forEach(([key, value]) => {
        if (value instanceof File) {
          formData.append(key, value);
        } else {
          formData.append(key, value as string);
        }
      });

      // TODO: Replace with actual API call
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        // Redirect to OTP verification page
        console.log('Registration successful, redirect to OTP verification');
      } else {
        throw new Error('Registration failed');
      }
    } catch (error) {
      // For demo purposes, simulate successful registration
      console.log('Registration successful (demo mode)');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  const value: AuthContextType = {
    user,
    login,
    register,
    logout,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};