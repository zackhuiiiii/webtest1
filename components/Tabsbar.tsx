import { useState } from 'react';
import Tab from '@/components/Tab';
import styles from '@/styles/Tabsbar.module.css';
import { VscMenu, VscChromeClose } from 'react-icons/vsc';

const Tabsbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.tabsContainer}>
      <button 
        className={styles.menuButton}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <VscChromeClose /> : <VscMenu />}
      </button>

      <div className={`${styles.tabs} ${isMenuOpen ? styles.showMenu : ''}`}>
        <Tab icon="/logos/react_icon.svg" filename="Home" path="/" />
        <Tab icon="/logos/html_icon.svg" filename="AboutMe" path="/about" />
        <Tab icon="/logos/json_icon.svg" filename="Publications" path="/publications" />
        <Tab icon="/logos/js_icon.svg" filename="Awards" path="/awards" />
        <Tab icon="/logos/markdown_icon.svg" filename="Blog" path="/blog" />
        <Tab icon="/logos/markdown_icon.svg" filename="GitHub" path="/github" />
        <Tab icon="/logos/mentoring_icon.svg" filename="Mentoring" path="/mentoring" />
        <Tab icon="/logos/css_icon.svg" filename="Contact" path="/contact" />
      </div>
    </div>
  );
};

export default Tabsbar;