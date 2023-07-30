/** @format */

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ReviewForm.css";

function ReviewForm(props) {
	let { id } = useParams();
	const { reviewDetails } = props;

	const [review, setReview] = useState({
		reviewer: "",
		title: "",
		content: "",
		rating: 0,
		bookmark_id: id,
	});

	const handleTextChange = (event) => {
		const { id, value } = event.target;
		setReview({ ...review, [id]: value });
	};

	useEffect(() => {
		if (reviewDetails) {
			setReview(reviewDetails);
		}
	}, [id, reviewDetails, props]);

	const handleSubmit = (event) => {
		event.preventDefault();
		props.handleSubmit({ ...review, rating: parseInt(review.rating, 10) }, id);
		if (reviewDetails) {
			props.toggleView();
		}
		setReview({
			reviewer: "",
			title: "",
			content: "",
			rating: 0,
			bookmark_id: id,
		});
	};

	return (
		<div className="Edit">
			{props.children}
			<form onSubmit={handleSubmit}>
				<label htmlFor="reviewer">Name:</label>
				<input
					id="reviewer"
					value={review.reviewer}
					type="text"
					onChange={handleTextChange}
					placeholder="Your name"
					required
				/>
				<label htmlFor="title">Title:</label>
				<input
					id="title"
					type="text"
					required
					value={review.title}
					onChange={handleTextChange}
				/>
				<label htmlFor="rating">Rating:</label>
				<input
					id="rating"
					type="number"
					name="rating"
					min="0"
					max="5"
					step="1"
					value={review.rating}
					onChange={handleTextChange}
				/>
				<label htmlFor="content">Review:</label>
				<textarea
					id="content"
					type="text"
					name="content"
					value={review.content}
					placeholder="What do you think..."
					onChange={handleTextChange}
				/>
				<br />
				<input type="submit" />
			</form>
		</div>
	);
}

export default ReviewForm;
