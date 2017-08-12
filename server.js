var http = require("http");
var fs = require("fs");
var connect = require("connect");
var app = connect();
//404 response
function send404Response(response){
  response.writeHead(404 , {"Content-Type" : "text/plain"});
  response.write("Error 404: File not Found");
  response.end();
}
function onRequest( request , response){
  if( request.method == 'GET' && request.url == '/'){
    response.writeHead(200 , {"Content-Type" : "text/html"});
    response.writedHead(200 , {"Content-Type" : 'text/javascript'});
    fs.createReadStream("./study.html").pipe(response);
    fs.createReadStream('./studytime.js').pipe(response);
  }
  else{
    send404Response(response);
  }
}
function doFirst(request , response , next){
  console.log("bacon");
  next();
}
app.use(doFirst);
http.createServer(app).listen(8888);
