//node app.js
//nodemon app.js


// myDateTime = function () {
//     return Date();
// };
// var dt = myDateTime();

// res.writeHead(200, { 'Content-Type': 'text/html' });
// res.write(req.url);
// res.end();

// res.write("The date and time are currently: " + dt);

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

    fs.readFile('Reteta.html', function (err, data) {                   //read
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });

    fs.open('mynewfile1.txt', 'w', function (err, file) {               //open
        if (err) throw err;
        console.log('Saved file1!');
    });

    fs.writeFile('mynewfile2.txt', '', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

    for (var i = 0; i < 50; i = i + 3)
        fs.appendFile('mynewfile1.txt', String(i) + " ", function (err) {     //update
            if (err) throw err;
            console.log('Updated!');
        });


    // fs.unlink('mynewfile2.txt', function (err) {                        //delete
    //     if (err) throw err;
    //     console.log('File deleted!');
    // });

}).listen(8080);

