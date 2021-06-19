import React from "react";

const AddTask = () => {
  return (
    <form className="add-form">
      <div className="form-control">
        <label htmlFor="task">Task</label>
        <input type="text" id="task" placeholder="Add Task" />
      </div>
      <div className="form-control">
        <label htmlFor="dayAndTime">Day & Time</label>
        <input type="text" id="dayAndTime" placeholder="Add Day & Time" />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="reminder">Set Reminder</label>
        <input type="checkbox" id="reminder" />
      </div>
      <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  );
};

export default AddTask;
