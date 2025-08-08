export const metadata = { title: 'The Diamond Edge Co.' }
import '../styles/globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <canvas id="stars"></canvas>
        <header>
          <nav className="container">
            <a className="brand" href="/"><span>◆</span><span>The Diamond Edge Co.</span></a>
            <span className="spacer"></span>
            <a href="/demo">Demo</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact" className="btn">Contact Us</a>
          </nav>
        </header>
        {children}
        <footer><div className="foot container"><div>© {new Date().getFullYear()} The Diamond Edge Co.</div><div><a href="mailto:team@diamondedge.co">team@diamondedge.co</a></div></div></footer>
        <script dangerouslySetInnerHTML={{__html:`(function(){const c=document.getElementById('stars');if(!c)return;const x=c.getContext('2d',{alpha:true});const D=Math.max(1,Math.min(2,devicePixelRatio||1));let W,H,S=[],t=0;function R(){W=c.clientWidth=innerWidth;H=c.clientHeight=innerHeight;c.width=W*D;c.height=H*D;x.setTransform(D,0,0,D,0,0);X()}function X(){const d=0.00028,n=Math.floor(W*H*d);S=Array.from({length:n},()=>{const r=Math.random();let col='rgba(255,255,255,1)';if(r<0.08)col='rgba(228,114,42,1)';else if(r<0.16)col='rgba(122,162,255,1)';return{x:Math.random()*W,y:Math.random()*H,vx:(Math.random()*0.12+0.03)*(Math.random()<0.5?1:-1),vy:(Math.random()*0.08+0.02)*(Math.random()<0.5?1:-1),z:Math.random()*0.9+0.1,r:Math.random()*1.2+0.25,c:col}})}function F(){t++;x.clearRect(0,0,W,H);const tw=0.75+Math.sin(t*0.02)*0.12;for(const s of S){s.x+=s.vx*s.z*0.7;s.y+=s.vy*s.z*0.7;if(s.x<-5)s.x=W+5;if(s.x>W+5)s.x=-5;if(s.y<-5)s.y=H+5;if(s.y>H+5)s.y=-5;x.globalAlpha=Math.min(1,tw*(0.55+s.z*0.6));x.fillStyle=s.c;x.beginPath();x.arc(s.x,s.y,s.r*s.z,0,Math.PI*2);x.fill()}x.globalAlpha=1;requestAnimationFrame(F)}addEventListener('resize',R,{passive:true});R();F();})();`}}/>
      </body>
    </html>
  )
}
