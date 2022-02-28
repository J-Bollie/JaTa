import styled from "styled-components";

export const Footer = () => {
  return (
    <Container>
      <Text>
        © Copyright 2022 - Made by{" "}
        <Link href="https://github.com/J-Bollie" target="_blank">
          Jensen Bollen (Github)
        </Link>
      </Text>
      <Text>
        Check out the source code of this project{" "}
        <Link href="https://www.youtube.com/" target="_blank">
          here
        </Link>
      </Text>
    </Container>
  );
};

const Container = styled.div`
  text-align: left;
  width: calc(100% - 30px);

  font-size: 13px;

  margin: 10px 15px 10px 15px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 750px) {
    width: 750px;
  }
`;

const Text = styled.div`
  color: ${({ theme }) => theme.footerTextColor};
`;

const Link = styled.a`
  color: ${({ theme }) => theme.accentColor};
  text-decoration: none;
`;
