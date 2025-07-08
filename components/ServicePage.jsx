import Head from 'next/head'
import './ServicePage.css' // adjust the path as needed

export default function ServicePage({
  title,
  metaDescription,
  header,
  subHeader,
  mainImageUrl,
  mainImageAlt,
  contentSections = [],
  faqItems = [],
}) {
  return (
    <>
      <Head>
        <title>{title} | Allergy and Asthma Clinical Centers</title>
        <meta name="description" content={metaDescription} />
      </Head>

      <main className="service-card" role="main">
        {mainImageUrl && (
          <img
            src={mainImageUrl}
            alt={mainImageAlt || ''}
            className="service-image"
            loading="lazy"
          />
        )}

        <h1 className="service-header">{header}</h1>

        {subHeader && <p className="sub-header">{subHeader}</p>}

        {contentSections.map(({ heading, text, imageUrl, imageAlt }, idx) => (
          <section key={idx} className="content-section">
            <h2>{heading}</h2>
            <p>{text}</p>
            {imageUrl && (
              <img src={imageUrl} alt={imageAlt || ''} loading="lazy" />
            )}
          </section>
        ))}

        {faqItems.length > 0 && (
          <section className="faq-section" aria-label="Frequently Asked Questions">
            <h2>Frequently Asked Questions</h2>
            <dl>
              {faqItems.map(({ question, answer }, idx) => (
                <div key={idx} className="faq-item">
                  <dt>{question}</dt>
                  <dd>{answer}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}
      </main>
    </>
  )
}
