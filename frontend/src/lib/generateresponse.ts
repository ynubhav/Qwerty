import { toast } from "sonner";
import { CallGemini } from "./utils.geminiapi";

export async function GenerateResponse(
  setRes: React.Dispatch<React.SetStateAction<string>>,
  blogcontent: string,
  blogtitle: string,
  setGen: React.Dispatch<React.SetStateAction<boolean>>
) {
  if (!blogtitle || !blogcontent) {
    toast.info("Start writing to get AI suggestions");
    return;
  }

  setGen(true);

  try {
    const val = await CallGemini(`
You are a professional editor.

Blog title: "${blogtitle}"
Blog content: "${blogcontent}"

Give exactly THREE suggestions to improve the blog.
Format the response strictly in Markdown:
- Use a numbered list (1–3)
- Each point max 200 characters
- No emojis, no extra commentary
`);

    if (!val) throw new Error("No AI response");

    setRes(val); // store raw markdown
  } catch {
    toast.error("Failed to generate AI suggestions.");
    setRes("⚠️ Unable to fetch AI suggestions.");
  } finally {
    setGen(false);
  }
}
