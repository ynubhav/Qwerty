import { FeedPreview } from "@/components/feed-blog-preview";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LoaderPinwheel, Search } from "lucide-react";

export function HomePage() {
  return (
    <>
      <Logo/>
      <div className="flex justify-center mt-4">
        <div className="grid grid-cols-1">
          <div className="flex gap-1 p-2">
            <Input placeholder="Search Topics" />
            <Button>
              <Search />
            </Button>
          </div>
          <h1 className="p-4 scroll-m-20 text-start text-4xl font-extrabold tracking-tight text-balance">
            BLOGS FEED
          </h1>
          <ScrollArea className="h-screen w-fit rounded-md border px-4 ">
            <div>
              <div className="flex justify-center mt-10">
                <FeedPreview />
              </div>
              <div className="flex justify-center mt-2">
                <FeedPreview />
              </div>
              <div className="flex justify-center mt-2">
                <FeedPreview />
              </div>
              <div className="flex justify-center mt-2">
                <FeedPreview />
              </div>
              <div className="flex justify-center mt-2">
                <FeedPreview />
              </div>
              <div className="flex justify-center mt-2">
                <FeedPreview />
              </div>
              <div className="flex justify-center mt-2 p-4 gap-2 items-center text-sm text-gray-400">
                <LoaderPinwheel className="animate-spin text-gray-400" />{" "}
                Loading
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </>
  );
}
