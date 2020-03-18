const express = require('express');
const app = express();



app.use(express.json());
app.use(express.urlencoded({extended : true }));
app.use(express.static('./app/client/'));



const apiRoutes = require('./app/routes/apiRoutes.js');
const clientRoutes = require('./app/routes/clientRoutes.js');

app.use('/api', apiRoutes);
app.use('/', clientRoutes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(
        `Test Server -`,
        `http://localhost:${PORT}`
    );
});
