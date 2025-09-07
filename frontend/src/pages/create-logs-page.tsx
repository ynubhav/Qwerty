import { BlogsLogsName } from "@/components/blog-list-logs";
import { BlogLogs } from "@/components/blog-logs";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RefreshCcw } from "lucide-react";
import { useState } from "react";

export function CreateLogsPage() {
  const [Refresh, setRefresh] = useState(false);
  const HandleRefresh = async () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 1000);
  };
  return (
    <div className="flex items-center justify-center h-full">
      <Logo />
      <div className="h-11/12 outline-1 rounded-2xl mx-1 w-11/12 p-2 outline-gray-500 gap-2 flex mt-6">
        <div className="w-1/4 border-1 rounded-l-xl border-gray-500 h-full overflow-clip">
          <div className="w-full font-medium px-2 pt-2 pb-4.5">All Blogs</div>
          <ScrollArea className="h-11/12 pt-2">
            <BlogsLogsName />
            <BlogsLogsName />
            <BlogsLogsName />
            <BlogsLogsName />
            <BlogsLogsName />
            <BlogsLogsName />
            <BlogsLogsName />
            <BlogsLogsName />
            <BlogsLogsName />
            <BlogsLogsName />
          </ScrollArea>
        </div>

        <div className="w-3/4 border-1 rounded-r-xl border-gray-500 h-full">
          <div>
            <div className="w-full border-b-1 border-gray-500 items-center flex justify-between px-2 py-1">
              <div className="flex gap-4 justify-items-start items-center">
                <p className="text-sm font-medium">Publish Logs</p>
                <div>
                  <p className="font-medium">BlogName</p>
                  <p className="text-sm text-green-400 hover:underline hover:underline-offset-4 cursor-pointer">
                    ynubhav
                  </p>
                </div>
              </div>
              <Button
                variant={"ghost"}
                disabled={Refresh}
                onClick={HandleRefresh}
              >
                <RefreshCcw className={`${Refresh ? "animate-spin" : ""}`} />{" "}
                <p className="hidden md:flex">Refresh</p>
              </Button>
            </div>
            <div className="flex justify-around py-1 font-medium">
              <p>Success</p>
              <p>Log Message</p>
              <p>Log #id</p>
              <p>TimeStamp</p>
            </div>
          </div>

          <div className="h-full pb-4 pt-2 px-2">
            <ScrollArea className="h-10/12">
              <BlogLogs
                logmessage="Hello Helllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllasfalfaklkfaklflkakslfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                success={true}
                time="12 july 29"
              />
              <BlogLogs logmessage="Hello" success={false} time="12 july 28" />
              <BlogLogs logmessage="Hello" success={true} time="12 july 25" />
              <BlogLogs logmessage="Hello" success={true} time="12 july 24" />
              <BlogLogs logmessage="Hello" success={false} time="12 july 23" />
              <BlogLogs
                logmessage="Hello Helllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllasfalfaklkfaklflkakslfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                success={true}
                time="12 july 29"
              />
              <BlogLogs logmessage="Hello" success={false} time="12 july 28" />
              <BlogLogs logmessage="Hello" success={true} time="12 july 25" />
              <BlogLogs logmessage="Hello" success={true} time="12 july 24" />
              <BlogLogs logmessage="Hello" success={false} time="12 july 23" />
              <BlogLogs
                logmessage="Hello Helllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllasfalfaklkfaklflkakslfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                success={true}
                time="12 july 29"
              />
              <BlogLogs logmessage="Hello" success={false} time="12 july 28" />
              <BlogLogs logmessage="Hello" success={true} time="12 july 25" />
              <BlogLogs logmessage="Hello" success={true} time="12 july 24" />
              <BlogLogs logmessage="Hello" success={false} time="12 july 23" />
              <BlogLogs logmessage="Hello" success={false} time="12 july 23" />
              <BlogLogs logmessage="Hello" success={false} time="12 july 23" />
              <BlogLogs logmessage="Hello" success={false} time="12 july 23" />
              <BlogLogs logmessage="Hello" success={false} time="12 july 23" />
              <BlogLogs logmessage="Hello" success={false} time="12 july 23" />
              <BlogLogs logmessage="Hello" success={false} time="12 july 23" />
              <BlogLogs logmessage="Hello" success={false} time="12 july 23" />
              <BlogLogs logmessage="Hello" success={false} time="12 july 23" />
              <BlogLogs logmessage="Hello" success={false} time="12 july 23" />
              <BlogLogs logmessage="Hello" success={false} time="12 july 23" />
              <BlogLogs logmessage="Hello" success={false} time="12 july 23" />
              <BlogLogs logmessage="Hello" success={false} time="12 july 23" />
              <BlogLogs logmessage="Hello" success={false} time="12 july 23" />
              <BlogLogs logmessage="Hello" success={false} time="12 july 23" />
              <BlogLogs logmessage="Hello" success={false} time="12 july 23" />
              <BlogLogs logmessage="Hello" success={false} time="12 july 23" />
              <BlogLogs logmessage="Hello" success={false} time="12 july 23" />
              <BlogLogs logmessage="Hello" success={false} time="12 july 23" />
              <BlogLogs logmessage="Hello" success={false} time="12 july 23" />
              <BlogLogs logmessage="Hello" success={false} time="12 july 23" />
              <BlogLogs logmessage="Hello" success={false} time="12 july 23" />
              <BlogLogs logmessage="Hello" success={false} time="12 july 23" />
              <BlogLogs logmessage="Hello" success={false} time="12 july 23" />
              <BlogLogs logmessage="Hello" success={false} time="12 july 23" />
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
}
