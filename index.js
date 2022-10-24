const express = require('express')
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
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .options('*', (req, res) => {
    res.json({
      status: 'OK'
    });
  })  
  .get('/', (req, res) => res.render('pages/index'))
  .get('/show', showData)
  .post('/push', receiveData)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
