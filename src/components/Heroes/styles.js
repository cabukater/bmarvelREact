import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`

flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

`;

export const Card = styled(Animated.View)`
 background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  height: 100%;
  flex-direction: row;
  margin:auto;
  width:90vw;
  border-radius:4px;
  margin:5vw;
  height:150px;
`;

export const CardHeader = styled.View`
  flex:1;
`;

export const CardContent = styled.View`
margin: 0 auto;  
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #999;
`;

export const Description = styled.Text`
  font-size: 12px;
  margin-top: 3px;
  color: #333;
`;

export const Image = styled.Image`
 height:85px;
 width:100%;
`;

export const BoxHero = styled.View`
    width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  margin: 10px;
  padding: 10px;
 
  justify-content: space-between;
`;

export const BoxImage = styled.View`
margin: 0 auto;  
`;

export const BoxContent = styled.View`
margin: 0 auto;  
`;