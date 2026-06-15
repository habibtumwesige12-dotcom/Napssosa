import styles from './AboutPage.module.css'

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <h1>About NAPSSOSA</h1>
        <p>Nabingoola Public Secondary School Old Students Association</p>
      </div>

      <div className={styles.container}>
        <section className={styles.section}>
          <h2>Who We Are</h2>
          <p>
            NAPSSOSA — the Nabingoola Public Secondary School Old Students Association —
            is a community of former students bound together by a shared heritage and a
            common commitment to the continued growth of our alma mater. We are Old Girls
            and Old Boys who carry the values, discipline, and spirit of Nabingoola
            wherever life has taken us, and who believe that those same values place on
            us a responsibility to give back.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Our Aims &amp; Objectives</h2>
          <p>
            At the heart of NAPSSOSA lies a set of clearly defined objectives that guide
            everything we do. These objectives reflect our collective ambition — not only
            to honour the institution that shaped us, but to actively invest in its future
            and in the futures of those who walk its corridors today.
          </p>

          <div className={styles.objectives}>
            <div className={styles.objective}>
              <span className={styles.number}>01</span>
              <div>
                <h3>Unity &amp; Lifelong Fellowship</h3>
                <p>
                  We seek to unite all former students of Nabingoola Public Secondary School
                  and foster lifelong fellowship. Regardless of year of graduation, profession,
                  or place of residence, every alumnus and alumna belongs to this family. That
                  sense of belonging is the foundation upon which everything else is built.
                </p>
              </div>
            </div>

            <div className={styles.objective}>
              <span className={styles.number}>02</span>
              <div>
                <h3>Resource Mobilisation &amp; School Development</h3>
                <p>
                  We are committed to mobilising resources and supporting projects that improve
                  infrastructure, academics, and the general welfare of the school. From
                  classroom facilities to library resources, we recognise that a well-equipped
                  school environment is essential to quality education, and we take it upon
                  ourselves to contribute to that environment.
                </p>
              </div>
            </div>

            <div className={styles.objective}>
              <span className={styles.number}>03</span>
              <div>
                <h3>Mentorship, Guidance &amp; Scholarships</h3>
                <p>
                  NAPSSOSA is deeply invested in the growth of current students. Through
                  mentorship programmes, career guidance, internship linkages, and scholarship
                  opportunities, we aim to bridge the gap between where students are today and
                  where they aspire to be. We walk that journey with them.
                </p>
              </div>
            </div>

            <div className={styles.objective}>
              <span className={styles.number}>04</span>
              <div>
                <h3>Upholding the School's Reputation &amp; Values</h3>
                <p>
                  We are proud custodians of the reputation and values of Nabingoola Public
                  Secondary School. We endeavour to uphold, protect, and promote what the
                  school stands for — academic excellence, integrity, and service — both
                  within our membership and in the broader community.
                </p>
              </div>
            </div>

            <div className={styles.objective}>
              <span className={styles.number}>05</span>
              <div>
                <h3>Professional Networking &amp; Community Service</h3>
                <p>
                  We provide a platform for members to connect, collaborate, and grow
                  professionally. Beyond individual advancement, we are committed to community
                  service — channelling our collective expertise and resources toward the
                  betterment of the communities we serve.
                </p>
              </div>
            </div>

            <div className={styles.objective}>
              <span className={styles.number}>06</span>
              <div>
                <h3>Advancing Our Mission Through Lawful Activity</h3>
                <p>
                  We reserve the right to engage in any lawful activity that advances the
                  objectives of the association. Our commitment is to remain adaptable,
                  responsive, and purposeful in everything we undertake — always with the
                  school's legacy and our members' interests at the forefront.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Our Commitment</h2>
          <p>
            NAPSSOSA is more than an alumni body — it is a movement. A movement driven by
            gratitude for what Nabingoola gave us, and by a determination to ensure that
            every student who passes through its gates has access to the same opportunities,
            if not better ones, than we had. Together, we are stronger. Together, we move
            Nabingoola forward.
          </p>
        </section>
      </div>
    </main>
  )
}
