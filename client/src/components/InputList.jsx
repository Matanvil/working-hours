import ListItem from "./ListItem";
import "../style/list.css";

const startDate =  new Date(2022, 2, 4, 12, 45)
const endDate = new Date(2022, 2, 4, 18, 55)
const DUMMY_LIST = [
  {
    startTime: `${startDate.getHours()}:${startDate.getMinutes()}`,
    endTime: `${endDate.getHours()}:${endDate.getMinutes()}`,
    date: new Date(2020, 2, 4),
    key: Math.random().toString(),
    totalTime: new Date(Date.parse(endDate) - Date.parse(startDate)).getHours() + ":" + new Date(Date.parse(endDate) - Date.parse(startDate)).getMinutes(),
    comments: "demo demo"
  },
  {
    startTime: "09:30",
    endTime: "18:00",
    date: new Date(2020, 2, 5),
    key: Math.random().toString(),
  },
]; /* dummy items  */

const InputList = () => {
  return (
    <div className="list-container">
      <ul>
        {DUMMY_LIST.map((item) => (
          <ListItem
            startTime={item.startTime}
            endTime={item.endTime}
            date={item.date.toDateString()}
            key={item.key}
            totalTime={item.totalTime}
            comments={item.comments}
          />
        ))}
      </ul>
    </div>
  );
};

export default InputList;
