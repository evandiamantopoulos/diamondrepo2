export default function Home() {
  return (
    <main className="snap">
      <section id="hero" className="panel hero center">
        <div className="container">
          <h1>Sharper Decisions. Stronger Cases.</h1>
          <p className="sub">Secure advanced AI software for legal teams. Draft, review, and research with verified citations in minutes.</p>
          <div className="cta">
            <a href="#contact" className="btn accent">Book a Demo</a>
            <a href="#why" className="btn ghost">See How It Works</a>
          </div>
        </div>
      </section>
      <section id="who" className="panel">
        <div className="container grid2">
          <div>
            <h2>Who We Are</h2>
            <p>The Diamond Edge Co. builds secure, outcome driven AI for modern legal teams. A private retrieval layer, jurisdiction aware templates, and in the loop review workflows help your firm work faster without sacrificing standards.</p>
            <ul className="bullets">
              <li><b>Secure by design.</b> Isolated cloud, role based access, encryption end to end, complete audit trails.</li>
              <li><b>Verified intelligence.</b> Every answer is backed by statutes, cases, and your documents.</li>
              <li><b>Law firm ready drafting.</b> Redlines, summaries, and briefs prepared for partner review.</li>
            </ul>
          </div>
          <div id="why">
            <h2>Why Diamond Edge</h2>
            <p className="lead">We focus on outcomes, not output. Diamond Edge delivers jurisdiction specific, fully cited legal work your firm can rely on — with privacy, control, and speed.</p>
            <ul className="bullets">
              <li><b>Jurisdiction aware drafting.</b> Answers and templates tuned to local rules and courts.</li>
              <li><b>Source linked findings.</b> Every statement traces back to statutes, cases, or your DMS.</li>
              <li><b>Policy aware checklists.</b> Governance for finance, healthcare, employment.</li>
              <li><b>Granular permissions.</b> Matter based access, audit logs, approvals.</li>
              <li><b>Enterprise SSO.</b> SAML/SCIM for large teams.</li>
            </ul>
            <p className="note">Your AI powered legal department. Precise. Compliant. Fast.</p>
          </div>
        </div>
      </section>
      <section id="how" className="panel">
        <div className="container">
          <h2>How It Works</h2>
          <p className="lead">A streamlined pipeline that keeps quality and control with your firm.</p>
          <div className="steps">
            <div className="step"><div className="num">1</div><h3>Ingest</h3><p>Upload contracts, pleadings, policies, transcripts, PDFs.</p></div>
            <div className="step"><div className="num">2</div><h3>Index</h3><p>Parse, chunk, embed, and tag with jurisdiction + matter.</p></div>
            <div className="step"><div className="num">3</div><h3>Retrieve</h3><p>Pull only relevant passages with link back citations.</p></div>
            <div className="step"><div className="num">4</div><h3>Draft</h3><p>Generate drafts, redlines, and memos with references.</p></div>
            <div className="step"><div className="num">5</div><h3>Review</h3><p>In the loop approvals, export to DOCX.</p></div>
          </div>
          <div className="centerline"><a className="btn accent" href="/demo">Open Live Demo</a></div>
        </div>
      </section>
      <section id="reviews" className="panel">
        <div className="container">
          <h2>Reviews</h2>
          <div className="reviews">
            <article className="review"><div className="avatar">AL</div><div className="meta"><div className="name">Alex Liu</div><div className="role">Partner, Am Law 100</div></div><p>Turned a two day contract review into thirty minutes.</p></article>
            <article className="review"><div className="avatar">JR</div><div className="meta"><div className="name">Jasmine Rao</div><div className="role">General Counsel, Global SaaS</div></div><p>Drafts we can trust. Approvals are simple for our board.</p></article>
            <article className="review"><div className="avatar">MT</div><div className="meta"><div className="name">Marco Torres</div><div className="role">Trial Attorney</div></div><p>Brief builder saved our team a full week before a hearing.</p></article>
          </div>
        </div>
      </section>
      <section id="pricing" className="panel">
        <div className="container">
          <h2>Pricing</h2>
          <div className="pricing">
            <div className="card"><h3>Starter</h3><div className="prices"><span className="was">$3,000/mo</span><span className="now">$1,500/mo</span></div><div className="offer">Limited time. 50% off.</div><ul><li>5 full access user profiles</li><li>Universal review</li><li>Email support</li></ul><a className="btn accent w" href="#contact">Get Started</a></div>
            <div className="card pop"><div className="badge">Most Popular</div><h3>Pro</h3><div className="prices"><span className="was">$6,000/mo</span><span className="now">$3,000/mo</span></div><div className="offer">Limited time. 50% off.</div><ul><li>20 full access profiles</li><li>Verified research</li><li>Priority support</li></ul><a className="btn accent w" href="#contact">Choose Pro</a></div>
            <div className="card"><h3>Enterprise</h3><div className="prices"><span className="was">$12,000/mo</span><span className="now">$6,000/mo</span></div><div className="offer">Limited time. 50% off.</div><ul><li>Unlimited profiles</li><li>Private cloud / on premises</li><li>Dedicated success engineer</li></ul><a className="btn accent w" href="#contact">Talk to Sales</a></div>
          </div>
        </div>
      </section>
      <section id="contact" className="panel">
        <div className="container narrow center">
          <h2 className="pre-contact">Ready to set the Diamond Standard?</h2>
          <h2>Contact Us</h2>
          <p className="sub">Book a twenty minute demo. We will follow up with a calendar link.</p>
          <a className="btn accent" href="/demo">Open Live Demo</a>
        </div>
      </section>
    </main>
  )
}
