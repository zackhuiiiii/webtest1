import Tab from '@/components/Tab';

import styles from '@/styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/logos/react_icon.svg" filename="Home" path="/" />
      <Tab icon="/logos/html_icon.svg" filename="About Me.html" path="/about" />
      {/* <Tab icon="/logos/js_icon.svg" filename="projects.js" path="/projects" /> */}
      <Tab
        icon="/logos/json_icon.svg"
        filename="Publications"
        path="/publications"
      />
      <Tab
        icon="/logos/markdown_icon.svg"
        filename="github.md"
        path="/github"
      />
      <Tab icon="/logos/css_icon.svg" filename="Content" path="/contact" />
    </div>
  );
};

export default Tabsbar;
