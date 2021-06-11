 const fetchGifs = () => {
  let data = [];
  console.log("here");
  return fetch(
    "https://api.giphy.com/v1/gifs/trending?api_key=uFHAA1e06SvDK4uTfO8jjReco4o5UdrB&limit=1&rating=g",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((json) => {
      if (json.meta.msg === "OK") {
        console.log("ok");
        data = json.data;
      } else {
        console.log(json.meta.msg);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  console.log("nothing", data);

  return data;
};
export default fetchGifs;
