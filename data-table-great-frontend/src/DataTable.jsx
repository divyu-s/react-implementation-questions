import { useState } from "react";
import users from "./data/users.json";

const colums = [
  { label: "ID", key: "id" },
  { label: "Name", key: "name" },
  { label: "Age", key: "age" },
  { label: "Occupation", key: "ocsscupation" },
];

const paginateUsers = function (userList, page, dataPerPage) {
  const start = page * dataPerPage;
  const end = page * dataPerPage + dataPerPage;
  const paginatedData = userList.slice(start, end);
  const pages = Math.ceil(userList.length / dataPerPage);

  return { pages, paginatedData };
};

export default function DataTable() {
  const [message, setMessage] = useState("Data Table");
  const [page, setPage] = useState(0);
  const [dataPerPage, setDataPerPage] = useState(5);

  const { pages, paginatedData } = paginateUsers(users, page, dataPerPage);

  return (
    <div>
      <h1>{message}</h1>
      <table>
        <thead>
          <tr>
            {colums.map(({ label, key }) => (
              <th key={key}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map(({ id, name, age, occupation }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{age}</td>
              <td>{occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div class="pagination">
        <select
          value={dataPerPage}
          onChange={(e) => {
            setPage(0);
            setDataPerPage(Number(e.target.value));
          }}
        >
          {[5, 10, 20].map((value, index) => (
            <option value={value} key={index}>
              {value}
            </option>
          ))}
        </select>
        <div>{`Page ${page + 1} of ${pages}`}</div>
        <button disabled={page === 0} onClick={() => setPage(page - 1)}>
          Prev
        </button>
        <button disabled={page == pages - 1} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}
