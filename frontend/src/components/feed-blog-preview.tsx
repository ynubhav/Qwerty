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

export function FeedPreview({
  className,
  ...props
}: React.ComponentProps<"div">) {
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
              <p>WTH IS A BLOG ?!</p>
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
              <p onClick={()=>{navigate('/home/profile/28419-148-saj202-783')}} className="text-green-400 hover:underline hover:underline-offset-4 cursor-pointer">
                ynubhav
              </p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-6 max-h-30 overflow-clip ">
              {`A blog is a website or page that is a part of a larger website.
              Typically, it features articles written in a conversational style
              with accompanying pictures or videos. Blogging has gained immense
              popularity due to its enjoyable and adaptable nature, allowing for
              self-expression and social connections. In addition, it serves as
              a platform for enhancing writing skills and promoting businesses.
              Furthermore, a professional blogger can even make money from
              blogging in various ways, such as Google ads and Amazon affiliate
              links. Successful blogs can cover any topic. No matter what
              subject you can think of,`}
            </div>
            <div className="flex justify-center gap-2">
              <button className="flex gap-1 items-center mt-2 text-center text-sm underline underline-offset-4 text-gray-500 dark:hover:text-white hover:text-black">
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
