import { NextResponse } from 'next/server'
import policies from '../_data/policies.json'
export const runtime = 'nodejs'
export async function POST(req: Request){
  const body = await req.json()
  const text: string = (body.text || '').toLowerCase()
  const flags: any[] = []
  for(const rule of policies.checks){
    if(rule.missing_phrase && !text.includes(rule.missing_phrase.toLowerCase())){
      flags.push({ type:'missing', message:`Missing: ${rule.missing_phrase}`, recommendation: rule.recommendation })
    }
    if(rule.contains_phrase && text.includes(rule.contains_phrase.toLowerCase()) && rule.warn_if_contains){
      flags.push({ type:'warning', message:`Overbroad: contains \\`${rule.contains_phrase}\\``, recommendation: rule.recommendation })
    }
  }
  const redlines = [
    { clause:'Limitation of Liability', suggested_text: policies.clauses.liability_cap },
    { clause:'Force Majeure', suggested_text: policies.clauses.force_majeure },
    { clause:'Indemnity', suggested_text: policies.clauses.indemnity_scope },
  ]
  return NextResponse.json({ summary:'Automated review complete.', flags, redlines })
}
