
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  LayoutDashboard,
  Calendar,
  Settings,
  Users,
  BarChart,
  Image,
  LogOut,
  Heart,
  MessageSquare,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const DashboardSidebar = () => {
  const { t } = useLanguage();
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Users, label: 'Accounts', path: '/dashboard/accounts' },
    { icon: Calendar, label: 'Schedule', path: '/dashboard/schedule' },
    { icon: Heart, label: 'Engagement', path: '/dashboard/engagement' },
    { icon: Image, label: 'Posts', path: '/dashboard/posts' },
    { icon: MessageSquare, label: 'Comments', path: '/dashboard/comments' },
    { icon: BarChart, label: 'Analytics', path: '/dashboard/analytics' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-gradient">{t('app.name')}</span>
        </Link>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.path}>
              <SidebarMenuButton asChild className={cn(
                isActive(item.path) ? "bg-sidebar-accent text-sidebar-accent-foreground" : ""
              )}>
                <Link to={item.path}>
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      
      <SidebarFooter className="p-4">
        <Button variant="outline" className="w-full justify-start" asChild>
          <Link to="/">
            <LogOut className="h-5 w-5 mr-2" />
            <span>{t('nav.logout')}</span>
          </Link>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;
