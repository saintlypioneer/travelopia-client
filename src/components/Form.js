import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

import { API_URL } from "../config";

function Form() {
  const [data, setData] = useState({
    name: "",
    email: "",
    country: "",
    travellerCount: -1,
    budget: -1,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });

    console.log(data);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // check if any of the value is empty or -1
    for (let key in data) {
      if (data[key] === "" || data[key] === -1) {
        window.alert("Please fill all the fields");
        return;
      }
    }

    console.log(data);
    axios
      .post(`${API_URL}/api/trips`, data)
      .then((res) => {
        console.log("data successfully sent to server");
        window.alert("data saved successfully");

        // clear the form
        setData({
            name: "",
            email: "",
            country: "",
            travellerCount: -1,
            budget: -1,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Container>
      <h1>Hey there! Let's plan a trip...</h1>
      <StyledForm onSubmit={(e) => handleSubmit(e)}>
        <StyledInput
          onChange={handleChange}
          name="name"
          type="text"
          placeholder="Name"
        />
        <StyledInput
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="Email"
        />
        <StyledSelect onChange={handleChange} name="country">
          <option value="india" default>India</option>
          <option value="africa">Africa</option>
          <option value="europe">Europe</option>
        </StyledSelect>
        <StyledInput
          onChange={handleChange}
          name="travellerCount"
          type="number"
          placeholder="Travellers count"
        />
        <StyledInput
          onChange={handleChange}
          name="budget"
          type="number"
          placeholder="Budget/person ($)"
        />
        <StyledSubmit type="submit" value="Let's go..." />
      </StyledForm>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;

  h1{
    color: #fff;
    font-size: 2.5em;
  }

`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 400px;
  padding: 20px;
  background: #ffffff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const StyledInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #000000;
  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  }
`;

const StyledSelect = styled.select`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #000000;
  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  }
`;

const StyledSubmit = styled.input`
  padding: 10px;
  background-color: #000000;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #333333;
  }
`;

export default Form;
