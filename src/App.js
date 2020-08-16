import React, {useState} from "react";
import { Button, Dimensions } from "react-native";
import styled from "styled-components/native";
import { css } from "styled-components";
import {Image} from 'react-native' ;
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { isRequired } from "react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType";
//import AutoHeightImage from "react-native-auto-height-image"
const win = Dimensions.get('window')
const Title = () => {
  const onPressBack = () => {
    console.log('back')
  };

  const onPressSearch = () => {
    console.log('search')
  };
  return (
    <TitleContainer>
      <FontAwesome.Button onPress={onPressBack} name="chevron-left" size={25} color="#FFFFFF" iconStyle={{ marginRight: 0}} style={{backgroundColor: "#242B45"}}/>
      <CenterView>
        <TitleText style={{textalign: center}}>Shopping Cart</TitleText>
      </CenterView>
      <RightView>
        <FontAwesome.Button onPress={onPressSearch} name="search" size={25} color="#FFFFFF" style={{backgroundColor: "#242B45"}} iconStyle={{ marginRight: 0}}/>
      </RightView>
    </TitleContainer>
  )
};

const Content = (props) => {
  return (
    <ContentContainer>
      <ProductImg source={require('../img/Profile.jpg')} style={{ width: 120, height: 150 }}/>
      <ProductInfo>
        <ProductName>{props.name}</ProductName>
        <ProductCategory>{props.category}</ProductCategory>
        <ProductCost>{props.cost}</ProductCost>
        <ProductCounter>
          <FontAwesome.Button onPress={count>=2 && onPressDecrease} name="minus-circle" size={25} color={count==1 ?  "#3E455F":"#3565FD"} iconStyle={{ marginRight: 0}}  style={{backgroundColor: "#242B45"}}/>
          <ProductCount>{count}</ProductCount>
          <FontAwesome.Button onPress={onPressIncrease} name="plus-circle" size={25} color="#3565FD" iconStyle={{ marginRight: 0}}  style={{backgroundColor: "#242B45"}}/>
        </ProductCounter>
      </ProductInfo>
    </ContentContainer>
  )
}

const Sumarry = () => {

}
const Main = () => {
  const [products, setProducts] = useState([
    {cost: 130, count: 1},
    {cost: 80, count: 1}
  ]);
  const onPressIncrease = (index) => {
    const newvalue = [...products]
    newvalue[index].count += 1
    setProducts(newvalue)
  }

  const onPressDecrease =(index) => {
    const newvalue = [...products]
    newvalue[index].count -= 1
    setProducts(newvalue)
  }

  const TotalCost = () => {
    
  }
  return (
    <Maincontainer>
      <CenterView>
        {Infos.map((Info) => (
          <Content name={Info[0]} category={Info[1]} cost={Info[2]}/>
        ))}
      </CenterView>
    </Maincontainer>
  );
};

const Checkout = () => {
  const onPressCheckout = () => {

  }
  return (
    <CenterView>
      <Button onPress={onPressCheckout} title="Checkout" />
    </CenterView>
  )
}

const App = () => {
  return (
    <AppContainer>
      <Title/>
      <Main/>
      <Checkout/>
    </AppContainer>
  );
};

// styled component
const center = css`
`;
const CenterView = styled.View`
  flex:1;
  alignItems: center;
  justifyContent:center;
`;

const TitleContainer = styled.View`
  width: auto;
  height: 100px;
  background-color: #242B45;
  ${center};
  padding: 7px 0px 0px 7px;
  display:flex;
  flex-direction: row;
`;

const TitleText = styled.Text`
  padding: 7px 0px 0px 7px;
  color: #FFFFFF;
  font-size: 25px;
`;

const ContentContainer = styled.View`
width: 100%;
height: 150px;
display:flex;
flex-direction: row;
background-color: #242B45;
margin-bottom: 1px;
`;

const ProductImg = styled.Image`
`;

const ProductInfo = styled.View`
width: auto;
display:flex;
flex-direction: column;
`;

const ProductName = styled.Text`
font-size: 15px;
  color: #FFFFFF;
`;
const ProductCategory = styled.Text`
  color: #3E455F;
  font-size: 10px;
`;
const ProductCost = styled.Text`
  color: #FFFFFF;
  font-size: 10px;
`;
const ProductCounter = styled.View`
  width: auto;
  display:flex;
  flex-direction: row;
`;
const ProductCount = styled.Text`
  color: #FFFFFF;
  font-size: 10px;
`;
const Maincontainer = styled.ScrollView`
  background-color: #192139;
  width: 100%
`;

const RightView = styled.View`
  flex:1;
  alignItems: flex-end;
  justifyContent:flex-end;
`;

const AppContainer = styled.View`
  width: 100%;
  height: 100%;
`;
export default App;
