import { BlogFullView } from "@/components/blog-page-fullview";
import { Logo } from "@/components/logo";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip, TooltipContent } from "@/components/ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { Send } from "lucide-react";

export function ReadBlogPage() {
  return (
    <>
    <Logo/>
      <div className="flex justify-center">
        <ScrollArea className="h-screen w-full rounded-md border px-4">
          <div className="flex justify-center">
            <div className="py-2">
              <BlogFullView className="pb-0 mb-1" />
              <Label className="px-1 py-2">Comments</Label>
              <div className="flex px-2 gap-1 items-center">
                <Textarea
                  title="Comment"
                  placeholder="just sybau bro"
                  className="border-1 border-gray-700 min-h-20"
                />
                <Tooltip>
                  <TooltipTrigger>
                    <Send className="w-7 h-7 transition-all hover:w-8 hover:h-8 p-1 rounded hover:bg-gray-500/40" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Send</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </>
  );
}
