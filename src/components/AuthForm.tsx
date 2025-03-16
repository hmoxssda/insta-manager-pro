
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { useLanguage } from '@/contexts/LanguageContext';

interface AuthFormProps {
  type: 'login' | 'register';
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false,
    agreeToTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, we just redirect to dashboard
    navigate('/dashboard');
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg">
      <CardHeader>
        <CardTitle>{t(type === 'login' ? 'auth.login.title' : 'auth.register.title')}</CardTitle>
        <CardDescription>
          {t(type === 'login' ? 'auth.login.subtitle' : 'auth.register.subtitle')}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {type === 'register' && (
            <div className="space-y-2">
              <Label htmlFor="name">{t('auth.register.name')}</Label>
              <Input 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="email">{t('auth.login.email')}</Label>
            <Input 
              id="email" 
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">{t('auth.login.password')}</Label>
            <Input 
              id="password" 
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required 
            />
          </div>
          
          {type === 'register' && (
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">{t('auth.register.confirmPassword')}</Label>
              <Input 
                id="confirmPassword" 
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required 
              />
            </div>
          )}
          
          {type === 'login' ? (
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Checkbox 
                  id="rememberMe" 
                  checked={formData.rememberMe}
                  onCheckedChange={(checked) => 
                    handleCheckboxChange('rememberMe', checked as boolean)
                  }
                />
                <Label htmlFor="rememberMe" className="text-sm cursor-pointer">
                  {t('auth.login.remember')}
                </Label>
              </div>
              <Button variant="link" size="sm" asChild>
                <Link to="/forgot-password">{t('auth.login.forgot')}</Link>
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Checkbox 
                id="agreeToTerms" 
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) => 
                  handleCheckboxChange('agreeToTerms', checked as boolean)
                }
                required
              />
              <Label htmlFor="agreeToTerms" className="text-sm cursor-pointer">
                {t('auth.register.terms')}
              </Label>
            </div>
          )}
          
          <Button type="submit" className="w-full">
            {t(type === 'login' ? 'auth.login.button' : 'auth.register.button')}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div className="text-sm text-center">
          {type === 'login' ? (
            <>
              {t('auth.login.noAccount')}{' '}
              <Link to="/register" className="text-primary hover:underline">
                {t('auth.login.signup')}
              </Link>
            </>
          ) : (
            <>
              {t('auth.register.hasAccount')}{' '}
              <Link to="/login" className="text-primary hover:underline">
                {t('auth.register.login')}
              </Link>
            </>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default AuthForm;
