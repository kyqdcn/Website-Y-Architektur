import React from 'react';

const Datenschutz: React.FC = () => {
  return (
    <div className="pt-40 pb-20 px-6 max-w-[1920px] mx-auto animate-[fadeIn_0.5s_ease-out]">
      {/* Page Header */}
      <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-normal leading-[0.85] text-stone-100 mb-20 tracking-tight">
        Daten<br />
        <span className="text-stone-600">schutz.</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 border-t border-stone-800 pt-16">
        
        <div className="lg:col-span-8 lg:col-start-3 prose prose-invert prose-stone max-w-none">
            
            <h2 className="text-2xl font-serif text-stone-100 mb-6">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-lg font-serif text-stone-200 mt-8 mb-4">Allgemeine Hinweise</h3>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>

            <h3 className="text-lg font-serif text-stone-200 mt-8 mb-4">Datenerfassung auf dieser Website</h3>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br/>
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
                <strong>Wie erfassen wir Ihre Daten?</strong><br/>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.<br/>
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie die Website betreten.
            </p>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
                <strong>Wofür nutzen wir Ihre Daten?</strong><br/>
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>

            <div className="w-full h-px bg-stone-800 my-12"></div>

            <h2 className="text-2xl font-serif text-stone-100 mb-6">2. Hosting</h2>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
                Wir hosten die Inhalte unserer Website bei einem externen Anbieter (Hoster). Personenbezogene Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
            </p>

            <div className="w-full h-px bg-stone-800 my-12"></div>

            <h2 className="text-2xl font-serif text-stone-100 mb-6">3. Allgemeine Hinweise und Pflichtinformationen</h2>

            <h3 className="text-lg font-serif text-stone-200 mt-8 mb-4">Datenschutz</h3>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <h3 className="text-lg font-serif text-stone-200 mt-8 mb-4">Hinweis zur verantwortlichen Stelle</h3>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br/><br/>
                YANG Architektur & Energie<br/>
                Friedrichshof | Raboisen 32<br/>
                20095 Hamburg | Deutschland<br/><br/>
                Telefon: +49(0)40 7569 3367<br/>
                E-Mail: info@y-architektur.de
            </p>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
            </p>

            <h3 className="text-lg font-serif text-stone-200 mt-8 mb-4">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>

            <h3 className="text-lg font-serif text-stone-200 mt-8 mb-4">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes.
            </p>

            <h3 className="text-lg font-serif text-stone-200 mt-8 mb-4">Recht auf Datenübertragbarkeit</h3>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.
            </p>

            <h3 className="text-lg font-serif text-stone-200 mt-8 mb-4">SSL- bzw. TLS-Verschlüsselung</h3>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>

            <div className="w-full h-px bg-stone-800 my-12"></div>

            <h2 className="text-2xl font-serif text-stone-100 mb-6">4. Datenerfassung auf dieser Website</h2>

            <h3 className="text-lg font-serif text-stone-200 mt-8 mb-4">Kontaktformular</h3>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
            </p>

            <h3 className="text-lg font-serif text-stone-200 mt-8 mb-4">Google Fonts</h3>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
               Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
            </p>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
               Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse diese Website aufgerufen wurde. Die Nutzung von Google WebFonts erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der einheitlichen Darstellung des Schriftbildes auf seiner Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.
            </p>

        </div>
      </div>
    </div>
  );
};

export default Datenschutz;