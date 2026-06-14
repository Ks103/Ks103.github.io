import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Me from '../assets/Images/p2.png'

const helloText = 'Hello...';
const roleText = "I'm Khushi | Product Designer";
const descText =
  'I specialize in turning intractable business problems into clear, measurable impact';

const Box = styled(motion.div)`

position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);


width: 65vw;
height: calc(var(--vh) * 65);
display: flex;


background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};


    z-index:1;
    @media (max-width: 480px) {
        width: 77vw;
        height: calc(var(--vh) * 45) !important;
        top: 35%;
    }
`

const ContentSubBox = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 100%;

  font-size: calc(1em + 1.5vw);
  color: rgb(252, 246, 244);

  padding-left: 2rem;
`;
const blink = `
@keyframes blink {
  50% {
    opacity: 0;
  }
}
`;

const TypeHeading = styled.h2`
  margin: 0;
`;

const TypeRole = styled.h5`
  margin: 0.5rem 0;
`;

const TypeDesc = styled.h6`
  margin-top: 1rem;
  font-weight: 300;
`;

const CursorText = styled.span`
  &::after {
    content: '|';
    animation: blink 0.8s infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;

const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;

.pic{
    position: absolute;
    bottom: 1%;
    left: 50%;
    transform: translate(-50%,0%);
    width: 106%;
    height: 90%;
    @media (max-width: 480px) {
        width: 16rem;
        height: 16rem;
    }
}
`

const Intro = () => {
    const [hello, setHello] = useState('');
    const [role, setRole] = useState('');
    const [desc, setDesc] = useState('');
    const [showRoleCursor, setShowRoleCursor] = useState(false);
    const [showDescCursor, setShowDescCursor] = useState(false);
    useEffect(() => {
        let i = 0;
    
        const helloInterval = setInterval(() => {
          setHello(helloText.slice(0, i + 1));
          i++;
    
          if (i === helloText.length) {
            clearInterval(helloInterval);
          
            setShowRoleCursor(true);
          
            let j = 0;
          
            const roleInterval = setInterval(() => {
              setRole(roleText.slice(0, j + 1));
              j++;
    
              if (j === roleText.length) {
                clearInterval(roleInterval);
                setShowRoleCursor(false);   // <-- add this
                setShowDescCursor(true);
                let k = 0;
    
                const descInterval = setInterval(() => {
                  setDesc(descText.slice(0, k + 1));
                  k++;
    
                  if (k === descText.length) {
                    clearInterval(descInterval);
                  
                    setShowDescCursor(false);
                  }
                }, 20); // fast
              }
            }, 60); // medium
          }
        }, 150); // slow
    
        return () => {};
      }, []);
    return (
        <Box
        initial={{height:0}}
        animate={{height: '55vh'}}
        >
            <ContentSubBox>
                <ContentWrapper>
                    <TypeHeading>
                    {hello}
                    </TypeHeading>

                    <TypeRole>
                    {role}
                    {showRoleCursor && <CursorText />}
                    </TypeRole>

                    <TypeDesc>
                    {desc}
                    {showDescCursor && <CursorText />}
                    </TypeDesc>
                </ContentWrapper>
                </ContentSubBox>
            <SubBox>
                <motion.div
                initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{ duration:1, delay:2 }}
                >
                    <img className="pic" src={Me} alt="Profile Pic" />
                </motion.div>
            </SubBox>
        </Box>
    )
}

export default Intro
