export default function Home(){
  return (
    <main className="container" style={{minHeight:'calc(100vh - 140px)', display:'grid', placeItems:'center', textAlign:'center'}}>
      <div>
        <h1>Sharper Decisions. Stronger Cases.</h1>
        <p className="sub">Secure advanced AI software for legal teams. Drafts, review, and research with verified citations in minutes.</p>
        <div style={{display:'flex', gap:12, justifyContent:'center'}}>
          <a className="btn" href="/demo">See the Demo</a>
          <a className="btn ghost" href="#how">How It Works</a>
        </div>
      </div>
    </main>
  )
}