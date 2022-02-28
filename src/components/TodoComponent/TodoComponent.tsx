import { useContext } from "react";
import { TodoContext, Status } from "../../context/TodoContext";
import { TodoPropsInterface, TodoDataInterface } from "./interfaces";

import styled from "styled-components";

export const TodoComponent = (props: TodoPropsInterface) => {
  const [todoData, setTodoData] = useContext<any>(TodoContext);

  const toggleTodo = () => {
    todoData.forEach((element: TodoDataInterface, i: number) => {
      if (i === props.id) {
        element.status =
          props.data.status === Status.NOT_DONE ? Status.DONE : Status.NOT_DONE;
      }
    });
    setTodoData([...todoData]);
  };

  const removeTodo = () => {
    todoData.forEach((element: TodoDataInterface, i: number) => {
      if (i === props.id) {
        todoData.splice(i, 1);
      }
    });
    setTodoData([...todoData]);
  };

  return (
    <TodoWrapper>
      <TodoTextContainer status={props.data.status}>
        <Todo>{props.data.title}</Todo>
        <Description>{props.data.description}</Description>
      </TodoTextContainer>
      <ButtonContainer>
        <ToggleButton status={props.data.status} onClick={toggleTodo}>
          {props.data.status === Status.DONE
            ? "Mark as Not-Done"
            : "Mark as Done"}
        </ToggleButton>
        <DeleteButton status={props.data.status} onClick={removeTodo}>
          Remove Todo
        </DeleteButton>
      </ButtonContainer>
    </TodoWrapper>
  );
};

const TodoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: center;
  }

  background-color: ${({ theme }) => theme.mainBackground};
  border-bottom: 1px solid ${({ theme }) => theme.accentColor};
  border-radius: 8px;

  padding: 10px 0px 10px 0px;
`;

const TodoTextContainer = styled.div<{ status: Status }>`
  text-decoration: ${({ status }) =>
    status === Status.DONE ? "line-through" : "none"};
  color: ${({ theme }) => theme.textColor};
  text-align: left;

  margin: 0px 0px 0px 10px;

  @media (max-width: 750px) {
    text-align: center;
    margin: 0;
  }
`;

const Todo = styled.div``;

const Description = styled.div`
  color: ${({ theme }) => theme.descriptionColor};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  white-space: nowrap;

  margin: 0px 10px 0px 10px;

  @media (max-width: 750px) {
    margin-top: 5px;
  }
`;

const ToggleButton = styled.button<{ status: Status }>`
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ status, theme }) =>
    status === Status.DONE
      ? theme.notDoneButtonBackground
      : theme.doneButtonBackground};
  border: ${({ status, theme }) =>
    status === Status.DONE
      ? theme.notDoneButtonBorder
      : theme.doneButtonBorder};

  padding: 6px;
  border-radius: 5px;
  cursor: pointer;
`;

const DeleteButton = styled.button<{ status: Status }>`
  color: ${({ theme }) => theme.textColor};
  display: ${({ status }) => (status === Status.NOT_DONE ? "none" : "block")};

  background-color: ${({ theme }) => theme.deleteButtonBackground};
  border: ${({ theme }) => theme.deleteButtonBorder};

  cursor: pointer;

  padding: 6px;
  margin: 0px 0px 0px 5px;
  border-radius: 5px;
  cursor: pointer;
`;

//color: ${({theme}) => theme.activeColor};
