const express = require('express');
const app = express();



app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(express.json());
app.use(express.static('./app/client/'));



const apiRoutes = require('./app/routes/apiRoutes.js');
app.use('/api', apiRoutes);

const clientRoutes = require('./app/routes/clientRoutes.js');
app.use('/', clientRoutes);



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Test Server - http://localhost:${PORT}`);
});
