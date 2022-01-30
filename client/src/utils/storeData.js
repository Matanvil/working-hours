const storeData = async (inputData) => {
  const response = await fetch("http://localhost:4000/api/input/new", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(inputData)
  });
//   const data = await response.json()
};

export default storeData;