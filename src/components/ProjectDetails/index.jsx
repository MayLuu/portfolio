import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import CheckIcon from '@mui/icons-material/Check';

const Container = styled.section`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: #000000a7;
display: flex;
align-items: center;
justify-content: center;
overflow-y: scroll;
transition: all 0.5s ease;
`;

const Wrapper = styled.div`
    max-width: 800px;
width: 60vw;
width: 100%;
border-radius: 16px;
margin: 50px 12px;
height: min-content;
background-color: ${({ theme }) => theme.card};
color: ${({ theme }) => theme.text_primary};
padding: 20px;
display: flex;
flex-direction: column;
position: relative;
@media only screen and (max-width: 1024px) {
        padding: 32px 20px
    }

    @media only screen and (max-width: 768px) {
        padding: 40px 20px
    }
`;

const ProjectContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const DetailTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`

const Title = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  @media only screen and (max-width: 600px) {
      font-size: 1.25rem;
  }
`;


const DetailDescWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const Desc = styled.div`
        display: flex;
        gap: 4px;
        font-size: 13px;
        font-weight: 400;
        line-height: normal;
        text-align: justify;
        color: ${({ theme }) => theme.text_primary};
        @media only screen and (max-width: 600px) {
            font-size: 13px;
        }
    `;
const Date = styled.div`
    font-style: italic;
    font-weight: 400;
    font-size:  0.85rem;
    color: ${({ theme }) => theme.text_secondary};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }

`


const Image = styled.img`
    width: 50%;
    margin: 0 auto;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);

    @media only screen and (max-width: 1024px) {
        width: 65%;
    }
    @media only screen and (max-width: 768px) {
        width: 100%;
    }
    
`;

const Label = styled.div`
    font-size: 1.4rem;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    margin: 8px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 1.15rem;
        margin: 8px 6px;
    }
`;

const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    @media only screen and (max-width: 600px) {
    }
`;

const Tag = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    padding: 4px 8px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.primary + 20};
    @media only screen and (max-width: 600px) {
        font-size:  0.85rem;
    }
`;

const Members = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex-wrap: wrap;
    margin: 12px 6px;
    @media only screen and (max-width: 600px) {
        margin: 4px 6px;
    }
`;

const Member = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const MemberImage = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 4px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
    @media only screen and (max-width: 600px) {
        width: 32px;
        height: 32px;
    }
`;

const MemberName = styled.div`
    font-size: 1.15rem;
    font-weight: 500;
    width: 200px;
    color: ${({ theme }) => theme.text_primary};
    @media only screen and (max-width: 600px) {
        font-size: 14px;
    }
`;


const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 12px;
`;

const Button = styled.a`
    width: 100%;
    text-align: center;
    font-size: 1.15rem;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    padding: 12px 16px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.primary};
    ${({ dull, theme }) => dull && `
        background-color: ${theme.bgLight};
        color: ${theme.text_secondary};
        &:hover {
            background-color: ${({ theme }) => theme.bg + 99};
        }
    `}
    cursor: pointer;
    text-decoration: none;
    transition: all 0.5s ease;
    &:hover {
        background-color: ${({ theme }) => theme.primary + 99};
    }
    @media only screen and (max-width: 600px) {
        font-size:  0.85rem;
    }
`;


const index = ({ openModal, setOpenModal }) => {
    const project = openModal?.project;
    return (
        <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
            <Container>
                <Wrapper>
                    <CloseRounded
                        style={{
                            position: "absolute",
                            top: "20px",
                            right: "20px",
                            cursor: "pointer",
                        }}
                        onClick={() => setOpenModal({ state: false, project: null })}
                    />
                    <Image src={project?.image} loading='lazy'/>

                    <ProjectContentWrapper style={{margin:"24px 0"}}>
                        <DetailTitleWrapper >
                            <Title>{project?.title}</Title>
                            <Date>{project.date}</Date>
                        </DetailTitleWrapper>
                        <Tags>
                            {project?.tags.map((tag) => (
                                <Tag>{tag}</Tag>
                            ))}
                        </Tags>
                        <DetailDescWrapper>
                            {project?.description.length > 0 && project?.description.map((desc)=>(
                                <Desc>
                                   <CheckIcon sx={{ fontSize: 16 }} /> {desc}
                                </Desc>
                            ))}
                        </DetailDescWrapper>
                        {project.member && (
                            <>
                                <Label>Members</Label>
                                <Members>
                                    {project?.member.map((member) => (
                                        <Member>
                                            <MemberImage src={member.img} />
                                            <MemberName>{member.name}</MemberName>
                                            <a href={member.github} target="new" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <GitHub />
                                            </a>
                                            <a href={member.linkedin} target="new" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <LinkedIn />
                                            </a>
                                        </Member>
                                    ))}
                                </Members>
                            </>
                        )}
                        
                    </ProjectContentWrapper>

                    <ProjectContentWrapper>
                        <ButtonGroup>
                            <Button dull href={project?.github} target='new'>View Code</Button>
                           {
                            project?.webapp !== "" ? <Button href={project?.webapp} target='new'>View Live App</Button> : <></>
                           } 
                        </ButtonGroup>
                    </ProjectContentWrapper>
                </Wrapper>
            </Container>

        </Modal>
    )
}

export default index