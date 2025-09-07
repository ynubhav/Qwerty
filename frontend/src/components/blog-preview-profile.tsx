import {
  ArrowUpRightFromSquare,
  Bookmark,
  Star,
} from "lucide-react";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { useState } from "react";

export function BlogPreviewShort() {
  const [Marked, setMarked] = useState(false);
  const [Favourite, setFav] = useState(false);
  return (
    <div className="w-full p-2">
      <Card className="p-4">
        <CardTitle className="m-0 p-0 flex justify-between items-center">
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
                {Marked ? <p>Remove from Library</p> : <p>Add to Library</p>}
              </TooltipContent>
            </Tooltip>
          </div>
        </CardTitle>
        <CardContent className="m-0 p-0 text-sm">
          Blog is something you write express yourself ...
        </CardContent>
        <CardFooter className="m-0 p-0 flex justify-between items-center">
          <div className="flex gap-1 items-center">
            <Star className="fill-yellow-200 w-4 h-4 text-yellow-200" />
            <p className="text-sm text-gray-500">12 July'25</p>
          </div>
          <p className="text-sm text-gray-500">20k Likes</p>
          <p className="text-sm text-gray-500">2k Bookmarks</p>
          <Tooltip>
            <TooltipTrigger>
                <ArrowUpRightFromSquare className="w-5 h-5 hover:bg-gray-500/40 transition-all p-0.5 rounded" />
            </TooltipTrigger>
            <TooltipContent>
                Go to Blog Page
            </TooltipContent>
          </Tooltip>
        </CardFooter>
      </Card>
    </div>
  );
}
