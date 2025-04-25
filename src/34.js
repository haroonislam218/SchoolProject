let express = require('express');
let app = express();
app.use(express.json());
app.get('/api', (req, res) => {
  res.send("Hello, World!");
});
app.listen(3000);
