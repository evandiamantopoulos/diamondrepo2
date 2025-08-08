'use client'
import React, { useState } from 'react'

export default function Demo(){
  const [file, setFile] = useState<File|null>(null)
  const [text, setText] = useState('This agreement lacks limitation of liability and contains any and all claims.')
  const [review, setReview] = useState<any>(null)
  const [research, setResearch] = useState<any>(null)
  const [draft, setDraft] = useState<any>(null)

  const doUpload = async () => {
    if(!file) return alert('Choose a file first')
    const form = new FormData()
    form.append('file', file)
    const res = await fetch('/api/upload', { method:'POST', body: form })
    const data = await res.json()
    alert('Uploaded: ' + data.filename)
  }
  const doReview = async () => {
    const res = await fetch('/api/review', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ doc_id:'demo', text }) })
    setReview(await res.json())
  }
  const doResearch = async () => {
    const q = prompt('Enter your legal research question:', 'Are liability caps enforceable?')
    if(!q) return
    const res = await fetch('/api/research', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ question:q, jurisdiction:'NY' }) })
    setResearch(await res.json())
  }
  const doDraft = async () => {
    const res = await fetch('/api/draft', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({
      template:'nda', parties:{discloser:'ACME Corp.', recipient:'Beta LLC', effective_date:'2025-08-01'}, terms:{purpose:'exploring a reseller agreement', term:'2 years', law:'New York'}
    })})
    setDraft(await res.json())
  }

  return (
    <main className="container" style={{paddingTop:24, paddingBottom:40}}>
      <h1>Interactive Demo</h1>
      <p className="sub">Upload → Review → Research → Draft. These API endpoints are serverless functions in this same Vercel app.</p>

      <section className="grid g2" style={{marginTop:14}}>
        <div className="card">
          <h2>Upload</h2>
          <input type="file" onChange={e=>setFile(e.target.files?.[0] ?? null)} />
          <button className="btn" style={{marginTop:8}} onClick={doUpload}>Upload</button>
          <small>Mock upload for demo. In production, connect S3 or Blob storage.</small>
        </div>

        <div className="card">
          <h2>Review (flags + redlines)</h2>
          <label>Paste sample text</label>
          <textarea rows={8} value={text} onChange={e=>setText(e.target.value)} />
          <button className="btn" style={{marginTop:8}} onClick={doReview}>Run Review</button>
          {review && <div style={{marginTop:10}}>
            <h3>Flags</h3>
            <ul>{review.flags.map((f:any,i:number)=>(<li key={i}><b>{f.type}</b>: {f.message} — <i>{f.recommendation}</i></li>))}</ul>
            <h3>Suggested Clauses</h3>
            <ul>{review.redlines.map((r:any,i:number)=>(<li key={i}><b>{r.clause}:</b> {r.suggested_text}</li>))}</ul>
          </div>}
        </div>

        <div className="card">
          <h2>Research (citations)</h2>
          <button className="btn" onClick={doResearch}>Ask a Question</button>
          {research && <div style={{marginTop:10}}>
            <p>{research.answer}</p>
            <table><tbody>{research.citations.map((c:any,i:number)=>(<tr key={i}><td>{c.title}</td><td>{c.citation}</td><td><a href={c.url} target="_blank">Open</a></td></tr>))}</tbody></table>
          </div>}
        </div>

        <div className="card">
          <h2>Draft (template)</h2>
          <button className="btn" onClick={doDraft}>Generate NDA</button>
          {draft && <div style={{marginTop:10}}><p><b>{draft.title}</b></p><pre style={{whiteSpace:'pre-wrap'}}>{draft.content_preview}</pre></div>}
        </div>
      </section>
    </main>
  )
}
