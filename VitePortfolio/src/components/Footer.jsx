// src/components/Footer.jsx
//https://www.linkedin.com/in/tushar-waghmare-360582232/
//TusharW1
// src/components/Footer.jsx
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-4">
      <Container>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-2 mb-md-0">© {new Date().getFullYear()} Tushar Waghmare. All rights reserved.</p>
          <div className="d-flex gap-4">
            <a href="https://github.com/TusharW1" target="_blank" rel="noopener noreferrer" className="text-light">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a href="https://www.linkedin.com/in/tushar-waghmare-360582232/" target="_blank" rel="noopener noreferrer" className="text-light">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer