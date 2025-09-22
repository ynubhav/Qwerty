import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  LucideUpload,
  Save,
  Upload,
  X,
} from "lucide-react";
import { Loader2Icon } from "lucide-react";
import { useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
// import * as DialogPrimitive from "@radix-ui/react-dialog";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import {
//   Tooltip,
//   TooltipTrigger,
//   TooltipContent,
// } from "@/components/ui/tooltip";
import axios from "axios";
import { toast } from "sonner";
import uploadImageToCloudinary from "@/lib/utils.cloudinary";
import {AISuggests} from "@/components/blogwrite-ai-suggest";

export function BlogActionPage() {
  const [Blogdata, setBlogdata] = useState({
    title: "",
    content: "",
    image:"",
    published: false,
  });
  const [publishing, setPublishing] = useState(false);
  const [published, setPublished] = useState(false);
  const [progressvalue, setProgval] = useState(0);
  const [imgpreview, setImgPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);


  const handleFileChange = async(e: React.ChangeEvent<HTMLInputElement>) => {
    let id=undefined;
    const file = e.target.files?.[0];
    id=toast.loading('uploading Image');
    if (file) {
      const response=await uploadImageToCloudinary(file);
      if(response!=null)
      {
        setBlogdata({...Blogdata,image:response})
        toast.dismiss(id);
        toast.success('image Uploaded Successfully')
      }
      const url = URL.createObjectURL(file);
      setImgPreview(url);
    }
  };

  const simulateProgress = () => {
  setProgval(0);
  const interval = setInterval(() => {
    setProgval((prev) => {
      if (prev >= 95) {   // cap at 95% until API finishes
        clearInterval(interval);
        return prev;
      }
      return prev + Math.floor(Math.random() * 10) + 5; // +5 to +15 steps
    });
  }, 400);
  return interval;
};

const HandleBlogPublishorSave = async (publish: boolean) => {
  if (!Blogdata.title || !Blogdata.content) {
    return toast.warning("Incomplete Blog");
  }
  if (Blogdata.content.length < 100) {
    return toast.warning("Blog Too Short To Save/Publish");
  }
  const token = localStorage.getItem("token");
  if (!token) return toast.error("User Not Logged In");

  setPublishing(true);
  const interval = simulateProgress();

  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/blog`,
      { ...Blogdata, published: publish },
      { headers: { authorization: token } }
    );

    if (response.data.success) {
      clearInterval(interval);
      setProgval(100);
      setPublished(publish);
      toast.success(publish ? "Published Successfully" : "Saved Successfully");
    } else {
      toast.error(publish ? "Publish Failed" : "Save Failed");
    }
  } catch (err) {
    toast.error("Unexpected Error Couldn't Perform the action");
  } finally {
    setPublishing(false);
    setTimeout(() => setProgval(0), 1000);
  }
};


  return (
    <div className="flex ">
    <div className="flex w-1/1 md:w-2/3 flex-col gap-4 px-10 min-h-screen">
      <Label className="md:text-3xl text-2xl">
        <h1>Write Your Ideas !</h1>
      </Label>
      <Input
        placeholder="Header..."
        onChange={(e) =>
          setBlogdata((prev) => ({ ...prev, title: e.target.value }))
        }
      />
      <Textarea
        placeholder="blog content here..."
        className="min-h-48"
        onChange={(e) =>
          setBlogdata((prev) => ({ ...prev, content: e.target.value }))
        }
      />
      <div className="grid grid-cols-1 md:flex md:justify-between">
        <div className="flex gap-2 items-center">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            id="fileUpload"
          />
          <label
            htmlFor="fileUpload"
            className="flex text-gray-500 items-center gap-2 px-4 py-2 border border-gray-400 rounded-md cursor-pointer hover:bg-gray-100 transition"
          >
            <Upload className="w-4 h-4" />
            <span className="text-sm font-medium hidden sm:flex">
              Upload Image
            </span>
          </label>
          {imgpreview && (
            <div className="relative inline-block">
              <img
                src={imgpreview}
                alt="preview"
                className="w-14 h-10 rounded-md object-cover border"
              />
              <button
                onClick={() => {
                  setImgPreview(null);
                  if (fileInputRef.current) fileInputRef.current.value = "";
                }}
                className="absolute -top-1 -right-1 bg-black/60 hover:bg-black/80 text-white rounded-full p-0.5"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          )}

          {/*Publish Button*/}
          <Button
            disabled={publishing || published}
            onClick={() => HandleBlogPublishorSave(true)}
          >
            {publishing ? (
              <Loader2Icon className="animate-spin" />
            ) : (
              <LucideUpload />
            )}
            <p className="hidden sm:flex">Publish</p>
          </Button>

          {/*Save Button*/}
          <Button
            variant="outline"
            disabled={publishing}
            onClick={() => HandleBlogPublishorSave(false)}
          >
            {publishing ? <Loader2Icon className="animate-spin" /> : <Save />}
            <p className="hidden md:flex">Save</p>
          </Button>
{/* 
          <Dialog>
            <DialogTrigger>
              <Button variant="destructive" disabled={!published}>
                <Trash2Icon />
              </Button>
            </DialogTrigger>
            <DialogContent className={`${published ? "" : "hidden"}`}>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  <p>This action cannot be undone.</p>
                  <p>This will permanently delete the Blog from our servers.</p>
                  <p>
                    write <span className="font-semibold">WTHISBLOG2345</span> in
                    input to continue.
                  </p>
                </DialogDescription>
                <Input type="text" />
                <div className="flex gap-2 justify-center mt-2">
                  <Button variant="destructive">Delete Permanently</Button>
                  <DialogPrimitive.Close data-slot="dialog-close">
                    <Button variant="outline">Cancel</Button>
                  </DialogPrimitive.Close>
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog> */}
        </div>
        <div>
          {publishing && (
            <div className="flex flex-col gap-2">
              <Progress value={progressvalue} className="w-sm" />
              <p className="text-sm text-gray-500 text-right">
                Processing {progressvalue}%
              </p>
            </div>
          )}
          {published && (
            <div className="flex justify-center gap-4 items-center">
              <div className="flex gap-1 items-center transition-all text-gray-600 dark:hover:text-white hover:text-black">
                <CheckCircle2 />
                <p className="text-sm">published</p>
              </div>
              {/* {<Tooltip>
                <TooltipTrigger>
                  <Edit
                    onClick={() => setPublished(false)}
                    className="ml-4 text-gray-500 hover:text-primary"
                  />
                </TooltipTrigger>
                <TooltipContent>Edit</TooltipContent>
              </Tooltip}> */}
            </div>
          )}
        </div>
      </div>
    </div>
    <div className="w-1/3 mt-10 mr-10 hidden md:grid"><AISuggests blogtitle={Blogdata.title} blogcontent={Blogdata.content} /></div>
    </div>
  );
}
