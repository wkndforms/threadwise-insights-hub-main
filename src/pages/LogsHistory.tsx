
import { useState } from "react";
import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Download, 
  Search, 
  ArrowUpDown, 
  Eye,
  AlertTriangle,
  CheckCircle,
  XCircle
} from "lucide-react";
import { format } from "date-fns";

interface LogEntry {
  id: string;
  timestamp: Date;
  forumName: string;
  status: "success" | "warning" | "error";
  questionsFound: number;
  message: string;
}

export default function LogsHistory() {
  const [filter, setFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  
  // Mock data
  const logEntries: LogEntry[] = [
    {
      id: "log-001",
      timestamp: new Date(2024, 3, 15, 14, 30),
      forumName: "Product Support Forum",
      status: "success",
      questionsFound: 12,
      message: "Scan completed successfully. 12 unanswered questions found."
    },
    {
      id: "log-002",
      timestamp: new Date(2024, 3, 15, 8, 0),
      forumName: "Developer Community",
      status: "success",
      questionsFound: 4,
      message: "Scan completed successfully. 4 unanswered questions found."
    },
    {
      id: "log-003",
      timestamp: new Date(2024, 3, 14, 14, 30),
      forumName: "Product Support Forum",
      status: "success",
      questionsFound: 7,
      message: "Scan completed successfully. 7 unanswered questions found."
    },
    {
      id: "log-004",
      timestamp: new Date(2024, 3, 14, 8, 0),
      forumName: "Developer Community",
      status: "warning",
      questionsFound: 2,
      message: "Scan completed with warnings. 2 unanswered questions found. Some forum sections were not accessible."
    },
    {
      id: "log-005",
      timestamp: new Date(2024, 3, 13, 14, 30),
      forumName: "Product Support Forum",
      status: "success",
      questionsFound: 9,
      message: "Scan completed successfully. 9 unanswered questions found."
    },
    {
      id: "log-006",
      timestamp: new Date(2024, 3, 13, 8, 0),
      forumName: "Developer Community",
      status: "error",
      questionsFound: 0,
      message: "Scan failed. Error connecting to forum. Please check forum URL and credentials."
    },
  ];

  const filteredLogs = logEntries.filter(log => {
    const matchesText = log.forumName.toLowerCase().includes(filter.toLowerCase()) || 
                        log.message.toLowerCase().includes(filter.toLowerCase());
    const matchesStatus = statusFilter === "all" || log.status === statusFilter;
    return matchesText && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "success":
        return <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20"><CheckCircle className="h-3 w-3 mr-1" /> Success</Badge>;
      case "warning":
        return <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20"><AlertTriangle className="h-3 w-3 mr-1" /> Warning</Badge>;
      case "error":
        return <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20"><XCircle className="h-3 w-3 mr-1" /> Error</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Logs & History</h1>
          <p className="text-muted-foreground">
            View the history of forum scanning activity and results
          </p>
        </div>

        <Tabs defaultValue="logs" className="w-full">
          <TabsList className="grid w-full md:w-auto grid-cols-2 h-auto gap-4">
            <TabsTrigger value="logs" className="px-4 py-2">Scan Logs</TabsTrigger>
            <TabsTrigger value="questions" className="px-4 py-2">Found Questions</TabsTrigger>
          </TabsList>
          
          <TabsContent value="logs" className="pt-4">
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle>Scan History</CardTitle>
                    <CardDescription>
                      History of all forum scanning activity
                    </CardDescription>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search logs..."
                        className="pl-8 w-full sm:w-[200px] md:w-[300px]"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                      />
                    </div>
                    <Select 
                      value={statusFilter} 
                      onValueChange={setStatusFilter}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        <SelectItem value="success">Success</SelectItem>
                        <SelectItem value="warning">Warning</SelectItem>
                        <SelectItem value="error">Error</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[180px]">Date & Time</TableHead>
                        <TableHead>Forum</TableHead>
                        <TableHead className="w-[100px]">Status</TableHead>
                        <TableHead className="w-[80px] text-right">Questions</TableHead>
                        <TableHead>Message</TableHead>
                        <TableHead className="w-[80px]">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredLogs.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={6} className="h-24 text-center">
                            No logs found.
                          </TableCell>
                        </TableRow>
                      ) : (
                        filteredLogs.map((log) => (
                          <TableRow key={log.id}>
                            <TableCell className="font-medium">
                              {format(log.timestamp, "MMM dd, yyyy")}
                              <div className="text-xs text-muted-foreground">
                                {format(log.timestamp, "HH:mm")}
                              </div>
                            </TableCell>
                            <TableCell>{log.forumName}</TableCell>
                            <TableCell>{getStatusBadge(log.status)}</TableCell>
                            <TableCell className="text-right">{log.questionsFound}</TableCell>
                            <TableCell className="max-w-md truncate" title={log.message}>
                              {log.message}
                            </TableCell>
                            <TableCell>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <Eye className="h-4 w-4" />
                                <span className="sr-only">View details</span>
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="questions" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Unanswered Questions</CardTitle>
                <CardDescription>
                  Questions found during scans that need attention
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  This section will display all unanswered questions found during scans, allowing you to track which ones have been addressed.
                </p>
                <Button disabled>Coming Soon</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
