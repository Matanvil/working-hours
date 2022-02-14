import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import { getLatestDocs } from "../utils/filters";
import formatDuration from "../utils/formatDuration";
import "../style/list.css";
import "../style/loader.css";

const InputList = (props) => {
  let list;
  useEffect(async () => {
    list = await getLatestDocs();
    setUpdatedList(list);
  }, [props.list]);

  const [updatedList, setUpdatedList] = useState(list);

  console.log(updatedList ? updatedList : "no list");

  return (
    <div className="list-container">
      <ul>
        {updatedList &&
          updatedList.map((item) => (
            <ListItem
              startTime={new Date(item.start).toLocaleString("en-GB")}
              endTime={new Date(item.end).toLocaleString("en-GB")}
              key={item._id}
              totalTime={formatDuration(
                Date.parse(item.end) - Date.parse(item.start)
              )}
              comments={item.comments}
            />
          ))}
        {!updatedList && <div className="lds-dual-ring"></div>}
      </ul>
    </div>
  );
};

export default InputList;
