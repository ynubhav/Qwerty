import ReactMarkdown from "react-markdown";
import { AtomIcon, LoaderIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { GenerateResponse } from "@/lib/generateresponse";

type Props = {
  blogcontent: string;
  blogtitle: string;
};

export function AISuggests({ blogcontent, blogtitle }: Props) {
  const [response, setRes] = useState<string>(
    "_AI suggestions will appear here._",
  );
  const [generating, setGen] = useState(false);

  return (
    <div>
      <div className="py-2 px-4 border-1 rounded-t-2xl">
        <div className="flex gap-2 items-center justify-center">
          <p className="font-medium text-center">AI Suggestions</p>
          <AtomIcon className="w-5 h-5 animate-pulse" />
        </div>

        <p className="text-sm text-center">Start writing to get suggestions</p>

        <div className="rounded-2xl text-gray-600 mt-6 mb-2 min-h-[2.5rem] p-4">
          {generating ? (
            <LoaderIcon className="animate-spin h-6 w-6 mx-auto" />
          ) : (
            <div className="prose prose-sm max-w-none">
              <ReactMarkdown>{response}</ReactMarkdown>
            </div>
          )}
        </div>
      </div>

      <Button
        onClick={() => GenerateResponse(setRes, blogcontent, blogtitle, setGen)}
        className="w-full rounded-t-none mt-2"
        disabled={generating}
      >
        {generating ? "Generating..." : "Get Suggestions"}
      </Button>
    </div>
  );
}
