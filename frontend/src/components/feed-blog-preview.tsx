import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Bookmark,
  HeartIcon,
  LucideGitCommitHorizontal,
  Send,
  Star,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FeedPreviewProps extends React.ComponentProps<"div"> {
  Data: any;
}

export function FeedPreview({
  className,Data,
  ...props
}: FeedPreviewProps) {
  const navigate=useNavigate();
  const [Marked, setMarked] = useState(false);
  const [Liked, setLiked] = useState(false);
  const [Favourite, setFav] = useState(false);

  return (
    <>
      <div
        className={cn(
          "flex flex-col gap-6 max-w-3xl mx-1 md:mx-4 lg:mx-6",
          className
        )}
        {...props}
      >
        <Card onDoubleClick={() => setLiked(true)} className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex justify-between">
              <p>{Data.title}</p>
              <div className="flex gap-2 items-center">
                <Tooltip>
                  <TooltipTrigger>
                    <Star
                      className={`w-5 h-5 text-rose-500 transition-colors ${
                        Favourite ? "fill-rose-500 " : "fill-none"
                      }`}
                      onClick={() => {
                        setFav((prev) => !prev);
                      }}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    {Favourite ? <p>Remove from Favs</p> : <p>Add to Favs</p>}
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <Bookmark
                      className={`w-5 h-5 text-rose-500 transition-colors ${
                        Marked ? "fill-rose-500 " : "fill-none"
                      }`}
                      onClick={() => {
                        setMarked((prev) => !prev);
                      }}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    {Marked ? (
                      <p>Remove from Library</p>
                    ) : (
                      <p>Add to Library</p>
                    )}
                  </TooltipContent>
                </Tooltip>
              </div>
            </CardTitle>
            <CardDescription className="flex gap-1">
              By{" "}
              <p onClick={()=>{navigate(`/home/profile/${Data.authorId}`)}} className="text-green-400 hover:underline hover:underline-offset-4 cursor-pointer">
                {Data.author.name}
              </p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-6 max-h-30 overflow-clip ">
              {Data.content}
            </div>
            <div className="flex justify-center gap-2">
              <button onClick={()=>{navigate(`/blog/${Data.id}`)}} className="flex gap-1 items-center mt-2 text-center text-sm underline underline-offset-4 text-gray-500 dark:hover:text-white hover:text-black">
                {/* Read the full blog  */}
                <Tooltip>
                  <TooltipTrigger>
                    <LucideGitCommitHorizontal className="w-5 h-5 hover:w-7 hover:h-6 transition-all" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Go to Blog Page</p>
                  </TooltipContent>
                </Tooltip>
              </button>
            </div>
            <div className="flex justify-between">
            <div className="flex gap-2">
              <Tooltip>
                <TooltipTrigger>
                  <HeartIcon
                    onClick={() => setLiked((prev) => !prev)}
                    className={`${
                      Liked ? "fill-rose-500" : "fill-none"
                    } w-5 h-5 text-rose-500`}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  {Liked ? <p>Liked</p> : <p>Like</p>}
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger>
                  <Send className={`w-5 h-5`} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Send</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="flex gap-1 items-center">
            {/* <Star className="fill-yellow-200 w-4 h-4 text-yellow-200" /> */}
            <p className="text-sm text-gray-500">12 July'25</p>
          </div>
          </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
