import React, { useState } from "react";
import Tag from "./tag";
import "./TaskForm.css";

const TaskForm = () => {
	const [taskData, setTaskData] = useState({
		task: "",
		status: "todo",
		tags: [], // Initialize tags as an empty array
	});

	const selectTag = (tag) => {
		if (taskData.tags.some((item) => item === tag)) {
			const filteredTags = taskData.tags.filter((item) => item !== tag); // Remove tag if it already exists
			setTaskData((prev) => {
				return { ...prev, tags: filteredTags };
			});
		} else {
			setTaskData((prev) => {
				return { ...prev, tags: [...prev.tags, tag] }; // Add new tag
			});
		}
	};

	const handlechange = (e) => {
		const { name, value } = e.target; // object destructuring to get name and value from event target

		setTaskData((prev) => {
			return { ...prev, [name]: value }; // dynamic key in object
		});

		console.log(name, value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(taskData);
	};

	return (
		<header className="app_header">
			<form onSubmit={handleSubmit} id="task_form">
				<input
					name="task"
					className="task_input"
					type="text"
					placeholder="Add a new task..."
					onChange={handlechange}
					id="task_input"
				/>
				<select
					className="task_status"
					name="status"
					id="status_select"
					onChange={handlechange}
				>
					<option value="todo">To Do</option>
					<option value="inprogress">In Progress</option>
					<option value="done">Done</option>
				</select>

				<button className="task_submit" type="submit">
					Add Task
				</button>
			</form>
			<div>
				<Tag tagName="HTML" selectTag={selectTag} />
				<Tag tagName="CSS" selectTag={selectTag} />
				<Tag tagName="JavaScript" selectTag={selectTag} />
				<Tag tagName="React" selectTag={selectTag} />
			</div>
		</header>
	);
};

export default TaskForm;
