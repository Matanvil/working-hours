const deleteListItem = async (item) => {
  const response = await fetch(`http://localhost:4000/api/input/${item}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  });
  console.log(item);
  const data = await response.json();
  return data;
};

export default deleteListItem;
