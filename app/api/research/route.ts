import { NextResponse } from 'next/server'
export const runtime = 'nodejs'
export async function POST(req: Request){
  const body = await req.json()
  const jurisdiction = body.jurisdiction || 'the selected jurisdiction'
  const citations = [
    { title:'ACME v. Smith', citation:'2021 ABC 123', url:'https://example.org/case/acme-v-smith' },
    { title:'Uniform Commercial Code §2-719', citation:'UCC 2-719', url:'https://example.org/ucc/2-719' },
    { title:'Doe v. Widgets', citation:'2019 XYZ 456', url:'https://example.org/case/doe-v-widgets' },
  ]
  const answer = `In ${jurisdiction}, courts enforce liability caps when the language is conspicuous and mutual. See attached citations.`
  return NextResponse.json({ answer, citations })
}
