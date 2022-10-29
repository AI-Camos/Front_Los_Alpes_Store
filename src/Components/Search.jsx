import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


function Search({ setCriteria }) {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setCriteria(event.target.value);
  };
  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        onChange={onSearchValueChange}
      />
      <Button variant="outline-success">Search</Button>
      </Form>

    //   <input
    //       className= "TodoSearch"
    //       placeholder="Ingrese Tareas"
    //       value={serchValue}
    //       onChange={onSearchValueChange}
    //   />
  );
}

export { Search };
