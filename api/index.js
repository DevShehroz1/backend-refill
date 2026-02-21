export default function handler(req, res) {
  res.status(200).send(`
    <html>
      <head><title>Refill Backend</title></head>
      <body style="font-family: sans-serif; padding: 20px;">
        <h2>Refill Backend is Live ✅</h2>
        <p>This app is used for Shopify App Proxy endpoints.</p>
        <p>Try: <code>/api/refill-check?email=test@example.com</code></p>
      </body>
    </html>
  `);
}
