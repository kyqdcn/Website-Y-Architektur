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
    title: 'Umbau Stadtvilla',
    titleZh: '城市别墅改造',
    location: 'Hamburg, Deutschland',
    locationZh: '德国汉堡',
    year: '2026',
    subtitle: 'LP 3-5 + Energiekonzept',
    subtitleZh: 'LP 3-5 + 节能方案设计',
    // Beispiel: So verlinkst du ein Bild aus public/images/
    // Bitte stelle sicher, dass project1.jpg wirklich existiert!
    // Wenn nicht, wird das Bild leer bleiben.
    imageUrl: 'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Als-1.jpg', 
    description: 'In begehrter Lage des Hamburger Stadtteils Alsterdorf wird eine vor 100 Jahren erbaute Stadtvilla umfassend saniert. Im Rahmen dieses ganzheitlichen Konzepts werden sowohl die Innenräume als auch die Außenfassaden hochwertig umgebaut. Dabei trifft modernste Gebäudetechnik auf den neu interpretierten Charme der klassischen Architektur. Durch die tiefgreifende energetische Sanierung ist das Haus für eine langfristige, zukunftssichere Nutzung mit minimalem Energieverbrauch ausgelegt. Das Ergebnis ist eine maßgebliche und nachhaltige Aufwertung der gesamten Wohnqualität.',
    descriptionZh: '在汉堡备受推崇的阿尔斯特多夫区（Alsterdorf），一栋拥有百年历史的城市公馆正迎来全面的焕新升级。基于一体化的设计理念，建筑的室内空间与外立面均按最新的标准进行了重塑。在这里，最前沿的建筑机电技术与经典建筑风格的现代转译完美交融。得益于深度的节能改造，该住宅在实现极低能耗的同时，确保了面向未来的长久使用需求。最终，这一切带来了整体居住品质实质性与低耗能的全面升华。',
    category: 'Wohnbau',
    categoryZh: '住宅建筑',
    // Beispiel für weitere Bilder in der Galerie:
    additionalImages: [
        'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Als-2.jpg',
        'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Als-3.jpg'
    ]
  },
  {
    id: '2',
    title: 'Eco Parken',
    titleZh: '生态停车场',
    location: 'Rostock, Deutschland',
    locationZh: '德国罗斯托克',
    year: '2022',
    subtitle: 'Machbarkeitskonzept',
    subtitleZh: '可行性方案设计',
    // Wenn du noch keine eigenen Bilder hast, kannst du diese Platzhalter lassen:
    imageUrl: 'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Eco-P-1.jpg',
    description: 'In der Nähe des beliebten Warnemünder Strandes, direkt an der Stadtautobahn, wird eine zukunftsorientierte Parkplatzanlage geplant, die den Stellplatzmangel im strandnahen Stadtgebiet lösen soll. Die geplante Anlage weicht dabei komplett von konventionellen Parkplätzen ab. Die integrierten Schnellladesäulen werden teilweise mit ökologischer, regenerativer Energie – wie beispielsweise Solarstrom – versorgt. Innovative Regenwassernutzung, kombiniert mit einem hochwertigen Gestaltungskonzept und einer Spielanlage für Kinder, macht dieses Projekt zu einem Vorbild für nachhaltige, öffentliche Stellplatzanlagen.',
    descriptionZh: '在广受欢迎的瓦尔内明德（Warnemünde）海滩畔、紧邻城市快速路，一座极具前瞻性的新型停车枢纽正处于规划之中，旨在精准解决滨海城区的停车难题。该项目彻底颠覆了传统停车场的固有模式。场内整合的快充设施将部分采用光伏等绿色可再生能源驱动；创新的雨水回收系统、高品质的景观美学方案，以及贴心的儿童游乐区在此完美交融。这一切，共同将该项目打造为面向未来的、可持续公共基础设施的卓越标杆。',
    category: 'Öffentlich',
    categoryZh: '公共建筑',
    // Beispiel für weitere Bilder in der Galerie:
    additionalImages: [
        'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Eco-P-2.jpg',
        'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Eco-P-3.jpg',
        'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Eco-P-Luft.jpg',
    ]
  },
  {
    id: '3',
    title: 'Vorstellbalkon',
    titleZh: '阳台加建',
    location: 'Hamburg, Deutschland',
    locationZh: '德国汉堡',
    year: '2020',
    imageUrl: 'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Hoc-f-4.jpg',
    description: 'Klein, aber fein. Vom Entwurf bis zur Realisierung bedurfte es eines intensiven Entwicklungsprozesses. In zahlreichen lösungsorientierten Abstimmungen zwischen der Bauherrin, dem Bauunternehmer und mir gelang es, hohe gestalterische Ansprüche mit einem eng gesteckten Budget in Einklang zu bringen. Das Ergebnis ist ein maßgeschneiderter Vorstellbalkon, der sich als architektonischer Blickfang in die Umgebung einfügt und die Bauherrin auf ganzer Linie überzeugt hat.',
    descriptionZh: '小而精巧，匠心独运。从概念初稿到最终落地，这个项目经历了深度的打磨过程。面对严苛的预算限制与具有挑战性的效果追求，我们在业主、施工方之间，进行了大量以解决问题为导向的高效沟通。最终，我们成功打破了成本与美学的壁垒。这座量身定制的外挂式阳台，不仅作为绝佳的建筑视觉焦点自然融入周边环境，更赢得了业主的全面赞誉与高度认可。',
    category: 'Wohnbau',
    categoryZh: '住宅建筑',
    // Beispiel für weitere Bilder in der Galerie:
    additionalImages: [
        'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Hoc-bes-3.jpg',
        'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Hoc-f-1.jpg',
        'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Hoc-bes-4.jpg',
        'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Hoc-f-2.jpg',
        'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Hoc-f-3.jpg',
        'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Hoc-f-6.jpg',
        ]
  },
  {
    id: '4',
    title: 'Kita Pinneberg',
    titleZh: '平纳贝格幼儿园',
    location: 'Pinneberg, Deutschland',
    locationZh: '德国平纳贝格',
    year: '2018',
    imageUrl: 'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Kita-2.jpg',
    description: 'In der Stadt Pinneberg wird ein Neubau für eine Kindertagesstätte geplant, die Platz für rund 100 Kinder im Krippen- und Elementarbereich bietet. Der architektonische Entwurf ist stark von modernen pädagogischen Konzepten geprägt und berücksichtigt gezielt das kindliche Verhalten sowie entwicklungspsychologische Aspekte. Eine fließende Raumstruktur und die optimale Nutzung von Tageslicht schaffen ein vielfältiges und anregendes Umfeld. Die selbsterklärende Raumorganisation bietet den Kindern dabei eine ausgewogene Balance aus großzügigen Bewegungsflächen und geschützten Rückzugsorten. Das nachhaltige Energiekonzept ermöglicht zudem einen sehr ökologischen Betrieb mit niedrigem Energieverbrauch.',
    descriptionZh: '在平讷贝格（Pinneberg），我们规划了一座可容纳约 100 名婴幼儿及学前儿童的全新现代幼儿园。该建筑方案深度契合了德国现代前沿幼教理念，关注儿童的行为模式与发展心理学需求。流畅的空间动线与自然采光的合理引入，共同营造出一个多元且富有启发性的成长环境。直觉化的空间布局为孩子们提供了一种完美的平衡：既有任其自由奔跑的开阔活动区，亦有充满安全感的静谧区。此外，前瞻性的可持续节能方案，确保这座建筑可以低能耗运营。',
    category: 'Erziehung',
    categoryZh: '教育建筑',
       // Beispiel für weitere Bilder in der Galerie:
    additionalImages: [
        'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Kita-1.jpg',
        'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Kita-3.jpg',
        ]
  },
  {
    id: '5',
    title: 'Umbau+Erweiterung Mehrfamilienhaus',
    titleZh: '多户住宅改造+扩建',
    location: 'Bad Oldesloe, Deutschalnd',
    locationZh: '德国巴特奥尔德斯洛',
    year: 'Fertigstellung 2026',
    subtitle: 'LP 1-5 + KFW-Förderung',
    subtitleZh: 'LP 1-5 + KFW节能补贴',
    imageUrl: 'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Sal-1.jpg',
    description: 'In zentraler Lage der Stadt Bad Oldesloe wird eine vor 100 Jahren erbaute Stadtvilla energetisch komplett auf den KfW-70-Standard saniert, wobei entsprechende KfW-Fördermittel in Anspruch genommen werden. Im Zuge dieser Komplettsanierung wird das Bestandsgebäude durch einen Anbau in südlicher Richtung erweitert. Der Neubau erhält einen Aufzug, der beide Gebäudeteile erschließt, sodass nach Abschluss der Sanierungsarbeiten auch die Wohnungen im Altbau barrierefrei erreichbar sind. Durch den Austausch der alten Dachkonstruktion gegen einen neuen Dachstuhl entsteht eine einheitliche Dachlandschaft, die Alt und Neu harmonisch miteinander verbindet. So wird der historische Charme des Altbaus bei gleichzeitiger klarer architektonischer Differenzierung überzeugend mit der modernen Schlichtheit des Neubaus kombiniert.',
    descriptionZh: '在巴特奥尔德斯洛（Bad Oldesloe）的核心地段，一座百年城市公馆正经历一场深度的节能改造。项目将达到 KfW-70 节能标准，更成功申请了相应的德国节能专项补贴。在此次整体改造中，我们在既有建筑南侧进行了扩建。新建体量中巧妙植入了一部电梯，无缝串联起新旧两座建筑，使得老建筑内的公寓在改造后也能实现无障碍通行。我们通过拆除旧屋顶并重构全新的屋架结构，打造了连续且统一的屋顶景观，将新老建筑和谐地缝合在一起。最终，项目在保持清晰的建筑语汇界限的前提下，让老建筑的百年底蕴与新建筑的现代极简风格实现了充满张力的完美交融。',
    category: 'Wohnbau',
    categoryZh: '住宅建筑',
    // Beispiel für weitere Bilder in der Galerie:
    additionalImages: [
        'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Sal-8.jpg',
        'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Sal-3.jpg',
        'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Sal-5.jpg',
        'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Sal-2.jpg',
        'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Sal-4.jpg',
    ]
  },
  {
    id: '6',
    title: 'Systemhausbau',
    titleZh: '装配式城市别墅',
    location: 'Frankfurt, Deutschland',
    locationZh: '德国法兰克福',
    year: '2026',
    imageUrl: 'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Rod-1.jpg',
    description: 'Wir entwickeln eine zukunftsorientierte Systembauweise für den modernen Wohnungsbau. Das Kernziel unseres Bausystems ist ein maximaler Vorfertigungsgrad. Dieser garantiert nicht nur eine besonders effiziente und zeitsparende Bauausführung, sondern schafft auch bezahlbaren Wohnraum, der höchste Ansprüche an Wohnkomfort und architektonisches Design erfüllt. Ein besonderer Mehrwert: Auch die passgenaue Inneneinrichtung, inklusive maßgefertigter Systemmöbel, ist integraler Bestandteil unseres Konzepts. Energetisch entspricht das System modernsten Standards – es erfüllt die strengen Vorgaben des Gebäudeenergiegesetzes (GEG) und erreicht das KfW-55-Effizienzhaus-Niveau. Unser erstes Pilotprojekt wird in Frankfurt am Main realisiert.',
    descriptionZh: '我们正在为现代住宅开发一套面向未来的装配式建筑体系。该体系的核心目标是实现极高的工厂预制率。这不仅能大幅提升施工效率、缩短建造周期，更能打造出兼具顶尖居住舒适度与建筑美学的高性价比住宅。我们的一大核心溢价在于：实现了一体化精装交付。完美契合空间的定制化系统家具，已作为不可或缺的模块深度融入我们的整体方案。在能效表现上，该体系全面对标当前节能标准——严格满足德国《建筑能源法》(GEG) 的规范，并可达到 KfW-55 节能房等级。我们的首个示范项目即将于美因河畔法兰克福（Frankfurt am Main）正式落地。',
    category: 'Wohnbau',
    categoryZh: '住宅建筑',
    // Beispiel für weitere Bilder in der Galerie:
    additionalImages: [
        'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Rod-5.jpg',
        'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Rod-3.jpg',
        'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Rod-4.jpg',
    ]
  },
  {
    id: '7',
    title: 'Neubau Mehrfamilienhaus',
    titleZh: '新建住宅公寓',
    location: 'Hamburg, Deutschalnd',
    locationZh: '德国汉堡',
    year: 'Fertigstellung 2025',
    subtitle: 'LP 1-4',
    subtitleZh: 'LP 1-4',
    imageUrl: 'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Hel-2.jpg',
    description: 'Im beliebten Hamburger Stadtteil Barmbek entsteht ein Neubau im rückwärtigen Grundstücksbereich, der ursprünglich für Garagennutzung ausgewiesen war. Ganz im Sinne der städtischen Nachverdichtung schöpft Hamburg hier sein räumliches Potenzial aus, um dem Wohnungsmangel aktiv entgegenzuwirken. Durch die zielgerichtete Umnutzung dieser Fläche konnte die Baugenehmigung erfolgreich erteilt werden. Der Entwurf umfasst 18 optimal geschnittene Wohnungen und meistert die umfangreichen baurechtlichen Einschränkungen sowie die technischen Anforderungen des Grundstücks auf intelligente Weise. Das Ergebnis ist ein architektonisch anspruchsvolles und gestalterisch hochwertiges Wohngebäude, das den urbanen Raum ideal nutzt.',
    descriptionZh: '在著名的的汉堡巴姆贝克区 (Barmbek)，我们设计的一座全新的住宅公寓楼几近竣工。该区域原规划为车库用地，本项目的落地正是汉堡市践行‘城市内生加密 (Nachverdichtung)’理念、深度挖掘空间潜力以积极应对住房短缺的绝佳范例。通过对该地块进行合理的功能置换，我们成功获得了极具挑战的建筑许可。设计方案精心规划了 18 套空间利用率极高的优质小型公寓，以充满智慧的设计策略，完美化解了该地块繁杂的建筑规划法规与苛刻的地块条件限制。最终呈现的，是一座兼具建筑美学张力与高品质居住体验的现代住宅，将稀缺的城市空间价值发挥到了极致。',
    category: 'Wohnbau',
    categoryZh: '住宅建筑',
    // Beispiel für weitere Bilder in der Galerie:
    additionalImages: [
        'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Hel-1.jpg',
        'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Hel-4.JPG',
        'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Hel-3.JPG',
        'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Hel-6.JPG',
    ]
  },
  {
    id: '8',
    title: 'Neubau Boardinghaus',
    titleZh: '新建酒店式公寓',
    location: 'Neustadt in Holstein, Deutschalnd',
    locationZh: '德国荷尔斯泰因地区诺伊施塔特',
    year: '2027',
    subtitle: 'ARGE: YANG + PETERS Architekten, LP 1-5 + Energiekonzept',
    subtitleZh: '联合团队：YANG + PETERS 建筑师事务所，LP 1-5 + 节能方案设计',
    imageUrl: 'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Kre-1.jpg',
    description: 'Im mittelalterlichen Stadtkern von Neustadt in Holstein – direkt gegenüber dem berühmten, aus dem 12. Jahrhundert stammenden Kremper Tor und dem zeiTTor-Museum – soll ein neuer Gebäudekomplex entstehen. Dieser Neubau hat zum Ziel, die aktuell unruhige Struktur des Baublocks zu ordnen und das städtebauliche Erscheinungsbild nachhaltig zu reparieren. Geplant ist ein zukunftsorientiertes Gebäude mit einer Mischnutzung aus Boardinghaus und Gewerbeflächen. Da der mittelalterliche Charakter im Kerngebiet von Neustadt nahezu vollständig erhalten ist, erfordert das Projekt ein Konzept, das den strengen Vorgaben der örtlichen Gestaltungssatzung folgt. Die Stärke des Entwurfs liegt darin, moderne Architektur und aktuelle Bautechnologien so sensibel einzusetzen, dass der historische Charme des Umfelds spürbar bleibt und das neue Gebäude in einen bewussten, respektvollen architektonischen Dialog mit dem Kremper Tor tritt.',
    descriptionZh: '在荷尔斯泰因地区诺伊施塔特 (Neustadt in Holstein) 的中世纪古城核心区，一座全新的建筑综合体即将拔地而起。项目选址极具历史分量，正对建于 12 世纪的著名地标克伦佩门 (Kremper Tor) 与 zeiTTor 博物馆。该新建项目的核心愿景在于梳理当前略显杂碎的街区肌理，对整体城市风貌进行一次深度的、可持续的‘城市织补’。规划将打造一栋面向未来的复合型建筑，巧妙融合高级长租公寓 (Boardinghaus) 与商业空间。鉴于古城核心区几乎完好地保留了中世纪风貌，方案必须严格遵循当地严苛的建筑风貌管控条例。此次设计的最大亮点在于对分寸感的精准把控：我们以极其敏锐的手法植入现代建筑语言与前沿建造技术，在确保历史韵味触手可及的同时，让新建筑与古老的克伦佩门展开了一场克制、尊重且充满张力的跨时空对话。',
    category: 'Wohnbau + Gewerbe',
    categoryZh: '住宅 + 商业',
    // Beispiel für weitere Bilder in der Galerie:
    additionalImages: [
        'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Kre-4.jpg',
        'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Kre_2.jpg',
        'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Kre-3.jpg',
        'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Kre-Fassadenausschnitt.jpg',
    ]
  },
  {
    id: '9',
    title: 'Diverse Projekte',
    titleZh: '各类项目',
    location: 'China-Deutschalnd',
    locationZh: '中国-德国',
    year: '2008-2017',
    subtitle: 'Bearbeitete Projekte bei diversen Architektenbüros',
    subtitleZh: '在不同建筑事务所参与的部分项目案例',
    imageUrl: 'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Diverse-Cov-b.jpg',
    description: 'Bevor ich mich selbstständig machte, durfte ich meine Expertise bei namhaften Büros wie gmp Architekten und Spengler · Wiescholek Architekten Stadtplaner einbringen. Dabei begleitete ich vielfältige Projekte in Deutschland und China in verschiedenen Planungsphasen. Ein Projekt, das mir besonders in Erinnerung geblieben ist, ist das „Hamburg House“ für die EXPO 2010 in Shanghai – das erste öffentliche Gebäude, das jemals nach dem strengen Passivhausstandard in China gebaut wurde.',
    descriptionZh: '在创立个人事务所之前，杨凯曾效力于德国 gmp 建筑师事务所、Spengler · Wiescholek 等国际知名设计机构。在此期间，杨凯深度参与了中德两国多个项目在各个设计阶段的规划与落地。其中2010 年上海世博会‘汉堡之家’（Hamburg House）无疑是极具里程碑意义的代表作。作为中国首个严格贯彻德国‘被动房标准’（Passivhausstandard）的公共建筑，该项目当时不仅是一次先锋技术的成功落地，更成为杨凯日后深耕超低能耗建筑领域的启蒙与基石。',
    category: 'Öffentlich',
    categoryZh: '公共建筑',
    // Beispiel für weitere Bilder in der Galerie:
    additionalImages: [
        {
            url: 'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Diverse-1.jpeg',
            title: '2008, Hotel und Bürogebäude Shanghai, China',
            copyright: '© GMP Architekten'
        },
        {
            url: 'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Diverse-2.jpg',
            title: 'EXPO 2010, Hamburg House Shanghai, China',
            copyright: '© Spengler.Wiescholek Architekten Stadtplaner'
        },
        {
            url: 'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Diverse-3.jpg',
            title: 'EXPO 2010, Hamburg House Shanghai, China',
            copyright: '© Spengler.Wiescholek Architekten Stadtplaner'
        },
        {
            url: 'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Diverse-4.jpg',
            title: '2014, Kita und Grundschule Wentorf, Deutschland',
            copyright: '© Spengler.Wiescholek Architekten Stadtplaner'
        },
         {
            url: 'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Diverse-5.jpg',
            title: '2014, Kita und Grundschule Wentorf, Deutschland',
            copyright: '© Spengler.Wiescholek Architekten Stadtplaner'
        },
        {
            url: 'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Diverse-6.jpg',
            title: '2009, Grand Theater Chongqing, China',
            copyright: '© GMP Architekten'
        },
    ]
  },
  {
    id: '10',
    title: 'Coming Soon',
    titleZh: '即将推出',
    location: '',
    year: '2024',
    imageUrl: 'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Temp-4.jpg',
    description: 'Beschreibung für Projekt 10.',
    descriptionZh: '项目10的描述。',
    category: '',
    additionalImages: []
  },
  {
    id: '11',
    title: 'Coming Soon',
    titleZh: '即将推出',
    location: '',
    year: '2024',
    imageUrl: 'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Temp-2.jpg',
    description: 'Beschreibung für Projekt 11.',
    descriptionZh: '项目11的描述。',
    category: '',
    additionalImages: []
  },
  {
    id: '12',
    title: 'Neubau Mehrfamilienhaus',
    titleZh: '新建住宅公寓',
    location: 'Hamburg, Deutschland',
    locationZh: '德国汉堡',
    year: '2027',
    subtitle: 'ARGE: YANG + PETERS Architekten, LP 1-5 + Energiekonzept',
    subtitleZh: '联合体：YANG + PETERS 建筑师事务所，LP 1-5 + 节能方案设计',
    imageUrl: 'https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Osd-1.jpg',
    description: 'In Hamburg-Osdorf ist der Bau eines neuen Mehrfamilienhauses geplant, das mit einer ausgewogenen Mischung aus sozial gefördertem Wohnraum und Eigentumswohnungen einen wichtigen Beitrag zur sozialen Durchmischung des Quartiers leistet. Das Gebäude entsteht an der zentralen Ost-West-Magistrale, die den Stadtteil Osdorf durchquert. Durch das überzeugende Neubaukonzept und seine architektonische Präsenz wird die städtebauliche Bedeutung dieser Magistrale gezielt gestärkt und aufgewertet.',
    descriptionZh: '在汉堡奥斯多夫区（Osdorf），我们正在规划一座全新的复合型住宅综合体。该项目通过将保障性住房与高品质产权公寓进行均衡配比，为促进街区社会结构的多元共生与包容性做出了重要贡献。建筑坐落于横贯奥斯多夫区的东西向城市主轴线（Magistrale）之上。建筑建成后将改变目前零碎的街区建筑状况，强化城市主轴线的边界。',
    category: 'Wohnbau',
    categoryZh: '住宅建筑',
    additionalImages: []
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
  
];