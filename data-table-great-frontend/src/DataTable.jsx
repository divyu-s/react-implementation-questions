import { useState } from "react";
import usersList from "./data/users.json";

const columns = [
  { label: "ID", key: "id" },
  { label: "Name", key: "name" },
  { label: "Age", key: "age" },
  { label: "Occupation", key: "occupation" },
];

function paginateUsers(usersList, page, pageSize) {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  const pageUsers = usersList.slice(start, end);
  const totalPages = Math.ceil(usersList.length / pageSize);
  return { pageUsers, totalPages };
}

function sortTableData(users, key, order) {
  let copyUsers = [];
  copyUsers = [...users];

  if (order === "asc") {
    copyUsers.sort((a, b) => compareAsc(a, b, key));
  } else {
    copyUsers.sort((a, b) => compareDsc(a, b, key));
  }

  return copyUsers;
}

function compareAsc(a, b, key) {
  if (a[key] < b[key]) {
    return -1;
  } else if (a[key] > b[key]) {
    return 1;
  } else {
    return 0;
  }
}

function compareDsc(a, b, key) {
  if (a[key] < b[key]) {
    return 1;
  } else if (a[key] > b[key]) {
    return -1;
  } else {
    return 0;
  }
}

export default function DataTable() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [users, setUsers] = useState(usersList);
  const [sortBy, setSortBy] = useState("");
  const [orderBy, setOrderBy] = useState("");

  const sortedUsers = sortTableData(users, sortBy, orderBy);
  const { totalPages, pageUsers } = paginateUsers(sortedUsers, page, pageSize);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map(({ label, key }) => (
              <th
                key={key}
                onClick={() => {
                  if (sortBy !== key) {
                    setSortBy(key);
                    setOrderBy("asc");
                  } else {
                    setOrderBy(orderBy === "asc" ? "desc" : "asc");
                  }
                }}
              >
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pageUsers.map(({ id, name, age, occupation }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{age}</td>
              <td>{occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <div className="pagination">
        <select
          aria-label="Page size"
          onChange={(event) => {
            setPageSize(Number(event.target.value));
            setPage(1);
          }}
        >
          {[5, 10, 20].map((size) => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </select>
        <div className="pages">
          <button
            disabled={page === 1}
            onClick={() => {
              setPage(page - 1);
            }}
          >
            Prev
          </button>
          <span aria-label="Page number">
            Page {page} of {totalPages}
          </span>
          <button
            disabled={page === totalPages}
            onClick={() => {
              setPage(page + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
