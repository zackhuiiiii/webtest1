import ContactCode from '@/components/ContactCode';
import MessageBox from '@/components/MessageBox';
import styles from '@/styles/Contact.module.css';

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contactSection}>
          <h2 className={styles.title}>Get in Touch</h2>
          <ContactCode />
        </div>
        
        <div className={styles.messageSection}>
          <h2 className={styles.title}>Send Message</h2>
          <MessageBox />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;