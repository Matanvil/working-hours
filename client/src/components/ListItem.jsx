import "../style/list.css";

const ListItem = (props) => {
  return (
    <li className="list-item">
      <div className="item-date">
        <h3>Date: {props.date}</h3>
      </div>
      <div className="item-time">
        <h3>Start Time: {props.startTime}</h3>
        <h3>End Time: {props.endTime}</h3>
        <h3>Total Time: {props.totalTime}</h3>
      </div>
      <div className="item-comments">
         <h3> Comments: {props.comments}</h3>
      </div>
    </li>
  );
};

export default ListItem;
