'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

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
    <div className="min-h-screen bg-white text-black">
      <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-6 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_icon-5NjmAzNPZ9T9SNxq9RqGv3QE3uzp2R.png"
                  alt="DnD Logo"
                  fill
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
        <h1 className="text-3xl font-bold mb-6">Datenschutz</h1>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Datenschutzerklärung</h2>
          <p>
            Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten (nachfolgend kurz &quot;Daten&quot;) im Rahmen der Erbringung unserer Leistungen sowie innerhalb unseres Onlineangebotes und der mit ihm verbundenen Webseiten, Funktionen und Inhalte sowie externen Onlinepräsenzen, wie z.B. unser Social Media Profile auf (nachfolgend gemeinsam bezeichnet als &quot;Onlineangebot&quot;). Im Hinblick auf die verwendeten Begrifflichkeiten, wie z.B. &quot;Verarbeitung&quot; oder &quot;Verantwortlicher&quot; verweisen wir auf die Definitionen im Art. 4 der Datenschutzgrundverordnung (DSGVO).
          </p>

          <h3 className="text-xl font-bold">Verantwortlicher</h3>
          <p>
            André Bielenberg<br />
            Adresse: Fahrstedter Mühle, 25709 Diekhusen-Fahrstedt<br />
            Telefon: 01575 4880900<br />
            E-Mail: dddeinblasdaemmung@gmail.com<br />
            Website: www.ddddämmung.de
          </p>

          <h3 className="text-xl font-bold">Arten der verarbeiteten Daten</h3>
          <ul className="list-disc pl-5">
            <li>Bestandsdaten (z.B., Personen-Stammdaten, Namen oder Adressen).</li>
            <li>Kontaktdaten (z.B., E-Mail, Telefonnummern).</li>
            <li>Inhaltsdaten (z.B., Texteingaben, Fotografien, Videos).</li>
            <li>Nutzungsdaten (z.B., besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten).</li>
            <li>Meta-/Kommunikationsdaten (z.B., Geräte-Informationen, IP-Adressen).</li>
          </ul>

          <h3 className="text-xl font-bold">Kategorien betroffener Personen</h3>
          <p>
            Besucher und Nutzer des Onlineangebotes (Nachfolgend bezeichnen wir die betroffenen Personen zusammenfassend auch als &quot;Nutzer&quot;).
          </p>

          <h3 className="text-xl font-bold">Zweck der Verarbeitung</h3>
          <ul className="list-disc pl-5">
            <li>Zurverfügungstellung des Onlineangebotes, seiner Funktionen und Inhalte.</li>
            <li>Beantwortung von Kontaktanfragen und Kommunikation mit Nutzern.</li>
            <li>Sicherheitsmaßnahmen.</li>
            <li>Reichweitenmessung/Marketing</li>
          </ul>

          <h3 className="text-xl font-bold">Verwendete Begrifflichkeiten</h3>
          <p>
            &quot;Personenbezogene Daten&quot; sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden &quot;betroffene Person&quot;) beziehen; als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung (z.B. Cookie) oder zu einem oder mehreren besonderen Merkmalen identifiziert werden kann, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind.
          </p>
          <p>
            &quot;Verarbeitung&quot; ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten. Der Begriff reicht weit und umfasst praktisch jeden Umgang mit Daten.
          </p>
          <p>
            &quot;Pseudonymisierung&quot; die Verarbeitung personenbezogener Daten in einer Weise, dass die personenbezogenen Daten ohne Hinzuziehung zusätzlicher Informationen nicht mehr einer spezifischen betroffenen Person zugeordnet werden können, sofern diese zusätzlichen Informationen gesondert aufbewahrt werden und technischen und organisatorischen Maßnahmen unterliegen, die gewährleisten, dass die personenbezogenen Daten nicht einer identifizierten oder identifizierbaren natürlichen Person zugewiesen werden.
          </p>
          <p>
            &quot;Profiling&quot; jede Art der automatisierten Verarbeitung personenbezogener Daten, die darin besteht, dass diese personenbezogenen Daten verwendet werden, um bestimmte persönliche Aspekte, die sich auf eine natürliche Person beziehen, zu bewerten, insbesondere um Aspekte bezüglich Arbeitsleistung, wirtschaftliche Lage, Gesundheit, persönliche Vorlieben, Interessen, Zuverlässigkeit, Verhalten, Aufenthaltsort oder Ortswechsel dieser natürlichen Person zu analysieren oder vorherzusagen.
          </p>
          <p>
            Als &quot;Verantwortlicher&quot; wird die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet, bezeichnet.
          </p>
          <p>
            &quot;Auftragsverarbeiter&quot; eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet.
          </p>

          <h3 className="text-xl font-bold">Maßgebliche Rechtsgrundlagen</h3>
          <p>
            Nach Maßgabe des Art. 13 DSGVO teilen wir Ihnen die Rechtsgrundlagen unserer Datenverarbeitungen mit. Für Nutzer aus dem Geltungsbereich der Datenschutzgrundverordnung (DSGVO), d.h. der EU und des EWG gilt, sofern die Rechtsgrundlage in der Datenschutzerklärung nicht genannt wird, Folgendes:
          </p>
          <ul className="list-disc pl-5">
            <li>Die Rechtsgrundlage für die Einholung von Einwilligungen ist Art. 6 Abs. 1 lit. a und Art. 7 DSGVO;</li>
            <li>Die Rechtsgrundlage für die Verarbeitung zur Erfüllung unserer Leistungen und Durchführung vertraglicher Maßnahmen sowie Beantwortung von Anfragen ist Art. 6 Abs. 1 lit. b DSGVO;</li>
            <li>Die Rechtsgrundlage für die Verarbeitung zur Erfüllung unserer rechtlichen Verpflichtungen ist Art. 6 Abs. 1 lit. c DSGVO;</li>
            <li>Für den Fall, dass lebenswichtige Interessen der betroffenen Person oder einer anderen natürlichen Person eine Verarbeitung personenbezogener Daten erforderlich machen, dient Art. 6 Abs. 1 lit. d DSGVO als Rechtsgrundlage.</li>
            <li>Die Rechtsgrundlage für die erforderliche Verarbeitung zur Wahrnehmung einer Aufgabe, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde ist Art. 6 Abs. 1 lit. e DSGVO.</li>
            <li>Die Rechtsgrundlage für die Verarbeitung zur Wahrung unserer berechtigten Interessen ist Art. 6 Abs. 1 lit. f DSGVO.</li>
            <li>Die Verarbeitung von Daten zu anderen Zwecken als denen, zu denen sie ehoben wurden, bestimmt sich nach den Vorgaben des Art 6 Abs. 4 DSGVO.</li>
            <li>Die Verarbeitung von besonderen Kategorien von Daten (entsprechend Art. 9 Abs. 1 DSGVO) bestimmt sich nach den Vorgaben des Art. 9 Abs. 2 DSGVO.</li>
          </ul>

          <h3 className="text-xl font-bold">Sicherheitsmaßnahmen</h3>
          <p>
            Wir treffen nach Maßgabe der gesetzlichen Vorgabenunter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeit und Schwere des Risikos für die Rechte und Freiheiten natürlicher Personen, geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.
          </p>
          <p>
            Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen Zugangs zu den Daten, als auch des sie betreffenden Zugriffs, der Eingabe, Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, Löschung von Daten und Reaktion auf Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei der Entwicklung, bzw. Auswahl von Hardware, Software sowie Verfahren, entsprechend dem Prinzip des Datenschutzes durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen.
          </p>

          <h3 className="text-xl font-bold">Zusammenarbeit mit Auftragsverarbeitern, gemeinsam Verantwortlichen und Dritten</h3>
          <p>
            Sofern wir im Rahmen unserer Verarbeitung Daten gegenüber anderen Personen und Unternehmen (Auftragsverarbeitern, gemeinsam Verantwortlichen oder Dritten) offenbaren, sie an diese übermitteln oder ihnen sonst Zugriff auf die Daten gewähren, erfolgt dies nur auf Grundlage einer gesetzlichen Erlaubnis (z.B. wenn eine Übermittlung der Daten an Dritte, wie an Zahlungsdienstleister, zur Vertragserfüllung erforderlich ist), Nutzer eingewilligt haben, eine rechtliche Verpflichtung dies vorsieht oder auf Grundlage unserer berechtigten Interessen (z.B. beim Einsatz von Beauftragten, Webhostern, etc.).
          </p>
          <p>
            Sofern wir Daten anderen Unternehmen unserer Unternehmensgruppe offenbaren, übermitteln oder ihnen sonst den Zugriff gewähren, erfolgt dies insbesondere zu administrativen Zwecken als berechtigtes Interesse und darüberhinausgehend auf einer den gesetzlichen Vorgaben entsprechenden Grundlage.
          </p>

          <h3 className="text-xl font-bold">Übermittlungen in Drittländer</h3>
          <p>
            Sofern wir Daten in einem Drittland (d.h. außerhalb der Europäischen Union (EU), des Europäischen Wirtschaftsraums (EWR) oder der Schweizer Eidgenossenschaft) verarbeiten oder dies im Rahmen der Inanspruchnahme von Diensten Dritter oder Offenlegung, bzw. Übermittlung von Daten an andere Personen oder Unternehmen geschieht, erfolgt dies nur, wenn es zur Erfüllung unserer (vor)vertraglichen Pflichten, auf Grundlage Ihrer Einwilligung, aufgrund einer rechtlichen Verpflichtung oder auf Grundlage unserer berechtigten Interessen geschieht. Vorbehaltlich gesetzlicher oder vertraglicher Erlaubnisse, verarbeiten oder lassen wir die Daten in einem Drittland nur beim Vorliegen der gesetzlichen Voraussetzungen. D.h. die Verarbeitung erfolgt z.B. auf Grundlage besonderer Garantien, wie der offiziell anerkannten Feststellung eines der EU entsprechenden Datenschutzniveaus (z.B. für die USA durch das &quot;Privacy Shield&quot;) oder Beachtung offiziell anerkannter spezieller vertraglicher Verpflichtungen.
          </p>

          <h3 className="text-xl font-bold">Rechte der betroffenen Personen</h3>
          <p>
            Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend den gesetzlichen Vorgaben.
          </p>
          <p>
            Sie haben entsprechend. den gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.
          </p>
          <p>
            Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht zu verlangen, dass betreffende Daten unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben eine Einschränkung der Verarbeitung der Daten zu verlangen.
          </p>
          <p>
            Sie haben das Recht zu verlangen, dass die Sie betreffenden Daten, die Sie uns bereitgestellt haben nach Maßgabe der gesetzlichen Vorgaben zu erhalten und deren Übermittlung an andere Verantwortliche zu fordern.
          </p>
          <p>
            Sie haben ferner nach Maßgabe der gesetzlichen Vorgaben das Recht, eine Beschwerde bei der zuständigen Aufsichtsbehörde einzureichen.
          </p>

          <h3 className="text-xl font-bold">Widerrufsrecht</h3>
          <p>
            Sie haben das Recht, erteilte Einwilligungen mit Wirkung für die Zukunft zu widerrufen.
          </p>

          <h3 className="text-xl font-bold">Widerspruchsrecht</h3>
          <p>
            Sie können der künftigen Verarbeitung der Sie betreffenden Daten nach Maßgabe der gesetzlichen Vorgaben jederzeit widersprechen. Der Widerspruch kann insbesondere gegen die Verarbeitung für Zwecke der Direktwerbung erfolgen.
          </p>

          <h3 className="text-xl font-bold">Cookies und Widerspruchsrecht bei Direktwerbung</h3>
          <p>
            Als &quot;Cookies&quot; werden kleine Dateien bezeichnet, die auf Rechnern der Nutzer gespeichert werden. Innerhalb der Cookies können unterschiedliche Angaben gespeichert werden. Ein Cookie dient primär dazu, die Angaben zu einem Nutzer (bzw. dem Gerät auf dem das Cookie gespeichert ist) während oder auch nach seinem Besuch innerhalb eines Onlineangebotes zu speichern. Als temporäre Cookies, bzw. &quot;Session-Cookies&quot; oder &quot;transiente Cookies&quot;, werden Cookies bezeichnet, die gelöscht werden, nachdem ein Nutzer ein Onlineangebot verlässt und seinen Browser schließt. In einem solchen Cookie kann z.B. der Inhalt eines Warenkorbs in einem Onlineshop oder ein Login-Status gespeichert werden. Als &quot;permanent&quot; oder &quot;persistent&quot; werden Cookies bezeichnet, die auch nach dem Schließen des Browsers gespeichert bleiben. So kann z.B. der Login-Status gespeichert werden, wenn die Nutzer diese nach mehreren Tagen aufsuchen. Ebenso können in einem solchen Cookie die Interessen der Nutzer gespeichert werden, die für Reichweitenmessung oder Marketingzwecke verwendet werden. Als &quot;Third-Party-Cookie&quot; werden Cookies bezeichnet, die von anderen Anbietern als dem Verantwortlichen, der das Onlineangebot betreibt, angeboten werden (andernfalls, wenn es nur dessen Cookies sind spricht man von &quot;First-Party Cookies&quot;).
          </p>
          <p>
            Wir können temporäre und permanente Cookies einsetzen und klären hierüber im Rahmen unserer Datenschutzerklärung auf.
          </p>
          <p>
            Falls die Nutzer nicht möchten, dass Cookies auf ihrem Rechner gespeichert werden, werden sie gebeten die entsprechende Option in den Systemeinstellungen ihres Browsers zu deaktivieren. Gespeicherte Cookies können in den Systemeinstellungen des Browsers gelöscht werden. Der Ausschluss von Cookies kann zu Funktionseinschränkungen dieses Onlineangebotes führen.
          </p>
          <p>
            Ein genereller Widerspruch gegen den Einsatz der zu Zwecken des Onlinemarketing eingesetzten Cookies kann bei einer Vielzahl der Dienste, vor allem im Fall des Trackings, über die US-amerikanische Seite http://www.aboutads.info/choices/ oder die EU-Seite http://www.youronlinechoices.com/ erklärt werden. Des Weiteren kann die Speicherung von Cookies mittels deren Abschaltung in den Einstellungen des Browsers erreicht werden. Bitte beachten Sie, dass dann gegebenenfalls nicht alle Funktionen dieses Onlineangebotes genutzt werden können.
          </p>

          <h3 className="text-xl font-bold">Löschung von Daten</h3>
          <p>
            Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen Vorgaben gelöscht oder in ihrer Verarbeitung eingeschränkt. Sofern nicht im Rahmen dieser Datenschutzerklärung ausdrücklich angegeben, werden die bei uns gespeicherten Daten gelöscht, sobald sie für ihre Zweckbestimmung nicht mehr erforderlich sind und der Löschung keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
          </p>
          <p>
            Sofern die Daten nicht gelöscht werden, weil sie für andere und gesetzlich zulässige Zwecke erforderlich sind, wird deren Verarbeitung eingeschränkt. D.h. die Daten werden gesperrt und nicht für andere Zwecke verarbeitet. Das gilt z.B. für Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen.
          </p>

          <h3 className="text-xl font-bold">Änderungen und Aktualisierungen der Datenschutzerklärung</h3>
          <p>
            Wir bitten Sie sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu informieren. Wir passen die Datenschutzerklärung an, sobald die Änderungen der von uns durchgeführten Datenverarbeitungen dies erforderlich machen. Wir informieren Sie, sobald durch die Änderungen eine Mitwirkungshandlung Ihrerseits (z.B. Einwilligung) oder eine sonstige individuelle Benachrichtigung erforderlich wird.
          </p>

          <h3 className="text-xl font-bold">Geschäftsbezogene Verarbeitung</h3>
          <p>
            Zusätzlich verarbeiten wir
          </p>
          <ul className="list-disc pl-5">
            <li>Vertragsdaten (z.B., Vertragsgegenstand, Laufzeit, Kundenkategorie).</li>
            <li>Zahlungsdaten (z.B., Bankverbindung, Zahlungshistorie)</li>
          </ul>
          <p>
            von unseren Kunden, Interessenten und Geschäftspartner zwecks Erbringung vertraglicher Leistungen, Service und Kundenpflege, Marketing, Werbung und Marktforschung.
          </p>

          <p className="mt-8">
            Erstellt mit Datenschutz-Generator.de von RA Dr. Thomas Schwenke
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
  )
}