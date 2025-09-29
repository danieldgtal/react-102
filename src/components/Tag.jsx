import React from "react";
import "./Tag.css";

const Tag = ({ tagName, selectTag }) => {
	console.log("Tag props:", { tagName, selectTag });
	return (
		<button className="tag" onClick={() => selectTag(tagName)}>
			{tagName}
		</button>
	);
};

export default Tag;
