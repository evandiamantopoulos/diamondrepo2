export const metadata = { title: 'The Diamond Edge Co.' }
import '../styles/globals.css'
import Starfield from '../components/Starfield'
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>
    <Starfield/>
    <header><nav><a className="brand" href="/"><span>◆</span><span>The Diamond Edge Co.</span></a>
      <div className="links">
        <a href="/#who">Who We Are</a><a href="/#why">Why Diamond Edge</a><a href="/#how">How It Works</a><a href="/#reviews">Reviews</a><a href="/#pricing">Pricing</a>
        <a href="/#contact" className="btn accent">Contact Us</a></div></nav></header>{children}
    <footer><div className="foot container"><div>© {new Date().getFullYear()} The Diamond Edge Co.</div><div><a href="mailto:team@diamondedge.co">team@diamondedge.co</a></div></div></footer>
  </body></html>)
}
