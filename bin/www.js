const app = require("..");
const PORT = process.env.PORT || 9999;

app.listen(PORT, () => {
  console.log('nodejs-demo server listening on', PORT);
});