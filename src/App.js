import React from "react";
import styled from "styled-components/native";
import { css } from "styled-components";

const App = () => {
  const title = "fooo";
  const onClickButton = () => {
    console.log("foooo");
  };
  return (
    <CenterView>
      <Text>ハローワールド</Text>
      <StyleBtn onClick={onClickButton}>
        <ButtonText>{title}</ButtonText>
      </StyleBtn>
    </CenterView>
  );
};

// styled component
const center = css`
  justify-content: center;
  align-items: center;
`;
const CenterView = styled.View`
  flex: 1;
  ${center};
  background-color: #f5fcff;
`;
const StyleBtn = styled.TouchableOpacity`
  flex-direction: row;
  ${center};
  margin-top: 15;
  border-radius: 20;
  background-color: #e8483b;
  width: 150;
  height: 50;
`;
const Text = styled.Text`
  color: black;
  font-weight: bold;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;

export default App;
