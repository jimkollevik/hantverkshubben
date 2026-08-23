import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import demoGif from '../demo_.gif'

const Arrow = () => <span aria-hidden="true">↘</span>

function WaitlistForm() {
  useEffect(() => {
    window.ml = window.ml || function (...args) {
      window.ml.q = window.ml.q || []
      window.ml.q.push(args)
    }

    if (!document.querySelector('script[data-mailerlite-universal]')) {
      const script = document.createElement('script')
      script.async = true
      script.src = 'https://assets.mailerlite.com/js/universal.js'
      script.dataset.mailerliteUniversal = 'true'
      document.head.appendChild(script)
    }

    window.ml('account', '2591581')

    const embed = document.querySelector('.ml-embedded[data-form="nLLuyZ"]')
    const localizeForm = () => {
      const input = embed?.querySelector('input[type="email"]')
      const button = embed?.querySelector('button[type="submit"]')
      if (input) input.placeholder = 'Din e-postadress'
      if (button && button.textContent.trim() !== 'Gå med i väntelistan') {
        button.textContent = 'Gå med i väntelistan'
      }
    }
    const observer = new MutationObserver(localizeForm)
    if (embed) observer.observe(embed, { childList: true, subtree: true })
    localizeForm()

    return () => observer.disconnect()
  }, [])

  return (
    <div className="mailerlite-form-shell">
      <div className="ml-embedded" data-form="nLLuyZ"></div>
    </div>
  )
}

function App() {
  return (
    <>
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="Hantverkshubben, startsida">
          <span className="brand-mark">H</span><span>Hantverkshubben</span>
        </a>
        <a className="nav-link" href="#vantelista">Väntelistan <Arrow /></a>
      </header>

      <main id="top">
        <section className="hero shell">
          <div className="eyebrow"><span></span> För hantverkare som hellre jobbar</div>
          <h1>Du ska göra jobbet.<br /><em>Inte sitta med administrationen.</em></h1>
          <div className="hero-bottom">
            <div>
              <a className="button" href="#vantelista">Gå med i väntelistan <Arrow /></a>
              <small>Under utveckling. Bli en av de första som testar.</small>
            </div>
            <p>Hantverkshubben hjälper dig att fånga det som händer under arbetsdagen och göra administrationen enklare. Mindre tid på offerter, uppföljning och att hålla allt i huvudet.</p>
          </div>
        </section>

        <section className="problem section-pad">
          <div className="shell split">
            <div>
              <span className="section-number">01 / VARDAGEN</span>
              <h2>Jobbet är klart.<br />Administrationen är det inte.</h2>
            </div>
            <div className="story">
              <p>En kund ringde när du stod mitt i ett jobb.</p>
              <p>En annan väntar på en offert.</p>
              <p>Någon skickade måtten på sms.</p>
              <p>Bilderna från dagens jobb ligger i telefonen.</p>
              <p>Och det där du skulle komma ihåg att följa upp?<br /><strong>Det ligger fortfarande i huvudet.</strong></p>
              <div className="story-end">Informationen finns överallt. Och till slut är det du som måste få ihop allt.<br /><span>Ofta när arbetsdagen egentligen redan är slut.</span></div>
            </div>
          </div>
        </section>

        <section className="turn section-pad shell">
          <span className="section-number">02 / ETT ENKLARE SÄTT</span>
          <h2>Berätta vad som hände.<br /><em>Vi tar det därifrån.</em></h2>
          <blockquote>“Var hos Andersson idag. De vill måla om vardagsrummet och hallen. Material blir ungefär 8 000 kronor och jag tror jobbet tar två dagar.”</blockquote>
          <p className="release">Och sedan släppa det.</p>
        </section>

        <section className="product section-pad">
          <div className="shell">
            <div className="product-head">
              <div><span className="section-number">03 / HANTVERKSHUBBEN</span><h2>Från berättat<br />till användbart.</h2></div>
              <p>Prata eller skriv direkt när informationen är färsk. Hantverkshubben hjälper dig att strukturera den och göra den användbar.</p>
            </div>
            <div className="gif-frame">
              <div className="media-label"><span>Produktdemo</span><span>01—04</span></div>
              <img src={demoGif} alt="Animerad demonstration av hur Hantverkshubben tar emot och strukturerar information från ett jobb" />
            </div>
            <p className="supporting-label">Informationen blir strukturerad och användbar</p>
            <div className="demo-frame supporting-demo" aria-label="Visualisering av strukturerad information i Hantverkshubben">
              <div className="demo-top"><span className="demo-logo">H</span><span>Ny anteckning</span><i></i><i></i></div>
              <div className="demo-body">
                <div className="voice-card">
                  <div className="wave"><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b></div>
                  <span>00:18</span>
                </div>
                <div className="processing"><span>Informationen struktureras</span><i></i></div>
                <div className="outputs">
                  <div><span>01</span><strong>Offertunderlag</strong><small>Vardagsrum & hall</small></div>
                  <div><span>02</span><strong>Kundinformation</strong><small>Andersson</small></div>
                  <div><span>03</span><strong>Uppföljning</strong><small>Offert denna vecka</small></div>
                </div>
              </div>
            </div>
            <div className="flow" aria-label="Prata, strukturera, klart"><span>Prata</span><b>→</b><span>Strukturera</span><b>→</b><span>Klart</span></div>
            <p className="examples">Offertunderlag · Kundinformation · Uppgifter · Uppföljningar · Fakturaunderlag</p>
          </div>
        </section>

        <section className="result section-pad shell">
          <span className="section-number">04 / RESULTATET</span>
          <div className="result-grid">
            <h2>Mindre tid på admin.<br /><em>Mer tid på jobbet.</em></h2>
            <div>
              <p>Hantverkshubben handlar inte om att ge dig ännu ett system att administrera.</p>
              <p>Tvärtom. Du ska behöva göra <strong>mindre.</strong></p>
              <ul><li>Färre saker att komma ihåg.</li><li>Mindre kvällsadministration.</li><li>Mindre information utspridd överallt.</li></ul>
              <p className="paid">Mer tid till jobbet du faktiskt får betalt för.</p>
            </div>
          </div>
        </section>

        <section className="waitlist" id="vantelista">
          <div className="shell waitlist-inner">
            <span className="section-number">05 / VAR MED FRÅN BÖRJAN</span>
            <h2>Vi bygger<br />Hantverkshubben nu.</h2>
            <p>Vi börjar med små hantverksföretag och bygger ett enklare sätt att hantera administrationen runt jobbet. Vill du vara en av de första som testar?</p>
            <WaitlistForm />
            <small>Ingen spam. Vi hör av oss när vi har något värt att visa.</small>
          </div>
        </section>
      </main>
      <footer className="shell"><a className="brand" href="#top"><span className="brand-mark">H</span><span>Hantverkshubben</span></a><span>© 2026 Hantverkshubben</span></footer>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
