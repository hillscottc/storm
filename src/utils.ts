import OpenAI from "openai";

export const API_KEY = import.meta.env.VITE_OPENAI_SECRET || "";

/* https://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety */
export async function fetchChat({
  content = "Tell me a joke",
}: {
  content: string;
}): Promise<string | null> {
  const client = new OpenAI({ apiKey: API_KEY, dangerouslyAllowBrowser: true });
  const response = await client.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content }],
    temperature: 0.8,
    max_tokens: 1024,
  });
  return response.choices[0]?.message?.content;
}
