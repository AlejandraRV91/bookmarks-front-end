/** @format */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./EditBookmarkForm.css";

function EditBookmarkForm({ bookmarkDetails, handleSubmit, buttonLabel }) {
	const [bookmark, setBookmark] = useState({});

	useEffect(() => {
		setBookmark(bookmarkDetails);
	}, [bookmarkDetails]);
	const navigate = useNavigate();

	const handleTextChange = (event) => {
		const { name, value } = event.target;
		setBookmark({ ...bookmark, [name]: value });
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
		handleSubmit(bookmark);
		navigate(`/bookmarks/${bookmark.id}`);
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<label htmlFor="name">Name:</label>
			<input
				id="name"
				name="name"
				value={bookmark.name ? bookmark.name : ""}
				type="text"
				onChange={handleTextChange}
				placeholder="Name"
				required
			/>

			<label htmlFor="url">URL:</label>
			<input
				id="url"
				name="url"
				type="text"
				required
				value={bookmark.url ? bookmark.url : ""}
				onChange={handleTextChange}
			/>

			<label htmlFor="category">Category:</label>
			<input
				id="category"
				name="category"
				value={bookmark.category ? bookmark.category : ""}
				type="text"
				onChange={handleTextChange}
				placeholder="Category"
				required
			/>

			<label htmlFor="is_favorite">Is Favorite:</label>
			<input
				id="is_favorite"
				name="is_favorite"
				type="checkbox"
				checked={bookmark.is_favorite ? bookmark.is_favorite : false}
				onChange={handleTextChange}
			/>

			<button type="submit">{buttonLabel}</button>
		</form>
	);
}

export default EditBookmarkForm;
