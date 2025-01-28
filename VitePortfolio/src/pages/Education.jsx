// src/pages/Education.jsx
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useState } from 'react'

const Education = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const educationData = [
    {
      degree: "Bachelor of Engineering",
      field: "Computer Engineering",
      institution: "Savitribai Phule Pune University",
      location: "Pune, India",
      period: "2021 - 2025",
      gpa: "9.1/10",
      highlights: [
        "Specialized in Full Stack Development",
        "Member of Computer Science Club",
        "Worked on various projects including a Skin Cancer Detection",
      ]
    },
    {
      degree: "Higher Secondary Education",
      field: "Science",
      institution: "D.B.F Dayanand College of Arts and Science",
      location: "Solapur, India",
      period: "2021",
      gpa: "97.17%",
      highlights: [
        "Top 5% of graduating class",
        "Mathematics Club Leader",
      ]
    },
    {
      degree: "Schooling Education",
      field: "Higher Schooling",
      institution: "P.S English Medium Technical High School",
      location: "Solapur, India",
      period: "2019",
      gpa: "94.4%",
      highlights: [
        "Top 5% of graduating class",
        "Mathematics Club Leader",
      ]
    }
  ]

  return (
    <Container>
      <h1 className="text-center mb-5">Education</h1>
      <Row className="justify-content-center">
        {educationData.map((edu, index) => (
          <Col key={index} md={8} className="mb-4">
            <Card
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                boxShadow: hoveredIndex === index ? '0 8px 16px rgba(0, 0, 0, 0.2)' : 'none'
              }}
            >
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <div>
                    <Card.Title className="mb-1">{edu.degree}</Card.Title>
                    <Card.Subtitle className="text-muted mb-2">
                      {edu.field}
                    </Card.Subtitle>
                  </div>
                  <span className="badge bg-primary">{edu.period}</span>
                </div>

                <Card.Text>
                  <strong>{edu.institution}</strong>
                  <br />
                  {edu.location}
                  <br />
                  GPA/Percentage: {edu.gpa}
                </Card.Text>

                <div className="mt-3">
                  <strong>Highlights:</strong>
                  <ul className="mt-2">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Education
