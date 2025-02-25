
const express = require('express');
const app = express();
const indexRoute = require('./routes/indexRoute');
const newRoute = require('./routes/newRoute');
const PORT = process.env.PORT || 3000;



app.set('view engine', 'ejs');
app.use(express.static('public'));

//Dealing with form
app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.use("/", newRoute)
app.use("/index", indexRoute)



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
