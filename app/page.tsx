"use client"

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Menu, X } from 'lucide-react'

interface Logo {
  image: string;
  url: string;
 
}

interface LogoSliderProps {
  logos: Logo[];
}

const LogoSlider = ({ logos }: LogoSliderProps) => {
  const [position, setPosition] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const animateScroll = () => {
      setPosition((prevPosition) => {
        if (prevPosition <= -100) {
          return 0;
        }
        return prevPosition - 0.125; // Very slow movement
      });
    };

    const intervalId = setInterval(animateScroll, 30);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div 
        ref={sliderRef} 
        className="flex transition-transform duration-300 ease-linear"
        style={{ transform: `translateX(${position}%)` }}
      >
        {[...logos, ...logos.slice(0, 3)].map((logo, index) => (
          <div key={index} className="flex-shrink-0 w-1/3">
            <a href={logo.url} target="_blank" rel="noopener noreferrer">
              <img
                src={logo.image}
                alt={`Logo ${index + 1}`}
                className="h-16 mx-auto object-contain"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    fassade: false,
    dachboden: false,
    mauerwerk: false,
    dachschraege: false,
    drempel: false,
    name: '',
    postleitzahl: '',
    email: '',
    telefon: '',
    beschreibung: ''
  })

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

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? e.target.checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent('Neue Anfrage für Einblasdämmung')
    const body = encodeURIComponent(`
      Dämmungsbereiche:
      ${formData.fassade ? '- Fassade\n' : ''}
      ${formData.dachboden ? '- Dachboden\n' : ''}
      ${formData.mauerwerk ? '- Mauerwerk\n' : ''}
      ${formData.dachschraege ? '- Dachschräge\n' : ''}
      ${formData.drempel ? '- Drempel\n' : ''}

      Name: ${formData.name}
      Postleitzahl: ${formData.postleitzahl}
      E-Mail: ${formData.email}
      Telefon: ${formData.telefon}

      Beschreibung:
      ${formData.beschreibung}
    `)
    window.location.href = `mailto:dddeinblasdaemmung@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
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
              <span className="text-xl font-bold">Einblasdämmung</span>
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

      <main className="flex-grow">
        <section className="relative bg-white">
          <div className="absolute inset-0 z-0 h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HWBild-bZA5vtHmbNfcvFMtXCybndbmOmXCO3.jpeg"
              alt="Einblasdämmung bei Sonnenuntergang"
              layout="fill"
              objectFit="cover"
              className="opacity-10 transform scale-x-[-1]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
          </div>
          <div className="container mx-auto p-4 grid md:grid-cols-2 gap-8 items-center relative z-10 min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)]">
            <div>
              <h1 className="text-4xl font-bold mb-4">Jetzt Fassade & Dach dämmen mit Einblasdämmung</h1>
              <div className="md:hidden mb-4">
                <button onClick={openWhatsApp} className="flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-label="Kontaktieren Sie uns via WhatsApp">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/whatsapp_3536445-p3Rf1l56PaOlztifaFNu3yQ1qXBROo.png"
                    alt="WhatsApp"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  <span className="text-black hover:underline text-2xl">01575 - 4880900</span>
                </button>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2 text-[#FF0000]">✓</span> 20% staatliche Förderung
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[#FF0000]">✓</span> Heizkosten sparen
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[#FF0000]">✓</span> Jetzt Angebot unverbindlich anfordern
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bild2-uApGbOblWUQKSiQLKQ9A4mRhZwDi6j.png"
                alt="Einblasdämmung Equipment"
                width={300}
                height={300}
                className="rounded-lg object-cover w-full h-full"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bild1-IwOhy1UFZNiOqxHOUGBHDCnexfNMWg.png"
                alt="Einblasdämmung Installation"
                width={300}
                height={300}
                className="rounded-lg object-cover w-full h-full"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bild3-UUdX0R44kGafBtK9nyf0bmmjUtSilB.png"
                alt="Einblasdämmung Dachinstallation"
                width={300}
                height={300}
                className="rounded-lg object-cover w-full h-full"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-10-07%20at%2014.58.03%20(1)-K0It7hmhb1EgjGTTwK1rHU26txLzov.jpeg"
                alt="Einblasdämmung Anwendung"
                width={300}
                height={300}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#FF0000] text-white py-8">
          <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Hier kostenloses & unverbindliches Beratungsgespräch anfragen oder unter 01575 - 4880900 anrufen</h2>
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-black">Was möchten Sie dämmen?</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: 'fassade', label: 'Fassade' },
                        { id: 'dachboden', label: 'Dachboden' },
                        { id: 'mauerwerk', label: 'Mauerwerk' },
                        { id: 'dachschraege', label: 'Dachschräge' },
                        { id: 'drempel', label: 'Drempel' }
                      ].map((item) => (
                        <div key={item.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={item.id}
                            name={item.id}
                            checked={formData[item.id]}
                            onCheckedChange={(checked) => setFormData(prev => ({ ...prev, [item.id]: checked }))}
                          />
                          <Label htmlFor={item.id} className="text-black">{item.label}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-black">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Name"
                        className="bg-white text-black"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="postleitzahl" className="text-black">Postleitzahl *</Label>
                      <Input
                        id="postleitzahl"
                        name="postleitzahl"
                        type="text"
                        placeholder="Postleitzahl"
                        className="bg-white text-black"
                        value={formData.postleitzahl}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-black">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="email@beispiel.de"
                        className="bg-white text-black"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="telefon" className="text-black">Telefonnummer *</Label>
                      <Input
                        id="telefon"

                        name="telefon"
                        type="tel"
                        placeholder="01575 12345678"
                        className="bg-white text-black"
                        value={formData.telefon}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="beschreibung" className="text-black">Beschreiben Sie Ihr Vorhaben</Label>
                    <Textarea
                      id="beschreibung"
                      name="beschreibung"
                      placeholder="Dämmung der Fassade, Dach dämmen, etc..."
                      className="bg-white text-black"
                      value={formData.beschreibung}
                      onChange={handleInputChange}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-[#FF0000] hover:bg-[#CC0000] text-white">Absenden</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="max-w-4xl mx-auto my-8">
          <h2 className="text-2xl font-bold text-center mb-4">
            Zertifizierter Fachbetrieb für Einblasdämmung
          </h2>
          <div className="w-full max-w-lg mx-auto py-4">
            <LogoSlider logos={[
              {
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Knauf-Logo-b00AHQ4JO4HmBftnrzHYQR19FRPxfM.png",
                url: "https://knauf.com/de-DE"
              },
              {
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ISO_Stroh-xmamUETGmwikcBaZMlRhCcIN1Ghk3S.png",
                url: "https://www.iso-stroh.ch/"
              },
              {
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-11%20024231-qnETrMi0ReeMy5WxbzzbvAZ77y5eOU.png",
                url: "https://www.iso-chemie.eu/de/"
              }
            ]} />
          </div>
        </section>

        <section className="bg-gray-100 py-8">
          <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Das Einblasdämmung Prinzip</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-4xl font-bold text-[#FF0000] mr-2">1</span>
                    <h3 className="text-xl font-semibold">Kostenlose Beratung</h3>
                  </div>
                  <p>Jetzt anrufen: Unverbindliche Beratung & Angebot bekommen in wenigen Minuten</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-4xl font-bold text-[#FF0000] mr-2">2</span>
                    <h3 className="text-xl font-semibold">Vor-Ort Inspektion</h3>
                  </div>
                  <p>Komplett kostenlos: Vor-Ort Inspektion Ihres Haus und maßgeschneiderte Planung</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-4xl font-bold text-[#FF0000] mr-2">3</span>
                    <h3 className="text-xl font-semibold">Installation</h3>
                  </div>
                  <p>Professionelle Installation und Heizkosten sparen sowie Heizkostenzuschuss genießen</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="container mx-auto p-4 my-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Top Bewertungen für unseren Service</h2>
          <div className="flex justify-center items-center space-x-2">
            <div className="text-2xl font-bold">4.7</div>
            <div className="text-yellow-400">★★★★★</div>
            <div>(Google Bewertungen)</div>
          </div>
        </section>

        <section className="bg-gray-100 py-8">
          <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">FAQ - Häufig gestellte Fragen</h2>
            <div className="space-y-4">
              <details className="bg-white p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer">Welche Bauteile können gedämmt werden?</summary>
                <p className="mt-2">Mit der Einblasdämmung können verschiedene Bauteile effektiv gedämmt werden, darunter Dachschrägen, Hohlräume in Wänden, Geschossdecken und Holzbalkendecken. Diese Methode ist besonders geeignet für schwer zugängliche Bereiche.</p>
              </details>
              <details className="bg-white p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer">Was ist der Kostenvorteil von Einblasdämmung für Dach und Fassade?</summary>
                <p className="mt-2">Die Einblasdämmung ist oft kostengünstiger als herkömmliche Dämmverfahren, da sie schneller durchgeführt werden kann und weniger Arbeitskraft erfordert. Zudem können bestehende Strukturen meist erhalten bleiben, was zusätzliche Renovierungskosten spart.</p>
              </details>
              <details className="bg-white p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer">Mit wie viel Einsparung kann ich rechnen?</summary>
                <p className="mt-2">Die Einsparungen variieren je nach Gebäudezustand und Dämmumfang, liegen aber typischerweise zwischen 20% und 30% der Heizkosten. In einigen Fällen können sogar Einsparungen von bis zu 50% erreicht werden.</p>
              </details>
              <details className="bg-white p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer">Kann eine Dämmung der Fassade zu  Feuchteproblemen führen?</summary>
                <p className="mt-2">Bei fachgerechter Ausführung und Verwendung geeigneter Materialien führt eine Fassadendämmung in der Regel nicht zu Feuchteproblemen. Es ist wichtig, dass die Dämmung diffusionsoffen ist und eine ausreichende Belüftung gewährleistet wird.</p>
              </details>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-4">
        <div className="container mx-auto p-4 text-center">
          <p className="mb-2">&copy; 2024 Einblasdämmung. Alle Rechte vorbehalten.</p>
          <div className="text-sm space-x-4">
            <Link href="/impressum" className="text-white hover:underline">Impressum</Link>
            <Link href="/datenschutz" className="text-white hover:underline">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}