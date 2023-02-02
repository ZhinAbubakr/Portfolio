import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // const [skils] = useState([
  //   Java,
  //   HTML,
  //   CSS,
  //   JS,
  //   ReactJs,
  //   C++,
  //   VisualStudioCode,
  //   Flutter,
  //   Firebase,
  //   Lravel,
  //   SQL,
  // ]);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper" style={{ marginBottom: 50 }}>
          <Title title="Projects" />
          {projects.map((project) => {
            const { title, info, info2, url, repo, img, id } = project;

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                      <div>
                        <p>
                          {info ||
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                        </p>
                        <p className="mb-4">{info2 || ''}</p>
                      </div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={url || '#!'}
                      >
                        See Live
                      </a>

                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={repo}
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={title} filename={img} />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
        <div style={{ marginTop: 25, marginBottom: 45 }}>
          <Title title="Skills" />
          <section id="as-services">
            <div class="container">
              <div class="row text-center">
                <div class="col-12 col-sm-6 col-md-4" style={{ marginBottom: 25 }}>
                  <div class="as-service-box mt-4">
                    <img
                      src="https://i.pinimg.com/originals/e9/94/61/e99461fdd5b3db8bdb3081d8acf5e524.png"
                      style={{ width: 70, height: 70 }}
                    />
                    <h3 class="mt-3">
                      <b>JAVA</b>
                    </h3>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4" style={{ marginBottom: 25 }}>
                  <div class="as-service-box mt-4">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ZHz90ePPc5e1ue1FLrQ4Y6QL3aHQtGf5gA&usqp=CAU"
                      style={{ width: 70, height: 70 }}
                    />
                    <h3 class="mt-3">
                      <b>HTML</b>
                    </h3>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4" style={{ marginBottom: 25 }}>
                  <div class="as-service-box mt-4">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZGM5Jpbl1RAxb3fvhRfbZzN8XyOot58Yskw&usqp=CAU"
                      style={{ width: 70, height: 70 }}
                    />
                    <h3 class="mt-3">
                      <b>CSS</b>
                    </h3>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4" style={{ marginBottom: 25 }}>
                  <div class="as-service-box mt-4">
                    <img
                      src="https://cdn.freelogovectors.net/wp-content/uploads/2020/11/javascript_logo.png"
                      style={{ width: 70, height: 70 }}
                    />
                    <h3 class="mt-3">
                      <b>JS</b>
                    </h3>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4" style={{ marginBottom: 25 }}>
                  <div class="as-service-box mt-4">
                    <img
                      src="https://sujanbyanjankar.com.np/wp-content/uploads/2020/05/1200px-Laravel.svg_.png"
                      style={{ width: 70, height: 70 }}
                    />
                    <h3 class="mt-3">
                      <b>LARAVEL</b>
                    </h3>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4" style={{ marginBottom: 25 }}>
                  <div class="as-service-box mt-4">
                    <img
                      src="https://www.pngkit.com/png/full/231-2316751_database-database-icon-png.png"
                      style={{ width: 70, height: 70 }}
                    />
                    <h3 class="mt-3">
                      <b>SQL</b>
                    </h3>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4" style={{ marginBottom: 25 }}>
                  <div class="as-service-box mt-4">
                    <img
                      src="https://cdn.dribbble.com/users/528264/screenshots/3140440/firebase_logo.png"
                      style={{ width: 70, height: 70 }}
                    />
                    <h3 class="mt-3">
                      <b>FIREBASE</b>
                    </h3>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4" style={{ marginBottom: 25 }}>
                  <div class="as-service-box mt-4">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                      style={{ width: 70, height: 70 }}
                    />
                    <h3 class="mt-3">
                      <b>REACTJS</b>
                    </h3>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4" style={{ marginBottom: 25 }}>
                  <div class="as-service-box mt-4">
                    <img
                      src="https://320ryg19rh2bhqo6vqdmrneq-wpengine.netdna-ssl.com/wp-content/uploads/2020/10/flutterlogo.png"
                      style={{ width: 70, height: 70 }}
                    />
                    <h3 class="mt-3">
                      <b>FLUTTER</b>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
