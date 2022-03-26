import React, { useEffect, useState } from "react";
import "./styles/searchStyles.scss";
import { useForm } from "./useForm";
import GifDisplay from "./GifDisplay";

const Test = () => {
  const [values, setValues] = useForm({ email: "", password: "" });
  function handleOnClick() {
    console.log("email : ", values.email);
    console.log("password : ", values.password);
  }
  console.log("heello");

  return (
    <div
      style={{
        backgroundColor: "transparent",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
      }}
    >
      <input name="email" value={values.email} onChange={setValues}></input>
      <input
        name="password"
        type="password"
        value={values.password}
        onChange={setValues}
      ></input>
      <button onClick={handleOnClick}>Click me</button>
      <GifDisplay
        gifSize={250}
        marginAndPadding={20}
        getMore={`https://giphy.com/trending`}
        data={[]}
      ></GifDisplay>
    </div>
  );
};

export default Test;
