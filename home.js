var http = require('http')
var fs = require('fs')

var server = http.createServer(function(req,res){
    console.log('request : ' +req.url)
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'content-type' : 'text/html'})
        fs.createReadStream(__dirname+'/comp/test.html').pipe(res)
    }
    else if(req.url === '/soal'){
        res.writeHead(200, {'content-type' : 'text/html'})
        fs.createReadStream(__dirname+'/soal.json').pipe(res)
    }
    else if(req.url === '/user1'){
        res.writeHead(200, {'content-type' : 'text/html'})
        fs.createReadStream(__dirname+'/user1.json').pipe(res)
    }
    else if(req.url === '/user2'){
        res.writeHead(200, {'content-type' : 'text/html'})
        fs.createReadStream(__dirname+'/user2.json').pipe(res)
    }
    else if(req.url === '/user3'){
        res.writeHead(200, {'content-type' : 'text/html'})
        fs.createReadStream(__dirname+'/user3.json').pipe(res)
    }
    else {
        res.writeHead(404, {'content-type' : 'text/html'})
        fs.createReadStream(__dirname+'/comp/404.html').pipe(res)
    }
})
server.listen(3000, '127.127.127.127')
console.log('server aktif.Listening port 3000')