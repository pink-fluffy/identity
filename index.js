const express = require('express');

const app = express();

app.get("/", (req, res) => {
	res.send("nicely");
});

app.listen(3000, () => console.log("Listening nicely on port 3000"));
