import React from "react";
import { Button } from "react-native";
import styled from "styled-components/native";
import { css } from "styled-components";

const RoundButton = (props) => {
  return (
    <RoundButtonWrapper>
      <Button title={props.title} color="white" onPress={props.onPress} />
    </RoundButtonWrapper>
  );
};

const Card = (props) => {
  return (
    <CardContainer>
      <Text style={{ padding: 14 }}>タイトル：{props.title}</Text>
      <RoundButton title="Click me !!" onPress={() => console.log("Simple Button pressed")} />
    </CardContainer>
  );
};

const App = () => {
  const titles = ["React", "Native", "For", "The", "First", "Time"];
  return (
    <CenterView>
      {titles.map((title) => (
        <Card title={title} />
      ))}
    </CenterView>
  );
};

// styled component
const center = css`
  justify-content: center;
  align-items: center;
`;
const CenterView = styled.ScrollView`
  background-color: #282c34;
`;
const Text = styled.Text`
  color: white;
  font-weight: bold;
`;
const CardContainer = styled.View`
  margin: 24px;
  width: 240px;
  height: 150px;
  background-color: #0e121a;
  ${center};
`;

const RoundButtonWrapper = styled.View`
  background-color: dodgerblue;
  padding: 3px 12px 3px;
  border-radius: 10px;
`;

export default App;
