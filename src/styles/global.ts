import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #E5E5E5;
  }

  :root {
    --primary: #5429CC;
    --primary-light: #7E51FC;
    --secondary: #E5E5E5;
    --title: #5429CC;
    --body: #363F5F;
    --placeholder: #B7B7CC;
    --white: #FFF;
    --black: #000;
    --error: #FF5252;
    --menu: #4F2DAD;
    --line: #9576E9;
  }

  body, input, button {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`;
