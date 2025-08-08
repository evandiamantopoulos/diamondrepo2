export async function POST(req: Request) {
  const body = await req.json();
  const { text, rules } = body;

  const flags = [];

  for (const rule of rules) {
    if (rule.missing_phrase && !text.includes(rule.missing_phrase.toLowerCase())) {
      flags.push({ 
        type: 'missing', 
        message: "Missing: " + rule.missing_phrase, 
        recommendation: rule.recommendation 
      });
    }

    if (rule.contains_phrase && text.includes(rule.contains_phrase.toLowerCase()) && rule.warn_if_contains) {
      flags.push({ 
        type: 'warning', 
        message: "Overbroad: contains `" + rule.contains_phrase + "`", 
        recommendation: rule.recommendation 
      });
    }
  }

  const redlines = [
    {
      start: 10,
      end: 20,
      comment: "Suggest rewording this clause for clarity.",
    },
    {
      start: 50,
      end: 60,
      comment: "Missing a compliance reference.",
    }
  ];

  return new Response(JSON.stringify({ flags, redlines }), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}