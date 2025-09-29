import React from "react";

import "./TaskCard.css";
import Tag from "./tag";
import deleteIcon from "../assets/delete.png";

const TaskCard = () => {
	return (
		<article className="task_card">
			<p className="task_text">This is Sample Text</p>

			<div className="task_card_bottom_line">
				<div className="task_card_tags">
					<Tag tagName="HTML" />
					<Tag tagName="CSS" />
					<Tag tagName="REACT" />
				</div>
				<div className="task_delete">
					<img src={deleteIcon} alt="Delete Icon" className="delete_icon" />
				</div>
			</div>
		</article>
	);
};

export default TaskCard;
