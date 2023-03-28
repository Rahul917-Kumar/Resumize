import React from "react";
import BasicDetailStore from "../../../../../../store/basic_store";
import TextField from "@mui/material/TextField";
const BasicLayout = () => {
  const { values, changeValue } = BasicDetailStore((state) => ({
    values: state.values,
    changeValue: state.changeValue,
  }));
  const onChangeHandler = (value: any, key: string) => {
    const newValue = values;
    let arrayValue = newValue["profiles"];
    if (
      key == "name" ||
      key == "email" ||
      key == "phone" ||
      key == "image" ||
      key == "label"
    )
      newValue[key] = value;
    if (key == "github" || key == "linkedin" || key == "leetcode") {
      arrayValue = [
        ...arrayValue.map((item) => {
          if (item.profile_name == key) {
            return {
              profile_name: key,
              profile_url: value,
            };
          } else return item;
        }),
      ];
    }
    newValue["profiles"] = arrayValue;
    changeValue(newValue);
    console.log(values);
  };

  return (
    <div className="flex flex-col w-[20vw]">
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        onChange={(e) => {
          onChangeHandler(e.target.value, "name");
        }}
      />
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        onChange={(e) => {
          onChangeHandler(e.target.value, "email");
        }}
      />
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        onChange={(e) => {
          onChangeHandler(e.target.value, "image");
        }}
      />
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        onChange={(e) => {
          onChangeHandler(e.target.value, "label");
        }}
      />
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        onChange={(e) => {
          onChangeHandler(e.target.value, "github");
        }}
      />
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        onChange={(e) => {
          onChangeHandler(e.target.value, "github");
        }}
      />
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        onChange={(e) => {
          onChangeHandler(e.target.value, "github");
        }}
      />
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        onChange={(e) => {
          onChangeHandler(e.target.value, "github");
        }}
      />
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        onChange={(e) => {
          onChangeHandler(e.target.value, "github");
        }}
      />
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        onChange={(e) => {
          onChangeHandler(e.target.value, "github");
        }}
      />
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        onChange={(e) => {
          onChangeHandler(e.target.value, "github");
        }}
      />
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        onChange={(e) => {
          onChangeHandler(e.target.value, "github");
        }}
      />
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        onChange={(e) => {
          onChangeHandler(e.target.value, "github");
        }}
      />
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        onChange={(e) => {
          onChangeHandler(e.target.value, "github");
        }}
      />
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        onChange={(e) => {
          onChangeHandler(e.target.value, "github");
        }}
      />
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        onChange={(e) => {
          onChangeHandler(e.target.value, "github");
        }}
      />
    </div>
  );
};

export default BasicLayout;
