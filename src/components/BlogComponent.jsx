import { motion } from "framer-motion";
import React from "react";
// import { NavLink } from 'react-router-dom'
import styled from "styled-components";

const Box = styled(motion.a)`
  text-decoration: none;
    width: 65%;
    height: 80%;
    padding: 2.5rem;
    color: rgb(0, 0, 0);
    border: 2px solid rgb(0, 0, 0);
    backdrop-filter: blur(2px);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 1rem 0px;
    cursor: pointer;
    display: flex;
    flex-flow: column-reverse wrap;
    z-index: 5;
    margin-left: 15%;
    place-content: stretch space-around;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    transition: all 0.3s ease;
  }
`;


const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  border-bottom: 1px solid ${(props) => props.theme.text};

  ${Box}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }
`;
const HashTags = styled.div`
  padding: 0.5rem 0;
`;
const Tag = styled.span`
  padding-right: 0.5rem;
`;
const Date = styled.span`
  padding: 0.5rem 0;
`;

const Container = styled(motion.div)``;

// Framer motion configuration
const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const BlogComponent = (props) => {
  const { name, tags, date, link } = props.blog;
  return (
    <Container variants={Item}>
      <Box target="_blank" rel="noreferrer" href={`${link}`}>
        
        <Title>{name}</Title>
        <HashTags>
          {tags.map((t, id) => {
            return <Tag key={id}>#{t}</Tag>;
          })}
        </HashTags>
        <Date>{date}</Date>
      </Box>
    </Container>
  );
};

export default BlogComponent;
