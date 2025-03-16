
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

type LanguageContextType = {
  language: 'en' | 'ar';
  setLanguage: (lang: 'en' | 'ar') => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    // Common
    "app.name": "Insta Manager Pro",
    "app.tagline": "Automate Your Instagram Success",
    "nav.home": "Home",
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.support": "Support",
    "nav.login": "Login",
    "nav.signup": "Sign Up",
    "nav.dashboard": "Dashboard",
    "nav.logout": "Logout",
    
    // Landing Page
    "landing.hero.title": "Automate Your Instagram Growth",
    "landing.hero.subtitle": "Manage your Instagram accounts with powerful automation tools",
    "landing.hero.cta": "Get Started Free",
    "landing.hero.secondary": "View Plans",
    
    "landing.features.title": "Powerful Instagram Management",
    "landing.features.subtitle": "Tools designed to enhance your Instagram presence",
    
    "landing.feature1.title": "Automated Engagement",
    "landing.feature1.description": "Like, comment, and follow accounts with intelligent automation",
    
    "landing.feature2.title": "Post Scheduling",
    "landing.feature2.description": "Schedule posts and stories ahead of time for optimal engagement",
    
    "landing.feature3.title": "Analytics Dashboard",
    "landing.feature3.description": "Track your growth and engagement with detailed analytics",
    
    "landing.feature4.title": "Multiple Accounts",
    "landing.feature4.description": "Manage all your Instagram accounts from one dashboard",
    
    // Subscription Section
    "subscription.title": "Choose Your Plan",
    "subscription.subtitle": "Find the perfect plan for your needs",
    
    "plan.free.title": "Free",
    "plan.free.price": "$0",
    "plan.free.description": "Perfect for individuals starting out",
    "plan.free.feature1": "1 Instagram account",
    "plan.free.feature2": "Basic analytics",
    "plan.free.feature3": "Limited automation",
    "plan.free.cta": "Get Started",
    
    "plan.pro.title": "Pro",
    "plan.pro.price": "$9.99",
    "plan.pro.period": "/month",
    "plan.pro.description": "Ideal for influencers and creators",
    "plan.pro.feature1": "5 Instagram accounts",
    "plan.pro.feature2": "Advanced analytics",
    "plan.pro.feature3": "Full automation features",
    "plan.pro.feature4": "Post scheduling",
    "plan.pro.cta": "Upgrade to Pro",
    
    "plan.business.title": "Business",
    "plan.business.price": "$29.99",
    "plan.business.period": "/month",
    "plan.business.description": "For businesses and agencies",
    "plan.business.feature1": "Unlimited Instagram accounts",
    "plan.business.feature2": "Premium analytics",
    "plan.business.feature3": "Advanced automation",
    "plan.business.feature4": "Post scheduling",
    "plan.business.feature5": "Priority support",
    "plan.business.cta": "Get Business Plan",
    
    // Auth
    "auth.login.title": "Welcome Back",
    "auth.login.subtitle": "Login to your account",
    "auth.login.email": "Email",
    "auth.login.password": "Password",
    "auth.login.remember": "Remember me",
    "auth.login.forgot": "Forgot password?",
    "auth.login.button": "Login",
    "auth.login.or": "Or continue with",
    "auth.login.noAccount": "Don't have an account?",
    "auth.login.signup": "Sign up",
    
    "auth.register.title": "Create an Account",
    "auth.register.subtitle": "Join Insta Manager Pro today",
    "auth.register.name": "Full Name",
    "auth.register.email": "Email",
    "auth.register.password": "Password",
    "auth.register.confirmPassword": "Confirm Password",
    "auth.register.terms": "I agree to the Terms of Service and Privacy Policy",
    "auth.register.button": "Sign Up",
    "auth.register.or": "Or continue with",
    "auth.register.hasAccount": "Already have an account?",
    "auth.register.login": "Login",
    
    // Dashboard
    "dashboard.welcome": "Welcome to your dashboard",
    "dashboard.accounts": "Your Instagram Accounts",
    "dashboard.addAccount": "Add Account",
    "dashboard.stats": "Statistics",
    "dashboard.followers": "Followers",
    "dashboard.engagement": "Engagement",
    "dashboard.posts": "Posts",
    
    // Footer
    "footer.rights": "All rights reserved",
    "footer.terms": "Terms",
    "footer.privacy": "Privacy",
    "footer.contact": "Contact",
  },
  ar: {
    // Common
    "app.name": "إنستا مانجر برو",
    "app.tagline": "أتمتة نجاحك على إنستقرام",
    "nav.home": "الرئيسية",
    "nav.features": "المميزات",
    "nav.pricing": "الأسعار",
    "nav.support": "الدعم",
    "nav.login": "تسجيل الدخول",
    "nav.signup": "إنشاء حساب",
    "nav.dashboard": "لوحة التحكم",
    "nav.logout": "تسجيل الخروج",
    
    // Landing Page
    "landing.hero.title": "أتمتة نمو حسابك على إنستقرام",
    "landing.hero.subtitle": "إدارة حسابات إنستقرام باستخدام أدوات أتمتة قوية",
    "landing.hero.cta": "ابدأ مجاناً",
    "landing.hero.secondary": "عرض الخطط",
    
    "landing.features.title": "إدارة قوية لإنستقرام",
    "landing.features.subtitle": "أدوات مصممة لتعزيز وجودك على إنستقرام",
    
    "landing.feature1.title": "تفاعل تلقائي",
    "landing.feature1.description": "إعجاب، تعليق، ومتابعة الحسابات باستخدام الأتمتة الذكية",
    
    "landing.feature2.title": "جدولة المنشورات",
    "landing.feature2.description": "جدولة المنشورات والقصص مسبقًا للحصول على أفضل تفاعل",
    
    "landing.feature3.title": "لوحة تحليلات",
    "landing.feature3.description": "تتبع نموك وتفاعلك مع تحليلات مفصلة",
    
    "landing.feature4.title": "حسابات متعددة",
    "landing.feature4.description": "إدارة جميع حسابات إنستقرام الخاصة بك من لوحة تحكم واحدة",
    
    // Subscription Section
    "subscription.title": "اختر خطتك",
    "subscription.subtitle": "ابحث عن الخطة المثالية لاحتياجاتك",
    
    "plan.free.title": "مجاني",
    "plan.free.price": "$0",
    "plan.free.description": "مثالي للأفراد المبتدئين",
    "plan.free.feature1": "حساب إنستقرام واحد",
    "plan.free.feature2": "تحليلات أساسية",
    "plan.free.feature3": "أتمتة محدودة",
    "plan.free.cta": "ابدأ الآن",
    
    "plan.pro.title": "برو",
    "plan.pro.price": "$9.99",
    "plan.pro.period": "/شهر",
    "plan.pro.description": "مثالي للمؤثرين والمنشئين",
    "plan.pro.feature1": "5 حسابات إنستقرام",
    "plan.pro.feature2": "تحليلات متقدمة",
    "plan.pro.feature3": "ميزات أتمتة كاملة",
    "plan.pro.feature4": "جدولة المنشورات",
    "plan.pro.cta": "الترقية إلى برو",
    
    "plan.business.title": "أعمال",
    "plan.business.price": "$29.99",
    "plan.business.period": "/شهر",
    "plan.business.description": "للشركات والوكالات",
    "plan.business.feature1": "حسابات إنستقرام غير محدودة",
    "plan.business.feature2": "تحليلات متميزة",
    "plan.business.feature3": "أتمتة متقدمة",
    "plan.business.feature4": "جدولة المنشورات",
    "plan.business.feature5": "دعم ذو أولوية",
    "plan.business.cta": "احصل على خطة الأعمال",
    
    // Auth
    "auth.login.title": "مرحبًا بعودتك",
    "auth.login.subtitle": "تسجيل الدخول إلى حسابك",
    "auth.login.email": "البريد الإلكتروني",
    "auth.login.password": "كلمة المرور",
    "auth.login.remember": "تذكرني",
    "auth.login.forgot": "نسيت كلمة المرور؟",
    "auth.login.button": "تسجيل الدخول",
    "auth.login.or": "أو تابع باستخدام",
    "auth.login.noAccount": "ليس لديك حساب؟",
    "auth.login.signup": "إنشاء حساب",
    
    "auth.register.title": "إنشاء حساب",
    "auth.register.subtitle": "انضم إلى إنستا مانجر برو اليوم",
    "auth.register.name": "الاسم الكامل",
    "auth.register.email": "البريد الإلكتروني",
    "auth.register.password": "كلمة المرور",
    "auth.register.confirmPassword": "تأكيد كلمة المرور",
    "auth.register.terms": "أوافق على شروط الخدمة وسياسة الخصوصية",
    "auth.register.button": "إنشاء حساب",
    "auth.register.or": "أو تابع باستخدام",
    "auth.register.hasAccount": "لديك حساب بالفعل؟",
    "auth.register.login": "تسجيل الدخول",
    
    // Dashboard
    "dashboard.welcome": "مرحبًا بك في لوحة التحكم",
    "dashboard.accounts": "حسابات إنستقرام الخاصة بك",
    "dashboard.addAccount": "إضافة حساب",
    "dashboard.stats": "الإحصائيات",
    "dashboard.followers": "المتابعون",
    "dashboard.engagement": "التفاعل",
    "dashboard.posts": "المنشورات",
    
    // Footer
    "footer.rights": "جميع الحقوق محفوظة",
    "footer.terms": "الشروط",
    "footer.privacy": "الخصوصية",
    "footer.contact": "اتصل بنا",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<'en' | 'ar'>('en');

  const setLanguage = (lang: 'en' | 'ar') => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as 'en' | 'ar' | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else {
      // Default to browser language if possible
      const browserLang = navigator.language.startsWith('ar') ? 'ar' : 'en';
      setLanguage(browserLang);
    }
  }, []);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
