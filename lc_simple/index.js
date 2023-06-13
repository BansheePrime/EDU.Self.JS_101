const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("<h2> Связь подтверждаю! Только лучшее впереди!</h2>");
});

const port = process.env.PORT || 3333;

app.listen(port, () => console.log(`listening on port ${port}`));
