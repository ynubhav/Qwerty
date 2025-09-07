import { BlogFullView } from "@/components/blog-page-fullview";
import { ReadLists } from "@/components/Read-lists";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { LucideFocus } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { useFullscreen } from "@/lib/utils.fullscreen";
// import { Logo } from "@/components/logo";

export function ReadSpace() {
  const { isFullscreen, toggleFullscreen } = useFullscreen();
  return (
    <>
      {/* <Logo /> */}
      <div className="outline-none border-1 rounded-2xl border-gray-500 my-6">
        <div className=" md:flex px-2 max-h-screen pt-2 gap-2">
          {/* LEFT BLOG PREVIEW SCROLLABLE */}
          <div
            className={`${
              isFullscreen ? "w-full" : "md:w-2/3"
            } outline-none border-1 border-gray-500 max-h-screen overflow-clip rounded-xl py-6 `}
          >
            <div className="flex justify-center gap-4 items-center">
              <h1 className="text-4xl text-center text-rose-500 font-medium">
                Reading Area
              </h1>
              <Toggle
                variant={"outline"}
                aria-label="Toggle italic"
                onClick={() => {
                  toggleFullscreen();
                }}
              >
                <LucideFocus className="h-4 w-4" /> Focus Mode
              </Toggle>
            </div>

            <ScrollArea.Root className="w-full h-screen rounded mt-2">
              <ScrollArea.Viewport className="w-full h-11/12">
                <div className="flex items-center justify-center h-12/12">
                  <BlogFullView />
                </div>
              </ScrollArea.Viewport>

              {/* Scrollbar */}
              <ScrollArea.Scrollbar
                orientation="vertical"
                className="flex select-none touch-none p-0.5 bg-gray-400/10"
              >
                <ScrollArea.Thumb className="flex-1 bg-gray-400/10 rounded" />
              </ScrollArea.Scrollbar>
            </ScrollArea.Root>
          </div>

          {/* RIGHT LIST */}
          <div
            className={`flex pt-6 justify-center md:w-1/3 overflow-clip outline-none border-1 rounded-xl border-gray-500 ${
              isFullscreen ? "hidden" : ""
            }`}
          >
            <ReadLists />
          </div>
        </div>
      </div>
    </>
  );
}
