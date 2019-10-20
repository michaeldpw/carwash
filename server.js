var express = require('express');
var app = express();

const port = process.env.PORT || 9000 ;

if(process.env.NODE_ENV === 'production'){
    app.use(express.static( 'client/build' ));

    // app.get('*', (req, res) => {
    //     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')); 
    // });
}

app.listen(port, ()=>{
    console.log(port);
});