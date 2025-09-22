import { FeedPreview } from "@/components/feed-blog-preview";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import axios from "axios";
import { RefreshCw, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { LoadingOverlay } from "./loading";

export function HomePage() {
  const [Blogs, setBlogs] = useState([]);
  const [Loading, setLoading] = useState(true);

  const getFeed = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/blog/feed`
      );
      if (response.data.success) {
        setBlogs(response.data.blogs);
      } else {
        toast.error("Couldn't Fetch Feed");
      }
    } catch (err) {
      toast.error("Couldn't Fetch Feed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <>
      <Logo />
      <div className="flex justify-center mt-6">
        <div className="w-full max-w-4xl">
          {/* Search Bar */}
          <div className="flex gap-2 p-2">
            <Input placeholder="Search topics..." />
            <Button size="icon" variant="secondary">
              <Search className="w-5 h-5" />
            </Button>
          </div>

          {/* Title */}
          <h1 className="p-4 text-start text-3xl md:text-4xl font-extrabold tracking-tight">
            Blogs Feed
          </h1>

          {/* Loading */}
          {Loading && (
            <LoadingOverlay show={Loading} message="Loading..." />
          )}

          {/* Blogs List */}
          {!Loading && (
            <ScrollArea className="h-[75vh] w-full rounded-md border px-4 py-6">
              <div className="space-y-8">
                {Blogs.map((data, ind) => (
                  <div key={ind} className="flex justify-center">
                    <FeedPreview Data={data} />
                  </div>
                ))}

                {/* Refresh Button */}
                <div className="flex justify-center pt-4">
                  <Button
                    variant="ghost"
                    className="flex gap-2 items-center text-gray-500 hover:text-black dark:hover:text-white"
                    onClick={() => {
                      setLoading(true);
                      getFeed();
                    }}
                  >
                    <RefreshCw
                      className={`w-4 h-4 ${Loading ? "animate-spin" : ""}`}
                    />
                    Refresh
                  </Button>
                </div>
              </div>
            </ScrollArea>
          )}
        </div>
      </div>
    </>
  );
}
