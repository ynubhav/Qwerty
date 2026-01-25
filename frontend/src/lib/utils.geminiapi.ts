import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyAHUwBJVHF-nFtz1XivdC4B1DywVd-Blsc",
});

export async function CallGemini(prompt: string): Promise<string> {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    // ❌ REMOVE responseMimeType + responseSchema
  });

  const text = response.text;

  if (!text) {
    throw new Error("Empty response from Gemini");
  }

  return text; // raw Markdown string
}
