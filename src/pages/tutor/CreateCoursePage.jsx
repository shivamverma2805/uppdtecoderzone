import React, { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { UploadCloud, X, PlusCircle, DollarSign, Percent, BookCopy, Brain } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

const CreateCoursePage = () => {
  const { toast } = useToast();
  const [courseTitle, setCourseTitle] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [courseType, setCourseType] = useState(''); // Skill Path / Career Path
  const [aboutSkills, setAboutSkills] = useState(''); // Textarea for skills description
  const [videos, setVideos] = useState([]);
  const [coursePrice, setCoursePrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [coupon, setCoupon] = useState('');
  // Additional fields from requirements
  const [courseImage, setCourseImage] = useState(null);
  const [fullDuration, setFullDuration] = useState('');
  const [topics, setTopics] = useState([{ title: '', content: '' }]);
  const [difficultyLevel, setDifficultyLevel] = useState('');
  const [prerequisites, setPrerequisites] = useState('');
  const [courseObjectives, setCourseObjectives] = useState('');


  const onDropVideos = useCallback(acceptedFiles => {
    const newVideos = acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file),
      title: file.name,
      duration: 'N/A' 
    }));
    setVideos(prevVideos => [...prevVideos, ...newVideos]);
    toast({ title: "📹 Videos Uploaded", description: `${acceptedFiles.length} video(s) added.` });
  }, [toast]);

  const { getRootProps: getVideoRootProps, getInputProps: getVideoInputProps, isDragActive: isVideoDragActive } = useDropzone({
    onDrop: onDropVideos,
    accept: { 'video/*': ['.mp4', '.mov', '.avi', '.mkv'] }
  });

  const removeVideo = (fileName) => {
    setVideos(prevVideos => prevVideos.filter(video => video.name !== fileName));
  };

  const onDropImage = useCallback(acceptedFiles => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      setCourseImage(Object.assign(acceptedFiles[0], {
        preview: URL.createObjectURL(acceptedFiles[0])
      }));
      toast({ title: "🖼️ Course Image Selected", description: `${acceptedFiles[0].name} is ready.` });
    }
  }, [toast]);

  const { getRootProps: getImageRootProps, getInputProps: getImageInputProps, isDragActive: isImageDragActive } = useDropzone({
    onDrop: onDropImage,
    accept: { 'image/*': ['.jpeg', '.png', '.jpg', '.gif'] },
    multiple: false
  });


  const handleAddTopic = () => {
    setTopics([...topics, { title: '', content: '' }]);
  };

  const handleTopicChange = (index, field, value) => {
    const newTopics = [...topics];
    newTopics[index][field] = value;
    setTopics(newTopics);
  };

  const handleRemoveTopic = (index) => {
    const newTopics = topics.filter((_, i) => i !== index);
    setTopics(newTopics);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!courseTitle || !courseDescription || !courseType || !aboutSkills || !coursePrice || !fullDuration || !difficultyLevel || !courseObjectives || topics.some(t => !t.title.trim() || !t.content.trim())) {
        toast({ title: "⚠️ Missing Fields", description: "Please fill all required fields.", variant: "destructive" });
        return;
    }
    toast({
      title: "🚧 Course Submitted (Mock)",
      description: `"${courseTitle}" submitted for approval. Full functionality coming soon! 🚀`,
    });
    // Reset form (optional)
    setCourseTitle(''); setCourseDescription(''); setCourseType(''); setAboutSkills('');
    setVideos([]); setCoursePrice(''); setDiscount(''); setCoupon('');
    setCourseImage(null); setFullDuration(''); setTopics([{ title: '', content: '' }]);
    setDifficultyLevel(''); setPrerequisites(''); setCourseObjectives('');
  };

  return (
    <>
      <Helmet>
        <title>Create Course - Tutor Dashboard - CodersZonee</title>
        <meta name="description" content="Create a new course on CodersZonee." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-8 px-4 space-y-8"
      >
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-[#FF6B35]">Create New Course</h1>
          <p className="text-lg text-slate-300">Fill in the details to create and submit your course for approval.</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-8">
          <Card className="bg-slate-800 border-slate-700 text-white">
            <CardHeader>
              <CardTitle className="text-2xl text-[#FF6B35]">Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="course-title" className="text-slate-300">Course Title *</Label>
                <Input id="course-title" value={courseTitle} onChange={(e) => setCourseTitle(e.target.value)} placeholder="e.g., Mastering React Hooks" required className="bg-slate-700 border-slate-600 text-white focus:border-[#FF6B35]" />
              </div>
              <div>
                <Label htmlFor="course-description" className="text-slate-300">Course Description *</Label>
                <Textarea id="course-description" value={courseDescription} onChange={(e) => setCourseDescription(e.target.value)} placeholder="A comprehensive summary of your course..." rows={4} required className="bg-slate-700 border-slate-600 text-white focus:border-[#FF6B35]" />
              </div>
              <div>
                <Label htmlFor="course-type" className="text-slate-300">Course Type *</Label>
                <Select value={courseType} onValueChange={setCourseType} required>
                  <SelectTrigger className="w-full bg-slate-700 border-slate-600 text-white">
                    <SelectValue placeholder="Select course type" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-700 text-white border-slate-600">
                    <SelectItem value="Skill Path"><Brain className="inline-block mr-2 h-4 w-4" />Skill Path</SelectItem>
                    <SelectItem value="Career Path"><BookCopy className="inline-block mr-2 h-4 w-4" />Career Path</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="full-duration" className="text-slate-300">Full Duration (e.g., 4 Weeks, 2 Months) *</Label>
                <Input id="full-duration" value={fullDuration} onChange={(e) => setFullDuration(e.target.value)} placeholder="e.g., 6 Weeks" required className="bg-slate-700 border-slate-600 text-white focus:border-[#FF6B35]" />
              </div>
              <div>
                <Label htmlFor="difficulty-level" className="text-slate-300">Difficulty Level *</Label>
                <Select value={difficultyLevel} onValueChange={setDifficultyLevel} required>
                  <SelectTrigger className="w-full bg-slate-700 border-slate-600 text-white">
                    <SelectValue placeholder="Select difficulty" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-700 text-white border-slate-600">
                    <SelectItem value="Beginner">Beginner</SelectItem>
                    <SelectItem value="Intermediate">Intermediate</SelectItem>
                    <SelectItem value="Advanced">Advanced</SelectItem>
                    <SelectItem value="All Levels">All Levels</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700 text-white">
            <CardHeader>
              <CardTitle className="text-2xl text-[#FF6B35]">Course Content Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="about-skills" className="text-slate-300">About Skills Students Will Learn *</Label>
                <Textarea id="about-skills" value={aboutSkills} onChange={(e) => setAboutSkills(e.target.value)} placeholder="Describe the key skills students will acquire. Use bullet points for clarity if needed (e.g., - Skill 1\n- Skill 2)" rows={5} required className="bg-slate-700 border-slate-600 text-white focus:border-[#FF6B35]" />
              </div>
              <div>
                <Label htmlFor="course-objectives" className="text-slate-300">Course Objectives (What will students be able to do?) *</Label>
                <Textarea id="course-objectives" value={courseObjectives} onChange={(e) => setCourseObjectives(e.target.value)} placeholder="List clear learning objectives. e.g., - Build a full-stack web app\n- Analyze data using Python" rows={4} required className="bg-slate-700 border-slate-600 text-white focus:border-[#FF6B35]" />
              </div>
              <div>
                <Label htmlFor="prerequisites" className="text-slate-300">Prerequisites (Optional)</Label>
                <Textarea id="prerequisites" value={prerequisites} onChange={(e) => setPrerequisites(e.target.value)} placeholder="e.g., Basic HTML & CSS knowledge, Familiarity with JavaScript ES6" rows={3} className="bg-slate-700 border-slate-600 text-white focus:border-[#FF6B35]" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-800 border-slate-700 text-white">
            <CardHeader>
              <CardTitle className="text-2xl text-[#FF6B35]">Course Image</CardTitle>
            </CardHeader>
            <CardContent>
              <div {...getImageRootProps()} className={`p-8 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors ${isImageDragActive ? 'border-[#FF6B35] bg-slate-700' : 'border-slate-600 hover:border-orange-400'}`}>
                <input {...getImageInputProps()} />
                <UploadCloud size={48} className="mx-auto text-slate-400 mb-2" />
                {isImageDragActive ? <p className="text-slate-300">Drop the image here...</p> : <p className="text-slate-300">Drag 'n' drop course image, or click to select</p>}
              </div>
              {courseImage && (
                <div className="mt-4">
                  <img  src={courseImage.preview} alt="Course preview" className="max-h-48 rounded-md mx-auto" src="https://images.unsplash.com/photo-1635251595512-dc52146d5ae8" />
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700 text-white">
            <CardHeader>
              <CardTitle className="text-2xl text-[#FF6B35]">Topics / Course Outline *</CardTitle>
              <CardDescription className="text-slate-400">Add topics and their content. At least one topic is required.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {topics.map((topic, index) => (
                <div key={index} className="p-4 bg-slate-700 rounded-lg space-y-3">
                  <div className="flex justify-between items-center">
                    <Label htmlFor={`topic-title-${index}`} className="text-slate-300 font-semibold">Topic {index + 1}</Label>
                    {topics.length > 1 && (
                      <Button type="button" variant="ghost" size="sm" onClick={() => handleRemoveTopic(index)} className="text-red-500 hover:text-red-400">
                        <X size={18} /> Remove Topic
                      </Button>
                    )}
                  </div>
                  <Input 
                    id={`topic-title-${index}`}
                    value={topic.title} 
                    onChange={(e) => handleTopicChange(index, 'title', e.target.value)} 
                    placeholder="Topic Title (e.g., Introduction to React)" 
                    required 
                    className="bg-slate-600 border-slate-500 text-white focus:border-[#FF6B35]" 
                  />
                  <Textarea 
                    id={`topic-content-${index}`}
                    value={topic.content} 
                    onChange={(e) => handleTopicChange(index, 'content', e.target.value)} 
                    placeholder="Topic Content/Description (e.g., What is React, Setting up environment)" 
                    rows={3} 
                    required 
                    className="bg-slate-600 border-slate-500 text-white focus:border-[#FF6B35]" 
                  />
                </div>
              ))}
              <Button type="button" variant="outline" onClick={handleAddTopic} className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-black">
                <PlusCircle size={18} className="mr-2" /> Add Topic
              </Button>
            </CardContent>
          </Card>


          <Card className="bg-slate-800 border-slate-700 text-white">
            <CardHeader>
              <CardTitle className="text-2xl text-[#FF6B35]">Pre-recorded Video Upload</CardTitle>
              <CardDescription className="text-slate-400">Upload course videos. You can drag & drop or select files.</CardDescription>
            </CardHeader>
            <CardContent>
              <div {...getVideoRootProps()} className={`p-8 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors
                ${isVideoDragActive ? 'border-[#FF6B35] bg-slate-700' : 'border-slate-600 hover:border-orange-400'}`}>
                <input {...getVideoInputProps()} />
                <UploadCloud size={48} className="mx-auto text-slate-400 mb-2" />
                {isVideoDragActive ?
                  <p className="text-slate-300">Drop the video files here ...</p> :
                  <p className="text-slate-300">Drag 'n' drop video files here, or click to select files</p>
                }
              </div>
              {videos.length > 0 && (
                <div className="mt-6 space-y-3">
                  <h4 className="text-lg font-semibold text-white">Uploaded Videos:</h4>
                  {videos.map(video => (
                    <div key={video.name} className="flex items-center justify-between p-3 bg-slate-700 rounded-md">
                      <div>
                        <p className="text-sm text-white font-medium">{video.title}</p>
                        <p className="text-xs text-slate-400">Duration: {video.duration} | Size: {(video.size / 1024 / 1024).toFixed(2)} MB</p>
                      </div>
                      <Button type="button" variant="ghost" size="sm" onClick={() => removeVideo(video.name)} className="text-red-500 hover:text-red-400">
                        <X size={18} />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
          
          <Card className="bg-slate-800 border-slate-700 text-white">
            <CardHeader>
              <CardTitle className="text-2xl text-[#FF6B35]">Pricing Setup *</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="course-price" className="text-slate-300">Full Course Price (USD) *</Label>
                <div className="relative">
                  <DollarSign size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                  <Input id="course-price" type="number" value={coursePrice} onChange={(e) => setCoursePrice(e.target.value)} placeholder="e.g., 99.99" required className="pl-10 bg-slate-700 border-slate-600 text-white focus:border-[#FF6B35]" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="discount-percentage" className="text-slate-300">Discount Percentage (Optional)</Label>
                  <div className="relative">
                    <Percent size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                    <Input id="discount-percentage" type="number" value={discount} onChange={(e) => setDiscount(e.target.value)} placeholder="e.g., 10 for 10%" className="pl-10 bg-slate-700 border-slate-600 text-white focus:border-[#FF6B35]" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="coupon-code" className="text-slate-300">Coupon Code (Optional)</Label>
                  <Input id="coupon-code" type="text" value={coupon} onChange={(e) => setCoupon(e.target.value)} placeholder="e.g., LAUNCH25" className="bg-slate-700 border-slate-600 text-white focus:border-[#FF6B35]" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-end">
            <Button type="submit" className="bg-[#FF6B35] text-black hover:bg-orange-400 text-lg py-3 px-8">
              Submit for Approval
            </Button>
          </div>
        </form>
      </motion.div>
    </>
  );
};

export default CreateCoursePage;