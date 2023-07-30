/** @format */

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EditBookmarkForm from "./EditBookmarkForm";
import "./EditBookmark.css";

function EditBookmark() {
	const [bookmark, setBookmark] = useState({});
	const { id } = useParams();
	const API = process.env.REACT_APP_API;
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`${API}/bookmarks/${id}`)
			.then((response) => {
				setBookmark(response.data);
			})
			.catch((c) => {
				console.warn("catch", c);
			});
	}, [id, API]);

	const handleSubmit = (updatedBookmark) => {
		axios
			.put(`${API}/bookmarks/${id}`, updatedBookmark)
			.then(() => {
				navigate(`/bookmarks/${id}`);
			})
			.catch((c) => console.warn("catch", c));
	};

	return (
		<>
			<h2>Edit Bookmark</h2>
			<EditBookmarkForm
				bookmarkDetails={bookmark}
				handleSubmit={handleSubmit}
				buttonLabel="Update"
			/>
		</>
	);
}

export default EditBookmark;
