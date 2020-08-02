import styled from "styled-components";
import Img from "gatsby-image";


export const ContentSection = styled.section`
    grid-area: content;
    display: grid;
    grid-template-areas: 
                "nav"
                "body";
    grid-template-rows: 50px 1fr;
    width:100%;
    height:100%;
    margin:0;
    padding:0;
`;

export const Navbar = styled.nav`
    padding:0;
    margin:0;
    grid-area: nav;
    width:100%;
    max-width:100%;
    height:100%;
    position: sticky;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:99999;
`;

export const NavbarContent = styled.nav`
    padding:0;
    margin: 0px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;  
    width: 100%;
    height: 100%;
    border-radius: 0px 0px 8px 8px;
    box-shadow: 0px 3px 8px rgba(0,0,0,0.05);
`;


export const NavUl = styled.ul`
    list-style: none;
    list-style-type: none;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    color: black;
`;

export const Navli = styled.li`
    display: flex;
    width: auto;
    height: 100%;
    color: ${props => props.active ? "#2a2f7e" : "#c5bfbf"};
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    font-weight: 700;
    font-size:16px;
    
    &:after {
        content: '';
        position: absolute;
        top:0;
        width:100%;
        border-top: 6px solid ${props => props.active ? "#00ffd5" : "#c5bfbf"};
        box-shadow: ${props => props.active ? "0px 0px 8px 1px #00ffd5" : "none"};
    }

    &:hover {
        color: #2a2f7e;
        &:after {
            border-top: 5px solid #00ffd5;
        }
    }
    transition: all 0.3s linear;

    @media (max-width: 768px) {
        font-size:13px;
    }
`;

export const Content = styled.section`
    padding:0;
    margin: 0;
    grid-area: body;
    width: 100%;
    height: auto;
    max-width:100%;
`;

export const ContentBox = styled.article`
    margin: 20px;
    background: white;
    height: auto;
    color: black;
    padding: 40px 40px;
    border-radius: 8px;
    box-shadow: 0px 3px 8px rgba(0,0,0,0.05);
    position: relative;
    @media (max-width: 768px) {
        padding: 40px 30px;
    }
`;

export const ContentHeader = styled.h2`
    color: #2a2f7e;
    font-weight: 700;
    position: relative;
    display: table;
    height: 35px;
    margin-bottom: 20px;
    font-size: 20px;
    z-index:1;

    &:after {
        content: '';
        position: absolute;
        bottom:0;
        left: 0;
        width:100%;
        border-top: 6px solid #00ffd5;
        z-index:1;

    }
`;

export const ContentSectionHeader = styled.h3`
    color: #2a2f7e;
    font-weight: 700;
    position: relative;
    margin-bottom:20px;
    font-size: 18px;
    z-index:1;
`;


export const P = styled.p`
white-space: pre-wrap;
    color: black;
`;

export const Experience = styled.div`
    width: 100%;
    height: auto;
    position: relative;
    padding-left: 25px;
    margin: ${props => props.noMargin ? "30px 0px 10px 0px;" : "30px 0px 50px 0px;"}

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 4px;
        height: calc(100% + 15px);
        border-left: 1px dashed #d4d4d4;
    }

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background:#2a2f7e ;
    }
`;


export const JobTitle = styled.h2`
    color: #2a2f7e;
    font-size: 18px;
    font-weight: 500;
`;

export const CompanyName = styled.h3`
    font-size: 16px;
    font-weight: 400;
    margin-top: 5px;
    font-style: italic;
    color: black;
`;

export const ExpLocation = styled.h4`
    color: black;
    font-size: 14px;
    font-weight: 300;
    margin-top: 5px;
    font-style: italic;
    margin-bottom: 20px;
`;

export const Detail = styled.p`
    color: black;
    font-size: 15px;
    font-weight: 300;
    margin-top: 10px;
`;

export const Skill = styled.span`
    width: auto;
    min-width:50px;
    text-align: center;
    padding: 7px 13px;
    margin: 5px 5px;
    height: auto;
    border-radius: 25px;
    position: relative;
    display: inline-block;
    color: black;
    background-color: #def;
    color:#2a2f7e;
    box-shadow: 0px 3px 8px rgba(0,0,0,0.1);
`;

export const SelectCont = styled.div`
    position: absolute;
    top: 40px;
    right: 40px;
    width: auto;
    height: 35px;
    border-bottom: 2px dashed #2a2f7e;
    color:black;
    display:flex;
    align-items: center;
    padding: 0px 5px;
`;

export const Select = styled.select`
    background:transparent;
    width: auto;
    color: black;
    line-height: 1;
    border: 0;
    border-radius: 0;
    height: 35px;
    appearance: none;
    font-size: 14px;
`;

export const PubContainer = styled.div`
    width:100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    @media (max-width: 1200px) {
        grid-template-columns: none;
        grid-template-rows: 1fr 1fr 1fr;
    }
`

export const Publication = styled.article`
    // min-width:300px;
    max-width:90%;
    transition: all 0.1s linear;
    @media (max-width: 1200px) {
        min-width: 100%;
        max-width: 100%;
    }
    cursor:pointer;
    &:hover {
        transform: scale(1.05);
    }
    margin-left: auto;
    margin-right: auto;
`
export const PubImage = styled(Img)`
    min-width: 100%;
    height: 170px;
    margin: auto;
    margin-bottom: 10px;
    min-width: 100%;
    grid-area: img;
    @media (max-width: 1200px) {
        height:220px;
    }
`
export const PubTitle = styled.h4`
    color: #2a2f7e;
    font-weight: 500;
    position: relative;
    margin-bottom:5px;
    font-size: 18px;
    z-index:1;
    grid-area: pub;
`;

export const PubSubtitle = styled.h5`
    color: black;
    font-weight: 400;
    position: relative;
    margin-bottom:30px;
    font-size: 14px;
    z-index:1;
    font-style: italic;
    grid-area: pub;
`;

export const PubDate = styled.h6`
    color: black;
    font-weight: 300;
    position: relative;
    margin-bottom:5px;
    font-size: 14px;
    z-index:1;
    font-style: italic;
    grid-area: pub;
`;

export const Project = styled.article`
    
    max-width:90%;
    transition: all 0.1s linear;
    
    border: 1px solid #e1e4e8;
    border-radius: 6px;
    padding: 16px;
    margin: 0 auto 20px auto;

    @media (max-width: 1200px) {
        min-width: 100%;
        max-width: 100%;
    }
`

export const ProjectTitle = styled.div`
    color: #2a2f7e;
    font-weight: 500;
    margin-bottom:5px;
    font-size: 18px;
    z-index:1;
    display:flex;

`

export const ProjectTitleContent = styled.h4`
    color: #2a2f7e;
    font-weight: 500;
    position: relative;
    margin-bottom:5px;
    font-size: 18px;
    z-index:1;
    margin-left:20px;
`
export const PP = styled.p`
    color: #586069;
    font-weight: 500;
    position: relative;
    margin-bottom: 5px;
    font-size: 14px;
    z-index:1;
`;

export const Tag = styled.span`
    display: inline-block;
    background-color: #def;
    color: #0366d6;
    margin: 0 .125em .333em 0;
    font-size: 12px;
    border: 1px solid transparent;
    border-radius: 16em;
    line-height: 22px;
    padding: 0 10px;
`

export const Input = styled.input`
    padding: 16px 20px 16px 20px;
    margin: 0.5em;
    border: 1px solid #e1e4e8;
    border-radius: 6px;
    display:block;
    width: 70%;
    @media (max-width: 1200px) {
        width:90%;
    }
`;

export const ContactForm = styled.form`
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
`

export const TextArea = styled.textarea`
    padding: 16px 20px 16px 20px;
    margin: 0.5em;
    border: 1px solid #e1e4e8;
    border-radius: 6px;
    display:block;
    width: 70%;
    @media (max-width: 1200px) {
        width:90%;
    }
`;

export const Reset = styled.input`
    padding: 16px 20px 16px 20px;
    margin: 0.5em 0;
    margin-left: 0.5em;
    border: 1px solid #e1e4e8;
    border-radius: 6px;
    display:block;
    width: 80%;
    @media (max-width: 1200px) {
        width:100%;
        margin: 0.5em 0;

    }
`;

export const Button = styled.button`
    padding: 16px 20px 16px 20px;
    border: 1px solid #007bff;
    margin: 0.5em 0;
    margin-right: 0.5em;
    border-radius: 6px;
    display:block;
    background: #007bff;
    width: 80%;
    color: white;
    @media (max-width: 1200px) {
        width:100%;
        margin: 0.5em 0;

    }
`;

export const ButtonGroup = styled.div`
    display:flex;
    width:70%;
    justify-content: space-between;
    @media (max-width: 1200px) {
        width:90%;
        flex-direction: column;
    }
`