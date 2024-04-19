import React from "react";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in ${response.data.name} is ${response.data.main.temp}`);
  }

  let appID = "25fad9f7e87157d33dde0f82ab269ee8";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${appID}&units=metric`;

  axios.get(url).then(handleResponse);

  return (
    <ColorRing
      height="80"
      width="80"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      timeout={3000}
    />
  );
}
