import http from 'http';
import https from 'https';

const PROXY_PORT = 5174;
const TARGET_URL = 'themagicknife.com';
const TARGET_PORT = 443;

// Create proxy server
const proxyServer = http.createServer((req, res) => {
  console.log(`👉 Incoming request: ${req.method} ${req.url}`);

  // Parse the target URL
  const options = {
    hostname: TARGET_URL,
    port: TARGET_PORT,
    path: req.url,
    method: req.method,
    headers: {
      ...req.headers,
      host: TARGET_URL,
      'user-agent': req.headers['user-agent'] || 'Magic Knife Local Proxy'
    }
  };

  // Forward the request to the target server
  const proxyReq = https.request(options, (proxyRes) => {
    console.log(`✅ Target response: ${proxyRes.statusCode}`);

    // Set the response headers from the target
    res.writeHead(proxyRes.statusCode, proxyRes.headers);

    // Pipe the target response to the client
    proxyRes.pipe(res);
  });

  proxyReq.on('error', (err) => {
    console.error('❌ Proxy error:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Proxy Error');
  });

  // Pipe the client request body to the target
  req.pipe(proxyReq);
});

// Start proxy server
proxyServer.listen(PROXY_PORT, () => {
  console.log('\n🎉 LOCAL PROXY SERVER IS RUNNING!');
  console.log(`👉 Your local address: http://localhost:${PROXY_PORT}/`);
  console.log(`👉 Forwarding to: https://${TARGET_URL}/`);
  console.log(`\nOpen http://localhost:${PROXY_PORT}/ in your browser to see the live site!`);
});