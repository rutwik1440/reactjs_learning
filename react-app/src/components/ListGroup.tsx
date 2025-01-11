import { Fragment } from "react";
function ListGroup() {
  let items = [
    "New York",
    "Los Angeles",
    "London",
    "New Delhi",
    "Tokyo",
    "Paris",
  ];
  //   items = [];
  if (items.length === 0)
    return (
      <>
        <h1>List</h1>
        <p>No item found</p>
      </>
    );

  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };

  return (
    <Fragment>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
