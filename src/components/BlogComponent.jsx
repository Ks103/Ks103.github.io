import { motion } from "framer-motion";
import React from "react";
// import { NavLink } from 'react-router-dom'
import styled from "styled-components";

const Box = styled(motion.a)`
  width: 100%;
  background: #fcf6f4;
  border: 1px solid #e6e6e6;
  border-radius: 24px;

  overflow: hidden;
  text-decoration: none;

  display: flex;
  flex-direction: column;

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 50px rgba(0,0,0,0.08);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 280px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    transition: transform 0.5s ease;
  }

  ${Box}:hover & img {
    transform: scale(1.05);
  }
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;

const Content = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
`;
const Description = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
`;
// const ViewLink = styled.div`
//   margin-top: 1rem;

//   display: flex;
//   align-items: center;
//   gap: 0.5rem;

//   font-size: 1.1rem;
//   font-weight: 600;

//   color: #111;

//   span {
//     transition: transform 0.3s ease;
//   }

//   ${Box}:hover & span {
//     transform: translate(4px, -4px);
//   }
// `;

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
  const { name, description, image, link } = props.blog;
  return (
    <Container variants={Item}>
      <Box target="_blank" rel="noreferrer" href={link}>
        <ImageWrapper>
          <img src={image} alt={name} />
        </ImageWrapper>

        <Content>
          <Title>{name}</Title>

          <Description>
            {description}
          </Description>

          {/* <ViewLink>
            View
            <span>↗</span>
          </ViewLink> */}
        </Content>
      </Box>
    </Container>
  );
};

export default BlogComponent;
