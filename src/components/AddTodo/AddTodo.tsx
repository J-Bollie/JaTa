import { useContext, useState } from "react";
import { TodoContext, Status } from "../../context/TodoContext";

import { AddTodoInterface } from "./interfaces";

import styled from "styled-components";

export const AddTodo = () => {
  const [todoData, setTodoData] = useContext<any>(TodoContext);
  const [data, setData] = useState<AddTodoInterface>({
    title: "",
    description: "",
    status: Status.NOT_DONE,
  });

  const addTodo = () => {
    if (data.title.length === 0) {
      alert("Please fill in a title.");
      return;
    }
    if (data.description.length === 0) {
      alert("Please fill in a description.");
      return;
    }

    setTodoData([...todoData, data]);

    setData({
      title: "",
      description: "",
      status: Status.NOT_DONE,
    });
  };

  const clearTodo = () => {
    setData({
      title: "",
      description: "",
      status: Status.NOT_DONE,
    });
  };

  return (
    <AddTodoContainer>
      <Input
        type="text"
        placeholder="Add your title..."
        value={data.title}
        onChange={(e) => setData({ ...data, title: e.target.value })}
      />
      <Input
        type="text"
        placeholder="Add your description..."
        value={data.description}
        onChange={(e) => setData({ ...data, description: e.target.value })}
      />
      <ButtonContainer>
        <Button
          onClick={() => {
            addTodo();
          }}
        >
          Add
        </Button>
        <Button
          onClick={() => {
            clearTodo();
          }}
        >
          Clear
        </Button>
      </ButtonContainer>
    </AddTodoContainer>
  );
};

//color: ${({theme}) => theme.activeColor};

const AddTodoContainer = styled.div`
  margin: 0px 15px 0px 15px;
  padding: 15px 5px 15px 5px;
`;

const Input = styled.input`
  width: 100%;

  background-color: ${({ theme }) => theme.mainBackground};
  border: ${({ theme }) => theme.containerBorder};
  border-radius: calc(${({ theme }) => theme.BORDER_RADIUS} - 3px);
  color: ${({ theme }) => theme.textColor};

  outline: none;

  padding: 5px;

  margin-bottom: 5px;
`;

const ButtonContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;

  margin-top: 5px;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.addButtonBackground};
  border: ${({ theme }) => theme.addButtonBorder};
  border-radius: calc(${({ theme }) => theme.BORDER_RADIUS} - 3px);
  color: ${({ theme }) => theme.textColor};

  padding: 6px 10px 6px 10px;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.mainBackground};
  }

  margin-right: 8px;
  &:last-child {
    margin-right: 0;
  }
`;
