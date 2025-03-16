
import React from 'react';
import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Bell, User } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LangToggle from './LangToggle';

const DashboardHeader = () => {
  const { t } = useLanguage();

  return (
    <header className="h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center px-4">
      <div className="flex items-center w-full">
        <SidebarTrigger />
        
        <div className="ml-auto flex items-center gap-4">
          <LangToggle />
          
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
