/** @format */

import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./BookmarkDetails.css";
import Reviews from "./Reviews";

function BookmarkDetails() {
	const [bookmark, setBookmark] = useState([]);
	let { id } = useParams();
	let navigate = useNavigate();

	const API = process.env.REACT_APP_API;

	const deleteBookmark = () => {
		axios
			.delete(`${API}/bookmarks/${id}`)
			.then(() => {
				navigate("/bookmarks");
			})
			.catch((c) => console.warn("catch", c));
	};

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

	return (
		<>
			<article className="bookmark-details">
				<h3>
					{bookmark.is_favorite ? <span>⭐️</span> : <></>}{" "}
					{bookmark.name}
				</h3>
				<h5>
					<span>
						<a href={bookmark.url}>{bookmark.name}</a>
					</span>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {bookmark.url}
				</h5>
				<h6> Category: {bookmark.category}</h6>
				<div className="show-navigation">
					<div>
						<Link to={"/bookmarks"}>
							<button>Back</button>
						</Link>
					</div>
					<div>
						<Link to={"/bookmarks/" + id + "/edit"}>
							<button>Edit</button>
						</Link>
					</div>
					<div>
						<button onClick={deleteBookmark}>Delete</button>
					</div>
				</div>
				<Reviews />
			</article>
		</>
	);
}

export default BookmarkDetails;
