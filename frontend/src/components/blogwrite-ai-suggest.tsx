import { CallGemini } from "@/lib/utils.geminiapi";
import { AtomIcon, LoaderIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";

type Props = {
  blogcontent: string;
  blogtitle: string;
};

type Suggestion = {
  suggestions: string;
};

async function GenerateResponse(
  setres: React.Dispatch<React.SetStateAction<Suggestion[]>>,
  blogcontent: string,
  blogtitle: string,
  setgen: React.Dispatch<React.SetStateAction<boolean>>
) {
  if (!blogtitle) {
    setgen(false);
    toast.info("Please start typing content first");
    return;
  }

  setgen(true);

  try {
    const val = await CallGemini(
      `Hey Gemini, I am writing a blog titled "${blogtitle}" with content "${blogcontent}". Suggest exactly three points to improve it in plain text, max 200 characters each, numbered 1-3, no special characters.`
    );

    if (!val) throw new Error("No AI response");

    // Split AI response by numbering or line breaks
    let suggestionsArray = val
      .split(/\n|(?<=\n)|(?=\d[\.\-\s])/g) // split at newlines or numbers like 1, 2, 3
      .map((s) => s.trim())
      .filter(Boolean);

    // Ensure exactly 3 suggestions
    while (suggestionsArray.length < 3) suggestionsArray.push("Suggestion not available.");

    const suggestions: Suggestion[] = suggestionsArray
      .slice(0, 3)
      .map((s) => ({ suggestions: s.replace(/^\d[\.\-\s]*\s*/, "") })); // remove AI numbering

    setres(suggestions);
  } catch (err) {
    toast.error("Failed to generate AI suggestions.");
    setres([{ suggestions: "AI suggestions could not be fetched." }]);
  } finally {
    setgen(false);
  }
}

export function AISuggests({ blogcontent, blogtitle }: Props) {
  const [response, setres] = useState<Suggestion[]>([
    { suggestions: "AI Suggestions here!" },
  ]);
  const [generating, setgen] = useState(false);

  return (
    <div>
      <div className="py-2 px-4 border-1 rounded-t-2xl">
        <div className="flex gap-2 items-center justify-center">
          <p className="font-medium text-center">AI Suggestions</p>
          <AtomIcon className="w-5 h-5 animate-pulse" />
        </div>
        <p className="text-sm text-center">Start Writing to get Suggestions</p>
        <div className="text-md font-sans rounded-2xl flex flex-col items-start justify-center text-gray-500 text-left mt-6 mb-2 outline-1 min-h-[2.5rem] p-4 gap-2">
          {generating ? (
            <LoaderIcon className="animate-spin h-6 w-6 mx-auto" />
          ) : (
            response.map((item, index) => (
              <p key={index}>
                <span className="font-semibold">{index + 1}. </span>
                {item.suggestions}
              </p>
            ))
          )}
        </div>
      </div>
      <Button
        onClick={() => GenerateResponse(setres, blogcontent, blogtitle, setgen)}
        className="w-full rounded-t-none mt-2"
        disabled={generating}
      >
        {generating ? "Generating..." : "Get Suggestions"}
      </Button>
    </div>
  );
}
