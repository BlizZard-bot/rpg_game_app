/**-------------------------------------------
 * 
 * STORE FOR MAGUS Skills
 * 
 * -------------------------------------------
 */
 const state = {
    skills: [
        {
            id: 'OKOLHARC',
            name: 'Ökölharc',
            KpAf: 3,
            KpMf: 15,
            description: 'A karakter gyakorlott kétkezi verekedő. Nem jön zavarba, ha fegyverét valamely okból nem használhatja ( esetleg nincs is nála ). Az Ökölharc-bár fegyver nélkül űzik-nem hasonlit a harcművészetekre, nem is nyukszik hasonló alapokon. Inkább egyfajta Erőn és Ügyességen alapuló, művészetnek semmiképp nem nevezhető harcmodor. Az a karakter, aki ismeri az ökölharc fortélyait, nem szenvedi el a Képzetlen Fegyverforgatásból-ezesetben a puszta kéz képzetlen használatából eredő hátrányokat, és a küzdelemben mindkét kezét használhatja ( kétszer támad ). Az Alapfokot és a Mesterfokot kizárólag a puszta ököl sebzésének mértéke különbözteti meg egymástól.',
            Af: '1-2 Sp',
            Mf: '1-6 Sp',
        },
        {
            id: 'BIRKOZAS',
            name: 'Birkózás',
            KpAf: 8,
            KpMf: 15,
            description: 'A képzetség rokon az Ökölharccal, ám a birkózó kezét nem öklözésre, hanem ellenfelének lefogására, leszoritására használja. Ahhoz, hogy ezt megtehesse, természetesen sikeres Támadó Dobást kell tennie. Sebzés nincs, ellenben az álldozat körökre mozgásképtelenné tehető, mialatt támadni sem képes. Ha a képzetség alkalmazója egyszer már megragadta ellenfelét, és erősebb is nála, annak kevés az esélye a szoritásból szabadulni. A birkózó minden körben köteles Erőpróbát tenni, s az álldozatnak csak akkor nyilik egyáltalán lehetősége a szabadulásra, ha elvéti. Még ilyenkor sincs veszve semmi, mert a lefogott csak akkor menekülhet, ha az ő Erőpróbája ellenben sikeres. Ha az álldozat ereje nagyobb a lefogónál, ő tehet minden körbem Erőpróbát, s ha sikerrel jár, nyomban ki is bontakozik a marasztaló karokból. Ha a támadás, amivel a birkózó megragadja áldozatát túlütés, a lefogott személy a szoritásban nagy esélyel elveszti eszméletét. Ez akkor következik be, ha a birkózó, közvetlen a túlütést követő körben, sikeres Erőpróbát tesz.',
            Af: 'Az alapfokon képzett karakter, ha fegyveres ellenféllel birkózik, minden támadását -15-tel dobja.',
            Mf: 'A Mesterfokon képzett birkózó fegyveres ellenfél ellenében sem kerül hátrányba.',
        },
        {
            id: 'FEGYVER_HASZNALAT',
            name: 'Fegyverhasználat',
            KpAf: 3,
            KpMf: 30,
            description: 'A Fegyverhasználat a harcos ( és a harccal bármilyen módon foglalkozó ) kasztok tagjai számára talán a legfontosabb képzetség. Ugyanis mindazok, akik nem képzettek egy adott fegyver forgatásában, ha harcolni szándékoznak vele, csak komoly hátránnyal tehetik. Ezt nevezzük Képzetlen Fegyverforgatásnak, ami a következő hátrányokkal jár: KÉ: -10, TÉ: -25, VÉ: -20 Ha valaki képzetlenül nyúl célzó fegyverhez, 30-cal csökken CÉ-je. A játékos amikor a fegyverhasználat képzetséget kiválasztja, értelemszerűen, meg kell határoznia, hogy melyik fegyver forgatásában kivánja járatossá tenni karakterét.',
            Af: 'A karakter a kiválasztott fegyver forgatásában képzett, azt használva nem sújtják a fent emlitett Képzetlen Fegyverforgatásból származó hátrányok.',
            Mf: 'Képes mesterien forgatni az adott fegyvert, ezért amikor azzal harcol, a következő előnyökben részesül: KÉ: +5, TÉ: +10, VÉ: +10, CÉ: +10',
        },
        {
            id: 'PAJZS_HASZNALAT',
            name: 'Pajzshasználat',
            KpAf: 5,
            KpMf: 30,
            description: 'A Pajzshasználatot oktató legnevesebb iskolák: az Oroszlánsziv Lovagrend, a shadoni Isten Kardja Lovagrend, mig az élezett peremű pajzsok forgatásában a gorwicki Marico con Rabora Lovagrend és egyes kráni lovagrendek a legjáratosabbak.',
            Af: 'A karakter képes a küzdelemben pajzsot használni. Védekezni vele ( a pajzs Vé-je hozzáadódik a karakter Védő Értékéhez ) és akár még támadni is. Pajzsal való támadáskor, sikeres Támadó Dobás esetén, pajzsával fellöki az ellenfelet, miközben még másik, fegyveres karjával is támadhat. Ám ha támad a pajzsal, akkor abban a harci körben a védekezésre nem használhatja ( igy annak Vé-je nem adódik hozzá a Védő Értékéhez ).',
            Mf: 'A pajzsal mesteri módon támad, és ha annak pereme élezett, akkor vágni is képes vele. Emellett másik kezét is használhatja - és egyik támadásának TÉ-jére sincsen minusz. Mesterfokon a karakter egyazon körben támadhat és védekezhet is pajzsával, és a pajzs mozgásgátló tényezője megszűnik ( MGT )',
        },
        {
            id: 'FEGYVER_DOBAS',
            name: 'Fegyverdobás',
            KpAf: 4,
            KpMf: 40,
            description: 'Harci helyzetben gyakran előfordul, hogy a karakter valamely okból hajitani szeretné fegyverét. Az esetek nagy többségében ez eleve hajitófegyver ( tőr, dárda, bárd ), de olykor egyébb kézifegyver is lehet. A karakter mikor a Fegyverdobás képzetség elsajátitásához kezd, köteles meghatározni a fegyver tipusát, amelynek hajitásában járatossá kiván válni. A képesség tanulása főként untalan gyakorlásból áll. A tőr hajitásának avatatlan nagymesterei a tolvajklánok, a dárdavetésben a különböző hegyi népek vadászai, mig a lovagikard célbadobásában a Ramort városállam Deva Morrola rendjének lovagjai jeleskednek messze mások előtt. Dobni bármilyen egykezes fegyvert lehet-akár a másfélkezes kardot is, a dobás sikerességének eldöntésében minden esetben Támadó és nem Célzó Dobást kell tenni.',
            Af: 'A karakternek nincs minusza a választott fegyver dobásakor',
            Mf: 'A választott fegyvert a karakter +10 TÉ-vel dobja.',
        },
        {
            id: 'FEGYVERTORES',
            name: 'Fegyvertörés',
            KpAf: 5,
            KpMf: 20,
            description: 'Harc során sokan alkalmazzák a Fegyvertörés képzetséget. A különleges tudomány arra irányul, hogy küzdelem közbe a karakter fegyverével eltörje - használhatatlanná tegye- ellenfele fegyverét. Erre képzet karakter is csak akkor képes, ha szándékát előre - a harci kör elején - bejelenti, majd sikeres Támadódobást tesz. Fegyvertörés csak akkor lehetséges, ha ezt a két összecsapó fegyver tipusa elképzelhetővé teszi - ennek eldöntése a KM feladata.',
            Af: 'A Támadó Dobás 25-tel csökkentett TÉ-vel',
            Mf: 'TÉ minusz nélkül.',
        },
        {
            id: 'LEFEGYVERZES',
            name: 'Lefegyverzés',
            KpAf: 7,
            KpMf: 18,
            description: 'A különleges képzetség segitségével a karakter képes arra, hogy küzdelem közben lefegyverezze ellenfelét. Ezt teheti fegyverrel, de akár puszta kézzel is ( a képzetség elsajátitásánál kell eldönteni ). Lefegyverző szándékát előre - a harci kör elején - kell bejelentenie, majd sikeres Támadó Dobást tennie.',
            Af: '25-tel csökkentett TÉ-vel.',
            Mf: 'TÉ minusz nélkül.',
        },
        {
            id: 'PANCEL_VISELET',
            name: 'Nehézvért viselet',
            KpAf: 3,
            KpMf: 27,
            description: 'A Nehézvért viselet képzetség birtokosa képes küzdelmet folytatni teljesvértezetben és félvértezetben is. Az a karakter aki még alapfokú képzetséggel sem bir, ha nehézvértet ölt, minden fegyverrel úgy harcol mintha annak forgatásában járatlan lenne ( Képzetlen fegyverforgatás: KÉ: -10, TÉ: -25 VÉ: -20 ). A Nehézvért viselet igazi nagymesterei a lovagok és paplovagok, hiszen ők nem kizárólag harci helyzetben, csatákban viselik páncéljukat, hanem szinte szüntelen, gyakran még diszruhaként is.',
            Af: 'Az alapfokon képzett karakter nem szenvedi el az emlitett minuszokat, de gyorsasága és ügyessége továbbra is annyuval csökken, amennyi a viselt vért Mozgásgátló Tényezője ( MGT ).',
            Mf: 'Mesterfokú képzetség esetén már a viselt vért MGT-je sem érvényesül - azaz nem vonódik le a karakter gyorsaságából és ügyességéből.',
        },
        {
            id: 'KETKEZES_HARC',
            name: 'Kétkezes harc',
            KpAf: 15,
            KpMf: 25,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
        {
            id: '',
            name: '',
            KpAf: 0,
            KpMf: 0,
            description: '',
            Af: '',
            Mf: '',
        },
    ],
    skillsPrecent: [
        {
            name: '',
            description: '',
        },
        {
            name: '',
            description: '',
        },
        {
            name: '',
            description: '',
        },
        {
            name: '',
            description: '',
        },
        {
            name: '',
            description: '',
        },
        {
            name: '',
            description: '',
        },
        {
            name: '',
            description: '',
        },
        {
            name: '',
            description: '',
        },
        {
            name: '',
            description: '',
        },
        {
            name: '',
            description: '',
        },
    ],
};
const getters = {
    skills: () => {
        return state.skills;
    },
    skill: (state) => (id) => {
        return state.skills.find(s => s.id === id);
    },
    skillsPrecent: () => {
        return state.skillsPrecent;
    },
    skillPrecent: (state) => (id) => {
        return state.skillsPrecent.find(p => p.id === id);
    },
};
const mutations = {};
const actions = {};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}