import React from 'react'
import styled from 'styled-components'
import { skills } from '../../data/constants'

const Container = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
padding-top: 80px;
overflow: auto;
@media (max-width: 1224px) {
    padding-left: 24px;
    padding-right: 24px;
}
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

export const Title = styled.div`
font-size: 2.25rem;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 1.25rem;
    text-align: center;
    margin: auto;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 1.15rem;
    }
`;

const SkillsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 16px;
  justify-content: center;
`

const Skill = styled.div`
  max-width: calc(50% - 16px);
  border-radius: 16px;
  /* padding: 18px 36px; */
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 100%;
  }


`



const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
  border: 1px solid #fff;
  padding: 24px;
  border-radius: 16px;
  flex: 1;
  height: 100%;   
`

const SkillItem = styled.div`
  flex: 1 1 calc(20% - 10px);
  height:fit-content; 
  max-width: calc(20% - 10px);
  box-sizing: border-box;
  font-size: 1.15rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: fit-content;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`

const SkillGroupTitle = styled.h3`
  font-size: 1.75rem;
  line-height: 36px;
  font-weight: 500;
  color: #fff;
  width: 100%;
  text-align: center;
  text-shadow: #FC0 1px 0 10px;
`

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`


const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>Here are some of my skills on which I have been working on for the past 2 years.
        </Desc>
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill>
              <SkillList>
                <SkillGroupTitle>{skill.title}</SkillGroupTitle>
                {skill.skills.map((item) => (
                  <SkillItem> 
                    <SkillImage src={item.image}/>
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}

        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills