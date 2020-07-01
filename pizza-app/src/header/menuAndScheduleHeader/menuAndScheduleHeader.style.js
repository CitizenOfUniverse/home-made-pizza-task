import styled from "styled-components";
// import {logoImage} from "./images";


export const StyledMenuAndScheduleHeader = styled.div`

    display: flex;
    flex-direction: column;
    font-family: "Red Hat Display";
    color: #FBE8BF;
    align-items:center;
`;
export const Menu = styled.div`
    font: normal 130% 'trebuchet ms', sans-serif;
    display: flex;
    height: 20px;
    padding: 6px 35px 5px 28px;
    color: white;
    list-style: none;
    text-decoration: none ;
`;
export const ElementOfMenu = styled.div`
    font: normal 100% 'trebuchet ms', sans-serif;
    color: #FBE8BF;
    letter-spacing: 0.1em;
    text-decoration: none;
    padding: 6px 35px 5px 28px;
    transition: 0.25s linear;
    display: flex;
    &:hover{
       color: #ecba04;
       text-decoration: underline;
    }
`;
