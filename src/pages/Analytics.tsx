import { useState } from "react";
import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight, ArrowDownRight, Clock, BarChart3, Download, PieChart, TrendingUp } from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart as RechartsPieChart,
  Pie,
  Cell
} from "recharts";

export default function Analytics() {
  const [timeRange, setTimeRange] = useState("30days");
  
  // Mock data for charts
  const weeklyData = [
    { name: "Mon", unanswered: 10, answered: 5 },
    { name: "Tue", unanswered: 15, answered: 8 },
    { name: "Wed", unanswered: 12, answered: 10 },
    { name: "Thu", unanswered: 8, answered: 12 },
    { name: "Fri", unanswered: 20, answered: 15 },
    { name: "Sat", unanswered: 5, answered: 3 },
    { name: "Sun", unanswered: 2, answered: 1 },
  ];
  
  const monthlyData = [
    { name: "Jan", unanswered: 45, answered: 30 },
    { name: "Feb", unanswered: 52, answered: 40 },
    { name: "Mar", unanswered: 48, answered: 45 },
    { name: "Apr", unanswered: 60, answered: 55 },
    { name: "May", unanswered: 40, answered: 35 },
    { name: "Jun", unanswered: 35, answered: 30 },
  ];
  
  const trendData = [
    { date: "Week 1", responseTime: 24, questionsFound: 30 },
    { date: "Week 2", responseTime: 16, questionsFound: 35 },
    { date: "Week 3", responseTime: 18, questionsFound: 32 },
    { date: "Week 4", responseTime: 12, questionsFound: 40 },
    { date: "Week 5", responseTime: 8, questionsFound: 45 },
    { date: "Week 6", responseTime: 6, questionsFound: 38 },
    { date: "Week 7", responseTime: 4, questionsFound: 42 },
    { date: "Week 8", responseTime: 5, questionsFound: 40 },
  ];
  
  const forumDistribution = [
    { name: "Product Support", value: 45, color: "#9b87f5" },
    { name: "Developer Forum", value: 25, color: "#6366f1" },
    { name: "Feature Requests", value: 15, color: "#a855f7" },
    { name: "General Discussion", value: 15, color: "#ec4899" },
  ];
  
  const categoryDistribution = [
    { name: "Technical Issues", value: 35, color: "#9b87f5" },
    { name: "Billing", value: 20, color: "#6366f1" },
    { name: "Feature Inquiries", value: 15, color: "#a855f7" },
    { name: "Documentation", value: 15, color: "#ec4899" },
    { name: "Other", value: 15, color: "#d946ef" },
  ];
  
  // Stats data
  const stats = [
    {
      title: "Total Unanswered",
      value: "246",
      change: "+18%",
      trend: "up",
      description: "vs last period",
    },
    {
      title: "Avg. Response Time",
      value: "6.4h",
      change: "-25%",
      trend: "down",
      description: "vs last period",
    },
    {
      title: "Response Rate",
      value: "82%",
      change: "+5%",
      trend: "up",
      description: "vs last period",
    },
    {
      title: "Forums Monitored",
      value: "8",
      change: "+2",
      trend: "up",
      description: "vs last period",
    },
  ];

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
            <p className="text-muted-foreground">
              Track forum activity metrics and monitor response performance
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select time range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 days</SelectItem>
                <SelectItem value="30days">Last 30 days</SelectItem>
                <SelectItem value="90days">Last 90 days</SelectItem>
                <SelectItem value="6months">Last 6 months</SelectItem>
                <SelectItem value="12months">Last 12 months</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center text-sm text-muted-foreground">
                  {stat.trend === "up" ? (
                    <ArrowUpRight className="h-3 w-3 mr-1 text-forumscout-accent-red" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3 mr-1 text-forumscout-accent-green" />
                  )}
                  <span>{stat.change} {stat.description}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full md:w-auto grid-cols-3 h-auto gap-4">
            <TabsTrigger value="overview" className="px-4 py-2">Overview</TabsTrigger>
            <TabsTrigger value="forums" className="px-4 py-2">Forums</TabsTrigger>
            <TabsTrigger value="trends" className="px-4 py-2">Trends</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="pt-4">
            <div className="grid gap-4 md:grid-cols-2">
              {/* Bar Chart */}
              <Card className="col-span-2 lg:col-span-1">
                <CardHeader>
                  <CardTitle>Questions by Day</CardTitle>
                  <CardDescription>
                    Unanswered vs. answered questions over time
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={weeklyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="unanswered" fill="#9b87f5" name="Unanswered" />
                      <Bar dataKey="answered" fill="#6366f1" name="Answered" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Line Chart */}
              <Card className="col-span-2 lg:col-span-1">
                <CardHeader>
                  <CardTitle>Response Time Trend</CardTitle>
                  <CardDescription>
                    Average response time in hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={trendData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="responseTime" 
                        stroke="#9b87f5" 
                        name="Avg. Response Time (hours)"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              
              {/* Distribution Charts */}
              <Card>
                <CardHeader>
                  <CardTitle>Questions by Forum</CardTitle>
                  <CardDescription>
                    Distribution across monitored forums
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie
                        data={forumDistribution}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {forumDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Questions by Category</CardTitle>
                  <CardDescription>
                    Distribution across question categories
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie
                        data={categoryDistribution}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {categoryDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="forums" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Forum Performance</CardTitle>
                <CardDescription>
                  Detailed analytics for each monitored forum
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Coming soon: Detailed breakdown of performance metrics by forum, including response times, user engagement, and trending topics.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="trends" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Long-Term Trends</CardTitle>
                <CardDescription>
                  Analyze performance trends over time
                </CardDescription>
              </CardHeader>
              <CardContent className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={trendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis yAxisId="left" orientation="left" stroke="#9b87f5" />
                    <YAxis yAxisId="right" orientation="right" stroke="#6366f1" />
                    <Tooltip />
                    <Legend />
                    <Area 
                      type="monotone" 
                      dataKey="responseTime" 
                      yAxisId="left"
                      stroke="#9b87f5" 
                      fill="#9b87f5" 
                      fillOpacity={0.3}
                      name="Avg. Response Time (hours)"
                    />
                    <Area 
                      type="monotone" 
                      dataKey="questionsFound" 
                      yAxisId="right"
                      stroke="#6366f1" 
                      fill="#6366f1" 
                      fillOpacity={0.3}
                      name="Questions Found"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
