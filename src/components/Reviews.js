/** @format */

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Review from "./Review";
import ReviewForm from "./ReviewForm";
import "./Reviews.css";
const API = process.env.REACT_APP_API;

function Reviews() {
	const [reviews, setReviews] = useState([]);
	let { id } = useParams();
	const handleAdd = (newReview) => {
		axios
			.post(`${API}/bookmarks/${id}/reviews`, newReview)
			.then(
				(response) => {
					setReviews([response.data, ...reviews]);
				},
				(error) => console.error(error)
			)
			.catch((c) => console.warn("catch", c));
	};
	const handleDelete = (idReview) => {
		axios
			.delete(`${API}/bookmarks/${id}/reviews/${idReview}`)
			.then(
				(response) => {
					const copyReviewArray = [...reviews];
					const indexDeletedReview = copyReviewArray.findIndex(
						(review) => {
							return review.id === idReview;
						}
					);
					copyReviewArray.splice(indexDeletedReview, 1);
					setReviews(copyReviewArray);
				},
				(error) => console.error(error)
			)
			.catch((c) => console.warn("catch", c));
	};

	const handleEdit = (updatedReview) => {
		axios
			.put(
				`${API}/bookmarks/${id}/reviews/${updatedReview.id}`,
				updatedReview
			)
			.then((response) => {
				const copyReviewArray = [...reviews];
				const indexUpdatedReview = copyReviewArray.findIndex(
					(review) => {
						return review.id === updatedReview.id;
					}
				);
				copyReviewArray[indexUpdatedReview] = response.data;
				setReviews(copyReviewArray);
			})
			.catch((c) => console.warn("catch", c));
	};
	useEffect(() => {
		axios.get(`${API}/bookmarks/${id}/reviews`).then((response) => {
			setReviews(response.data);
		});
	}, [id]);

	const [showForm, setShowForm] = useState(false);

	const handleFormToggle = () => {
		setShowForm((prevShowForm) => !prevShowForm);
	};

	return (
		<section className="Reviews">
			<h2>Reviews</h2>
			<div className={`${showForm ? "" : "hide"}`}>
				<ReviewForm handleSubmit={handleAdd}>
					<h3>Add a New Review</h3>
				</ReviewForm>
			</div>
			<div className="show-form">
				<button onClick={handleFormToggle}>
					{showForm ? "Hide Form" : "Show Form"}
				</button>
			</div>
			{reviews.map((review) => (
				<Review
					key={review.id}
					review={review}
					handleDelete={handleDelete}
					handleSubmit={handleEdit}
				/>
			))}
		</section>
	);
}

export default Reviews;
