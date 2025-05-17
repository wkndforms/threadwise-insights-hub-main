
import { useState } from "react";
import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Bell, BellOff, Mail, MessageSquare, Settings, Video } from "lucide-react";
import { toast } from "sonner";

export default function Notifications() {
  const [emailEnabled, setEmailEnabled] = useState(true);
  const [slackEnabled, setSlackEnabled] = useState(true);
  const [teamsEnabled, setTeamsEnabled] = useState(false);
  
  const handleManageClick = () => {
    toast.info("Notification settings page", {
      description: "This feature is coming soon.",
    });
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
          <p className="text-muted-foreground">
            Configure how and where you want to receive notifications
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full md:w-auto grid-cols-3 h-auto gap-4">
            <TabsTrigger value="all" className="px-4 py-2">All</TabsTrigger>
            <TabsTrigger value="unread" className="px-4 py-2">Unread</TabsTrigger>
            <TabsTrigger value="settings" className="px-4 py-2">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="pt-4">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Recent Notifications</CardTitle>
                    <CardDescription>All notifications from your forums</CardDescription>
                  </div>
                  <Button onClick={handleManageClick}>
                    Manage Notifications
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg hover:bg-accent/10 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Bell size={20} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-medium">New unanswered questions found</h4>
                          <Badge variant="outline" className="text-xs">New</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          6 new unanswered questions were found in "Product Support Forum" today.
                        </p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <span>Today at 2:30 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg hover:bg-accent/10 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Bell size={20} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-medium">Weekly report ready</h4>
                          <Badge variant="outline" className="text-xs">1d ago</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          Your weekly forum activity report is ready to view.
                        </p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <span>Yesterday at 9:00 AM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg bg-muted/30 hover:bg-accent/10 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="bg-muted p-2 rounded-full">
                        <BellOff size={20} className="text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-medium text-muted-foreground">Forum scanner completed</h4>
                          <Badge variant="outline" className="text-xs">3d ago</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          Scanner completed for "Developer Community" with no new unanswered questions.
                        </p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <span>3 days ago</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="unread" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Unread Notifications</CardTitle>
                <CardDescription>Notifications you haven't seen yet</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg hover:bg-accent/10 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Bell size={20} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-medium">New unanswered questions found</h4>
                          <Badge variant="outline" className="text-xs">New</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          6 new unanswered questions were found in "Product Support Forum" today.
                        </p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <span>Today at 2:30 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="settings" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>Configure your notification preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Notification Channels</h3>
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center justify-between space-x-2 p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <Mail className="h-5 w-5" />
                          <div>
                            <h4 className="font-medium">Email Notifications</h4>
                            <p className="text-sm text-muted-foreground">
                              Receive notifications via email
                            </p>
                          </div>
                        </div>
                        <Switch 
                          checked={emailEnabled} 
                          onCheckedChange={setEmailEnabled} 
                        />
                      </div>
                      
                      <div className="flex items-center justify-between space-x-2 p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <MessageSquare className="h-5 w-5" />
                          <div>
                            <h4 className="font-medium">Slack Notifications</h4>
                            <p className="text-sm text-muted-foreground">
                              Send notifications to Slack
                            </p>
                          </div>
                        </div>
                        <Switch 
                          checked={slackEnabled} 
                          onCheckedChange={setSlackEnabled} 
                        />
                      </div>
                      
                      <div className="flex items-center justify-between space-x-2 p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <Video className="h-5 w-5" />
                          <div>
                            <h4 className="font-medium">Microsoft Teams</h4>
                            <p className="text-sm text-muted-foreground">
                              Send notifications to MS Teams
                            </p>
                          </div>
                        </div>
                        <Switch 
                          checked={teamsEnabled} 
                          onCheckedChange={setTeamsEnabled} 
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button variant="outline" className="w-full" onClick={handleManageClick}>
                      <Settings className="mr-2 h-4 w-4" />
                      Advanced Settings
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
