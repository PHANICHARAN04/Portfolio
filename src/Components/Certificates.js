import React from 'react';
import '../styles/Certificates.css';

const certifications = [
  {
    title: 'AWS Cloud Practitioner',
    dateIssued: 'Jun 26, 2023',
    expirationDate: 'Jun 26, 2026',
    validationNumber: 'YSQWCTDK81V41Y3N',
    validationLink: 'https://aws.amazon.com/verification',
    credlyLink: 'https://www.credly.com/badges/8ff43340-76b2-4b92-bd5c-652a73af34ba/public_url',
  },
  {
    title: 'AWS Developer Associate',
    dateIssued: 'Nov 29, 2023',
    expirationDate: 'Nov 29, 2026',
    validationNumber: 'LGNKEV1BQFF41QWL',
    validationLink: 'https://aws.amazon.com/verification',
    credlyLink: 'https://www.credly.com/badges/4d16a38c-88f2-4ea6-9158-acd442a81fdb/public_url'
  },
  {
    title: 'Red Hat (EX-183)',
    dateIssued: 'Aug 28, 2023',
    expirationDate: 'Aug 28, 2026',
    validationNumber: '230-172-413',
    validationLink: 'https://www.credly.com/badges/d6b437ea-f0e6-42db-beef-8af8ca755809/public_url',
    credlyLink: 'https://www.credly.com/badges/d6b437ea-f0e6-42db-beef-8af8ca755809/public_url',
  },
  {
    title: 'HackerRank - Java Basic',
    dateIssued: 'Mar 15, 2023',
    expirationDate: 'LifeTime',
    validationNumber: 'B2049D8BA2DF',
    validationLink: 'https://www.hackerrank.com/certificates/b2049d8ba2df',
  },
  {
    title: 'HackerRank - Software Engineer',
    dateIssued: 'Mar 17, 2024',
    expirationDate: 'LifeTime',
    validationNumber: '3CF7FFA6173D',
    validationLink: 'https://www.hackerrank.com/certificates/3cf7ffa6173d',
  },

];

const Certificates = () => {
  return (
    <div className="certificates-container" id="certificates">
      {certifications.map((cert, index) => (
        <div className="certificate" key={index}>
          <div className="certificate-title">{cert.title}</div>
          <div className="certificate-details">
            <p className="certificate-detail">Date Issued: {cert.dateIssued}</p>
            <p className="certificate-detail">Expiration Date: {cert.expirationDate}</p>
            {cert.validationNumber && <p className="certificate-detail">Validation Number: {cert.validationNumber}</p>}
            <div className="button-container">
              <a href={cert.validationLink} className="validation-link" target="_blank" rel="noopener noreferrer">
                <button className="validation-button">Validate</button>
              </a>
              {cert.credlyLink && (
                <a href={cert.credlyLink} className="credly-link" target="_blank" rel="noopener noreferrer">
                  <button className="credly-button">View on Credly</button>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Certificates;
