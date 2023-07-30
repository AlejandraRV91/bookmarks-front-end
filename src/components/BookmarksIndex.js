/** @format */

import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./BookmarksIndex.css";

function BookmarksIndex() {
	const [Bookmarks, setBookmarks] = useState([]);

	useEffect(() => {
		axios
			.get(process.env.REACT_APP_API + "/bookmarks")
			.then((res) => {
				setBookmarks(res.data);
			})
			.catch((reason) => {
				console.log("An error occurred");
			});
	}, []);

	return (
		<>
			<ul>
				{Bookmarks.map((Bookmark) => {
					return (
						<li key={Bookmark.id}>
							<Link to={"/bookmarks/" + Bookmark.id}>
								{Bookmark.name}
							</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default BookmarksIndex;
