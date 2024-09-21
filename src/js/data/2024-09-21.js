dataSetVersion = "2024-09-21"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by branch",
    key: "branch",
    tooltip: "Check this to restrict to livers from certain branches.",
    checked: false,
    sub: [
      { name: "にじさんじ", key: "jp" },
      { name: "NIJISANJI ex-ID", key: "id" },
      { name: "NIJISANJI ex-KR", key: "kr" },
      { name: "NIJISANJI EN", key: "en" },
      { name: "NIJISANJI IN", key: "in" }
    ]
  },
  {
    name: "Exclude boys",
    key: "boy",
    tooltip: "Check this to exclude boys.",
    checked: false
  },
  {
    name: "Exclude girls",
    key: "girl",
    tooltip: "Check this to exclude girls.",
    checked: false
  },
  {
    name: "Exclude retired members",
    key: "retired",
    tooltip: "Check this to excluded graduated/retired/terminated members.",
    checked: true
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Tsukino Mito",
    img: "mito.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Yuki Chihiro",
    img: "chihiro.webp",
    opts: {
      branch: ['jp'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Elu",
    img: "elu.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Higuchi Kaede",
    img: "kaede.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Shizuka Rin",
    img: "rin.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Shibuya Hajime",
    img: "hajime.webp",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Suzuya Aki",
    img: "aki.webp",
    opts: {
      branch: ['jp'],
      boy: true,
      retired: true
    }
  },
  {
    name: "Moira",
    img: "moira.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Mononobe Alice",
    img: "alice.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Fushimi Gaku",
    img: "gaku.webp",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Ienaga Mugi",
    img: "mugi.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Morinaka Kazaki",
    img: "kazaki.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Suzuka Utako",
    img: "utako.png",
    opts: {
      branch: ['jp'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Ushimi Ichigo",
    img: "ichigo.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Yuuhi Riri",
    img: "riri.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Kenmochi Toya",
    img: "toya.webp",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Gilzaren III",
    img: "gilzaren.png",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Fumino Tamaki",
    img: "tamaki.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Kanae",
    img: "kanae.png",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Akabane Youko",
    img: "yoko.png",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Sasaki Saku",
    img: "saku.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Yamiyono Moruru",
    img: "moruru.png",
    opts: {
      branch: ['jp'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Honma Himawari",
    img: "himawari.png",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Makaino Ririmu",
    img: "ririmu.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Kuzuha",
    img: "kuzuha.webp",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Setsuna",
    img: "setsuna.png",
    opts: {
      branch: ['jp'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Shiina Yuika",
    img: "yuika.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Dola",
    img: "dola.png",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Hanabatake Chaika",
    img: "chaika.webp",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Hassaku Yuzu",
    img: "yuzu.png",
    opts: {
      branch: ['jp'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Izumo Kasumi",
    img: "kasumi.png",
    opts: {
      branch: ['jp'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Azuchi Momo",
    img: "momo.webp",
    opts: {
      branch: ['jp'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Nakao Azuma",
    img: "azuma.png",
    opts: {
      branch: ['jp'],
      boy: true,
      retired: true
    }
  },
  {
    name: "Naruto Kogane",
    img: "kogane.png",
    opts: {
      branch: ['jp'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Ryushen",
    img: "ryushen.png",
    opts: {
      branch: ['jp'],
    }
  },
  {
    name: "Sister Claire",
    img: "claire.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Suzuki Masaru",
    img: "masaru.webp",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Todoroki Kyoko",
    img: "kyoko.png",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Umiyashano Kami",
    img: "kami.png",
    opts: {
      branch: ['jp'],
      boy: true,
      retired: true
    }
  },
  {
    name: "Uzuki Kou",
    img: "kou.webp",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Yashiro Kizuku",
    img: "kizuku.webp",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Kanda Shoichi",
    img: "shoichi.webp",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Amemori Sayo",
    img: "sayo.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Takamiya Rion",
    img: "rion.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Asuka Hina",
    img: "hina.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Maimoto Keisuke",
    img: "keisuke.webp",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Debidebi Debiru",
    img: "debiru.webp",
    opts: {
      branch: ['jp'],
    }
  },
  {
    name: "Rindou Mikoto",
    img: "mikoto.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Joe Rikiichi",
    img: "joe.png",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Machita Chima",
    img: "chima.png",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Tsukimi Shizuku",
    img: "shizuku.png",
    opts: {
      branch: ['jp'],
      girl: true, 
      retired: true
    }
  },
  {
    name: "Sakura Ritsuki",
    img: "ritsuki.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Achikita Chinami",
    img: "chinami.png",
    opts: {
      branch: ['jp'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Belmond Banderas",
    img: "belmond.webp",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Yaguruma Rine",
    img: "rine.png",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Yumeoi Kakeru",
    img: "kakeru.webp",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Kuroi Shiba",
    img: "shiba.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Harusaki Air",
    img: "air.webp",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Naruse Naru",
    img: "naru.webp",
    opts: {
      branch: ['jp'],
      boy: true,
      retired: true
    }
  },
  {
    name: "Warabeda Meiji",
    img: "meiji.png",
    opts: {
      branch: ['jp'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Kudo Chitose",
    img: "chitose.png",
    opts: {
      branch: ['jp'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Gundou Mirei",
    img: "gundou.png",
    opts: {
      branch: ['jp'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Yuzuki Roa",
    img: "roa.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Onomachi Haruka",
    img: "haruka.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Kataribe Tsumugu",
    img: "tsumugu.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Seto Miyako",
    img: "miyako.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Shindo Raito",
    img: "raito.png",
    opts: {
      branch: ['jp'],
      boy: true,
      retired: true
    }
  },
  {
    name: "Otogibara Era",
    img: "era.png",
    opts: {
      branch: ['jp'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Inui Toko",
    img: "mybini5.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Ange Katrina",
    img: "ange.png",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Lize Helesta",
    img: "lize.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Saegusa Akina",
    img: "akina.webp",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Aizono Manami",
    img: "manami.png",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Suzuhara Lulu",
    img: "lulu.png",
    opts: {
      branch: ['jp'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Yukishiro Mahiro",
    img: "mahiro.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Ex Albio",
    img: "albio.webp",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Levi Elipha",
    img: "levi.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Hayama Marin",
    img: "marin.png",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Nui Sociere",
    img: "nui.png",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Hakase Fuyuki",
    img: "hakase.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Kagami Hayato",
    img: "hayato.webp",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Yorumi Rena",
    img: "rena.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Mayuzumi Kai",
    img: "kai.png",
    opts: {
      branch: ['jp'],
      boy: true,
      retired: true
    }
  },
  {
    name: "Ars Almal",
    img: "ars.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Aiba Uiha",
    img: "uiha.webp",
    opts: {
      branch: ['jp'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Amamiya Kokoro",
    img: "kokoro.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Eli Conifer",
    img: "eli.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Ratna Petit",
    img: "ratna.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Hayase Sou",
    img: "sou.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Sukoya Kana",
    img: "kana.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Shellin Burgundy",
    img: "shellin.webp",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Fumi",
    img: "fumi.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Hoshikawa Sara",
    img: "sara.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Yamagami Karuta",
    img: "karuta.png",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Matsukai Mao",
    img: "mao.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Emma★August",
    img: "emma.png",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Luis Cammy",
    img: "luis.png",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Fuwa Minato",
    img: "minato.webp",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Shirayuki Tomoe",
    img: "tomoe.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Gwelu Os Gar",
    img: "gwelu.webp",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Mashiro",
    img: "mashiro.webp",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Naraka",
    img: "naraka.png",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Kurusu Natsume",
    img: "natsume.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Furen E Lustario",
    img: "furen.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Ibrahim",
    img: "ibrahim.webp",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Melissa Kinrenka",
    img: "melissa.png",
    opts: {
      branch: ['jp'],
      retired: true
    }
  },
  {
    name: "Nagao Kei",
    img: "kei.png",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Genzuki Tojiro",
    img: "tojiro.png",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Kaida Haru",
    img: "haru.webp",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Kingyozaka Meiro",
    img: "meiro.png",
    opts: {
      branch: ['jp'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Sorahoshi Kirame",
    img: "kirame.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Asahina Akane",
    img: "mybini1.png",
    opts: {
      branch: ['jp'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Suo Sango",
    img: "sango.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Todo Kohaku",
    img: "kohaku.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Kitakoji Hisui",
    img: "hisui.png",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Nishizono Chigusa",
    img: "chigusa.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Lain Paterson",
    img: "lain.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Axia Krone",
    img: "axia.png",
    opts: {
      branch: ['jp'],
      boy: true,
      retired: true
    }
  },
  {
    name: "Lauren Iroas",
    img: "lauren.png",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Leos Vincent",
    img: "leos.webp",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Oliver Evans",
    img: "oliver.webp",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Hana Macchia",
    img: "hana.webp",
    opts: {
      branch: ['id'],
      girl: true
    }
  },
  {
    name: "ZEA Cornelia",
    img: "zea.png",
    opts: {
      branch: ['id'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Taka Radjiman",
    img: "taka.png",
    opts: {
      branch: ['id'],
      boy: true,
      retired: true
    }
  },
  {
    name: "Rai Galilei",
    img: "rai.webp",
    opts: {
      branch: ['id'],
      boy: true
    }
  },
  {
    name: "Riksa Dhirendra",
    img: "riksa.webp",
    opts: {
      branch: ['id'],
      boy: true
    }
  },
  {
    name: "Amicia Michella",
    img: "amicia.png",
    opts: {
      branch: ['id'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Miyu Ottavia",
    img: "miyu.png",
    opts: {
      branch: ['id'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Azura Cecillia",
    img: "azura.png",
    opts: {
      branch: ['id'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Layla Alstroemeria",
    img: "layla.webp",
    opts: {
      branch: ['id'],
      girl: true
    }
  },
  {
    name: "Nara Haramaung",
    img: "nara.png",
    opts: {
      branch: ['id'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Etna Crimson",
    img: "etna.webp",
    opts: {
      branch: ['id'],
      girl: true
    }
  },
  {
    name: "Bonnivier Pranaja",
    img: "bonnivier.webp",
    opts: {
      branch: ['id'],
      boy: true,
      retired: true
    }
  },
  {
    name: "Siska Leontyne",
    img: "siska.png",
    opts: {
      branch: ['id'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Nagisa Arcinia",
    img: "nagisa.webp",
    opts: {
      branch: ['id'],
      girl: true
    }
  },
  {
    name: "Derem Kado",
    img: "derem.png",
    opts: {
      branch: ['id'],
      girl: true
    }
  },
  {
    name: "Reza Avanluna",
    img: "reza.png",
    opts: {
      branch: ['id'],
      boy: true,
      retired: true
    }
  },
  {
    name: "Hyona Elatiora",
    img: "hyona.png",
    opts: {
      branch: ['id'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Xia Ekavira",
    img: "xia.webp",
    opts: {
      branch: ['id'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Mika Melatika",
    img: "mika.webp",
    opts: {
      branch: ['id'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Wiffy",
    img: "wiffy.png",
    opts: {
      branch: ['kr'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Yu Ruri",
    img: "ruri.png",
    opts: {
      branch: ['kr'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Shin Yuya",
    img: "yuya.png",
    opts: {
      branch: ['kr'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Min Suha",
    img: "suha.webp",
    opts: {
      branch: ['kr'],
      boy: true
    }
  },
  {
    name: "Moarin",
    img: "moarin.png",
    opts: {
      branch: ['kr'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Gaon",
    img: "gaon.png",
    opts: {
      branch: ['kr'],
      boy: true
    }
  },
  {
    name: "Kaen",
    img: "kaen.png",
    opts: {
      branch: ['kr'],
      boy: true,
      retired: true
    }
  },
  {
    name: "Lorou",
    img: "lorou.png",
    opts: {
      branch: ['kr'],
      boy: true,
      retired: true
    }
  },
  {
    name: "Han Chiho",
    img: "chiho.png",
    opts: {
      branch: ['kr'],
      boy: true,
      retired: true
    }
  },
  {
    name: "Hakuren",
    img: "hakuren.png",
    opts: {
      branch: ['kr'],
      boy: true,
      retired: true
    }
  },
  {
    name: "Lee Siu",
    img: "siu.png",
    opts: {
      branch: ['kr'],
      girl: true,
      retired: true
    }
  },
  {
    name: "So Nagi",
    img: "nagi.png",
    opts: {
      branch: ['kr'],
      girl: true
    }
  },
  {
    name: "Chae Ara",
    img: "ara.png",
    opts: {
      branch: ['kr'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Akira Ray",
    img: "ray.webp",
    opts: {
      branch: ['kr'],
      girl: true
    }
  },
  {
    name: "Lee Roha",
    img: "roha.webp",
    opts: {
      branch: ['kr'],
      girl: true
    }
  },
  {
    name: "Nun Bora",
    img: "bora.png",
    opts: {
      branch: ['kr'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Oh Jiyu",
    img: "jiyu.webp",
    opts: {
      branch: ['kr'],
      girl: true
    }
  },
  {
    name: "Shin Kiru",
    img: "kiru.png",
    opts: {
      branch: ['kr'],
      boy: true,
      retired: true
    }
  },
  {
    name: "Yang Nari",
    img: "nari.webp",
    opts: {
      branch: ['kr'],
      girl: true
    }
  },
  {
    name: "Ryu Hari",
    img: "hari.webp",
    opts: {
      branch: ['kr'],
      girl: true
    }
  },
  {
    name: "Seffyna",
    img: "seffyna.png",
    opts: {
      branch: ['kr'],
      girl: true
    }
  },
  {
    name: "Ban Hada",
    img: "hada.webp",
    opts: {
      branch: ['kr'],
      girl: true
    }
  },
  {
    name: "Song Mia",
    img: "mia.png",
    opts: {
      branch: ['kr'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Elira Pendora",
    img: "elira.webp",
    opts: {
      branch: ['en'],
      girl: true
    }
  },
  {
    name: "Pomu Rainpuff",
    img: "pomu.webp",
    opts: {
      branch: ['en'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Finana Ryugu",
    img: "finana.webp",
    opts: {
      branch: ['en'],
      girl: true
    }
  },
  {
    name: "Selen Tatsuki",
    img: "selen.webp",
    opts: {
      branch: ['en'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Rosemi Lovelock",
    img: "mybini2.webp",
    opts: {
      branch: ['en'],
      girl: true
    }
  },
  {
    name: "Petra Gurin",
    img: "petra.webp",
    opts: {
      branch: ['en'],
      girl: true
    }
  },
  {
    name: "Nina Kosaka",
    img: "nina.png",
    opts: {
      branch: ['en'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Millie Parfait",
    img: "millie.webp",
    opts: {
      branch: ['en'],
      girl: true
    }
  },
  {
    name: "Enna Alouette",
    img: "enna.webp",
    opts: {
      branch: ['en'],
      girl: true
    }
  },
  {
    name: "Reimu Endou",
    img: "reimu.png",
    opts: {
      branch: ['en'],
      girl: true
    }
  },
  {
    name: "Luca Kaneshiro",
    img: "luca.png",
    opts: {
      branch: ['en'],
      boy: true
    }
  },
  {
    name: "Shu Yamino",
    img: "shu.png",
    opts: {
      branch: ['en'],
      boy: true
    }
  },
  {
    name: "Ike Eveland",
    img: "ike.png",
    opts: {
      branch: ['en'],
      boy: true
    }
  },
  {
    name: "Mysta Rias",
    img: "mysta.png",
    opts: {
      branch: ['en'],
      boy: true,
      retired: true
    }
  },
  {
    name: "Vox Akuma",
    img: "vox.png",
    opts: {
      branch: ['en'],
      boy: true
    }
  },
  {
    name: "Aadya",
    img: "aadya.png",
    opts: {
      branch: ['in'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Noor",
    img: "noor.png",
    opts: {
      branch: ['in'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Vihaan",
    img: "vihaan.png",
    opts: {
      branch: ['in'],
      boy: true,
      retired: true
    }
  },
  {
    name: "Ha Yun",
    img: "yun.png",
    opts: {
      branch: ['kr'],
      boy: true,
    }
  },
  {
    name: "Na Sera",
    img: "sera.webp",
    opts: {
      branch: ['kr'],
      girl: true,
    }
  },
  {
    name: "Ko Yami",
    img: "ko.png",
    opts: {
      branch: ['kr'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Lee On",
    img: "lee.png",
    opts: {
      branch: ['kr'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Umise Yotsuha",
    img: "yotsuha.webp",
    opts: {
      branch: ['jp'],
      girl: true,
    }
  },
  {
    name: "Amagase Muyu",
    img: "muyu.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Ponto Nei",
    img: "nei.png",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Hyakumantenbara Salome",
    img: "salome.webp",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Sonny Brisko",
    img: "sonny.webp",
    opts: {
      branch: ['en'],
      boy: true
    }
  },
  {
    name: "Uki Violeta",
    img: "uki.webp",
    opts: {
      branch: ['en'],
      boy: true
    }
  },
  {
    name: "Alban Knox",
    img: "alban.webp",
    opts: {
      branch: ['en'],
      boy: true
    }
  },
  {
    name: "Fulgur Ovid",
    img: "fulgur.webp",
    opts: {
      branch: ['en'],
      boy: true
    }
  },
  {
    name: "Yugo Asuma",
    img: "yugo.png",
    opts: {
      branch: ['en'],
      boy: true,
      retired: true
    }
  },
  {
    name: "Shikinagi Akira",
    img: "akira.webp",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Seraph Dazzlegarden",
    img: "seraph.webp",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Fura Kanato",
    img: "kanato.webp",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Watarai Hibari",
    img: "hibari.webp",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Aia Amare",
    img: "aia.webp",
    opts: {
      branch: ['en'],
      girl: true
    }
  },
  {
    name: "Kyo Kaneko",
    img: "kyo.webp",
    opts: {
      branch: ['en'],
      boy: true,
      retired: true
    }
  },
  {
    name: "Aster Arcadia",
    img: "aster.webp",
    opts: {
      branch: ['en'],
      boy: true
    }
  },
  {
    name: "Maria Marionette",
    img: "mybini3.webp",
    opts: {
      branch: ['en'],
      girl: true
    }
  },
  {
    name: "Ren Zotto",
    img: "ren.webp",
    opts: {
      branch: ['en'],
      boy: true
    }
  },
  {
    name: "Scarle Yonaguni",
    img: "scarle.webp",
    opts: {
      branch: ['en'],
      girl: true
    }
  },
  {
    name: "Kotoka Torahime",
    img: "kotoka.png",
    opts: {
      branch: ['en'],
      girl: true
    }
  },
  {
    name: "Hex Haywire",
    img: "hex.png",
    opts: {
      branch: ['en'],
      boy: true,
      retired: true
    }
  },
  {
    name: "Doppio Dropscythe",
    img: "doppio.png",
    opts: {
      branch: ['en'],
      boy: true
    }
  },
  {
    name: "Meloco Kyoran",
    img: "meloco.png",
    opts: {
      branch: ['en'],
      girl: true
    }
  },
  {
    name: "Ver Vermillion",
    img: "ver.png",
    opts: {
      branch: ['en'],
      boy: true
    }
  },
  {
    name: "Zaion LanZa",
    img: "zaion.png",
    opts: {
      branch: ['en'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Igarashi Rika",
    img: "rika.png",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Ishigami Nozomi",
    img: "nozomi.png",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Kuramochi Meruto",
    img: "mybini4.png",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Kaburaki Roco",
    img: "roco.png",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Koshimizu Toru",
    img: "toru.png",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Shishido Akari",
    img: "akari.png",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Sophia Valentine",
    img: "sophia.png",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Akagi Wen",
    img: "wen.png",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Usami Rito",
    img: "rito.png",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Saiki Ittetsu",
    img: "ittetsu.png",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Hibachi Mana",
    img: "mana.png",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Inami Rai",
    img: "rai.png",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Koyanagi Rou",
    img: "rou.png",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Hoshirube Sho",
    img: "sho.png",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Murakumo Kagetsu",
    img: "kagetsu.png",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Vantacrow Bringer",
    img: "vanta.png",
    opts: {
      branch: ['en'],
      boy: true
    }
  },
  {
    name: "Yu Q. Wilson",
    img: "wilson.png",
    opts: {
      branch: ['en'],
      boy: true
    }
  },
  {
    name: "Vezalius Bandage",
    img: "vez.png",
    opts: {
      branch: ['en'],
      boy: true
    }
  },
  {
    name: "Claude Clawmark",
    img: "claude.png",
    opts: {
      branch: ['en'],
      boy: true
    }
  },
  {
    name: "Kunai Nakasato",
    img: "kunai.png",
    opts: {
      branch: ['en'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Victoria Brightshield",
    img: "victoria.png",
    opts: {
      branch: ['en'],
      girl: true
    }
  },
  {
    name: "Shioriha Ruri",
    img: "shioruri.png",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Tachisute Toto",
    img: "toto.png",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Milan Kestrel",
    img: "milan.png",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Kaisei",
    img: "kaisei.png",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Kitami Yusei",
    img: "yusei.png",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Sakaki Ness",
    img: "ness.png",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Klara Charmwood",
    img: "klara.png",
    opts: {
      branch: ['en'],
      girl: true
    }
  },
  {
    name: "Ryoma Barrenwort",
    img: "ryoma.png",
    opts: {
      branch: ['en'],
      boy: true
    }
  },
  {
    name: "Twisty Amanozako",
    img: "twisty.png",
    opts: {
      branch: ['en'],
      girl: true
    }
  },
  {
    name: "Kisara",
    img: "kisara.png",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Kozue Mone",
    img: "mone.png",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Shiga Riko",
    img: "riko.png",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Tamanoi Nana",
    img: "nana.png",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Lunlun",
    img: "lunlun.png",
    opts: {
      branch: ['jp']
    }
  },
  {
    name: "Kirara Tamako",
    img: "tamako.png",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Saotome Berry",
    img: "berry.png",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
  {
    name: "Sakayori Soma",
    img: "soma.png",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Nagisa Trout",
    img: "nagisa.png",
    opts: {
      branch: ['jp'],
      boy: true
    }
  },
  {
    name: "Nanase Suzuna",
    img: "suzuna.png",
    opts: {
      branch: ['jp'],
      girl: true
    }
  },
]
