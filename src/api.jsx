const Base_Url = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export const registerUser = (userData) => {
  const url = `${Base_Url}/users/register`;
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.token) {
        return data.token;
      } else {
        throw new Error(data.message || "failed to register new user");
      }
    });
};
