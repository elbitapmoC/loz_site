// Torah Portion Data Service for TLOZ Calendar - PRODUCTION OPTIMIZED

export interface TorahPortion {
  title: string;
  hebcalTitle: string;
  slug: string;
  key: number;
  date: string;
  hdate: string;
  book: string;
  hebrew: string;
  leyning: {
    torah: string;
    haftarah: string;
    gospel: string;
    haftarah_sephardic?: string;
    maftir?: string;
    haftarahPossible?: string;
  };
  special?: string;
}

export interface SpecialShabbat {
  title: string;
  slug: string;
  category: string;
  leyning: {
    torah: string;
    haftarah: string;
    gospel: string;
  };
  link: string;
}

export interface Holiday {
  title: string;
  hebcalTitle: string;
  altHebcalTitle?: string;
  slug: string;
  date: string;
  hdate: string;
  book: string;
  category: string;
  hebrew: string;
  leyning: {
    torah: string;
    haftarah: string;
    gospel: string;
    maftir: string;
  };
}

// Complete Torah Portions Data - Sorted by date for binary search
const torahPortions: TorahPortion[] = [
  {
    title: "B'reisheet",
    hebcalTitle: "Bereshit",
    slug: "breisheet",
    key: 0,
    date: "2024-10-26",
    hdate: "24 Tishrei 5785",
    book: "Genesis",
    hebrew: " בראשית",
    leyning: {
      torah: "Genesis 1:1-6:8",
      haftarah: "Isaiah 42:5-43:10",
      gospel: "John 1:1-17",
      haftarah_sephardic: "Isaiah 42:5-21",
      maftir: "Genesis 6:5-6:8",
    },
  },
  {
    title: "Noach",
    hebcalTitle: "Noach",
    slug: "noach",
    key: 1,
    date: "2024-11-02",
    hdate: "1 Cheshvan 5785",
    book: "Genesis",
    hebrew: " נח",
    leyning: {
      torah: "Genesis 6:9-11:32",
      haftarah: "Isaiah 54:1-55:5",
      gospel: "Luke 17:20-27",
      haftarah_sephardic: "Isaiah 54:1-10",
      maftir: "Genesis 11:29-11:32",
    },
    special: "rosh-chodesh",
  },
  {
    title: "Lech-Lecha",
    hebcalTitle: "Lech-Lecha",
    slug: "lech-lecha",
    key: 2,
    date: "2024-11-09",
    hdate: "8 Cheshvan 5785",
    book: "Genesis",
    hebrew: " לך־לך",
    leyning: {
      torah: "Genesis 12:1-17:27",
      haftarah: "Isaiah 40:27-41:16",
      gospel: "John 8:51-58",
      maftir: "Genesis 17:24-17:27",
    },
  },
  {
    title: "Vayera",
    hebcalTitle: "Vayera",
    slug: "vayera",
    key: 3,
    date: "2024-11-16",
    hdate: "15 Cheshvan 5785",
    book: "Genesis",
    hebrew: " וירא",
    leyning: {
      torah: "Genesis 18:1-22:24",
      haftarah: "II Kings 4:1-37",
      gospel: "Luke 17:28-37",
      haftarah_sephardic: "II Kings 4:1-23",
      maftir: "Genesis 22:20-22:24",
    },
  },
  {
    title: "Chayei Sarah",
    hebcalTitle: "Chayei Sara",
    slug: "chayei-sarah",
    key: 4,
    date: "2024-11-23",
    hdate: "22 Cheshvan 5785",
    book: "Genesis",
    hebrew: " חיי שרה",
    leyning: {
      torah: "Genesis 23:1-25:18",
      haftarah: "I Kings 1:1-31",
      gospel: "John 4:3-14",
      maftir: "Genesis 25:16-25:18",
    },
  },
  {
    title: "Toldot",
    hebcalTitle: "Toldot",
    slug: "toldot",
    key: 5,
    date: "2024-11-30",
    hdate: "29 Cheshvan 5785",
    book: "Genesis",
    hebrew: " תולדות",
    leyning: {
      torah: "Genesis 25:19-28:9",
      haftarah: "Malachi 1:1-2:7",
      gospel: "Matthew 10:21-38",
      maftir: "Genesis 28:7-28:9",
    },
    special: "machar-chodesh",
  },
  {
    title: "Vayetze",
    hebcalTitle: "Vayetzei",
    slug: "vayetze",
    key: 6,
    date: "2024-12-07",
    hdate: "6 Kislev 5785",
    book: "Genesis",
    hebrew: " ויצא",
    leyning: {
      torah: "Genesis 28:10-32:3",
      haftarah: "Hosea 12:13-14:10",
      gospel: "John 1:41-51",
      haftarah_sephardic: "Hosea 11:7-12:12",
      maftir: "Genesis 32:1-32:3",
    },
  },
  {
    title: "Vayishlach",
    hebcalTitle: "Vayishlach",
    slug: "vayishlach",
    key: 7,
    date: "2024-12-14",
    hdate: "13 Kislev 5785",
    book: "Genesis",
    hebrew: " וישלח",
    leyning: {
      torah: "Genesis 32:4-36:43",
      haftarah: "Obadiah 1:1-21",
      gospel: "Matthew 2:13-23",
      maftir: "Genesis 36:40-36:43",
    },
  },
  {
    title: "Vayeshev",
    hebcalTitle: "Vayeshev",
    slug: "vayeshev",
    key: 8,
    date: "2024-12-21",
    hdate: "20 Kislev 5785",
    book: "Genesis",
    hebrew: " וישב",
    leyning: {
      torah: "Genesis 37:1-40:23",
      haftarah: "Amos 2:6-3:8",
      gospel: "Matthew 1:18-25",
      maftir: "Genesis 40:20-40:23",
    },
  },
  {
    title: "Miketz",
    hebcalTitle: "Miketz",
    slug: "miketz",
    key: 9,
    date: "2024-12-28",
    hdate: "27 Kislev 5785",
    book: "Genesis",
    hebrew: " מקץ",
    leyning: {
      torah: "Genesis 41:1-44:17",
      haftarah: "I Kings 3:15-4:1",
      gospel: "Luke 24:13-29",
      maftir: "Genesis 44:14-44:17",
    },
    special: "shabbat-hanukkah-1",
  },
  {
    title: "Vayigash",
    hebcalTitle: "Vayigash",
    slug: "vayigash",
    key: 10,
    date: "2025-01-04",
    hdate: "4 Tevet 5785",
    book: "Genesis",
    hebrew: " ויגש",
    leyning: {
      torah: "Genesis 44:18-47:27",
      haftarah: "Ezekiel 37:15-28",
      gospel: "Luke 24:30-48",
      maftir: "Genesis 47:25-47:27",
    },
  },
  {
    title: "Vayechi",
    hebcalTitle: "Vayechi",
    slug: "vayechi",
    key: 11,
    date: "2025-01-11",
    hdate: "11 Tevet 5785",
    book: "Genesis",
    hebrew: " ויחי",
    leyning: {
      torah: "Genesis 47:28-50:26",
      haftarah: "I Kings 2:1-12",
      gospel: "John 13:1-19",
      maftir: "Genesis 50:23-50:26",
    },
  },
  {
    title: "Shemot",
    hebcalTitle: "Shemot",
    slug: "shemot",
    key: 12,
    date: "2025-01-18",
    hdate: "18 Tevet 5785",
    book: "Exodus",
    hebrew: " שמות",
    leyning: {
      torah: "Exodus 1:1-6:1",
      haftarah: "Isaiah 27:6-28:13, 29:22-23",
      gospel: "Matthew 2:1-12",
      haftarah_sephardic: "Jeremiah 1:1-2:3",
      maftir: "Exodus 5:22-6:1",
    },
  },
  {
    title: "Vaera",
    hebcalTitle: "Vaera",
    slug: "vaera",
    key: 13,
    date: "2025-01-25",
    hdate: "25 Tevet 5785",
    book: "Exodus",
    hebrew: " וארא",
    leyning: {
      torah: "Exodus 6:2-9:35",
      haftarah: "Ezekiel 28:25-29:21",
      gospel: "Luke 11:14-22",
      maftir: "Exodus 9:33-9:35",
    },
  },
  {
    title: "Bo",
    hebcalTitle: "Bo",
    slug: "bo",
    key: 14,
    date: "2025-02-01",
    hdate: "3 Sh'vat 5785",
    book: "Exodus",
    hebrew: " בא",
    leyning: {
      torah: "Exodus 10:1-13:16",
      haftarah: "Jeremiah 46:13-28",
      gospel: "John 19:31-37",
      maftir: "Exodus 13:14-13:16",
    },
  },
  {
    title: "Beshalach",
    hebcalTitle: "Beshalach",
    slug: "beshalach",
    key: 15,
    date: "2025-02-08",
    hdate: "10 Sh'vat 5785",
    book: "Exodus",
    hebrew: " בשלח",
    leyning: {
      torah: "Exodus 13:17-17:16",
      haftarah: "Judges 4:4-5:31",
      gospel: "Matthew 14:22-33",
      haftarah_sephardic: "Judges 5:1-31",
      maftir: "Exodus 17:14-17:16",
    },
  },
  {
    title: "Yitro",
    hebcalTitle: "Yitro",
    slug: "yitro",
    key: 16,
    date: "2025-02-15",
    hdate: "17 Sh'vat 5785",
    book: "Exodus",
    hebrew: " יתרו",
    leyning: {
      torah: "Exodus 18:1-20:23",
      haftarah: "Isaiah 6:1-7:6, 9:5-6",
      gospel: "Matthew 19:16-26",
      haftarah_sephardic: "Isaiah 6:1-13",
      maftir: "Exodus 20:19-20:23",
    },
  },
  {
    title: "Mishpatim",
    hebcalTitle: "Mishpatim",
    slug: "mishpatim",
    key: 17,
    date: "2025-02-22",
    hdate: "24 Sh'vat 5785",
    book: "Exodus",
    hebrew: " משפטים",
    leyning: {
      torah: "Exodus 21:1-24:18",
      haftarah: "Jeremiah 34:8-22, 33:25-26",
      gospel: "Matthew 26:20-30",
      maftir: "Exodus 24:12-24:18",
    },
  },
  {
    title: "Terumah",
    hebcalTitle: "Terumah",
    slug: "terumah",
    key: 18,
    date: "2025-03-01",
    hdate: "1 Adar 5785",
    book: "Exodus",
    hebrew: " תרומה",
    leyning: {
      torah: "Exodus 25:1-27:19",
      haftarah: "I Kings 5:26-6:13",
      gospel: "Mark 12:35-44",
      maftir: "Exodus 27:17-27:19",
    },
    special: "shabbat-shekalim",
  },
  {
    title: "Tetzaveh",
    hebcalTitle: "Tetzaveh",
    slug: "tetzaveh",
    key: 19,
    date: "2025-03-08",
    hdate: "8 Adar 5785",
    book: "Exodus",
    hebrew: " תצוה",
    leyning: {
      torah: "Exodus 27:20-30:10",
      haftarah: "Ezekiel 43:10-27",
      gospel: "Matthew 5:13-20",
      maftir: "Exodus 30:8-30:10",
    },
    special: "shabbat-zachor",
  },
  {
    title: "Ki Tisa",
    hebcalTitle: "Ki Tisa",
    slug: "ki-tisa",
    key: 20,
    date: "2025-03-15",
    hdate: "15 Adar 5785",
    book: "Exodus",
    hebrew: " כי תשא",
    leyning: {
      torah: "Exodus 30:11-34:35",
      haftarah: "I Kings 18:1-39",
      gospel: "Mark 9:1-10",
      haftarah_sephardic: "I Kings 18:20-39",
      maftir: "Exodus 34:29-34:35",
    },
  },
  {
    title: "Vayak'hel",
    hebcalTitle: "Vayakhel",
    slug: "vayakhel",
    key: 21,
    date: "2025-03-22",
    hdate: "22 Adar 5785",
    book: "Exodus",
    hebrew: " ויקהל",
    leyning: {
      torah: "Exodus 35:1-38:20",
      haftarah: "I Kings 7:40-50",
      gospel: "Matthew 12:1-13",
      maftir: "Exodus 12:1-12:20",
    },
    special: "shabbat-parah",
  },
  {
    title: "Pekudei",
    hebcalTitle: "Pekudei",
    slug: "pekudei",
    key: 22,
    date: "2025-03-29",
    hdate: "29 Adar 5785",
    book: "Exodus",
    hebrew: " פקודי",
    leyning: {
      torah: "Exodus 38:21-40:38",
      haftarah: "I Kings 7:51-8:21",
      gospel: "Luke 16:1-13",
      maftir: "Exodus 12:1-12:20",
    },
    special: "shabbat-hachodesh",
  },
  {
    title: "Vayikra",
    hebcalTitle: "Vayikra",
    slug: "vayikra",
    key: 24,
    date: "2025-04-05",
    hdate: "7 Nisan 5785",
    book: "Leviticus",
    hebrew: " ויקרא",
    leyning: {
      torah: "Leviticus 1:1-5:26",
      haftarah: "Isaiah 43:21-44:23",
      gospel: "Matthew 5:23-30",
      maftir: "Leviticus 5:24-5:26",
    },
  },
  {
    title: "Tzav",
    hebcalTitle: "Tzav",
    slug: "tzav",
    key: 25,
    date: "2025-04-12",
    hdate: "14 Nisan 5785",
    book: "Leviticus",
    hebrew: " צו",
    leyning: {
      torah: "Leviticus 6:1-8:36",
      haftarah: "Jeremiah 7:21-8:3, 9:22-23",
      gospel: "Matthew 9:13-25",
      maftir: "Leviticus 8:33-8:36",
    },
    special: "shabbat-hagadol",
  },
  {
    title: "Sh'mini",
    hebcalTitle: "Shmini",
    slug: "shemini",
    key: 26,
    date: "2025-04-26",
    hdate: "28 Nisan 5785",
    book: "Leviticus",
    hebrew: " שמיני",
    leyning: {
      torah: "Leviticus 9:1-11:47",
      haftarah: "II Samuel 6:1-7:17",
      gospel: "Matthew 3:11-17",
      haftarah_sephardic: "II Samuel 6:1-19",
      maftir: "Leviticus 11:45-11:47",
    },
  },
  {
    title: "Tazria-Metzora",
    hebcalTitle: "Tazria-Metzora",
    slug: "tazria-metzora",
    key: 29,
    date: "2025-05-03",
    hdate: "5 Iyyar 5785",
    book: "Leviticus",
    hebrew: " תזריע־מצרע",
    leyning: {
      torah: "Leviticus 12:1-15:33",
      haftarah: "II Kings 7:3-20",
      gospel: "Luke 2:22-35; Mark 1:35-45",
      maftir: "Leviticus 15:31-15:33",
    },
  },
  {
    title: "Acharei Mot-Kedoshim",
    hebcalTitle: "Achrei Mot-Kedoshim",
    slug: "acharei-mot-kedoshim",
    key: 32,
    date: "2025-05-10",
    hdate: "12 Iyyar 5785",
    book: "Leviticus",
    hebrew: " אחרי מות־קדשים",
    leyning: {
      torah: "Leviticus 16:1-20:27",
      haftarah: "Amos 9:7-15",
      haftarahPossible: "Ezekiel 22:1-19",
      gospel: "Matthew 15:10-20",
      maftir: "Leviticus 20:25-20:27",
    },
  },
  {
    title: "Emor",
    hebcalTitle: "Emor",
    slug: "emor",
    key: 33,
    date: "2025-05-17",
    hdate: "19 Iyyar 5785",
    book: "Leviticus",
    hebrew: " אמור",
    leyning: {
      torah: "Leviticus 21:1-24:23",
      haftarah: "Ezekiel 44:15-31",
      gospel: "Matthew 26:59-66",
      maftir: "Leviticus 24:21-24:23",
    },
  },
  {
    title: "Behar-Bechukotai",
    hebcalTitle: "Behar-Bechukotai",
    slug: "behar-bechukotai",
    key: 36,
    date: "2025-05-24",
    hdate: "26 Iyyar 5785",
    book: "Leviticus",
    hebrew: " בהר־בחקתי",
    leyning: {
      torah: "Leviticus 25:1-27:34",
      haftarah: "Jeremiah 16:19-17:14",
      gospel: "Luke 4:14-22; Matthew 16:20-28",
      maftir: "Leviticus 27:32-27:34",
    },
  },
  {
    title: "Bamidbar",
    hebcalTitle: "Bamidbar",
    slug: "bamidbar",
    key: 37,
    date: "2025-05-31",
    hdate: "4 Sivan 5785",
    book: "Numbers",
    hebrew: " במדבר",
    leyning: {
      torah: "Numbers 1:1-4:20",
      haftarah: "Hosea 2:1-22",
      gospel: "Matthew 4:1-17",
      maftir: "Numbers 4:17-4:20",
    },
  },
  {
    title: "Nasso",
    hebcalTitle: "Nasso",
    slug: "nasso",
    key: 38,
    date: "2025-06-07",
    hdate: "11 Sivan 5785",
    book: "Numbers",
    hebrew: " נשא",
    leyning: {
      torah: "Numbers 4:21-7:89",
      haftarah: "Judges 13:2-25",
      gospel: "Luke 1:11-20",
      maftir: "Numbers 7:87-7:89",
    },
  },
  {
    title: "Beha'alotcha",
    hebcalTitle: "Beha'alotcha",
    slug: "behaalotcha",
    key: 39,
    date: "2025-06-14",
    hdate: "18 Sivan 5785",
    book: "Numbers",
    hebrew: " בהעלתך",
    leyning: {
      torah: "Numbers 8:1-12:16",
      haftarah: "Zechariah 2:14-4:7",
      gospel: "Matthew 14:14-21",
      maftir: "Numbers 12:14-12:16",
    },
  },
  {
    title: "Shelach",
    hebcalTitle: "Sh'lach",
    slug: "shelach",
    key: 40,
    date: "2025-06-21",
    hdate: "25 Sivan 5785",
    book: "Numbers",
    hebrew: " שלח־לך",
    leyning: {
      torah: "Numbers 13:1-15:41",
      haftarah: "Joshua 2:1-24",
      gospel: "Matthew 10:1-14",
      maftir: "Numbers 15:37-15:41",
    },
  },
  {
    title: "Korach",
    hebcalTitle: "Korach",
    slug: "korach",
    key: 41,
    date: "2025-06-28",
    hdate: "2 Tamuz 5785",
    book: "Numbers",
    hebrew: " קורח",
    leyning: {
      torah: "Numbers 16:1-18:32",
      haftarah: "I Samuel 11:14-12:22",
      gospel: "Matthew 26:13-24",
      maftir: "Numbers 18:30-18:32",
    },
  },
  {
    title: "Chukat",
    hebcalTitle: "Chukat",
    slug: "chukat",
    key: 42,
    date: "2025-07-05",
    hdate: "9 Tamuz 5785",
    book: "Numbers",
    hebrew: " חקת",
    leyning: {
      torah: "Numbers 19:1-22:1",
      haftarah: "Judges 11:1-33",
      gospel: "John 2:1-12",
      maftir: "Numbers 25:7-25:9",
    },
  },
  {
    title: "Balak",
    hebcalTitle: "Balak",
    slug: "balak",
    key: 43,
    date: "2025-07-12",
    hdate: "16 Tamuz 5785",
    book: "Numbers",
    hebrew: " בלק",
    leyning: {
      torah: "Numbers 22:2-25:9",
      haftarah: "Micah 5:6-6:8",
      gospel: "Matthew 21:1-11",
      maftir: "Numbers 25:7-25:9",
    },
  },
  {
    title: "Pinchas",
    hebcalTitle: "Pinchas",
    slug: "pinchas",
    key: 45,
    date: "2025-07-19",
    hdate: "23 Tamuz 5785",
    book: "Numbers",
    hebrew: " פינחס",
    leyning: {
      torah: "Numbers 25:10-30:1",
      haftarah: "Jeremiah 1:1-2:3",
      gospel: "John 2:13-22",
      maftir: "Numbers 29:35-30:1",
    },
  },
  {
    title: "Mattot-Massei",
    hebcalTitle: "Matot-Masei",
    slug: "mattot-massei",
    key: 48,
    date: "2025-07-26",
    hdate: "1 Av 5785",
    book: "Numbers",
    hebrew: " מטות־מסעי",
    leyning: {
      torah: "Numbers 30:2-36:13",
      haftarah: "Jeremiah 2:4-28, 3:4",
      gospel: "Luke 13:1-9; Mark 11:12-23",
      maftir: "Numbers 36:11-36:13",
    },
    special: "rosh-chodesh",
  },
  {
    title: "Devarim",
    hebcalTitle: "Devarim",
    slug: "devarim",
    key: 49,
    date: "2025-08-02",
    hdate: "8 Av 5785",
    book: "Deuteronomy",
    hebrew: " דברים",
    leyning: {
      torah: "Deuteronomy 1:1-3:22",
      haftarah: "Isaiah 1:1-27",
      gospel: "Matthew 24:1-22",
      maftir: "Deuteronomy 3:20-3:22",
    },
    special: "shabbat-chazon",
  },
  {
    title: "Va'etchanan",
    hebcalTitle: "Vaetchanan",
    slug: "vaetchanan",
    key: 50,
    date: "2025-08-09",
    hdate: "15 Av 5785",
    book: "Deuteronomy",
    hebrew: " ואתחנן",
    leyning: {
      torah: "Deuteronomy 3:23-7:11",
      haftarah: "Isaiah 40:1-26",
      gospel: "Luke 3:2-15",
      maftir: "Deuteronomy 7:9-7:11",
    },
    special: "shabbat-nachamu",
  },
  {
    title: "Ekev",
    hebcalTitle: "Eikev",
    slug: "ekev",
    key: 51,
    date: "2025-08-16",
    hdate: "22 Av 5785",
    book: "Deuteronomy",
    hebrew: " עקב",
    leyning: {
      torah: "Deuteronomy 7:12-11:25",
      haftarah: "Isaiah 49:14-51:3",
      gospel: "Matthew 16:13-20",
      maftir: "Deuteronomy 11:22-11:25",
    },
  },
  {
    title: "Re'eh",
    hebcalTitle: "Re'eh",
    slug: "reeh",
    key: 52,
    date: "2025-08-23",
    hdate: "29 Av 5785",
    book: "Deuteronomy",
    hebrew: " ראה",
    leyning: {
      torah: "Deuteronomy 11:26-16:17",
      haftarah: "Isaiah 54:11-55:5",
      gospel: "John 6:35-51",
      maftir: "Deuteronomy 16:13-16:17",
    },
  },
  {
    title: "Shoftim",
    hebcalTitle: "Shoftim",
    slug: "shoftim",
    key: 53,
    date: "2025-08-30",
    hdate: "6 Elul 5785",
    book: "Deuteronomy",
    hebrew: " שופטים",
    leyning: {
      torah: "Deuteronomy 16:18-21:9",
      haftarah: "Isaiah 51:12-52:12",
      gospel: "John 14:9-20",
      maftir: "Deuteronomy 21:7-21:9",
    },
  },
  {
    title: "Ki Tetze",
    hebcalTitle: "Ki Teitzei",
    slug: "ki-tetze",
    key: 54,
    date: "2025-09-06",
    hdate: "13 Elul 5785",
    book: "Deuteronomy",
    hebrew: " כי־תצא",
    leyning: {
      torah: "Deuteronomy 21:10-25:19",
      haftarah: "Isaiah 54:1-10",
      gospel: "Matthew 24:29-42",
      maftir: "Deuteronomy 25:17-25:19",
    },
  },
  {
    title: "Ki Tavo",
    hebcalTitle: "Ki Tavo",
    slug: "ki-tavo",
    key: 55,
    date: "2025-09-13",
    hdate: "20 Elul 5785",
    book: "Deuteronomy",
    hebrew: " כי־תבוא",
    leyning: {
      torah: "Deuteronomy 26:1-29:8",
      haftarah: "Isaiah 60:1-22",
      gospel: "Matthew 4:13-24",
      maftir: "Deuteronomy 29:6-29:8",
    },
  },
  {
    title: "Nitzavim",
    hebcalTitle: "Nitzavim",
    slug: "nitzavim",
    key: 56,
    date: "2025-09-20",
    hdate: "27 Elul 5785",
    book: "Deuteronomy",
    hebrew: " נצבים",
    leyning: {
      torah: "Deuteronomy 29:9-30:20",
      haftarah: "Isaiah 61:10-63:9",
      gospel: "John 12:41-50",
      maftir: "Deuteronomy 31:28-31:30",
    },
  },
  {
    title: "Vayelech",
    hebcalTitle: "Vayeilech",
    slug: "vayelech",
    key: 57,
    date: "2025-09-27",
    hdate: "5 Tishrei 5786",
    book: "Deuteronomy",
    hebrew: " וילך",
    leyning: {
      torah: "Deuteronomy 31:1-31:30",
      haftarah: "Isaiah 55:6-56:8",
      gospel: "Matthew 21:9-17",
      maftir: "Deuteronomy 31:28-31:30",
    },
    special: "shabbat-shuvah",
  },
  {
    title: "Ha'Azinu",
    hebcalTitle: "Ha'azinu",
    slug: "haazinu",
    key: 59,
    date: "2025-10-04",
    hdate: "12 Tishrei 5786",
    book: "Deuteronomy",
    hebrew: " האזינו",
    leyning: {
      torah: "Deuteronomy 32:1-52",
      haftarah: "II Samuel 22:1-51",
      gospel: "John 6:26-35",
      haftarah_sephardic: "Hosea 14:2-10; Micah 7:18-20",
      maftir: "Deuteronomy 32:48-32:52",
    },
  },
  {
    title: "Vezot Ha'Bracha",
    hebcalTitle: "Vezot Haberakhah",
    slug: "vezot-habracha",
    key: 60,
    date: "2025-10-15",
    hdate: "23 Tishrei 5786",
    book: "Deuteronomy",
    hebrew: "וְזֹאת הַבְּרָכָה",
    leyning: {
      torah: "Deuteronomy 33:1-34:12",
      haftarah: "Joshua 1:1-18",
      gospel: "Acts 1:1-14",
      maftir: "Numbers 29:35-30:1",
    },
  },
];

// Book abbreviations utility
export function abbreviateBookName(bookName: string): string {
  const abbreviations: { [key: string]: string } = {
    Genesis: "Gen",
    Exodus: "Exo",
    Leviticus: "Lev",
    Numbers: "Num",
    Deuteronomy: "Deu",
    Joshua: "Jos",
    Judges: "Jdg",
    "I Samuel": "1Sam",
    "II Samuel": "2Sam",
    "I Kings": "1Kgs",
    "II Kings": "2Kgs",
    Isaiah: "Isa",
    Jeremiah: "Jer",
    Ezekiel: "Eze",
    Daniel: "Dan",
    Hosea: "Hos",
    Joel: "Joe",
    Amos: "Amo",
    Obadiah: "Oba",
    Jonah: "Jon",
    Micah: "Mic",
    Nahum: "Nah",
    Habakkuk: "Hab",
    Zephaniah: "Zep",
    Haggai: "Hag",
    Zechariah: "Zec",
    Malachi: "Mal",
    Matthew: "Mat",
    Mark: "Mar",
    Luke: "Luk",
    John: "Joh",
    Acts: "Act",
    Romans: "Rom",
    "I Corinthians": "1Cor",
    "II Corinthians": "2Cor",
    Galatians: "Gal",
    Ephesians: "Eph",
    Philippians: "Phi",
    Colossians: "Col",
    "I Thessalonians": "1Th",
    "II Thessalonians": "2Th",
    "I Timothy": "1Ti",
    "II Timothy": "2Ti",
    Titus: "Tit",
    Philemon: "Phm",
    Hebrews: "Heb",
    James: "Jam",
    "I Peter": "1Pe",
    "II Peter": "2Pe",
    "I John": "1Jh",
    "II John": "2Jh",
    "III John": "3Jh",
    Jude: "Jud",
    Revelation: "Rev",
  };
  return abbreviations[bookName] || bookName;
}

// Utility function to abbreviate scripture references
export function abbreviateScriptureReference(
  reference: string,
): string {
  const books = [
    "Genesis",
    "Exodus",
    "Leviticus",
    "Numbers",
    "Deuteronomy",
    "Joshua",
    "Judges",
    "I Samuel",
    "II Samuel",
    "I Kings",
    "II Kings",
    "Isaiah",
    "Jeremiah",
    "Ezekiel",
    "Daniel",
    "Hosea",
    "Joel",
    "Amos",
    "Obadiah",
    "Jonah",
    "Micah",
    "Nahum",
    "Habakkuk",
    "Zephaniah",
    "Haggai",
    "Zechariah",
    "Malachi",
    "Matthew",
    "Mark",
    "Luke",
    "John",
    "Acts",
    "Romans",
    "I Corinthians",
    "II Corinthians",
    "Galatians",
    "Ephesians",
    "Philippians",
    "Colossians",
    "I Thessalonians",
    "II Thessalonians",
    "I Timothy",
    "II Timothy",
    "Titus",
    "Philemon",
    "Hebrews",
    "James",
    "I Peter",
    "II Peter",
    "I John",
    "II John",
    "III John",
    "Jude",
    "Revelation",
  ];

  let abbreviated = reference;
  books.forEach((book) => {
    const regex = new RegExp(`\\b${book}\\b`, "g");
    abbreviated = abbreviated.replace(
      regex,
      abbreviateBookName(book),
    );
  });

  return abbreviated;
}

// PRODUCTION OPTIMIZED Torah Portion Service
export class TorahPortionService {
  private portions: TorahPortion[] = torahPortions;
  private cache = new Map<string, TorahPortion>();
  private lastCacheDate: string = "";

  // OPTIMIZED: Get current Torah portion using efficient binary search
  getCurrentPortion(): TorahPortion {
    const now = new Date();
    const todayString = now.toISOString().split("T")[0];

    // Check cache first
    if (this.cache.has(todayString)) {
      return this.cache.get(todayString)!;
    }

    // Clear cache if date changed
    if (this.lastCacheDate !== todayString) {
      this.cache.clear();
      this.lastCacheDate = todayString;
    }

    // Use binary search for efficiency
    const currentPortion =
      this.findCurrentWeekPortionOptimized(now);

    if (currentPortion) {
      // Cache the result
      this.cache.set(todayString, currentPortion);
      return currentPortion;
    }

    // Fallback: Return the first available portion
    return this.portions[0];
  }

  // OPTIMIZED: Binary search implementation for Torah portions
  private findCurrentWeekPortionOptimized(
    currentDate: Date,
  ): TorahPortion | null {
    let left = 0;
    let right = this.portions.length - 1;
    let result: TorahPortion | null = null;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const portion = this.portions[mid];

      // Calculate week boundaries
      const saturdayDate = new Date(portion.date);
      const sundayStart = new Date(saturdayDate);
      sundayStart.setDate(saturdayDate.getDate() - 6);
      const saturdayEnd = new Date(saturdayDate);
      saturdayEnd.setHours(23, 59, 59, 999);

      if (
        currentDate >= sundayStart &&
        currentDate <= saturdayEnd
      ) {
        return portion; // Found exact match
      } else if (currentDate < sundayStart) {
        right = mid - 1;
      } else {
        result = portion; // Keep track of best candidate
        left = mid + 1;
      }
    }

    return result;
  }

  // Get next Torah portion
  getNextPortion(): TorahPortion | null {
    const currentPortion = this.getCurrentPortion();
    const currentIndex = this.portions.findIndex(
      (p) => p.key === currentPortion.key,
    );

    if (
      currentIndex >= 0 &&
      currentIndex < this.portions.length - 1
    ) {
      return this.portions[currentIndex + 1];
    }

    return this.portions[0]; // Cycle to beginning
  }

  // Check if today is Shabbat
  isShabbat(): boolean {
    return new Date().getDay() === 6;
  }

  // Calculate days until next Shabbat
  getDaysUntilNextShabbat(): number {
    const today = new Date().getDay();
    return today === 6 ? 0 : 6 - today;
  }

  // Get all Torah portions
  getAllPortions(): TorahPortion[] {
    return this.portions;
  }

  // Get portion by slug
  getPortionBySlug(slug: string): TorahPortion | null {
    return this.portions.find((p) => p.slug === slug) || null;
  }

  // Get current and next portion for the schedule table
  getCurrentAndNextPortion(): {
    current: TorahPortion;
    next: TorahPortion | null;
  } {
    const current = this.getCurrentPortion();
    const next = this.getNextPortion();
    return { current, next };
  }

  // Get portion by date
  getPortionByDate(date: Date): TorahPortion | null {
    return this.findCurrentWeekPortionOptimized(date);
  }

  // Clear cache (useful for testing)
  clearCache(): void {
    this.cache.clear();
    this.lastCacheDate = "";
  }
}

// Export singleton instance
export const torahPortionService = new TorahPortionService();