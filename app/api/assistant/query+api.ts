const OPENAI_ENDPOINT = "https://api.openai.com/v1/chat/completions";

export async function POST(req: Request): Promise<Response> {
  const { prompt } = await req.json();
  console.log(`prompt: ${prompt}`);

  const jsonRes = await fetch(OPENAI_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are an assistant that helps users stay present on their daily walks. Users ask you questions as they are walking. You need to give brief responses with helpful tips they can apply.",
        },
        { role: "user", content: prompt },
      ],
      temperature: 1.2,
    }),
  }).then((res) => res.json());

  if (jsonRes.choices?.[0]) {
    const llmResponse = jsonRes.choices[0].message.content;
    return Response.json(llmResponse);
  } else if (jsonRes.error) {
    return new Response(jsonRes.error.message, { status: 400 });
  }

  return Response.json(jsonRes);
}
