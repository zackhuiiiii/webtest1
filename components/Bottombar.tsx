import {
  VscBell,
  VscCheck,
  VscError,
  VscWarning,
  VscSourceControl,
} from 'react-icons/vsc';
import { SiNextdotjs } from 'react-icons/si';
import styles from '@/styles/Bottombar.module.css';

const Bottombar = () => {
  // Generate current month and year dynamically
  const getLastUpdated = () => {
    const date = new Date();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();
    return `${month}, ${year}`;
  };

  return (
    <footer className={styles.bottomBar}>
      <div className={styles.container}>
        <div className={styles.section}>
          <VscSourceControl className={styles.icon} />
          <p>main*</p>
        </div>
        <div className={styles.section}>
          <VscError className={styles.icon} />
          <p>0</p>
          <VscWarning className={styles.icon} />
          <p>0</p>
        </div>
      </div>

      <div className={styles.copyrightContainer}>
        <div className={styles.section}>
          <p>©Copyright {new Date().getFullYear()} Zack Hui</p>
        </div>
        <div className={styles.section}>
          <p>Theme by{' '}
            <a
              href="https://github.com/itsnitinr/vscode-portfolio"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.link}
            >
              Nitin Ranganath
            </a>
          </p>
        </div>
        <div className={styles.section}>
          <p>Heavily modified by Zack Hui</p>
        </div>
        <div className={styles.section}>
          <p>Last updated: {getLastUpdated()}</p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.section}>
          <SiNextdotjs className={styles.icon} />
          <p>Powered by Next.js</p>
        </div>
        <div className={styles.section}>
          <VscCheck className={styles.icon} />
          <p>Prettier</p>
        </div>
        <div className={styles.section}>
          <p>UTF-8</p>
        </div>
        <div className={styles.section}>
          <p>2 spaces</p>
        </div>
        <div className={styles.section}>
          <VscBell />
        </div>
      </div>
    </footer>
  );
};

export default Bottombar;