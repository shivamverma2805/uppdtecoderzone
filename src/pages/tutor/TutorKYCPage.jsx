import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { ShieldCheck, UploadCloud } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

const TutorKYCPage = () => {
  const { toast } = useToast();
  const [idDocument, setIdDocument] = useState(null);
  const [addressProof, setAddressProof] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onDropId = React.useCallback(acceptedFiles => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      setIdDocument(Object.assign(acceptedFiles[0], {
        preview: URL.createObjectURL(acceptedFiles[0])
      }));
      toast({ title: "📄 ID Document Selected", description: acceptedFiles[0].name });
    }
  }, [toast]);

  const onDropAddress = React.useCallback(acceptedFiles => {
     if (acceptedFiles && acceptedFiles.length > 0) {
      setAddressProof(Object.assign(acceptedFiles[0], {
        preview: URL.createObjectURL(acceptedFiles[0])
      }));
      toast({ title: "📄 Address Proof Selected", description: acceptedFiles[0].name });
    }
  }, [toast]);

  const { getRootProps: getIdRootProps, getInputProps: getIdInputProps, isDragActive: isIdDragActive } = useDropzone({
    onDrop: onDropId,
    accept: { 'image/*': ['.jpeg', '.png', '.jpg'], 'application/pdf': ['.pdf'] },
    multiple: false
  });

  const { getRootProps: getAddressRootProps, getInputProps: getAddressInputProps, isDragActive: isAddressDragActive } = useDropzone({
    onDrop: onDropAddress,
    accept: { 'image/*': ['.jpeg', '.png', '.jpg'], 'application/pdf': ['.pdf'] },
    multiple: false
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!idDocument || !addressProof) {
      toast({ title: "⚠️ Missing Documents", description: "Please upload both ID and Address proof.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    toast({
      title: "✅ KYC Submitted",
      description: "Your documents have been submitted for verification. We'll notify you once processed.",
    });
    setIdDocument(null);
    setAddressProof(null);
    setIsSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>KYC Verification - Tutor Dashboard - CodersZonee</title>
        <meta name="description" content="Complete your KYC verification to become a verified instructor on CodersZonee." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-8 px-4"
      >
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-[#FF6B35] flex items-center">
            <ShieldCheck className="mr-3 h-10 w-10" /> Instructor KYC Verification
          </h1>
          <p className="text-lg text-slate-300">Please complete your KYC to activate full instructor features and withdrawals.</p>
        </header>

        <Card className="bg-slate-800 border-slate-700 text-white">
          <CardHeader>
            <CardTitle className="text-2xl text-[#FF6B35]">Submit Your Documents</CardTitle>
            <CardDescription className="text-slate-400">Upload clear copies of your identification and address proof.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <Label className="text-slate-300 mb-2 block">Government-Issued ID (e.g., Passport, Driver's License)</Label>
                <div {...getIdRootProps()} className={`p-8 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors ${isIdDragActive ? 'border-[#FF6B35] bg-slate-700' : 'border-slate-600 hover:border-orange-400'}`}>
                  <input {...getIdInputProps()} />
                  <UploadCloud size={40} className="mx-auto text-slate-400 mb-2" />
                  {isIdDragActive ? <p className="text-slate-300">Drop ID document here...</p> : <p className="text-slate-300">Drag 'n' drop ID or click to select</p>}
                </div>
                {idDocument && <p className="text-sm text-green-400 mt-2">Selected: {idDocument.name}</p>}
              </div>

              <div>
                <Label className="text-slate-300 mb-2 block">Proof of Address (e.g., Utility Bill, Bank Statement - last 3 months)</Label>
                <div {...getAddressRootProps()} className={`p-8 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors ${isAddressDragActive ? 'border-[#FF6B35] bg-slate-700' : 'border-slate-600 hover:border-orange-400'}`}>
                  <input {...getAddressInputProps()} />
                  <UploadCloud size={40} className="mx-auto text-slate-400 mb-2" />
                  {isAddressDragActive ? <p className="text-slate-300">Drop address proof here...</p> : <p className="text-slate-300">Drag 'n' drop address proof or click to select</p>}
                </div>
                {addressProof && <p className="text-sm text-green-400 mt-2">Selected: {addressProof.name}</p>}
              </div>
              
              <p className="text-xs text-slate-500">Ensure documents are clear, valid, and all four corners are visible. Max file size: 5MB. Accepted formats: JPG, PNG, PDF.</p>

              <Button type="submit" className="w-full bg-[#FF6B35] text-black hover:bg-orange-400 text-lg py-3" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit for Verification'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
};

export default TutorKYCPage;