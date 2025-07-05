import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tag, PlusCircle, Edit, Trash2, Percent, CalendarDays } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
// Assuming DatePicker component will be created or imported
// For now, using Input type="date" as placeholder

const mockOffers = [
  { id: 1, name: "Summer Sale 20%", type: "Percentage", value: "20%", appliesTo: "All Courses", startDate: "2023-06-01", endDate: "2023-06-30", status: "Active" },
  { id: 2, name: "New User Discount $10", type: "Fixed Amount", value: "$10", appliesTo: "First Purchase", startDate: "N/A", endDate: "N/A", status: "Active" },
  { id: 3, name: "Weekend Flash Sale", type: "Percentage", value: "15%", appliesTo: "Specific Categories", startDate: "2023-05-20", endDate: "2023-05-21", status: "Expired" },
];

const AdminOffersManagementPage = () => {
  const { toast } = useToast();
  const [showCreateModal, setShowCreateModal] = useState(false);
  // Form state for creating/editing offers
  const [offerData, setOfferData] = useState({ name: '', type: '', value: '', appliesTo: '', startDate: '', endDate: '' });

  const handleAction = (actionName, offerName = '') => {
    toast({
      title: `🚧 ${actionName} ${offerName} (Mock)`,
      description: `This action is a placeholder. Full functionality coming soon! 🚀`,
    });
  };

  const handleCreateOffer = (e) => {
    e.preventDefault();
    // Add validation here
    handleAction("Create Offer", offerData.name);
    setShowCreateModal(false);
    setOfferData({ name: '', type: '', value: '', appliesTo: '', startDate: '', endDate: '' }); // Reset form
  };

  return (
    <>
      <Helmet>
        <title>Offers & Discounts - Admin - CodersZonee</title>
        <meta name="description" content="Manage promotional offers, discounts, and coupon codes for the CodersZonee platform." />
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
              <Tag className="mr-3 h-10 w-10" /> Offers & Discount Management
            </h1>
            <p className="text-lg text-slate-300">Create, manage, and track promotional campaigns.</p>
          </div>
          <Button className="mt-4 md:mt-0 bg-[#FF6B35] text-black hover:bg-orange-400" onClick={() => setShowCreateModal(true)}>
            <PlusCircle className="mr-2 h-5 w-5" /> Create New Offer
          </Button>
        </header>

        {/* Create/Edit Offer Modal (Simplified) */}
        {showCreateModal && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          >
            <Card className="bg-slate-800 border-slate-700 text-white w-full max-w-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-[#FF6B35]">Create New Offer</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCreateOffer} className="space-y-4">
                  <div>
                    <Label htmlFor="offerName" className="text-slate-300">Offer Name</Label>
                    <Input id="offerName" value={offerData.name} onChange={(e) => setOfferData({...offerData, name: e.target.value})} required className="bg-slate-700 border-slate-600"/>
                  </div>
                  <div>
                    <Label htmlFor="offerType" className="text-slate-300">Offer Type</Label>
                    <Select value={offerData.type} onValueChange={(value) => setOfferData({...offerData, type: value})}>
                      <SelectTrigger className="bg-slate-700 border-slate-600"><SelectValue placeholder="Select type" /></SelectTrigger>
                      <SelectContent className="bg-slate-700 text-white border-slate-600">
                        <SelectItem value="Percentage">Percentage Discount</SelectItem>
                        <SelectItem value="Fixed Amount">Fixed Amount Discount</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="offerValue" className="text-slate-300">Value (e.g., 20 for 20% or 10 for $10)</Label>
                    <Input id="offerValue" type="number" value={offerData.value} onChange={(e) => setOfferData({...offerData, value: e.target.value})} required className="bg-slate-700 border-slate-600"/>
                  </div>
                  {/* Add more fields: appliesTo, startDate, endDate */}
                  <div className="flex justify-end space-x-2 pt-4">
                    <Button type="button" variant="ghost" onClick={() => setShowCreateModal(false)} className="text-slate-400 hover:text-white">Cancel</Button>
                    <Button type="submit" className="bg-[#FF6B35] text-black hover:bg-orange-400">Create Offer</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        )}

        <Card className="bg-slate-800 border-slate-700 text-white">
          <CardHeader>
            <CardTitle className="text-2xl text-[#FF6B35]">Current Offers</CardTitle>
            <CardDescription className="text-slate-400">List of active and past promotional offers.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-slate-300">
                <thead className="text-xs text-slate-400 uppercase bg-slate-700">
                  <tr>
                    <th scope="col" className="px-6 py-3">Offer Name</th>
                    <th scope="col" className="px-6 py-3">Type</th>
                    <th scope="col" className="px-6 py-3">Value</th>
                    <th scope="col" className="px-6 py-3">Applies To</th>
                    <th scope="col" className="px-6 py-3">Dates</th>
                    <th scope="col" className="px-6 py-3">Status</th>
                    <th scope="col" className="px-6 py-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockOffers.map(offer => (
                    <tr key={offer.id} className="bg-slate-800 border-b border-slate-700 hover:bg-slate-700/50">
                      <td className="px-6 py-4 font-medium text-white whitespace-nowrap">{offer.name}</td>
                      <td className="px-6 py-4">{offer.type}</td>
                      <td className="px-6 py-4">{offer.value}</td>
                      <td className="px-6 py-4">{offer.appliesTo}</td>
                      <td className="px-6 py-4">{offer.startDate} - {offer.endDate}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${offer.status === 'Active' ? 'bg-green-600/30 text-green-300' : 'bg-slate-600/50 text-slate-400'}`}>
                          {offer.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center space-x-2">
                        <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300 p-1" onClick={() => handleAction("Edit", offer.name)}>
                          <Edit size={16} />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300 p-1" onClick={() => handleAction("Delete", offer.name)}>
                          <Trash2 size={16} />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 text-center text-slate-400">Pagination controls will be here.</div>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
};

export default AdminOffersManagementPage;