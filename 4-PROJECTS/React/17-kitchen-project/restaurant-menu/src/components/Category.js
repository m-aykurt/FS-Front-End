import React from "react";
import styled from "styled-components";
const Wrapper = styled.div``;
const Button = styled.button`
  margin: 5px;
  padding: 1rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;
const Category = ({ categoryList, changeList }) => {
  return (
    <Wrapper>
      {categoryList.map((category) => (
        <Button onClick={() => changeList(category)} key={category.id}>
          {category}
        </Button>
      ))}
    </Wrapper>
  );
};
export default Category;
