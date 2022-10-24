const express = require('express')
var bodyParser = require('body-parser')
const path = require('path')
const PORT = process.env.PORT || 5000

const data = [];

const receiveData = (req, res)=> {
  console.log("receive data...");
  console.log(JSON.stringify(req.body));
  data.push(req.body);
  console.log("saved data...");
  res.status('200').json();
}

const showData = (req, res)=> {
  res.status('200').json(data);
}

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(bodyParser.json())
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://www.domainA.com');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    next();
  })
  .options('*', (req, res) => {
    console.log("handling options...");
    res.status(200).json({
      status: 'OK'
    });
  })  
  .get('/', (req, res) => res.render('pages/index'))
  .get('/show', showData)
  .post('/push', receiveData)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


