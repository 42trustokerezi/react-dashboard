import React from 'react'
import styled from 'styled-components'
import { cardShadow, hoverEffect, themeColor } from "../utils"
import AvatarImg from "../assets/bakery.jpg"
import AvatarImg2 from "../assets/branding.jpg"
function Projects() {
    return (
        <YourProjects>
            <Project>
                <Avatar>
                    <img src={AvatarImg}/>
                </Avatar>
                <Detail>
                    <Title>Logo design for bakery</Title>
                    <SubTitle>1 day remaining</SubTitle>
                </Detail>
            </Project>
            <Project>
                <Avatar>
                    <img src={AvatarImg2}/>
                </Avatar>
                <Detail>
                    <Title>Personal branding projects</Title>
                    <SubTitle>5 days remaining</SubTitle>
                </Detail>
            </Project>
            <AllProjects>See all projects</AllProjects>
        </YourProjects>
    )
}

const YourProjects = styled.div`
    height: 70%;
    background-color: white;
    margin: 0;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: ${cardShadow};
    transition: 0.4s ease-in-out;
    &:hover {
        box-shadow: ${hoverEffect};
    }
`;

const Project = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.3rem;
`;

const Avatar = styled.div`
    img {
        height: 4rem;
        width: 4rem;
        border-radius: 4rem;
    }
`;

const Detail = styled.div`
    margin-left: 1rem;
`;

const Title = styled.h3`
    font-weight: 500;
`;

const SubTitle = styled.h5`
    font-weight: 300;
`;

const AllProjects = styled.h3`
    text-align: end;
    color: ${themeColor};
    cursor: pointer;
`;

export default Projects
