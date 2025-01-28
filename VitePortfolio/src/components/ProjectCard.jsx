// src/components/ProjectCard.jsx
import { Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const ProjectCard = ({ title, description, technologies, imageUrl, liveUrl, githubUrl }) => {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={imageUrl} style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="mb-3">
          {technologies.map((tech, index) => (
            <span key={index} className="badge bg-primary me-2">
              {tech}
            </span>
          ))}
        </div>
      </Card.Body>
      <Card.Footer className="bg-white">
        <div className="d-flex justify-content-between">
          {githubUrl && (
            <Button variant="outline-dark" href={githubUrl} target="_blank">
              <FontAwesomeIcon icon={faGithub} className="me-2" />
              Code
            </Button>
          )}
          {liveUrl && (
            <Button variant="primary" href={liveUrl} target="_blank">
              <FontAwesomeIcon icon={faExternalLinkAlt} className="me-2" />
              Live Demo
            </Button>
          )}
        </div>
      </Card.Footer>
    </Card>
  )
}

export default ProjectCard