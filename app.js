const express = require('express');
const cors = require('cors');
const app = express();
const restaurantRoute = require('./router/restaurants');
const menuRoute = require('./router/menu');
const { default: mongoose } = require('mongoose');

//bodyparser
app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    try{
        console.log('server started...');
        res.send('app running.')
    }
    catch{

    }
})

app.use('/restaurants', restaurantRoute);
app.use('/menu', menuRoute);

mongoose.connect('mongodb+srv://ruchibadkur:7nfcrZX0l5aamuDV@cluster0.ncfvcuk.mongodb.net/foodie?retryWrites=true&w=majority');

app.listen(4000);
