import styles from '@/styles/AwardsPage.module.css';

const AwardsPage = () => {
  const awards = [
    {
      title: 'Pivotal Fellowship for AI Safety',
      date: 'Jan 2026',
      description: '',
      highlight: true
    },
    {
      title: 'Anthropic Fellows Program',
      date: 'Oct 2025',
      description: 'Final Shortlist',
      highlight: true
    },
    {
      title: 'Supervised Program for Alignment Research (SPAR) Fellowship',
      date: 'Sept 2025',
      description: '90/1600 applicants, Globally',
      highlight: true,
      link: 'https://sparai.org/'
    },
    {
      title: 'Google Research Grant',
      date: 'May 2025',
      description: 'Principal Investigator, $5,000',
      highlight: false
    },
    {
      title: 'Roblox Fellowship',
      date: '2024–2025',
      description: 'Award rate ∼0.6%, Globally',
      highlight: true
    },
    {
      title: 'OpenAI Researcher Access Program',
      date: 'July 2024',
      description: 'Principal Investigator, $2,000',
      highlight: false
    },
    {
      title: 'Columbia Business School Build Lab with Columbia Engineering Fellowship',
      date: '2022–2023',
      description: '$9,500',
      highlight: false
    },
    {
      title: 'Columbia Master Research Scholar',
      date: 'Fall 2022',
      description: '',
      highlight: false
    },
    {
      title: 'Boston University Undergraduate Research Award',
      date: 'Fall 2020',
      description: 'Awarded to 16 of 17,000 students',
      highlight: true
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Grants, Honors & Awards</h1>
        <div className={styles.subtitle}>Recognition and Support for Research Excellence</div>

        <div className={styles.timeline}>
          {awards.map((award, index) => (
            <div 
              key={index} 
              className={`${styles.awardCard} ${award.highlight ? styles.highlight : ''}`}
            >
              <div className={styles.awardHeader}>
                <div className={styles.awardTitleSection}>
                  {award.link ? (
                    <a 
                      href={award.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.awardTitleLink}
                    >
                      <h3 className={styles.awardTitle}>
                        {award.title}
                        <span className={styles.externalIcon}>↗</span>
                      </h3>
                    </a>
                  ) : (
                    <h3 className={styles.awardTitle}>{award.title}</h3>
                  )}
                  {award.description && (
                    <p className={styles.awardDescription}>{award.description}</p>
                  )}
                </div>
                <div className={styles.awardDate}>{award.date}</div>
              </div>
              <div className={styles.awardDivider}></div>
            </div>
          ))}
        </div>

        <div className={styles.statsSection}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>{awards.length}</div>
            <div className={styles.statLabel}>Total Awards</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>$16,500+</div>
            <div className={styles.statLabel}>Research Funding</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>5</div>
            <div className={styles.statLabel}>Fellowships</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Awards' },
  };
}

export default AwardsPage;
