const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
app.use(express.static('.'));


app.listen(port, () => {
  console.log(`Banking in Action! on port http://localhost:${port}`);
});
