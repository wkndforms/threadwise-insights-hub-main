
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Calendar, ChevronRight, Clock, Eye, MessageSquare, ArrowRight, Activity, BarChart2 } from "lucide-react";
import { toast } from "sonner";

export default function Dashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  
  // This handler will be used for the View Analytics button
  const handleViewAnalytics = () => {
    navigate('/dashboard/analytics');
  };

  // Mock data
  const forums = [
    { id: 1, name: "Product Support Forum", questionsFound: 12, lastScan: "Today at 2:30 PM" },
    { id: 2, name: "Developer Community", questionsFound: 4, lastScan: "Today at 8:00 AM" },
  ];

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Overview of your forum scanning activity and unanswered questions
          </p>
        </div>

        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full md:w-auto grid-cols-2 md:grid-cols-3 h-auto gap-4">
            <TabsTrigger value="overview" className="px-4 py-2">Overview</TabsTrigger>
            <TabsTrigger value="forums" className="px-4 py-2">Forums</TabsTrigger>
            <TabsTrigger value="reports" className="px-4 py-2">Reports</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="pt-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Unanswered Questions
                  </CardTitle>
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">16</div>
                  <p className="text-xs text-muted-foreground">
                    +2 from yesterday
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Monitored Forums
                  </CardTitle>
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-muted-foreground">
                    Active monitoring
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Scans Today</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4</div>
                  <p className="text-xs text-muted-foreground">
                    Last scan 30 min ago
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Question Response Rate
                  </CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">78%</div>
                  <p className="text-xs text-muted-foreground">
                    +5% from last week
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4">
              <Card className="col-span-7 md:col-span-4">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>
                    Unanswered questions found in the last 7 days
                  </CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[200px] md:h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                    <div className="flex flex-col items-center text-muted-foreground">
                      <BarChart className="h-8 w-8 mb-2" />
                      <p>Analytics data visualization</p>
                      <Button 
                        variant="link" 
                        onClick={handleViewAnalytics}
                      >
                        View detailed analytics
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-7 md:col-span-3">
                <CardHeader>
                  <CardTitle>Upcoming Scans</CardTitle>
                  <CardDescription>
                    Scheduled forum scans
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      <div className="flex-1 flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">Product Support Forum</p>
                          <p className="text-xs text-muted-foreground">Daily scan</p>
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>Today, 8:00 PM</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      <div className="flex-1 flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">Developer Community</p>
                          <p className="text-xs text-muted-foreground">Weekly scan</p>
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>Tomorrow, 9:00 AM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to="/dashboard/forums">
                      Manage Scan Schedule
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            <div className="mt-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Recent Findings</CardTitle>
                    <CardDescription>
                      Unanswered questions found in recent scans
                    </CardDescription>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handleViewAnalytics}
                  >
                    <BarChart2 className="h-4 w-4 mr-2" />
                    View Analytics
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {forums.map((forum) => (
                      <div key={forum.id} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium">{forum.name}</h3>
                          <div className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                            {forum.questionsFound} questions
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>Last scanned: {forum.lastScan}</span>
                          <Button variant="ghost" size="sm" asChild>
                            <Link to="/dashboard/logs">
                              View Details <ChevronRight className="h-4 w-4 ml-1" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-threadwise-purple to-threadwise-purple-dark hover:opacity-90" asChild>
                    <Link to="/dashboard/forums">
                      <Eye className="h-4 w-4 mr-2" />
                      View All Forums
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="forums" className="pt-4">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Monitored Forums</CardTitle>
                    <CardDescription>Forums being scanned for unanswered questions</CardDescription>
                  </div>
                  <Button asChild>
                    <Link to="/dashboard/forums">
                      Manage Forums <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {forums.map((forum) => (
                    <div key={forum.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">{forum.name}</h3>
                        <div className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                          {forum.questionsFound} questions
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>Last scanned: {forum.lastScan}</span>
                        <Button variant="ghost" size="sm" asChild>
                          <Link to="/dashboard/logs">
                            View Activity <ChevronRight className="h-4 w-4 ml-1" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link to="/dashboard/forums">
                    Manage Forum Configuration
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="reports" className="pt-4">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Reports & Analytics</CardTitle>
                    <CardDescription>View trends and statistics about unanswered questions</CardDescription>
                  </div>
                  <Button onClick={handleViewAnalytics}>
                    View All Reports
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">Weekly Summary</h3>
                      <span className="text-xs text-muted-foreground">Generated April 15, 2025</span>
                    </div>
                    <div className="h-[150px] flex items-center justify-center bg-muted/20 rounded-md mb-2">
                      <BarChart className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div className="flex justify-end">
                      <Button variant="link" size="sm" onClick={handleViewAnalytics}>
                        View Report <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">Response Trends</h3>
                      <span className="text-xs text-muted-foreground">Last 30 days</span>
                    </div>
                    <div className="h-[150px] flex items-center justify-center bg-muted/20 rounded-md mb-2">
                      <Activity className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div className="flex justify-end">
                      <Button variant="link" size="sm" onClick={handleViewAnalytics}>
                        View Report <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-threadwise-purple to-threadwise-purple-dark hover:opacity-90" onClick={handleViewAnalytics}>
                  <BarChart className="h-4 w-4 mr-2" />
                  View All Analytics
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
