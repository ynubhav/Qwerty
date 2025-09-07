import { EllipsisVerticalIcon, Star } from "lucide-react";
import { Card } from "./ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function BlogsLogsName() {
  return (
    <Card className="rounded-none mx-1 mt-1 p-2">
      <div className="flex justify-around items-center">
        <div className="max-w-[100px]  overflow-clip text-sm">Why do koalas seem to be cute!</div>
        <div className="flex items-center"><Star className="w-4 h-4 fill-amber-300 text-amber-300"/><p className="text-sm text-gray-500">12 Jan'24</p></div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <EllipsisVerticalIcon className="h-6 w-4 hover:bg-gray-500/30 rounded py-1" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Open Logs</DropdownMenuItem>
              <DropdownMenuItem>Open in Reading Area</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </Card>
  );
}
