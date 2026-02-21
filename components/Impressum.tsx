import React from 'react';

const Impressum: React.FC = () => {
  return (
    <div className="pt-40 pb-20 px-6 max-w-[1920px] mx-auto animate-[fadeIn_0.5s_ease-out]">
      {/* Page Header */}
      <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-normal leading-[0.85] text-stone-100 mb-20 tracking-tight">
        Impres<br />
        <span className="text-stone-600">sum.</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 border-t border-stone-800 pt-16">
        
        <div className="lg:col-span-8 lg:col-start-3 prose prose-invert prose-stone max-w-none">
            
            <h2 className="text-2xl font-serif text-stone-100 mb-6">Angaben gemäß § 5 TMG</h2>
            <p className="text-stone-300 font-light leading-relaxed mb-8">
                <strong>YANG Architektur & Energie</strong><br />
                Friedrichshof | Raboisen 32<br />
                20095 Hamburg | Deutschland
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-stone-500 mb-2">Vertreten durch</h3>
                    <p className="text-stone-300">Kai Yang</p>
                </div>
                <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-stone-500 mb-2">Kontakt</h3>
                    <p className="text-stone-300">
                        Telefon: +49(0)40 7569 3367<br />
                        E-Mail: info@y-architektur.de
                    </p>
                </div>
            </div>

            <div className="mb-12">
                <h3 className="text-sm font-bold uppercase tracking-widest text-stone-500 mb-2">Berufsbezeichnung</h3>
                <p className="text-stone-300">
                    Architekt (verliehen in der Bundesrepublik Deutschland)
                </p>
                <p className="text-stone-300">
                    Energieberater
                </p>
            </div>

            <div className="mb-12">
                <h3 className="text-sm font-bold uppercase tracking-widest text-stone-500 mb-2">Zuständige Kammer</h3>
                <p className="text-stone-300 mb-2">
                    Eintragung in die Hamburgische Architektenkammer
                </p>
                <p className="text-stone-300 mb-2">
                    Kamermitgliedsnummer: AL08736
                </p>
            </div>

            <div className="w-full h-px bg-stone-800 my-16"></div>

            <h2 className="text-2xl font-serif text-stone-100 mb-8">Haftungsausschluss (Disclaimer)</h2>

            <div className="space-y-8">
                <div>
                    <h4 className="text-lg font-serif text-stone-200 mb-2">Haftung für Inhalte</h4>
                    <p className="text-stone-400 text-sm leading-relaxed font-light">
                        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                    </p>
                </div>

                <div>
                    <h4 className="text-lg font-serif text-stone-200 mb-2">Haftung für Links</h4>
                    <p className="text-stone-400 text-sm leading-relaxed font-light">
                        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                    </p>
                </div>

                <div>
                    <h4 className="text-lg font-serif text-stone-200 mb-2">Urheberrecht</h4>
                    <p className="text-stone-400 text-sm leading-relaxed font-light">
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                    </p>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Impressum;