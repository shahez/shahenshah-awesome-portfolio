import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Software Engineer</h4>
                <h5>Mindtree Limited</h5>
              </div>
              <h3>2016</h3>
            </div>
            <p>
              Developed APIs using Java Spring Boot for Airline and Finance clients.
              Built authentication systems with JWT, maintained Oracle DB, and
              created intelligent financial metric apps using MuleSoft.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Dev Consultant</h4>
                <h5>CSG International</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>
              Worked on the Ascendon SaaS telecom product with integrated billing
              and IoT services. Developed MNP application, fraud detection systems,
              and CI/CD pipelines using AWS Lambda, S3, SQS, SNS and MuleSoft.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Lead Engineer</h4>
                <h5>CGI Inc</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Led the Gateway project — a full redesign using microservices on AWS.
              Built serverless file transfer services, document processing pipelines,
              and license/compliance management systems using React, Python, Node.js and Java.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Manager</h4>
                <h5>DENSO India</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Led end-to-end product development for Mobility as a Service (MaaS).
              Built IoT integration for cold chain logistics, route optimization,
              fleet management, and ML-powered image processing using React, Node.js,
              Python, and AWS (EKS, Lambda).
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Staff Software Engineer</h4>
                <h5>RapidAI</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Architect and develop AI-powered clinical solutions in a multi-tenant
              Kubernetes environment. Lead Okta migration, build DICOM/FHIR-based
              medical imaging features, and deliver AI heatmap explainability for
              stroke and aneurysm detection workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
