const fs = require('fs');

const requestHandler = (req,res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<h2>Enter a message</h2>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit" >send</button></input></form></body>');
        res.write('</html>'); 
        return res.end();
    };

    if(url==='/message' && method==='POST'){
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
            console.log(body);
        });
        req.on('end', () => {
            const ParsedData = Buffer.concat(body).toString();
            // console.log(ParsedData);
            const msg = ParsedData.split("=")[1];
            fs.writeFileSync('msg.txt',msg);
        })
        res.setHeader('Location','/');
        return res.end();
    };

    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head> My Node.js learn </head>');
    res.write('<body> <h1>Hello Welcome to my learning Nodejs</h1> </body>')
    res.write('</html>');
    res.end()
}

module.exports = {
    handler: requestHandler,
    someText: "Some hard coded text"
};