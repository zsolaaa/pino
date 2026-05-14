/* eslint-disable */
// Menu data extracted from the Pinocchio menu PDF.

window.MENU_DATA = {
  PIZZA: {
    label: "Pizza",
    note: "Kemencében sült, kézzel nyújtott tészta. Kérésre csomagolás 200 Ft, extra pizzaszósz 300 Ft, csípős pizzaszósz 300 Ft.",
    items: [
      { n:1,  name:"Margherita",                  price:"2690 Ft", desc:"Paradicsomszósz, mozzarella" },
      { n:2,  name:"Salame",                      price:"3090 Ft", desc:"Paradicsomszósz, mozzarella, olasz (dolce) szalámi" },
      { n:3,  name:"Salame Piccante",             price:"3090 Ft", desc:"Paradicsomszósz, mozzarella, olasz csípős szalámi" },
      { n:4,  name:"Funghi",                      price:"2790 Ft", desc:"Paradicsomszósz, mozzarella, gomba" },
      { n:5,  name:"Pinocchio",                   price:"3590 Ft", desc:"Paradicsomszósz, mozzarella, rukkola, pármai sonka, parmezán forgács", featured:true },
      { n:6,  name:"Amore",                       price:"3590 Ft", desc:"Paradicsomszósz, mozzarella, rukkola, pármai sonka, koktélparadicsom" },
      { n:7,  name:"Ungherese",                   price:"3590 Ft", desc:"Paradicsomszósz, mozzarella, lilahagyma, olasz csípős szalámi, bacon, csípős pepperoni", spicy:true },
      { n:8,  name:"Salame Piccante e Gorgonzola",price:"3290 Ft", desc:"Paradicsomszósz, mozzarella, olasz csípős szalámi, gorgonzola sajt", spicy:true },
      { n:9,  name:"Tonno e Cipolla",             price:"3290 Ft", desc:"Paradicsomszósz, mozzarella, lilahagyma, tonhal, olívaolaj" },
      { n:10, name:"4 Formaggi",                  price:"3290 Ft", desc:"Paradicsomszósz, mozzarella, parmezán, pecorino, gorgonzola" },
      { n:11, name:"Cotto",                       price:"3190 Ft", desc:"Paradicsomszósz, mozzarella, olasz főtt sonka" },
      { n:12, name:"Cotto e Funghi",              price:"3290 Ft", desc:"Paradicsomszósz, mozzarella, olasz főtt sonka, gomba" },
      { n:13, name:"Prosciutto di Parma",         price:"3290 Ft", desc:"Paradicsomszósz, mozzarella, pármai sonka" },
      { n:14, name:"Valmar",                      price:"3590 Ft", desc:"Paradicsomszósz, négysajtos alap, olasz csípős szalámi", spicy:true },
      { n:15, name:"Bruno",                       price:"3590 Ft", desc:"Paradicsomszósz, négysajtos alap, olasz főtt sonka" },
      { n:16, name:"Doppio",                      price:"3590 Ft", desc:"Paradicsomszósz, mozzarella, olasz csípős szalámi, főtt sonka, fokhagymás olívaolaj", spicy:true },
      { n:17, name:"Diavola Verde",               price:"3590 Ft", desc:"Paradicsomszósz, mozzarella, olasz csípős szalámi, rukkola, koktélparadicsom", spicy:true, featured:true },
      { n:18, name:"Vega",                        price:"3490 Ft", desc:"Paradicsomszósz, mozzarella, friss zöldségek és aromák" },
      { n:19, name:"Capricciosa",                 price:"3590 Ft", desc:"Paradicsomszósz, mozzarella, articsóka, főtt sonka, fekete olivabogyó" },
      { n:20, name:"Tartufo e N'Duja",            price:"3890 Ft", desc:"Tejszínes szarvasgombakrém, mozzarella, gomba, olasz csípős kolbászkrém (N'duja)", spicy:true, featured:true },
    ]
  },
  PASTA: {
    label: "Pasta",
    note: "Igény szerint cserélhető tészta: tagliatelle, spagetti, gnocchi, penne.",
    items: [
      { n:1, name:"Arrabbiata",          price:"2990 Ft", desc:"Paradicsomszósz, fokhagymás olívaolaj, chili, koktélparadicsom, parmezán, spagetti", spicy:true },
      { n:2, name:"Pomodoro",            price:"2890 Ft", desc:"Paradicsomszósz, fokhagymás olívaolaj, koktélparadicsom, parmezán, spagetti" },
      { n:3, name:"Carbonara",           price:"3390 Ft", desc:"Tojássárgája, parmezán, guanciale (olasz tokaszalonna), feketebors, spagetti — kérésre tejszínes változatban is" },
      { n:4, name:"Bolognai",            price:"3390 Ft", desc:"Paradicsomszósz, tradicionális bolognai ragu, parmezán, tagliatelle" },
      { n:5, name:"Pasta al Tartufo",    price:"3690 Ft", desc:"Szarvasgomba, tejszín, fokhagymás olívaolaj, shiitake gomba, parmezán, tagliatelle" },
      { n:6, name:"Pasta con Zucchine",  price:"3190 Ft", desc:"Grillezett cukkini, fokhagymás olívaolaj, parmezán, tagliatelle" },
      { n:7, name:"Gnocchi al Formaggi", price:"3190 Ft", desc:"Tejszínes gnocchi, parmezán, gorgonzola" },
      { n:8, name:"Gnocchi e Funghi",    price:"3190 Ft", desc:"Tejszínes gnocchi, gomba, fokhagymás olívaolaj, feketebors" },
      { n:9, name:"Pi'Gnocchio",         price:"2990 Ft", desc:"Paradicsomszósz, fehérbor, fokhagymás olívaolaj, parmezán, rukkola" },
      { n:10, name:"Pasta al Pesto",     price:"3190 Ft", desc:"Pesto, fokhagymás olívaolaj, koktélparadicsom, parmezán, spagetti" },
      { n:11, name:"Aglio e Vegetable",  price:"3990 Ft", desc:"Fokhagymás olívaolaj, grillezett cukkini, koktélparadicsom, fekete olivabogyó, rukkola, spagetti" },
    ]
  },
  SALATA: {
    label: "Saláta",
    note: "Salátáink mellé focaccia (pizzakenyér) jár.",
    items: [
      { n:1, name:"Vegetariana",     price:"2890 Ft", desc:"Jégsaláta, rukkola, fekete olivabogyó, mozzarella, parmezán, olívaolaj, balzsamkrém, koktélparadicsom, focaccia" },
      { n:2, name:"Tonno e Olive",   price:"2990 Ft", desc:"Vegetáriánus salátaalap, tonhal, fokhagymás olívaolaj, focaccia" },
      { n:3, name:"Parma e Pomodori",price:"2990 Ft", desc:"Vegetáriánus salátaalap, pármai sonka, focaccia" },
    ]
  },
  EXTRA: {
    label: "Extra feltétek",
    note: "Tetszőlegesen bővítheted a pizzádat — sajtok, húsok, zöldségek.",
    items: [
      { n:1,  name:"Mozzarella (Fior di Latte)",            price:"350 Ft", desc:"Sajt" },
      { n:2,  name:"Parmezán forgács",                       price:"450 Ft", desc:"Sajt" },
      { n:3,  name:"Gorgonzola",                             price:"350 Ft", desc:"Sajt" },
      { n:4,  name:"Salame (dolce szalámi)",                price:"400 Ft", desc:"Hús" },
      { n:5,  name:"Salame Piccante (csípős szalámi)",      price:"400 Ft", desc:"Hús", spicy:true },
      { n:6,  name:"Cotto (főtt sonka)",                    price:"400 Ft", desc:"Hús" },
      { n:7,  name:"Prosciutto di Parma (pármai sonka)",    price:"600 Ft", desc:"Hús" },
      { n:8,  name:"Pancetta (bacon)",                       price:"400 Ft", desc:"Hús" },
      { n:9,  name:"Tonno (tonhal)",                         price:"450 Ft", desc:"Hús" },
      { n:10, name:"Lilahagyma",                              price:"250 Ft", desc:"Zöldség" },
      { n:11, name:"Kukorica",                                price:"250 Ft", desc:"Zöldség" },
      { n:12, name:"Rukkola",                                 price:"350 Ft", desc:"Zöldség" },
      { n:13, name:"Fekete olivabogyó",                      price:"250 Ft", desc:"Zöldség" },
      { n:14, name:"Koktélparadicsom",                       price:"350 Ft", desc:"Zöldség" },
      { n:15, name:"Pepperoni (csípős)",                     price:"300 Ft", desc:"Zöldség", spicy:true },
      { n:16, name:"Gomba",                                   price:"300 Ft", desc:"Zöldség" },
    ]
  },
  ITAL: {
    label: "Italok",
    note: "Csapolt Birra Moretti, válogatott söröket és pálinkákat kínálunk.",
    items: [
      { n:1, name:"Birra Moretti csapolt (pohár / korsó)", price:"800 / 1200 Ft", desc:"Olasz lager, frissen csapolva" },
      { n:2, name:"Peroni",                                 price:"700 Ft",       desc:"0,33 l üveges" },
      { n:3, name:"Heineken",                               price:"800 Ft",       desc:"0,33 l üveges" },
      { n:4, name:"Heineken 0.0%",                          price:"800 Ft",       desc:"0,33 l alkoholmentes" },
      { n:5, name:"Gösser Citrom 2%",                       price:"700 Ft",       desc:"dobozos" },
      { n:6, name:"Gösser Citrom 0.0%",                     price:"700 Ft",       desc:"dobozos, alkoholmentes" },
      { n:7, name:"Jäger (2 cl / 4 cl)",                    price:"660 / 1100 Ft",desc:"Likőr" },
      { n:8, name:"Unicum (2 cl / 4 cl)",                   price:"660 / 1100 Ft",desc:"Magyar gyomorkeserű" },
      { n:9, name:"Pálinka (2 cl / 4 cl)",                  price:"750 / 1500 Ft",desc:"Válogatott pálinkáink — érdeklődj a pultnál" },
    ]
  },
  KAVE: {
    label: "Üdítők & kávé",
    note: "Olasz pörkölésű kávé, üdítők és teák.",
    items: [
      { n:1, name:"Espresso",        price:"600 Ft", desc:"Klasszikus olasz módra" },
      { n:2, name:"Hosszú kávé",     price:"600 Ft", desc:"Lungo" },
      { n:3, name:"Cappuccino",      price:"700 Ft", desc:"Selymes tejhabbal" },
      { n:4, name:"Latte",           price:"900 Ft", desc:"Tejes kávé, nagy pohárban" },
      { n:5, name:"Melange",         price:"1000 Ft", desc:"Kávé tejszínhabbal" },
      { n:6, name:"Üdítők 0,33 l",   price:"700 Ft", desc:"Coca Cola, Cola Zero, Fanta, Sprite" },
      { n:7, name:"Cappy Juice 0,25 l", price:"700 Ft", desc:"Alma, eper, körte, őszibarack, narancs" },
      { n:8, name:"Fuzetea 0,25 l",  price:"700 Ft", desc:"Citrom, őszibarack" },
      { n:9, name:"Lemonsoda 0,33 l",price:"700 Ft", desc:"Lemon, Mojito, Orán, Zero" },
      { n:10, name:"Natur Aqua 0,33 l", price:"400 Ft", desc:"Szénsavas vagy szénsavmentes" },
    ]
  },
  DESSZERT: {
    label: "Desszertek",
    note: "Napi desszert kínálatunkról a pultnál érdeklődj!",
    items: [
      { n:1, name:"Napi desszert", price:"700 Ft", desc:"Tiramisu / panna cotta / profiterol / epres süti — változó kínálat" },
    ]
  }
};
