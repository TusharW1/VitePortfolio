// src/pages/Projects.jsx
// src/pages/Projects.jsx
import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  const projects = [
    {
      title: "AI Interview Mocker App (On-going project)",
      description: "An application that helps user to simulate actual interview experience on their respective systems with the help of I. In this project I have embedded Google’s Gemini API to generate the questions based on the Job Positions, Job Description and Years of Experience. It compares the user answers and expected answers and displays score.",
      technologies: ["Java", "React.js", "Next.js", "Gemini API", "PostgreSQL"],
      imageUrl: "https://i.ytimg.com/vi/Q5LM985yUmQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB1oDEjqLiCtcrwH6ZYb5kVVORfOw",
      liveUrl: "No link (on going project)",
      githubUrl: "No link(on going project)",
    },
    {
      title: "AI Text Summarizer App",
      description: "I've crafted a robust application that simplifies the process of summarizing lengthy texts effortlessly. A dynamic, efficient tool that streamlines the summarization process of lengthy article, research paper, or any other text document, empowering users to extract key insights and save valuable time. ",
      technologies: ["React", "Node.js", "Hugging Face Inference", "Express"],
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdvNr1q6T-kmkGec4oT6dJSDtJl7ne69uVCg&s",
      liveUrl: "https://replit.com/@tusharwaghmare5/AI-Text-Summarizer-App-Starter-Template-1",
      githubUrl: "https://github.com/TusharW1/AI-Text-Summarizer-App"
    },
    {
      title: "Searching and Sorting Algorithms Visualiser",
      description: "A simple mini project which can be used to visualise the various data structures and their searching and sorting algorithms",
      technologies: ["HTML", "CSS", "JavaScript"],
      imageUrl: "https://miro.medium.com/v2/resize:fit:1400/1*OMNHx4EGPm0J6TWc9N1UpQ.png",
      liveUrl: "https://personalised-sorting-visualiser.netlify.app/",
      githubUrl: "https://github.com/kunalshinde1214/Data-Structure-Visualiser"
    },
    {
      title: "Music Player App",
      description: "An application made with Spotify API which allows you to play music and create your own playlist.",
      technologies: ["HTML", "CSS", "JavaScript", "Spotify API","Java"],
      imageUrl: "https://uizard.io/static/b19b8f7bdfa24f2de3f539c0e5d44917/a8e47/ad7a63af841256819036a41dec0408c32fe9b837-1440x835.png",
      liveUrl: "https://personalised-sorting-visualiser.netlify.app/",
      githubUrl: "https://github.com/kunalshinde1214/Data-Structure-Visualiser"
    }
    // Add more projects as needed
  ]

  return (
    <Container>
      <h1 className="text-center mb-5">My Projects</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {projects.map((project, idx) => (
          <Col key={idx}>
            <ProjectCard {...project} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Projects