/** @format */

import { useState } from "react";
import ReviewForm from "./ReviewForm";
import "./Review.css";
function Review({ review, handleDelete, handleSubmit }) {
	const [viewEditForm, toggleEditForm] = useState(false);

	const toggleView = () => {
		toggleEditForm(!viewEditForm);
	};
	return (
		<div className="Review">
			<button className="edit-button" onClick={toggleView}>
				Edit this review
			</button>
			{viewEditForm ? (
				<ReviewForm
					reviewDetails={review}
					toggleView={toggleView}
					handleSubmit={handleSubmit}
				/>
			) : (
				<div>
					<h4>
						{review.title} <span>{review.rating}</span>
					</h4>
					<h5>{review.reviewer}</h5>
					<p>{review.content}</p>
				</div>
			)}
			<button
				className="delete-button"
				onClick={() => handleDelete(review.id)}>
				Delete
			</button>
		</div>
	);
}

export default Review;
