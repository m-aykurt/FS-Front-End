import { useState } from "react";
import Header from "./components/Header";
import Category from "./components/Category";
import Menu from "./components/Menu";
import data from "./data";
import styled from "styled-components";
const Container = styled.div`
  height: 100vh;
  background-color: orange;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const categoryList = ["All", ...new Set(data.map((item) => item.category))];
// console.log(categoryList);
const App = () => {
  const [menuItems, setmenuItems] = useState(data);
  // let newMenuItems = [];

  const changeList = (category) => {
    category === "All"
      ? setmenuItems(data)
      : setmenuItems(data.filter((item) => item.category === category));
      console.log(menuItems)
  };

  return (
    <Container>
      <Header />
      <Category categoryList={categoryList} changeList={changeList} />
      <Menu menuItems={menuItems} />
    </Container>
  );
};

export default App;
