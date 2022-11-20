const express = require('express');
const router = express.Router();

const Review = require('../models/Review');

// Create author review for specific business
router.post('/:authorId', async (request, response) => {
  let authorId = request.params.authorId;
	let newReview = new Review({
		...request.body,
		author: authorId
	});
	const result = await newReview.save();
	response.status(201).send(result);
});

// Permanently delete review
router.delete('/:reviewId', async (request, response) => {
	let reviewId = request.params.reviewId;
	let result = await Review.deleteOne(
		{ _id: reviewId}
	);
	if( result.deletedCount === 1 ){
    response.status(200).send({ status: "Review has been deleted", id: reviewId });
  }
});

module.exports = router;