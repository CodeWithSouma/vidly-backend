const express = require('express');
const { Rental } = require('../models/rental');
const auth = require('../middleware/auth');
const moment = require('moment');
const {Movie} = require('../models/movie');
const router = express.Router();


router.post('/', auth, async (req,res) => {
    if(!req.body.customerId) return res.status(400).send('Customer id not provided.');
    if(!req.body.movieId) return res.status(400).send('Movie id not provided.');
    const rental = await Rental.findOne({
        'customer._id':req.body.customerId,
        'movie._id':req.body.movieId
    });
    if(!rental) return res.status(404).send('Rental not found.');
    if(rental.dateReturned) return res.status(400).send('Returned already processed.');
    rental.dateReturned = new Date();
    const rentalDays =  moment().diff(rental.dateOut,'days');
    rental.rentalFee = rentalDays * rental.movie.dailyRentalRate;
    await rental.save();

    await Movie.updateOne({_id:rental.movie._id},{
        $inc:{numberInStock:1}
    });

    return res.status(200).send(rental);
    
});

module.exports = router;
