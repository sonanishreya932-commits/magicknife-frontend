const http = require('http');
const httpProxy = require('http-proxy');
const open = require('open').default;

console.log('Starting local dev proxy server...');

// Create two proxies: one for frontend, one for backend
const frontendProxy = httpProxy.createProxyServer({
  target: 'http://localhost:5173',
  changeOrigin: true,
  timeout: 10000,
  proxyTimeout: 10000
});

const backendProxy = httpProxy.createProxyServer({
  target: 'http://localhost:5000',
  changeOrigin: true,
  timeout: 10000,
  proxyTimeout: 10000
});

// Log proxy errors
const handleError = (err, req, res) => {
  console.error('❌ Proxy Error:', err.message);
  console.error('For URL:', req.url);
  if (!res.headersSent) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end(`Proxy Error: ${err.message}`);
  }
};
frontendProxy.on('error', handleError);
backendProxy.on('error', handleError);

// Log successful requests
const logSuccess = (proxyRes, req, res) => {
  console.log(`✅ ${req.method} ${req.url} -> ${proxyRes.statusCode}`);
};
frontendProxy.on('proxyRes', logSuccess);
backendProxy.on('proxyRes', logSuccess);

// Create HTTP server
const server = http.createServer((req, res) => {
  console.log(`📥 Incoming request: ${req.method} ${req.url}`);
  
  // Proxy API requests to our local backend (5000)
  if (req.url.startsWith('/api')) {
    console.log(`🔄 Routing API request to backend (port 5000)`);
    backendProxy.web(req, res);
  } 
  // All other requests go to our local React dev server (5173)
  else {
    console.log(`🔄 Routing to frontend (port 5173)`);
    frontendProxy.web(req, res);
  }
});

// Start server
const PORT = 5174;
server.listen(PORT, () => {
  console.log(`\n🎉 LOCAL DEV PROXY is RUNNING!`);
  console.log(`📍 URL: http://localhost:${PORT}`);
  console.log(`🎯 Frontend: http://localhost:5173 (local React app)`);
  console.log(`🎯 Backend: http://localhost:5000 (connected to your Compass database!)`);
  console.log(`\n✅ Your MongoDB Compass changes will show up HERE NOW!`);
  console.log(`\nOpening browser...`);
  
  open(`http://localhost:${PORT}/menu`).catch(err => {
    console.log(`\n⚠️ Couldn't open browser. Please open http://localhost:${PORT}/menu manually.`);
  });
});

// Handle server errors
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} is already in use!`);
    console.error(`Please stop whatever is running on port ${PORT} and try again.`);
  } else {
    console.error('❌ Server Error:', err);
  }
  process.exit(1);
});
