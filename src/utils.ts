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

export async function getUserInfo(): Promise<void> {
  try {
    const response = await fetch("/.auth/me");
    const payload = await response.json();
    const { clientPrincipal } = payload;
    return clientPrincipal || {};
  } catch (e) {
    console.error("GetUser error: ", e);
  }
}

export async function fetchAIService({
  content = "Tell me a joke",
}: {
  content: string;
}): Promise<string | void> {
  const data = { query: content, q: content };

  try {
    const response = await fetch(
      "https://functionapponezero.azurewebsites.net/api/queryaiservice",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    console.log("response", response);

    const payload = await response.json();
    console.log("payload", payload);
    return payload;
  } catch (e) {
    console.error("GetUser error: ", e);
  }
}
