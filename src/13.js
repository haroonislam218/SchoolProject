  const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { title: 'Hello World' });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});