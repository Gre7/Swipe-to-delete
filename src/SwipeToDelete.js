import React from "react";
import styled from "styled-components";

export const SwipeToDelete = ({ rows, onDelete }) => {
  return (
    <Wrapper>
      {rows.map((row) => (
        <Item key={row.id}>
          <p>{row.title}</p>
          <DeleteButton onClick={() => onDelete(row.id)}>Удалить</DeleteButton>
        </Item>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 80%;
  border: 1px solid;
  overflow: hidden;
`;

const Item = ({ children }) => {
  const itemWrapperRef = React.useRef();
  let downX;

  const onPointerMove = (e) => {
    const newX = e.clientX;

    if (newX - downX < -30) {
      itemWrapperRef.current.style.transform = "translate(-55px)";
      setTimeout(() => {
        if (itemWrapperRef.current)
          itemWrapperRef.current.style.transform = "translate(0px)";
      }, 4000);
    } else {
      itemWrapperRef.current.style.transform = "translate(0px)";
    }
  };

  const onPointerDown = (e) => {
    downX = e.clientX;
    itemWrapperRef.current.addEventListener("pointermove", onPointerMove);
  };

  const onPointerUp = () => {
    itemWrapperRef.current.removeEventListener("pointermove", onPointerMove);
  };

  return (
    <ItemWrapper
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      ref={itemWrapperRef}
    >
      {children}
    </ItemWrapper>
  );
};

const DeleteButton = styled.button`
  background: red;
  border: none;
  text-align: left;
  min-width: 55px;
`;

const ItemWrapper = styled.div`
  display: flex;
  background: lightgray;
  margin: 3px 0;
  transition: transform 800ms;

  p {
    flex: 1 0 100%;
  }
`;
