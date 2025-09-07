import { BlogPreviewShort } from "@/components/blog-preview-profile";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Logo } from "@/components/logo";

export function PublicProfile() {
  const [following, setfollowing] = useState(false);
  return (
    <>
      <Logo />
      <div className="flex justify-center">
        <div className="flex  flex-col justify-center w-max p-2">
          <div className="flex gap-4 justify-center items-center w-full">
            <Avatar className="w-24 h-24">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-2 items-center">
              <p>ynubhav</p>
              <p className="text-sm text-gray-600">anubhavdixit35@gmail.com</p>
            </div>
          </div>

          <div className="flex gap-4 py-1 mt-2 justify-center ">
            <div>
              <p className="">22</p>
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
              <div className="flex justify-center mt-1">
                <BlogPreviewShort />
              </div>
              <div className="flex justify-center mt-1">
                <BlogPreviewShort />
              </div>
              <div className="flex justify-center mt-1">
                <BlogPreviewShort />
              </div>
              <div className="flex justify-center mt-1">
                <BlogPreviewShort />
              </div>
              <div className="flex justify-center mt-1">
                <BlogPreviewShort />
              </div>
              <div className="flex justify-center mt-1">
                <BlogPreviewShort />
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </>
  );
}

//pfp name/email no of blogs followers list of blogs:{title,}
