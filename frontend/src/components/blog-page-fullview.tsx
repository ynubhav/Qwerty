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
import { Bookmark, HeartIcon, Send } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FeedPreviewProps extends React.ComponentProps<"div"> {
  Data: any;
}

export function BlogFullView({
  className,Data,
  ...props
}: FeedPreviewProps) {
  const [Marked, setMarked] = useState(false);
  const [Liked, setLiked] = useState(false);
  const navigate=useNavigate();

  return (
    <>
      <div
        className={cn(
          "flex flex-col gap-6 max-w-3xl mx-1 md:mx-4 lg:mx-6 mt-2 mb-10",
          className
        )}
        {...props}
      >
        <Card onDoubleClick={() => setLiked(true)} className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex justify-between">
              <h1>{Data.title}</h1>
              <Tooltip>
                <TooltipTrigger>
                  <Bookmark
                    className={`w-5 h-5 transition-colors ${
                      Marked ? "dark:fill-white fill-black " : "fill-none"
                    }`}
                    onClick={() => {
                      setMarked((prev) => !prev);
                    }}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  {Marked ? <p>Remove from Library</p> : <p>Add to Library</p>}
                </TooltipContent>
              </Tooltip>
            </CardTitle>
            <CardDescription onClick={()=>navigate(`/home/profile/${Data.authorId}`)} className="flex gap-1">
              By{" "}
              <p className="text-green-400 hover:underline hover:underline-offset-4 cursor-pointer">
                {Data?.author?.name}
              </p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            {(Data.image!='')&&<img src={Data.image} alt="none"  className="mb-2"/>}
            <div className="flex flex-col gap-6">
              {Data.content}
            </div>
            <div className="flex gap-2 mt-2">
              <Tooltip>
                <TooltipTrigger>
                  <HeartIcon
                    onClick={() => setLiked((prev) => !prev)}
                    className={`${
                      Liked ? "dark:fill-white fill-black" : "fill-none"
                    } w-5 h-5`}
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
          </CardContent>
        </Card>
      </div>
    </>
  );
}
