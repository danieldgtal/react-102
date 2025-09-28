import React, { useState } from "react";
import Tag from "./tag";
import "./TaskForm.css";

const TaskForm = () => {
	const [task, setTask] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// handle task submit
		setTask("");
	};

	return (
		<header className="app_header">
			<form onSubmit={handleSubmit} id="task_form">
				<input
					className="task_input"
					type="text"
					placeholder="Add a new task..."
					value={task}
					onChange={(e) => setTask(e.target.value)}
					id="task_input"
				/>
				<select className="task_status" name="status" id="status_select">
					<option value="todo">To Do</option>
					<option value="inprogress">In Progress</option>
					<option value="done">Done</option>
				</select>

				<button className="task_submit" type="submit">
					Add Task
				</button>
			</form>
			<div>
				<Tag tagName="HTML" />
				<Tag tagName="CSS" />
				<Tag tagName="JavaScript" />
				<Tag tagName="React" />
			</div>
		</header>
	);
};

export default TaskForm;
