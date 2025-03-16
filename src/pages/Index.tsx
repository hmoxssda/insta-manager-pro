
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';
import SubscriptionCard from '@/components/SubscriptionCard';
import { ThumbsUp, Calendar, BarChart3, Users } from 'lucide-react';

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-white to-purple-50 dark:from-gray-950 dark:to-gray-900">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gradient">{t('landing.hero.title')}</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10">
              {t('landing.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/register">{t('landing.hero.cta')}</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/subscription">{t('landing.hero.secondary')}</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">{t('landing.features.title')}</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {t('landing.features.subtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard 
                icon={ThumbsUp}
                title={t('landing.feature1.title')}
                description={t('landing.feature1.description')}
              />
              <FeatureCard 
                icon={Calendar}
                title={t('landing.feature2.title')}
                description={t('landing.feature2.description')}
              />
              <FeatureCard 
                icon={BarChart3}
                title={t('landing.feature3.title')}
                description={t('landing.feature3.description')}
              />
              <FeatureCard 
                icon={Users}
                title={t('landing.feature4.title')}
                description={t('landing.feature4.description')}
              />
            </div>
          </div>
        </section>
        
        {/* Pricing Section Preview */}
        <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">{t('subscription.title')}</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {t('subscription.subtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <SubscriptionCard type="free" />
              <SubscriptionCard type="pro" isPopular />
              <SubscriptionCard type="business" />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
