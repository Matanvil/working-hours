import { useState } from "react";
import "../style/InputPage.css";

const InputForm = (props) => {
  const time = new Date();
  const date = time.toISOString().substr(0, 10);

  const [startDate, setStartDate] = useState(date);
  const [endDate, setEndDate] = useState(date);
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();

  const startDateChangeHandler = (event) => {
    setStartDate(event.target.value);
  };
  const endDateChangeHandler = (event) => {
    setEndDate(event.target.value);
  };
  const startTimeChangeHandler = (event) => {
    setStartTime(event.target.value);
  };
  const endTimeChangeHandler = (event) => {
    setEndTime(event.target.value);
  };

  const inputFormSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddData({
        startDate,
        endDate,
        startTime,
        endTime
    })
  };

  return (
    <div>
      <form className="form-container" onSubmit={inputFormSubmitHandler}>
        <div className="form-date">
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            name="startDate"
            defaultValue={startDate}
            onChange={startDateChangeHandler}
            required
          />
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            name="endDate"
            defaultValue={endDate}
            onChange={endDateChangeHandler}
            required
          />
        </div>
        <div className="form-hours">
          <label htmlFor="startHour">Start Hour:</label>
          <input
            name="startHour"
            type="time"
            onChange={startTimeChangeHandler}
            required
          />
          <label htmlFor="endHour">End Hour:</label>
          <input
            type="time"
            name="endHour"
            onChange={endTimeChangeHandler}
            required
          />
        </div>
        <div className="form-actions">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
