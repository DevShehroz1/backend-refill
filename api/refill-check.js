export default async function handler(req, res) {
  try {
    // 1) Always return something without any external calls
    const SHOP = process.env.SHOP || null;
    const HAS_ADMIN_TOKEN = Boolean(process.env.ADMIN_TOKEN);

    const emailRaw = (req.query.email || "").toString().trim();
    if (!emailRaw) {
      return res.status(200).json({
        ok: true,
        mode: "health",
        message: "Function is running",
        env: { SHOP, HAS_ADMIN_TOKEN }
      });
    }

    // 2) If email is present, we will still just echo for now
    return res.status(200).json({
      ok: true,
      mode: "echo",
      email: emailRaw.toLowerCase(),
      env: { SHOP, HAS_ADMIN_TOKEN }
    });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      message: "Crash in function",
      error: err?.message || String(err),
      stack: err?.stack || null
    });
  }
}
