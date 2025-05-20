import { useState } from "react";
import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Plus, Trash2, ArrowRight, Save, Settings } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

const formSchema = z.object({
  forumName: z.string().min(2, { message: "Forum name must be at least 2 characters." }),
  forumUrl: z.string().url({ message: "Please enter a valid URL." }),
  scanFrequency: z.enum(["hourly", "daily", "weekly"]),
  isActive: z.boolean().default(true),
  notifyEmail: z.boolean().default(true),
  notifySlack: z.boolean().default(false),
  notifyTeams: z.boolean().default(false),
  emailRecipients: z.string().optional(),
  slackChannel: z.string().optional(),
  teamsWebhook: z.string().optional(),
});

export default function ForumConfig() {
  const [forums, setForums] = useState([
    {
      id: 1,
      name: "Product Support Forum",
      url: "https://example.com/forum/product",
      frequency: "daily",
      active: true,
    },
    {
      id: 2,
      name: "Developer Community",
      url: "https://example.com/forum/developers",
      frequency: "weekly",
      active: true,
    },
  ]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      forumName: "",
      forumUrl: "",
      scanFrequency: "daily",
      isActive: true,
      notifyEmail: true,
      notifySlack: false,
      notifyTeams: false,
      emailRecipients: "",
      slackChannel: "",
      teamsWebhook: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Add a new forum
    const newForum = {
      id: forums.length + 1,
      name: values.forumName,
      url: values.forumUrl,
      frequency: values.scanFrequency,
      active: values.isActive,
    };
    
    setForums([...forums, newForum]);
    form.reset();
    
    toast.success("Forum added successfully", {
      description: `${values.forumName} has been added to your monitored forums.`,
    });
  }

  const removeForum = (id: number) => {
    setForums(forums.filter(forum => forum.id !== id));
    toast.info("Forum removed", {
      description: "The forum has been removed from monitoring.",
    });
  };

  const handleManageForums = () => {
    toast.info("Manage Forums", {
      description: "This feature is coming soon.",
    });
  };

  const handleCompleteSetup = () => {
    toast.success("Setup Completed", {
      description: "Your forum scanner has been configured successfully.",
    });
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Forums Configuration</h1>
          <p className="text-muted-foreground">
            Manage which forums ForumScout will monitor for unanswered questions
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle>Configure Forum Scanner</CardTitle>
                <CardDescription>Complete your setup to start monitoring forums</CardDescription>
              </div>
              <Button onClick={handleCompleteSetup}>
                Complete Setup <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">1</div>
                  <h3 className="font-medium">Add your first forum</h3>
                </div>
                <p className="text-sm text-muted-foreground pl-10">
                  Configure the forums you want to monitor for unanswered questions
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">2</div>
                  <h3 className="font-medium">Configure notifications</h3>
                </div>
                <p className="text-sm text-muted-foreground pl-10">
                  Choose how you want to be notified about unanswered questions
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
          <h2 className="text-2xl font-bold">Forum Configuration</h2>
          <Button variant="outline" onClick={handleManageForums}>
            <Settings className="mr-2 h-4 w-4" />
            Manage Forums
          </Button>
        </div>

        <Tabs defaultValue="forums" className="w-full">
          <TabsList className="grid w-full md:w-auto grid-cols-2 md:grid-cols-3 h-auto gap-4">
            <TabsTrigger value="forums" className="px-4 py-2">Forums</TabsTrigger>
            <TabsTrigger value="notifications" className="px-4 py-2">Notifications</TabsTrigger>
            <TabsTrigger value="categories" className="px-4 py-2">Categories</TabsTrigger>
          </TabsList>

          <TabsContent value="forums" className="pt-4">
            <div className="grid gap-4 md:grid-cols-7">
              {/* Add New Forum Form */}
              <Card className="col-span-7 md:col-span-3">
                <CardHeader>
                  <CardTitle>Add New Forum</CardTitle>
                  <CardDescription>
                    Configure a new forum to monitor for unanswered questions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="forumName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Forum Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Product Support Forum" {...field} />
                            </FormControl>
                            <FormDescription>
                              A descriptive name for the forum
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="forumUrl"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Forum URL</FormLabel>
                            <FormControl>
                              <Input placeholder="https://example.com/forum" {...field} />
                            </FormControl>
                            <FormDescription>
                              The full URL of the forum to scan
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="scanFrequency"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Scan Frequency</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select frequency" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="hourly">Hourly</SelectItem>
                                <SelectItem value="daily">Daily</SelectItem>
                                <SelectItem value="weekly">Weekly</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormDescription>
                              How often ForumScout should check for new questions
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="isActive"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                              <FormLabel>Active</FormLabel>
                              <FormDescription>
                                Enable monitoring for this forum
                              </FormDescription>
                            </div>
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className="data-[state=checked]:bg-forumscout-purple"
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full bg-gradient-to-r from-forumscout-purple to-forumscout-purple-dark hover:opacity-90">
                        <Plus className="mr-2 h-4 w-4" /> Add Forum
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>

              {/* Current Forums List */}
              <Card className="col-span-7 md:col-span-4">
                <CardHeader>
                  <CardTitle>Currently Monitored Forums</CardTitle>
                  <CardDescription>
                    These forums are being regularly checked for unanswered questions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {forums.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <p className="text-muted-foreground mb-4">No forums are currently being monitored</p>
                      <Button onClick={() => document.getElementById('add-forum')?.focus()}>
                        Add your first forum
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {forums.map((forum) => (
                        <div 
                          key={forum.id} 
                          className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/5 transition-colors"
                        >
                          <div className="space-y-1">
                            <h4 className="font-medium">{forum.name}</h4>
                            <p className="text-sm text-muted-foreground">{forum.url}</p>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <span className={`h-2 w-2 rounded-full ${forum.active ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                              <span>{forum.active ? 'Active' : 'Paused'}</span>
                              <span>•</span>
                              <span>Scanned {forum.frequency}</span>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">Edit</Button>
                            <Button 
                              variant="destructive" 
                              size="sm"
                              onClick={() => removeForum(forum.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="notifications" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>Configure how and where you want to receive alerts</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Email Notifications</h3>
                      <FormField
                        control={form.control}
                        name="notifyEmail"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                              <FormLabel>Email Notifications</FormLabel>
                              <FormDescription>
                                Receive email alerts for new questions.
                              </FormDescription>
                            </div>
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className="data-[state=checked]:bg-forumscout-purple"
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="emailRecipients"
                        render={({ field }) => (
                          <FormItem className={form.getValues("notifyEmail") ? "" : "hidden"}>
                            <FormLabel>Email Recipients</FormLabel>
                            <FormControl>
                              <Input placeholder="team@example.com, support@example.com" {...field} />
                            </FormControl>
                            <FormDescription>
                              Comma-separated list of email addresses.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Slack Notifications</h3>
                      <FormField
                        control={form.control}
                        name="notifySlack"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                              <FormLabel>Slack Notifications</FormLabel>
                              <FormDescription>
                                Get Slack messages for new questions.
                              </FormDescription>
                            </div>
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className="data-[state=checked]:bg-forumscout-purple"
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="slackChannel"
                        render={({ field }) => (
                          <FormItem className={form.getValues("notifySlack") ? "" : "hidden"}>
                            <FormLabel>Slack Channel</FormLabel>
                            <FormControl>
                              <Input placeholder="#support-alerts" {...field} />
                            </FormControl>
                            <FormDescription>
                              The Slack channel to send notifications to.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Microsoft Teams Notifications</h3>
                      <FormField
                        control={form.control}
                        name="notifyTeams"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                              <FormLabel>Microsoft Teams Notifications</FormLabel>
                              <FormDescription>
                                Get Teams messages for new questions.
                              </FormDescription>
                            </div>
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className="data-[state=checked]:bg-forumscout-purple"
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="teamsWebhook"
                        render={({ field }) => (
                          <FormItem className={form.getValues("notifyTeams") ? "" : "hidden"}>
                            <FormLabel>Teams Webhook URL</FormLabel>
                            <FormControl>
                              <Input placeholder="https://outlook.office.com/webhook/..." {...field} />
                            </FormControl>
                            <FormDescription>
                              The Microsoft Teams incoming webhook URL.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <Button type="button" onClick={() => toast.success("Notification settings saved")} className="w-full bg-gradient-to-r from-forumscout-purple to-forumscout-purple-dark hover:opacity-90">
                      <Save className="mr-2 h-4 w-4" /> Save Notification Settings
                    </Button>
                  </div>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="categories" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Category Mapping</CardTitle>
                <CardDescription>Map forum categories to notification channels</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Coming soon: Define which notification channels receive alerts based on question categories.
                </p>
                <Button disabled>Configure Categories</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}

