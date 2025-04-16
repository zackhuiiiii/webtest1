import ContactCode from '@/components/ContactCode';
import MessageBox from '@/components/MessageBox';
import VisitorMap from '@/components/VisitorMap';
import styles from '@/styles/Contact.module.css';

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mapSection}>
        <h2 className={styles.title}>Visitor Map</h2>
        <VisitorMap />
      </div>

      <div className={styles.mainContent}>
        <div className={styles.leftColumn}>
          <h2 className={styles.title}>Get in Touch</h2>
          <ContactCode />
        </div>
        
        <div className={styles.rightColumn}>
          <h2 className={styles.title}>Send Message</h2>
          <MessageBox />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;