// Zero-dependency static server: run with `node server.js`
const http=require('http'),fs=require('fs'),path=require('path');
const types={'.html':'text/html','.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml','.png':'image/png','.ico':'image/x-icon'};
const PORT=process.env.PORT||3000;
http.createServer((req,res)=>{
  let p=decodeURIComponent(req.url.split('?')[0]); if(p==='/')p='/index.html';
  const file=path.join(__dirname,path.normalize(p));
  if(!file.startsWith(__dirname)){res.writeHead(403);return res.end()}
  fs.readFile(file,(e,d)=>{ if(e){res.writeHead(404);return res.end('Not found')}
    res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream'});res.end(d)});
}).listen(PORT,()=>console.log('CaliberUX running at http://localhost:'+PORT));
