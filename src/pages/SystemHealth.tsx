
import { useState, useEffect } from "react";
import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  CheckCircle2, 
  AlertCircle, 
  XCircle, 
  RefreshCw, 
  Server, 
  Database, 
  Activity, 
  Clock, 
  HardDrive, 
  Cpu, 
  BarChart2
} from "lucide-react";
import { toast } from "sonner";

interface SystemMetric {
  name: string;
  value: number;
  max: number;
  unit: string;
  status: "healthy" | "warning" | "critical";
}

interface ServiceStatus {
  name: string;
  status: "operational" | "degraded" | "down";
  uptime: number;
  lastIssue: Date | null;
}

export default function SystemHealth() {
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  
  // Mock system metrics data
  const [systemMetrics, setSystemMetrics] = useState<SystemMetric[]>([
    { name: "CPU Usage", value: 35, max: 100, unit: "%", status: "healthy" },
    { name: "Memory Usage", value: 42, max: 100, unit: "%", status: "healthy" },
    { name: "Disk Usage", value: 68, max: 100, unit: "%", status: "healthy" },
    { name: "Network Traffic", value: 4.2, max: 10, unit: "Mbps", status: "healthy" },
    { name: "Database Connections", value: 45, max: 100, unit: "", status: "healthy" },
    { name: "API Response Time", value: 180, max: 500, unit: "ms", status: "healthy" },
  ]);
  
  // Mock services data
  const [services, setServices] = useState<ServiceStatus[]>([
    { name: "Web Scraper", status: "operational", uptime: 99.98, lastIssue: new Date(2024, 2, 15) },
    { name: "Notification Service", status: "operational", uptime: 99.95, lastIssue: new Date(2024, 1, 20) },
    { name: "Database", status: "operational", uptime: 99.99, lastIssue: null },
    { name: "API Gateway", status: "operational", uptime: 99.97, lastIssue: new Date(2024, 0, 5) },
    { name: "Authentication Service", status: "operational", uptime: 100, lastIssue: null },
    { name: "Email Service", status: "degraded", uptime: 98.5, lastIssue: new Date(2024, 3, 10) },
  ]);
  
  // Recent alerts
  const [alerts, setAlerts] = useState([
    { id: 1, service: "Email Service", message: "High latency detected", severity: "warning", timestamp: new Date(2024, 3, 14, 15, 30) },
    { id: 2, service: "Web Scraper", message: "Memory usage approaching threshold", severity: "info", timestamp: new Date(2024, 3, 12, 9, 45) },
    { id: 3, service: "API Gateway", message: "Increased error rate (4.5%)", severity: "warning", timestamp: new Date(2024, 3, 10, 23, 15) },
  ]);
  
  const refreshData = () => {
    setLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Update some random metrics to simulate changes
      const updatedMetrics = systemMetrics.map(metric => {
        const change = Math.floor(Math.random() * 10) - 5; // Random change between -5 and +5
        const newValue = Math.max(0, Math.min(metric.max, metric.value + change));
        let newStatus: "healthy" | "warning" | "critical" = "healthy";
        
        if (newValue > metric.max * 0.8) {
          newStatus = "critical";
        } else if (newValue > metric.max * 0.6) {
          newStatus = "warning";
        }
        
        return { ...metric, value: newValue, status: newStatus };
      });
      
      setSystemMetrics(updatedMetrics);
      setLastUpdated(new Date());
      setLoading(false);
      toast.success("System metrics refreshed");
    }, 1500);
  };
  
  useEffect(() => {
    // Initial refresh on component mount
    refreshData();
  }, []);
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "operational":
        return <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20"><CheckCircle2 className="h-3 w-3 mr-1" /> Operational</Badge>;
      case "degraded":
        return <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20"><AlertCircle className="h-3 w-3 mr-1" /> Degraded</Badge>;
      case "down":
        return <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20"><XCircle className="h-3 w-3 mr-1" /> Down</Badge>;
      case "healthy":
        return <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">Healthy</Badge>;
      case "warning":
        return <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">Warning</Badge>;
      case "critical":
        return <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20">Critical</Badge>;
      case "info":
        return <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">Info</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };
  
  const getMetricIcon = (name: string) => {
    switch (name) {
      case "CPU Usage":
        return <Cpu className="h-5 w-5 text-muted-foreground" />;
      case "Memory Usage":
        return <HardDrive className="h-5 w-5 text-muted-foreground" />;
      case "Disk Usage":
        return <Database className="h-5 w-5 text-muted-foreground" />;
      case "Network Traffic":
        return <Activity className="h-5 w-5 text-muted-foreground" />;
      case "Database Connections":
        return <Database className="h-5 w-5 text-muted-foreground" />;
      case "API Response Time":
        return <Clock className="h-5 w-5 text-muted-foreground" />;
      default:
        return <BarChart2 className="h-5 w-5 text-muted-foreground" />;
    }
  };
  
  const getProgressColor = (status: string) => {
    switch (status) {
      case "healthy":
        return "bg-green-500";
      case "warning":
        return "bg-yellow-500";
      case "critical":
        return "bg-red-500";
      default:
        return "";
    }
  };

  return (
    <DashboardLayout userRole="admin">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">System Health</h1>
            <p className="text-muted-foreground">
              Monitor the health and performance of the Threadwise system
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-sm text-muted-foreground">
              Last updated: {lastUpdated.toLocaleTimeString()}
            </p>
            <Button 
              onClick={refreshData} 
              disabled={loading}
              variant="outline"
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
          </div>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-full">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle>System Status</CardTitle>
                <CardDescription>
                  Overall health of the Threadwise system
                </CardDescription>
              </div>
              {services.some(s => s.status === "down") ? (
                <Badge variant="destructive">Major Outage</Badge>
              ) : services.some(s => s.status === "degraded") ? (
                <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                  Partial Outage
                </Badge>
              ) : (
                <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                  All Systems Operational
                </Badge>
              )}
            </CardHeader>
          </Card>
        </div>
        
        <Tabs defaultValue="metrics" className="w-full">
          <TabsList className="grid w-full md:w-auto grid-cols-3 h-auto gap-4">
            <TabsTrigger value="metrics" className="px-4 py-2">System Metrics</TabsTrigger>
            <TabsTrigger value="services" className="px-4 py-2">Services</TabsTrigger>
            <TabsTrigger value="alerts" className="px-4 py-2">Recent Alerts</TabsTrigger>
          </TabsList>
          
          <TabsContent value="metrics" className="pt-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {systemMetrics.map((metric, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <div className="flex items-center">
                      {getMetricIcon(metric.name)}
                      <CardTitle className="text-sm font-medium ml-2">
                        {metric.name}
                      </CardTitle>
                    </div>
                    {getStatusBadge(metric.status)}
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {metric.value}{metric.unit}
                    </div>
                    <div className="mt-4">
                      <div className="flex justify-between mb-1 text-xs">
                        <span>0{metric.unit}</span>
                        <span>{metric.max}{metric.unit}</span>
                      </div>
                      <Progress 
                        value={(metric.value / metric.max) * 100} 
                        className={`${getProgressColor(metric.status)}`}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="services" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Service Status</CardTitle>
                <CardDescription>
                  Current operational status of all Threadwise services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {services.map((service, index) => (
                    <div key={index}>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Server className="h-5 w-5 text-muted-foreground" />
                          <h3 className="text-lg font-medium">{service.name}</h3>
                        </div>
                        <div className="flex items-center mt-2 md:mt-0">
                          {getStatusBadge(service.status)}
                          <span className="ml-4 text-sm">
                            {service.uptime}% uptime
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <span>Last issue: {service.lastIssue ? service.lastIssue.toLocaleDateString() : 'None recorded'}</span>
                      </div>
                      <Progress 
                        value={service.uptime} 
                        className={`mt-2 ${
                          service.status === "operational" 
                            ? "bg-green-500" 
                            : service.status === "degraded" 
                            ? "bg-yellow-500" 
                            : "bg-red-500"
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="alerts" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Alerts</CardTitle>
                <CardDescription>
                  System alerts and warnings from the past 7 days
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {alerts.length === 0 ? (
                    <p className="text-center py-4 text-muted-foreground">No recent alerts</p>
                  ) : (
                    alerts.map((alert) => (
                      <div 
                        key={alert.id} 
                        className="flex flex-col p-4 border rounded-lg space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">{alert.service}</span>
                            {getStatusBadge(alert.severity)}
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {alert.timestamp.toLocaleString()}
                          </span>
                        </div>
                        <p>{alert.message}</p>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
