const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.json({ extended: false }));
app.post("/event", (req, res) => {
    console.log("logging events", JSON.stringify(req.body));
    return res.status(201).json({ ok: true });
})

app.listen(8001, () => {
    console.log("server is live now!");
});
