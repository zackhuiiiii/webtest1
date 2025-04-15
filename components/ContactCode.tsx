import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from '@/styles/ContactCode.module.css';

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <div className={styles.line}>
        <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
        <a href="mailto:zh2483@columbia.edu" className={styles.link}>
          zh2483@columbia.edu
        </a>
      </div>

      <div className={styles.line}>
        <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
        <a 
          href="https://www.linkedin.com/in/zheng-hui52/" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.link}
        >
          linkedin.com/in/zheng-hui52
        </a>
      </div>

      

      <div className={styles.line}>
        <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
        <span className={styles.value}>New York, NY</span>
      </div>

    </div>
  );
};

export default ContactCode;