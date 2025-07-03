export const POST = async (req: any) => {
  try {
    const { language, code } = await req.json();

    const runtimesRes = await fetch("https://emkc.org/api/v2/piston/runtimes");
    const runtimes = await runtimesRes.json();

    const runtime = runtimes.find((rt: any) => rt.language === language);

    if (!runtime) {
      return new Response(JSON.stringify({ error: "Language not supported" }), {
        status: 400,
      });
    }

    const executeRes = await fetch("https://emkc.org/api/v2/piston/execute", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        language: language,
        version: runtime.version,
        files: [
          {
            name: `main.${language}`,
            content: `${code}`,
          },
        ],
      }),
    });

    const result = await executeRes.json();
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Internal Server Error", details: error }),
      { status: 500 }
    );
  }
};
