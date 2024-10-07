import { useContext, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { ProductContext } from "../../context/ProductContext";
import NavbarSearchDropdown from "./NavbarSearchDropdown";

const NavbarForm = () => {
  const { productList } = useContext(ProductContext);
  const [search, setSearch] = useState("");
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => {
    setSearch("");
    setFocused(false);
  };

  const searchList = productList.filter(
    (product) =>
      search.trim() !== "" &&
      product.name
        .toLocaleLowerCase()
        .includes(search.trim().toLocaleLowerCase())
  );
  return (
    <Form className=" position-relative w-100">
      <InputGroup className="h-100">
        <Form.Control
          onFocus={onFocus}
          onBlur={onBlur}
          name="Seatch Input"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          className="shadow-none rounded-0 input-nav-search"
        />
      </InputGroup>
      {searchList.length && focused ? (
        <NavbarSearchDropdown searchList={searchList} />
      ) : null}
    </Form>
  );
};

export default NavbarForm;
