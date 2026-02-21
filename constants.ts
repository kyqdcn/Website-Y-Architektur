import { Project, NewsItem } from './types';

/**
 * ---------------------------------------------------------------------------------
 * ANLEITUNG ZUM BILDER-AUSTAUSCH (GITHUB / PERMANENT)
 * ---------------------------------------------------------------------------------
 * 
 * Damit deine Bilder auf der Webseite permanent sichtbar sind (auch auf Github),
 * musst du sie in den Ordner "public/images" legen.
 * 
 * SCHRITT 1:
 * Erstelle in deinem Projekt-Ordner folgende Struktur:
 * /public
 *    /images
 *       /mein-projekt-1.jpg
 *       /mein-projekt-2.jpg
 *       /logo.png
 * 
 * SCHRITT 2:
 * Ändere unten bei "imageUrl" den Pfad. 
 * Wenn dein Bild "haus.jpg" heißt, schreibe: imageUrl: '/images/haus.jpg'
 * 
 * (Hinweis: Das "public" im Pfad weglassen, nur "/images/..." schreiben)
 * ---------------------------------------------------------------------------------
 */

export const INITIAL_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'The Concrete Void',
    location: 'Kyoto, Japan',
    year: '2023',
    // Beispiel: So verlinkst du ein Bild aus public/images/
    // Bitte stelle sicher, dass project1.jpg wirklich existiert!
    // Wenn nicht, wird das Bild leer bleiben.
    imageUrl: '/images/project1.jpg', 
    description: 'Eine minimalistische Wohnstruktur, die das Zusammenspiel von Licht und Schatten in Betonvolumen fokussiert.',
    category: 'Wohnbau',
    // Beispiel für weitere Bilder in der Galerie:
    additionalImages: [
        '/images/project1-detail.jpg',
        '/images/project1-plan.jpg'
    ]
  },
  {
    id: '2',
    title: 'Azure Skyline Hub',
    location: 'Shanghai, China',
    year: '2022',
    // Wenn du noch keine eigenen Bilder hast, kannst du diese Platzhalter lassen:
    imageUrl: 'https://picsum.photos/600/800?random=2',
    description: 'Ein gewerblicher Mischnutzungsturm, entworfen für maximale natürliche Belüftung und vertikale Begrünung.',
    category: 'Gewerbe',
  },
  {
    id: '3',
    title: 'Nordic Retreat',
    location: 'Oslo, Norwegen',
    year: '2024',
    imageUrl: 'https://picsum.photos/800/800?random=3',
    description: 'Eine nachhaltige Holzhütte, die sich nahtlos in den umliegenden Kiefernwald einfügt.',
    category: 'Wohnbau',
  },
  {
    id: '4',
    title: 'Civic Center Pavilion',
    location: 'Berlin, Deutschland',
    year: '2021',
    imageUrl: 'https://picsum.photos/900/500?random=4',
    description: 'Ein öffentlicher Begegnungsraum unter freiem Himmel mit einem schwebenden geometrischen Vordach.',
    category: 'Öffentlich',
  },
  {
    id: '5',
    title: 'Gallery 105',
    location: 'New York, USA',
    year: '2023',
    imageUrl: 'https://picsum.photos/500/800?random=5',
    description: 'Umnutzung eines Industrielagers in einen zeitgenössischen Kunstausstellungsraum.',
    category: 'Interieur',
  },
  {
    id: '6',
    title: 'Desert Mirage',
    location: 'Palm Springs, USA',
    year: '2022',
    imageUrl: 'https://picsum.photos/800/550?random=6',
    description: 'Eine flache Residenz, die die Horizontlinie der Wüstenlandschaft widerspiegelt.',
    category: 'Wohnbau',
  }
];

export const INITIAL_NEWS: NewsItem[] = [
  {
    id: '1',
    date: '12. OKT 2024',
    category: 'Auszeichnungen',
    title: 'Gewinner des Berliner Architekturpreises 2024',
    excerpt: 'Die Residenz "Concrete Void" wurde von der Jury für ihre außergewöhnliche Integration nachhaltiger Materialien und minimalistischer Ästhetik ausgewählt.',
    imageUrl: 'https://picsum.photos/600/400?random=21'
  },
  {
    id: '2',
    date: '05. SEP 2024',
    category: 'Ausstellung',
    title: 'Ausstellung: "Stille in der Struktur"',
    excerpt: 'YANG Architektur präsentiert eine Retrospektive aktueller Arbeiten im Bauhaus-Archiv. Die Ausstellung untersucht das Verhältnis zwischen negativem Raum und menschlichem Wohnen.',
  },
  {
    id: '3',
    date: '18. AUG 2024',
    category: 'Publikation',
    title: 'Vorgestellt in El Croquis Nr. 220',
    excerpt: 'Ein ausführliches Interview mit Gründer Kai Yang und eine umfassende Monografie der Arbeiten des Studios von 2018 bis 2024.',
  },
  {
    id: '4',
    date: '02. JUL 2024',
    category: 'Projekt Update',
    title: 'Pavillon im Bürgerzentrum: Baubeginn',
    excerpt: 'Spatenstich für den neuen öffentlichen Begegnungsraum in Berlin-Mitte. Die Fertigstellung ist für Ende 2025 geplant.',
  }
];