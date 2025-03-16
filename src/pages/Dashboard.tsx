
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SidebarProvider } from '@/components/ui/sidebar';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardHeader from '@/components/DashboardHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Users, Heart, BarChart3, Image } from 'lucide-react';

const Dashboard = () => {
  const { t } = useLanguage();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        
        <div className="flex-1">
          <DashboardHeader />
          
          <main className="p-6">
            <div className="mb-8">
              <h1 className="text-3xl font-bold">{t('dashboard.welcome')}</h1>
            </div>
            
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    {t('dashboard.followers')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,234</div>
                  <p className="text-xs text-muted-foreground">
                    +12% from last month
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    {t('dashboard.engagement')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5.7%</div>
                  <p className="text-xs text-muted-foreground">
                    +2.1% from last month
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    {t('dashboard.posts')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">
                    4 posts this week
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Accounts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1</div>
                  <p className="text-xs text-muted-foreground">
                    From 5 allowed in your plan
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Instagram Accounts */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">{t('dashboard.accounts')}</h2>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  {t('dashboard.addAccount')}
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                        I
                      </div>
                      <div>
                        <CardTitle>@instagram_user</CardTitle>
                        <CardDescription>Personal Account</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 mt-2">
                      <div className="flex flex-col items-center">
                        <Users className="h-5 w-5 text-muted-foreground mb-1" />
                        <span className="text-sm font-medium">1.2K</span>
                        <span className="text-xs text-muted-foreground">Followers</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Heart className="h-5 w-5 text-muted-foreground mb-1" />
                        <span className="text-sm font-medium">5.7%</span>
                        <span className="text-xs text-muted-foreground">Engagement</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Image className="h-5 w-5 text-muted-foreground mb-1" />
                        <span className="text-sm font-medium">24</span>
                        <span className="text-xs text-muted-foreground">Posts</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-4">Manage</Button>
                  </CardContent>
                </Card>
                
                <Card className="border-dashed flex flex-col items-center justify-center p-6">
                  <div className="h-12 w-12 rounded-full border-2 border-dashed border-muted-foreground flex items-center justify-center mb-4">
                    <Plus className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h3 className="font-medium mb-2">Add Instagram Account</h3>
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    Connect another Instagram account to manage
                  </p>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Account
                  </Button>
                </Card>
              </div>
            </div>
            
            {/* Activity Overview */}
            <div>
              <h2 className="text-xl font-semibold mb-6">{t('dashboard.stats')}</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Activity Overview</CardTitle>
                  <CardDescription>Your engagement performance for the last 30 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] flex items-center justify-center border rounded-md">
                    <div className="flex items-center">
                      <BarChart3 className="h-8 w-8 text-muted-foreground mr-2" />
                      <span>Analytics chart will be displayed here</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
