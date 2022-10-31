import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


function Search({ setSearchvalue, searchValue }) {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchvalue(event.target.value);
  };

  // let searchProduct = [];

  // if (!criteria.length >=1) {
  //   searchProduct = criteria;    
  // }else {
  //   setCriteria =todos.filter(todo => {
  //     const todoText = todo.text.toLowerCase();
  //     const searchText = serchValue.toLowerCase();
  //     return todoText.includes(searchText);
  //   })
  // };

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
