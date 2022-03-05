const express = require ('express');
const res = require('express/lib/response');
const app = express();
const port = 3050;
const Sequelize = require('sequelize');
const { Restaurant, Reviewer, Reviews } = require('./models');
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/reviewers', async (req, res) => {
    const reviewersList = await Reviewer.findAll({
        attributes: ['name', 'email', 'karma']
    });
    res.json(reviewersList);
});

app.get('/restaurants', async (req, res) => {
    const restaurants = await Restaurant.findAll({
        attributes: ['name', 'address', 'category']
    });
    res.json(restaurants);
});

app.post('/reviews:id', async (req, res) => {
    const { id } = req.params;
    const newReview = await Reviews.update(req.body, {
       where: {
           id,
       }
       } 
    );
    res.json(newReview);
});
    
app.listen(port, () => {
    console.log(`app listening on port ${port}`)
  })