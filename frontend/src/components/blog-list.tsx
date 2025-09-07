import { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis } from "lucide-react";
import { Card } from "./ui/card";
import { Link } from "react-router-dom";

export function BlogList() {
  const [Marked, setMarked] = useState(false);
  return (
    <Card className="py-2 px-4 mt-1">
      <div className="flex gap-2 items-center">
        <Tooltip>
          <TooltipTrigger>
            <Checkbox className="w-4 h-4" onClick={() => setMarked((prev) => !prev)} />
          </TooltipTrigger>
          <TooltipContent>{Marked ? "Unmark" : "Mark as Done"}</TooltipContent>
        </Tooltip>
        <div className="ml-2">
          <p>WTHisBloG ?</p>
          <p className="text-sm text-green-400 cursor-pointer hover:underline hover:underline-offset-4">
            <Link to={'/home/profile/afjjpf-fhfajk'}>ynubhav</Link>
          </p>
        </div>
        <div>
          <div className="flex gap-1 items-center ml-4">
            <p className="text-sm text-gray-500">12 July'25</p>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Ellipsis className="w-4 h-4 hover:bg-gray-500/20 rounded ml-6 mr-2" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Open</DropdownMenuItem>
            <DropdownMenuItem>Open in Reading Area</DropdownMenuItem>
            <DropdownMenuItem>Remove</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Card>
  );
}
