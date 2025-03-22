import React, { useState } from "react";
import { Link } from "react-router";

export const CryptoList = ({ listOfCrypto }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>symbol</th>
            <th>current price</th>
          </tr>
        </thead>
        <tbody>
          {listOfCrypto?.map((data) => (
            <tr key={data?.id}>
              <td>
                {" "}
                <Link to={data?.id}>{data?.name} </Link>
              </td>

              <td>
                <img src={data?.image} width="20" />
              </td>
              <td>{data?.current_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export const App = () => {
  const [one, setOne] = useState();
  const [two, setTwo] = useState();

  const array = someCalulation();

  retrun(
    <div>
      <ChildComponent array={array} />
    </div>
  );
};
