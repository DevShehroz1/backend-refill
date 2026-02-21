export default function handler(req, res) {
  res.status(200).json({
    ok: true,
    SHOP: process.env.SHOP || null,
    HAS_ADMIN_TOKEN: !!process.env.ADMIN_TOKEN,
  });
}