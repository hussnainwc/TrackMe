const express = require("express");
const app = express();
app.use(express.static("public"));

const port = process.env.PORT || 3000;
const base = `${__dirname}/public`;

app.get("/", function (req, res) {
  res.sendFile(`${base}/device-list.html`);
});

app.get("/registration", function (req, res) {
  res.sendFile(`${base}/registration.html`);
});

app.get("/login", function (req, res) {
  res.sendFile(`${base}/login.html`);
});

app.get("/register-device", (req, res) => {
  res.sendFile(`${base}/register-device.html`);
});

app.get("/send-command", (req, res) => {
  res.sendFile(`${base}/send-command.html`);
});

app.get("/about", (req, res) => {
  res.sendFile(`${base}/about-me.html`);
});

app.get("*", (req, res) => {
  res.sendFile(`${base}/404.html`);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
