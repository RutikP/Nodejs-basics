
const fs = require('fs');
const serverHandler = (req, res) => {
    console.log("Server running");
    const url = req.url;
    const method = req.method;
    if(url==='/'){
        res.setHeader('Content-type','text/html');
        res.write("<html><title>My First Assignment</title> \
        <h1>Welcome learner!</h1><form action='/user-names' method='POST'>\
        <input type='text' name='user-names'><button type='submit'>submit</button></input>\
        </form></html>");
        res.end();
    }

    if(url === '/user-names' && method==='POST'){
        console.log("Entered into user names");
        res.setHeader('location','/user-names');
        res.setHeader('Content-type','text/html');
            res.write(`<html><title>My First Assignment</title> \
            <h1>Welcome Users!</h1></html>`);
        body = [];
        req.on('data',chunk => {
            body.push(chunk);
        });
        req.on('end',()=>{
            const PData = Buffer.concat(body).toString();
            console.log(PData.split('=')[1]);
            const myData = PData.split('=')[1];
            fs.writeFileSync('data.txt',myData);
            
        });  

       
        return res.end();
    }

}

return module.exports=serverHandler;