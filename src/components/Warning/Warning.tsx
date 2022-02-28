import styled from "styled-components";
import WarningIcon from "../../assets/warning.svg";

export const Warning = () => {
  return (
    <WarningContainer>
      <StyledIcon src={WarningIcon} />
      <TextContainer>
        <Title>Warning!</Title>
        <Description>
          For all the curious souls, I didn’t add a “Are you sure?” popup to the
          buttons. So if you click delete, it’s gone!
        </Description>
      </TextContainer>
    </WarningContainer>
  );
};

const WarningContainer = styled.div`
  background: ${({ theme }) => theme.warningBackground};
  border: ${({ theme }) => theme.warningBorder};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS};

  width: calc(100% - 30px);

  display: flex;
  justify-content: flex-start;
  text-align: left;

  margin: 10px 15px 10px 15px;
  padding: 10px;

  @media (min-width: 750px) {
    width: 750px;
  }
`;

const StyledIcon = styled.img`
  margin-right: 10px;
`;

const TextContainer = styled.div``;

const Title = styled.div`
  color: #ffd968;
`;

const Description = styled.div`
  color: #c9b169;
`;
