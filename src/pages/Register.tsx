
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthForm from '@/components/AuthForm';

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-md">
          <AuthForm type="register" />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Register;
