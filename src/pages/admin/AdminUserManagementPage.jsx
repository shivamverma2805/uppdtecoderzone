import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Users, Search, UserPlus, Edit, Trash2, Filter } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const mockUsers = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "student", joined: "2023-01-15", status: "Active" },
  { id: 2, name: "Bob Smith", email: "bob.tutor@example.com", role: "tutor", joined: "2022-11-20", status: "Active" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "student", joined: "2023-03-10", status: "Suspended" },
  { id: 4, name: "Diana Prince", email: "diana.admin@example.com", role: "admin", joined: "2022-05-01", status: "Active" },
];

const AdminUserManagementPage = () => {
  const { toast } = useToast();
  // Add state for search, filter, pagination etc. later

  const handleAction = (action, userName) => {
    toast({
      title: `🚧 ${action} User (Mock)`,
      description: `Action "${action}" for user ${userName} is a placeholder. Full functionality coming soon! 🚀`,
    });
  };

  return (
    <>
      <Helmet>
        <title>User Management - Admin - CodersZonee</title>
        <meta name="description" content="Manage all users (students, tutors, admins) on the CodersZonee platform." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-8 px-4"
      >
        <header className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-4xl font-bold text-[#FF6B35] flex items-center">
              <Users className="mr-3 h-10 w-10" /> User Management
            </h1>
            <p className="text-lg text-slate-300">View, edit, and manage all platform users.</p>
          </div>
          <Button className="mt-4 md:mt-0 bg-[#FF6B35] text-black hover:bg-orange-400" onClick={() => handleAction("Add New", "User")}>
            <UserPlus className="mr-2 h-5 w-5" /> Add New User
          </Button>
        </header>

        <Card className="bg-slate-800 border-slate-700 text-white">
          <CardHeader>
            <CardTitle className="text-2xl text-[#FF6B35]">All Users</CardTitle>
            <CardDescription className="text-slate-400">A comprehensive list of all registered users.</CardDescription>
            <div className="mt-4 flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Input type="search" placeholder="Search users by name, email, role..." className="pl-10 bg-slate-700 border-slate-600 text-white focus:border-[#FF6B35]" />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              </div>
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white" onClick={() => handleAction("Filter", "Users")}>
                <Filter className="mr-2 h-4 w-4" /> Filter Users
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-slate-300">
                <thead className="text-xs text-slate-400 uppercase bg-slate-700">
                  <tr>
                    <th scope="col" className="px-6 py-3">Name</th>
                    <th scope="col" className="px-6 py-3">Email</th>
                    <th scope="col" className="px-6 py-3">Role</th>
                    <th scope="col" className="px-6 py-3">Joined Date</th>
                    <th scope="col" className="px-6 py-3">Status</th>
                    <th scope="col" className="px-6 py-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockUsers.map(user => (
                    <tr key={user.id} className="bg-slate-800 border-b border-slate-700 hover:bg-slate-700/50">
                      <td className="px-6 py-4 font-medium text-white whitespace-nowrap">{user.name}</td>
                      <td className="px-6 py-4">{user.email}</td>
                      <td className="px-6 py-4 capitalize">{user.role}</td>
                      <td className="px-6 py-4">{user.joined}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${user.status === 'Active' ? 'bg-green-600/30 text-green-300' : 'bg-red-600/30 text-red-300'}`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center space-x-2">
                        <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300 p-1" onClick={() => handleAction("Edit", user.name)}>
                          <Edit size={16} />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300 p-1" onClick={() => handleAction("Delete", user.name)}>
                          <Trash2 size={16} />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Placeholder for pagination */}
            <div className="mt-6 text-center text-slate-400">Pagination controls will be here.</div>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
};

export default AdminUserManagementPage;