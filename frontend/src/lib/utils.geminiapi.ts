import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyAHUwBJVHF-nFtz1XivdC4B1DywVd-Blsc",
});

export async function CallGemini(prompt: string) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: "array",
        items: {
          type: "object",
          properties: {
            suggestions: {
              type: "string",
            },
          },
          required: ["suggestions"],
        },
      },
    },
  });

  // Directly accessing the text property for the generated content
  console.log(response.text);
  return response.text;
}
