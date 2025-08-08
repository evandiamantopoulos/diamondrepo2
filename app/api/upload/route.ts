import { NextResponse } from 'next/server'
export const runtime = 'nodejs'
export async function POST(req: Request){
  const form = await req.formData()
  const file = form.get('file') as File | null
  if(!file) return NextResponse.json({error:'no-file'}, {status:400})
  return NextResponse.json({ ok:true, filename: file.name, size: file.size })
}
