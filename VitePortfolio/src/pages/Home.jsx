import { Container, Row, Col, Image } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <Container>
        {/* Hero Section */}
        <Row className="text-center mb-5">
          <Col>
            <Image
              src="https://i.ibb.co/48x3c7P/Profile-Photo.png"
              roundedCircle
              width={200}
              height={200}
              className="mb-4 profile-photo-hover"  // Added class here
            />
            <h1 className="display-4 mb-3 name-hover">Tushar Waghmare</h1>  {/* Added class here */}
            <p className="lead mb-4">Full Stack Developer | Problem Solver</p>
            <p className="mx-auto" style={{ maxWidth: '600px' }}>
              Highly driven and adaptable Full Stack Software Engineer diving deep into AI and Cloud Platform. My proficiency in 
              coding and software development has equipped me with a strong analytical mindset and problem-solving skills..  
              I'm a passionate developer with experience in building modern web applications.
              Currently focused on React, Node.js, and cloud technologies.
            </p>
          </Col>
        </Row>

        {/* Skills Section */}
        <Row className="mb-5">
          <Col xs={12}>
            <h2 className="text-center mb-4">Skills</h2>
          </Col>
          <Col md={4} className="mb-4">
            <div className="p-4 bg-light rounded skill-card">
              <h3 className="h5 mb-3">Frontend Development</h3>
              <ul className="list-unstyled">
                <li className="mb-2">✓ React.js</li>
                <li className="mb-2">✓ JavaScript (ES6+)</li>
                <li className="mb-2">✓ HTML5 & CSS3</li>
                <li className="mb-2">✓ Bootstrap</li>
              </ul>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="p-4 bg-light rounded skill-card">
              <h3 className="h5 mb-3">Backend Development</h3>
              <ul className="list-unstyled">
                <li className="mb-2">✓ Node.js</li>
                <li className="mb-2">✓ Express.js</li>
                <li className="mb-2">✓ MongoDB</li>
                <li className="mb-2">✓ MySQL</li>
                <li className="mb-2">✓ RESTful APIs</li>
              </ul>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="p-4 bg-light rounded skill-card">
              <h3 className="h5 mb-3">Tools & Technologies</h3>
              <ul className="list-unstyled">
                <li className="mb-2">✓ Git & GitHub</li>
                <li className="mb-2">✓ VS Code</li>
                <li className="mb-2">✓ Docker</li>
                <li className="mb-2">✓ AWS</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      
      <style jsx>{`
        .profile-photo-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .profile-photo-hover:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .name-hover {
          transition: color 0.3s ease, transform 0.3s ease;
          cursor: pointer;
        }

        .name-hover:hover {
          color: #007bff; /* Change the color on hover */
          transform: scale(1.05); /* Slightly enlarge the text */
        }

        .skill-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .skill-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </>
  );
};

export default Home;
