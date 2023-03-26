import React from "react";
import styled from "styled-components";
import {Button} from "@mui/material";
import {useNavigate} from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();


    //button to login
    const submitLogin = (e) => {
        e.preventDefault();


        // Navigate to home page after successful login
        navigate('/home');


    }


    return (
        <Container>
            <Wrapper>
                <Title>LOG IN</Title>
                <Form onSubmit={submitLogin}>
                    <Input placeholder="username" type="text"/>

                    <Input placeholder="password" type="password"/>

                    <Button style={{
                        width: "50%",
                        border: "none",
                        padding: "15px",
                        backgroundColor: "blue",
                        color: "white",
                        cursor: "pointer",
                        margin: "10px",
                    }}
                            type="submit"
                    >
                        Log In
                    </Button>
                </Form>
            </Wrapper>
        </Container>
    );
}

const Container = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #f5fbfd;;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  width: 500px;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  text-align: center
`;


export default Login;
