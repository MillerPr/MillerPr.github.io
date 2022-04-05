const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.get('', function (res) {
  res.render('../../views/view.ejs', { your_name: 'Miller' });
});

const server = app.listen(4000, function () {
  console.log('listening to port requests 4000');
});
