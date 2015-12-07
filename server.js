var express = require('express');
var app = express();
var path = require('path');
var compression = require('compression');
var helmet = require('helmet');

app.use(helmet());
app.use(compression({
    threshold: 1,
    level: 9
}));

app.use(express.static(path.join(__dirname, 'client'), {maxAge: 86400000}));

app.get('*', function (req, res) {
    var file = __dirname + "/client/index.html";
    res.sendFile(path.resolve(file));
});

app.listen(process.env.PORT || 3000, function(){
    console.log('listening on', 3000);
});