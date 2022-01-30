import storeData from '../utils/storeData';
import InputForm from '../components/InputForm'

const InputPage = () => {

  const inputData = async (data) => {
    await storeData(data)
  }

  return (
    <div>
      <InputForm onAddData={inputData} />
    </div>
  )
};

export default InputPage;
