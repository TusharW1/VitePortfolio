// src/pages/Certifications.jsx
import { Container, Row, Col, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt, faMedal } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Certifications = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const certifications = [
    {
      name: "Java Certification",
      issuer: "Udemy",
      date: "Feb 2024",
      credentialId: "UC-c9b1324f-ad3b-4762-a709-27f3c48dc7ad",
      credentialURL: "https://udemy.com/certificate/UC-12345678",
      skills: ["React", "Node.js", "MongoDB", "Express.js"],
      description: "Comprehensive course covering modern full-stack development"
    },
    {
      name: "Python Certification",
      issuer: "IBM",
      date: "April 2024",
      credentialId: "9AYMNXMQ28B4",
      credentialURL: "https://www.coursera.org/account/accomplishments/verify/9AYMNXMQ28B4",
      skills: ["React", "Node.js", "MongoDB", "Express.js"],
      description: "Comprehensive course covering modern full-stack development"
    },
    {
      name: "AWS Cloud Practitioner Essentials",
      issuer: "Amazon Web Services",
      date: "February 2024",
      credentialId: "AWS-12345",
      credentialURL: "https://www.linkedin.com/in/tushar-waghmare-360582232/details/certifications/1707830492470/single-media-viewer/?profileId=ACoAADoa83gBVLq8T4a1lvpPe1N2lkafP3Rev-o",
      skills: ["AWS", "Cloud Computing", "DevOps"],
      description: "Fundamental understanding of AWS Cloud services"
    },
    {
      name: "AI Essentials",
      issuer: "Google",
      date: "June 2024",
      credentialId: "LRPJE37Y384T",
      credentialURL: "https://www.coursera.org/account/accomplishments/verify/LRPJE37Y384T",
      skills: ["AI", "AI Agents", "Problem Solving"],
      description: "Fundamental understanding of AI"
    },
    {
      name: "Cyber Security",
      issuer: "Google",
      date: "March 2024",
      credentialId: "7ZY5VRXCVWZF",
      credentialURL: "https://www.coursera.org/account/accomplishments/specialization/7ZY5VRXCVWZF",
      skills: ["Network", "Protocols", "Risk Management", "Security Tools", "Attacks"],
      description: "Fundamental understanding of Cyber-Security world"
    },
    {
      name: "Postman API",
      issuer: "Postman Enterprise",
      date: "December 2023",
      credentialId: " POSTMAN-12345",
      credentialURL: "https://aws.amazon.com/verification",
      skills: ["Testing", "Managing", "HTTP Requests" ],
      description: "Fundamental understanding of API and testing"
    }
  ]

  return (
    <Container>
      <h1 className="text-center mb-5">Certifications</h1>
      <Row xs={1} md={2} className="g-4">
        {certifications.map((cert, index) => (
          <Col key={index}>
            <Card
              className="h-100"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                boxShadow: hoveredIndex === index ? '0 8px 16px rgba(0, 0, 0, 0.2)' : 'none'
              }}
            >
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <FontAwesomeIcon icon={faMedal} className="text-warning me-2" size="lg" />
                  <Card.Title className="mb-0">{cert.name}</Card.Title>
                </div>
                
                <Card.Subtitle className="mb-2 text-muted">
                  {cert.issuer} • {cert.date}
                </Card.Subtitle>
                
                <Card.Text>{cert.description}</Card.Text>
                
                <div className="mb-3">
                  <strong>Credential ID:</strong> {cert.credentialId}
                </div>
                
                <div className="mb-3">
                  <strong>Skills:</strong>
                  <div className="mt-2">
                    {cert.skills.map((skill, idx) => (
                      <span key={idx} className="badge bg-secondary me-2 mb-2">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Card.Link 
                  href={cert.credentialURL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="me-2" />
                  Verify Certificate
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Certifications
