import { NextResponse } from 'next/server'
import { readFileSync } from 'fs'
import { join } from 'path'
export const runtime = 'nodejs'
export async function POST(req: Request){
  const body = await req.json()
  const { template, parties = {}, terms = {} } = body
  try{
    const tplPath = join(process.cwd(), 'app', 'api', '_data', `${template}.txt`)
    let tpl = readFileSync(tplPath,'utf8')
    const data: Record<string,string> = { ...parties, ...terms }
    tpl = tpl.replace(/\{(.*?)\}/g, (_:any,k:any)=> (data[k] ?? `{${k}}`))
    const title = `${template}.docx`
    return NextResponse.json({ title, content_preview: tpl.slice(0, 800) + (tpl.length>800 ? '...' : '') })
  }catch(e:any){
    return NextResponse.json({ error:'template-not-found' }, { status:404 })
  }
}
