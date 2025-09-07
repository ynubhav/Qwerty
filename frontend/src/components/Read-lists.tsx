import { BlogList } from "@/components/blog-list";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { List, Star } from "lucide-react";
import { useParams } from "react-router-dom";

export function ReadLists() {
  const { listtype } = useParams();
  console.log("hello");
  console.log(listtype);
  return (
    
      <div className="p-1 rounded-2xl  w-fit ml-4">
        <p>
          <h2 className="scroll-m-20 pb-2 text-center text-3xl font-semibold tracking-tight first:mt-0">
            My Lists
          </h2>
        </p>
        <Tabs
          defaultValue={listtype || "ReadingList"}
          className="w-fit flex justify-center"
        >
        <div className="flex justify-center items-center">
          <TabsList className="mt-2">
            <TabsTrigger value="ReadList">
              {" "}
              <List />
              My Reading List
            </TabsTrigger>
            <TabsTrigger value="Favourites">
              <Star />
              Favourites
            </TabsTrigger>
          </TabsList>
          </div>
          <TabsContent value="ReadList">
            <div className="flex h-full">
              <div className="flex p-2 flex-col w-fit h-screen pb-3">
                <ScrollArea className="h-11/12 py-1 ">
                  <BlogList />
                  <BlogList />
                  <BlogList />
                  <BlogList />
                  <BlogList />
                  <BlogList />
                  <BlogList />
                  <BlogList />
                  <BlogList />
                  <BlogList />
                  <BlogList />
                  <BlogList />
                  <BlogList />
                  <BlogList />
                  <BlogList />
                  <BlogList />
                  <BlogList />
                  <BlogList />
                  <BlogList />
                  <BlogList />
                </ScrollArea>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="Favourites">
            <div className="flex h-full">
              <div className="flex p-2 flex-col w-fit h-screen pb-3">
                <ScrollArea className="h-11/12 py-1">
                  <BlogList />
                  <BlogList />
                  <BlogList />
                  <BlogList />
                  <BlogList />
                  <BlogList />
                  <BlogList />
                  <BlogList />
                  <BlogList />
                  <BlogList />
                  <BlogList />
                  <BlogList />
                  <BlogList />
                  <BlogList />
                  <BlogList />
                  <BlogList />
                  <BlogList />
                  <BlogList />
                  <BlogList />
                  <BlogList />
                </ScrollArea>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
  );
}
