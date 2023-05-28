import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import { API_URL } from "../config";

function List() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/trips`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <h1>Trips</h1>
      <StyledTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Country</th>
            <th>Travellers Count</th>
            <th>Budget</th>
            <th>Total $(usd)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((trip, index) => (
            <tr key={index}>
              <td>{trip.name}</td>
              <td>{trip.email}</td>
              <td>{trip.country}</td>
              <td>{trip.travellerCount}</td>
              <td>{trip.budget}</td>
              <td>{trip.travellerCount * trip.budget}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  h1{
    color: #fff;
    font-size: 4rem;
  }

`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  thead th {
    background-color: #f2f2f2;
    font-weight: bold;
    padding: 10px;
    text-align: left;
  }

  tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tbody tr{
    background-color: rgba(230, 247, 255, 0.5);
    transition: all 0.2s ease-in-out;
    font-weight: 600;
  }

  tbody tr:hover {
    background-color: #e6f7ff;
    cursor: pointer;
  }

  tbody td {
    padding: 10px;
  }
`;

export default List;
