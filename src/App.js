import React, {useState} from "react";
import { Button, Dimensions } from "react-native";
import styled from "styled-components/native";
import { css } from "styled-components";
import {Image} from 'react-native' ;
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AutoHeightImage from "react-native-auto-height-image"

const win = Dimensions.get("window");

const User = (props) => {
  return (
    <UserContainer>
      <UserImage resizeMode='contain' source={require('../img/Profile.jpg')} />
      <UserText>{props.username}</UserText>
    </UserContainer>
  )
};

const Post = (props) => {
  const [fav, setFav] = useState(false);
  const [bkmk, setBkmk] = useState(false);
  const onPressFav = () => {
    setFav(!fav);
  };
  const onPressBkmk =() => {
    setBkmk(!bkmk);
  }
  return (
    <PostContainer>
      <AutoHeightImage width={win.width} source={require('../img/card.jpg')} />
      <PostIcons>
        <FontAwesome.Button onPress={onPressFav} name={fav ? "heart" : "heart-o"} size={25} style={{backgroundColor:'#FFFFFF'}} color={fav ? "#FF0000" : "#000000"} iconStyle={{ marginRight: 0}}/>
        <FontAwesome.Button name="comment-o" size={25} style={{backgroundColor:'#FFFFFF'}} iconStyle={{ marginRight: 0, color: '#000000'}}/>
        <FontAwesome.Button name="paper-plane-o" size={25} style={{backgroundColor:'#FFFFFF'}} iconStyle={{ marginRight: 0, color: '#000000'}}/>
        <RightView>
          <FontAwesome.Button onPress={onPressBkmk} name={bkmk ? "bookmark" : "bookmark-o"} size={25} style={{backgroundColor:'#FFFFFF'}} iconStyle={{ marginRight: 0, color: '#000000'}}/>
        </RightView>
      </PostIcons>
      <PostText>
        <PostUser>{props.username}</PostUser>
        <PostComment>{props.comment}</PostComment>
      </PostText>
    </PostContainer>
  )
}

const Card = (props) => {
  return (
    <CardContainer>
      <User username={props.username}/>
      <Post username={props.username} comment={props.comment}/>
    </CardContainer>
  );
};

const App = () => {
  const usernames = ["Ahn", "Heeyon", "Hani"];
  return (
    <CenterView>
      {usernames.map((username) => (
        <Card username={username} comment=" Hello"/>
      ))}
    </CenterView>
  );
};

// styled component
const center = css`
`;
const CenterView = styled.ScrollView`
  background-color: #282c34;
`;
const CardContainer = styled.View`
  width: auto;
  height: auto;
  background-color: #FFFFFF;
  padding-bottom: 10px;
  ${center};
`;
const PostContainer = styled.View`
  width: auto;
  height: auto;
  ${center};
`;

const UserContainer = styled.View`
width: auto;
height: 40px;
display:flex;
flex-direction: row;
borderBottomWidth: 0.2px;
borderBottomColor: #C0C0C0;
`;

const UserImage = styled.Image`
border-radius: 1000px;
margin-left:10px;
width:  30px;
height: 30px;
`;
const UserText = styled.Text`
  padding: 5px 0px 0px 5px;
  color: black;
`;
const PostUser = styled.Text`
  padding: 0px 0px 0px 5px;
  color: black;
`;
const PostComment = styled.Text`
  color: black;
  font-weight: bold;
`;


const PostIcons = styled.View`
  display:flex;
  flex-direction: row;
  padding: 0px 8px 0px 8px;
`;


const RightView = styled.View`
  flex:1;
  alignItems: flex-end;
  justifyContent:flex-end;
`;
const PostText = styled.View`
width: auto;
display:flex;
flex-direction: row;
`;
export default App;
