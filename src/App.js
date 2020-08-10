import React from "react";
import styled from "styled-components/native";
import { css } from "styled-components";

export default class App extends React.Component {
  render() {
    return (
      <CenterView>
        <StyleBtn>
          <Text>赤いボタン</Text>
        </StyleBtn>
      </CenterView>
    );
  }
}

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
  color: white;
  font-weight: bold;
`;
