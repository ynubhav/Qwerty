import { BlogPreviewShort } from "@/components/blog-preview-profile";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Search, Unplug, User } from "lucide-react";
import { Logo } from "@/components/logo";
import axios from "axios";
import { toast } from "sonner";
import { LoadingOverlay } from "./loading";
import { useParams } from "react-router-dom";

export function PublicProfile() {
  const [following, setfollowing] = useState(false);
  const { id }=useParams();
  const [notfound,setnotfound]=useState(false);
  const [UserData,setUserData]=useState({name:'',email:'',posts:[],avatar:''});
  const [loading ,setloading]=useState(true);
  useEffect(()=>{
    const getMe=async()=>{
      
      try{const token=localStorage.getItem('token');
      if(!token)
        return toast.error('User Not Found');
      const response=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/auth/${id}`);
      if(response.data.success){
        setUserData(response.data.userinfo);
        setloading(false);
      }
      else{
        setloading(false);
        setnotfound(true);
      }}
      catch(err){
        setloading(false);
        setnotfound(true);
      }
      finally{
        setloading(false);
      }
    }
    getMe();
  },[])
  return (
    <>
      <Logo />
      {notfound&&<div className="flex flex-col items-center justify-center gap-3 h-[70vh] text-gray-400">
                  <Unplug className="w-14 h-14" />
                  <p className="text-xl font-semibold">User Not Found</p>
                  <button className="border-1 rounded p-2 m-2 bg-accent animate-spin animation-duration-5000
                   hover:animate-none">Go Home</button>
                </div>}
      {!notfound&&<div className="flex justify-center">
        {loading&&<LoadingOverlay show={loading} message="Loading..." />}
        {!loading&&<div className="flex  flex-col justify-center w-max p-2">
          <div className="flex gap-4 justify-center items-center w-full">
            <Avatar className="w-24 h-24">
              <AvatarImage src={UserData.avatar}/>
              <AvatarFallback><User/></AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-2 items-center">
              <p>{UserData.name}</p>
              <p className="text-sm text-gray-600">{UserData.email}</p>
            </div>
          </div>

          <div className="flex gap-4 py-1 mt-2 justify-center ">
            <div>
              <p className="">{UserData.posts.length}</p>
              <p className="text-sm text-gray-600">Blogs</p>
            </div>
            <Separator orientation="vertical" />
            <div>
              <p className="">20k</p>
              <p className="text-sm text-gray-600">followers</p>
            </div>
            <Separator orientation="vertical" />
            <div>
              <p className="text-yellow-400">Legend</p>
              <p className="text-sm text-gray-600">Level</p>
            </div>
          </div>

          <div className=" flex py-1 px-10 justify-center gap-4 mt-2">
            <Button
              variant={following ? "outline" : "default"}
              className={`px-4 ${following ? "text-green-500" : ""}`}
              onClick={() => setfollowing((prev) => !prev)}
            >
              {following ? "Following" : "Follow"}
            </Button>
            <Button variant="secondary" className="px-6">
              Message
            </Button>
          </div>

          <div className="mt-2">
            <p className="font-medium">Bio</p>
            <p className="text-sm dark:text-gray-300 text-gray-900 p-1 max-w-11/12">
              This is the Description Come Bio Part This is the Description Come
              Bio PartThis is the Description Come Bio{" "}
            </p>
          </div>
          <div className=" flex flex-col gap-2 mt-2">
            <p className="font-medium text-xl">Top Blogs Published</p>
            <div className="flex gap-1">
              <Input placeholder="Search Blogs" />
              <Button>
                <Search />
              </Button>
            </div>
            <ScrollArea className="h-screen w-full rounded-md border px-4">
              {
              UserData.posts.map((data,ind)=>{
                return(<div className="flex justify-center mt-1">
                <BlogPreviewShort key={ind} Data={data}/>
              </div>)
              })
              }
            </ScrollArea>
          </div>
        </div>}
      </div>}
    </>
  );
}

//pfp name/email no of blogs followers list of blogs:{title,}
