const express = require('express')
const path = require('path')
const app = express()

const port = 3000




app.use(express.static('static'));




app.get('/', (req, res) => {

  console.log("ding")
  res.sendFile(path.join(__dirname,`../static/home.html`))

}

);
app.get('/static/Javascript', (req, res) => {

  console.log("ding")
  res.sendFile(path.join(__dirname,`../static/javascript.html`))

}


);
app.use('/static/sql', (req, res) => {

  console.log("ding")
  res.sendFile(path.join(__dirname,`../static/sql.html`))

}
);
app.use('/static/node', (req, res) => {

  console.log("ding")
  res.sendFile(path.join(__dirname,`../static/node.html`))

}

);

app.use('/static/mongodb', (req, res) => {

  console.log("ding")
  res.sendFile(path.join(__dirname,`../static/mongodb.html`))

}

);




app.listen(port, () => {
  console.log('Server started on port 3000');
});