import { GetStaticProps } from 'next';
import { useState } from 'react';
import styles from '@/styles/Publications.module.css';
import { Publication, parseBibFile } from '@/utils/bibParser';

interface PublicationsPageProps {
  publications: Publication[];
}

export default function PublicationsPage({ publications }: PublicationsPageProps) {
  const [filterText, setFilterText] = useState('');

  const filteredPublications = publications.filter(pub => 
    pub.title.toLowerCase().includes(filterText.toLowerCase()) ||
    pub.authors.some(author => author.toLowerCase().includes(filterText.toLowerCase())) ||
    pub.conference.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1>publications</h1>
      <p className={styles.subtitle}>
        publications by categories in reversed chronological order.
      </p>

      <input
        type="text"
        placeholder="Type to filter"
        className={styles.filterInput}
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      <div className={styles.publicationList}>
        {filteredPublications.map((pub) => (
          <div key={pub.id} className={styles.publicationItem}>
            {pub.abbr && (
              <div className={styles.tags}>
                <span className={styles.tag}>{pub.abbr}</span>
              </div>
            )}
            <h2>{pub.title}</h2>
            <p className={styles.authors}>
              {pub.authors.join(", ")}
            </p>
            <p className={styles.conference}>
              <em>{pub.conference}</em>
              {pub.address && `, ${pub.address}`}
              {pub.month && ` • ${pub.month} ${pub.year}`}
            </p>
            {pub.abstract && (
              <p className={styles.abstract}>{pub.abstract}</p>
            )}
            <div className={styles.links}>
              {pub.pdf && (
                <a href={pub.pdf} target="_blank" rel="noopener noreferrer">
                  PDF
                </a>
              )}
              <button 
                onClick={() => navigator.clipboard.writeText(`@${pub.id}`)}
                className={styles.bibButton}
              >
                BIB
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const publications = parseBibFile();
  return {
    props: {
      publications: publications.sort((a, b) => 
        parseInt(b.year) - parseInt(a.year)
      ),
    },
  };
};