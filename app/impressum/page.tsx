"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Head from 'next/head'

export default function Datenschutz() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const openWhatsApp = () => {
    window.open('https://wa.me/4915754880900', '_blank')
  }

  return (
    <>
      <Head>
        <title>Datenschutz - Einblasdämmung</title>
        <meta name="description" content="Datenschutzerklärung für Einblasdämmung" />
      </Head>
      <div className="min-h-screen bg-white text-black">
        <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
          <div className="container mx-auto p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-6 relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_icon-5NjmAzNPZ9T9SNxq9RqGv3QE3uzp2R.png"
                    alt="DnD Logo"
                    layout="fill"
                    objectFit="contain"
                    className="object-contain"
                  />
                </div>
                <Link href="/" className="text-xl font-bold">Einblasdämmung</Link>
              </div>
              <div className="hidden md:flex items-center">
                <button onClick={openWhatsApp} className="flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-label="Kontaktieren Sie uns via WhatsApp">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/whatsapp_3536445-p3Rf1l56PaOlztifaFNu3yQ1qXBROo.png"
                    alt="WhatsApp"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  <span className="text-blue-600 hover:underline">01575 - 4880900</span>
                </button>
              </div>
              <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white p-4">
              <div className="flex flex-col items-center space-y-4">
                <Link href="/impressum" className="text-black hover:underline">Impressum</Link>
                <Link href="/datenschutz" className="text-black hover:underline">Datenschutz</Link>
              </div>
            </div>
          )}
        </header>

        <main className="container mx-auto p-4 mt-8">
          <h1 className="text-3xl font-bold mb-6">Impressum</h1>
          <div className="space-y-4">
            <p><strong>Angaben gemäß § 5 TMG</strong></p>
            <p>
              André Bielenberg<br />
              Adresse: Fahrstedter Mühle, 25709 Diekhusen-Fahrstedt<br />
              Telefon: 01575 4880900<br />
              E-Mail: dddeinblasdaemmung@gmail.com<br />
              Website: www.ddddämmung.de
            </p>
            <p><strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong></p>
            <p>
              André Bielenberg<br />
              Adresse: Fahrstedter Mühle, 25709 Diekhusen-Fahrstedt
            </p>
            <p><strong>Umsatzsteuer-ID:</strong></p>
            <p>Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: Umsatzsteuer ID: XXX</p>

            <h2 className="text-2xl font-bold mt-6 mb-4">Haftungsausschluss:</h2>
            <h3 className="text-xl font-bold mt-4 mb-2">Haftung für Inhalte</h3>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>

            <h3 className="text-xl font-bold mt-4 mb-2">Haftung für Links</h3>
            <p>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>

            <h3 className="text-xl font-bold mt-4 mb-2">Urheberrecht</h3>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </div>
        </main>

        <footer className="bg-black text-white py-4 mt-8">
          <div className="container mx-auto p-4 text-center">
            <p className="mb-2">&copy; 2024 Einblasdämmung. Alle Rechte vorbehalten.</p>
            <div className="text-sm space-x-4">
              <Link href="/impressum" className="text-white hover:underline">Impressum</Link>
              <Link href="/datenschutz" className="text-white hover:underline">Datenschutz</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}