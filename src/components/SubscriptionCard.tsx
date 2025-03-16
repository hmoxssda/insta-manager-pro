
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SubscriptionCardProps {
  type: 'free' | 'pro' | 'business';
  isPopular?: boolean;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({ type, isPopular = false }) => {
  const { t } = useLanguage();

  const getFeatures = () => {
    switch (type) {
      case 'free':
        return [
          t('plan.free.feature1'),
          t('plan.free.feature2'),
          t('plan.free.feature3'),
        ];
      case 'pro':
        return [
          t('plan.pro.feature1'),
          t('plan.pro.feature2'),
          t('plan.pro.feature3'),
          t('plan.pro.feature4'),
        ];
      case 'business':
        return [
          t('plan.business.feature1'),
          t('plan.business.feature2'),
          t('plan.business.feature3'),
          t('plan.business.feature4'),
          t('plan.business.feature5'),
        ];
      default:
        return [];
    }
  };

  const getTitle = () => t(`plan.${type}.title`);
  const getPrice = () => t(`plan.${type}.price`);
  const getPeriod = () => type !== 'free' ? t(`plan.${type}.period`) : '';
  const getDescription = () => t(`plan.${type}.description`);
  const getButtonText = () => t(`plan.${type}.cta`);

  return (
    <Card className={`w-full ${isPopular ? 'gradient-border scale-105 shadow-lg' : ''}`}>
      {isPopular && (
        <div className="bg-accent text-accent-foreground text-center py-1 text-sm font-medium rounded-t-lg">
          Most Popular
        </div>
      )}
      <CardHeader>
        <CardTitle>{getTitle()}</CardTitle>
        <CardDescription>{getDescription()}</CardDescription>
        <div className="mt-4">
          <span className="text-4xl font-bold">{getPrice()}</span>
          {getPeriod() && <span className="text-gray-500 dark:text-gray-400">{getPeriod()}</span>}
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {getFeatures().map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className={`w-full ${isPopular ? 'bg-accent hover:bg-accent/90' : ''}`}>
          {getButtonText()}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SubscriptionCard;
