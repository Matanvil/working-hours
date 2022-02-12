import { useState } from "react";
import storeData from "../utils/storeData";
import InputForm from "../components/InputForm";
import InputList from "../components/InputList";
import { getLatestDocs } from "../utils/filters";

const InputPage = () => {
  let listOfInputs;
  const [filterClicked, setFilterClicked] = useState(false);
  const inputData = async (data) => {
    const response = await storeData(data);
    const result = await response;
    listOfInputs = result
    console.log(result);
  };

  const getFilteredDocs = async () => {
    const docs = await getLatestDocs();
    console.log(docs);
  };

  return (
    <div>
      <InputForm onAddData={inputData} />
      <button onClick={getFilteredDocs}>Filter</button>
      <InputList list={listOfInputs}/>
    </div>
  );
};

export default InputPage;
