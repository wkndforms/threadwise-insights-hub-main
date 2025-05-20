import { useState } from "react";
import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { 
  Search, 
  Plus, 
  Trash2, 
  Edit, 
  UserPlus, 
  Mail, 
  Calendar, 
  Shield, 
  User,
  PlusCircle
} from "lucide-react";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  role: z.enum(["admin", "customer"]),
  isActive: z.boolean().default(true),
});

interface UserData {
  id: string;
  name: string;
  email: string;
  role: "admin" | "customer";
  active: boolean;
  createdAt: Date;
  lastLogin: Date | null;
}

export default function UserManagement() {
  const [users, setUsers] = useState<UserData[]>([
    {
      id: "user-001",
      name: "Alice Johnson",
      email: "alice@example.com",
      role: "admin",
      active: true,
      createdAt: new Date(2024, 1, 15),
      lastLogin: new Date(2024, 3, 15)
    },
    {
      id: "user-002",
      name: "Bob Smith",
      email: "bob@example.com",
      role: "customer",
      active: true,
      createdAt: new Date(2024, 2, 10),
      lastLogin: new Date(2024, 3, 14)
    },
    {
      id: "user-003",
      name: "Charlie Brown",
      email: "charlie@example.com",
      role: "customer",
      active: true,
      createdAt: new Date(2024, 2, 20),
      lastLogin: new Date(2024, 3, 10)
    },
    {
      id: "user-004",
      name: "Diana Prince",
      email: "diana@example.com",
      role: "customer",
      active: false,
      createdAt: new Date(2024, 1, 5),
      lastLogin: new Date(2024, 2, 20)
    },
    {
      id: "user-005",
      name: "Ethan Hunt",
      email: "ethan@example.com",
      role: "admin",
      active: true,
      createdAt: new Date(2024, 0, 15),
      lastLogin: new Date(2024, 3, 12)
    },
  ]);
  
  const [filter, setFilter] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingUserId, setEditingUserId] = useState<string | null>(null);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      role: "customer",
      isActive: true,
    },
  });
  
  const filteredUsers = users.filter(user => {
    return (
      user.name.toLowerCase().includes(filter.toLowerCase()) ||
      user.email.toLowerCase().includes(filter.toLowerCase()) ||
      user.role.toLowerCase().includes(filter.toLowerCase())
    );
  });
  
  const handleEditUser = (user: UserData) => {
    setEditingUserId(user.id);
    form.reset({
      name: user.name,
      email: user.email,
      role: user.role,
      isActive: user.active,
    });
    setDialogOpen(true);
  };
  
  const handleAddUser = () => {
    setEditingUserId(null);
    form.reset({
      name: "",
      email: "",
      role: "customer",
      isActive: true,
    });
    setDialogOpen(true);
  };
  
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (editingUserId) {
      // Update existing user
      setUsers(users.map(user => 
        user.id === editingUserId 
          ? { 
              ...user, 
              name: values.name, 
              email: values.email, 
              role: values.role, 
              active: values.isActive 
            } 
          : user
      ));
      toast.success("User updated successfully");
    } else {
      // Add new user
      const newUser: UserData = {
        id: `user-${Math.floor(Math.random() * 10000)}`,
        name: values.name,
        email: values.email,
        role: values.role,
        active: values.isActive,
        createdAt: new Date(),
        lastLogin: null,
      };
      setUsers([...users, newUser]);
      toast.success("User added successfully");
    }
    setDialogOpen(false);
  };
  
  const handleDeleteUser = (userId: string) => {
    setUsers(users.filter(user => user.id !== userId));
    toast.info("User deleted");
  };
  
  const handleToggleUserStatus = (userId: string) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, active: !user.active } : user
    ));
    
    const user = users.find(u => u.id === userId);
    if (user) {
      toast.success(`User ${user.active ? 'deactivated' : 'activated'}`);
    }
  };

  return (
    <DashboardLayout userRole="admin">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
            <p className="text-muted-foreground">
              Manage users and their permissions
            </p>
          </div>
          <Button
            onClick={handleAddUser}
            className="bg-gradient-to-r from-forumscout-purple to-forumscout-purple-dark hover:opacity-90"
          >
            <PlusCircle className="mr-2 h-4 w-4" /> Add New User
          </Button>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle>Users</CardTitle>
                <CardDescription>
                  Manage users and their access permissions
                </CardDescription>
              </div>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search users..."
                  className="pl-8 w-full md:w-[300px]"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Last Login</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="h-24 text-center">
                        No users found.
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          <Badge variant={user.role === "admin" ? "default" : "outline"}>
                            {user.role === "admin" ? (
                              <><Shield className="h-3 w-3 mr-1" /> Admin</>
                            ) : (
                              <><User className="h-3 w-3 mr-1" /> Customer</>
                            )}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge 
                            variant="outline" 
                            className={
                              user.active 
                                ? "bg-green-500/10 text-green-500 border-green-500/20" 
                                : "bg-gray-500/10 text-gray-500 border-gray-500/20"
                            }
                          >
                            {user.active ? "Active" : "Inactive"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1 text-muted-foreground" />
                            <span>{user.createdAt.toLocaleDateString()}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          {user.lastLogin ? (
                            <div className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1 text-muted-foreground" />
                              <span>{user.lastLogin.toLocaleDateString()}</span>
                            </div>
                          ) : (
                            <span className="text-muted-foreground text-sm">Never</span>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end space-x-2">
                            <Button 
                              variant="ghost" 
                              size="icon"
                              onClick={() => handleEditUser(user)}
                            >
                              <Edit className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="icon"
                              onClick={() => handleToggleUserStatus(user.id)}
                            >
                              <Switch
                                id={`active-status-${user.id}`}
                                checked={user.active}
                                onCheckedChange={() => handleToggleUserStatus(user.id)}
                                className="data-[state=checked]:bg-forumscout-purple"
                              />
                              <span className="sr-only">Toggle status</span>
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="icon"
                              onClick={() => handleDeleteUser(user.id)}
                            >
                              <Trash2 className="h-4 w-4 text-destructive" />
                              <span className="sr-only">Delete</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
        
        {/* Add/Edit User Dialog */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{editingUserId ? "Edit User" : "Add New User"}</DialogTitle>
              <DialogDescription>
                {editingUserId 
                  ? "Update the user details below." 
                  : "Fill in the details to add a new user."}
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a role" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="customer">Customer</SelectItem>
                          <SelectItem value="admin">Admin</SelectItem>
                        </SelectContent>
                      </Select>
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
                          User can access the platform when active
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <DialogFooter>
                  <Button type="submit">Save</Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
}
