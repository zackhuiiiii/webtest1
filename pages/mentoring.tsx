import styles from '@/styles/Mentoring.module.css';

const MentoringPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.terminal}>
        <div className={styles.terminalHeader}>
          <div className={styles.terminalButtons}>
            <span className={styles.red}></span>
            <span className={styles.yellow}></span>
            <span className={styles.green}></span>
          </div>
          <div className={styles.terminalTitle}>mentoring.md</div>
        </div>

        <div className={styles.terminalBody}>
          <div className={styles.code}>
            <p className={styles.comment}>// mentoring initiative</p>
            <br />
            <p>
              <span className={styles.keyword}>const</span>{' '}
              <span className={styles.variable}>mentoring</span> = {'{'}
            </p>
            <p className={styles.indent}>
            <span className={styles.key}>philosophy</span>:{' '}
            <span className={styles.string}>
            &quot;I'm deeply grateful for the professors, mentors, and peers who believed in me, guided me, and opened <br />doors I didn&apos;t know existed. Their support shaped my path in ways I could never have imagined. Now, it's my <br />turn to give back and help others find their path, just as others once helped me.&quot;
            </span>,
            </p>
            <p className={styles.indent}>
              <span className={styles.key}>commitment</span>:{' '}
              <span className={styles.string}>
                &quot;Devoting half a day every two weeks to mentor students&quot;
              </span>,
            </p>
            <p className={styles.indent}>
              <span className={styles.key}>whoIMentor</span>:{' '}
              <span className={styles.string}>
                &quot;Motivated students, particularly from underrepresented or marginalized backgrounds in Computer Science; <br />prioritizing those from Cambridge, Columbia, BU, and Penn State.&quot;
              </span>,
            </p>
            <p className={styles.indent}>
              <span className={styles.key}>focus</span>: [
                <span className={styles.string}>&quot;Research guidance&quot;</span>,{' '}
                <span className={styles.string}>&quot;Academic growth&quot;</span>,{' '}
                <span className={styles.string}>&quot;Career exploration&quot;</span>,{' '}
                <span className={styles.string}>&quot;Others&quot;</span>
              ],
            </p>
            <p>{'}'}</p>
            <br />
            <p className={styles.comment}>// current mentoring status</p>
            <p>
              <span className={styles.keyword}>const</span>{' '}
              <span className={styles.variable}>status</span> = {'{'}
            </p>
            <p className={styles.indent}>
              <span className={styles.key}>available</span>:{' '}
              <span className={styles.boolean}>true</span>,
              <span className={styles.statusIndicator + ' ' + styles.available}></span>
            </p>
            
            <p>{'}'}</p>
            <br />
            <p className={styles.comment}>// gratitude to my past mentors</p>
            <p>
              <span className={styles.keyword}>const</span>{' '}
              <span className={styles.variable}>gratitude</span> = {'{'}
            </p>
            <p className={styles.indent}>
              <span className={styles.key}>Columbia</span>: [
            </p>
            <p className={styles.doubleIndent}>
              <span className={styles.string}>&quot;Professor John Kender&quot;</span>,
            </p>
            <p className={styles.doubleIndent}>
              <span className={styles.string}>&quot;Professor Julia Hirschberg&quot;</span>
            </p>
            <p className={styles.indent}>],</p>

            <p className={styles.indent}>
              <span className={styles.key}>BU</span>: [
            </p>
            <p className={styles.doubleIndent}>
              <span className={styles.string}>&quot;Professor Mark Crovella&quot;</span>,
            </p>
            <p className={styles.doubleIndent}>
              <span className={styles.string}>&quot;Professor Manos Athanassoulis&quot;</span>
            </p>
            <p className={styles.indent}>],</p>

            <p>{'}'}</p>
            <br />
            <p className={styles.comment}>// get in touch</p>
            <p>
              <span className={styles.keyword}>const</span>{' '}
              <span className={styles.variable}>contact</span> = {'{'}
            </p>
            <p className={styles.indent}>
              <span className={styles.key}>email</span>:{' '}
              <span className={styles.string}>&quot;zh2483@columbia.edu&quot;</span>,
            </p>
            <p>{'}'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentoringPage;