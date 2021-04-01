import styled from 'styled-components/native';

export const Card = styled.View`
    position: relative;
    margin-right: auto;
    margin-left: auto;
    overflow: hidden;
    height:280px;
    background-position: -60px 42px, 0;
    background-repeat: no-repeat;
    background-size: 70% 88%;
    width:100%;
    `;

export const CardInner = styled.View`
    position: relative;
    z-index: 2;
    height: 100%;
    width:100%;
`;

export const CardHeader = styled.View`
    width:100%;
`;
export const CardBody = styled.View`

`;

export const CardInfo = styled.View`
   padding-right: 6px;
    float: right;
    width: 50%;
    position: absolute;
    right:0;
    height: 100%;
    z-index:1;
    background-color:#272b32bf;
`;

export const Nav = styled.View`
   display:block;
   width:100%auto;
`;

export const ListNav = styled.View`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
`;

export const Item = styled.View`
     flex:1;
     display: block;
      padding-top: .85rem;
      padding-bottom: .85rem;
      font-size: .75rem;
      font-weight: 600;
      letter-spacing: remy(2px);
      text-align: center;
      text-transform: uppercase;
      text-decoration: none;
      background-color: #111;
      position: relative;
      z-index: 5;
    
`;
export const Text = styled.Text`
   color: #fff;
   
`;

export const TextInfo = styled.Text`
   color: #fff;
  // font-family: 'Raleway_400Regular', 
`;

export const Footer = styled.View`
position: absolute;
    bottom: 0;
    padding-top: 1rem;
    padding-right: 1.25rem;
    padding-bottom: 1rem;
    width: 100%;
    `;

export const Title = styled.Text`
    font-family: 'BebasNeue_400Regular';
    font-size: 30px;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #714040;
    -webkit-text-fill-color: #d42624;
    margin-top: 20px;

`;