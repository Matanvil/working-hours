const loginUser = async (user) => {
  const response = await fetch("http://localhost:4000/api/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json", 'Accept': "application/json" },
    body: JSON.stringify(user),
  });
//   const data = await response.json();
//   return data;
};

export default loginUser;
