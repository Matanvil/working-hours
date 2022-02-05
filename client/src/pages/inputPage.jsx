import storeData from "../utils/storeData";
import InputForm from "../components/InputForm";
import InputList from "../components/InputList";

const InputPage = () => {
  const inputData = async (data) => {
    const response = await storeData(data);
    const result = await response
    console.log(result);
  };

  return (
    <div>
      <InputForm onAddData={inputData} />
      <InputList />
    </div>
  );
};

export default InputPage;
