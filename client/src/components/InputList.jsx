import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import { getLatestDocs } from "../utils/filters";
import "../style/list.css";
import '../style/loader.css';

const startDate = new Date(2022, 2, 4, 12, 45);
const endDate = new Date(2022, 2, 4, 18, 55);

const InputList = () => {

  // ***************************** TODO: implement fetching docs on app init *************************** //
  let list;
  useEffect(async () => {
    list = await getLatestDocs();
    setUpdatedList(list);
    console.log(list);
  }, []);
  // ***************************** TODO: implement fetching docs on app init *************************** //

  const [updatedList, setUpdatedList] = useState(list);
  const DUMMY_LIST = [
    {
      startTime: `${startDate.getHours()}:${startDate.getMinutes()}`,
      endTime: `${endDate.getHours()}:${endDate.getMinutes()}`,
      date: new Date(2020, 2, 4),
      key: Math.random().toString(),
      totalTime:
        new Date(Date.parse(endDate) - Date.parse(startDate)).getHours() +
        ":" +
        new Date(Date.parse(endDate) - Date.parse(startDate)).getMinutes(),
      comments: "demo demo",
    },
    {
      startTime: "09:30",
      endTime: "18:00",
      date: new Date(2020, 2, 5),
      key: Math.random().toString(),
    },
  ]; /* dummy items  */


  console.log(updatedList ? updatedList : "no list");

  return (
    <div className="list-container">
      <ul>
        {updatedList && updatedList.map((item) => (
          <ListItem
            startTime={new Date(item.start).toString()}
            endTime={new Date(item.end).toString()}
            // date={item.date.toDateString()}
            key={item._id}
            // totalTime={item.totalTime}
            comments={item.comments}
          />
        ))}
        {!updatedList && <div class="lds-dual-ring"></div>}
      </ul>
    </div>
  );
};

export default InputList;
