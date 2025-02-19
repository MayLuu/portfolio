import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I brought ideas to life with clean, interactive, and user-friendly frontend experiences.
        </Desc>
        
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'Web App' ?
            <ToggleButton active value="Web App" onClick={() => setToggle('Web App')}>Web App'S</ToggleButton>
            :
            <ToggleButton value="Web App" onClick={() => setToggle('Web App')}>Web App'S</ToggleButton>
          }
          <Divider />
          <Divider />
          {toggle === 'UI/UX Design' ?
            <ToggleButton active value="UI/UX Design" onClick={() => setToggle('UI/UX Design')}>UI/UX Design</ToggleButton>
            :
            <ToggleButton value="UI/UX Design" onClick={() => setToggle('UI/UX Design')}>UI/UX Design</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category.includes(toggle))
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects