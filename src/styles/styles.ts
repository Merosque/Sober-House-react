import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    @font-face {
    font-family: "Google Sans";
    src: url("/fonts/GoogleSans-Variable.ttf") format("truetype");
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
  }

   @font-face {
    font-family: "Inter";
    src: url("/fonts/Inter-Variable.ttf") format("truetype");
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
  }

  html, body, a {
    font-family: "Google Sans", "Inter", -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
      "Helvetica Neue", Arial, sans-serif;
  }

    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #fff;
        overflow-x: hidden;
    }

    a:hover {
        color: #176FAEx;
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: rgb(241, 242, 243);
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: #176FAE 0px 0px 0px 1px;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: "Inter";
        font-weight: 900;
        color: #176FAE;
        font-size: 62px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    p {
        color: #176FAE;
        font-size: 21px;        
        line-height: 1.41;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #176FAE;

        :hover {
            color: #176FAE;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }
`;
