import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: black;
  }

  #root{
    width: 100%;
  }

  :root{
    --ff-title: 'DM Sans', sans-serif;
    --fs-ordinary: 1rem;
    --grape800: #A83279;
    --grape100: #a2678a38;
    --orange700: #D38312;
    --nude50: #F2ECE3;
    --gray300: #00000015;

    @media (min-width: 450px){
      --fs-ordinary: 1.2rem;
    }
  }

  body {
    background-color: white;
    background-image: linear-gradient(120deg, var(--grape800) 0%, var(--orange700) 70%);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 15%;
    height: 100vh;
    width: 100%;
    margin: 0;
    font-family: sans-serif;
}
`;

export const Btn = styled.button`
	cursor: pointer;
	border: none;
	background: transparent;
	font-weight: bolder;
`;
