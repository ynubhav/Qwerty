import { Circle, StarIcon } from "lucide-react";
import { Card } from "./ui/card";

export function BlogLogs({ ...props }) {
  return (
    <Card className="rounded-none my-1 mx-2 py-4 px-4">
      <div className="px-2 flex items-center justify-around">
        <div className="flex gap-1 items-center justify-start  w-full">
          <Circle
            className={`${
              props.success
                ? "text-green-400 fill-green-400"
                : "text-red-400 fill-red-400"
            } w-2 h-2`}
          />{" "}
          <p className="text-sm text-gray-500">
            {props.success ? "Publish Successfull !" : "Failed !"}
          </p>
        </div>

        <div className="flex gap-1 items-center w-full overflow-x-clip">
          <p className="text-sm text-center max-w-[100px] overflow-clip">{props.logmessage}</p>
        </div>

        <div className="text-sm italic text-gray-600 w-full text-end">12214-248-249-499</div>

        <div className="flex items-center justify-end gap-1  w-full">
          <StarIcon className="text-amber-300 fill-amber-300 w-3 h-3" />
          <p className="text-sm text-gray-500">{props.time}</p>
        </div>
        
      </div>
    </Card>
  );
}
