import styled from "styled-components";
import {MailOutline, Phone} from "@mui/icons-material";

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>FOOD SECURITY</Logo>
                <Desc>
                    Discover information on the macroeconomic, agricultural, debt, and crop yields
                    in various regions around the world.
                </Desc>

            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Macroeconomic</ListItem>
                    <ListItem>Agricultural</ListItem>
                    <ListItem>Debt</ListItem>
                    <ListItem>Specialty Crops</ListItem>
                </List>
            </Center>

            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Phone style={{marginRight: "10px"}}/> +1 234 5678
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight: "10px"}}/> contact@gmail.com
                </ContactItem>
            </Right>
        </Container>
    );
};
const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h2``;

const Desc = styled.p`
  margin: 10px 0px;
  display: flex;
`;


const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;


export default Footer;