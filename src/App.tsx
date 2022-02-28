import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import { TodoContext, Status } from "./context/TodoContext";

import config from "./config";
import { AddTodo } from "./components/AddTodo/AddTodo";
import GlobalStyle from "./GlobalStyle";
import { TodoComponent } from "./components/TodoComponent/TodoComponent";
import { Warning } from "./components/Warning/Warning";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [todoData, setTodoData] = useState<any>([]);

  useEffect(() => {
    const data = localStorage.getItem("todoData");
    if (data === null) return;

    setTodoData(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todoData));
  }, [todoData]);

  return (
    <ThemeProvider theme={config}>
      <Wrapper>
        <GlobalStyle />
        <TodoContext.Provider value={[todoData, setTodoData]}>
          <TitleBar>JaTa (= 'Just another Todo App')</TitleBar>
          <Container>
            <AddTodo />
          </Container>
          <Warning />
          <Container>
            <CategoryTitle>Todo</CategoryTitle>
            {todoData.map((element: any, i: number) => {
              if (element.status === Status.DONE) return;
              return <TodoComponent key={i} data={element} id={i} />;
            })}
            <CategoryTitle>Done</CategoryTitle>
            {todoData.map((element: any, i: number) => {
              if (element.status === Status.NOT_DONE) return;
              return <TodoComponent key={i} data={element} id={i} />;
            })}
          </Container>
          <Footer />
        </TodoContext.Provider>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;

  overflow: auto;

  background-color: ${({ theme }) => theme.mainBackground};
`;

const TitleBar = styled.div`
  font-size: 45px;
  color: ${({ theme }) => theme.textColor};
  text-shadow: ${({ theme }) => theme.textShadow};

  margin: 20px 15px 15px 15px;
`;

const CategoryTitle = styled.div`
  color: ${({ theme }) => theme.textColor};
  border-bottom: 1px solid ${({ theme }) => theme.accentColor};
  font-size: 25px;

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  margin: 5px 0px 0px 0px;
`;

const Container = styled.div`
  background-color: ${({ theme }) => theme.containerBackground};
  border: ${({ theme }) => theme.containerBorder};

  border-radius: ${({ theme }) => theme.BORDER_RADIUS};

  width: calc(100% - 30px);

  margin: 0px 15px 0px 15px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 750px) {
    width: 750px;
  }
`;
