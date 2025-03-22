import React, { useContext } from "react";
import { Context } from "./App";
import { useParams } from "react-router";

const CryptoDetail = () => {
  let { Id } = useParams();
  const contextData = useContext(Context);
  const data = contextData.filter((data) => data?.id === Id);

  return (
    <div>
      <p>Name : {data[0]?.name}</p>
    </div>
  );
};

export default CryptoDetail;
