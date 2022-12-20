import { nanoid } from "nanoid";

const shoes = [
  {
    id: "1",
    producer: "Nike",
    name: "Off-White X Nike Air Terra Forma Wheat",
    release: "01.12.2022",
    price: "210",
    isFavorite: false,
    title: "Off-White x Nike Air Terra Forma Wheat release infos",
    description1:
      "Angeblich handelt es sich bei dieser sehr außergewöhnlichen Silhouette um ein Originaldesign des verstorbenen Off-White-Gründers Virgil Abloh. Damit wäre der auffällige Sneaker das erste Modell in Zusammenarbeit mit Nike, welches von Grund auf den Gedanken des kreativen Kopfes entspringt.",
    description2:
      "Der “Wheat” Colorway greift für den Großteil des Schuhs auf ein herbstliches Braun zurück, wobei die unteren Schichten ein dunkles Grau zeigen. Die Mittelsohlen stellen einen bunten Mix aus verschiedenen Farben zur Schau, während die Zungen sowie das Innenfutter ein knalliges Grün präsentieren. Tiefschwarze Außensohlen rahmen den Sneaker dabei perfekt ein.",
    img: "https://res.cloudinary.com/dvze0tvsd/image/upload/v1670928242/capstone-project/Nike/Off-White%20X%20Nike%20Air%20Terra%20Forma%20Wheat/IMG_4260_wtziea.png",

    moreImages: [
      "https://res.cloudinary.com/dvze0tvsd/image/upload/v1670928242/capstone-project/Nike/Off-White%20X%20Nike%20Air%20Terra%20Forma%20Wheat/IMG_4262_w4yldp.png",
      "https://res.cloudinary.com/dvze0tvsd/image/upload/v1670928245/capstone-project/Nike/Off-White%20X%20Nike%20Air%20Terra%20Forma%20Wheat/IMG_4261_zkfbaw.png",
      "https://res.cloudinary.com/dvze0tvsd/image/upload/v1670928243/capstone-project/Nike/Off-White%20X%20Nike%20Air%20Terra%20Forma%20Wheat/IMG_4264_zqafzm.png",
    ],

    shops: [
      {
        store: "stockX",
        link: "https://stockx.com/nike-air-terra-forma-off-white-wheat?utm_source=af&utm_medium=imp&utm_campaign=1791368&impactSiteId=Wca0KNye0xyNRWm3yLRfK2daUkA2wdzpC1KDxk0&clickid=Wca0KNye0xyNRWm3yLRfK2daUkA2wdzpC1KDxk0&utm_term=Wca0KNye0xyNRWm3yLRfK2daUkA2wdzpC1KDxk0&utm_content=_530344&irgwc=1&irclickid=Wca0KNye0xyNRWm3yLRfK2daUkA2wdzpC1KDxk0&ir_campaignid=9060&ir_adid=530344&ir_partnerid=1791368",
      },
      {
        store: "Nike",
        link: "https://www.nike.com/de/launch/t/terra-forma-x-off-white-wheat-and-green-strike?CP=EUNS_AFF_AWIN_DE_399889_httpswwwgrailifycom_164407&utm_source=httpswwwgrailifycom&utm_medium=affiliate&utm_campaign=399889&utm_content=164407&awc=16329_1671112735_3f48b5ee255a8aff23cba58d2d653aa5",
      },
    ],
  },
  {
    id: "2",
    producer: "Nike",
    name: "Off-White X Nike Air Terra Forma White",
    release: "01.12.2022",
    price: "210",
    isFavorite: false,
    title: "Off-White x Nike Air Terra Forma White release infos",
    description1:
      "Angeblich handelt es sich bei dieser sehr außergewöhnlichen Silhouette um ein Originaldesign des verstorbenen Off-White-Gründers Virgil Abloh. Damit wäre der auffällige Sneaker das erste Modell in Zusammenarbeit mit Nike, welches von Grund auf den Gedanken des kreativen Kopfes entspringt.",
    description2:
      "Der “White” Colorway greift auf einen leicht beigen Farbton zurück, der den Großteil des Schuhs dominiert. Die Mittelsohlen stellen einen bunten Mix aus verschiedenen Farben zur Schau, während die Zungen sowie das Innenfutter ein auffälliges Lila präsentieren.",
    img: "https://res.cloudinary.com/dvze0tvsd/image/upload/v1670928228/capstone-project/Nike/Off-White%20X%20Nike%20Air%20Terra%20Forma%20White%20/IMG_4265_cfbycz.png",
    shops: [
      {
        store: "stockX",
        link: "https://stockx.com/nike-air-terra-forma-off-white-white?utm_source=af&utm_medium=imp&utm_campaign=1791368&impactSiteId=Wca0KNye0xyNRWm3yLRfK2daUkA21z3FC1KDxk0&clickid=Wca0KNye0xyNRWm3yLRfK2daUkA21z3FC1KDxk0&utm_term=Wca0KNye0xyNRWm3yLRfK2daUkA21z3FC1KDxk0&utm_content=_530344&irgwc=1&irclickid=Wca0KNye0xyNRWm3yLRfK2daUkA21z3FC1KDxk0&ir_campaignid=9060&ir_adid=530344&ir_partnerid=1791368",
      },
      {
        store: "Nike",
        link: "https://www.nike.com/de/launch/t/terra-forma-x-off-white-summit-white-and-psychic-purple?CP=EUNS_AFF_AWIN_DE_399889_httpswwwgrailifycom_164407&utm_source=httpswwwgrailifycom&utm_medium=affiliate&utm_campaign=399889&utm_content=164407&awc=16329_1671116450_cb065ad828ac7563ca462615d5a5b7b1",
      },
    ],
  },
  {
    id: "3",
    producer: "Converse",
    name: "Notre X Converse Chuck 70",
    release: "01.12.2022",
    price: "110",
    isFavorite: false,
    title: "Notre x Converse Chuck 70 release infos",
    description1:
      "Der Notre x Converse Chuck 70 nutzt auf der Innenseite ein geflochtenes Material, während die Außenseiten ein widerstandsfähiges Canvas zur Schau stellen. Die Zungen ergänzen den Mix um ein flauschiges Textil, wobei alle drei Elemente in einem dunklen Braun gehalten sind. Die Sohlen, Laces und Toe-Boxes präsentieren ein cremefarbenes Beige, während die Co-Brandings auf den Fersen und Innensohlen zu finden sind.",
    description2: "",
    img: "https://res.cloudinary.com/dvze0tvsd/image/upload/v1670928178/capstone-project/Converse/Notre%20X%20Converse%20Chuck%2070%20/IMG_4271_kqeoex.png",
    shops: [
      {
        store: "stockX",
        link: "https://stockx.com/converse-chuck-taylor-all-star-70-hi-notre-furniture?utm_source=af&utm_medium=imp&utm_campaign=1791368&impactSiteId=Wca0KNye0xyNRWm3yLRfK2daUkA21zSZC1KDxk0&clickid=Wca0KNye0xyNRWm3yLRfK2daUkA21zSZC1KDxk0&utm_term=Wca0KNye0xyNRWm3yLRfK2daUkA21zSZC1KDxk0&utm_content=_530344&irgwc=1&irclickid=Wca0KNye0xyNRWm3yLRfK2daUkA21zSZC1KDxk0&ir_campaignid=9060&ir_adid=530344&ir_partnerid=1791368",
      },
      {
        store: "Converse",
        link: "https://www.converse.com/de/shop/p/chuck-70-notre-unisex/A01626MP.html?csid=AFF_PRF_CDR_WE_DE_DE_20221215_AWIN_edquadrat+GmbH_AWIN399889_Sneaker_X_X_httpswwwgrailifycom_X_X_X_X_0-0_X&awc=10638_1671116568_b2ed8a062de52c08ec51a5bcc7bf79d1",
      },
    ],
  },
  {
    id: "4",
    producer: "Air Jordan",
    name: "Air Jordan 6 Metallic Silver",
    release: "02.12.2022",
    price: "200",
    isFavorite: false,
    title: "Air Jordan 6 Metallic Silver release infos",
    description1:
      "Der Air Jordan 6 „Metallic Silver“ greift auf ein schwarzes Nubuk-Upper zurück, während silberne Details auf den Logos und Mittelsohlen dem Sneaker eine persönliche Note verleihen. Ganz unten runden dann eisblaue Laufsohlen das Design des Sneakers ab.",
    description2: "",
    img: "https://res.cloudinary.com/dvze0tvsd/image/upload/v1670928517/capstone-project/Air%20Jordan/Air%20Jordan%206%20Metallic%20Silver/IMG_4280_fsfabd.png",
    shops: [
      {
        store: "stockX",
        link: "https://stockx.com/air-jordan-6-retro-metallic-silver?clickid=Wca0KNye0xyNRWm3yLRfK2daUkA21wU1C1KDxk0&impactSiteId=Wca0KNye0xyNRWm3yLRfK2daUkA21wU1C1KDxk0&ir_adid=530344&ir_campaignid=9060&ir_partnerid=1791368&irclickid=Wca0KNye0xyNRWm3yLRfK2daUkA21wU1C1KDxk0&irgwc=1&utm_campaign=1791368&utm_content=_530344&utm_medium=imp&utm_source=af&utm_term=Wca0KNye0xyNRWm3yLRfK2daUkA21wU1C1KDxk0",
      },
      {
        store: "Nike",
        link: "https://www.nike.com/de/launch/t/air-jordan-6-metallic-silver-emea?CP=EUNS_AFF_AWIN_DE_399889_httpswwwgrailifycom_164407&utm_source=httpswwwgrailifycom&utm_medium=affiliate&utm_campaign=399889&utm_content=164407&awc=16329_1671116702_9dd07600722ede8332484d3ad87d59f6",
      },
      {
        store: "Foot Locker",
        link: "https://www.footlocker.de/de/product/~/314103407004.html?utm_medium=affiliate&utm_source=awin&utm_campaign=399889&awc=14437_1671116738_5931303894ceaa2c9f18968fdd472712",
      },
    ],
  },
  {
    id: "5",
    producer: "Reebok",
    name: "DC X Reebok LX 2200 Batman",
    release: "02.12.2022",
    price: "110",
    isFavorite: false,
    title: "DC x Reebok LX 2200 Batman release infos",
    description1:
      "Der DC x Reebok Nano X2 stellt eine Hommage an Batman und seinen hochtechnisierten Batsuit dar. Die dunkle Ästhetik des Sneakers lässt sich dabei von Kevlar-Materialien, klobigen Rüstungsteilen und Kampfspuren auf dem Anzug inspirieren. Darüber hinaus finden sich reflektierende Logos auf dem Schuh wieder, die auf das Bat-Signal am Nachthimmel anspielen sollen. Die abnehmbaren Details auf der Zunge erinnern an seine protektiven Handschuhe, während Batman Logos auf den Zungen die Anspielung natürlich am offensichtlichsten machen. Einzelne goldene Streifen auf den Seiten dürfen im Sinne seines Batsuits natürlich auch nicht fehlen.",
    description2: "",
    img: "https://res.cloudinary.com/dvze0tvsd/image/upload/v1670928642/capstone-project/Reebok/DC%20X%20Reebok%20LX%202200%20Batman/IMG_4282_h9bzfl.png",
    shops: [
      {
        store: "Reebok",
        link: "https://www.reebok.de/dc-lx-2200-shoes/HQ4584.html?clickref=1101lwoW6KXx&cm_mmc=ReebokAffiliates_PHG-_-99kicks-_--_--_-dv%3AeCom-_-cn%3ABAU-_-pc%3Ageneric&cm_mmc1=DE&cm_mmc2=Reebok-EMEA-eCom-Affiliates-99kicks-DE-1901",
      },
    ],
  },
  {
    id: "6",
    producer: "Reebok",
    name: "DC X Reebok Nano X2 Wonder Woman",
    release: "02.12.2022",
    price: "150",
    isFavorite: false,
    title: "DC x Reebok Nano X2 Wonder Woman release infos",
    description1:
      "Der DC x Reebok Nano X2 stellt eine Hommage an Wonder Woman’s kraftvolle Kampfausrüstung dar und wurde mit den entsprechenden Details ausgestattet. So findet sich auf dem Upper ballistisches Nylon wieder, welches mit einer robusten Zehenkappe kombiniert wird, um für einen ultimativen Schutz zu sorgen. Die metallischen Eyelets in Verbindung mit den Lederriemen stellen dabei eindeutig eine Anspielung auf ihren Harnisch dar. Darüber hinaus erinnern die leuchtenden Laces an ihr sogenanntes Lasso der Wahrheit, während die silbernen Details eine Verbindung zu ihren Armbändern herstellen. Farblich orientiert man sich dabei natürlich auch an ihrer Rüstung, weshalb Hellblau, Bronze und Gold mit klaren Linien aufeinander treffen.",
    description2: "",
    img: "https://res.cloudinary.com/dvze0tvsd/image/upload/v1670928730/capstone-project/Reebok/DC%20X%20Reebok%20Nano%20X2%20Wonder%20Woman/IMG_4286_wvpgav.png",
    shops: [
      {
        store: "Reebok",
        link: "https://www.reebok.de/dc-nano-x2-shoes/HQ4585.html?clickref=1011lwppXg6Q&cm_mmc=ReebokAffiliates_PHG-_-99kicks-_--_--_-dv%3AeCom-_-cn%3ABAU-_-pc%3Ageneric&cm_mmc1=DE&cm_mmc2=Reebok-EMEA-eCom-Affiliates-99kicks-DE-1901",
      },
    ],
  },
  {
    id: "7",
    producer: "Reebok",
    name: "DC X Reebok Royal Techque T Joker",
    release: "02.12.2022",
    price: "80",
    isFavorite: false,
    title: "DC x Reebok Royal Techque T Joker release infos",
    description1:
      "Der DC x Reebok Royal Techque T stellt eine Hommage an den Superschurken Joker dar, welcher ein absoluter Rivale von Batman ist. Die Farbkombination aus Grün und Lila erinnert dabei ganz klar an sein ikonisches Outfit, während Joker Grafiken auf den Zungen die Anspielung am offensichtlichsten machen. Auch im Fersenbereich finden sich Referenzen in Form von Joker Spielkarten wieder, wobei sein unverkennbares Lachen auf dem Innenfutter verewigt wurde.",
    description2: "",
    img: "https://res.cloudinary.com/dvze0tvsd/image/upload/v1670928805/capstone-project/Reebok/DC%20X%20Reebok%20Royal%20Techque%20T%20Joker/IMG_4291_q15tpk.png",
    shops: [
      {
        store: "Reebok",
        link: "https://www.reebok.de/reebok-royal-techque-t-shoes/HQ4588.html?clickref=1011lwppXiv2&cm_mmc=ReebokAffiliates_PHG-_-99kicks-_--_--_-dv%3AeCom-_-cn%3ABAU-_-pc%3Ageneric&cm_mmc1=DE&cm_mmc2=Reebok-EMEA-eCom-Affiliates-99kicks-DE-1901",
      },
    ],
  },
  {
    id: "8",
    producer: "Reebok",
    name: "DC X Reebok Shaq Attaq Man of Steel",
    release: "02.12.2022",
    price: "180",
    isFavorite: false,
    title: "DC x Reebok Shaq Attaq Man Of Steel release infos",
    description1:
      "Der DC x Reebok Shaq Attaq stellt eine Hommage an Superman und den Moment dar, in dem er von Clark Kent zum legendären Superhelden wurde. Das hochqualitative Nubuk sowie Mischgewebe sollen mit ihrem dunklen Grau an seinen Businessanzug erinnern, während sich die Materialien seines ikonischen Kostüms darunter dezent offenbaren. Dementsprechend kommen auf einzelnen Elementen Farben wie Rot, Gold und Blau zum Vorschein, welche sein Heldenoutfit visualisieren. Einige Details wurden außerdem mit metallischen Akzenten versehen, um seinem Spitznamen “der Mann aus Stahl” gerecht zu werden. Superman-Logos auf den Zungen sowie rote “Man Of Steel” Stickereien auf der Ferse unterstreichen die Kollaboration nochmal deutlich.",
    description2: "",
    img: "https://res.cloudinary.com/dvze0tvsd/image/upload/v1670928872/capstone-project/Reebok/DC%20X%20Reebok%20Shaq%20Attaq%20Man%20of%20Steel/IMG_4295_e6o4xs.png",
    shops: [
      {
        store: "stockX",
        link: "https://stockx.com/reebok-shaq-attaq-dc-man-of-steel?clickid=Wca0KNye0xyNRWm3yLRfK2daUkA213zFC1KDxk0&impactSiteId=Wca0KNye0xyNRWm3yLRfK2daUkA213zFC1KDxk0&ir_adid=530344&ir_campaignid=9060&ir_partnerid=1791368&irclickid=Wca0KNye0xyNRWm3yLRfK2daUkA213zFC1KDxk0&irgwc=1&utm_campaign=1791368&utm_content=_530344&utm_medium=imp&utm_source=af&utm_term=Wca0KNye0xyNRWm3yLRfK2daUkA213zFC1KDxk0",
      },
      {
        store: "Reebok",
        link: "https://www.reebok.de/dc-shaq-attaq-shoes/HQ4587.html?clickref=1100lwoCn7wt&cm_mmc=ReebokAffiliates_PHG-_-99kicks-_--_--_-dv%3AeCom-_-cn%3ABAU-_-pc%3Ageneric&cm_mmc1=DE&cm_mmc2=Reebok-EMEA-eCom-Affiliates-99kicks-DE-1901",
      },
    ],
  },
];

export default shoes;

export const images = [
  {
    img1: "https://res.cloudinary.com/dvze0tvsd/image/upload/v1670928242/capstone-project/Nike/Off-White%20X%20Nike%20Air%20Terra%20Forma%20Wheat/IMG_4260_wtziea.png",
  },
  {
    img: "https://res.cloudinary.com/dvze0tvsd/image/upload/v1670928242/capstone-project/Nike/Off-White%20X%20Nike%20Air%20Terra%20Forma%20Wheat/IMG_4262_w4yldp.png",
  },
  {
    img: "https://res.cloudinary.com/dvze0tvsd/image/upload/v1670928245/capstone-project/Nike/Off-White%20X%20Nike%20Air%20Terra%20Forma%20Wheat/IMG_4261_zkfbaw.png",
  },
  {
    img: "https://res.cloudinary.com/dvze0tvsd/image/upload/v1670928243/capstone-project/Nike/Off-White%20X%20Nike%20Air%20Terra%20Forma%20Wheat/IMG_4264_zqafzm.png",
  },
];
