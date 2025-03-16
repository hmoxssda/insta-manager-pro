
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import SubscriptionCard from '@/components/SubscriptionCard';

const Subscription = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">{t('subscription.title')}</h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('subscription.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <SubscriptionCard type="free" />
            <SubscriptionCard type="pro" isPopular />
            <SubscriptionCard type="business" />
          </div>
          
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-6 text-left">
              <div>
                <h3 className="text-lg font-medium mb-2">What happens after my trial ends?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  After your trial ends, you can choose to upgrade to one of our paid plans. Your account will remain active, but some features will be limited.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Can I change my plan later?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Do you offer refunds?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We offer a 14-day money-back guarantee if you're not satisfied with our service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Subscription;
