import { BlogFullView } from "@/components/blog-page-fullview";
import { Logo } from "@/components/logo";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip, TooltipContent } from "@/components/ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import axios from "axios";
import { Send, Unplug } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { LoadingOverlay } from "./loading";

export function ReadBlogPage() {
  const [Blog, setBlog] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [notFound, setNotfound] = useState(false);
  const Params = useParams();

  useEffect(() => {
    const getBlog = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/blog/${Params.id}`
        );

        if (response.data.success) {
          setBlog(response.data.blog);
          setNotfound(false);
        } else {
          setNotfound(true);
          toast.error("Blog Not Found");
        }
      } catch (err) {
        setNotfound(true);
        toast.error("Blog Not Found");
      } finally {
        setLoading(false);
      }
    };

    getBlog();
  }, [Params.id]);

  return (
    <>
      <Logo />
      <div className="flex justify-center">
        {/* Loader */}
        {Loading && <LoadingOverlay show={Loading} message="Fetching data..." />}

        {/* Main Content */}
        {!Loading && (
          <ScrollArea className="h-screen w-full rounded-md border px-4 py-6">
            <div className="flex justify-center">
              {/* Blog Found */}
              {!notFound && Blog && (
                <div className="max-w-3xl w-full space-y-6">
                  {/* Blog */}
                  <BlogFullView className="pb-0 mb-1" Data={Blog} />

                  {/* Comments Section */}
                  <div className="bg-muted/20 p-4 rounded-lg space-y-3">
                    <Label className="text-base">Comments</Label>
                    <div className="flex gap-2 items-center">
                      <Textarea
                        title="Comment"
                        placeholder="Write a comment..."
                        className="border border-gray-700 min-h-20 flex-1"
                      />
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button className="p-2 rounded-md hover:bg-gray-500/30 transition">
                            <Send className="w-6 h-6 text-gray-200" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Send</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              )}

              {/* Not Found */}
              {notFound && (
                <div className="flex flex-col items-center justify-center gap-3 h-[70vh] text-gray-400">
                  <Unplug className="w-14 h-14" />
                  <p className="text-xl font-semibold">404 — Blog Not Found</p>
                </div>
              )}
            </div>
          </ScrollArea>
        )}
      </div>
    </>
  );
}
