var request = require('request');

	var painters = [{
		"id": 1,
		"name": "Amedeo Modigliani",
		"years": "1884 - 1920",
		"genre": ["Expressionism"],
		"nationality": ["Italian"],
		"bio": {
			"ru": "<p>Выдающийся итальянский живописец и скульптор. Родился 12 июля 1884 в Ливорно. После обучения в школе живописи в Ливорно у Г.Микели, в 1902 Модильяни поступил в Академию художеств во Флоренции, а немного позже – в Академию в Венеции.</p><p>В начале 1906 он приехал в Париж, где занялся поисками современного художественного языка. Испытал влияние П.Сезанна, Тулуз-Лотрека, <a>П.Пикассо</a>, фовизма и кубизма, но в итоге выработал собственный стиль, для которого характерен богатый и плотный цвет.</p><p>В ноябре 1907 Модильяни познакомился с доктором Полем Александром, который снял для него студию и стал первым коллекционером его работ. Художник стал членом группы Независимых и в 1908 и 1910 выставлял свои работы в их салоне.</p><p>Знакомство со скульптором Константином Бранкузи в 1909 сыграло основополагающую роль в развитии скульптурного творчества Модильяни. У Бранкузи Модильяни получил поддержку и ценные советы. В эти годы Модильяни в основном занимался ваянием и изучением произведений классической древности, индийской и африканской пластики. В 1912 он выставил семь скульптурных произведений на Осеннем Салоне.</p><p>С началом Первой мировой войны многие друзья Модильяни покинули Париж. Художника угнетали перемены в жизни, безработица, нищета. В это время он встретил английскую поэтессу Беатрис Гастингс, с которой прожил два года. Модильяни был дружен с такими разными художниками, как Пикассо, Хаим Сутин и Морис Утрилло, а также с коллекционерами и деловыми людьми – Полем Гийомом и Леопольдом Зборовским. Последний стал покровителем художника и поддерживал его творчество.</p><p>В эти годы Модильяни вернулся к живописи и создал, возможно, свои самые значительные произведения. Присущая его произведениям отвлеченность явилась следствием изучения искусства древних цивилизаций и итальянского примитива, а также влияния его друзей кубистов; в то же время его работы отличаются поразительной тонкостью психологической характеристики. Позже формальная сторона его творчества становится все более простой и классичной, сводится к сочетанию графического и цветового ритмов.</p><p>В 1917 Модильяни, в то время уже очень больной и склонный к алкоголизму, познакомился с Жанной Эбютерн, ставшей его спутницей в последние годы жизни. В следующем году Зборовский организовал персональную выставку художника в галерее Берты Вейль. Она не имела успеха, но вызвала скандал несколькими изображениями обнаженной натуры: их сочли неприличными, и по требованию полиции полотна были сняты. Тем не менее некоторые французские и иностранные коллекционеры проявили интерес к работам Модильяни. В 1918 художник поехал на Лазурный берег для отдыха и лечения и пробыл там некоторое время, продолжая упорно работать. Модильяни умер вскоре после возвращения в Париж, 24 января 1920. Утром следующего дня Жанна Эбютерн покончила с собой.</p><p>В работах Модильяни сочетаются чистота и утонченность стиля, символизм и гуманизм, языческое чувство полноты и безудержной радости жизни и патетическое переживание мук всегда неспокойной совести.</p>",
			"en": "<p>Amedeo Clemente Modigliani was an Italian painter and sculptor who worked mainly in France. He is known for portraits and nudes in a modern style characterized by elongation of faces and figures. His production is known for its nudes, which were not received well during his lifetime, but later found acceptance. Modigliani spent his youth in Italy, where he studied the art of antiquity and the Renaissance, until he moved to Paris in 1906. There he came into contact with prominent artists such as Pablo Picasso and Constantin Brâncuşi.</p><p>Modigliani's oeuvre includes mainly paintings and drawings. From 1909 to 1914, however, he devoted himself mainly to sculpture. The main subject is portraits and full figures of humans, both in the images and in the sculptures. During his life, Amedeo Modigliani had little success, but after his death he achieved greater popularity and his works of art achieved high prices. He died at age 35 in Paris of tubercular meningitis.</p><p>Two films have been made about Modigliani: Les Amants de Montparnasse (1958), directed by Jacques Becker and starring Gérard Philipe as Modigliani; and Modigliani (2004), directed by Mick Davis and starring Andy García as Modigliani.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Amedeo_Modigliani.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Модильяни,_Амедео",
				"en": "http://en.wikipedia.org/wiki/Amedeo_Modigliani",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 193
	}, {
		"id": 2,
		"name": "Henri Lebasque",
		"years": "1865 - 1937",
		"genre": ["Impressionism"],
		"nationality": ["French"],
		"bio": {
			"ru": "А.Лебаск начал своё обучение в Школе изящных искусств Анжера. В 1886 году поступает в парижскую Академию Коларосси. Лебаск берёт также в Париже уроки у художника Леона Бонна, работает над внутренним украшением Пантеона, знакомится с К.Писарро и О. Ренуаром, работы которых оказали сильное влияние на творчество Лебаска. Большое значение художник уделял цветности и яркости изображений на своих полотнах. В этом он был близок Э. Вюйяру и П. Боннару, основателям группы Наби. После знакомства с Ж. Сёра и П. Синьяком Лебаск занимается изучением теории цвета. Лебаск в 1903 году был одним из основателей Осеннего салона (совместно со своим другом А.Матиссом). Через 2 года группа художников, в которую входили Лебаск, Ж.Руо, А. Дерен, Матисс и Вюйар, к которым присоединились Р. Дюфи и А. Манжу, открывают для себя красоту природы Южной Франции и пишут здесь свои полотна. Время, проведённое на юге, привело к радикальным изменениям живописи Лебаска, обогатило его художественную палитру. Даже после последующих путешествий на север, в Вандею, Нормандию и Бретань, «южная» тема доминировала в работах художника. Кисти А. Лебаска принадлежат также внутреннее оформление парижского театра на Елисейских полях и транс-океанских лайнеров.",
			"en": "Henri Lebasque was a French post-impressionist painter. He was born at Champigné (Maine-et-Loire). He started his education at the École régionale des beaux-arts d'Angers, and moved to Paris in 1886. There, Lebasque started studying under Léon Bonnat, and assisted Ferdinand Humbert with the decorative murals at the Panthéon. Around this time, Lebasque met Camille Pissarro and Auguste Renoir, who later would have a large impact on his work. His work is represented in French museums, notably Angers, Geneva (Petit Palais), Lille (Musée des Beaux-Arts), Nantes, and Paris (Musée d’Orsay). Lebasque died at Cannet, Alpes Maritimes in 1937.",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Henri_Lebasque.html",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Лебаск,_Анри",
				"en": "https://en.wikipedia.org/wiki/Henri_Lebasque",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 119
	},
	{
		"id": 3,
		"name": "Arkhip Kuinji",
		"years": "1842 - 1910",
		"genre": ["Realism", "Impressionism"],
		"nationality": ["Russian"],
		"bio": {
			"ru": "<p>Родился в Мариуполе в январе 1841 в семье сапожника-грека. Вначале обучался искусству самостоятельно, подрабатывая как ретушер у фотографа. Испытал особое влияние И.К.Айвазовского. В 1868–1870 посещал занятия в петербургской Академии художеств в качестве вольнослушателя. Был членом «Товарищества передвижников». Ранние пейзажи Куинджи (На острове Валааме, 1873; Чумацкий тракт, 1875) следуют канонам романтического и романтико-передвижнического пейзажа, однако уже в них проявляется высокое мастерство поэтических обобщений.</p><p>Зрелые произведения художника, начиная с его сенсационной Украинской ночи (1876), примыкают к символизму: не теряя своего натурного обаяния, природа становится в них все более волнующе-ирреальной; Куинджи умеет великолепно подчеркнуть границу между реальностью и искусством, делая переживание этого «порога» главным содержанием образа. Среди его лучших вещей – картины После грозы (1879), Березовая роща (1879), Днепр утром (1881; все – в Третьяковской галерее), Ночь на Днепре (1880–1882; варианты там же, а также в Русском музее, Петербург).</p><p>В 1894–1897 Куинджи был профессором Академии художеств, а в 1909 пожертвовал немалые средства на основание художественного общества, которому позднее было присвоено его имя.</p>",
			"en": "<p>Arkhip Ivanovich Kuindzhi was a Russian landscape painter of Greek origin.</p><p>He studied painting mainly independently and in St.Petersburg Academy of arts (from 1868; the full member since 1893). He was co-partner of mobile art exhibitions (Peredvizhniki, a group of Russian realist artists who in protest to academic restrictions formed an artists' cooperative, which evolved into the Society for Traveling Art Exhibitions (Peredvizhniki in 1870. During this early period Kuinczhy felt Ivan Aivazovsky's influence.</p><p>In his mature period Kuindzhy aspired to transfer the most expressive on illumination of a condition of the nature. He applied composite receptions (high horizon, etc.), creating panoramic views. Using light effects and intense colors shown in main tones, he depicted the illusion of illumination (Evening in the Ukraine, 1876; Birch Grove, 1879; After a thunderstorm, 1879; all three are in Tretyakov Gallery; Night on Dnepr, 1880 in Russian museum, St.Petersburg). His later works are remarkable by decorative effects of color building.</p><p>Kuindzhi lectured at the St.Petersburg Academy of arts (Professor since 1892; professor-head of landscape workshop since 1894; but he was fired in 1897 for support of student's protests). Among his students were artists such as Arkady Rylov, Nicholas Roerich, Konstantin Bogaevsky, and others. Kuindzhi initiated creation of the Society of artists (1909; later – the Society named after A.I. Kuindzhi).</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Arkhip_Kuindzhi.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Куинджи,_Архип_Иванович",
				"en": "http://en.wikipedia.org/wiki/Arkhip_Kuindzhi",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 179
	},
	{
		"id": 4,
		"name": "Vasiliy Kandinskiy",
		"years": "1866 - 1944",
		"genre": ["Expressionism", "Abstractionism"],
		"nationality": ["Russian"],
		"bio": {
			"ru": "<p>Русский художник, теоретик искусства и поэт, один из лидеров авангарда первой половины 20 в.; вошел в число основоположников абстрактного искусства.</p><p>Родился в Москве 22 ноября (4 декабря) 1866 в семье коммерсанта; принадлежал к роду нерчинских купцов, потомков сибирских каторжан. В 1871–1885 жил с родителями в Одессе, где еще в гимназические годы начал заниматься музыкой и живописью. С 1885 учился в Московском университете, мечтая о карьере юриста, но ок. 1895 решил посвятить себя искусству. Определили его выбор два момента: во-первых, впечатления от русских средневековых древностей и художественного фольклора, полученные в этнографической экспедиции по Вологодской губернии (1889), во-вторых, посещение французской выставки в Москве (1896), где он был потрясен картиной К.Моне 'Стог сена'. В 1897 приехал в Мюнхен, где с 1900 занимался в местной Академии художеств под руководством Ф.фон Штука. Много путешествовал по Европе и Северной Африке (1903–1907), с 1902 жил в основном в Мюнхене, а в 1908–1909 в селе Мурнау (Баварские Альпы). Органично войдя в среду немецкой модернистской богемы, выступал и как активный организатор: основал группы «Фаланга» (1901), «Новое мюнхенское художественное объединение» (1909; совместно с А.Г.Явленским и др.) и, наконец, «Синий всадник» (1911; совместно с Ф.Марком и др.) – общество, ставшее важным соединительным звеном между символизмом и авангардом. Публиковал художественно-критические Письма из Мюнхена в журналах «Мир искусства» и «Аполлон» (1902, 1909), участвовал на выставках «Бубнового валета».</p><p>От ранних, уже достаточно ярких и сочных импрессионистских картин-этюдов перешел к бравурным, цветистым и «фольклорным» по колориту композициям, где суммировались характерные мотивы русского национального модерна с его романтикой средневековых легенд и старинной усадебной культуры (Пестрая жизнь, 1907, Ленбаххаус, Мюнхен; Дамы в кринолинах, 1909, Третьяковская галерея). В 1910 создал первые абстрактные живописные импровизации и завершил трактат О духовном в искусстве (книга была опубликована в 1911 на немецком языке). Считая главным в искусстве внутреннее, духовное содержание, полагал, что лучше всего оно выражается прямым психофизическим воздействием чистых красочных созвучий и ритмов. В основе его последующих «импрессий», «импровизаций» и «композиций» (как сам Кандинский различал циклы своих работ) лежит образ прекрасного горного пейзажа, как бы тающего в облаках, в космическом небытии, по мере мысленного воспарения созерцающего автора-зрителя. Драматургия картин маслом и акварелей строится за счет свободной игры цветовых пятен, точек, линий, отдельных символов (типа всадника, ладьи, палитры, церковного купола и т.д.). Большое внимание мастер всегда уделял графике, в том числе гравюре на дереве. В своем немецком поэтическом альбоме стихов Звуки (Klänge, 1913) стремился к идеальной взаимосвязи беспредметных визуально-графических образов с текстом. Цели синтеза искусств ставил и в замысле спектакля Желтый звук, призванного объединить цвет, свет, движение и музыку (композитора Ф.А.Гартмана; спектакль, текст которого был помещен в альманахе Синий всадник, 1912, не осуществился из-за начала Первой мировой войны).</p><p>В 1914 вернулся в Россию, где жил в основном в Москве. Своеобразная «апокалиптика», чаяния всеобщего преображения-в-искусстве, характерные для его абстракций, приобретают в этот период все более тревожный и драматический характер (Москва. Красная площадь, 1916, Третьяковская галерея; Смутное, там же; Сумеречное, Русский музей; Серый овал, Картинная галерея, Екатеринбург; все работы – 1917). В 1918 издал автобиографическую книгу Ступени. Активно включился в общественную и гуманитарно-исследовательскую деятельность, входил в состав Наркомпроса, Института художественной культуры (Инхук) и Российской академии художественных наук (РАХН), преподавал в Высших художественно-технических мастерских (Вхутемас), однако, раздраженный идеологическими склоками, покинул Россию навсегда после того, как был послан в командировку в Берлин (1921).</p><p>В Германии преподавал в «Баухаусе» (с 1922, в Веймаре и Дессау), занимаясь в основном общей теорией формообразования; изложил свой педагогический опыт в книге Точка и линия на плоскости, изданной на немецком языке в 1926. Его космологические фантазии (графическая серия Малые миры, 1922) обретают в этот период более рационально-геометричный характер, сближаясь с принципами супрематизма и конструктивизма, но сохраняя свою яркую и ритмичную декоративность (В черном квадрате, 1923; Несколько кругов, 1926; обе картины – в Музее С.Гуггенхейма, Нью-Йорк). В 1924 мастер образовал вместе с Явленским, Л.Фейнингером и П.Клее объединение «Синяя четверка», устраивая с ними совместные выставки. Выступил как художник сценической версии сюиты М.П.Мусоргского Картинки с выставки в театре Дессау (1928).</p><p>После закрытия нацистами «Баухауса» (1932) переехал в Берлин, а в 1933 – во Францию, где жил в Париже и его пригороде Нёйи-сюр-Сен. Испытав значительное воздействие сюрреализма, все чаще вводил в свои картины – наряду с прежними геометрическими структурами и знаками – биоморфные элементы, подобные неким первичным организмам, парящим в межпланетной пустоте (Доминирующая кривая, 1936, там же; Голубое небо, 1940, Центр Ж.Помпиду, Париж; Разнообразные действия, 1941, Музей С.Гуггенхейма, Нью-Йорк). С началом немецкой оккупации (1939) намеревался эмигрировать в США и провел несколько месяцев в Пиренеях, но в итоге вернулся в Париж, где продолжал активно работать, в том числе над проектом комедийного фильма-балета, который намеревался создать совместно с композитором Гартманом.</p>",
			"en": "<p>Wassily Wassilyevich Kandinsky was an influential Russian painter and art theorist. He is credited with painting the first purely abstract works. Born in Moscow, Kandinsky spent his childhood in Odessa. He enrolled at the University of Moscow, studying law and economics. Successful in his profession — he was offered a professorship (chair of Roman Law) at the University of Dorpat — he began painting studies (life-drawing, sketching and anatomy) at the age of 30.</p><p>In 1896 Kandinsky settled in Munich, studying first at Anton Ažbe's private school and then at the Academy of Fine Arts. He returned to Moscow in 1914, after the outbreak of World War I. Kandinsky was unsympathetic to the official theories on art in Communist Moscow, and returned to Germany in 1921. There, he taught at the Bauhaus school of art and architecture from 1922 until the Nazis closed it in 1933. He then moved to France, where he lived for the rest of his life, becoming a French citizen in 1939 and producing some of his most prominent art. He died at Neuilly-sur-Seine in 1944.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Wassily_Kandinsky.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Кандинский,_Василий_Васильевич",
				"en": "http://en.wikipedia.org/wiki/Wassily_Kandinsky",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 88
	},
	{
		"id": 5,
		"name": "Vasily Surikov",
		"years": "1848 - 1916",
		"genre": ["Realism"],
		"nationality": ["Russian"],
		"bio": {
			"ru": "<p>Русский художник, мастер русской исторической картины; соединил традиции исторического романтизма с живописным новаторством. Родился в Красноярске 12 (24) января 1848 в семье канцелярского служащего, выходца из старинного казачьего рода. Первые уроки рисования получил у школьного учителя Н.В.Гребнева. В 1868 отправился в Петербург, где в 1869 поступил в Академию художеств; окончив Академию в 1875, с 1877 жил в Москве. Постоянно наезжал в Сибирь, бывал на Дону, Волге, в Крыму. В 1880–1890-е годы посетил Францию, Италию и ряд других стран Европы. Испытал особое влияние мастеров венецианского и испанского Возрождения и барокко, в особенности П.Веронезе и Д.Веласкеса.</p><p>Уже в студенческие годы проявил себя как мастер историко-ассоциативных образов (романтичный пейзаж Вид памятника Петру I в Петербурге, 1870, Русский музей, Петербург). В 1876–1877 создал эскизы на тему четырех вселенских соборов для украшения храма Христа Спасителя (ныне – в Русском музее). Переезд молодого художника в Москву, впечатления от старинной архитектуры «первопрестольной» сыграли важную роль в формировании его первого шедевра Утро стрелецкой казни, завершенного в 1881 (Третьяковская галерея, Москва). Избрав темой трагический итог первого стрелецкого бунта 1698 – казнь мятежников на Красной площади под личным присмотром Петра I, Суриков по сути показал великий конфликт русского Средневековья и русского Нового времени, из которого ни одна из сторон не выходит победительницей. При этом правда найденных в натуре деталей и типажей (каждый такой типаж – вроде стрельца с молитвенной свечой в руке – становился для художника предметом истовых поисков) лишь укрепляет «древний дух» образа (подмеченный И.Н.Крамским в письме к В.В.Стасову, 1884).</p><p>Свой дар выдающегося живописца-историка Суриков подтвердил в полотнах Меншиков в Березове (1883) и Боярыня Морозова (1887; обе картины – там же), тоже своего рода сложных и в то же время впечатляюще-целостных визуальных романах – о сибирской ссылке некогда могущественного петровского царедворца и об увозе в острог старообрядческой подвижницы. Красочная выразительность деталей сочетается с виртуозностью общей режиссуры. Всем этим трем «хоровым картинам» (как называл такого рода многофигурные сцены Стасов) не уступает и Взятие снежного городка (1891, Русский музей), посвященное уже целиком современной народной жизни – масленичной игре, представленной как веселая и в то же время сокрушительно-грозная стихия. Последующие «хоровые» полотна (Покорение Сибири Ермаком, 1895; Переход Суворова через Альпы, 1899; Степан Разин, 1903–1907; все в Русском музее) уже представляют определенного рода спад. Эпические сцены экспансии России в Сибири, антифранцузской кампании в Швейцарских Альпах и, наконец, эпизод из жизни любимого героя народных песен написаны виртуозно, но уже без того сложного и полифоничного драматизма, который отличает лучшие произведения мастера. Стремясь добиться максимальной убедительности образного действа, в поздних вещах Суриков уменьшает число фигур, параллельно усиливая выразительность красочной фактуры (Посещение царевной женского монастыря, 1912, Третьяковская галерея; Благовещение, 1914, Художественная галерея, Красноярск). В последнем случае мастер всецело примыкает к стилю модерн в его религиозном варианте.</p><p>Лучшие вещи Сурикова всегда выделялись своим замечательным – в высшей мере конструктивным, а не только декоративным – колоритом. Цветовой экспрессией впечатляют его поздние акварели, в особенности созданные в Испании, куда он в 1910 ездил со своим зятем, художником П.П.Кончаловским. Здесь он выступает предтечей новых течений в искусстве. О широте его взглядов свидетельствует и дружба с поэтом-символистом М.А.Волошиным, создавшим яркий очерк о творчестве мастера (впервые опубликован в журнале «Аполлон» в 1916). В поздние годы старый художник написал ряд лучших своих портретов (Автопортрет, 1913, Третьяковская галерея; и др.).</p><p>Умер Суриков в Москве 6 (19) марта 1916.</p>",
			"en": "<p>Vasily Ivanovich Surikov was the foremost Russian painter of large-scale historical subjects. His major pieces are among the best-known paintings in Russia.</p><p>Surikov was born in Krasnoyarsk, Siberia, where a monument to him was recently opened by his great-grandsons, Nikita Mikhalkov and Andrei Konchalovsky.[citation needed] In 1869-1871 he studied under Pavel Chistyakov at the Imperial Academy of Arts.</p><p>In 1877, Surikov settled in Moscow, where he contributed some imposing frescoes to the Cathedral of Christ the Savior. In 1878 he married Elizabeth Charais, a granddaughter of the Decembrist Svistunov. In 1881 he joined the Peredvizhniki movement. From 1893 he was a full member of the St.Petersburg Academy of Arts. Surikov was interred at the Vagankovskoye Cemetery in Moscow.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Vasily_Surikov.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Суриков,_Василий_Иванович",
				"en": "http://en.wikipedia.org/wiki/Vasily_Surikov",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 165
	},
	{
		"id": 6,
		"name": "Victor Borisov-Musatov",
		"years": "1870 - 1905",
		"genre": ["Symbolism"],
		"nationality": ["Russian"],
		"bio": {
			"ru": "<p>Русский художник. Родился в Саратове 2 (14) апреля 1870 в семье железнодорожного служащего. Художественное образование получил (в 1890-е годы) в студии Саратовского общества изящных искусств, Московском училище живописи, ваяния и зодчества, Академии художеств (у П.П.Чистякова), а также в студии Ф.Кормона в Париже. С 1898 жил преимущественно в Саратове (летом в имениях Слепцовка или Зубриловка Саратовской губернии), а с 1903 – в Подольске и Тарусе. Испытал большое влияние П.Пюви де Шаванна.</p><p>Главным мотивом Борисова-Мусатова стали «дворянские гнезда», мир старинных усадеб, преображенный – благодаря музыкальной ритмике линий и композиций, зыбкому мареву колорита – в поле волшебных видений и грез. Лелея эффект «иного мира», проступающего сквозь парковые пейзажи, художник в большинстве случаев работал акварелью, темперой или пастелью, добиваясь особого рода имматериальности красочного слоя. Фигуры в его картинах (Гобелен, 1901; Водоем, 1902; Призраки, 1903; Изумрудное ожерелье, 1903–1904) – даже тогда, когда они очевидно натурны (своих героинь мастер обычно писал с сестры и жены), – несут в себе оттенок поэтически-печальной потусторонности. Писал также и «чистые», безлюдные пейзажи, полные задумчивого лиризма (Осенняя песнь, 1905). Его мечта о фресках (цикл эскизов на тему времен года, 1904–1905; все картины в Третьяковской галерее, Москва) так и осталась неосуществленной.</p><p>Умер Борисов-Мусатов в Тарусе 26 октября (8 ноября) 1905. Его творчество оказало решающее воздействие на художников-символистов круга «Голубой розы».</p>",
			"en": "<p>Victor Elpidiforovich Borisov-Musatov  was a Russian painter, prominent for his unique Post-Impressionistic style that mixed Symbolism, pure decorative style and realism. Together with Mikhail Vrubel he is often referred as the creator of Russian Symbolism style.</p><p>He was enrolled in the Moscow School of Painting, Sculpture and Architecture in 1890, transferring the next year to the Imperial Academy of Arts in Saint-Petersburg, where he was a pupil of Pavel Chistyakov. The damp climate of Saint-Petersburg was not good for Victor's health and in 1893 he was forced to return to Moscow and re-enroll to the Moscow School of painting, sculpturing and architecture. His earlier works like May flowers, 1894 were labelled decadent by the school administration, who sharply criticised him for making no distinction between the girls and the apple trees in his quest for a decorative effect. The same works however were praised by his peers, who considered him to be the leader of the new art movement.</p><p>Borisov-Musatov was a member of the Union of Russian Artists and one of the founders and the leader of the Moscow Association of Artists, a progressive artistic organization that brought together Pavel Kuznetsov, Peter Utkin, Alexander Matveyev, Martiros Saryan, Nikolai Sapunov, and Sergei Sudeikin.</p><p>The most famous painting of that time is The Pool, 1902. The painting depicts two most important women in his life: his sister, Yelena Musatova and his bride (later wife), artist Yelena Alexandrova. The people are woven into the landscape of an old park with a pond. Another famous painting is The Phantoms. 1903 depicting ghosts on the steps of an old country manor. The painting was praised by the contemporary Symbolist poets Valery Bryusov and Andrey Bely.</p><p>In 1904 Borisov-Musatov had a very successful solo exhibition in a number of cities in Germany, and in the spring of 1905 he exhibited with Salon de la Société des Artistes Français and became a member of this society.</p><p>Borisov-Musatov died on October 26, O.S. 1905 of a heart attack and is buried on a bank of Oka River near Tarusa. On his tomb there is a sculpture of a sleeping boy by Musatov's follower Alexander Matveyev.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Victor_Borisov-Musatov.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Борисов-Мусатов,_Виктор_Эльпидифорович",
				"en": "http://en.wikipedia.org/wiki/Victor_Borisov-Musatov",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 77
	},
	{
		"id": 7,
		"name": "Diego Rivera",
		"years": "1886 - 1957",
		"genre": ["Social Realism", "Muralism"],
		"nationality": ["Mexican"],
		"bio": {
			"ru": "<p>Мексиканский живописец, художник-монументалист и график, родился в Гуанахуато 8 декабря 1886. С 1907 по 1921 учился и работал в Испании, Франции, Италии, Бельгии, Нидерландах, Великобритании. В 1921 вернулся в Мексику и вскоре включился в осуществление государственной художественной программы по украшению фресками общественных зданий. На протяжении 1920-х годов выработал собственный стиль монументальной живописи. В 1930-е годы стал одним из самых известных художников Мексики. С 1930 по 1934 Ривера жил в США, работая над росписями зданий в Нью-Йорке, Детройте и Сан-Франциско. В 1931 состоялась большая выставка его произведений в Музее современного искусства в Нью-Йорке. В течение нескольких лет после 1934 он занимался преимущественно станковой живописью. Работая в технике масла и акварели, отдавал предпочтение таким жанрам, как портрет и пейзаж.</p><p>Начиная с 1940 Ривера вновь обратился к фресковой живописи: работал для Всемирной выставки в Сан-Франциско, расписывал Национальный дворец в Мехико. Композиции Человек на распутье (1933) для Рокфеллеровского центра в Нью-Йорке и Воскресенье в Аламеде (1948) для отеля «Прадо» в Мехико вызвали политическую и религиозную полемику. Умер Ривера в Мехико 25 ноября 1957.</p>",
			"en": "<p>Diego María de la Concepción Juan Nepomuceno Estanislao de la Rivera y Barrientos Acosta y Rodríguez, known as Diego Rivera was a prominent Mexican painter and the husband of Frida Kahlo. His large wall works in fresco helped establish the Mexican Mural Movement in Mexican art. Between 1922 and 1953, Rivera painted murals among others in Mexico City, Chapingo, Cuernavaca, San Francisco, Detroit, and New York City. In 1931, a retrospective exhibition of his works was held at the Museum of Modern Art in New York City.</p><p>From the age of ten, Rivera studied art at the Academy of San Carlos in Mexico City. He was sponsored to continue study in Europe by Teodoro A. Dehesa Méndez, the governor of the State of Veracruz. After arrival in Europe in 1907, Rivera initially went to study with Eduardo Chicharro in Madrid, Spain, and from there went to Paris, France, to live and work with the great gathering of artists in Montparnasse, especially at La Ruche, where his friend Amedeo Modigliani painted his portrait in 1914.</p><p>From the age of ten, Rivera studied art at the Academy of San Carlos in Mexico City. He was sponsored to continue study in Europe by Teodoro A. Dehesa Méndez, the governor of the State of Veracruz. After arrival in Europe in 1907, Rivera initially went to study with Eduardo Chicharro in Madrid, Spain, and from there went to Paris, France, to live and work with the great gathering of artists in Montparnasse, especially at La Ruche, where his friend Amedeo Modigliani painted his portrait in 1914.</p><p>His circle of close friends, which included Ilya Ehrenburg, Chaim Soutine, Amedeo Modigliani and Modigliani's wife Jeanne Hébuterne, Max Jacob, gallery owner Léopold Zborowski, and Moise Kisling, was captured for posterity by Marie Vorobieff-Stebelska (Marevna) in her painting Homage to Friends from Montparnasse (1962)</p><p>In those years, Paris was witnessing the beginning of cubism in paintings by such eminent painters as Pablo Picasso and Georges Braque. From 1913 to 1917, Rivera enthusiastically embraced this new school of art. Around 1917, inspired by Paul Cézanne's paintings, Rivera shifted toward Post-Impressionism with simple forms and large patches of vivid colors. His paintings began to attract attention, and he was able to display them at several exhibitions. He died on November 24, 1957.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Diego_Rivera.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Ривера,_Диего",
				"en": "http://en.wikipedia.org/wiki/Diego_Rivera",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 70
	},
	{
		"id": 8,
		"name": "Ivan Shishkin",
		"years": "1832 - 1898",
		"genre": ["Realism"],
		"nationality": ["Russian"],
		"bio": {
			"ru": "<p>Русский художник, наряду с А.К.Саврасовым – один из самых значительных пейзажистов-«передвижников». Родился в Елабуге 13 (25) января 1832 в семье И.В.Шишкина – купца, а также археолога и краеведа. В 1852 поступил в Московское училище живописи, ваяния и зодчества, а в 1856–1860 учился в петербургской Академии художеств. Как «пенсионер» Академии жил в 1862–1865 в Германии и Швейцарии, где посещал мастерскую Р.Коллера в Цюрихе; испытал влияние романтических пейзажей А.Калама. Жил преимущественно в Петербурге. Особое значение имели для него натурные впечатления, полученные в родных местах (куда он не раз наезжал), а также на острове Валаам и в окрестностях Петербурга и Москвы. Член-учредитель «Товарищества передвижников» (с 1870).</p><p>Для ранней живописи художника (Вид на острове Валааме, 1858, Музей русского искусства, Киев) характерна еще некоторая дробность композиционных и цветовых решений. Позднее пространство картины, зоны неба и земли составляют у него убедительное светотональное единство. Вступив в пору творческой зрелости в 1870-е годы, Шишкин (в таких, к примеру, вещах, как Сосновый бор. Мачтовый лес в Вятской губернии, 1872; и Рожь, 1878; обе работы в Третьяковской галерее, Москва) воссоздавал приметы конкретного мотива, ботанически точные детали почвы и растительности, в то же время достигая монументальной эпичности общего эффекта. Он обычно избегает переходных состояний природы, фиксируя ее в состоянии высшего летнего расцвета, и с особой любовью пишет наиболее мощные и стойкие породы деревьев типа дубов и сосен – в их стадии зрелости, старости и смерти в буреломе. Некоторое из его произведений – та же Рожь, Среди долины ровныя… (начальная строка песни на слова А.Ф.Мерзлякова; 1883, Музей русского искусства, Киев), Лесные дали (1884, Третьяковская галерея) – закономерно воспринимаются как романтико-символические образы России.</p><p>Наряду с далевыми видами Шишкин часто писал и лесные «интерьеры» (Утро в сосновом лесу, 1889, там же; медведи написаны К.А.Савицким). Мастер рисунка, плодотворно работал также в области офорта, активизировав интерес к этому виду искусства в России (в 1894 вышел альбом 60 офортов И.И.Шишкина).</p>",
			"en": "<p>Ivan Ivanovich Shishkin was a Russian landscape painter closely associated with the Peredvizhniki movement.</p><p>Shishkin was born in Yelabuga of Vyatka Governorate (today Republic of Tatarstan), and graduated from the Kazan gymnasium. Then he studied at the Moscow School of Painting, Sculpture and Architecture for four years. After that, he attended the Saint Petersburg Imperial Academy of Arts from 1856 to 1860, and graduated with the highest honours and a gold medal. He received the imperial scholarship for his further studies in Europe. Five years later Shishkin became a member of the Imperial Academy in St. Petersburg and was professor of painting from 1873 to 1898. At the same time, Shishkin headed the landscape painting class at the Highest Art School in St. Petersburg.</p><p>For some time, Shishkin lived and worked in Switzerland and Germany on scholarship from the St. Petersburg Imperial Academy of Arts. On his return to Saint Petersburg, he became a member of the Circle of the Itinerants and of the Society of Russian Watercolorists. He also took part in exhibitions at the Academy of Arts, the All Russian Exhibition in Moscow (1882), the Nizhniy Novgorod (1896), and the World Fairs (Paris, 1867 and 1878, and Vienna, 1873). Shishkin's painting method was based on analytical studies of nature. He became famous for his forest landscapes, and was also an outstanding draftsman and a printmaker.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Ivan_Shishkin.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Шишкин,_Иван_Иванович",
				"en": "http://en.wikipedia.org/wiki/Ivan_Shishkin",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 409
	},
	{
		"id": 9,
		"name": "Claude Monet",
		"years": "1840 - 1926",
		"genre": ["Impressionism"],
		"nationality": ["French"],
		"bio": {
			"ru": "<p>Французский художник, один из основателей импрессионизма. Родился 14 ноября 1840 в Париже в семье бакалейщика. Через пять лет его семья переехала в Гавр. Около 1856 под руководством Луи Эжена Будена стал писать пейзажи на открытом воздухе. В 1859 Моне приехал в Париж, где познакомился с К.Писсарро. В 1860 был призван на военную службу в Алжир, в 1862 из-за болезни вернулся в Гавр и снова стал писать виды побережья вместе с Буденом. Вскоре он познакомился с датским художником Яном Бартолдом Йонгкиндом, тоже пейзажистом. Йонгкинд стал его вторым учителем. В ноябре Моне вернулся в Париж, где занимался в ателье Шарля Глейра и встретился с Огюстом Ренуаром, Альфредом Сислеем и Фредериком Базилем.</p><p>Между 1863 и 1865 Моне работал в стиле Курбе и реалистической школы, но его преследовала идея писать композиции на открытом воздухе. Наиболее известная из работ этого времени, названная, как и полотно Эдуара Мане, Завтрак на траве (1866, Москва, ГМИИ), была написана в студии по наброскам, сделанным на пленэре. Два морских пейзажа Моне были выставлены и хорошо приняты на Салоне 1865.</p><p>В конце 1870 Моне перебрался в Англию. В Лондоне он и Писсарро познакомились с продавцом картин Полем Дюран-Рюэлем, который сделал группу импрессионистов знаменитой. В 1871 и 1872 Моне работал в Голландии; в это время он увлекся японской гравюрой.</p><p>Между 1872 и 1876 Моне с семьей жил в Аржантейе на Сене близ Парижа. Художник часто работал вместе с Ренуаром, Сислеем и Мане, создавая свои знаменитые сцены катания на лодках, эпизоды деревенской жизни. Часто он писал свой дом и сад.</p><p>Передача на холсте изменчивости света, многообразия атмосферных явлений и изменений природы в разные времена года принесли Моне к 1890 мировую славу и благосостояние. К этому времени он начал работать на нескольких холстах одновременно, передавая на каждом освещение и состояние вида в определенный довольно краткий период времени, работая над одним полотном часто не более получаса. В следующие дни он продолжал писать в той же последовательности, пока все холсты не были закончены. Среди них серии Стога (1890–1891); Тополя (1890–1892); Руанский собор (1894), Виды Темзы (1899–1904) и Венеция (начата в 1908).</p><p>В 1883 Моне поселился в Живерни близ Вернона. Через семь лет он купил дом, который прежде снимал, и участок земли, на котором он разбил сад. С 1899 до смерти в 1926 (эти годы были омрачены ухудшением зрения) Моне создавал огромные полотна, изображающие пруд в саду в разное время дня. 14 панно из серии Кувшинки находятся в Париже и по замыслу художника экспонируются в двух овальных залах Оранжереи Тюильри. Умер Моне в Живерни 5 декабря 1926.</p>",
			"en": "<p>Oscar-Claude Monet was a founder of French Impressionist painting, and the most consistent and prolific practitioner of the movement's philosophy of expressing one's perceptions before nature, especially as applied to plein-air landscape painting. The term Impressionism is derived from the title of his painting Impression, soleil levant (Impression, Sunrise), which was exhibited in 1874 in the first of the independent exhibitions mounted by Monet and his associates as an alternative to the Salon de Paris.</p><p>Monet's ambition of documenting the French countryside led him to adopt a method of painting the same scene many times in order to capture the changing of light and the passing of the seasons. From 1883 Monet lived in Giverny, where he purchased a house and property, and began a vast landscaping project which included lily ponds that would become the subjects of his best-known works. In 1899 he began painting the water lilies, first in vertical views with a Japanese bridge as a central feature, and later in the series of large-scale paintings that was to occupy him continuously for the next 20 years of his life.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Claude_Monet.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Моне,_Клод",
				"en": "http://en.wikipedia.org/wiki/Claude_Monet",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 73
	},
	{
		"id": 10,
		"name": "Konstantin Yuon",
		"years": "1875 – 1958",
		"genre": ["Impressionism", "Social Realism"],
		"nationality": ["Russian"],
		"bio": {
			"ru": "<p>Русский художник, представитель символизма и модерна, мастер пейзажа. Родился в Москве 12 (24) октября 1875 в семье банковского служащего. В 1892 поступил в Училище живописи, ваяния и зодчества, где его наставниками были К.А.Савицкий, А.Е.Архипов и К.А.Коровин. По окончании училища (1898) занимался в мастерской В.А.Серова (до 1900). Был членом «Мира искусства», «Союза русских художников» (один из учредителей последнего) и АХРР. Жил в Москве.</p><p>Символистская поэтика Юона острее всего проявилась в цикле рисунков Сотворение мира (1908–1909) – с природой и светилами, нарождающимися из первозданного хаоса. Развивая эту тему, позднее запечатлел революцию в виде грозного космического катаклизма (Новая планета, 1921). Но более характерны для него сельские и архитектурные пейзажи, четкие по композиции и плотные по цвету, дающие не мимолетную импрессию, а устойчивый образ обжитой земли или исторической «почвы», знаменитой либо совсем обыденной (К Троице, 1903; Весенний солнечный день, 1910; Мартовское солнце, 1915; Купола и ласточки, 1921; все работы – в Третьяковской галерее, Москва). Особое место в его живописи и графике заняли мотивы Троице-Сергиевой лавры (в 1922 издал альбом литографий Сергиев посад).</p><p>В строгой системе соцреалистических выставок пейзажи Юона, иногда «тематические» (Штурм Кремля в 1917 году, 1947; там же), неизменно привлекали своим прочувствованным историзмом либо просто задушевной лирикой. Плодотворно работал как художник театра (был, в частности, главным художником Малого театра в 1945–1947) и педагог (с 1900 преподавал в собственной студии, а позднее в ленинградской Академии художеств и московском Художественном институте имени В.И.Сурикова). Занимал должности директора Научно-исследовательского института Академии художеств СССР (1948–1950) и первого секретаря правления Союза художников СССР (1956–1958).</p><p>Умер Юон в Москве 11 апреля 1958.</p>",
			"en": "<p>Konstantin Fyodorovich Yuon or Juon was a noted Russian painter and theatre designer associated with the Mir Iskusstva. Later, he co-founded the Union of Russian Artists and the Association of Artists of Revolutionary Russia.</p><p>Yuon was born in Moscow to the family of a banking clerk of Swiss-Russian origin. From 1892 to 1898 he studied at the Moscow School of Painting, Sculpture and Architecture where Konstantin Savitsky and Konstantin Korovin were among his distinguished teachers. After graduating from the Moscow Art School he took private lessons from Valentin Serov (1898–1900). During several trips to Western Europe, particularly in Paris, he became acquainted with the cityscapes of Camille Pissarro and other Impressionists, but retained his own distinctive style.</p><p>In 1900 he opened the first private painting and drawing school in Moscow. Some noted Russian painters received art education in the school (for example, Olga Zhekulina). Later he taught in Leningrad Academy of Arts and the Surikov Art Institute in Moscow. His studio in Moscow was widely used by other painters. He designed sets for plays at the Moscow Art Theatre and the Maly Theater, becoming the official designer for this theater from 1945 to 1947. He also contributed sets for operas.</p><p>In the Soviet era, Yuon was the director of the Research Institute of the Academy of Arts (1948–1950) and the First Secretary of the Union of Soviet Artists (1956–1958). He won a Stalin Prize (1943), received the Order of Lenin and other orders and medals. He died in Moscow on April 11, 1958.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Konstantin_Yuon.html",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Юон,_Константин_Фёдорович",
				"en": "https://en.wikipedia.org/wiki/Konstantin_Yuon",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 174
	},
	{
		"id": 11,
		"name": "Nicholas Roerich",
		"years": "1874 - 1947",
		"genre": ["Symbolism"],
		"nationality": ["Russian"],
		"bio": {
			"ru": "<p>Рерих Николай Константинович (Roerich Nicholas), русский живописец, театральный художник, ученый, писатель, путешественник, общественный деятель и философ; человек-легенда, одна из самых ярких фигур русского символизма и модерна. Родился 27 сентября (9 октября) 1874 года в Петербурге в семье нотариуса. В 1893 году Николай Рерих поступил на юридический факультет Петербургского университета, и одновременно в Академию художеств, где занимался в мастерской Архипа Ивановича Куинджи. В 1900–1901 годах Рерих учился в студии Кормона в Париже. До революции жил преимущественно в Петербурге, много путешествовал. На рубеже веков Рерих написал цикл архитектурно-исторических пейзажей Пскова, Ростова Великого, Изборска и других старинных русских городов (1899–1904, Музей искусства народов Востока, Москва; другие собрания). Сцены минувшего предстают в картинах Николая Рериха в виде красочных символов-обобщений: «Гонец» (Восстал род на род), 1902; «Город строят», 1902; «Бой», 1906; история трактуется как цепь таинственных космических знаков («Небесный бой», 1912, Русский музей, Санкт-Петербург; «Короны», 1914, Музей русского искусства, Киев).</p><p>Средоточием образов в картинах Рериха нередко становятся легендарные фигуры героев и святых («Пантелеймон-целитель», 1916, Третьяковская галерея, Москва; «Три радости», 1916, Русский музей, Санкт-Петербург). Этапным для сценографии модерна явился театральный дизайн, феерически-красочный и в то же время «режиссерски» соучаствующий в ритмике спектакля («Пер Гюнт» Г.Ибсена в московском Художественном театре, 1912; «Весна священная» И.Ф.Стравинского, – где Рерих выступил и соавтором либретто, – для антрепризы С.П.Дягилева в Париже, 1913; «Князь Игорь» А.П.Бородина для той же антрепризы в Лондоне, 1914). Николай Рерих исполнил также целый ряд монументально-декоративных работ, однако наиболее значительные произведения в этой области (росписи Святодуховской церкви в Талашкине под Смоленском, 1911–1914; панно «Сеча при Керженце» и «Покорение Казани» для Казанского вокзала в Москве, 1915–1916) не сохранились вообще, либо дошли до настоящего времени в виде фрагментов. Сперва не приняв революцию и выразив свой ужас перед ее вандализмом в символической драме «Милосердие» (1918), Рерих, оказавшись за финской границей, с 1918 года жил за рубежом.</p><p>В 1920 переехав в США, Рерих основал там вместе с женой Е.И.Шапошниковой «Общество Агни-Йоги» для распространения учения «Живой Этики», призванного морально усовершенствовать человечество на базе древних религий, прежде всего буддизма, и современной теософии. В 1923 Николай Рерих начинает из Сиккима свою Трансгималайскую экспедицию с целью исторического и топографического изучения Центральной Азии; экспедиция дважды пересекает последнюю, пройдя через труднодоступные районы Индии, Монголии и Тибета.</p><p>Приехав через Синьцзян в Москву в 1925 году, Рерих устанавливает контакты с советским руководством, а в 1926–1928 через Алтай возвращается в Сикким. Постоянной резиденцией Рериха становится Институт гималайских исследований (Институт Урусвати – от санскритского слова, означающего «утреннюю зарю») в долине Кулу близ Наггара (штат Химачал-Прадеш, Северная Индия), организованный им в 1929. Духовным итогом путешествий явились книги «Алтай-Гималаи», «Сердце Азии» и «Шамбала» (1927–1930), написанные в своеобразном, как бы «мистико-археологическом» жанре, полном ярких поэтических образов. Еще более известны изобильные живописные итоги этих лет – написанные темперой, тоже завораживающе-яркие, «самоцветные» пейзажи, где величественная горная природа сочетается с символами древних вер (цикл картин «Майтрейя», 1926, Художественный музей, Нижний Новгород; и многие другие).</p><p>Все больше сил Рерих с супругой отдают теософии, понимаемой ими не только как мистическое, но и как общественное движение. Последователей Рерихов в разных странах увлекает и провозглашенная им просветительская миссия охраны памятников истории и искусства от разрушительного натиска современной цивилизации. Свои философские проповеди художник собрал в книгах «Держава Света» (1931) и «Твердыня пламенная» (1933). Рериховские же идеи «Мира через культуру» в итоге были воплощены в специальном Пакте его имени, который лег в основу международной конвенции о защите культурных ценностей при вооруженных конфликтах, заключенной в Гааге в 1954. В поздний период мастер по-прежнему активно работал как живописец; вести с фронтов Второй мировой войны вдохновили его на национально-романтический цикл на темы русских былин. Рерих написал также огромные циклы мемуарных очерков («Листы дневника», 1934–1935; «Моя жизнь», 1936–1947). Его верными соратниками всегда оставались жена и сыновья – востоковед Юрий Рерих (1902–1960) и художник Святослав Рёрих (1904–1993). Умер Рерих в Кулу 13 декабря 1947. Музей Рериха был открыт в 1924 в Нью-Йорке. В Москве же (помимо специального отдела искусства Н.Н. и С.Н.Рерихов в Музее искусства народов Востока) с 1992 существует Международный центр Рерихов со своим собственным музеем.</p>",
			"en": "<p>Nicholas Roerich was a Russian painter, writer, archaeologist, theosophist, perceived by some in Russia as an enlightener, philosopher, and public figure, who in his youth was influenced by a movement in Russian society around the occult. He was interested in hypnosis and other spiritual practices as well as his paintings are said to have hypnotic expression.</p><p>Born in Saint Petersburg, Russia to the family of a well-to-do notary public, he lived in various places around the world until his death in Naggar,  Himachal Pradesh, India. Trained as an artist and a lawyer, his main interests were literature, philosophy, archaeology, and especially art. Roerich was a dedicated activist for the cause of preserving art and architecture during times of war. He earned several nominations for the Nobel Peace Prize. The so-called Roerich Pact was signed into law by the United States and most nations of the Pan-American Union during April 1935.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Nicholas_Roerich.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Рерих,_Николай_Константинович",
				"en": "http://en.wikipedia.org/wiki/Nicholas_Roerich",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 204
	},
	{
		"id": 12,
		"name": "Orest Kiprensky",
		"years": "1782 - 1836",
		"genre": ["Romanticism"],
		"nationality": ["Russian"],
		"bio": {
			"ru": "<p>Родился 24 марта 1782 г. на мызе Нежинская (ныне в Ленинградской области).</p><p>Внебрачный сын крепостной крестьянки, получивший в младенчестве вольную. Обучался в Воспитательном училище при петербургской Академии художеств (1788—1797 гг.), а затем в классе исторической живописи Академии (1797— 1803 гг.), где был оставлен для выполнения работы на соискание золотой медали. В 1806 г. за картину «Дмитрий Донской по одержании победы над Мамаем» Кипренский получил эту награду.</p><p>Всё творчество Кипренского связано с жанром портрета. Как представитель эпохи романтизма, он явился обновителем традиций русского портретного искусства. Его работы утверждают ценность личности, отражают эмоциональный мир человека.</p><p>В 1809—1812 гг. художник жил и работал в Москве и Твери, затем, став академиком Академии художеств (1812 г.), приехал в Петербург. Здесь он создавал портреты участников Отечественной войны 1812 г. и представителей русской культуры, рисовал женщин, детей.</p><p>В 1816 г. уехал за границу: посетил Италию, Швейцарию, Францию и Германию. С успехом участвовал в выставках в Риме и Париже.</p><p>В 1823 г. Кипренский вернулся в Петербург. Он делает портреты своих видных современников (В. А. Жуковский, П. А. Вяземский, С. С. Уваров и др.). На экспозициях Академии художеств 1824 и 1827 гг. его полотнам отводились отдельные залы.</p><p>Кипренский был также виртуозным рисовальщиком, создавшим (преимущественно в технике итальянского карандаша и пастели) образцы графического мастерства, зачастую превосходящие открытой, волнующе легкой своей эмоциональностью его живописные портреты. Это и бытовые типажи («Слепой музыкант», 1809, Русский музей; «Калмычка Баяуста», 1813, Третьяковская галерея), и знаменитая серия карандашных портретов участников Отечественной войны 1812 года (рисунки с изображением Е. И. Чаплица, А. Р. Томилова, П. А. Оленина, рисунок с поэтом Батюшковым); героическое начало здесь приобретает задушевный оттенок.</p><p>Большое число набросков и текстовые свидетельства показывают, что художник весь свой зрелый период тяготел к созданию большой (по его собственным словам из письма А. Н. Оленину 1834), «эффектной, или, по-русски сказать, ударистой и волшебной картины», где в аллегорической форме были бы изображены итоги европейской истории, равно как и предназначение России. «Читатели газет в Неаполе» (1831, Третьяковская галерея) — по виду просто групповой портрет — на деле есть скрытно-символический отклик на революционные события в Европе.</p><p>Однако наиболее честолюбивые из живописных аллегорий Кипренского остались неосуществленными, либо пропали (подобно «Анакреоновой гробнице», завершенной в 1821). Эти романтические поиски, однако, получили масштабное продолжение в творчестве К. П. Брюллова и А. А. Иванова.</p>",
			"en": "<p>Orest Adamovich Kiprensky was a leading Russian portraitist in the Age of Romanticism. His most familiar work is probably his portrait of Alexander Pushkin (1827), which prompted the poet to remark that <i>the mirror flatters me</i>.</p><p>He was raised in the family of Adam Shvalber, a serf. Although Kiprensky was born a serf, he was released from the serfdom upon his birth and later his father helped him to enter a boarding school at the Imperial Academy of Arts in Saint Petersburg in 1788 (when Orest was only six years old). He studied at the boarding school and the Academy itself until 1803. He lived at the Academy for three more years as a pensioner to fulfill requirements necessary to win the Major Gold medal. Winning the first prize for his work Prince Dmitri Donskoi after the Battle of Kulikovo (1805) enabled the young artist to go abroad to study art in Europe.</p><p>A year before his graduation, in 1804, he painted the portrait of Adam Shvalber, his foster father (1804), which was a great success. The portrait so impressed his contemporaries, that later members of the Naples Academy of Arts took it for the painting by some Old Master – Rubens or van Dyck. Kiprensky had to ask the members of the Imperial Academy of Arts for letters supporting his authorship. After that, Kiprensky lived in Moscow (1809), Tver 1811, Saint Petersburg 1812, in 1816–1822 he lived in Rome and Napoli. In Italy he met a local girl Anne Maria Falcucci (Mariucci), to whom he became attached. He bought her from her dissolute family and employed as his ward. On leaving Italy, he sent her to a Roman Catholic convent.</p><p>In 1828, Kiprensky came back to Italy, as he got a letter from his friend Samuel Halberg, informing him that they had lost track of Mariucci. Kiprensky found Mariucci, who had been transferred to another convent. In 1836 he eventually married her. He had to convert into Roman Catholicism for this marriage to happen. He died by pneumonia in Rome later that year. He is buried in the church of Sant'Andrea delle Fratte.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Orest_Kiprensky.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Кипренский,_Орест_Адамович",
				"en": "http://en.wikipedia.org/wiki/Orest_Kiprensky",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 68
	},
	{
		"id": 13,
		"name": "Kuzma Petrov-Vodkin",
		"years": "1878 - 1939",
		"genre": ["Symbolism"],
		"nationality": ["Russian"],
		"bio": {
			"ru": "<p>Петров-Водкин Кузьма Сергеевич, русский художник, теоретик искусства и писатель.</p><p>Родился в Хвалынске (Саратовская губерния) 24 октября (5 ноября) 1878 в семье сапожника; сумел получить художественное образование при поддержке местных купцов. Учился в классах живописи и рисования Ф.Е.Бурова в Самаре (1895–1897) и Центральном училище технического рисования Штиглица в Петербурге (1895–1897). В 1905 окончил Московское училище живописи, ваяния и зодчества, где в числе его наставников был В.А.Серов. Посещал студию А.Ашбе в Мюнхене (1901) и частные академии Парижа (1905–1908).</p><p>В эти же годы много путешествовал по Западной Европе и Средиземноморью, побывал в Северной Африке; позднее большое значение для него имели также крымские и среднеазиатские впечатления. Испытал разнообразные воздействия как современных (французский символизм), так и старинных (живопись Древней Руси и итальянского Раннего Возрождения) традиций. Был членом объединений «Мир искусства» и «Четыре искусства». Жил в Ленинграде, а с 1927 – в Пушкине.</p><p>Целиком в духе символизма решены уже его ранние картины, где преобладают мотивы легенды или волшебного сна (Сон, 1911; Играющие мальчики, 1911; обе работы – в Русском музее, Петербург). Монументальным свидетельством творческой зрелости явилось знаменитое полотно Купание красного коня (1912) – простой сельский сюжет превращен (благодаря плавной ритмике форм и звучному локальному колориту) в поэтическое обобщение о судьбах России. Так же воспринимаются картины Мать (1913) и Девушки на Волге (1915).</p><p>В своих новаторских монументально-декоративных работах (росписи в храме Василия Златоверхого в Овруче, 1910, Морском Никольском соборе Кронштадта, 1913, росписи и витраж в Троицком соборе города Сумы, 1915) Петров-Водкин выступает как замечательный мастер «церковного модерна». Религиозные мотивы порой одухотворяют и его светские композиции (1918 год в Петрограде (с фигурой Богоматери с Младенцем на первом плане), 1920; все картины – в Третьяковской галерее).</p><p>В 1910-е годы складывается особая художественно-теоретическая система Петрова-Водкина, где главную роль играет принцип «сферической перспективы», который позволяет ему, изображая натуру в ракурсах сверху и сбоку, передавать ощущение «земли как планеты». По-своему «планетарны», монументально-значительны даже его натюрморты (Селедка, 1918, Русский музей), портреты же воспринимаются как масштабные духовные вехи своего времени (Автопортрет, 1918; А.А.Ахматова, 1922; оба портрета – в Третьяковской галерее).</p><p>Искренний «попутчик» революции, мастер создал эпически-идеализированные образы Гражданской войны (После боя, 1923, Центральный музей Вооруженных сил, Москва; Смерть комиссара, 1928, Русский музей). Но картина 1919 год. Тревога (1934, там же), с питерским рабочим, которого посреди ночи вызывают в ополчение, закономерно воспринимается как предчувствие сталинского «большого террора» с его ночными арестами, а многофигурное Новоселье (1937, Третьяковская галерея) –на тему «уплотнения бывших буржуев» – как сатира на новый быт.</p><p>Петров-Водкин часто (начиная с ранних подражаний М.Метерлинку) обращался к литературе, особенно в свой поздний период. Романтически-эмоциональны, весьма самобытны по жанру его Хлыновск (1930) и Пространство Эвклида (1933) – своего рода «вымышленные автобиографии», где причудливо сочетаются черты авантюрного романа, теоретического трактата и мемуаров. Плодотворно работал также как художник театра и педагог (преподавал в школе Е.Н.Званцевой (1910–1915) и Академии художеств (1918–1933).</p><p>Умер Петров-Водкин в Ленинграде 15 февраля 1939.</p>",
			"en": "<p>Kuzma Sergeevich Petrov-Vodkin was an important Russian and Soviet painter and writer. Kuzma Petrov-Vodkin was born in Khvalynsk (Saratov Oblast) into the family of a local shoemaker. His first exposure to art was in his early childhood, when he took some lessons from a couple of icon painters and a signmaker. Petrov-Vodkin stayed in Saint Petersburg from 1895 to 1897 studying at the Baron Stieglits School, before moving to the Moscow School of Painting, Sculpture and Architecture. There Petrov-Vodkin was a student of Valentin Serov, Isaak Levitan and especially Konstantin Korovin. In 1901 he travelled to Munich to take classes with Anton Ažbe. He graduated in 1904.</p><p>Even during his college years, Petrov-Vodkin managed to enter into conflict with the Russian Orthodox Church, which discarded his work on a chapel in Samara and ultimately destroyed it as unacceptable. A number of his early works were deemed too erotic. His first well-known work was The Dream (1910), which sparked a discussion among contemporary Russian artists. The main defender of the painting was Alexandre Benois; his main detractor was Ilya Repin (hence, Petrov-Vodkin was discussed by two of the major Russian painters of the time). Other major works of that time include Boys at play, and, notably, Bathing of a Red Horse, his most iconic work. The latter became an instant classic, and, in a sense, trademark for the artist.</p><p>During this stage in his artistic development, Petrov-Vodkin extensively used an aesthetic of Orthodox icon together with brighter colours and unusual compositions. His works were often deemed blasphemous and erotic.</p><p>From 1924 to 1926 Petrov-Vodkin lived in France with his family. In 1922 he painted a portrait of the Russian poet Anna Akhmatova. During his earlier years, Petrov-Vodkin developed his <i>spherical perspective</i>: a unique twist that distorted the drawing as to represent the viewer high enough to actually notice the spherical curve of the globe.</p><p>Petrov-Vodkin used darker tones with time, but his paintings became more detailed. He started painting still life and portraits, stepping further away from his previous themes. With help from the Soviet government, he made several trips across the Soviet Union, producing many works with didactic purposes.</p><p>In 1927, Petrov-Vodkin contracted pulmonary tuberculosis and had to curtail painting for several years. He turned to literature and wrote three major semi-autobiographical volumes, Khvalynsk, Euclid's Space and Samarkandia. The first two of these are considered on a par with the finest Russian literature of the time. In the spring of 1932 the Central Committee of the Communist Party decreed that all existing literary and artistic groups and organizations should be disbanded and replaced with unified associations of creative professions. Accordingly, the Leningrad Union of Artists was established on 2 August 1932, which brought the history of post-revolutionary art to a close. The epoch of Soviet art began. Petrov-Vodkin was elected the first president of the Leningrad Union of Artists in 1932.</p><p>Petrov-Vodkin's other important pieces during this period include 1919. Alarm. (1934). In February 1939, Petrov-Vodkin died of tuberculosis in Leningrad.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Kuzma_Petrov-Vodkin.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Петров-Водкин,_Кузьма_Сергеевич",
				"en": "http://en.wikipedia.org/wiki/Kuzma_Petrov-Vodkin",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 46
	},
	{
		"id": 14,
		"name": "Rene Magritte",
		"years": "1898 - 1967",
		"genre": ["Surrealism", "Impressionism"],
		"nationality": ["Belgian"],
		"bio": {
			"ru": "<p>Магритт Рене (Magritte Rene), бельгийский художник-сюрреалист. Родился 21 ноября 1898 года. С 1916 по 1918 Магритт обучался в Королевской Академии искусств в Брюсселе (Academie Royale des Beaux-Arts). По окончании работал оформителем обоев и художником по рекламе. Ранние работы Магритта были выполнены в в стиле кубизма и футуризма под влиянием творчества французского художника Фернана Леже. В 1922 Магритт вступил в брак с Жоржеттой Бергер, с которой познакомился в пятнадцать лет. После свадьбы она стала единственной моделью для картин художника.</p><p>Знакомство с метафизической живописью Джорджа де Кирико и поэзией дадаистов было важным поворотным пунктом для творчества Магритта. В 1925 Магритт входит в группу дадаистов, сотрудничает в журналах 'Aesophage' и 'Marie' вместе с Жаном Арпом, Франсуа Пикабия, Тристаном Тцара и другими дадаистами. В 1925-1926 Магритт написал 'Оазис' и 'Затерянного жокея' - свои первые сюрреалистические картины. В 1927-1930 годах Рене Магритт проживал во Франции, участвовал в деятельности группы сюрреалистов, тесно сблизился с Максом Эрнстом, Сальвадором Дали, Андре Бретоном, Луи Бунюэлем и особенно с поэтом Полем Элюаром.</p><p>В Париже система концептуальной живописи Магритта окончательно сформировалась и осталась почти неизменной до конца жизни художника.</p><p>В картинах живописца Рене Магритта постоянно присутствует ощущение напряженности и таинственности ('Компаньоны страха', 1942; 'Букет слез', 1948; 'Объяснение', 1954). Странный ночной пейзаж блестит под освещенными дневным светом небесами ('Империя света', 1954). Магритт мастерски создавал контраст между прекрасно выписанными странными сочетаниями ирреальных предметов и естественным окружением, с этой целью художник активно использовал в своих картинах символы зеркал, глаз, окон ('Фальшивое зеркало', 1935; 'Ключ к пространству', 1936; 'Прекрасный мир', 1962). Увлечение Магритта философией и литературой нашло отражение во многих его картинах, например, 'Гигантесса' (по Бодлеру), 1929-1930; 'Область Арнхейм' (по Эдгару По), 1938. В 1940-х годах Магритт попытался изменить свой стиль живописи.</p><p>Но так называемые периоды творчества художника “plein-soleil” в 1945-1947 и “epoque vache” в 1947-1948 годах не оказались сколько-нибудь эффективными и Рене Магритт вернулся к своей манере письма. В 1950-х годах Магритт выполнил два цикла фресок: 'Пространство очарования' для казино Knokke-le-Zut (1953) и 'Несведущая фея' (1957) для Palais des Beaux-Arts в Шарлеруа. Рене Магритт умер 15 августа 1967 года в Брюсселе от рака в возрасте 69 лет.</p>",
			"en": "<p>René François Ghislain Magritte was a Belgian surrealist artist. He became well known for a number of witty and thought-provoking images that fall under the umbrella of surrealism. His work is known for challenging observers' preconditioned perceptions of reality.</p>René Magritte was born in Lessines, in the province of Hainaut, Belgium, in 1898. He was the oldest son of Léopold Magritte, a tailor and textile merchant, and Régina (née Bertinchamps), who was a milliner before she got married. Little is known about Magritte's early life. He began lessons in drawing in 1910.<p>According to a legend, 13-year-old Magritte was present when her body was retrieved from the water, but recent research has discredited this story, which may have originated with the family nurse. Supposedly, when his mother was found, her dress was covering her face, an image that has been suggested as the source of several of Magritte's paintings in 1927–1928 of people with cloth obscuring their faces, including Les Amants.</p><p>Magritte's earliest paintings, which date from about 1915, were Impressionistic in style. From 1916 to 1918, he studied at the Académie Royale des Beaux-Arts in Brussels, under Constant Montald, but found the instruction uninspiring. The paintings he produced during the years 1918–1924 were influenced by Futurism and by the figurative Cubism of Metzinger.</p><p>From December 1920 until September 1921, Magritte served in the Belgian infantry in the Flemish town of Beverlo near Leopoldsburg. In 1922–23, he worked as a draughtsman in a wallpaper factory, and was a poster and advertisement designer until 1926, when a contract with Galerie 'Le Centaure' in Brussels made it possible for him to paint full-time. In 1926, Magritte produced his first surreal painting, The Lost Jockey (Le jockey perdu), and held his first exhibition in Brussels in 1927. Critics heaped abuse on the exhibition. Depressed by the failure, he moved to Paris where he became friends with André Breton, and became involved in the surrealist group. The illusionistic, dream-like quality is characteristic of Magritte's version of Surrealism. He became a leading member of the movement after leaving his native Belgium in 1927 for Paris, where he stayed for three years.</p><p>During the early stages of his career, the British surrealist patron Edward James allowed Magritte to stay rent free in his London home and paint. James is featured in two of Magritte's works, Le Principe du Plaisir (The Pleasure Principle) and La Reproduction Interdite, a painting also known as Not to be Reproduced. During the German occupation of Belgium in World War II he remained in Brussels, which led to a break with Breton. He briefly adopted a colorful, painterly style in 1943–44, an interlude known as his 'Renoir Period', as a reaction to his feelings of alienation and abandonment that came with living in German-occupied Belgium. In 1946, renouncing the violence and pessimism of his earlier work, he joined several other Belgian artists in signing the manifesto Surrealism in Full Sunlight.</p> During 1947–48, Magritte's 'Vache Period', he painted in a provocative and crude Fauve style. During this time, Magritte supported himself through the production of fake Picassos, Braques and Chiricos—a fraudulent repertoire he was later to expand into the printing of forged banknotes during the lean postwar period. This venture was undertaken alongside his brother Paul Magritte and fellow Surrealist and 'surrogate son' Marcel Mariën, to whom had fallen the task of selling the forgeries. At the end of 1948, he returned to the style and themes of his prewar surrealistic art.<p>His work was exhibited in the United States in New York in 1936 and again in that city in two retrospective exhibitions, one at the Museum of Modern Art in 1965, and the other at the Metropolitan Museum of Art in 1992.</p>Politically, Magritte stood to the left, and retained close ties to the Communist Party, even in the post-war years. While remaining committed to the political left, he thus advocated a certain autonomy of art. On his religious views, Magritte was an agnostic.<p>Magritte died of pancreatic cancer on 15 August 1967 in his own bed, aged 68, and was interred in Schaerbeek Cemetery, Evere, Brussels.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Rene_Magritte.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Магритт,_Рене",
				"en": "http://en.wikipedia.org/wiki/René_Magritte",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 194
	},
	{
		"id": 15,
		"name": "Salvador Dali",
		"years": "1904 - 1989",
		"genre": ["Surrealism"],
		"nationality": ["Spanish"],
		"bio": {
			"ru": "<p>Сальвадор Дали родился 11 мая 1904 года в испанском городе Фигерасе (Каталония). Его настоящее имя Сальвадор Хасинто Дали Доменч Куси Фаррес. Отец называл его Сальвадор, что в переводе с испанского означает 'Спаситель'.</p><p>Первый сын, появившийся в семье, умер, и родители хотели, чтобы второй стал их утешением, спасителем древнего рода. Как писал Дали в своем шокирующем 'Дневнике одного гения': 'В шесть лет я хотел стать поваром, в семь - Наполеоном. С тех пор мои амбиции неуклонно растут. И сегодня я жажду стать не кем иным, как Сальвадором Дали'. Больше всего Дали любил самого себя, о таких людях говорят - Нарцисс. Он много говорил о себе, издавал личные дневники. Он был уверен в своей исключительности.</p><p>Дали утверждал, что был гениальным уже в чреве матери. мать свою он обожал, потому что она выносила Спасителя, то есть его, и когда мать умерла, не мог прийти в себя от удара. Но прошло не так много времени, и Дали в рекламных целях начертал на одной из собственных картин, висевших на выставке в Париже, кощунственные слова: 'Я плюю на свою мать'. Отец Сальвадора запретил сыну возвращаться домой, а Дали было все равно: семьей и домом ему стала живопись.</p><p>Гениален Дали или нет - судить не будем, его всегда оценивали по-разному, а вот одаренность всегда была налицо. Сохранился отличный пейзаж, который он написал в 6 лет, а в 14 лет состоялась его персональная выставка №1 в муниципальном театре Фигераса. В 17 лет он поступил в Королевскую академию художеств (иное название - Высшая школа изящных искусств).</p><p>Преподаватели оценили его рисунки довольно высоко. Поэт Рафаэль Альберти вспоминал: 'Я испытываю огромную любовь к Сальвадору Дали - юноше. Его талант от Бога подкреплялся удивительной работоспособностью. Очень часто, закрывшись в своей комнате и неистово работая, он забывал спускаться в столовую. Несмотря на свою редкую одаренность, Сальвадор Дали каждый день посещал Академию художеств и учился рисовать там до изнеможения'. Но в голове юного дарования всегда жила мысль: как стать знаменитым? Как выделиться из огромного круга талантов? Как необычно войти в мир искусства, чтобы тебя запомнили? Тщеславие - могучий рычаг для одаренного человека. Кого-то оно ведет к подвигу, кого-то заставляет проявить лучшие стороны характера и души, Дали решил идти совершенно иным путем: он решил шокировать!</p><p>В 1926 году Дали изгоняют из Академии за дерзость, затем он попадает на короткое время в тюрьму. Что же, ему эти скандалы только на руку! Начав самостоятельную дорогу в живописи, Дали принялся бороться со здравым смыслом. Помимо того, что он безостановочно писал свои жуткие фантазии, он вел себя весьма оригинально. Вот, например, некоторые из его выходок. Как-то в Риме он появился в парке княгини Паллавичини, освещенном факелами, из кубического яйца и произнес речь по-латыни.</p><p>В Мадриде Дали произнес однажды речь, обращенную к Пикассо. Цель ее - приглашение Пикассо в Испанию. 'Пикассо испанец - и я тоже испанец! Пикассо гений - и я тоже гений! Пикассо коммунист - и я тоже нет!'. Публика стонала. В Нью-Йорке Дали появился, одетый в золотой космический скафандр и находясь внутри диковинной машины собственного изобретения - прозрачной сферы. В Ницце Дали объявил о намерении приступить к созданию фильма 'Тачка во плоти' с гениальной актрисой Анной Маньяни в главной роли. Причем он утверждал, что по сюжету героиня влюбляется в тачку.</p><p>Сальвадор Дали был гением саморекламы, поэтому совершенно ясна его следующая тирада: 'Наше время - эра кретинов, эра потребления, и я был бы последним идиотом, если бы не вытряс из кретинов этой эпохи все, что только можно.' ...Дали, обожавший все нетрадиционное, все 'наоборот', был женат на удивительной женщине, которая вполне была ему под стать. Настоящее имя ее - Елена Дмитриевна Дьяконова, хотя в историю она вошла под именем Гала. Гала в переводе с французского означает 'праздник'. На самом деле так и было: для Дали Гала стала праздником вдохновения, главной моделью. Они не расставались 53 года.</p><p>..Брак Дали и Галы был довольно странным, скорее это был творческий союз. Дали не мог жить без своей 'половины': в быту он был довольно непрактичным, закомплексованным человеком, боялся всего: и езды в лифте, и заключения договоров. Гала говорила: 'Утром Сальвадор совершает ошибки, а во второй половине дня я их исправляю, разрывая легкомысленно подписанные им договоры'. Они представляли собой вечную пару - лед и пламень.</p><p>Гала умерла 10 июня 1982 года. В газете 'Советская культура' была напечатана статья корреспондента Алексея Медеведенко, передавшего из Мадрида следующую информацию: 'Дали был намерен исполнить последнюю волю жены: похоронить ее в Пуболе, находящемся в 80 километрах от Порт-Льигаты, в замке, в свое время подаренном Дали своей возлюбленной. Однако древний испанский закон, изданный во времена эпидемии чумы, запрещал перевозить тело без разрешения властей.</p><p>Дали ради Галы идет на нарушение закона. Обнаженное тело покойной завернули в одеяло и положили на заднее сиденье 'кадиллака'. За руль садится водитель Артуро. Их сопровождает сестра милосердия. Договорились, что, если их остановит полиция, они скажут, что Гала умерла по дороге в госпиталь... Через час он доставляет покойную в Пуболь. Там уже все приготовлено для погребения. Гроб с прозрачной крышкой с телом Галы был погребен в склепе замка 11 июня в шесть часов вечера в присутствии самого Дали и немногочисленных слуг...'</p>            <p>В год смерти Галы испанский король Хуан Карлос I подписал такой указ: 'Учитывая заслуги и обстоятельства жизни уникального художника Сальвадора Дали Доменча, произведения которого являются одним из выдающихся творений нашего времени, подтверждая мою высокую королевскую оценку его личности и в знак признательности за его вклад в испанскую культуру XX века, я дарую титул маркиза Дали де Пуболя ему и его потомкам и освобождаю его произведения от налогообложения...'</p><p>Сам же Дали спустя семь лет снова 'выкинул номер', уже последний. Он завещал, чтобы его похоронили не рядом с Галой, его Мадонной, а в городе, где он появился на свет, в Фигерасе. Тело Дали набальзамировали, облекли в белоснежную тунику и похоронили в музее-театре Фигераса, под геодезическим куполом.</p>",
			"en": "<p>Salvador Domingo Felipe Jacinto Dalí i Domènech, 1st Marqués de Dalí de Pubol (May 11, 1904 – January 23, 1989), known as Salvador Dalí was a prominent Spanish Catalan surrealist painter born in Figueres, Spain.</p><p>Dalí was a skilled draftsman, best known for the striking and bizarre images in his surrealist work. His painterly skills are often attributed to the influence of Renaissance masters. His best-known work, The Persistence of Memory, was completed in August 1931. Dalí's expansive artistic repertoire included film, sculpture, and photography, in collaboration with a range of artists in a variety of media.</p><p>Dalí attributed his <i>love of everything that is gilded and excessive, my passion for luxury and my love of oriental clothes</i> to an <i>Arab lineage</i>, claiming that his ancestors were descended from the Moors.</p><p>Dalí was highly imaginative, and also enjoyed indulging in unusual and grandiose behavior. His eccentric manner and attention-grabbing public actions sometimes drew more attention than his artwork, to the dismay of those who held his work in high esteem, and to the irritation of his critics.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Salvador_Dali.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Дали,_Сальвадор",
				"en": "http://en.wikipedia.org/wiki/Salvador_Dalí",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 139
	},
	{
		"id": 16,
		"name": "Sergei Vinogradov",
		"years": "1869 – 1963",
		"genre": ["Impressionism"],
		"nationality": ["Russian"],
		"bio": {
			"ru": "<p>Виноградов Сергей Арсеньевич — русский живописец-реалист, передвижник, один из основателей Союза русских художников. Родился в 1869 году в поселении Большие Соли Костромской губернии в семье сельского священника. В 1885-1889 годах учился в Московском училище живописи, ваяния и зодчества, где его преподавателями были В.Е. Маковский, И.М. Прянишников, Е С. Сорокин, В.Д. Поленов. В 1889 брал уроки в петербургской Академии художеств у Б.П. Виллевальде и К.Б. Венига. Виноградов участвовал в выставках Московского товарищества художников, художественных объединений «36 художников» и «Мир искусства».</p><p>В 1898-1913 годах Виноградов преподавал в Строгановском художественно-промышленном училище в Москве, кроме того он также занимался преподавательской деятельностью в Харькове и Риге. В 1912 году был удостоен звания академика. Виноградов в 1916 стал действительным членом Академии художеств. Картины художника демонстрировались на выставках в Дюссельдорфе, Париже, Берлине, Мюнхене, Праге, Нью-Йорке, Риге. Автор пленэрных лирических пейзажей («В усадьбе осенью», 1907, Третьяковская галерея), интерьеров, портретов, картин из крестьянской жизни («Обед работников» 1890, «Бабы» 1893, Третьяковская галерея).</p><p>В 1914-1917 Виноградов создавал патриотические плакаты на тему Первой мировой войны. В 1923 году художник эмигрировал из Советской России, жил в Латвии.</p><p>Виноградов Сергей Арсеньевич умер 5 февраля 1938 года в Риге.</p>",
			"en": "<p>Sergei Arsenjewitsch Winogradow was a Russian realist painter, a member of <i>Peredvizhniki</i> (often called The Wanderers or The Itinerants in English - a group of Russian realist artists who in protest at academic restrictions formed an artists' cooperative; it evolved into the Society for Travelling Art Exhibitions in 1870).</p>He is one of the founders of the Union of Russian Artists. Born in 1869 in the settlement near Kostroma province in the family of a village priest.<p>In 1885-1889 he studied at the Moscow School of Painting, Sculpture and Architecture, where his teachers were V.E. Makovsky, I.M. Pryanishnikov, E. Sorokin, V.D. Polenov. In 1889 he took classes at the St. Petersburg Academy of Arts from B.P. Villevalde and K.B. Wenig. Vinogradov participated in exhibitions of the Moscow Association of Artists, art associations <i>36 Artists</i> and <i>World of Art<i>.</p><p>In the years 1898-1913 Vinogradov taught at the Stroganov Art School in Moscow, in addition, he also taught at Kharkov and Riga. In 1912 he was awarded the title of academician. Vinogradov in 1916 became a full member of the Academy of Arts. The artworks shown at exhibitions in Düsseldorf, Paris, Berlin, Munich, Prague, New York, Riga.</p><p> In 1914-1917 Vinogradov created a patriotic posters on the theme of the First World War. In 1923 the artist emigrated from Soviet Russia, lived in Latvia. > <p> In 1914-1917 created a patriotic posters on the theme of the First World War. In 1923 the artist emigrated from Soviet Russia, lived in Latvia. Sergey Vinogradov died on February 5, 1938 in Riga.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Sergei_Vinogradov.html",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Виноградов,_Сергей_Арсеньевич",
				"en": "",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 102
	},
	{
		"id": 17,
		"name": "Edouard Manet",
		"years": "1832 - 1883",
		"genre": ["Realism", "Impressionism"],
		"nationality": ["French"],
		"bio": {
			"ru": "<p>Мане Эдуар (Manet Eduard), французский живописец. Учился в парижской Школе изящных искусств у Т.Кутюра (1850-1856). Эдуар Мане работал преимущественно в Париже, посетил Бразилию (1848-1850), Германию, Испанию (1865), Великобританию (конец 1860-х годов), Голландию (1872). Значительное влияние на становление Мане как художника оказало творчество Джорджоне, Тициана, Хальса, Веласкеса, Гойи, Делакруа. В работах конца 1850-х - начала 1860-х годов, составивших галерею остро переданных человеческих типов и характеров, Мане сочетал жизненную достоверность образа с романтизацией внешнего облика модели (“Лола из Валенсии”, 1862, Музей д'Орсэ, Париж).</p><p>Используя и переосмысляя сюжеты и мотивы живописи старых мастеров, Мане стремился наполнить их актуальным содержанием, полемически, иногда эпатирующим образом внести в известные классические композиции изображение современного человека (“Завтрак на траве”, “Олимпия” - оба 1863, Музей д'Орсэ). В 1860-е годы Эдуар Мане обращался к темам современной истории (“Казнь императора Максимилиана”, 1867, Кунстхалле, Мангейм), но проникновенное внимание Мане к современности проявлялось прежде всего в сценах, словно бы выхваченных из будничного течения жизни, полных лирической одухотворенности и внутренней значимости (“Завтрак в мастерской”, Новая галерея, Мюнхен; “Балкон”, Музей д'Орсэ, Париж - оба 1868), а также в близких к ним по художественной установке портретах (портрет Эмиля Золя, 1868, Музей д'Орсэ, портрет Берты Моризо, 1872). Своим творчеством Эдуар Мане предвосхитил возникновение, а затем стал и одним из основоположников импрессионизма. В конце 1860-х годов Мане сблизился с Эдгаром Дега, Клодом Моне, Огюстом Ренуаром, перешел от глухих и плотных тонов, напряженного колорита с преобладанием темных цветов к светлой и свободной пленэрной живописи (“В лодке”, 1874, Метрополитен-музей; “В кабачке папаши Латюиль”, 1879).</p><p>Многим произведениям Мане свойственны импрессионистические живописная свобода и фрагментарность композиции, светонасыщенная красочная вибрирующая гамма (“Аржантёй”, Музей изящных искусств, Турне). В то же время Мане сохраняет ясность рисунка, серые и черные тона в колорите, отдает предпочтение не пейзажу, а бытовому сюжету с выраженной социально-психологической подосновой (столкновение мечты и реальности, призрачность счастья в сверкающем и праздничном мире - в одной из последних картин Мане “Бар в Фоли-Бержер”, 1881-1882, Институт Кортолда, Лондон). В 1870-1880-е годы Мане много работал в области портрета, расширяя возможности этого жанра и превращая его в своего рода исследование внутреннего мира современника (портрет С.Малларме, 1876, Музей д'Орсэ, Париж), писал пейзажи и натюрморты (“Букет сирени”, 1883, Картинная галерея, Берлин-Далем), выступал как рисовальщик, мастер офорта и литографии. Творчество Мане обновило традиции французской живописи XIX века и во многом определило дальнейшее развитие мирового изобразительного искусства.</p>",
			"en": "<p>Édouard Manet was a French painter. He was one of the first 19th-century artists to paint modern life, and a pivotal figure in the transition from Realism to Impressionism.</p><p>His early masterworks, The Luncheon on the Grass (Le déjeuner sur l'herbe) and Olympia, both 1863, caused great controversy and served as rallying points for the young painters who would create Impressionism. Today, these are considered watershed paintings that mark the genesis of modern art.</p><p>A pivotal figure in the transition from Realism to Impressionism, Edouard Manet was an influential painter who left his own unique mark on the art world. As a child, his father was a judge, who wanted him to pursue a career in law, but his uncle, recognizing little Edouard’s talents, encouraged his interest in art, often taking him the Louvre. It was not until Manet failed two entrance exams into the French Navy that his father relented to his son’s wishes and allowed him to start art lessons under the academic painter Thomas Couture, who had him copy the works of the great masters in the Louvre. The young artist was also influenced by Frans Hals, Diego Velazquez, and Francisco Goya.</p><p>In 1856, in his early thirties, Manet opened his own studio. He began painting in a quasi-realist style, which transitioned to a more Impressionist style when he met the painter Berthe Morisot, who exposed him to her circle of Impressionist painter friends, including Claude Monet, Pierre-Auguste Renoir, and Edgar Degas, and their plein air painting techniques. Many of Manet’s works revolved around depictions of leisure activities, including observations of social life in all of the classes, from bourgeois horse racing to prostitutes drinking, to the streets of Paris and boating scenes, many of which were made from sketches done on the spot.</p><p>Although his work was Impressionistic, he resisted involvement with any specific style of painting, and thus preferred to present his works to the Salon of Paris rather than the many Impressionist Exhibitions. In 1875, some of his paintings were included in a book-length edition of Edgar Allen Poe’s The Raven and in 1881, he was awarded the Legion of Honor by the French government. Manet died eleven days after the amputation of his left foot due to gangrene, from complications of syphilis and rheumatism, which had been so bad as to cause partial paralysis in the years leading up to his death.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Edouard_Manet.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Мане,_Эдуар",
				"en": "http://en.wikipedia.org/wiki/Édouard_Manet",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 90
	},
	{
		"id": 18,
		"name": "Andrew Wyeth",
		"years": "1917 - 2009",
		"genre": ["Realism"],
		"nationality": ["American"],
		"bio": {
			"ru": "<p>Американский художник-реалист, один из виднейших представителей изобразительного искусства США XX века</p><p>Основная тема работ Уайета — провинциальный быт и американская природа. В основном, на его картинах изображены окрестности его родного города Чеддс-Форд, штат Пенсильвания, и города Кашинг, штат Мэн, где художник жил летом. Использовал темперу и акварель (за исключением ранних экспериментов с маслом).</p><p>Эндрю был младшим ребёнком в семье Ньюэлла Конверса и Каролины Уайетов. Обучался дома по причине плохого здоровья. Рано начал рисовать, учился живописи у отца. Историю искусства Уайет изучал самостоятельно.</p><p>Первая персональная выставка акварелей Эндрю Уайета состоялась в Нью-Йорке в 1937 году, когда ему было 20 лет. Все работы, выставленные на ней, были довольно быстро распроданы. В начале своей карьеры Уайет также немного занимался иллюстрированием книг, как его отец, но вскоре прекратил это.</p><p>В 1940 году Уайет женился на Бетси Джеймс. В 1943 году у супругов родился сын Николас, а ещё через три года появился на свет второй ребёнок Джеймс (Джейми). В 1945 году Уайет потерял отца (тот погиб в катастрофе). Примерно в это время окончательно сформировался реалистический стиль Уайета.</p><p>В 1948 году на ферме семейства Ольсен в штате Мэн Уайет написал свою самую известную картину - «Мир Кристины». Содержание картины глубоко трагично, и даже без комментария она вызывает у зрителя смутное чувство тревоги: непонятно, чем вызвано напряжение героини и её настороженный взгляд в сторону строений. Важно знать, что на картине – реальная девушка, Кристина Ольсен. У неё были парализованы ноги. Она жила на глухой ферме в те времена, когда ещё не было ни телевидения, ни Интернета. Весь её мир – это мир, ограниченный линией горизонта.</p><p>В течение всего последующего времени Уайет попеременно жил в Пенсильвании и Мэне, практически не покидая восточное побережье США. Стиль художника практически не менялся, хотя со временем картины Уайета становились более символическими, уходя в сторону магического реализма.</p>",
			"en": "<p>Andrew Newell Wyeth was a visual artist, primarily a realist painter, working predominantly in a regionalist style. He was one of the best-known U.S. artists of the middle 20th century.</p><p>In his art, Wyeth's favorite subjects were the land and people around him, both in his hometown of Chadds Ford, Pennsylvania, and at his summer home in Cushing, Maine. Wyeth often noted: <i>I paint my life.</i>One of the best-known images in 20th-century American art is his painting, Christina's World, currently in the collection of the Museum of Modern Art in New York City. This tempera was painted in 1948 when Wyeth was 31 years old.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Andrew_Wyeth.html",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Уайет,_Эндрю",
				"en": "https://en.wikipedia.org/wiki/Andrew_Wyeth",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 260
	},
	{
		"id": 19,
		"name": "Andrei Rublev",
		"years": "1360 - 1430",
		"genre": ["Byzantine Art"],
		"nationality": ["Russian"],
		"bio": {
			"ru": "<p>Сведений о жизни Андрея Рублёва сохранилось очень мало.</p><p>Известно, что в 1405 г. вместе с Феофаном Греком и иконописцем Прохором с Городца он расписывал стены Благовещенского собора в Московском Кремле и создавал для него иконостас. Семь сохранившихся икон Рублёва отличаются от работ старых мастеров нежным сочетанием цветов и редкой гармоничностью композиции.</p><p>В 1408 г. Рублёв вместе с Даниилом Чёрным трудился над росписью Успенского собора во Владимире. С дошедших до нас фрагментов сцены Страшного суда вместо традиционных византийских ликов смотрят русские лица. День Страшного суда представлен как момент единения, согласия людей, воодушевляемых любовью, а не как возмездие за грехи. На иконах огромного Успенского иконостаса мягкость и душевность сочетаются с ясностью внутреннего мира Богоматери, Иоанна Предтечи, апостолов и отцов Церкви.</p><p>До нас дошли лишь три иконы из рублёвского иконостаса собора Рождества Богородицы Саввино-Сторожевского монастыря под Звенигородом. Одна из них — «Спас» — знаменует собой появление нового русского канона облика Христа Спасителя, в котором мудрость и доброта вытеснили византийскую суровость.</p><p>Самую известную свою икону — «Троицу» — Рублёв создал в память Сергия Радонежского для церкви, построенной на месте погребения святого в Троице-Сергиевой лавре в Сергиевом Посаде. Сергий особенно почитал Троицу, желая, чтобы «лицезрением её единства побеждалась ненавистная рознь мира сего». Андрей воплотил эту идею в несравненном образе, излучающем светлую мудрость, нежность и душевную чистоту.</p><p>В 1425—1427 гг. Рублёв и Чёрный работали над росписью и иконостасом Троицкого собора Троице-Сергиевой лавры. Андрей расписывал Спасский собор Андроникова монастыря в Москве (20-е гг. XV в.).</p><p>Иконописец умер в Москве в Андрониковом монастыре. Рублёв оказал огромное влияние на современников и потомков, изменив зрительный образ Царства Небесного. Русская православная церковь канонизировала Андрея Рублёва как святого.</p>",
			"en": "<p>Andrei Rublev is considered to be the greatest medieval Russian painter of Orthodox icons and frescoes.</p><p>The first mention of Rublev is in 1405 when he decorated icons and frescos for the Cathedral of the Annunciation of the Moscow Kremlin in company with Theophanes the Greek and Prokhor of Gorodets. His name was the last of the list of masters as the junior both by rank and by age. Theophanes was an important Byzantine master who moved to Russia, and is considered to have trained Rublev.</p><p>Chronicles tell us that in 1408 he painted (together with Daniil Cherni) the Assumption Cathedral in Vladimir and in 1425–1427 the Cathedral of St. Trinity in the Trinity-St. Sergius Lavra. After Daniil's death Andrei came to Moscow's Andronikov Monastery where he painted his last work, the frescoes of the Savior Cathedral. He is also believed to have painted at least one of the miniatures in the Khitrovo Gospels.</p><p>The only work authenticated as entirely his is the icon of the Trinity, ca. 1410 (shown at right), currently in the Tretyakov Gallery, Moscow. It is based on an earlier icon known as the <i>Hospitality of Abraham</i> (illustrating Genesis 18). Rublev removed the figures of Abraham and Sarah from the scene, and through a subtle use of composition and symbolism changed the subject to focus on the Mystery of the Trinity. In Rublev's art two traditions are combined: the highest asceticism and the classic harmony of Byzantine mannerism. The characters of his paintings are always peaceful and calm. After some time his art came to be perceived as the ideal of Church painting and of Orthodox iconography. Andrei Rublev is honored with a feast day on the liturgical of the Episcopal Church in the United States of America on 29 January.</p><p>In 1966, Andrei Tarkovsky (famous Russian director) made his celebrated film Andrei Rublev, loosely based on the artist's life and the first (and perhaps only) film produced under the Soviets to treat the artist as a world-historic figure and Christianity as an axiom of Russia’s historical identity during a turbulent period in the history of Russia.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Andrei_Rublev.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Андрей_Рублёв",
				"en": "http://en.wikipedia.org/wiki/Andrei_Rublev",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 99
	},
	{
		"id": 20,
		"name": "Viktor Vasnetsov",
		"years": "1848 - 1926",
		"genre": ["Romanticism", "Symbolism"],
		"nationality": ["Russian"],
		"bio": {
			"ru": "<p>Васнецов Виктор Михайлович (Viktor Mikhailovich Vasnetsov),великий русский художник, один из основоположников русского модерна в его национально-романтическом варианте.</p><p>Родился в селе Лопьял (Вятская губерния) 3 (15) мая 1848 в семье священника. Учился в духовной семинарии в Вятке (1862–1867), затем в рисовальной школе при Обществе поощрения художеств в Петербурге (где наставником Васнецова был Иван Николаевич Крамской) и в петербургской Академии художеств (1868–1875).</p><p>Васнецов - основоположник особого «русского стиля» внутри общеевропейского символизма и модерна. Живописец Васнецов преобразовал русский исторический жанр, соединив мотивы средневековья с волнующей атмосферой поэтической легенды или сказки; впрочем, и сами сказки зачастую становятся у него темами больших полотен. Среди этих живописных былин и сказок Васнецова – картины 'Витязь на распутье' (1878, Русский музей, Санкт-Петербург), 'После побоища Игоря Святославича с половцами' (по мотивам сказания 'Слово о полку Игореве', 1880), 'Аленушка' (1881),'Три богатыря' (1898), 'Царь Иван Васильевич Грозный' (1897; все картины – в Третьяковской галерее). Некоторые из этих произведений ('Три царевны подземного царства', 1881, там же) представляют уже типичные для модерна декоративные картины-панно, переносящие зрителя в мир грез.</p><p>Тот же мир оживал в новаторских театральных работах Васнецова, в его эскизах к постановке пьесы-сказки А.Н.Островского ' Снегурочка' на домашней сцене С.И.Мамонтова в Абрамцево (1881–1882) и одноименной оперы Н.А.Римского-Корсакова в Московской частной русской опере С.И.Мамонтова (1885).</p><p>Принципы «русского стиля» мастер развивал также в области архитектуры и дизайна: по эскизам Васнецова, стилизующим древнерусскую старину, в Абрамцево были возведены церковь Спаса Нерукотворного (1881–1882) и Избушка на курьих ножках (1883), а в Москве – памятный крест на месте убийства великого князя Сергея Александровича в Кремле (1905, уничтожен при советской власти, воссоздан на территории московского Новоспасского монастыря) и фасад Третьяковской галереи (1906). </p><p>Самым же значительным монументально-декоративным свершением художника явились росписи киевского Владимирского собора (1885–1896); в них Васнецов стремился обновить византийские каноны, внося в них лирически-личностное начало. После 1905 года Васнецов примыкает к монархическому «Союзу русского народа», оформляя в славянских мотивах издания этой организации. Октябрьскую революцию Виктор Михайлович Васнецов, как убежденный монархист и славянофил, не принял.</p><p>Умер Виктор Михайлович Васнецов в Москве 23 июля 1926 года.</p>",
			"en": "<p>Viktor Mikhaylovich Vasnetsov was a Russian artist who specialized in mythological and historical subjects. He is considered the co-founder of Russian folklorist and romantic modernist painting and a key figure in the revivalist movement.</p><p>Viktor Vasnetsov was born in a remote village Lopyal of Vyatka guberniya in 1848, the second of the six children. From the age of ten, Viktor studied in a seminary in Vyatka, each summer moving with his family to a rich merchant village of Ryabovo. During his seminary years, he worked for a local icon shopkeeper. He also helped an exiled Polish artist, Michał Elwiro Andriolli, to execute frescoes for Vyatka's Alexander Nevsky cathedral. Having graduated from the seminary, Viktor decided to move to Saint Petersburg to study art. He auctioned his paintings of Woman Harvester and Milk-maid (both 1867) in order to raise money required for the trip to the Russian capital.</p><p>In August 1867 Viktor entered the Imperial Academy of Arts. Three years later, the Peredvizhniki movement of realist painters rebelled against the Academism. Vasnetsov befriended their leader Ivan Kramskoi, referring to him as his teacher. He also became very close to his fellow student Ilya Yefimovich Repin.</p><p>In the early 1870s he executed a lot of engravings depicting contemporary life. Two of them (Provincial Bookseller from 1870 and A Boy with a Bottle of Vodka from 1872) won him a bronze medal at the World Fair in London (1874). At that period he also started producing genre paintings in oil. Such pieces as Peasant Singers (1873) and Moving House (1876) were warmly welcomed by democratic circles of Russian society.</p><p>In 1876 Repin invited Vasnetsov to join the Peredvizhniki colony in Paris. While living in France, Viktor studied classical and contemporary paintings, academist and Impressionist alike. At that period, he painted Acrobats (1877), produced prints, and exhibited some of his works at the Salon. It was in Paris that he became fascinated with fairy-tale subjects, starting to work on Ivan Tsarevich Riding a Grey Wolf and The Firebird. Vasnetsov was a model for Sadko in Repin's celebrated painting Sadko in the Underwater Kingdom. In 1877 he returned to Moscow.</p><p>In the late 1870s Vasnetsov concentrated on illustrating Russian fairy tales and bylinas, executing some of his best known pieces: The Knight at the Crossroads (1878), Prince Igor's Battlefield (1878), Three tsarevnas of the Underground Kingdom (1879–1881), The Flying Carpet (1880), and Alionushka (1881).</p><p>In 1884-1889 Vasnetsov was commissioned to paint frescos in the St Vladimir's Cathedral of Kiev. This was a challenging work which ran contrary to both Russian and Western traditions of religious paintings. The influential art critic Vladimir Stasov labelled them a sacrilegious play with religious feelings of the Russian people. Another popular critic, Dmitry Filosofov, referred to these frescoes as <i>the first bridge over 200 years-old gulf separating different classes of Russian society</i>.</p><p>In 1885 the painter travelled to Italy. The same year he worked on stage designs and costumes for Nikolai Rimsky-Korsakov's opera The Snow Maiden. The following two decades were productive for Vasnetsov. He increasingly turned to other media during this period. In 1897 he collaborated with his brother Apollinary on the theatrical design of another Rimsky-Korsakov premiere, Sadko.</p><p>Between 1906 and 1911, Vasnetsov worked on the design of the mosaics for Alexander Nevsky Cathedral, Warsaw; he was also involved in the design of Alexander Nevsky Cathedral, Moscow. In 1912, he was given a noble title by Czar Nicholas II. In 1914, he designed a revenue stamp intended for voluntary collection for victims of World War I.</p><p>Even prior to the Russian Revolution, Vasnetsov became active as a regent of that gallery. He allocated a significant portion of his income to the State Historical Museum, so that a large part of the museum's collection was acquired on Vasnetsov's money. After the October Revolution he advocated removing some of the religious paintings (notably those by Alexander Ivanov) from churches to the Tretyakov Gallery.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Viktor_Vasnetsov.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Васнецов,_Виктор_Михайлович",
				"en": "http://en.wikipedia.org/wiki/Viktor_Vasnetsov",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 174
	},
	{
		"id": 21,
		"name": "Vincent van Gogh",
		"years": "1853 – 1890",
		"genre": ["Post-Impressionism"],
		"nationality": ["Dutch"],
		"bio": {
			"ru": "<p>Ван Гог Винсент (Van Gogh Vincent), голландский живописец. В 1869-1876 служил комиссионером художественно-торговой фирмы в Гааге, Брюсселе, Лондоне, Париже, в 1876 работал учителем в Англии. Ван Гог изучал теологию, в 1878–1879 был проповедником в шахтерском районе Боринаж в Бельгии. Защита интересов шахтеров привела ван Гога к конфликту с церковными властями. В 1880-е годы ван Гог обратился к искусству, посещал Академию художеств в Брюсселе (1880–1881) и Антверпене (1885-1886).</p><p>Ван Гог пользовался советами живописца А.Мауве в Гааге, с увлечением рисовал  простых людей, крестьян, ремесленников, заключенных. В серии картин и этюдов середины 1880-х годов (“Крестьянка”, 1885, Государственный музей Крёллер-Мюллер, Оттерло; “Едоки картофеля”, 1885, фонд Винсента ван Гога,Амстердам), написанных в темной живописной гамме, отмеченных болезненно-острым восприятием людских страданий и чувства подавленности, художник воссоздает гнетущую атмосферу психологической напряженности.</p><p>В 1886–1888 ван Гог жил в Париже, посещал частную художественную студию, изучал живопись импрессионизма, японскую гравюру, “синтетические” произведения Поля Гогена. В этот период палитра ван Гога стала светлой, исчезли земляные краски, появились чистые голубые, золотисто-желтые, красные тона, характерный для него динамичный, как бы струящийся мазок (“Мост через Сену”, 1887, “Папаша Танги”, 1881). В 1888 ван Гог переехал в Арль, где окончательно определилось своеобразие его творческой манеры. Пламенный художественный темперамент, мучительный порыв к гармонии, красоте и счастью и в то же время страх перед враждебными человеку силами находят воплощение то в сияющих солнечными красками юга пейзажах (“Жатва. Долина Ла-Кро”, 1888), то в зловещих, напоминающих ночной кошмар образах (“Ночное кафе”, 1888, частное собрание, Нью-Йорк). Динамика цвета и мазка в картинах Ван Гога наполняет одухотворенной жизнью и движением не только природу и населяющих ее людей (“Красные виноградники в Арле”, 1888, ГМИИ, Москва), но и неодушевленные предметы (“Спальня ван Гога в Арле”, 1888).</p><p>Напряженная работа ван Гога в последние годы сопровождалась приступами душевной болезни, которая привела его в больницу для душевнобольных в Арле, затем в Сен-Реми (1889–1890) и в Овер-сюр-Уаз (1890), где он покончил жизнь самоубийством. Творчество двух последних лет жизни художника отмечено экстатической одержимостью, предельно обостренной экспрессией цветовых сочетаний, резкими сменами настроения – от исступленного отчаяния и мрачного визионерства (“Дорога с кипарисами и звездами”, 1890, Музей Крёллер-Мюллер, Оттерло) до трепетного чувства просветления и умиротворения (“Пейзаж в Овере после дождя”, 1890, ГМИИ, Москва).</p>",
			"en": "<p>Vincent Willem van Gogh  was a Post-Impressionist painter of Dutch origin whose work—notable for its rough beauty, emotional honesty, and bold color—had a far-reaching influence on 20th-century art. After years of painful anxiety and frequent bouts of mental illness,  he died aged 37 from a gunshot wound, generally accepted to be self-inflicted (although no gun was ever found).</p><p>He began to draw as a child, and he continued to draw throughout the years that led up to his decision to become an artist. He did not begin painting until his late twenties, completing many of his best-known works during the last two years of his life. In just over a decade, he produced more than 2,100 artworks, consisting of 860 oil paintings and more than 1,300 watercolors, drawings, sketches, and prints. His work included self portraits, landscapes, still lifes, portraits as well as paintings of cypresses, wheat fields and sunflowers.</p><p>He spent his early adulthood working for a firm of art dealers, traveling between The Hague, London, and Paris, after which he taught for a time in England at Isleworth and Ramsgate. One of his early aspirations was to become a pastor, and from 1879 he worked as a missionary in a mining region in Belgium, where he began to sketch people from the local community. In 1885, he painted his first major work, entitled The Potato Eaters. His palette at the time consisted mainly of somber earth tones and showed no sign of the vivid coloration that distinguished his later work. In March 1886, he moved to Paris and discovered the French Impressionists. Later, he moved to the south of France and was influenced by the strong sunlight he found there. His work grew brighter in color, and he developed the unique and highly recognizable style that became fully realized during his stay in Arles in 1888. The extent to which his mental health affected his painting has been a subject of speculation since his death. Despite a widespread tendency to romanticize his ill health, modern critics see an artist deeply frustrated by the inactivity and incoherence brought about by his bouts of illness. According to art critic Robert Hughes, Van Gogh's late works show an artist at the height of his ability, completely in control and <i>longing for concision and grace</i>.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Vincent_van_Gogh.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Ван_Гог,_Винсент",
				"en": "http://en.wikipedia.org/wiki/Vincent_van_Gogh",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 877
	},
	{
		"id": 22,
		"name": "Gustav Klimt",
		"years": "1862 - 1918",
		"genre": ["Symbolism", "Art Nouveau"],
		"nationality": ["Austrian"],
		"bio": {
			"ru": "<p>Климт Густав (Klimt Gustav), известнейший австрийский живописец. Один из самых ярких представителей стиля модерн. Родился в предместье Вены в семье художника-гравера. Окончил венскую Школу декоративного искусства. Ранние работы художника состояли в основном из больших фресок для театров и были написаны в натуралистическом стиле. В росписях с изображением аллегорических фигур, исполненных Климтом в 1890-1891 годах на сводах большой лестницы Музея истории искусств в Вене, впервые появляются черты, ставшие основными в его творчестве - четкий силуэт и склонность к орнаментализму. После 1898 года, работы Густава Климта, приобретают более декоративный, символический аспект.</p><p>Густав Климт являлся лидером Венского авангарда рубежа веков. Будучи по преимуществу художником-декоратором, Климт возглавил венское сообщество художников-новаторов «Сецессион» - движение протеста против эстетического консерватизма и морализаторства предыдущего поколения. Лучшими картинами Климта считаются более поздние портреты художника, с их плоскими, незатененными поверхностями, прозрачными, мозаичными цветами и формами, и извилистыми, витиеватыми линиями и образцами. В картинах Климта сочетаются две противоборствующие силы; с одной стороны - это жажда абсолютной свободы в изображении предметов что приводит к игре орнаментальных форм. Эти картины живописца в действительности являются символичными и их надо рассматривать в контексте символизма как выражение недостижимого мира стоящего над временем и реальностью. С другой стороны - это сила восприятия натуры и природы, влияние которой смягчает пышность орнаментальности в картинах Густава Климта. Среди наиболее восхитительных работ художника - панно для «Бургтеатра» в Вене (1888), ряд мозаичных фресок в Pallas Stoclet, богатом частном особняке в Брюсселе. К концу жизни в 1917 году Климт завоевал полное официальное признание, став почетным профессором Венской и Мюнхенской академий изобразительных искусств</p><p>Картина Густава Климта «Поцелуй». На цветочном поле, из орнамента и абстрактных форм вырастает силуэт целующейся пары. В колорите картины преобладает золотой тон с вкраплением ярких пятен полевых цветов и богатого узора одежд. Эротический характер придают сцене чувственные линии, пышный орнамент и пряный колорит - символ роскоши и декадентства. Этот стиль часто называют стилем модерн. Климт написал большое количество портретов, в основном женских, а также мифологические и аллегорические композиции. Эскизы предметов прикладного искусства и мозаик Густава Климта пользовались огромным успехом, однако созданные художником настенные росписи для венского университета вызвали скандал и были сочтены художественными критиками начала двадцатого века «порнографическими». Скончался Густав Климт в 1918 году.</p><p>Сецессион (нем. Sezession, от лат. secessio — отход, отделение), название объединений художников в Мюнхене, Вене, Берлине, отвергавших академические доктрины, выступивших провозвестниками стиля модерн. Венский Сецессион возник в 1897 и объединил художников австрийского модерна — «сецессионстиля» (Sezessionsstil) — вокруг журнала «Вер Сакрум» (Ver Sacrum), основанного в 1898 году. Журнал одновременно был и органом австрийского литературного символизма (Гуго фон Гофмансталь, Райнер Мария Рильке). Руководил объединением живописец Густав Климт. Характерными особенностями этого стиля для живописи были мозаичная многоцветность и изощренная орнаментальность, для графики — геометрическая ясность рисунка при его общей свободной декоративности, для архитектуры — ритмическая упорядоченность делений, лаконичность декора, рациональность композиционного и конструктивного решений. Мастеров этого стиля (Йозеф Мария Ольбрих, Отто Вагнер, Йозеф Хофман, Карл Мозер и другие художники) отличало тяготение к прямолинейной орнаментике, сохранявшей геометрическую жесткость даже в самых сложных комбинациях. В связи с этим «сецессионстиль» иногда называют «стилем квадрата» (Quadratstill).</p>",
			"en": "<p>Gustav Klimt was an Austrian symbolist painter and one of the most prominent members of the Vienna Secession movement. Klimt is noted for his paintings, murals, sketches, and other objets d'art. Klimt's primary subject was the female body,  and his works are marked by a frank eroticism. In addition to his figurative works, which include allegories and portraits, he painted landscapes. Among the artists of the Vienna Secession, Klimt was the most influenced by Japanese art and its methods.</p><p>Early in his artistic career he was a successful painter of architectural decorations in a conventional manner. As he developed a more personal style, his work was the subject of controversy that culminated when the paintings he completed around 1900 for the ceiling of the Great Hall of the University of Vienna were criticized as pornographic. He subsequently accepted no more public commissions, but achieved a new success with the paintings of his 'golden phase', many of which include gold leaf. Klimt's work was an important influence on his younger contemporary Egon Schiele.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Gustav_Klimt.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Климт,_Густав",
				"en": "http://en.wikipedia.org/wiki/Gustav_Klimt",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 117
	},
	{
		"id": 23,
		"name": "Ivan Aivazovsky",
		"years": "1817-1900",
		"genre": ["Romanticism"],
		"nationality": ["Russian", "Armenian"],
		"bio": {
			"ru": "<p>Айвазовский Иван Константинович (Ivan Aivazovsky), русский художник. Родился в Феодосии 17 (29) июля 1817 в семье армянского предпринимателя. Учился в петербургской Академии художеств у М.Н.Воробьева (1833–1839). Работал в Крыму, Италии, посетил также Францию, Англию и ряд других стран. Любил путешествовать, но с 1845 работал преимущественно в родном городе. Испытал особое влияние французской марины классицизма. Избавляясь от слишком резких контрастов классицистической композиции, Айвазовский со временем добивается подлинной живописной свободы. Бравурно - катастрофический 'Девятый вал' (1850, Русский музей, Петербург), где достигнуто впечатление «безбрежного» морского пространства, может служить итогом его раннего периода.</p><p>В самых хрестоматийных и по праву особо популярных своих картинах (таких, как 'Черное море', 1881 и др.) Айвазовский, как никто другой сумел показать живую, пронизанную светом, вечно подвижную водную стихию. Живописец Главного морского штаба (с 1844), Айвазовский принимает участие в ряде военных кампаний (в том числе в Крымской войне 1853–1856), создав немало патетических батальных полотен (Чесменский бой, 1848, Феодосийская картинная галерея). Хотя он исполнил немало «чисто земных» пейзажей, среди которых выделяются украинские и кавказские виды, именно море обычно предстает у него универсальной основой природы и истории, особенно в сюжетах с сотворением мира и потопом; впрочем, образы религиозной, библейской или евангельской, иконографии, равно как и античной мифологии, нельзя причислить к самым большим его удачам. Целый ряд картин Айвазовский посвятил древней и новой армянской истории (Посещение Дж.Г.Байроном монастыря мхитаристов близ Венеции, 1880, Картинная галерея Армении, Ереван). Айвазовский накопил большое состояние и известен также как щедрый благотворитель: в Феодосии на его средства были выстроены здания археологического музея, проведены работы по градоустройству, постройке порта и железной дороги</p><p>Из его феодосийской мастерской вышел целый ряд крупных пейзажистов (Л. Ф. Лагорио, А. И. Куинджи, К. Ф. Богаевский). Умер Айвазовский в Феодосии 19 апреля (2 мая) 1900.</p>",
			"en": "<p>Ivan Konstantinovich Aivazovsky was a Russian Romantic painter. He is considered one of the greatest marine artists in history. Baptized as Hovhannes Aivazian, Aivazovsky was born into an Armenian family in the Black Sea port of Feodosia and was mostly based in his native Crimea.</p><p>Following his education at the Imperial Academy of Arts, Aivazovsky traveled to Europe and lived briefly in Italy in the early 1840s. He then returned to Russia and was appointed the main painter of the Russian Navy. Aivazovsky had close ties with the military and political elite of the Russian Empire and often attended military maneuvers. He was sponsored by the imperial family and was well-regarded during his lifetime. The winged word <i>worthy of Aivazovsky's brush</i>, popularized by Anton Chekhov, was used in Russia for <i>describing something ineffably lovely</i>.</p><p>One of the most prominent Russian artists of his time, Aivazovsky was also popular outside Russia. He held numerous solo exhibitions in Europe and the United States. During his almost sixty-year career, he created around 6,000 paintings,making him one of the most prolific artists of his time. The vast majority of his works are seascapes, but he often depicted battle scenes, Armenian themes, and portraiture. Most of Aivazovsky's works are kept in Russian, Ukrainian and Armenian museums as well as private collections.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Ivan_Aivazovsky.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Айвазовский,_Иван_Константинович",
				"en": "http://en.wikipedia.org/wiki/Ivan_Aivazovsky",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 416
	},
	{
		"id": 24,
		"name": "Hieronymus Bosch",
		"years": "1450 - 1516",
		"genre": ["Northern Renaissance"],
		"nationality": ["Dutch"],
		"bio": {
			"ru": "<p>Босх, Бос (Bosch) Хиеронимус [собственно Хиеронимус ван Акен, Hieronymus van Aeken], великий нидерландский живописец. Работал главным образом в Хертогенбосе в Северной Фландрии. Один из наиболее ярких мастеров раннего Северного Возрождения, Иероним Босх в своих многофигурных композициях, картинах на темы народных поговорок, пословиц и притч (“Искушение святого Антония”, Национальный музей старинного искусства, Лиссабон; триптихи  “Сад наслаждений”, “Поклонение волхвов” – все в музее Прадо; “Корабль дураков”, Музей Лувр) сочетал изощренную средневековую фантастику, порожденные безграничным воображением гротескные демонические образы с фольклорно-сатирическими и нравоучительными тенденциями, с необычными для искусства его эпохи реалистическими новшествами. Поэтические пейзажные фоны, смелые жизненные наблюдения, метко схваченные художником Иеронимом Босхом народные типы и бытовые сцены подготовили почву для формирования нидерландского бытового жанра и пейзажа; тяга к иронии и иносказанию, к воплощению в гротескно-сатирической форме широкой картины народной жизни способствовали становлению творческой манеры Питера Брейгеля Старшего и других художников.</p><p>Стиль Босха уникален и не имеет аналогий в нидерландской живописной традиции. Живопись Иеронима Босха совсем не похожа на творчество других художников того времени, таких как Ян ван Эйк или Рогир ван дер Вейден. Творчество Иеронима Босха одновременно - новаторское и традиционное, наивное и изощренное; оно завораживает людей ощущением какой-то тайны, известной одному художнику. «Именитый мастер» - так называли Босха в Хертогенбосе, которому художник оставался верен до конца своих дней, хотя прижизненная слава о нем распространилась далеко за пределы родного города. А после смерти она возросла неизмеримо и довольно долго не убывала; живопись мастера нашла ревностного поклонника в лице Филиппа II, короля Испании. Большинство сюжетов картин Босха связано с эпизодами из жизни Христа или святых, противостоящих пороку, или почерпнуты в аллегориях и пословицах о человеческой жадности и глупости.</p><p>Яркая достоверность произведений Босха, умение изобразить движения души человека, удивительная способность нарисовать толстосума и нищего, торговца и калеку, - все это отводит ему важнейшее место в развитии жанровой живописи. В дальнейшем мир причудливых образов Босха питали фантастически-романтические искания многих художников XIX–XX веков. Творчество Босха кажется странно современным: четыре столетия спустя его влияние неожиданно проявилось в движении экспрессионистов и позднее - в сюрреализме. Многие художники этих направлений в живописи создавали полотна на сюжет картины “Искушение святого Антония”.</p>",
			"en": "<p>Hieronymus Bosch was a European painter of the late Middle Ages. His two most famous works are <i>The Garden of Earthly Delights</i> and <i>The Temptation of St. Anthony</i>.</p><p>Born in 's-Hertogenbosch, Brabant (now in the Netherlands), around 1450. His work utilizes striking and sometimes seemingly surreal iconography.  Throughout his career, he used his art to portray the sins and follies of humankind and to show the consequences of these actions. He died in 's-Hertogenbosch in 1516.</p><p>Known for his dark and disturbing visions, Bosch took a critical look at the world around in several of his works. Throughout his career, Bosch focused much of his attention to exploring religious themes. <i>The Haywain</i> a triptych, first shows Adam and Eve in its interior left panel. The center panel features both clergy and peasants engaged in sinful behavior. The right panel provides a gruesome illustration of where that type of behavior leads—hell. While he enjoyed some success during his lifetime, he attracted an even grander fan soon after his death. King Philip II of Spain became a serious collector of Bosch's work, and <i>The Garden of Earthly Delight</i> is said to have been hung in his bedroom to remind the Spanish monarch to stay on a righteous path.",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Hieronymus_Bosch.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Босх,_Иероним",
				"en": "http://en.wikipedia.org/wiki/Hieronymus_Bosch",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 137
	},
	{
		"id": 25,
		"name": "Ilya Repin",
		"years": "1844 - 1930",
		"genre": ["Realism"],
		"nationality": ["Russian"],
		"bio": {
			"ru": "<p>Репин Илья Ефимович - великий русский художник. Родился 24 июля (5 августа) 1844 года в Чугуеве в семье военного поселенца. Свои первые художественные навыки Илья Репин получил в местной школе военных топографов (1854–1857), а затем у чугуевского иконописца И.М.Бунакова; с 1859 года исполнял заказы на иконы и церковные росписи. Перебравшись в Петербург в 1863 году, Репин учился в рисовальной школе Общества поощрения художеств и в Академии художеств (1864–1871). Жил в Италии и Франции (1873–1876). В 1877 году Репин вернулся в Чугуев, затем жил в Москве и в Петербурге, а с 1900 – в Куоккале, в своем имении «Пенаты». Являлся одним из активнейших членов «Товарищества передвижников». Уже религиозные картины, написанные по академическим программам ('Иов и его друзья', 1869; 'Воскрешение дочери Иаира', 1871; обе картины – в Русском музее, Петербург), являют удивительный дар психологической концентрации.</p><p>Сенсацией стала картина Репина 'Бурлаки на Волге' (1870–1873, там же); на базе многочисленных этюдов, в основном написанных во время путешествия по Волге, молодой Илья Репин создал картину, впечатляющую и яркой выразительностью натуры, и грозной силой протеста, зреющей в этих изгоях общества. Пафос и протест в картинах живописца Репина то неразрывно соединялись, как в торжественно-саркастическом ' Крестном ходе в Курской губернии' (1883), то разделялись на два параллельных потока: так, наряду с «революционным циклом» о трагическом разладе общества ('Отказ от исповеди', 1879–1885; 'Не ждали', 1884; 'Арест пропагандиста', 1880–1892; все работы – в Третьяковской галерее; 17 октября 1905 года, 1907, Русский музей) Репин увлеченно пишет и живописные образы парадного фасада империи ('Прием волостных старшин Александром III во дворе Петровского дворца в Москве', 1885, там же; 'Торжественное заседание Государственного Совета 7 мая 1901 года в честь столетнего юбилея со дня его учреждения', 1901–1903, Русский музей).</p><p>Темпераментная кисть Репина насыщает мощной эмоциональной силой и исторические образы былого ('Запорожцы пишут письмо турецкому султану', 1878–1891, там же; 'Иван Грозный и сын его Иван', 1885, Третьяковская галерея). Эмоции эти порой буквально выплескиваются наружу: в 1913 году иконописец А.Балашов, буквально загипнотизированный Иваном Грозным, изрезал картину ножом.</p><p>Удивительно лирически-притягательны портреты Репина. Художник создает острохарактерные народные типажи ('Мужик с дурным глазом', 'Протодиакон'; обе картины – 1877, Третьяковская галерея, Москва), многочисленные антологически-совершенные образы деятелей науки и культуры (Николай Иванович Пирогов, 1880; Модест Петрович Мусоргский, 1881; Полина Антипьевна Стрепетова, 1882; Павел Михайлович Третьяков, 1883; все – там же; и многие другие портретные картины, в том числе портреты Льва Николаевича Толстого, написанные во время пребывания художника в Ясной Поляне – в 1891 и позже), грациозные светские портреты ('Баронесса Варвара Ивановна Икскуль фон Гильдебрандт', 1889, там же).</p><p>Особенно красочно-задушевны образы родных художника: 'Осенний букет' (дочь Вера), 1892, там же; целый ряд картин с женой Репина Надеждой Ильиничной Нордман-Северовой. Репин проявил себя и как выдающийся педагог: был профессором-руководителем мастерской (1894–1907) и ректором (1898–1899) Академии художеств, одновременно преподавал в школе-мастерской Тенишевой.</p><p>Старея, художник продолжает удивлять публику. Апогея импрессионистически-живописной свободы – и в то же время психологизма – достигает живопись Репина в портретных этюдах для Государственного Совета. В загадочной картине 'Какой простор!' (1903, Русский музей) – с молодой парой, ликующей на обледеневшем берегу Невского залива, – Репин выражает свое отношение к новому поколению в характерной для него манере «любви-вражды».</p><p>После октябрьского переворота 1917 года художник оказывается отъединенным от России в своих «Пенатах», когда Финляндия обретает независимость. В 1922–1925 годах Репин пишет едва ли не лучшую из своих религиозных картин – проникнутую беспросветным трагизмом Голгофу (Художественный музей, Принстон, США). Несмотря на приглашения на самом высоком уровне, он так и не переехал на родину, хотя и поддерживал связи с живущими там друзьями (в частности, с Корнеем Ивановичем Чуковским). Илья Ефимович Репин умер в своих «Пенатах» 29 сентября 1930 года.</p>",
			"en": "<p>Ilya Yefimovich Repin  was a Russian realist painter.  He was the most renowned Russian artist of the 19th century, when his position in the world of art was comparable to that of Leo Tolstoy in literature. He played a major role in bringing Russian art into the mainstream of European culture. His major works include Barge Haulers on the Volga (1873), Religious Procession in Kursk Province (1883) and Reply of the Zaporozhian Cossacks (1880–91).</p><p>Repin was born in Chuguyev, in the Kharkov Governorate (now Ukraine) of the Russian Empire into a military family. He entered military school in 1854 and in 1856 studied under Ivan Bunakov, a local icon painter. He began to paint around 1860. He met fellow artist Ivan Kramskoi and the critic Vladimir Stasov during the 1860s, and his wife, Vera Shevtsova in 1872 (they remained married for ten years). In 1874–1876 he showed at the Salon in Paris and at the exhibitions of the Itinerants' Society in Saint Petersburg. He was awarded the title of academician in 1876.</p><p>In 1880 Repin traveled to Zaporozhye in Ukraine to gather material for the 1891 Reply of the Zaporozhian Cossacks. His Religious Procession in Kursk Province was exhibited in 1883, and Ivan the Terrible and His Son Ivan in 1885. In 1892 he published the Letters on Art collection of essays. He taught at the Higher Art School attached to the Academy of Arts from 1894. In 1898 he purchased an estate, the Penates, in Kuokkala, Finland (now Repino).</p><p>In 1901 he was awarded the Legion of Honour. In 1911 he traveled with his common-law wife Natalia Nordman to the World Exhibition in Italy, where his painting 17 October 1905 and his portraits were displayed in their own separate room. In 1916 Repin worked on his book of reminiscences, Far and Near, with the assistance of Korney Chukovsky. He welcomed the Russian Revolution of 1917. Celebrations were held in 1924 in Kuokkala to mark Repin's 80th birthday, followed by an exhibition of his works in Moscow. In 1925 a jubilee exhibition of his works was held in the Russian Museum in Leningrad. Repin died in 1930 and was buried at the Penates.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Ilya_Repin.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Репин,_Илья_Ефимович",
				"en": "http://en.wikipedia.org/wiki/Ilya_Repin",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 91
	},
	{
		"id": 26,
		"name": "Kazimir Malevich",
		"years": "1879 - 1935",
		"genre": ["Suprematism"],
		"nationality": ["Russian"],
		"bio": {
			"ru": "<p>Родился в Киеве 11 (23) февраля 1878 в семье выходцев из Польши (отец его работал управляющим на сахарных заводах). В 1895–1896 учился в Киевской рисовальной школе Н.И.Мурашко; приехав в 1905 в Москву, занимался в студии Ф.И.Рерберга. Прошел путь практически через все стили того времени – от живописи в духе передвижников к импрессионизму и мистическому символизму, а затем к постимпрессионистическому «примитиву» (Мозольный оператор в бане, 1911–1912, Городской музей, Амстердам). Был участником выставок «Бубновый валет» и «Ослиный хвост», членом «Союза молодежи». Жил в Москве (до 1918) и Ленинграде.</p><p>Разоблачая академические художественные стереотипы, проявил яркий темперамент критика-полемиста. В его работах первой половины 1910-х годов, все более задорно-новаторских, полуабстрактных, определился стиль кубофутуризма, соединивший кубистическую пластику форм с футуристической динамикой (Точильщик (Принцип мелькания), 1912, галерея Йельского университета, Нью-Хейвен, США; Лесоруб, 1912–1913, Городской музей, Амстердам).</p><p>Важное значение в эти годы получил у Малевича и метод «заумного реализма», поэтика абсурда, алогичного гротеска (Англичанин в Москве, там же; Авиатор, Русский музей, Петербург; обе работы – 1914). После начала войны исполнил цикл патриотических агитлистков (с текстами В.В.Маяковского) для издательства «Современный лубок».</p><p>Ключевой смысл для мастера имела работа над оформлением оперы Победа над Солнцем (музыка М.В.Матюшина, текст А.Е.Крученых и В.В.Хлебникова; премьера состоялась в петербургском Луна-парке в 1913); из трагикомического бурлеска о крушении старого и рождении нового миров возник замысел знаменитого Черного квадрата, впервые показанного на выставке «0, 10» в 1915 (хранится в Третьяковской галерее).</p><p>Эта простая геометрическая фигура на белом фоне – и своего рода апокалиптический занавес над прежней историей человечества, и призыв к строительству будущего. Мотив всесильного художника-строителя, начинающего с нуля, доминирует и в «супрематизме» – новом методе, призванном, по замыслу Малевича, увенчать собою все предыдущие течения авангарда (отсюда само название – от лат. supremus, «высший»). Теорию иллюстрирует большой цикл беспредметно-геометрических композиций, который завершается в 1918 «белым супрематизмом», где краски и формы, парящие в космической пустоте, сведены к минимуму, почти к абсолютной белизне.</p><p>После Октябрьской революции Малевич сперва выступает как «художник-комиссар», активно участвуя в революционных преобразованиях, в том числе в монументальной агитации. Славит «новую планету» искусства авангарда в статьях в газете «Анархия» (1918). Итоги своих поисков подводит в годы пребывания в Витебске (1919–1922), где создает «Объединение утвердителей нового искусства» (Уновис), стремясь (в том числе и в главном своем философском труде Мир как беспредметность) наметить универсальную художественно-педагогическую систему, решительно переоформляющую взаимоотношения человека и природы.</p><p>По возвращении из Витебска Малевич возглавил (с 1923) Государственный институт художественной культуры (Гинхук), выдвинув идеи, радикально обновившие современный дизайн и архитектуру (объемный, трехмерный супрематизм, воплощенный в бытовых вещах (изделия из фарфора) и строительных моделях, так называемых «архитектонах»). Малевич мечтает об уходе в «чистый дизайн», все более отчуждаясь от революционной утопии.</p><p>Ноты тревожного отчуждения характерны для многих его станковых вещей конца 1910–1930-х годов, где доминируют мотивы безликости, одиночества, пустоты – уже не космически-первозданной, а вполне земной (цикл картин с фигурами крестьян на фоне пустых полей, а также полотно Красный дом, 1932, Русский музей). В поздних полотнах мастер возвращается к классическим принципам построения картины (Автопортрет, 1933, там же).</p><p>Власти относятся к деятельности Малевича все с большим подозрением (его дважды, в 1927 и 1930, арестовывают). К концу жизни он попадает в обстановку социальной изоляции. Самобытная «школа Малевича», образовавшаяся из его витебских и ленинградских учеников (В.М.Ермолаева, А.А.Лепорская, Н.М.Суетин, Л.М.Хидекель, И.Г.Чашник и другие) уходит либо в прикладной дизайн, либо в подпольно-«неофициальное» искусство.</p><p>Опасаясь за судьбу своего наследия, в 1927, во время заграничной командировки, мастер оставил значительную часть своих картин и архива в Берлине (позднее они легли в основу фонда Малевича в амстердамском Городском музее).</p><p>Умер Малевич в Ленинграде 15 мая 1935.</p>",
			"en": "<p>Kazimir Severinovich Malevich was a Russian painter and art theoretician. He was a pioneer of geometric abstract art and the originator of the avant-garde, Suprematist movement.</p><p>Kazimir Malevich was born Kazimierz Malewicz to a Polish family. In 1904 he moved to Moscow. He studied at the Moscow School of Painting, Sculpture, and Architecture from 1904 to 1910 and in the studio of Fedor Rerberg in Moscow (1904 to 1910). In 1914 Malevich exhibited his works in the Salon des Indépendants in Paris together with Alexander Archipenko, Sonia Delaunay, Aleksandra Ekster, and Vadim Meller, among others. Malevich also co-illustrated, with Pavel Filonov, Selected Poems with Postscript, 1907–1914 by Velimir Khlebnikov and another work by Khlebnikov in 1914 titled Roar! Gauntlets, 1908–1914, with Vladimir Burliuk.</p><p>In 1915, Malevich laid down the foundations of Suprematism when he published his manifesto, From Cubism to Suprematism. In 1915–1916 he worked with other Suprematist artists in a peasant/artisan co-operative in Skoptsi and Verbovka village. In 1916–1917 he participated in exhibitions of the Jack of Diamonds group in Moscow together with Nathan Altman, David Burliuk, Aleksandra Ekster and others. Famous examples of his Suprematist works include Black Square (1915) and White On White (1918).</p> <p>In 1918, Malevich decorated a play, Mystery Bouffe, by Vladimir Mayakovskiy produced by Vsevolod Meyerhold. He also was interested in aerial photography and aviation, which led him to abstractions inspired by or derived from aerial landscapes. </p> <p> Critics derided Malevich's art as a negation of everything good and pure: love of life and love of nature. The Westernizer artist and art historian Alexandre Benois was one such critic. Malevich responded that art can advance and develop for art's sake alone, saying that <i>art does not need us, and it never did</i>.</p> <p>Malevich died of cancer in Leningrad on 15 May 1935. On his deathbed he was exhibited with the black square above him, and mourners at his funeral rally were permitted to wave a banner bearing a black square.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Kazimir_Malevich.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Малевич,_Казимир_Северинович",
				"en": "http://en.wikipedia.org/wiki/Kazimir_Malevich",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 126
	},
	{
		"id": 27,
		"name": "Mikhail Vrubel",
		"years": "1856 - 1910",
		"genre": ["Symbolism"],
		"nationality": ["Russian"],
		"bio": {
			"ru": "<p>Врубель Михаил Александрович (Mikhail Vrubel), русский художник, крупнейший представитель символизма и модерна в русском изобразительном искусстве. Родился в Омске 5 (17) марта 1856 года. Учился Врубель в Петербургской Академии художеств (1880–1884) у Павла Петровича Чистякова; уроки акварели брал у Ильи Ефимовича Репина. Особое влияние на Врубеля оказали живопись венецианского Возрождения (из современников – испанец М.Фортуни и английские прерафаэлиты). Самобытная манера Врубеля – особого рода кристаллический рисунок, мерцающий тонами «сине-лилового мирового сумрака» – окончательно сформировалась в его киевские годы (1884–1889), причем в русле церковного искусства. Приглашенный для реставрации Кирилловской церкви (12 век), Врубель в ряде случаев должен был исполнить новые композиции (в частности, 'Сошествие Святого Духа', 1884); тогда же художник написал и икону 'Богоматерь с младенцем' (Киевский музей русского искусства). Византийская традиция насыщается здесь острым, трагически-напряженным психологизмом нового времени.</p><p>Феерическое великолепие врубелевского колорита в полной мере проявилось в картине 'Девочка на фоне персидского ковра' (1886, там же). После переезда в Москву Врубель становится одним из самых активных членов художественной группы Саввы Мамонтова. Здесь живописец пишет ряд лучших своих картин, работает в майолике – скульптуры Царь Берендей, Лель, Волхова, – все в Третьяковской галерее, Москва, обращаясь к дизайну, исполняет эскизы керамической печи, вазы, скамьи (Музей в Абрамцеве). «Русский стиль» этих вещей находит выражение и в его сценографии, связанной с Московской частной русской оперой Саввы Ивановича Мамонтова, в том числе в оформлении 'Садко' (1897) и 'Сказки о царе Салтане' (1900) Николая Андреевича Римского-Корсакова. Талант Врубеля-декоратора проявляется и в его огромном панно ' Принцесса Грёза', заказанном для Нижегородской ярмарки (1896, Третьяковская галерея).</p><p>Атмосфера волшебной сказки, характерная для картин 'Пан' (1899), 'Царевна-Лебедь', 'К ночи', 'Сирень' (все 1900), пронизана характерным для символизма чувством темного хаоса, таящегося за внешними покровами мироздания. Экспрессивно-драматичны и портреты (К. Д. и М. И. Арцыбушевых, а также Саввы Мамонтова, все три 1897; все работы – в Третьяковской галерее). Подспудный трагизм достигает кульминации в тех врубелевских образах, которые восходят к его иллюстрациям к поэме Лермонтова 'Демон' (акварель, белила, 1890–1891, Третьяковская галерея и Русский музей, Санкт-Петербург), – в картинах 'Демон' (1890) и 'Демон поверженный' (1902; обе работы – Третьяковская галерея).</p><p>Конгломерат искрящихся форм в последней картине близок уже к беспредметному искусству. В 1902 году Врубеля поражает тяжелый душевный недуг, но и в поздний свой период (проведенный в основном в частных клиниках Москвы и Петербурга) он создает немало работ, отмеченных изысканным мастерством ('Жемчужина', 1904; Портрет Валерия Яковлевича Брюсова, 1906), – работ, переходных от модерна к авангарду. В 1906 художник ослеп. Умер Врубель в Петербурге 1 (14) апреля 1910. Влияние его искусства было универсальным: в той или иной мере его испытали практически все крупные мастера русского искусства 20 века.</p>",
			"en": "<p>Mikhail Aleksandrovich Vrubel is usually regarded amongst the Russian painters of the Symbolist movement. In reality, he deliberately stood aloof from contemporary art trends, so that the origin of his unusual manner should be sought in Late Byzantine and Early Renaissance painting.</p><p>Vrubel was born in Omsk, Russia, into a military lawyer's family. And though he graduated from the Faculty of Law at St Petersburg University in 1880, his father had recognized his talent for art and had made sure to provide, through numerous tutors, what proved to be a sporadic education in the subject. The next year he entered the Imperial Academy of Arts, where he studied by direction of Pavel Chistyakov. Even in his earliest works, he exhibited great talent for drawing and an idiosyncratic style.</p><p>In 1884, he was summoned to replace the lost 12th-century murals and mosaics in the St. Cyril's Church of Kiev with new ones. In order to execute this commission, he went to Venice to study medieval Christian art. Most of his works painted in Venice have been lost, because the artist was more interested in creative process than in promoting his artwork.</p><p>In 1886, he returned to Kiev, where he submitted some designs to the newly built St Volodymir Cathedral. The jury, however, failed to appreciate the novelty of his works, and they were rejected. At that period, he executed some illustrations for Hamlet and Anna Karenina which had little in common with his later Demon and Prophet themes. In 1905 he created the mosaics of the hotel <i>Metropol</i> in Moscow, of which the centre piece of the facade overlooking Teatralnaya square is occupied by the mosaic panel, <i>Princess Gryoza</i> (Princess of Dream).</p><p>In 1890, Vrubel relocated to Moscow where he could best follow the burgeoning innovations and trends in art. Like other artists associated with the Art Nouveau style, he excelled not only in painting but also in applied arts, such as ceramics, majolics, and stained glass. He also produced architectural masks, stage sets, and costumes. It is the large painting of Seated Demon (1890) that brought notoriety to Vrubel. Most conservative critics accused him of <i>wild ugliness</i>, whereas the art patron Savva Mamontov praised the Demon series as <i>fascinating symphonies of a genius</i> and commissioned Vrubel to paint decorations for his private opera and mansions of his friends. Unfortunately the Demon, like other Vrubel's works, doesn't look as it did when it was painted, as the artist added bronze powder to his oils in order to achieve particularly luminous, glistening effects.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Mikhail_Vrubel.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Врубель,_Михаил_Александрович",
				"en": "http://en.wikipedia.org/wiki/Mikhail_Vrubel",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 171
	},
	{
		"id": 28,
		"name": "Pablo Picasso",
		"years": "1881 - 1973",
		"genre": ["Cubism"],
		"nationality": ["Spanish"],
		"bio": {
			"ru": "<p>Пабло Руис Пикассо (Picasso Pablo), испанский художник и скульптор, с 1904 года проживавший во Франции. Пикассо - изобретатель новых форм живописи, новатор стилей и методов, и один из наиболее плодовитых художников в истории. Пикассо создал более чем 20 тысяч работ. Родился в Малаге 25 октября 1881 года. Гений Пикассо обнаружил себя рано: в возрасте 10 он написал свои первые картины, а в 15 он блестяще сдал приемный экзамен в Школу изящных искусств в Барселоне. Между 1900 и 1902, Пикассо совершил три поездки в Париж и окончательно обосновался там в 1904. Стили французских художников-импрессионистов, особенно Дега и Тулуз-Лотрека оказали сильное влияние на формирование творческой манеры Пикассо в этот период.</p><p>'Синяя Комната' Пикассо (1901, Собрание Филипса, Вашингтон) отражает влияние этих художников и одновременно показывает эволюцию творчества Пикассо в 'голубой период', который назван так, поскольку различные оттенки голубого и синего доминировали в его работах в течение последующих нескольких лет. Отображая человеческие страдания, Пикассо в этот период рисовал слепых, нищих, алкоголиков и проституток. Их отчасти удлиненные тела на картинах напоминают работы испанского художника Эль Греко. Тот же круг образов, начиная с 1905 года, приобретает у него иную окраску. Как будто луч надежды проникает в души его героев вместе с появлением в красочной гамме его картин более светлых и прозрачных цветов: к осветленным оттенкам синего цвета присоединяются розовые, пепельно-розовые, золотисто-розовые тона. После произведений 'голубого' периода, картины 'розового' периода представляют мир циркачей и бродяг ('Семья акробатов с обезьяной', 1905, Гетеборг, Художественный музей; 'Девочка на шаре', Москва, ГМИИ им. А. С. Пушкина; 'Семейство комедиантов', Вашингтон, Национальная галерея).</p><p>Кубизм. В 1907-1914 Пикассо работает в таком тесном сотрудничестве с Браком, что не всегда возможно установить его вклад на разных этапах кубистической революции. После периода сезаннизма, завершившегося портретом Кловиса Саго (весна 1909, Гамбург, Кунстхалле), Пикассо уделяет особое внимание превращению форм в геометрические блоки, рассекает их на плоскости и грани, продолжающиеся в пространстве, которое сам художник считает твердым телом, неизбежно ограниченным плоскостью картины ('Портрет Канвейлера', 1910, Художественный институт). Перспектива исчезает, палитра тяготеет к монохромности, картины Пикассо зачастую сводятся к непонятным ребусам. Собственно кубистический период в творчестве Пикассо заканчивается вскоре после начала Первой мировой войны, разделившей его с Браком. Хотя в своих значительных произведениях художник использует некоторые кубистические приемы вплоть до 1923 года (Женщины, бегущие по берегу, 1922, Нью-Йорк, Музей современного искусства).</p><p>Портрет Амбруаза Воллара — владельца галереи, коллекционера, знатока искусства, друга художников — выполнен в формах аналитического кубизма.  Портрет был приобретен И. А. Морозовым 1913 у самого Воллара. Эйфорическая и консервативная атмосфера послевоенного Парижа, женитьба Пикассо на Ольге Хохловой, успех художника в обществе - все это отчасти объясняет этот возврат к фигуративности, относительный и временный, поскольку Пикассо продолжает писать в то время ярко выраженные кубистические натюрморты.</p><p>Наряду с циклом великанш и купальщиц, картины, вдохновленные 'помпейским' стилем ('Женщина в белом', 1923, Нью-Йорк, Музей современного искусства), многочисленные портреты жены ('Портрет Ольги', пастель, 1923, частное собрание) и сына ('Поль в костюме Арлекина', Париж, музей Пикассо) являют собой одни из самых пленительных произведений, когда-либо написанных художником, даже при том, что своей слегка классической направленностью и пародийностью они несколько озадачили авангард того времени.</p><p>В этих работах Пикассо впервые обнаруживается настроение, которое проявилось с особой силой уже позже и которое было присуще многим художникам в период между двумя войнами: интерес к стилям прошлого, ставшим культурным 'архивом', и необыкновенная виртуозность в их переложении на современный язык. Контакты с сюрреализмом. В 1925 начинается один из самых сложных и неровных периодов в творчестве Пикассо. После эпикурейского изящества 1920-х годов ('Танец', Лондон, галерея Тейт) в творчестве Пикассо появляется атмосфера конвульсий и истерии, ирреальный мир галлюцинаций, что можно объяснить, отчасти, влиянием поэтов-сюрреалистов. На протяжении нескольких лет воображение Пикассо, казалось, могло создавать только монстров, неких разорванных на части существ ('Сидящая купальщица', 1929, Нью-Йорк, Музей современного искусства), орущих ('Женщина в кресле', 1929, Париж, музей Пикассо), раздутых до абсурда и бесформенных ('Купальщица', рисунок, 1927, частное собрание) или воплощающих метаморфические и агрессивно-эротические образы ('Фигуры на берегу моря', 1931, Париж, музей Пикассо).</p><p>В 1930-1934 годах именно в скульптуре выражается вся жизненная сила Пикассо: бюсты и женские ню, в которых иногда заметно влияние Матисса ('Лежащая женщина', 1932), животные, маленькие фигуры в духе сюрреализма ('Мужчина с букетом', 1934) и особенно металлические конструкции, имеющие полуабстрактные, полуреальные формы и исполненные порой из грубых материалов (Пикассо создает их с помощью своего друга, испанского скульптора Хулио Гонсалеса - 'Конструкция', 1931). Наряду с этими странными и острыми формами, гравюры Пикассо к 'Метаморфозам' Овидия (1930) и Аристофану (1934) свидетельствуют о постоянстве его классического вдохновения. Тема быков возникла в творчестве Пикассо, вероятно, во время его двух поездок в Испанию в 1933 и 1934, причем облекаются они в достаточно литературные формы: образ Минотавра, который то и дело возникает в красивой серии гравюр, исполненных в 1935 году ('Минотавромахия').</p><p>Этот образ смертоносного быка завершает сюрреалистический период в творчестве Пикассо, но в то же время определяет главную тему картины 'Герника', самого знаменитого его произведения, которое он пишет через несколько недель после разрушения немецкой авиацией маленького городка басков и которое знаменует начало его политической деятельности (Мадрид, Прадо; до 1981 картина находилась в Нью-Йорке, в Музее современного искусства). Ужас, охвативший Пикассо перед угрозой варварства, нависшего над Европой, его страх перед войной и фашизмом, художник не выражал  прямо, но придавал своим картинам тревожную тональность и мрачность. Пикассо  оставался в Париже в период немецкой оккупации с 1940 по 1944 год.</p><p>Оккупация не ослабила деятельности Пикассо: портреты, скульптуры ('Человек с агнцем'), скудные натюрморты, которые порой с глубоким трагизмом выражают всю безысходность эпохи ('Натюрморт с бычьим черепом', 1942, Дюссельдорф, Художественное собрание земли Северный Рейн-Вестфалия). После освобождения. Картина 'Бойня' (1944-1945, Нью-Йорк, Музей современного искусства) - последнее трагическое произведение Пикассо. Осенью 1944 он публично заявляет о своем вступлении в коммунистическую партию, но не проникается ее идеями настолько, чтобы выражать их в своих крупных исторических произведениях. Голубь, изображенный на плакате Всемирного конгресса сторонников мира в Париже (1949), - наиболее действенное проявление политических убеждений художника. Кроме того, эта работа способствовала тому, что Пикассо стал легендарной, всемирно известной личностью.</p><p>Послевоенное творчество Пикассо можно назвать счастливым; он сближается с молодой Франсуазой Жило, с которой познакомился в 1945 и которая подарит ему еще двоих детей, дав таким образом темы для его многочисленных семейных картин, мощных и очаровательных. Пикассо уезжает из Парижа на юг Франции, открывает для себя радость солнца, пляжа, моря. Он живет в Валлорисе (1948), затем в Каннах (1955), покупает в 1958 замок Вовенарг и в 1961 уединяется в сельском доме Нотр-Дам-де-Ви в Мужене.</p><p>Произведения, созданные в 1945-1955, очень среднеземноморские по духу, характерны своей атмосферой языческой идиллии и возвращением античных настроений, которые находят свое выражение в картинах и рисунках, созданных в конце 1946 в залах музея Антиб, ставшего впоследствии музеем Пикассо ('Радость жизни'). Но особенно сильны в этот период отказ от декоративного пыла и поиски новых выразительных средств. Все это проявилось в многочисленных литографиях, плакатах, ксилографиях и линогравюрах, керамике и скульптуре. Осенью 1947 Пикассо начинает работать на фабрике 'Мадура' в Валлорисе; увлеченный проблемами ремесла и ручного труда, он сам выполняет множество блюд, декоративных тарелок, антропоморфных кувшинов и статуэток в виде животных ('Кентавр', 1958), иногда несколько архаичных по манере, но всегда полных очарования и остроумия. Особенно важны в тот период скульптуры ('Беременная женщина', 1950). Некоторые из них ('Коза', 1950; 'Обезьяна с малышом', 1952) сделаны из случайных материалов (брюхо козы выполнено из старой корзины) и относятся к шедеврам техники ассамбляжа.</p><p>В 1953 Франсуаза Жило и Пикассо расходятся. Это было для художника началом тяжелого морального кризиса, который эхом отдается в замечательной серии рисунков, исполненных между концом 1953 и концом зимы 1954; в них Пикассо, по-своему, в озадачивающей и ироничной манере, выразил горечь старости и свой скептицизм по отношению к самой живописи. В 1954 Пикассо встречается с Жаклин Рок, которая в 1958 станет его женой и вдохновит его на серию очень красивых портретов. Произведения последних пятнадцати лет творчества художника очень разнообразны и неровны по качеству ('Мастерская в Каннах', 1956, Париж, музей Пикассо).</p><p>Можно, однако, выделить испанский источник вдохновения ('Портрет художника, в подражание Эль Греко', 1950, частное собрание) и элементы тавромахии (возможно, потому, что Пикассо был страстным поклонником популярного на юге Франции боя быков), выраженные в рисунках и акварелях в духе Гойи (1959-1968). Чувством неудовлетворения собственным творчеством отмечена серия интерпретаций и вариаций на темы знаменитых картин 'Девушки на берегу Сены. По Курбе' (1950, Базель, Художественный музей); 'Алжирские женщины. По Делакруа' (1955); 'Менины. По Веласкесу' (1957); 'Завтрак на траве. По Мане' (1960). Никто из критиков не смог дать удовлетворительного объяснения этим странным, дерзким композициям, даже если это были действительно превосходные картины ('Менины', 17 августа 1957, Барселона, музей Пикассо).</p><p>Пикассо умер на своей вилле Notre-Dame-de-Vie восьмого апреля 1973 года.</p>",
			"en": "<p>Pablo Ruiz y Picasso, also known as Pablo Picasso was a Spanish painter, sculptor, printmaker, ceramicist, stage designer, poet and playwright who spent most of his adult life in France. As one of the greatest and most influential artists of the 20th century, he is known for co-founding the Cubist movement, the invention of constructed sculpture, he co-invention of collage, and for the wide variety of styles that he helped develop and explore. Among his most famous works are the proto-Cubist Les Demoiselles d'Avignon (1907), and Guernica (1937), a portrayal of the Bombing of Guernica by the German and Italian airforces at the behest of the Spanish nationalist government during the Spanish Civil War.</p><p>Picasso, Henri Matisse and Marcel Duchamp are regarded as the three artists who most defined the revolutionary developments in the plastic arts in the opening decades of the 20th century, responsible for significant developments in painting, sculpture, printmaking and ceramics.</p><p>Picasso demonstrated extraordinary artistic talent in his early years, painting in a realistic manner through his childhood and adolescence. During the first decade of the 20th century, his style changed as he experimented with different theories, techniques, and ideas. His work is often categorised into periods. While the names of many of his later periods are debated, the most commonly accepted periods in his work are the Blue Period (1901–1904), the Rose Period (1904–1906), the African-influenced Period (1907–1909), Analytic Cubism (1909–1912), and Synthetic Cubism (1912–1919).</p><p>Exceptionally prolific throughout the course of his long life, Picasso achieved universal renown and immense fortune for his revolutionary artistic accomplishments, and became one of the best-known figures in 20th-century art.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Pablo_Picasso.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Пикассо,_Пабло",
				"en": "http://en.wikipedia.org/wiki/Pablo_Picasso",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 439
	},
	{
		"id": 29,
		"name": "Peter Paul Rubens",
		"years": "1577 - 1640",
		"genre": ["Baroque"],
		"nationality": ["Flemish"],
		"bio": {
			"ru": "<p>Рубенс, точнее Рюбенс (Rubens) Питер Пауль, великий фламандский живописец. С 1589 жил в Антверпене, где получил всестороннее гуманитарное образование. Рано посвятив себя живописи, учился (с 1591) у Тобиаса Верхахта, Адама ван Ноорта, Отто ван Веениуса. В 1600-1608 Рубенс побывал в Италии, где изучал произведения Микеланджело, живописцев венецианской школы, Караваджо. Вернувшись в Антверпен, Рубенс занял место главного придворного живописца правительницы Фландрии инфанты Изабеллы Австрийской. Уже в его первых после возвращения картинах проявилось стремление к переработке итальянских впечатлений в духе национальных художественных традиций. Созданные им в начале 1610-х годов монументальные религиозные композиции “Воздвижение Креста”, около 1610-1611, “Снятие со Креста”, около 1611-1614, - обе в соборе Онзе-ливе-Враукерк в Антверпене) отмечены характерными для живописи барокко театральностью композиции, драматизмом, бурным движением, яркими цветовыми контрастами.</p><p>Вместе с тем в них уже угадываются черты полнокровного, жизнеутверждающего реализма, полностью раскрывшегося в последующем творчестве художника. Тогда же Рубенс выполнил несколько парадных портретов в духе нидерландских традиций 16 века (“Автопортрет с женой Изабеллой Брант”, 1609, Старая пинакотека, Мюнхен), отличающихся интимной простотой композиции, любовной тщательностью воссоздания облика модели и нарядных одеяний, сдержанным изысканным колоритом. В 1612-1620 складывается зрелый стиль Рубенса. Обращаясь к темам, почерпнутым из Библии и античной мифологии, художник трактовал их с исключительной смелостью и свободой. Фигуры людей, античных божеств, животных, изображенные на фоне цветущей и плодоносящей природы или величественной фантастической архитектуры сплетаются в картинах Рубенса в сложные композиции, то гармонически уравновешенные, то пронизанные буйной динамикой. Со страстным “языческим” жизнелюбием Питер Пауль Рубенс воссоздает полнокровную красоту обнаженного человеческого тела, воспевает чувственную радость земного бытия (“Союз Земли и Воды”, около 1618, Государственный Эрмитаж, Санкт-Петербург; “Похищение дочерей Левкиппа”, около 1619-1620, Старая пинакотека, Мюнхен). Постепенно отказываясь от характерного для его ранних работ локального цвета, художник достиг исключительного мастерства в передаче тончайших градаций света и цвета, воздушных рефлексов; теплые и свежие тона его картин мягко перетекают один в другой, телесно-розовые, жемчужно-серые, красно-коричневые и мягкие зеленые оттенки сливаются в ликующую праздничную гамму. К концу 1610-х годов Питер Пауль Рубенс получил широкое признание и известность.</p><p>Обширная мастерская художника, в которой работали такие крупные живописцы, как Антонис ван Дейк, Якоб Йорданс, Франс Снейдерс, выполняла по заказам европейской аристократии многочисленные монументально-декоративные композиции, в том числе цикл картин “История Марии Медичи” (около 1622-1625, Лувр, Париж) для французского королевского двора, в котором Рубенс мифологические и аллегорические фигуры совместил с реальными историческими персонажами. С исключительным мастерством и чувственной убедительностью воссоздавал Рубенс физический облик и особенности характера модели в парадных портретах этого периода (Марии Медичи, около 1625, Прадо, графа Т. Эренделя, 1620, Старая пинакотека, Мюнхен).</p><p>Существенное место в творчестве Рубенс занял пейзаж: ландшафты с гнущимися по ветру могучими деревьями, вздымающимися холмами, зелеными рощами и долинами, стремительно несущимися облаками он населял мирно пасущимися стадами, идущими, едущими на повозках или беседующими крестьянами. Пронизанные ощущением могущества стихийных сил природы или, напротив, поэзии мирного бытия, отличающиеся смелой динамичной игрой светотени, свежестью и сочностью приглушенных красок,они воспринимаются как обобщенный поэтический образ фламандской природы (“Возчики камней”, около 1620, “Пейзаж с радугой”, около 1632-1635, - оба в Государственном Эрмитаже, Санкт-Петербург).</p><p>Особой виртуозностью и лиричностью отличаются интимные портреты Рубенса, в том числе “Портрет камеристки инфанты Изабеллы” (около 1625, Государственный Эрмитаж, Санкт-Петербург), в котором он с помощью прозрачных цветовых переходов и мягких рефлексов передает поэтическое обаяние и трепетную жизненность модели. Около 1611-1618 Рубенс выступил и в качестве архитектора, построив отмеченный барочной пышностью собственный дом в Антверпене. В 1626 году, потеряв свою первую жену Изабеллу Брант, Рубенс на время оставил живопись и занялся дипломатической деятельностью, посетил Англию и Испанию, где познакомился с живописью Тициана, работами испанских мастеров.</p><p>В 1630-е годы начался новый период творчества художника. Он подолгу работал в приобретенном им замке Стен в Элевейте, где писал поэтически одухотворенные портреты своей второй жены, Елены Фаурмент (“Шубка”, около 1638-1640, Музей истории искусства, Вена), иногда в образе мифологических и библейских персонажей (“Вирсавия”, около 1635, Картинная галерея, Дрезден), сцены деревенских празднеств (“Кермесса”, около 1635-1636, Лувр, Париж), исполненные грубоватого реализма и бурной захватывающей жизнерадостности, вызывающие в памяти аналогичные композиции Питера Брейгеля Старшего. Богатство декоративной фантазии, исключительная свобода и тонкость живописи присущи циклу проектов триумфальных арок , выполненному Рубенсом по случаю въезда в Антверпен нового правителя Фландрии инфанта Фердинанда (1634-1635, Государственный Эрмитаж, Санкт-Петербург).</p><p>В “стеновский” период живопись Рубенса становится более интимной и задушевной, колорит его картин утрачивает многоцветность и строится на богатстве красочных оттенков, выдержанных в горячей, эмоционально насыщенной красно-коричневой гамме. Виртуозностью живописи, строгостью и лаконизмом художественных средств отмечены поздние работы художника - “Елена Фаурмент с детьми” (около 1636, Лувр, Париж, работа не завершена), “Три грации” (1638-1640, Прадо, Мадрид), “Вакх” (около 1638-1640, Государственный Эрмитаж, Санкт-Петербург), автопортрет (около 1637-1640, Музей истории искусств, Вена). Тонкой наблюдательностью, лаконизмом, мягкостью и легкостью штриха отличаются многочисленные рисунки Рубенса: зарисовки голов и фигур, изображения животных, эскизы композиций и другие.</p><p>В творчестве Рубенса ярко выражены мощный реализм и своеобразный фламандский вариант стиля барокко. Всесторонне одаренный, блестяще образованный, Рубенс рано созрел и выдвинулся как художник огромного творческого размаха, искренних порывов, смелых дерзаний, бурного темперамента. Прирожденный живописец-монументалист, график, архитектор-декоратор, оформитель театральных зрелищ, талантливый дипломат, владевший несколькими языками, ученый-гуманист, он пользовался почетом при княжеских и королевских дворах Мантуи, Мадрида, Парижа, Лондона. Рубенс — создатель огромных барочных патетических композиций, то запечатлевающих апофеоз героя, то исполненных трагизма. Сила пластического воображения, динамичность форм и ритмов, торжество декоративного начала составляют основу творчества Рубенса. Исполненное страстного жизнелюбия, многогранное и виртуозное по мастерству творчество Рубенса оказало огромное воздействие на фламандских живописцев, на множество художников XVIII-XIX веков (Антуан Ватто, Жан Оноре Фрагонар, Эжен Делакруа, Огюст Ренуар и другие живописцы).</p>",
			"en": "<p>Sir Peter Paul Rubens (28 June 1577 – 30 May 1640) was a Flemish Baroque painter, and a proponent of an extravagant Baroque style that emphasized movement, colour, and sensuality. He is well known for his Counter-Reformation altarpieces, portraits, landscapes, and history paintings of mythological and allegorical subjects.</p><p>In addition to running a large studio in Antwerp that produced paintings popular with nobility and art collectors throughout Europe, Rubens was a classically educated humanist scholar and diplomat who was knighted by both Philip IV, King of Spain, and Charles I, King of England.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Peter_Paul_Rubens.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Рубенс,_Питер_Пауль",
				"en": "http://en.wikipedia.org/wiki/Peter_Paul_Rubens",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 141
	},
	{
		"id": 30,
		"name": "Pierre-Auguste Renoir",
		"years": "1841 - 1919",
		"genre": ["Impressionism"],
		"nationality": ["French"],
		"bio": {
			"ru": "<p>Ренуар (Renoir) Пьер Oгюст, французский живописец, график и скульптор. В юности работал живописцем по фарфору, расписывал шторы и веера. В 1862-1864 Ренуар учился в Париже в Школе изящных искусств, где сблизился с будущими соратниками по импрессионизму Клодом Моне и Альфредом Сислеем. Ренуар работал в Париже, посетил Алжир, Италию, Испанию, Голландию, Великобританию, Германию. В ранних работах Ренуара сказывается влияние Гюстава Курбе и произведений молодого Эдуара Мане (“Харчевня матушки Антони”, 1866, Национальный музей, Стокгольм).</p><p>На рубеже 1860-1870-х годов Ренуар переходит к живописи на пленэре, органически включая человеческие фигуры в изменчивую световоздушную среду (“Купание на Сене”, 1869, ГМИИ, Москва). Палитра Ренуара светлеет, легкий динамичный мазок становится прозрачным и вибрирующим, колорит насыщается серебристо-жемчужными рефлексами (“Ложа”, 1874, Институт Кортолда, Лондон). Изображая эпизоды, выхваченные из потока жизни, случайные жизненные ситуации, Ренуар отдавал предпочтение праздничным сценам городской жизни - балам, танцам, прогулкам, словно стремясь воплотить в них чувственную полноту и радость бытия (“Мулен де ла Галет”, 1876, Музей Орсе, Париж).</p><p>Особое место в творчестве Ренуара занимают поэтичные и обаятельные женские образы: внутренне различные, но внешне слегка схожие между собой, они как бы отмечены общей печатью эпохи (“После обеда”, 1879, Штеделевский институт искусства, “Зонтики”, 1876, Национальная галерея, Лондон; портрет актрисы Жанны Самари, 1878, Эрмитаж, Санкт-петербург). В изображении обнаженной натуры Ренуар достигает редкой изысканности карнаций, построенных на сочетании теплых телесных тонов со скользящими легкими зеленоватыми и серо-голубыми рефлексами, придающими гладкость и матовость поверхности полотна (“Нагая женщина, сидящая на кушетке”, 1876). Замечательный колорист, Ренуар часто добивается впечатления монохромности живописи с помощью тончайших сочетаний близких по цвету тонов (“Девушки в черном”, 1883, Музей изобразительного искусства, Москва).</p><p>С 1880-х годов Ренуар все более тяготел к классической ясности и обобщенности форм, в его живописи нарастают черты декоративности и безмятежного идиллизма (“Большие купальщицы”, 1884-1887, собрание Тайсон, Филадельфия). Лаконизмом, легкостью и воздушностью штриха отличаются многочисленные рисунки и офорты (“Купальщицы”, 1895) Ренуара.</p>",
			"en": "<p>Pierre-Auguste Renoir was a French artist who was a leading painter in the development of the Impressionist style. As a celebrator of beauty, and especially feminine sensuality, it has been said that <i>Renoir is the final representative of a tradition which runs directly from Rubens to Watteau</i>.</p><p>Pierre-Auguste was the father of actor Pierre Renoir (1885–1952), filmmaker Jean Renoir (1894–1979) and ceramic artist Claude Renoir (1901–69). He was the grandfather of the filmmaker Claude Renoir (1913–1993).</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Pierre-Auguste_Renoir.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Ренуар,_Пьер_Огюст",
				"en": "http://en.wikipedia.org/wiki/Pierre-Auguste_Renoir",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 336
	},
	{
		"id": 31,
		"name": "Theophanes the Greek",
		"years": "1340 - 1405",
		"genre": ["Iconography"],
		"nationality": ["Russian"],
		"bio": {
			"ru": "<p>Феофан Грек относится к крупнейшим мастерам средневековья. Его работы, исполненные в Византии, не сохранились. Все известные его произведения были созданы на Руси и для Руси, где он прожил более тридцати лет. Он познакомил русских с высочайшими достижениями византийской духовной культуры, переживавшей в его время один из последних взлетов.</p><p>Немногочисленные сведения о Феофане встречаются в московских и новгородских летописях, но особую ценность представляет письмо, написанное около 1415 г. московским духовным писателем и художником Епифанием Премудрым архимандриту тверского Спасо-Афанасиева монастыря Кириллу. Сообщение Епифания интересно тем, что дает уникальную возможность составить представление о принципах работы мастера. В своем послании он сообщает о хранившемся у него Четвероевангелии, иллюстрированном Феофаном и украшенном изображением храма Святой Софии в Константинополе. Описание рисунка приведено со многими подробностями. 'Когда он все это изображал или писал, никто не видел, чтобы он когда-либо взирал на образцы, как делают некоторые наши иконописцы, которые в недоумении постоянно всматриваются, глядя туда и сюда, и не столько пишут красками, сколько смотрят на образцы. Он же, казалось, руками пишет роспись, а сам беспрестанно ходит, беседует с приходящими и умом обдумывает высокое и мудрое, чувственными же очами разумными разумную видит доброту. Сколько бы с ним кто ни беседовал, не мог не подивиться его разуму, его иносказаниям 'притчам' и его хитростному строению'.</p><p>Из послания известно, что Феофан, 'родом грек, книги изограф нарочитый и среди иконописцев отменный живописец', расписал более 40 каменных церквей в Константинополе, Халкидоне, Галате, Кафе (Феодосии), а также на Русской земле. В Новгородской III летописи первая работа Феофана упоминается под 1378 г. Здесь говорится о росписи им новгородской церкви Спаса Преображения на Ильине-улице - единственной дошедшей до наших дней работе мастера, имеющей документальное подтверждение и доныне остающейся главным источником для суждения о его искусстве. Фрески церкви сохранились фрагментарно, поэтому восстановить систему ее росписи можно лишь частично.</p><p>В куполе храма изображена полуфигура Христа Пантократора, окруженная архангелами и серафимами. В барабане - изображения праотцев, среди которых Адам, Авель, Ной, Сиф, Мельхиседек, Енох, пророки Илия, Иоанн Предтеча. На хорах в северо-западной угловой камере (Троицкий придел) изображения сохранились лучше. Придел расписан изображениями святых, композициями 'Богоматерь Знамение с архангелом Гавриилом', 'Поклонение жертве', 'Троица'. Манера Феофана ярко индивидуальна, отличается экспрессивностью темпераментом, свободой и разнообразием в выборе приемов. Форма подчеркнуто живописна, лишена детализации, строится с помощью сочных и свободных мазков. Приглушенный общий тон росписи контрастирует с яркими белильными высветлениями, подобно вспышкам молний освещающими суровые, одухотворенные лики святых. Контуры очерчены мощными динамичными линиями. Складки одежд лишены детальной моделировки, ложась широко и жестко, под резкими углами. Палитра мастера скупа и сдержанна, в ней преобладают оранжево-коричневый, серебристо-голубой, соответствующие напряженному духовному состоянию образов. 'Живопись Феофана - это философская концепция в красках, притом концепция достаточно суровая, далекая от обыденного оптимизма. Суть ее составляет идея глобальной греховности человека перед Богом, в результате которой он оказался почти безнадежно удаленным от него и может только со страхом и ужасом ожидать прихода своего бескомпромиссного и безжалостного судьи, образ которого с крайней суровостью взирает на грешное человечество из-под купола новгородского храма',- пишет исследователь русского средневекового искусства В. В. Бычков. Феофан Грек создает мир, полный драматизма, напряжения духа. Его святые суровые, отстраненные от всего вокруг, углубившиеся в созерцание безмолвия - единственного пути к спасению.</p><p>Стилю Феофана пытались следовать в Новгороде художники, расписывавшие церковь Федора Стратилата на Ручью, однако в целом индивидуальность мастера оказалась исключительной для Руси - страны, далекой от духовного опыта Византии и искавшей свой путь.</p><p>После 1378 г. Феофан, по-видимому, работал в Нижнем Новгороде, но его росписи этого периода до нас не дошли. Приблизительно с 1390 г. он находился в Москве и недолго в Коломне, где мог расписывать Успенский собор, позже полностью перестроенный. Здесь же, в соборе, хранилась и знаменитая впоследствии святыня - икона 'Богоматерь Донская' (на ее обороте - 'Успение'), позже перенесенная в Благовещенский собор Московского Кремля (ныне в ГТГ). Ее исполнение некоторые исследователи связывают с творчеством Феофана Грека.</p><p>Мастер выполнил несколько росписей в Московском Кремле: в церкви Рождества Богородицы с приделом Святого Лазаря (1395), где Феофан работал вместе с Симеоном Черным, в Архангельском (1399) и Благовещенском (1405) соборах. Последний он расписывал вместе с Андреем Рублевым и Прохором с Городца. В Кремле Феофан принимал участие в росписях казнохранилища князя Владимира Андреевича и терема Василия I. Ни одна из этих работ не сохранилась. Не исключено, что Феофан Грек участвовал в создании икон деисусного чина, находящегося в настоящее время в Благовещенском соборе. Однако, как доказано последними исследованиями, этот иконостас не является первоначальным, относящимся к 1405 г., и деисусный чин мог быть перенесен сюда лишь после опустошительного пожара в Кремле, случившегося в 1547 г. В любом случае иконы 'Спас в силах', 'Богоматерь', 'Иоанн Предтеча', 'Апостол Петр', 'Апостол Павел', 'Василий Великий', 'Иоанн Златоуст' обнаруживают такие черты стиля и такое высокое техническое мастерство, которые позволяют предполагать здесь работу великого мастера.</p><p>Манера Феофана Грека в иконописи (если согласиться с тем, что иконы деисусного чина Благовещенского собора Московского Кремля написаны Феофаном) значительно отличается от фресковой. Это может быть объяснено спецификой иконописи. Образы деисусного чина внушительны и монументальны. Почти двухметровые фигуры, исполненные внутренней значительности и самоуглубленности, составляют единую композицию, подчиненную одному замыслу - воплотить благодарственную молитву святых Спасу, творцу и владыке небесных сил, и ходатайство их за род человеческий в день Страшного Суда. Эта идея определила иконографическое решение и всей группы в целом, и каждого образа в отдельности. Иконография чина имеет свои истоки в алтарных росписях византийских храмов и теснейшим образом связана с текстами главных молитв литургии. Подобная программа деисусного чина со 'Спасом в силах' впоследствии получила распространение в русских иконостасах, но здесь она появляется впервые.</p><p>В отличие от фресковой росписи образы икон не столь экспрессивны внешне. Их драматизм и скорбь словно ушли вглубь, выявляясь в мягком свечении ликов, в приглушенных цветах одежд. Каждый лик по типу и выражению эмоционального состояния ярко индивидуален, почти портретен. Контуры фигур более спокойны, в их рисунке яснее видна классическая традиция, уходящая истоками к античности. Иконы написаны виртуозно, с использованием сложных и разнообразных технических приемов, которые под силу лишь выдающемуся мастеру.</p>",
			"en": "<p>Theophanes the Greek  was a Byzantine Greek artist and one of the greatest icon painters of Muscovite Russia, and was noted as the teacher and mentor of the great Andrei Rublev.</p><p>Theophanes was born in the capital of the Byzantine Empire, Constantinople. After studying Art and philosophy at the University of Constantinople, he moved to Novgorod in 1370, and in 1395 to Moscow. His style is considered unsurpassed in expression achieved by almost mono-colored painting. Some of his contemporaries observed that he appeared to be <i>painting with a broom</i>  in reference to the bold, broad execution in some of his finest frescos (see St. Makarios of Egypt), which are unique in the larger Byzantine tradition. Theophanes was described by the Muscovites as <i>learned in philosophy</i>, a reflection on his broad education and erudition. A hint of this might be gathered from his panel icon of the Transfiguration of Jesus, where the arresting geometry and brilliance of the figure of Christ is balanced against the ordered disarray of the earthbound Apostles, strewn about doll-like in the uncreated Light of Mount Tabor. The balance of mathematical harmony in line and shape, wed to a master's use of an earthtone palette and precious gold leaf, evokes a spirituality that is immensely powerful, and speaks to the genius of this relatively unknown painter.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Theophanes_the_Greek.html",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Феофан_Грек",
				"en": "https://en.wikipedia.org/wiki/Theophanes_the_Greek",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 174
	},
	{
		"id": 32,
		"name": "Francisco Goya",
		"years": "1746 - 1828",
		"genre": ["Romanticism"],
		"nationality": ["Spanish"],
		"bio": {
			"ru": "<p>Гойя-и-Лусьентес (Fransisko Goya y Lucientes) Франсиско Хосе де, испанский живописец, гравер, рисовальщик. С 1760 учился в Сарагосе у Х.Лусана-и-Мартинеса. Около 1769 Гойя отправился в Италию, в 1771 вернулся в Сарагосу, где писал фрески в духе итальянского барокко (росписи бокового нефа церкви Нуэстра Сеньора дель Пилар, 1771–1772). С 1773 художник работал в Мадриде, в 1776–1791 выполнил для королевской мануфактуры свыше 60 гобеленов с насыщенными по цвету и простыми по композиции сценами повседневной жизни и народных развлечений (“Зонтик”, 1777, “Игра в пелоту”, 1779, “Игра в жмурки”, 1791, – все в Прадо, Мадрид).</p><p>С начала 1780-х годов Гойя получил известность и как автор выполненных в тонкой цветовой гамме портретов, фигуры и предметы в которых как бы растворяются в тонкой дымке (“Семья герцога Осуна”, 1787, Прадо, Мадрид; портрет маркизы А.Понтехос, около 1787, Национальная галерея искусства, Вашингтон). В 1780 Гойя был избран в мадридскую Академию художеств (с 1785 вице-директор, с 1795 - директор ее живописного отделения), в 1799 - “первый живописец короля”. Одновременно в творчестве Гойи нарастают черты трагизма, неприязнь к феодально-клерикальной Испании “старого порядка”. Уродство ее моральных, духовных и политических основ Гойя раскрывает в гротескно-трагической форме, питающейся фольклорными истоками, в большой серии офортов “Капричос” (80 листов с комментариями художника, 1797–1798); смелая новизна художественного языка, острая выразительность линий и штрихов, контрастов света и тени, соединение гротеска и реальности, аллегории и фантастики, социальной сатиры и трезвого анализа реальности открывали новые пути развития европейской гравюры. В 1790-х – начале 1800-х годов исключительного расцвета достигло портретное творчество Гойи, в котором звучат тревожное чувство одиночества (портрет сеньоры Бермудес, Музей изобразительных искусств, Будапешт), мужественное противостояние и вызов окружающему (портрет Ф.Гиймарде, 1798, Лувр, Париж), аромат тайны и скрытой чувственности (“Маха одетая” и “Маха обнаженная”, обе - Прадо, Мадрид).</p><p>С удивительной силой обличения запечатлел художник надменность, физическое и духовное убожество королевской семьи в групповом портрете “Семья Карла IV” (1800, Прадо, Мадрид). Глубоким историзмом, страстным протестом проникнуты большие картины Гойи, посвященные борьбе против французской интервенции (“Восстание 2 мая 1808 года в Мадриде”, “Расстрел повстанцев в ночь на 3 мая 1808 года”, обе –около 1814, Прадо, Мадрид), философски осмысляющая судьбы народа серия офортов “Бедствия войны” (82 листа, 1810–1820).</p><p>В начале 1790-х годов тяжелая болезнь привела художника к глухоте. Чрезвычайно трудные для него годы, совпавшие с периодом жестокой реакции, он провел в своем загородном доме “Кинто дель Сордо” (“Дом глухого”), стены которого расписал маслом. В созданных здесь сценах (ныне в Прадо, Мадрид), включающих невиданно смелые для своего времени, остродинамичные изображения многоликих масс и устрашающие символико-мифологические образы, он воплощал идеи противостояния прошлого и будущего, бесконечно-ненасытного дряхлого времени (“Сатурн”) и освободительной энергии юности (“Юдифь”). Еще сложнее система мрачных гротескных образов в серии офортов “Диспаратес” (22 листа, 1820–1823). Но и в самых мрачных видениях Гойи жестокая тьма не может подавить присущее художнику ощущение вечного движения, вечного обновления жизни, ставшее лейтмотивом в картине “Похороны сардинки” (около 1814, Прадо, Мадрид), в серии офортов “Тавромахия” (1815).</p><p>С 1824 Гойя жил во Франции, где писал портреты друзей, осваивал технику литографии. Искусство Гойи повлияло на формирование многих художественных явлений 19 века. Его воздействие ощущается в творчестве Жерико, Делакруа, Домье, Эдуард Мане. Влияние его творчества на живопись и графику имело общеевропейский характер и сказывается вплоть до современности.</p>",
			"en": "<p>Francisco José de Goya y Lucientes was a Spanish romantic painter and printmaker regarded both as the last of the Old Masters and the first of the moderns.</p><p>Goya was court painter to the Spanish Crown; throughout the Peninsular War he remained in Madrid, where he painted the portrait of Joseph Bonaparte, pretender to the Spanish throne, and documented the war in the masterpiece of studied ambiguity known as the Desastres de la Guerra.</p><p>Through his works he was both a commentator on and chronicler of his era. The subversive imaginative element in his art, as well as his bold handling of paint, provided a model for the work of artists of later generations, notably Édouard Manet, Pablo Picasso and Francis Bacon.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Francisco_Goya.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Гойя,_Франсиско",
				"en": "http://en.wikipedia.org/wiki/Francisco_Goya",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 291
	},
	{
		"id": 33,
		"name": "Frida Kahlo",
		"years": "1907 - 1954",
		"genre": ["Primitivism", "Surrealism"],
		"nationality": ["Mexican"],
		"bio": {
			"ru": "<p>Кало Фрида (Kahlo Frida), мексиканский художник и график, жена Диего Риверы, мастер сюрреализма. Фрида Кало родилась в Мехико в 1907 году, в семье еврейского фотографа, родом из Германии. Мать - испанка, рождённая в Америке. В шесть лет она перенесла полиомиелит, и с тех пор правая нога стала короче и тоньше левой. В возрасте восемнадцати лет 17 сентября 1925 года Кало попала в автокатастрофу: сломанный железный прут токосъемника трамвая воткнулся в живот и вышел в паху, раздробив тазобедренную кость. В трех местах был поврежден позвоночник, сломаны два бедра и нога в одиннадцати местах. Врачи не могли поручиться за ее жизнь. Начались мучительные месяцы неподвижного бездействия. Именно в это время Кало попросила у отца кисть и краски. Для Фриды Кало сделали специальный подрамник, позволявший писать лежа. Под балдахином кровати прикрепили большое зеркало, чтобы Фрида Кало могла видеть себя. Она начала с автопортретов. 'Я пишу себя, потому что много времени провожу в одиночестве и потому что являюсь той темой, которую знаю лучше всего'.</p><p>В 1929 году Фрида Кало поступает в Национальный институт Мексики. За год, проведенный почти в полной неподвижности, Кало всерьез увлеклась живописью. Снова начав ходить, посещала художественную школу и в 1928 году вступила в компартию. Ее работы высоко оценил уже знаменитый к тому времени художник-коммунист Диего Ривера.</p><p>В 22 года Фрида Кало вышла за него замуж. Их семейная жизнь бурлила страстями. Они не всегда могли быть вместе, но никогда — врозь. Их связывали отношения - страстные, одержимые и порой мучительные. Древний мудрец сказал о подобных отношениях: 'Ни с тобой, ни без тебя жить невозможно'. Романтическим ореолом овеяны отношения Фриды Кало с Троцким. Мексиканская художница восхищалась 'трибуном русской революции', тяжело переживала его высылку из СССР и была счастлива, что благодаря Диего Ривере он нашел в Мехико приют. Больше всего в жизни Фрида Кало любила саму жизнь — и это магнитом притягивало к ней мужчин и женщин. Несмотря на мучительные физические страдания, она могла развлекаться от души и широко кутить. Но поврежденный позвоночник постоянно напоминал о себе. Периодически Фриде Кало приходилось ложиться в госпиталь, чуть ли не постоянно носить специальные корсеты. В 1950 году ей сделали 7 операций на позвоночнике, 9 месяцев она провела на больничной койке, после чего могла передвигаться только в инвалидной коляске.</p><p>В 1952 году Фриде Кало ампутировали до колена правую ногу. В 1953 году в Мехико проходит первая персональная выставка Фриды Кало. Ни на одном автопортрете Фрида Кало не улыбается: серьезное, даже скорбное лицо, сросшиеся густые брови, чуть заметные усики над плотно сжатыми чувственными губами. Идеи её картин зашифрованы в деталях, фоне, фигурах, появляющихся рядом с Фридой. Символика Кало опирается на национальные традиции и тесно связана с индейской мифологией доиспанского периода. Фрида Кало блестяще знала историю своей родины. Множество подлинных памятников древней культуры, которые Диего Ривера и Фрида Кало собирали всю жизнь, находится в саду 'Голубого дома' (дома-музея). Фрида Кало умерла от воспаления легких, через неделю после того, как отметила свое 47-летие, 13 июля 1954 года. Прощание с Фридой Кало проходило в 'Бельяс Артес' — Дворце изящных искусств. В последний путь Фриду вместе с Диего Риверой провожали президент Мексики Ласаро Карденас, художники, писатели — Сикейрос, Эмма Уртадо, Виктор Мануэль Вильясеньор и другие известные деятели Мексики.</p>",
			"en": "<p>Frida Kahlo de Rivera was a Mexican painter who is best known for her self-portraits.</p><p>Kahlo's life began and ended in Mexico City, in her home known as the Blue House. Her work has been celebrated in Mexico as emblematic of national and indigenous tradition and by feminists for its uncompromising depiction of the female experience and form.</p><p>Mexican culture and Amerindian cultural tradition are important in her work, which has been sometimes characterized as naïve art or folk art.Her work has also been described as surrealist, and in 1938 André Breton, principal initiator of the surrealist movement, described Kahlo's art as a <i>ribbon around a bomb</i>. Frida rejected the <i>surrealist</i> label; she believed that her work reflected more of her reality than her dreams.</p><p>Kahlo had a volatile marriage with the famous Mexican artist Diego Rivera. She suffered lifelong health problems, many caused by a traffic accident she survived as a teenager. Recovering from her injuries isolated her from other people, and this isolation influenced her works, many of which are self-portraits of one sort or another. Kahlo suggested, <i>I paint myself because I am so often alone and because I am the subject I know best.</i> She also stated: <i>I was born a bitch. I was born a painter.</i></p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Frida_Kahlo.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Кало,_Фрида",
				"en": "http://en.wikipedia.org/wiki/Frida_Kahlo",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 120
	},
	{
		"id": 34,
		"name": "El Greco",
		"years": "1541 - 1614",
		"genre": ["Mannerism"],
		"nationality": ["Spanish", "Greek"],
		"bio": {
			"ru": "<p>Эль Греко (El Greco; собственно Доменико Теотокопули, Theotocopuli), великий испанский живописец, архитектор и скульптор. Грек с острова Крит, Эль Греко учился, видимо, у местных иконописцев, после 1560 приехал в Венецию, где, возможно, обучался у Тициана; с 1570 работал в Риме, испытал воздействие маньеризма, Микеланджело, Бассано, Пальма Веккьо, Тинторетто. В Венеции и Риме Эль Греко овладел приемами масляной живописи, передачей пространства и перспективы, обобщенным широким мазком; особенностями венецианского колоризма. Произведения, среди которых лишь немногие признаны достоверно принадлежащими кисти Эль Греко, отмечены разнохарактерностью исканий (“Изгнание торгующих из храма”, 1570, Национальная галерея, Вашингтон; “Исцеление слепого”, 1567-1570, Картинная галерея, Дрезден; портрет миниатюриста Джулио Кловио, 1570, Музей Каподимонте; портрет рыцаря Мальтийского ордена Виченцо Анастаджи, 1576, собрание Фрик, Нью-Йорк). Расцвет таланта Эль Греко наступил в Испании, куда он переехал около 1577 и где, не получив признания при королевском дворе в Мадриде, поселился в Толедо. В зрелом творчестве живописца Эль Греко, родственном поэзии испанских мистиков XVI века (Хуан де ла Крус и др.), в иллюзорно-беспредельном пространстве стираются грани между землёй и небом, реальные образы получают утонченно-духовную интерпретацию (торжественно-величавая композиция “Погребение графа Оргаса”, 1586-1588, церковь Санто-Томе, Толедо; “Святое Семейство”, около 1590-1595, Музей искусства, Кливленд).</p><p>Резкие ракурсы и неестественно вытянутые пропорции в картинах художника порой создают эффект стремительного изменения масштаба фигур и предметов, то внезапно вырастающих, то исчезающих в глубине картинного пространства (“Мученичество святого Маврикия”, 1580-1582, Эскориал). Одну из главных ролей в этих произведениях Эль Греко играет колорит, основанный на обилии холодных рефлексов, беспокойной игре контрастных цветов, ярко вспыхивающих или приглушенных.</p><p>Острая эмоциональность образного строя характерна и для портретов Эль Греко, отмеченных тонкой психологической проницательностью (“Главный инквизитор Ниньо де Гевара”, 1601, Метрополитен-музей) или проникновенным драматизмом (“Портрет неизвестного рыцаря”, 1578-1580, Музей Прадо, Мадрид). Черты ирреальности, мистического визионёрства нарастают в поздних картинах Эль Греко (“Снятие Пятой печати”, Метрополитен-музей; “Лаокоон”, Национальная галерея искусства, Вашингтон, - обе 1610-1614), острым трагическим чувством пронизана его пейзажная композиция “Вид Толедо” (1610-1614, Метрополитен-музей).</p><p>Повышенная одухотворенность образов, мистическая экзальтация сближают искусство Эль Греко с маньеризмом и выражают кризисное состояние художественной культуры Позднего Возрождения. Отмеченное напряженным стремлением к выражению возвышенно-драматических порывов человеческого духа, творчество Эль Греко в XVII-XIX веках было забыто и заново открыто только в начале XX века.</p>",
			"en": "<p>El Greco, born Doménikos Theotokópoulos was a painter, sculptor and architect of the Spanish Renaissance.</p><p><i>El Greco</i> (<i>The Greek<i>) was a nickname a reference to his Greek origin, and the artist normally signed his paintings with his full birth name in Greek letters.</p><p>El Greco was born in Crete, which was at that time part of the Republic of Venice, and the center of Post-Byzantine art. He trained and became a master within that tradition before traveling at age 26 to Venice, as other Greek artists had done. In 1570 he moved to Rome, where he opened a workshop and executed a series of works. During his stay in Italy, El Greco enriched his style with elements of Mannerism and of the Venetian Renaissance. In 1577, he moved to Toledo, Spain, where he lived and worked until his death. In Toledo, El Greco received several major commissions and produced his best-known paintings.</p><p>El Greco's dramatic and expressionistic style was met with puzzlement by his contemporaries but found appreciation in the 20th century. El Greco is regarded as a precursor of both Expressionism and Cubism, while his personality and works were a source of inspiration for poets and writers such as Rainer Maria Rilke and Nikos Kazantzakis. El Greco has been characterized by modern scholars as an artist so individual that he belongs to no conventional school. He is best known for tortuously elongated figures and often fantastic or phantasmagorical pigmentation, marrying Byzantine traditions with those of Western painting.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "El_Greco.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Эль_Греко",
				"en": "http://en.wikipedia.org/wiki/El_Greco",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 87
	},
	{
		"id": 35,
		"name": "Albrecht Dürer",
		"years": "1471 - 1528",
		"genre": ["Northern Renaissance"],
		"nationality": ["German"],
		"bio": {
			"ru": "<p>Дюрер (Durer) Альбрехт, немецкий живописец, рисовальщик, гравер, теоретик искусства. Основоположник искусства немецкого Возрождения, Дюрер учился ювелирному делу у своего отца, выходца из Венгрии, живописи – в мастерской нюрнбергского художника М.Вольгемута (1486–1489), у которого воспринял принципы нидерландского и немецкого позднеготического искусства, ознакомился с рисунками и гравюрами мастеров раннего итальянского Возрождения (в том числе А.Мантеньи). В эти же годы Дюрер испытал сильное влияние М.Шонгауэра. В 1490–1494, во время обязательных для цехового подмастерья странствий по Рейну, Дюрер выполнил несколько станковых гравюр в духе поздней готики, иллюстрации к “Кораблю дураков” С.Бранта и др. Воздействие на Дюрера гуманистических учений, усилившееся в результате его первой поездки в Италию (1494–1495), проявилось в стремлении художника к овладению научными методами познания мира, к углубленному изучению натуры, в которой его внимание привлекали как самые, казалось бы, незначительные явления (“Куст травы”, 1503, собрание Альбертина, Вена), так и сложные проблемы связи в природе цвета и световоздушной среды (“Домик у пруда”, акварель, около 1495–1497, Британский музей, Лондон). Новое ренессансное понимание личности Дюрер утверждал в портретах этого периода (автопортрет, 1498, Прадо).</p><p>Настроения предреформационной эпохи, кануна мощных социальных и религиозных битв Дюрер выразил в серии гравюр на дереве “Апокалипсис” (1498), в художественном языке которой органично слились приемы немецкого позднеготического и итальянского ренессансного искусства. Второе путешествие в Италию (1505–1507) еще более укрепило стремление Дюрера к ясности образов, упорядоченности композиционных построений (“Праздник четок”, 1506, Национальная галерея, Прага; “Портрет молодой женщины”, Музей искусств, Вена), внимательному изучению пропорций обнаженного человеческого тела (“Адам и Ева”, 1507, Прадо, Мадрид). При этом Дюрер не утратил (особенно в графике) зоркости наблюдения, предметной выразительности, жизненности и экспрессивности образов, свойственных искусству поздней готики (циклы гравюр на дереве “Большие Страсти”, около 1497–1511, “Жизнь Марии”, около 1502–1511, “Малые Страсти”, 1509–1511). Изумительная точность графического языка, тончайшая разработка световоздушных отношений, ясность линии и объема, сложнейшая философская подоснова содержания отличают три “мастерские гравюры” на меди: “Всадник, смерть и дьявол” (1513) - образ непоколебимого следования долгу, стойкости перед испытаниями судьбы; “Меланхолия” (1514) Праздник четок 1506, Национальная галерея, Прага как воплощение внутренней конфликтности мятущегося творческого духа человека; “Святой Иероним” (1514) - прославление гуманистической пытливой исследовательской мысли. К этому времени Дюрер завоевал почетное положение в родном Нюрнберге, получил известность за рубежом, особенно в Италии и Нидерландах (куда совершил поездку в 1520–1521). Дюрер дружил с виднейшими гуманистами Европы. Среди его заказчиков были богатые бюргеры, германские князья и сам император Максимилиан I, для которого он в числе других крупных немецких художников исполнил рисунки пером к молитвеннику (1515).</p><p>В серии портретов 1520-х годов (Я.Муффеля, 1526, И. Хольцшуэра, 1526, – оба в картинной галерее, Берлин-Далем, и др.) Дюрер воссоздал тип человека ренессансной эпохи, проникнутого гордым сознанием самоценности собственной личности, заряженного напряженной духовной энергией и практической целеустремленностью. Интересен автопортрет Альбрехта Дюрера в 26 лет в перчатках. Руки модели, лежащие на постаменте, - хорошо известный прием создания иллюзии близости между портретируемым и зрителем. Дюрер мог научиться этому визуальному трюку на примере таких произведений, как, например, леонардовская Мона Лиза, - он видел ее вовремя путешествия в Италию. Пейзаж, который виден в открытое окно, - особенность, характерная для северных художников, таких как Ян Ван Эйк и Робер Кампен. Дюрер революционизировал североевропейское искусство, объединив опыт нидерландской и итальянской живописи. Многосторонность устремлений проявилась и в теоретических трудах Дюрера (“Руководство к измерению...”, 1525; “Четыре книги о пропорциях человека”, 1528). Художественные искания Дюрера завершила картина “Четыре апостола” (1526, Старая пинакотека, Мюнхен), в которой воплощены четыре характера-темперамента людей, связанных общим гуманистическим идеалом независимой мысли, силы воли, стойкости в борьбе за справедливость и истину.</p>",
			"en": "<p>Albrecht Dürer was a German painter, engraver, printmaker, mathematician, and theorist from Nuremberg.</p><p>His high-quality woodcuts (nowadays often called <i>Meisterstiche</i> or <i>master prints</i>) established his reputation and influence across Europe when he was still in his twenties, and he has been conventionally regarded as the greatest artist of the Northern Renaissance. His vast body of work includes altarpieces, religious works, numerous portraits and self-portraits, and copper engravings. The woodcuts, such as the Apocalypse series (1498), retain a more Gothic flavour than the rest of his work. His well-known prints include the Knight, Death, and the Devil (1513), Saint Jerome in his Study (1514) and Melencolia I (1514), which has been the subject of extensive analysis and interpretation. His watercolours also mark him as one of the first European landscape artists, while his ambitious woodcuts revolutionized the potential of that medium.</p><p>Dürer's introduction of classical motifs into Northern art, through his knowledge of Italian artists and German humanists, has secured his reputation as one of the most important figures of the Northern Renaissance. This is reinforced by his theoretical treatises, which involve principles of mathematics, perspective and ideal proportions.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Albrecht_Durer.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Дюрер,_Альбрехт",
				"en": "http://en.wikipedia.org/wiki/Albrecht_Dürer",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 328
	},
	{
		"id": 36,
		"name": "Alfred Sisley",
		"years": "1839 - 1899",
		"genre": ["Impressionism"],
		"nationality": ["French", "British"],
		"bio": {
			"ru": "<p>Сислей (Sisley) Альфред, французский живописец, мастер пейзажа. По происхождению англичанин; в 1860-1863 годах учился в Париже в мастерской Ш.Глейра, испытал влияние Камиля Коро.</p><p>Один из ведущих мастеров импрессионизма, Сислей писал непритязательные по мотивам пейзажи окрестностей Парижа, отмеченные тонким лиризмом и выдержанные в свежей и сдержанной световой гамме. Пейзажи Сислея, передающие подлинную атмосферу Иль-де-Франса, хранят в себе особую прозрачность и мягкость природных явлений всех времен года (“Маленькая площадь в Аржантёе”, 1872, “Наводнение в Марли”, 1876, - оба в Музее д'Орсе, Париж; “Мороз в Лувесьенне”, 1873, “Опушка леса в Фонтенбло”, 1885, - оба в ГМИИ, Москва).</p><p>Чарующие изображения природы художника Альфреда Сислея с легким оттенком грусти завораживают удивительной передачей настроения в данный момент времени (“Берег Сены у Буживаля”, 1876, частное собрание). С середины 1880-х годов в творчестве Сислея нарастают черты красочного декоративизма.</p>",
			"en": "<p>Alfred Sisley  was an Impressionist landscape painter who was born and spent most of his life in France, but retained British citizenship. He was the most consistent of the Impressionists in his dedication to painting landscape en plein air (i.e., outdoors). He deviated into figure painting only rarely and, unlike Renoir and Pissarro, found that Impressionism fulfilled his artistic needs.</p><p>Among his important works are a series of paintings of the River Thames, mostly around Hampton, executed in 1874, and landscapes depicting places in or near Moret-sur-Loing. The notable paintings of the Seine and its bridges in the former suburbs of Paris are like many of his landscapes, characterized by tranquility, in pale shades of green, pink, purple, dusty blue and cream. Over the years the power of expression and color intensity increased within Sisley's paintings.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Alfred_Sisley.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Сислей,_Альфред",
				"en": "http://en.wikipedia.org/wiki/Alfred_Sisley",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 259
	},
	{
		"id": 37,
		"name": "Boris Kustodiev",
		"years": "1878 - 1927",
		"genre": ["Realism", "Art Nouveau"],
		"nationality": ["Russian"],
		"bio": {
			"ru": "<p>Кустодиев Борис Михайлович (Kustodiev Boris), русский художник. Родился в Астрахани 23 февраля (7 марта) 1878 в семье преподавателя духовной семинарии. Посетив в 1887 году выставку передвижников и впервые увидев картины настоящих живописцев, юный Кустодиев был потрясен. Он твердо решил стать художником. Окончив в 1896 году духовную семинарию, Кустодиев едет в Петербург и поступает в Академию художеств. Занимаясь в мастерской И. Е. Репина, Кустодиев много пишет с натуры, стремится овладеть мастерством передачи красочного многообразия мира.</p><p>Репин привлек молодого художника к соавторству в картине 'Заседание Государственного Совета' (1901–1903, Русский музей, Петербург). Уже в эти годы проявился виртуозный талант Кустодиева - портретиста (И. Я. Билибин, 1901). Проживая в Петербурге и Москве, Кустодиев часто наезжал в живописные уголки русской провинции, прежде всего в города и села Верхней Волги, где кистью художника рождались знаменитые образы русского традиционного быта (серии «ярмарок», «маслениц», «деревенских праздников») и красочные народные типажи («купчихи», «купцы», красавицы в бане –«русские венеры»). Эти серии и близкие им полотна (портрет Ф. И. Шаляпина, 1922, Русский музей) подобны красочным снам о старой России. Революцию Кустодиев воспринял карнавально, в духе народного лубка.</p><p>Хотя в 1916 году паралич приковал художника к инвалидному креслу, Кустодиев продолжал активно работать в разных видах искусства, продолжая свои популярные «волжские» серии. После революции Кустодиев создал лучшие свои вещи в сфере книжной иллюстрации ('Леди Макбет Мценского уезда' Н. С. Лескова; 'Русь' Е. И. Замятина; обе работы – 1923; и другие рисунки) и сценографии ('Блоха' Замятина во втором МХАТе, 1925; и другие декорации). Умер Борис Михайлович Кустодиев в Ленинграде 26 мая 1927 года.</p>",
			"en": "<p>Boris Mikhaylovich Kustodiev was a Russian painter and stage designer.</p><p>Boris studied in theological seminary and took private art lessons in Astrakhan from Pavel Vlasov, a pupil of Vasily Perov. Subsequently, from 1896 to 1903, he attended Ilya Repin’s studio at the Imperial Academy of Arts in St. Petersburg.Concurrently, he took classes in sculpture under Dmitry Stelletsky and in etching under Vasiliy Mate. He first exhibited in 1896</p><p>When Repin was commissioned to paint a large-scale canvas to commemorate the 100th anniversary of the State Council, he invited Kustodiev to be his assistant. The painting was extremely complex and involved a great deal of hard work. Together with his teacher, the young artist made portrait studies for the painting, and then executed the right-hand side of the final work.</p><p>He visited France and Spain on a grant from the Imperial Academy of Arts in 1904. Also in 1904, he attended the private studio of René Ménard in Paris. After that he traveled to Spain, then, in 1907, to Italy, and in 1909 he visited Austria and Germany, and again France and Italy. During these years he painted many portraits and genre pieces. However, no matter where Kustodiev happened to be – in sunny Seville or in the park at Versailles – he felt the irresistible pull of his motherland. After five months in France he returned to Russia, writing with evident joy to his friend Mate that he was back once more <i>in our blessed Russian land</i>.</p><p>In 1905, Kustodiev first turned to book illustrating, a genre in which he worked throughout his entire life. He illustrated many works of classical Russian literature, including Nikolai Gogol's Dead Souls, The Carriage, and The Overcoat; Mikhail Lermontov's The Lay of Tsar Ivan Vasilyevich, His Young Oprichnik and the Stouthearted Merchant Kalashnikov; and Leo Tolstoy's How the Devil Stole the Peasants Hunk of Bread and The Candle.</p><p>His Pancake Tuesday/Maslenitsa (1916) and Fontanka (1916) are all painted from his memories. He meticulously restores his own childhood in the busy city on the Volga banks.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Boris_Kustodiev.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Кустодиев,_Борис_Михайлович",
				"en": "http://en.wikipedia.org/wiki/Boris_Kustodiev",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 160
	},
	{
		"id": 38,
		"name": "Karl Bryullov",
		"years": "1799 - 1852",
		"genre": ["Neoclassicism", "Romanticism"],
		"nationality": ["Russian"],
		"bio": {
			"ru": "<p>Брюллов Карл Павлович (Briullov Karl), русский художник. Родился Брюллов в обрусевшей немецкой семье скульптора-резчика и живописца миниатюр в Петербурге 12 (23) декабря 1799. В 1809–1821 годах учился в Академии художеств, в частности у живописца исторического жанра Андрея Ивановича Иванова. В 1821 году Карл Брюллов был удостоен золотой медали Академии за картину: 'Явление Аврааму трех ангелов у дуба Мамврийского' и права продолжения обучения живописи в Италии за казенный счет. В 1823–1835 годах Брюллов работал в Италии, испытав глубокое воздействие античного, равно как и итальянского ренессансно-барочного искусства. Итальянские картины Брюллова проникнуты чувственной эротичностью ('Итальянский полдень', 1827, Русский музей, Санкт-Петербург; 'Вирсавия', 1832, Третьяковская галерея); в этот период окончательно формируется и его дар рисовальщика.</p><p>Брюллов выступает и как мастер светского портрета, превращая свои образы в миры сияющей, «райской» красоты ('Всадница' или конный портрет Дж. и А.Паччини, 1832, Третьяковская галерея). Стремясь к большим историческим темам, в 1830 году, побывав на месте раскопок древнеримского города, разрушенного извержением Везувия, Брюллов начинает работу над картиной 'Последний день Помпеи'. Многофигурное трагическое полотно становится в ряд характерных для романтизма «картин-катастроф».</p><p>Картина 'Последний день Помпеи' Брюллова (завершенная в 1833 и хранящаяся в Русском музее) производит сенсацию как в России (где о ней восторженно пишут А.С.Пушкин, Н.В.Гоголь, А.И.Герцен и другие писатели), так и за рубежом, где это произведение живописца приветствуют как первый большой международный успех русской живописной школы. На родину в 1835 художник возвращается уже как живой классик. Посетив по пути Грецию и Турцию, Брюллов создает целый ряд поэтических образов Восточного Средиземноморья. Обратившись по предложению императора Николая I к русской истории, Брюллов пишет 'Осаду Пскова Стефаном Баторием' (1836–1843, Третьяковская галерея), не сумев, однако же, добиться (несмотря на ряд ярких живописных находок в эскизах) эпической цельности своего итальянского шедевра. По возвращении в Россию важную сферу творчества Брюллова стали составлять монументально-оформительские проекты, где ему удалось органически сочетать таланты декоратора и драматурга (эскизы росписей Пулковской обсерватории, 1839–1845; этюды и наброски ангелов и святых для Исаакиевского собора.</p><p>Полным хозяином своих образов Брюллов выступает в портретах. Даже в заказных вещах (вроде портрета 'Графини Юлии Самойловой, удаляющейся с бала с приемной дочерью Паччини', около 1842, Русский музей) феерическая пышность колорита и мизансцен выглядит в первую очередь как триумф искусства. Еще более непринужденны, психологически-задушевны по краскам и светотени образы людей искусства (поэта Н.В.Кукольника, 1836; скульптора И.П.Витали, 1837; баснописца И.А.Крылова, 1839; писателя и критика А.Н.Струговщикова, 1840; все работы в Третьяковской галерее), в том числе известный меланхолический автопортрет (1848, там же). Все более слабея от болезни, с 1849 года Брюллов живет на острове Мадейра, а с 1850 – в Италии. Умер Карл Брюллов 23 июня 1852 года в местечке Мандзиана, близ Рима.</p>",
			"en": "<p>Karl Pavlovich Bryullov also transliterated Briullov or Briuloff and referred to by his friends as <i>The Great Karl</i>, was a Russian painter. He is regarded as a key figure in transition from the Russian neoclassicism to romanticism.</p><p>Karl Bryullov was born in a family of the academician, the woodcarver and engraver Pavel Ivanovich Briullo (Brulleau, 1760—1833) who was of Huguenot descent. He felt drawn to Italy from his early years. Despite his education at the Imperial Academy of Arts (1809–1821), Bryullov never fully embraced the classical style taught by his mentors and promoted by his brother, Alexander Bryullov. After distinguishing himself as a promising and imaginative student and finishing his education, he left Russia for Rome where he worked until 1835 as a portraitist and genre painter, though his fame as an artist came when he began doing historical painting.</p><p>His best-known work, The Last Day of Pompeii (1830–1833), is a vast composition compared by Pushkin and Gogol to the best works of Rubens and Van Dyck. It created a sensation in Italy and established Bryullov as one of the finest European painters of his day. After completing this work, he triumphantly returned to the Russian capital, where he made many friends among the aristocracy and intellectual elite and obtained a high post in the Imperial Academy of Arts.</p><p>While teaching at the academy (1836–1848) he developed a portrait style which combined a neoclassical simplicity with a romantic tendency that fused well, and his penchant for realism was satisfied with an intriguing level of psychological penetration. While he was working on the plafond of St Isaac's Cathedral, his health suddenly deteriorated. Following advice of his doctors, Bryullov left Russia for Madeira in 1849 and spent the last three years of his life in Italy. He died in the village of Manziana near Rome and is buried at the Cimitero del Testaccio there.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Karl_Bryullov.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Брюллов,_Карл_Павлович",
				"en": "http://en.wikipedia.org/wiki/Karl_Bryullov",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 169
	},
	{
		"id": 39,
		"name": "Pieter Bruegel",
		"years": "1525 - 1569",
		"genre": ["Northern Renaissance"],
		"nationality": ["Flemish"],
		"bio": {
			"ru": "<p>Брейгель (точнее Брёгел) Старший или “Мужицкий” (Bruegel de Oude, Boeren Brueghel) Питер, нидерландский живописец и рисовальщик. В 1552-1553 посетил Италию, работал в Антверпене, с 1563 - в Брюсселе. Глава демократического направления в нидерландском искусстве XVI века, Брейгель с громадной силой и полнотой воссоздавал в своем творчестве жизнь, настроения и мироощущение народа в канун Нидерландской буржуазной революции. От сатирических нравоучительных рисунков, изобилующих фантастическими причудливыми персонажами в духе Иеронима Босха, от дробных по композиции, колористически пестрых полотен (“Битва Масленицы и Поста”, 1559, Музей истории искусств, Вена) с середины 1560-х годов Питер Брейгель перешел к созданию несколько более сдержанных по цвету, отмеченных монументальностью и цельностью композиций, обобщенных картин крестьянской жизни.</p><p>Изображая постоянно движущуюся народную массу, художник раскрывает заключенные в народе мощные жизненные силы, его достоинство и неиссякаемое жизнелюбие (“Крестьянская свадьба”, “Крестьянский танец”, - обе в Музее истории искусств, Вена). Во многих произведениях художника Брейгеля иносказательно запечатлены бедствия нидерландцев, страдавших под испанским игом (“Избиение младенцев”, Художественно-исторический музей, Вена; “Перепись в Вифлееме”, 1566, Музей старинного искусства, Брюссель). Испанский террор в Нидерландах породил в некоторых картинах Брейгеля настроения отчаяния и скорби, выразившиеся в горьких иносказаниях (“Сорока на виселице”, 1568. Музей земли Гессен, Дармштадт), в фантастических и символических образах, полных глубокого трагизма (“Безумная Грета”, 1562, Музей Майер ван дер Берг, Антверпен; “Слепые”, 1568, Национальные музей и галерея Каподимонте, Неаполь). Обилие фигур и деталей, острота контурного рисунка, яркая выразительность образов, звучность локальных цветовых пятен (в изображении фигур) сочетаются в творчестве Брейгеля с пространственной широтой композиции, с тончайшим ощущением тонального единства. Питер Брейгель Старший заложил основы развития национального нидерландского пейзажа.</p><p>Творчески переработав уроки итальянской живописи эпохи Высокого Возрождения и одновременно черпая многие свои темы из народных пословиц и притч, лубочных гравюр и листовок, Брейгель создавал глубоко народное искусство, опирающееся на местные традиции и фольклор. В творчестве Питера Брейгеля органично сплавились грубоватый народный юмор и сложное иносказание, лиризм и трагичность, острая жизненная наблюдательность и фантастический гротеск, интерес к бытовым деталям, подробной повествовательности и стремление к широкому обобщению, к созданию гармоничной картины мира. В исполненные строгой гармонии, выдержанные в землистых, серо-зеленых, желтовато-коричневых оттенках ландшафтные виды с бескрайними просторами равнин, речных долин, с холмами и перелесками Питером Брейгелем гибко и естественно вписаны обобщенные силуэтные фигуры населяющих их людей (“Сумрачный день”, “Возвращение стад”, “Охотники на снегу” – все 1565, Музей истории искусств, Вена).</p><p>Ясное и трагическое осознание неизбежности судьбы и времени, чувство грандиозности мироздания и понимание истинного места человека в нем, делают Брейгеля одним из величайших мудрецов в искусстве Северного Возрождения. Отмеченное исключительной широтой и глубиной понимания жизненных явлений, мощное и темпераментное творчество Брейгеля оказало громадное влияние на современное ему нидерландское искусство и заложило основы развития искусства Голландии и Фландрии в XVII веке. Автопортрет Питера Брейгеля, фрагмент работы “Художник и знаток”, 1565.</p>",
			"en": "<p>Pieter Bruegel (also Brueghel) the Elder was a Flemish Renaissance painter and printmaker known for his landscapes and peasant scenes (so called genre painting). He is sometimes referred to as the <i>Peasant Bruegel</i>. From 1559, he dropped the <i>h</i> from his name and signed his paintings as <i>Bruegel</i>.</p><p>The main source for Bruegel's biography is Karel van Mander's 1604 Schilder-boeck. According to van Mander, he was born in Breugel near the (now Dutch) town of Breda. There are however also records that show that he was born in Breda, and there is some uncertainty whether the (now Belgian) town of Bree, called Breda in Latin, is meant. He was an apprentice of Pieter Coecke van Aelst, whose daughter Mayken he later married. He spent some time in France and Italy, and then went to Antwerp, where in 1551 he was accepted as a master in the painter's guild. He traveled to Italy soon after, and then returned to Antwerp before settling in Brussels permanently 10 years later.</p><p>He received the nickname <i>Peasant Bruegel</i> or <i>Bruegel the Peasant</i>  for his practice of dressing up like a peasant in order to socialize at weddings and other celebrations, thereby gaining inspiration and authentic details for his genre paintings. He died in Brussels on 9 September 1569 and was buried in the Kapellekerk.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Pieter_Bruegel_the_Elder.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Брейгель_Старший,_Питер",
				"en": "http://en.wikipedia.org/wiki/Pieter_Bruegel_the_Elder",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 134
	},
	{
		"id": 40,
		"name": "Marc Chagall",
		"years": "1887 - 1985",
		"genre": ["Primitivism"],
		"nationality": ["French", "Jewish", "Belarusian"],
		"bio": {
			"ru": "<p>Шагал Марк Захарович (наст. отчество Хацкелевич) (Chagall Marc), график, живописец, театральный художник, иллюстратор, мастер монументальных и прикладных видов искусства; выходец из России. Один из лидеров мирового авангарда 20 века, Шагал сумел органически соединить древние традиции иудейской культуры с остросовременным новаторством. Родился в Витебске 24 июня (6 июля) 1887. Получил традиционное религиозное образование на дому (древнееврейский язык, чтение Торы и Талмуда). В 1906 году приехал в Петербург, где в 1906–1909 посещал рисовальную школу при обществе поощрения художеств, студию С.М.Зайденберга и школу Е.Н.Званцевой. Жил в Петербурге-Петрограде, Витебске и Москве, а в 1910–1914 – в Париже. Все творчество Шагала изначально автобиографично и лирически исповедально. Уже в ранних его картинах доминируют темы детства, семьи, смерти, глубоко личностные и в то же время «вечные» ('Суббота', 1910, Музей Валльраф-Рихарц, Кёльн). Со временем на первый план выходит тема страстной любви художника к своей первой жене - Белле Розенфельд ('Над городом', 1914–1918, Третьяковская галерея, Москва). Характерны мотивы «местечкового» пейзажа и быта вкупе с символикой иудаизма ('Ворота еврейского кладбища', 1917, частное собрание, Париж).</p><p>Однако, вглядываясь в архаику, в том числе и в русскую икону и лубок (которые оказали на него большое влияние), Шагал примыкает к футуризму и предугадывает будущие авангардные течения. Гротескно-алогичные сюжеты, резкие деформации и ирреально-сказочные цветовые контрасты его полотен ('Я и деревня', 1911, Музей современного искусства, Нью-Йорк; 'Автопортрет с семью пальцами', 1911–1912, Городской музей, Амстердам) оказывают большое влияние на развитие сюрреализма.</p><p>После Октябрьской революции в 1918–1919 годах Шагал служил комиссаром ВКП (большевиков) губернского отдела народного образования в Витебске, оформлял город к революционным праздникам. В Москве Шагал написал ряд больших настенных панно для Еврейского Камерного театра, тем самым сделав первый значительный шаг к монументальному искусству. Выехав в 1922 в Берлин, в дальнейшем с 1923 жил во Франции, в Париже или на юге страны, временно покинув ее в 1941–1947 (эти годы провел в Нью-Йорке). Наезжал в разные страны Европы и Средиземноморья, не раз побывал и в Израиле. Освоив различные гравюрные техники, по заказу Амбруаза Воллара Шагал создал в 1923–1930 годах островыразительные иллюстрации к 'Мертвым душам' Николая Васильевича Гоголя и 'Басням' Ж.де Лафонтена. К середине 20 века его авторитет художника – живописца, графика, мастера театрального искусства, а также декоративной керамики (которой он занимался с 1950) – получил мировое признание.</p><p>По мере достижения пика славы его манера – в целом сюрреально - экспрессионистская – становится все легче и раскованней. Не только главные герои, но и все элементы образа парят, слагаясь в созвездия цветных видений. Сквозь повторяющиеся темы витебского детства, любви, циркового спектакля наплывают мрачные отзвуки бывших и грядущих мировых катастроф ('У времени нет берегов', 1930–1939, Музей современного искусства, Нью-Йорк). С 1955 началась работа над 'Библией Шагала' – так именуют огромный цикл живописных полотен, раскрывающих мир прародителей еврейского народа в удивительно эмоциональной и яркой, наивно-мудрой форме. В русле этого цикла мастер создал и большое число монументальных эскизов, композиции по которым украсили сакральные здания разных религий – как иудаизма, так и христианства в его католической и протестантской разновидностях: керамические панно и витражи капеллы в Асси (Савой) и собора в Меце, 1957–1958; витражи: синагоги медицинского факультета Еврейского университета близ Иерусалима, 1961; собора (церкви Фраумюнстер) в Цюрихе, 1969–1970; собора в Реймсе, 1974; церкви Санкт-Штефан в Майнце, 1976–1981; и др.). Эти произведения Марка Шагала радикально обновили язык современного монументального искусства, обогатив его мощным красочным лиризмом.</p><p>В 1973 Шагал посетил Москву и Санкт-Петербург в связи с выставкой своих работ в Третьяковской галерее. Умер Шагал в Сен-Поль-де-Ванс (Приморские Альпы, Франция) 28 марта 1985 года.</p>",
			"en": "<p>Marc Zakharovich Chagall was a Russian-French artist.</p><p> An early modernist, he was associated with several major artistic styles and created works in virtually every artistic medium, including painting, book illustrations, stained glass, stage sets, ceramic, tapestries and fine art prints.</p><p>Before World War I, he traveled between St. Petersburg, Paris, and Berlin. During this period he created his own mixture and style of modern art based on his idea of Eastern European Jewish folk culture. He spent the wartime years in Soviet Belarus, becoming one of the country's most distinguished artists and a member of the modernist avant-garde, founding the Vitebsk Arts College before leaving again for Paris in 1922.</p><p>He had two basic reputations, writes art historian Michael J. Lewis: as a pioneer of modernism and as a major Jewish artist. He experienced modernism's <i>golden age</i> in Paris, where <i>he synthesized the art forms of Cubism, Symbolism, and Fauvism, and the influence of Fauvism gave rise to Surrealism</i>. Yet throughout these phases of his style <i>he remained most emphatically a Jewish artist, whose work was one long dreamy reverie of life in his native village of Vitebsk.</i> <i>When Matisse dies,</i> Pablo Picasso remarked in the 1950s, <i>Chagall will be the only painter left who understands what colour really is</i>.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Marc_Chagall.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Шагал,_Марк_Захарович",
				"en": "http://en.wikipedia.org/wiki/Marc_Chagall",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 239
	},
	{
		"id": 41,
		"name": "Giotto di Bondone",
		"years": "1266 - 1337",
		"genre": ["Proto Renaissance"],
		"nationality": ["Italian"],
		"bio": {
			"ru": "<p>Итальянский живописец, основоположник проторенессанса. Родом из Колле да Веспиньяно в Тоскане. Учился в мастерской Чимабуэ (между 1280 и 1290), работал главным образом во Флоренции (где с 1334 руководил строительством собора Санта-Мария дель Фьоре и городских укреплений) и Парме. В начале 14 века Джотто посетил Рим. С именем Джотто связан новый этап в развитии итальянского и европейского искусства (Проторенессанс), разрыв итальянской живописи со средневековыми художественными канонами и традициями так называемого итало-византийского искусства.</p><p>Знакомство Джотто с позднеантичной живописью и произведениями Пьетро Каваллини способствовало становлению его творческого метода, созданию такого выдающегося памятника проторенессансной живописи, как росписи капеллы дель Арена (Скровеньи) в Падуе (1304–1308). Фрески Джотто, посвященные жизни Марии и Христа, расположенные на стенах тремя горизонтальными рядами, отличаются драматизмом и жизненной убедительностью образов, смелым построением пространства, почти скульптурной лепкой пластического объема, простотой и в то же время выразительностью жестов и ракурсов, светлым, праздничным колоритом.</p><p>Искусство Джотто отличалось огромной изобразительной силой и драматической выразительностью своих образов. Воздействие его на зрителя было тем сильнее, чем естественнее и реалистичнее были художественные приемы Джотто, поставившего перед собой задачу изображения реального трехмерного пространства, построенного на перспективно-линейном основании. Не обладая знанием научной перспективы, примитивными, казалось бы, средствами Джотто достиг небывалого для искусства своего времени эффекта, одним из первых введя в живопись изображение интерьера. Одновременно с этим вторым завоеванием Джотто было создание пластической, округлой человеческой фигуры, причем каждая из изображенных им фигур обладала и чисто материальной весомостью и в силу этого глубокой жизненной, реалистической убедительностью.</p><p>Собственно, росписи капеллы дель Арена в Падуе в творческом наследии Джотто занимают центральное место. Этот обширный фресковый цикл включает в себя роспись коробового свода, уподобленного синей небесной тверди с золотыми звездами и заключенными в медальоны изображениями Христа, Марии и пророков, композицию «Страшный суд» на западной стене, тридцать четыре сцены из жизни Марии и Христа, расположенные в три ряда на длинных боковых стенах и так называемой «триумфальной арке» алтаря. Именно эти сцены определяют характер росписей капеллы. Строгая упорядоченность их расположения организует всю ритмику интерьера, построенное на насыщенных красочных тонах цветовое решение сообщает всему ансамблю праздничный характер. Земная жизнь Марии и Христа предстает в этих композициях как связанные неторопливым ритмом повествования этапы патриархального, эпически-величественного бытия. Джотто очень скупо обозначает приметы изображаемого им мира условными скалистыми горками, светлыми зданиями, густой ультрамариновой синевой неба. Но самым замечательным открытием Джотто являются его персонажи — коренастые, широколицые, наделенные величавым обликом, облаченные в одежды и плащи простого покроя из тяжелых, однотонных тканей, задрапированных в крупные складки.</p><p>В 1310-х годах Джотто работает во Флоренции. К этому времени относится созданная им «Мадонна Оньиссанти», украшавшая главный алтарь францисканской церкви Оньиссанти (ныне хранится в Галерее Уффици). По стилю она непосредственно связана с фресками капеллы Дель Арена, поэтому может быть отнесена к 1306-1310 годам. Францисканская базилика Санта Кроче, капеллы Перуцци и Барди во Флоренции хранят основные произведения позднего периода творчества Джотто. Роспись капеллы Перуцци, представляющая сцены из жизни Иоанна Крестителя и Иоанна Евангелиста, выполнена почти исключительно в технике альсекко, поэтому плохо сохранилась, но, несмотря на это, она и сегодня еще демонстрирует расцвет творческих сил художника. Пространство этих картин глубже и просторнее, в них словно больше воздуха. Пропорции фигур и архитектуры более реалистичны, движение фигур свободнее. На некоторых картинах представлено по две сцены, как, например, рождество и наречение Иоанна Крестителя. Все достигается сильным укорачиванием перспективы. Сдержанность, экспрессивная драматическая выразительность образов знаменуют собой дальнейшее развитие художественных тенденций фресок капеллы Дель Арена. Цвета здесь более глубоких тонов и более мягкие, чем на падуанских фресках. В капелле Барди в сценах жития св. Франциска архитектурные формы стройнее, скульптурность контуров несколько смягчается. В изображениях в большей мере ощущается готический стиль, чем в капелле Перуцци, где наследие античности играет более заметную роль. Свет в обеих капеллах падает на изображения со стороны окна, источника естественного света. Укорачивание перспективы ориентировано на зрителя, стоящего у входа в капеллу</p><p>В алтарных образах Джотто, сохраняя во многом традиционную композиционную схему, по-новому строил пространственные отношения фигур, стремился к внутренней значительности образов («Мадонна во славе» или «Мадонна Оньиссанти», 1310–е, Уффици). В росписях капелл Перуцци (около 1320) и Барди (1320–1325) в церкви Санта-Кроче во Флоренции мастер достиг органической связи живописи с архитектурой, спокойной торжественности и архитектонической стройности композиции, благородной сдержанности колорита</p><p>В 1328-1332 годах Джотто работал в Неаполе придворным живописцем у короля Роберта Анжуйского. Цикл «Знаменитые мужи» из большого зала замка Кастель Нуово и фрески дворцовой капеллы, созданные там художником, также утрачены. В 1334 году Джотто вновь работает во Флоренции, где руководит строительством собора. По его проекту было начато возведение знаменитой флорентийской звонницы, Кампанилы, и сегодня являющейся символом и гордостью Флоренции.</p><p>Реформатор итальянской живописи, Джотто открыл новый этап в истории живописи всей Европы и явился предтечей искусства Возрождения. Его историческое место определяется преодолением средневековых итало-византийских традиций. Джотто создал облик мира, адекватный реальному по своим основным свойствам — материальности и пространственной протяженности. Использовав ряд известных в его время приемов — угловые ракурсы, упрощенную, т. н. античную, перспективу, он сообщил сценическому пространству иллюзию глубины, ясность и четкость структуры. Одновременно он разработал приемы тональной светотеневой моделировки форм при помощи постепенного высветления основного, насыщенного красочного тона, что позволило придать формам почти скульптурную объемность и в то же время сохранить сияющую чистоту цвета, его декоративные функции.</p><p>Джотто был известен также как архитектор — создатель кампанилы (колокольни) Флорентийского собора. Состоящее из пяти ярусов, это стройное и легкое сооружение, украшенное рядом рельефов, над некоторыми из которых Джотто работал совместно с Андреа Пизано, является одним из лучших украшений архитектурного ансамбля Флоренции. Скончался Джотто ди Бондоне 8 января 1337 во Флоренции. Джотто оказал влияние на формирование ведущих школ итальянской живописи 14 века, прежде всего флорентийской, а также на ряд мастеров, работавших в Сиене и Падуе. К его наследию неоднократно обращались мастера итальянского Возрождения от Мазаччо до Микеланджело. Художественные реформы Джотто были глубоки и значительны, и его историческое значение было осознано не только в последующие века, но и его современниками. В пятой новелле шестого дня «Декамерона» Боккаччо называет Джотто «превосходным талантом», «светочем флорентийской славы», который «вывел на свет искусство, в течение многих столетий погребенное», и следовал в своих изображениях природе. Мазаччо, Пьеро делла Франческа, Леонардо да Винчи, Рафаэль и Микеланджело — великие мастера Возрождения — обращались к искусству Джотто как к живительному и вечно свежему источнику глубоко этических, человечных образов.</p>",
			"en": "<p>Giotto di Bondone was an Italian painter and architect from Florence in the late Middle Ages. He is generally considered the first in a line of great artists who contributed to the Italian Renaissance.</p><p>Giotto's contemporary, the banker and chronicler Giovanni Villani, wrote that Giotto was <i>the most sovereign master of painting in his time, who drew all his figures and their postures according to nature. And he was given a salary by the Comune of Florence in virtue of his talent and excellence.</i></p><p>The late-16th century biographer Giorgio Vasari describes Giotto as making a decisive break with the prevalent Byzantine style and as initiating <i>the great art of painting as we know it today, introducing the technique of drawing accurately from life, which had been neglected for more than two hundred years.</i></p><p>Giotto's masterwork is the decoration of the Scrovegni Chapel in Padua, also known as the Arena Chapel, completed around 1305. This fresco cycle depicts the life of the Virgin and the life of Christ. It is regarded as one of the supreme masterpieces of the Early Renaissance. That Giotto painted the Arena Chapel and that he was chosen by the Comune of Florence in 1334 to design the new campanile (bell tower) of the Florence Cathedral are among the few certainties of his biography. Almost every other aspect of it is subject to controversy: his birthdate, his birthplace, his appearance, his apprenticeship, the order in which he created his works, whether or not he painted the famous frescoes at Assisi, and his burial place.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Giotto.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Джотто_ди_Бондоне",
				"en": "http://en.wikipedia.org/wiki/Giotto_di_Bondone",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 119
	},
	{
		"id": 42,
		"name": "Sandro Botticelli",
		"years": "1445 - 1510",
		"genre": ["Early Renaissance"],
		"nationality": ["Italian"],
		"bio": {
			"ru": "<p>Боттичелли Сандро [собственно Алессандро ди Мариано Филипепи, Alessandro di Mariano Filipepi] (1445, Флоренция — 17 мая 1510, Флоренция), итальянский живописец эпохи Раннего Возрождения, представитель флорентийской школы. Сандро Боттичелли — один из самых ярких художников итальянского ренессанса. Он создал пленительные по своей возвышенности образы-аллегории и подарил миру идеал женской красоты. Родился в семье дубильщика кожи Мариано ди Ванни Филипепи; прозвище «Боттичелло» — «бочоночек» — унаследовал от старшего брата Джованни. Среди первых сведений о художнике — запись в кадастре 1458 года, сделанная отцом о нездоровье своего младшего сына. По окончании учебы Боттичелли стал подмастерьем в ювелирной мастерской своего брата Антонио, но долго в ней не задержался и около 1464 перешел в ученики к монаху фра Филиппо Липпи из обители Кармине, одному из самых знаменитых художников того времени.</p><p>Стиль Филиппо Липпи оказал на Боттичелли огромное влияние, проявившееся главным образом в определенных типах лиц (в повороте в три четверти), декоративности и орнаментальности рисунка драпировок, рук, в склонности к детализации и мягком высветленном колорите, в его «восковом» свечении. Нет точных сведений о периоде обучения Боттичелли у Филиппо Липпи и об их личных отношениях, но можно предположить, что они вполне ладили между собой, поскольку через несколько лет сын Липпи стал учеником Боттичелли. Их сотрудничество продолжалось до 1467 года, когда Филиппо переехал в Сполето, а Боттичелли открыл свою мастерскую во Флоренции. В произведениях конца 1460-х годов хрупкая, плоскостная линеарность и грация, перенятые от Филиппо Липпи, сменяются более объемной трактовкой фигур. Приблизительно в это же время Боттичелли начал применять охристые тени для передачи телесного цвета — прием, который стал приметной чертой его стиля. Ранним работам Сандро Боттичелли свойственны ясное построение пространства, четкая светотеневая лепка, интерес к бытовым деталям (“Поклонение волхвов”, около 1474–1475, Уффици).</p><p>С конца 1470-х годов, после сближения Боттичелли с двором правителей Флоренции Медичи и кругом флорентийских гуманистов, в его творчестве усиливаются черты аристократизма и утонченности, появляются картины на античные и аллегорические темы, в которых чувственные языческие образы проникнуты возвышенной и вместе с тем поэтической, лирической одухотворенностью (“Весна”, около 1477–1478, “Рождение Венеры”, около 1482–1483, – обе в Уффици). Одушевленность ландшафта, хрупкая красота фигур, музыкальность легких, трепетных линий, прозрачность изысканных, словно сотканных из рефлексов красок создают в них атмосферу мечтательности и легкой грусти.</p><p>Станковым портретам художника (портрет мужчины с медалью, 1474, галерея Уффици, Флоренция; портрет Джулиано Медичи, 1470-е, Бергамо; и другим) свойственно сочетание тонких нюансов внутреннего состояния человеческой души и четкая детализация характеров портретируемых. Благодаря Медичи Боттичелли близко познакомился с идеями гуманистов (значительное их число входило в кружок Медичи, своего рода элитный интеллектуальный центр ренессансной Флоренции), многие из которых отразились в его творчестве. Например, мифологические картины (“Афина Паллада и Кентавр”, 1482; “Венера и Марс”, 1483 и другие) были, естественно, написаны художником Боттичелли по заказу культурной элиты и предназначались для украшения палаццо или вилл знатных флорентийских заказчиков. До времени творчества Сандро Боттичелли мифологическая тематика в живописи встречалась в декоративных украшениях свадебных кассоне и предметах прикладного искусства, только изредка становясь объектом живописи.</p><p>В 1481 году Сандро Боттичелли получил от папы Сикста IV почетный заказ. Понтифик только что закончил строительство Сикстинской капеллы Ватиканского дворца и пожелал, чтобы лучшие художники украсили ее своими фресками. Наряду с известнейшими мастерами монументальной живописи того времени — Перуджино, Козимо Росселлини, Доменико Гирландайо, Пинтуриччино и Синьорелли — по указанию папы был приглашен и Боттичелли. В выполненных Сандро Боттичелли в 1481–1482 фресках в Сикстинской капелле в Ватикане (“Сцены из жизни Моисея”, “Наказание Корея, Дафана и Абирона”, “Исцеление прокаженного и искушение Христа”) величественная гармония пейзажа и античной архитектуры сочетается с внутренней сюжетной напряженностью, остротой портретных характеристик. Во всех трех фресках художником мастерски решена проблема изложения сложной богословской программы в ясных, легких и живых драматических сценах; при этом в полной мере используются композиционные эффекты.</p><p>Боттичелли возвратился во Флоренцию летом 1482 года, возможно, по причине смерти своего отца, но, скорее всего, по делам собственной мастерской, загруженной работой. В период между 1480 и 1490 годами его слава достигла апогея, и он стал получать до того огромное число заказов, что справляться с ними самому было почти невозможно, поэтому большую часть картин “Мадонн с младенцем” заканчивали его ученики, старательно, но не всегда блестяще, копировавшие манеру своего мастера. В эти годы Сандро Боттичелли написал для Медичи несколько фресок на вилле Спедалетто в Вольтерре (1483–84), картину для ниши алтаря в капелле Барди при церкви Санто Спирито (1485) и несколько фресок аллегорического содержания на вилле Лемми. Волшебная грация, красота, богатство воображения и блестящее исполнение, присущие картинам на мифологические темы, присутствуют также в нескольких знаменитых алтарях Боттичелли, написанных в течение 1480-х годах. К числу лучших принадлежат алтарь Барди с изображением Мадонны с младенцем и святыми Иоанном Крестителем и Иоанном Евангелистом (1485) и “Благовещение Честелло” (1489–1490, Уффици).</p><p>В 1490-е годы, в эпоху потрясших Флоренцию социальных брожений и мистико-аскетических проповедей монаха Савонаролы, в искусстве Боттичелли появляются ноты драматизма, морализаторства и религиозной экзальтации (“Оплакивание Христа”, после 1490, музей Польди-Пеццоли, Милан; “Клевета”, после 1495, Уффици). Резкие контрасты ярких цветовых пятен, внутренняя напряженность рисунка, динамика и экспрессия образов свидетельствуют о необыкновенной перемене в мировосприятии художника — в сторону большей религиозности и даже своеобразного мистицизма. Однако его рисунки к “Божественной комедии” Данте (1492–1497, Гравюрный кабинет, Берлин, и Ватиканская библиотека) при остроте эмоциональной выразительности сохраняют легкость линии и ренессансную ясность образов.</p><p>В последние годы жизни художника его слава клонилась к закату: наступала эра нового искусства и, соответственно, новая мода и новые вкусы. В 1505 он вошел в состав городского комитета, который должен был определить место установки статуи работы Микеланджело — его «Давида», но за исключением этого факта других сведений о последних годах жизни Боттичелли неизвестно. Примечательно, что когда в 1502 году Изабелла д'Эсте искала для себя флорентийского художника и Боттичелли дал свое согласие на работу, она отвергла его услуги. Вазари в своих «Жизнеописаниях…» нарисовал удручающую картину последних лет жизни художника, описав его как человека бедного, «старого и бесполезного», неспособного держаться на ногах без помощи костылей. Скорее всего, образ совершенно забытого и бедного художника — создание Вазари, который был склонен к крайностям в жизнеописаниях художников.</p><p>Умер Сандро Боттичелли в 1510 году; так закончилось Кватроченто — эта счастливейшая эпоха во флорентийском искусстве. Боттичелли скончался в возрасте 65 лет и был похоронен на кладбище флорентийской церкви Оньиссанти. Вплоть до 19 века, когда его творчество вновь было открыто художником-прерафаэлитом Данте Габриэлем Россетти и художественными критиками Уолтером Патером и Джоном Рескиным, его имя фактически было забыто для истории искусства. В Боттичелли они увидели родственное предпочтениям своей эпохи — душевную грацию и меланхолию, «симпатию к человечеству в его неустойчивых состояниях», черты болезненности и декаданса. Следующее поколение исследователей живописи Боттичелли, например Герберт Хорн, писавший в первых десятилетиях XX века, различило в ней иное — умение передать пластику и пропорции фигуры — то есть приметы энергичного языка, характерного для искусства раннего Ренессанса. Перед нами довольно разные оценки. Что же определяет искусство Боттичелли? XX век много сделал для того, чтобы приблизиться к его пониманию. Картины мастера органично включили в контекст его времени, связав с художественной жизнью, литературой и гуманистическими представлениями Флоренции. Живопись Боттичелли, притягательная и загадочная, созвучна мировоззрению не только эпохи раннего ренессанса, но и нашего времени.</p>",
			"en": "<p>Alessandro di Mariano di Vanni Filipepi, known as Sandro Botticelli was an Italian painter of the Early Renaissance.</p><p>He belonged to the Florentine School under the patronage of Lorenzo de' Medici, a movement that Giorgio Vasari would characterize less than a hundred years later as a <i>golden age</i> a thought, suitably enough, he expressed at the head of his Vita of Botticelli.</p><p>Botticelli's posthumous reputation suffered until the late 19th century; since then his work has been seen to represent the linear grace of Early Renaissance painting. Among his best known works are The Birth of Venus and Primavera.</p><p>In these works, the influence of Gothic realism is tempered by Botticelli's study of the antique. But if the painterly means may be understood, the subjects themselves remain fascinating for their ambiguity. The complex meanings of these paintings continue to receive widespread scholarly attention, mainly focusing on the poetry and philosophy of humanists who were the artist's contemporaries. The works do not illustrate particular texts; rather, each relies upon several texts for its significance. Of their beauty, characterized by Vasari as exemplifying <i>grace</i> and by John Ruskin as possessing linear rhythm, there can be no doubt. The pictures features Botticelli's linear style emphasized by the soft continual contours and pastel colors.</p><p>In the mid-1480s, Botticelli worked on a major fresco cycle with Perugino, Domenico Ghirlandaio and Filippino Lippi, for Lorenzo the Magnificent's villa near Volterra; in addition he painted many frescoes in Florentine churches. In 1491 he served on a committee to decide upon a façade for the Cathedral of Florence.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Sandro_Botticelli.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Сандро_Боттичелли",
				"en": "http://en.wikipedia.org/wiki/Sandro_Botticelli",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 164
	},
	{
		"id": 43,
		"name": "Caravaggio",
		"years": "1571 - 1610",
		"genre": ["Baroque"],
		"nationality": ["Italian"],
		"bio": {
			"ru": "<p>Караваджо Микеланджело (Caravaggio). Собственно, полное имя Меризи да Караваджо (Michelangelo Merisi da Caravaggio). Итальянский живописец. Родился 28 сентября 1573 года. Учился в Милане (1584-1588); работал в Риме (до 1606), Неаполе (1607 и 1609-1610), на островах Мальта и Сицилия (1608-1609). Караваджо, не принадлежавший к определенной художественной школе, уже в ранних произведениях противопоставил индивидуальную выразительность модели, простые бытовые мотивы (“Маленький больной Вакх”, “Юноша с корзиной фруктов” - оба в галерее Боргезе, Рим) идеализации образов и аллегорическому истолкованию сюжета, свойственным искусству маньеризма и академизма.</p><p>Совершенно новую, интимно-психологическую интерпретацию получили у него традиционные религиозные темы (“Отдых на пути в Египет”, галерея Дориа-Памфили, Рим). Художник внес большой вклад в становление бытового жанра (“Гадалка”, Лувр, Париж и другие). Зрелые произведения художника Караваджо - это монументальные полотна, обладающие исключительной драматической силой (“Призвание апостола Матфея” и “Мученичество апостола Матфея”, 1599-1600, церковь Сан-Луиджи деи Франчези в Риме; “Положение во гроб”, 1602-1604, Пинакотека, Ватикан; “Смерть Марии”, около 1605-1606, Лувр, Париж). Живописная манера Караваджо в этот период основана на мощных контрастах света и тени, выразительной простоте жестов, энергичной лепке объемов, насыщенности колорита - приемах, создающих эмоциональное напряжение, острую аффектацию чувств. Подчеркнутая “простонародность” типажей, утверждение идеалов демократизма поставили Караваджо в оппозицию по отношению к современному искусству, обрекли его в последние годы жизни на скитания по югу Италии.</p><p>В поздних произведениях Караваджо обращается к теме одиночества человека во враждебном ему мире, его привлекает образ небольшого содружества людей, объединенных родственной близостью и душевным теплом (“Погребение Святой Лючии”, 1608, церковь Санта-Лучия, Сиракузы). Свет в его картинах становится мягким и подвижным, колорит тяготеет к тональному единству, манера письма приобретает характер свободной импровизационности. События биографии Караваджо поражают своим драматизмом. Караваджо обладал очень вспыльчивым, неуравновешенным и сложным характером. Начиная с 1600 года, времени наивысшего творческого подъема Караваджо, его имя стало постоянно появляться в протоколах римской полиции. Сначала Караваджо с друзьями совершал незначительные противоправные действия (угрозы, непристойные стихи, оскорбления), за которые привлекался к суду. Но в 1606 году художник в пылу ссоры во время игры в мяч совершил убийство и с тех пор был вынужден скрываться от полиции.</p><p>После убийства художник бежал из Рима в Неаполь. Там он продолжал работать над крупными заказами; его искусство оказало решающее влияние на развитие неаполитанской школы живописи. В 1608 Караваджо переехал на Мальту, где написал портрет магистра мальтийского ордена и сам вступил в орден. Но вскоре и оттуда Караваджо пришлось бежать на Сицилию из-за своего вспыльчивого характера. Прожив на Сицилии некоторое время, художник в 1609 возвратился в Неаполь, где подвергся нападению в портовой таверне и был изуродован. В это время Караваджо уже был болен малярией, от приступа которой и умер 18 июля 1610 года. Суровый реализм Караваджо не был понят его современниками, приверженцами «высокого искусства». Обращение к натуре, которую он сделал непосредственным объектом изображения в своих произведениях, и правдивость ее трактовки вызвали множество нападок на художника со стороны духовенства и официальных лиц. Тем не менее, в самой Италии нашлось много его последователей, получивших название караваджистов.</p><p>Творческая манера Караваджо оказала непосредственное влияние на сложение течения караваджизма - самостоятельного направления в европейском искусстве 17 века. Для караваджизма характерны демократизм образной системы, повышенное чувство реальной предметности, материальности изображения, активная роль светотеневых контрастов в живописно-пластическом решении картины, монументализация жанрово-бытовых мотивов. В Италии, где тенденции караваджизма сохраняли свою актуальность до конца 17 века и особенно сказались в живописи Рима, Генуи и Неаполя, наиболее сильное и оригинальное истолкование наследие Караваджо получило в творчестве итальянского художника Орацио Джентилески и его дочери Артемизии.</p><p>Но еще значительнее было влияние творчества Караваджо за пределами Италии. Ни один крупный живописец того времени не прошел мимо увлечения караваджизмом, явившимся важным этапом на пути европейского реалистического искусства. Среди европейских мастеров караваджизма вне Италии наиболее значительно творчество утрехтских караваджистов в Голландии (Геррит ван Хонтхорст, Хендрик Тербрюгген и др.), а также Хусепе де Риберы в Испании и Адама Эльсхаймера в Германии. Через этап караваджизма прошли Питер Пауль Рубенс, Диего Веласкес, Рембрандт ван Рейн, Жорж де Латур. Воздействие отдельных приемов караваджизма ощутимо также в работах некоторых мастеров академизма (Гвидо Рени, Себастьяно Риччи в Италии и Вильям-Адольф Бугеро во Франции) и барокко (Карел Шкрет в Чехии и другие)</p>",
			"en": "<p>Michelangelo Merisi (or Amerighi) da Caravaggio was an Italian painter active in Rome, Naples, Malta, and Sicily between 1592 (1595?) and 1610. His paintings, which combine a realistic observation of the human state, both physical and emotional, with a dramatic use of lighting, had a formative influence on Baroque painting.</p><p>Caravaggio trained as a painter in Milan under Simone Peterzano who had himself trained under Titian. In his twenties Caravaggio moved to Rome where there was a demand for paintings to fill the many huge new churches and palazzos being built at the time. It was also a period when the Church was searching for a stylistic alternative to Mannerism in religious art that was tasked to counter the threat of Protestantism. Caravaggio's innovation was a radical naturalism that combined close physical observation with a dramatic, even theatrical, use of chiaroscuro which came to be known as tenebrism (the shift from light to dark with little intermediate value).</p><p>He burst upon the Rome art scene in 1600 with the success of his first public commissions, the Martyrdom of Saint Matthew and Calling of Saint Matthew. Thereafter he never lacked commissions or patrons, yet he handled his success poorly. He was jailed on several occasions, vandalized his own apartment, and ultimately had a death warrant issued for him by the Pope after on 29 May 1606, he killed, possibly unintentionally, a young man.</p><p>An early published notice on him, dating from 1604 and describing his lifestyle three years previously, recounts that <i>after a fortnight's work he will swagger about for a month or two with a sword at his side and a servant following him, from one ball-court to the next, ever ready to engage in a fight or an argument, so that it is most awkward to get along with him.</i> In 1606 he killed a young man in a brawl and fled from Rome with a price on his head. He was involved in a brawl in Malta in 1608, and another in Naples in 1609, possibly a deliberate attempt on his life by unidentified enemies. This encounter left him severely injured. A year later, at the age of 38, he died under mysterious circumstances in Porto Ercole in Tuscany, reportedly from a fever while on his way to Rome to receive a pardon.</p><p>Famous while he lived, Caravaggio was forgotten almost immediately after his death, and it was only in the 20th century that his importance to the development of Western art was rediscovered. Despite this, his influence on the new Baroque style that eventually emerged from the ruins of Mannerism was profound. It can be seen directly or indirectly in the work of Rubens, Jusepe de Ribera, Bernini, and Rembrandt, and artists in the following generation heavily under his influence were called the <i>Caravaggisti</i> or <i>Caravagesques<i>, as well as tenebrists or tenebrosi (<i>shadowists</i>). The 20th-century art historian André Berne-Joffroy claimed: <i>What begins in the work of Caravaggio is, quite simply, modern painting.</i></p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Caravaggio.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Караваджо",
				"en": "http://en.wikipedia.org/wiki/Caravaggio",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 55
	},
	{
		"id": 44,
		"name": "Zinaida Serebriakova",
		"years": "1884 - 1967",
		"genre": ["Symbolism", "Expressionism", "Art Deco"],
		"nationality": ["Russian"],
		"bio": {
			"ru": "<p>Родилась в 1884 году, в семье известного скульптора, мать происхождением из знаменитой династии Бенуа. После гибели отца впоследствии семья проживала в Санкт-Петербурге у Николая Леонтьевича Бенуа или в имении Нескучном. В семье всегда много говорили об искусстве и намерение Зиночки стать художником, естественно, никого не удивило.</p><p>Обучалась рисованию Зинаида очень мало. В 17 лет она брала уроки у Ильи Репина, а затем у Осипа Эммануиловича Браза, а затем в течение двух лет путешествовала по Италии, изучала картины великих живописцев эпохи Возрождения, любовалась прекрасными творениями известных итальянских зодчих, восхищалась великолепными пейзажами. Все это конечно очень повлияло на творчество будущего художника.</p><p>Вернувшись на родину, девушка вышла замуж за своего кузена Бориса Серебрякова.</p><p>Еще в молодости художница всегда выражала в своих этюдах любовь к России. Ее картина «Сад в цвету» и некоторые другие ясно говорят об очаровании российских бескрайних просторов, луговых цветов, полей…</p><p>Картины, которые появились в экспозициях выставок 1909 – 1910 гг., выражают своеобразный и неповторимый стиль. Наибольший восторг у зрителей вызвал автопортрет «За туалетом». Женщина, живущая в небольшой деревушке, в один из коротких зимних вечеров, смотрясь в зеркало, улыбается своему отражению, словно играя с гребнем. В этом произведении молодой художницы, как и она сама, все дышит свежестью. Нет никакого модернизма; уголок комнаты, словно освещенный молодостью, предстает перед зрителем во всей своей прелести и радости.</p><p>Наибольший пик творчества художницы приходится на предреволюционные годы. Это картины о крестьянах и прекрасных российских пейзажах а также и бытовые жанры например, картина За завтраком, балерины в уборной, Одним из значительных произведений в эти годы является картина «Беление холста», написанная в 1916 г, где Серебрякова выступает как художник-монументалист. Фигуры деревенских женщин на лугу возле речки выглядят величественно, из-за изображения низкого горизонта. Ранним утром они расстилают только что сотканные холсты и оставляют их на день под яркими лучами солнышка.</p><p>Композиция строится в красных, зеленых и коричневых тонах, что и придает небольшому холсту свойства монументально-декоративного полотна. Это своего рода гимн тяжелому труду крестьян. Фигуры выполнены в разных цветовых и ритмических ключах, что создает единую пластическую мелодию, замкнутую внутри композиции. Все это единый величественный аккорд, который прославляет красоту и силу русской женщины. Крестьянки изображены на берегу небольшой речки, от которой ввысь вздымается предутренний туман. Красноватые лучи солнышка придают особое очарование женским лицам. 'Беление холста' напоминает древние фрески. Художница трактует эту работу как ритуальное действо, показывая красоту людей и мира, при помощи живописного и линейного ритма картины. К сожалению, это последняя большая работа Зинаиды Серебряковой.</p><p>В этом же году Бенуа заказывают украсить росписью Казанский вокзал и он приглашает для работы свою племянницу. Художница решает по-своему создать восточную тему. Представить Индию, Японию, Турцию и Сиам как красивых женщин Востока.</p><p>В самом расцвете творчества художницу постигает огромное горе. Заболев тифом, за короткое время от этой страшной болезни сгорает муж, и на руках Серебряковой остаются мать и четверо детей. В 1920 г. всей семьей они перебираются в Петроград. Дочь Таня поступает в балет и Серебрякова несколько лет развивает театральную тему, изображая балерин. Но работа не приносит истинного удовлетворения. Семья испытывает острую нужду буквально во всем. Запасы, что были в имении полностью разграблены. Нет красок, и художница пишет углем и карандашом свой «Карточный Домик», в котором изображает своих детей. Серебрякова отвечает категорическим отказом освоить стиль футуризма и находит работу в археологическом музее Харькова, делая карандашом эскизы экспонатов.</p><p>Любители искусства почти даром, за еду или старые вещи приобретают ее картины. В связи с тяжелым финансовым положением Зинаида Евгеньевна в 1924 г. уезжает в Париж, куда она была приглашена для работы над декоративной росписью. Закончив работу, она собирается возвратиться, но по некоторым объективным обстоятельствам останется в Париже навсегда.</p><p>Серебрякова путешествует по африканским странам. Экзотические пейзажи удивляют ее, она пишет Атласские горы, портреты женщин-африканок, создает цикл этюдов о рыбаках Бретани.</p>            <p>С 1947 года Серебрякова становится гражданкой Франции. Долгие сорок с лишним лет за границей, вдали от России, не приносят ей творческого удовлетворения; она часто испытывает тоску по родным местам. Даже ее зарисовки безмолвно говорят о том, что Серебрякова осталась верна теме русского народа и реализму. Художница и во время своих многочисленных путешествий писала картины, главными героями которых были крестьяне, рыбаки, люди из народа.</p><p>В 1966 году в столице СССР в Москве и некоторых крупных городах были открыты выставки работ Серебряковой, многие из картин приобретены российскими музеями.</p><p>Прекрасная русская художница Зинаида Серебрякова скончалась не на родине, в Париже в 1967 г. в преклонном возрасте 82 лет.</p>",
			"en": "<p>Zinaida Yevgenyevna Serebriakova was among the first female Russian painters of distinction.</p><p>Zinaida Serebriakova was born on the estate of Neskuchnoye near Kharkov (now Kharkiv, Ukraine) into one of Russia's most refined and artistic families. She belonged to the artistic Benois family. Her grandfather, Nicholas Benois, was a famous architect, chairman of the Society of Architects and member of the Russian Academy of Science. Her uncle, Alexandre Benois, was a famous painter, founder of the Mir iskusstva art group. Her father, Yevgeny Nikolayevich Lanceray, was a well-known sculptor, and her mother, who was Alexandre Benois' sister, had a talent for drawing. One of Zinaida's brothers, Nikolay Yevgenyevich Lanceray, was a talented architect, and her other brother, Yevgeny Yevgenyevich Lanceray, had an important place in Russian and Soviet art as a master of monumental painting and graphic art. The Russian-English actor and writer Peter Ustinov was also related to her.</p><p>In 1900 she graduated from a women's gymnasium (equivalent to grammar school or high school), and entered the art school founded by Princess M. K. Tenisheva. She studied under Repin in 1901, and under portrait artist Osip Braz between 1903 and 1905. Between 1902–1903 she spent time in Italy, and from 1905–1906 she studied at the Académie de la Grande Chaumière in Paris.</p><p>Zinaida Serebriakova's works wereexhibited in Moscow, Leningrad, and Kiev, to great acclaim. Her albums sold by the millions, and she was compared to Botticelli and Renoir. However, although she sent about 200 of her works to be shown in the Soviet Union, the bulk of her work remains in France today.</p><p>Zinaida Serebriakova died in Paris on 19 September 1967, at the age of 82. She is buried in Paris, at the Russian cemetery at Sainte-Geneviève-des-Bois.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Zinaida_Serebriakova.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Серебрякова,_Зинаида_Евгеньевна",
				"en": "http://en.wikipedia.org/wiki/Zinaida_Serebriakova",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 368
	},
	{
		"id": 45,
		"name": "Leonardo da Vinci",
		"years": "1452 - 1519",
		"genre": ["High Renaissance"],
		"nationality": ["Italian"],
		"bio": {
			"ru": "<p>Леонардо да Винчи (Leonardo da Vinci), итальянский живописец, скульптор, архитектор, ученый и инженер. Основоположник художественной культуры Высокого Возрождения, Леонардо да Винчи сложился как мастер, обучаясь у Андреа дель Верроккьо во Флоренции. Методы работы в мастерской Вероккьо, где художественная практика сопрягалась с техническими экспериментами, а также дружба с астрономом П.Тосканелли способствовали зарождению научных интересов молодого да Винчи. В ранних произведениях (голова ангела в “Крещении” Верроккьо, после 1470, “Благовещение”, около 1474, - оба в Уффици; так называемая “Мадонна Бенуа”, около 1478, Государственный Эрмитаж, Санкт-Петербург) художник, развивая традиции искусства Раннего Возрождения, подчеркивал плавную объемность форм мягкой светотенью, иногда оживлял лица еле уловимой улыбкой, добиваясь с её помощью передачи тонких душевных состояний. Фиксируя результаты бесчисленных наблюдений в набросках, эскизах и натурных штудиях, исполненных в различных техниках (итальянский и серебряный карандаши, сангина, перо и др.), Леонардо да Винчи добивался, прибегая иногда к почти карикатурному гротеску, остроты в передаче мимики лица, а физические особенности и движение человеческого тела юношей и девушек приводил в идеальное соответствие с духовной атмосферой композиции.</p><p>В 1481 или 1482 Леонардо да Винчи поступил на службу к правителю Милана Лодовико Моро, исполнял обязанности военного инженера, гидротехника, устроителя придворных праздников. Свыше 10 лет он работал над конным монументом Франческо Сфорца - отца Лодовико Моро (глиняная модель памятника в натуральную величину разрушена при взятии Милана французами в 1500). В миланский период Леонардо да Винчи создал “Мадонну в скалах” (1483-1494, Лувр, Париж; второй вариант - около 1497-1511, Национальная галерея, Лондон), где персонажи представлены в окружении причудливого скалистого пейзажа, а тончайшая светотень играет роль духовного начала, подчеркивающего теплоту человеческих отношений. В трапезной монастыря Санта-Мария делле Грацие он выполнил стенную роспись “Тайная вечеря” (1495-1497; из-за особенностей примененной во время работы Леонардо да Винчи над фреской техники - масло с темперой - сохранилась в сильно повреждённом виде; в ХХ веке реставрирована), знаменующую собой одну из вершин европейской живописи; ее высокое этическое и духовное содержание выражено в математической закономерности композиции, логически продолжающей реальное архитектурное пространство, в ясной, строго разработанной системе жестов и мимики персонажей, в гармоничной уравновешенности форм.</p><p>Занимаясь архитектурой, Леонардо да Винчи разрабатывал различные варианты “идеального” города и проекты центрально-купольного храма, оказавшие большое влияние на современное ему зодчество Италии. После падения Милана жизнь Леонардо да Винчи прошла в непрестанных переездах (1500-1502, 1503-1506, 1507 — Флоренция; 1500 — Мантуя и Венеция; 1506, 1507-1513 — Милан; 1513-1516 — Рим; 1517-1519 — Франция). В родной Флоренции он работал над росписью зала Большого Совета в Палаццо Веккьо “Битва при Ангьяри” (1503-1506, не закончена, известна по копиям с картона), стоящей у истоков европейского батального жанра нового времени. В портрете “Моны Лизы” или “Джоконды” (около 1503-1505, Лувр, Париж) он воплотил возвышенный идеал вечной женственности и человеческого обаяния; важным элементом композиции стал космически обширный пейзаж, тающий в холодной голубой дымке. К поздним произведениям Леонардо да Винчи относятся проекты памятника маршалу Тривульцио (1508-1512), алтарный образ “Святая Анна и Мария с младенцем Христом” (около 1507-1510, Лувр, Париж), завершающий поиски мастера в области световоздушной перспективы и гармонического пирамидального построения композиции, и “Иоанн Креститель” (около 1513-1517, Лувр), где несколько слащавая двусмысленность образа свидетельствует о нарастании кризисных моментов в творчестве художника.</p><p>В серии рисунков с изображением вселенской катастрофы (так называемый, цикл с “Потопом”, итальянский карандаш, перо, около 1514-1516, Королевская библиотека, Виндзор) раздумья о ничтожестве человека перед могуществом стихий сочетаются с рационалистическими представлениями о цикличности природных процессов. Важнейшим источником для изучения воззрений Леонардо да Винчи являются его записные книжки и рукописи (около 7 тысяч листов), отрывки из которых вошли в “Трактат о живописи”, составленный после смерти мастера его учеником Ф.Мельци и оказавший огромное влияние на европейскую теоретическую мысль и художественную практику. В споре искусств Леонардо да Винчи первое место отводил живописи, понимая ее как универсальный язык, способный воплотить все многообразные проявления разумного начала в природе. Облик Леонардо да Винчи был бы воспринят нами односторонне без учета того, что его художественная деятельность оказалась неразрывно связанной с деятельностью научной. В сущности, Леонардо да Винчи представляет в своем роде единственный пример великого художника, для которого искусство не было главным делом жизни.</p><p>Если в молодости он преимущественное внимание уделял живописи, то с течением времени это соотношение изменилось в пользу науки. Трудно найти такие области знания и техники, которые не были бы обогащены его крупными открытиями и смелыми идеями. Ничто не дает такого яркого представления о необычайной универсальности гения Леонардо да Винчи, как многие тысячи страниц его рукописей. Содержащиеся в них заметки в сочетании с бесчисленными рисунками, придающими мысли Леонардо да Винчи пластическую овеществленность, охватывают все бытие, все области знания, являясь как бы нагляднейшим свидетельством того открытия мира, которое принес с собой Ренессанс. В этих результатах его неустанной духовной работы явственно ощущается многоликость самой жизни, в познании которой художественное и рациональное начала выступают у Леонардо да Винчи в нерасторжимом единстве.</p><p>Как ученый и инженер он обогатил почти все области науки того времени. Яркий представитель нового, основанного на эксперименте естествознания Леонардо да Винчи особое внимание уделял механике, видя в ней главный ключ к тайнам мироздания; его гениальные конструктивные догадки намного опередили современную ему эпоху (проекты прокатных станов, машин, подводной лодки, летательных аппаратов). Собранные им наблюдения над влиянием прозрачных и полупрозрачных сред на окраску предметов привели к утверждению в искусстве Высокого Возрождения научно обоснованных принципов воздушной перспективы. Изучая устройство глаза, Леонардо да Винчи высказал правильные догадки о природе бинокулярного зрения. В анатомических рисунках он заложил основы современной научной иллюстрации, занимался также ботаникой и биологией. И как контраст с этой полной высшего напряжения творческой деятельностью — жизненная судьба Леонардо, его бесконечные скитания, связанные с невозможностью найти в тогдашней Италии благоприятные условия для работы.</p><p>Поэтому, когда французский король Франциск I предложил ему место придворного живописца, Леонардо да Винчи принял приглашение и в 1517 году прибыл во Францию. Во Франции, в этот период особенно активно приобщавшейся к культуре итальянского Возрождения, Леонардо да Винчи был окружен при дворе всеобщим почитанием, носившим, однако, скорее внешний характер. Силы художника были на исходе, и через два года, 2 мая 1519 года, он скончался в замке Клу (близ Амбуаза, Турень) во Франции. Неутомимый ученый-экспериментатор и гениальный художник, Леонардо да Винчи стал общепризнанным символом эпохи Возрождения. История зарождения эпохи итальянского ренессанса.</p>",
			"en": "<p>Leonardo di ser Piero da Vinci was an Italian painter, sculptor, architect, musician, mathematician, engineer, inventor, anatomist, geologist, cartographer, botanist, and writer. He is widely considered to be one of the greatest painters of all time and perhaps the most diversely talented person ever to have lived. His genius, perhaps more than that of any other figure, epitomized the Renaissance humanist ideal. Leonardo has often been described as the archetype of the Renaissance Man, a man of <i>unquenchable curiosity</i> and <i>feverishly inventive imagination</i>. According to art historian Helen Gardner, the scope and depth of his interests were without precedent and <i>his mind and personality seem to us superhuman, the man himself mysterious and remote</i>. Marco Rosci states that while there is much speculation about Leonardo, his vision of the world is essentially logical rather than mysterious, and that the empirical methods he employed were unusual for his time.</p><p>Born out of wedlock to a notary, Piero da Vinci, and a peasant woman, Caterina, in Vinci in the region of Florence, Leonardo was educated in the studio of the renowned Florentine painter Verrocchio. Much of his earlier working life was spent in the service of Ludovico il Moro in Milan. He later worked in Rome, Bologna and Venice, and he spent his last years in France at the home awarded him by Francis I.</p><p>Leonardo was, and is, renowned primarily as a painter. Among his works, the Mona Lisa is the most famous and most parodied portrait  and The Last Supper the most reproduced religious painting of all time, with their fame approached only by Michelangelo's The Creation of Adam.Leonardo's drawing of the Vitruvian Man is also regarded as a cultural icon, being reproduced on items as varied as the euro coin, textbooks, and T-shirts. Perhaps fifteen of his paintings have survived, the small number because of his constant, and frequently disastrous, experimentation with new techniques, and his chronic procrastination. Nevertheless, these few works, together with his notebooks, which contain drawings, scientific diagrams, and his thoughts on the nature of painting, compose a contribution to later generations of artists rivalled only by that of his contemporary, Michelangelo.</p><p>Leonardo is revered for his technological ingenuity. He conceptualised flying machines, an armoured vehicle, concentrated solar power, an adding machine, and the double hull, also outlining a rudimentary theory of plate tectonics. Relatively few of his designs were constructed or were even feasible during his lifetime, but some of his smaller inventions, such as an automated bobbin winder and a machine for testing the tensile strength of wire, entered the world of manufacturing unheralded. He made important discoveries in anatomy, civil engineering, optics, and hydrodynamics, but he did not publish his findings and they had no direct influence on later science.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Leonardo_da_Vinci.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Леонардо_да_Винчи",
				"en": "http://en.wikipedia.org/wiki/Leonardo_da_Vinci",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 143
	},
	{
		"id": 46,
		"name": "Diego Velazquez",
		"years": "1599 - 1660",
		"genre": ["Baroque"],
		"nationality": ["Spanish"],
		"bio": {
			"ru": "<p>Веласкес Диего, великий испанский живописец. Собственно, Диего Родригес де Сильва Веласкес (Diego Rodriguez de Silva Velazquez). Веласкес родился 6 июня 1599 года в городе Севилья в Испании, в семье португальских евреев, принявших христианство. Учился в родном городе у живописцев Франсиско де Эрреры Старшего и Франсиско Пачеко (1610–1616), в 1617 получил звание мастера. До 1623 Веласкес работал в Севилье. Рано обратившись к кругу новых для испанской живописи тем и образов, в сценах из народной жизни “бодегонес” (от испанского bodegon – харчевня) создал галерею ярко характерных, полнокровных народных типов (“Завтрак”, около 1618, Эрмитаж, Санкт-Петербург; “Водонос”, около 1622, Музей Уэллингтона, Лондон). Контрастное освещение фигур, выдвинутых на передний план, плотность письма, интерес к точной передаче особенностей натуры сближают живопись севильского периода художника Диего Веласкеса с караваджизмом.</p><p>В 1623 году Веласкес переехал в Мадрид и стал королевским живописцем. Знакомство с королевским собранием картин, встречи с Петером Паулем Рубенсом, посетившим Испанию в конце 1628 – начале 1629, и поездка в Италию (конец 1629 – начало 1631) содействовали совершенствованию его мастерства. Художник проницательнее вглядывался в мир, порывал с присущими искусству его времени условностями, искал пути к созданию полотен широкого обобщающего смысла. В картинах “Вакх” (“Пьяницы”, до 1630) и “Кузница Вулкана” (1630; обе картины в музее Прадо, Мадрид) художник объединил мифологические образы богов с грубоватыми, нарочито приземленными образами людей, наделил их реальными психологическими характерами.</p><p>На формирование Диего Веласкеса как портретиста огромное воздействие оказала жизнь при королевском дворе, научившая художника постигать глубины человеческого характера, скрытые под маской придворного этикета. Бесстрастно-холодные парадные конные портреты королевских особ (инфанта Балтасара Карлоса, 1634–1635, Прадо, Мадрид) отличаются сдержанным великолепием поз, одежд, коней, величием пейзажных фонов.</p><p>В портретах придворных, друзей, учеников Веласкес накапливал и синтезировал свои наблюдения, отбирал необходимые изобразительные средства. В этих полотнах обычно отсутствуют аксессуары, жесты, движение. Нейтральный фон благодаря тонкому соотношению валёров обладает глубиной и воздушностью; темные тона одеяний направляют внимание зрителя на ровно освещенные лица. Найденные для каждого портрета неповторимые сочетания оттенков серебристо-серого, оливкового, серо-коричневого цветов при общей сдержанности гаммы создают индивидуальный строй образов (портреты: Хуана Матеоса, около 1632, Картинная галерея, Дрезден; графа-герцога Оливареса, около 1638, Эрмитаж, Санкт-Петербург; “Дама с веером”, около 1648, собрание Уоллес, Лондон; серия портретов инфант, Лувр, Прадо).</p><p>Мудрая непредвзятость и человечность Веласкеса воплотились в его портретах королевских шутов и карликов (Эль Бобо из Кории, Эль Примо, так называемого Хуана Австрийского, Себастьяна Мора и других, все – 1631–1648, Прадо, Мадрид). Тонко и точно разработанная гамма красных и розовых оттенков – эмоциональный ключ к пониманию жестко-правдивого образа папы Иннокентия Х (1650, Галерея Дориа-Памфили, Рим), портрет которого Веласкес написал во время второй поездки в Италию в конце 1648 – середине 1651 годов. К этому же периоду относятся “Венера перед зеркалом” (около 1650, Национальная галерея, Лондон), в которой необычный композиционный прием (лицо Венеры видно только в зеркале) придает особую свежесть и остроту изображению гибкого, стройного, полного жизненного обаяния обнаженного женского тела, а также два пейзажа “Вилла Медичи” (1650–1651, Прадо, Мадрид; по другому мнению – около 1630), в необычайно для своего времени широкой живописной манере воссоздающие целостные образы природы.</p><p>В последние годы жизни Диего Веласкес написал две самые знаменитые свои картины. В картине “Менины” (“Фрейлины”, 1657, Прадо, Мадрид) частный эпизод придворного быта (на первом плане – инфанта Маргарита в окружении фрейлин и карликов, рядом – сам художник за исполнением портрета испанской королевской четы, отраженной в зеркале в глубине зала), изображенный в смелом пространственном развороте, предстает как один из моментов общего течения жизни во всей сложности ее взаимосвязанных и изменчивых проявлений. Пленительная красота и живописное многообразие реальности воплотились в серо-жемчужном колорите картины с нанесенными свободными ударами кисти голубыми, розовыми, темно-серыми, коричневатыми прозрачными мазками.</p><p>В ином, более мажорном колористическом ключе написаны “Пряхи” (1657, Прадо, Мадрид), сцена в королевской мастерской ковров с фигурами прях на первом плане и ярко освещенным солнечным светом помещением в глубине композиции, где придворные дамы осматривают готовый ковер, изображающий миф об Арахне - ткачихе, превзошедшей в своем мастерстве богиню Афину. Контрасты освещения, “двуслойное” пространственное построение композиции, своего рода золотая пыль, окутывающая фигуры прях, создают в картине особую атмосферу общего для всех персонажей чувства, объединяющую в себе все их движения, жесты, душевные импульсы.</p><p>В поздних произведениях Веласкеса с наибольшей полнотой сказались особенности его творческого метода: глубокое постижение жизни во всем богатстве и противоречивости ее проявлений, целостность ее образно-пластического воплощения, единство всех элементов художественной формы. Живописец Диего Веласкес писал без предварительных набросков, прямо на холсте, органично соединяя непосредственные впечатления от натуры со строгой продуманностью композиции, достигая впечатления, казалось бы, вольной импровизации и вместе с тем широкого обобщения. Творчество художника Веласкеса является вершиной испанской живописи XVII века и одним из ярчайших явлений мирового искусства.</p>",
			"en": "<p>Diego Rodríguez de Silva y Velázquez was a Spanish painter who was the leading artist in the court of King Philip IV and one of the most important painters of the Spanish Golden Age. He was an individualistic artist of the contemporary Baroque period, important as a portrait artist. In addition to numerous renditions of scenes of historical and cultural significance, he painted scores of portraits of the Spanish royal family, other notable European figures, and commoners, culminating in the production of his masterpiece Las Meninas (1656)..</p><p>From the first quarter of the nineteenth century, Velázquez's artwork was a model for the realist and impressionist painters, in particular Édouard Manet. Since that time, famous modern artists, including Pablo Picasso, Salvador Dalí and Francis Bacon, have paid tribute to Velázquez by recreating several of his most famous works.</p><p>Spain's celebration of the 400th anniversary of Velázquez's birth included major exhibitions of his work at the Prado Museum, as well as a renewed search for his tomb. International media covered the dig, which began April 30, 1999, at the Plaza de Ramales, one block from the Royal Palace, because that is where the medieval Church of San Juan stood until it was wrecked during the last century. In early 2000, The Telegraph announced that the search for Velázquez's body would be abandoned: <i>A CAR park is to be built over what is widely believed to be the site of the tomb of Velázquez, one of Spain's greatest artists, after the authorities abandoned attempts to find his body...thought to have been buried in Madrid at the Iglesia de San Juan Bautista. For 18 months the authorities have been excavating the site of the church which is buried under a residential area. But now they have bowed to residents' demands for underground parking.</i></p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Diego_Velazquez.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Веласкес,_Диего",
				"en": "http://en.wikipedia.org/wiki/Diego_Velázquez",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 128
	},
	{
		"id": 47,
		"name": "Vasily Vereshchagin",
		"years": "1842 - 1904",
		"genre": ["Realism"],
		"nationality": ["Russian"],
		"bio": {
			"ru": "<p>Верещагин Василий Васильевич (Vereshchagin Vasily), русский художник, мастер батальной картины. Родился в Череповце 14 (26) октября 1842 в семье помещика. В 1850–1860 учился в петербургском Кадетском корпусе, окончив его в чине гардемарина. Плавал в 1858–1859 на фрегате «Камчатка» и других кораблях в Данию, Францию, Англию. В 1860 Верещагин поступил в петербургскую Академию художеств, но оставил ее в 1863 году неудовлетворенный системой преподавания. Посещал мастерскую Жана Леона Жерома в парижской Школе изящных искусств (1864).</p><p>Всю жизнь Верещагин был неутомимым путешественником. Стремясь (по его собственным словам) «учиться на живой летописи истории мира», ездил по России, на Кавказ, в Крым, на Дунай, в Западную Европу, дважды побывал в Туркестане (1867–1868, 1869–1870), участвуя в колониальных походах русских войск, два раза – в Индии (1874–1876, 1882). В 1877–1878 участвовал в русско-турецкой войне на Балканах. Много путешествовал, в 1884 посетил Сирию и Палестину, в 1888–1902 США, в 1901 Филиппины, в 1902 Кубу, в 1903 Японию. Впечатления от поездок воплощались в больших циклах этюдов и картин. В батальных картинах Верещагина публицистически остро, с жестким реализмом раскрывается изнанка войны.</p><p>Хотя его знаменитая «туркестанская серия» имеет вполне определенную имперски - пропагандистскую направленность, в картинах над победителями и побежденными всюду тяготеет чувство трагической обреченности, подчеркнутое тусклым желтовато - коричневым, воистину «пустынным» колоритом. Знаменитым символом всей серии стала картина 'Апофеоз войны' (1870–1871, Третьяковская галерея), изображающая груду черепов в пустыне; на раме надпись: «Посвящается всем великим завоевателям: прошедшим, настоящим и будущим».</p><p>«Туркестанской» серии картин Верещагина не уступает «балканская». В ней художник, напротив, бросает прямой вызов официальной панславистской пропаганде, напоминая о фатальных просчетах командования и страшной цене, которую заплатили русские за освобождение болгар от османского ига. Особенно впечатляет полотно 'Побежденные. Панихида' (1878–1879, Третьяковская галерея), где под пасмурным небом расстилается целое поле солдатских трупов, присыпанных лишь тонким слоем земли. Широкую известность завоевала также его серия 'Наполеон в России' (1887–1900). Художник Верещагин был и одаренным литератором, автором книги 'На войне в Азии и Европе. Воспоминания' (1894); большой интерес представляют также 'Избранные письма' художника Верещагина (переизданы в 1981).</p><p>Верещагин погиб во время русско-японской войны, 31 марта (13 апреля) 1904, при взрыве броненосца «Петропавловск» на рейде Порт-Артура.</p>",
			"en": "<p>Vasily Vasilyevich Vereshchagin was one of the most famous Russian war artists and one of the first Russian artists to be widely recognized abroad. The graphic nature of his realist scenes led many of them to never be printed or exhibited.</p><p>Vereshchagin graduated first in the list at the naval school, but left the service immediately to begin the study of drawing in earnest. He won a medal two years later, in 1863, from the St Petersburg Academy for his Ulysses Slaying the Suitors. In 1864 he proceeded to Paris, where he studied under Jean-Léon Gérôme, though he dissented widely from his master's methods.</p><p>In the Paris Salon of 1866 he exhibited a drawing of Dukhobors chanting their Psalms. In the next year he was invited to accompany General Konstantin Kaufman's expedition to Turkestan. He was granted the rank of ensign. His heroism at the siege of Samarkand from June 2–8, 1868 resulted an award of the Cross of St George (4th class). He was an indefatigable traveler, returning to St. Petersburg in late 1868, to Paris in 1869, back to St. Petersburg later in the year, and then back to Turkestan at the end 1869 via Siberia. In 1871, he established an atelier in Munich, and made a solo exhibition of his works at the Crystal Palace in London in 1873. He made another exhibition of his works in St. Petersburg in 1874, where two of his paintings, namely The Apotheosis of War, dedicated <i>to all conquerors, past, present and to come,</i> and Left Behind, the picture of a dying soldier deserted by his fellows, were denied a showing on the grounds that they portrayed the Russian military in a poor light. In late 1874, he departed for an extensive tour of the Himalayas, India and Tibet, spending over two years in travel. He returned to Paris in late 1876.</p><p>After the Russo–Turkish war, Vereshchagin settled at Munich, where he produced his war pictures so rapidly that he was freely accused of employing assistants. The sensational subjects of his pictures, and their didactic aim, the promotion of peace by a representation of the horrors of war, attracted a large section of the public not usually interested in art to the series of exhibitions of his pictures in Paris in 1881 and subsequently in London, Berlin, Dresden, Vienna and other cities.</p><p>By the late 19th century Vereshchagin had gained popularity not only in Russia, but also abroad and his name never left the pages of the European and American press. From his earliest works, unlike most contemporary battle pieces depicting war as a kind of parade, Vereshchagin graphically depicted the horrors of war.I loved the sun all my life, and wanted to paint sunshine. When I happened to see warfare and say what I thought about it, I rejoiced that I would be able to devote myself to the sun once again. But the fury of war continued to pursue me, Vereshchagin wrote. One day, in 1882, Vereshchagin’s exhibition in Berlin was visited by German Field Marshal Helmuth von Moltke the Elder. Vereshchagin brought Moltke to his painting The Apotheosis of War. The picture evoked a sort of confusion in the Field Marshal. After his visit to the exhibition, Moltke issued an order forbidding German soldiers to visit it. The Austrian war minister did the same. He also declined the artist's offer to let Austrian officers see his pictures at the 1881 exhibition in Vienna free of charge.</p><p>In Russia a ban on exhibitions of Vereshchagin’s work was also enforced, as well as a ban on reproductions of them in books and periodicals amidst accusations of slandering the Russian army. The artist took these unjust accusations badly and burned three of his paintings, The Forgotten Soldier, They Have Encircled, and Pursue and They Entered.</p><p><Vereshchagin was in the Far East during the First Sino-Japanese War of 1894–1895, and was with the Russian troops in Manchuria during the Boxer Rebellion of 1900. In 1901, he visited the Philippines, in 1902 the United States and Cuba, and in 1903, Japan. During the Russo-Japanese War, he was invited by Admiral Stepan Makarov to join him aboard Makarov's flagship, Petropavlovsk. On April 13, 1904, Petropavlovsk struck two mines while returning to Port Arthur and sank, taking down with it most of the crew, including both Admiral Makarov and Vereshchagin. Vereshchagin's last work, a picture of a council of war presided over by Admiral Makarov, was recovered almost undamaged./p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Vasily_Vereshchagin.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Верещагин,_Василий_Васильевич",
				"en": "http://en.wikipedia.org/wiki/Vasily_Vereshchagin",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 181
	},
	{
		"id": 48,
		"name": "Isaac Levitan",
		"years": "1860 - 1900",
		"genre": ["Realism"],
		"nationality": ["Russian", "Jewish"],
		"bio": {
			"ru": "<p>Левитан Исаак Ильич (Isaak Levitan,), русский художник. Родился в Кибартах (ныне Кибартай, Литва) 18 (30) августа 1860 в семье железнодорожного служащего. В 1873 поступил в Московское училище живописи, ваяния и зодчества, где наибольшее влияние на него оказали В.Д.Поленов и А.К.Саврасов; окончил училище в 1885. Жил преимущественно в Москве. Работал также в Останкине (1880–1883), в различных местах Московской и Тверской губерний, в Крыму (1886, 1899), на Волге (1887–1890).</p><p>Был членом «Товарищества передвижников». «Пейзажи настроения» Левитана содержат особую психологическую насыщенность, отражая все грани человеческой души. Восприняв новации импрессионизма, он, тем не менее, никогда не отдавался чистой, радостной игре света и цвета, пребывая в кругу своих лиричных образов. Уже ранние работы художника удивительно лиричны ('Осенний день. Сокольники', 1879, 'Мостик. Саввинская слобода', 1883). Зрелый период Левитана как мастера пейзажа, умеющего превратить простой мотив в архитипический образ России, открывается светлой картиной 'Березовая роща' (1885–1889). Та же поэтика тонкого образного обобщения одухотворяет произведения «волжского периода» ('Вечер на Волге', 1888; 'Вечер. Золотой Плес', 1889; 'После дождя. Плес', 1889; 'Свежий ветер. Волга', 1891–1895).</p><p>Левитан создает шедевры «церковного пейзажа», где здания храмов вносят в природу умиротворение ('Вечерний звон', 1892, там же) или, напротив, скорбное чувство бренности всего земного ('Над вечным покоем', 1893–1894, 'У омута', 1892, либо в знаменитой 'Владимирке', 1892, где на дороге, по которой конвоировали арестантов в Сибирь, видна лишь крошечная фигурка странника близ придорожной иконки. Позднее краски художника обретают все более мажорное звучание ('Март', 1895; 'Золотая осень', 1895; 'Весна – большая вода', 1897); с другой стороны, его все более увлекают мотивы вечера, сумерек, летней ночи. Последняя, неоконченная картина Левитана ('Озеро. Русь', 1900, Русский музей) является – вопреки смертельной болезни – едва ли не самым радостным его произведением.</p><p>Умер Левитан в Москве 22 июля (4 августа) 1900. В Плесе существует дом-музей Левитана.</p>",
			"en": "<p>Isaac Ilyich Levitan  was a classical Russian landscape painter who advanced the genre of the <i>mood landscape.</i> Isaac Levitan was born in a shtetl of Wirballen, Augustów Governorate in Congress Poland, a part of the Russian Empire (present-day Lithuania) into a poor but educated Jewish family. In September 1873, Isaac Levitan entered the Moscow School of Painting, Sculpture and Architecture where his older brother Avel had already studied for two years. After a year in the copying class Isaac transferred into a naturalistic class, and soon thereafter into a landscape class. Levitan's teachers were the famous Alexei Savrasov, Vasily Perov and Vasily Polenov.</p><p>In 1877, Isaac Levitan's works were first publicly exhibited and earned favorable recognition from the press. After Alexander Soloviev's assassination attempt on Alexander II, in May 1879, mass deportations of Jews from big cities of the Russian Empire forced the family to move to the suburb of Saltykovka, but in the fall officials responded to pressure from art devotees, and Levitan was allowed to return. In 1880 his painting <i>Осенний день. Сокольники (Autumn day. Sokolniki)</i> was bought by famous philanthropist and art collector Pavel Mikhailovich Tretyakov.</p><p>In the early 1880s Levitan collaborated with the Chekhov brothers on the illustrated magazine <i>Moscow</i> and illustrated the M. Fabritsius edition <i>Kremlin</i>. Together with Korovin in 1885-1886 he painted scenery for performances of the Private Russian opera of Savva Mamontov. In the 1880s he participated in the drawing and watercolor gatherings at Polenov’s house.</p><p>In 1897, already world-famous, he was elected to the Imperial Academy of Arts and in 1898 he was named the head of the Landscape Studio at his alma mater. Levitan spent the last year of his life at Chekhov’s home in Crimea. In spite of the effects of a terminal illness, his last works are increasingly filled with light. They reflect tranquility and the eternal beauty of Russian nature. He was buried in Dorogomilovo Jewish cemetery. In April 1941 Levitan's remains were moved to the Novodevichy Cemetery, next to Chekhov's necropolis. Levitan did not have a family or children.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Isaac_Levitan.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Левитан,_Исаак_Ильич",
				"en": "http://en.wikipedia.org/wiki/Isaac_Levitan",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 86
	},
	{
		"id": 49,
		"name": "Henri Matisse",
		"years": "1869 - 1954",
		"genre": ["Impressionism", "Post-Impressionism"],
		"nationality": ["French"],
		"bio": {
			"ru": "<p>Анри Матисс (Henri Matisse), выдающийся французский художник. Родился 31 декабря 1869 в Ле-Като на севере Франции. В 1892 приехал в Париж, где учился в Академии Жюлиана, а позже у Гюстава Моро. Поиски непосредственной передачи ощущений при помощи интенсивного цвета, упрощенного рисунка и плоскостного изображения отразились в произведениях, представленных им на выставке «диких» (фовистов) на Осеннем Салоне 1905. В Салоне он выставляет ряд работ, и среди них «Женщину в зеленой шляпе». Произведения эти, произведшие скандальный фурор, положили начало фовизму. В это время Матисс открывает для себя скульптуру народов Африки, начинает ее коллекционировать, интересуется классической японской ксилографией и арабским декоративным искусством. К 1906 завершает работу над композицией «Радость жизни», сюжет которой навеян поэмой «Послеобеденный отдых фавна» С. Малларме: в сюжете сочетаются мотивы пасторали и вакханалии. Появляются первые литографии, гравюры на дереве, керамика. В графике Матисса арабеск сочетается с тонкой передачей чувственного обаяния натуры. В 1907 Матисс путешествует по Италии (Венеция, Падуя, Флоренция, Сиена). В «Заметках живописца» (1908) он формулирует свои художественные принципы, говорит о необходимости «эмоций за счет простых средств». В мастерской Анри Матисса появляются ученики из разных стран.</p><p>В 1908 С. И. Щукин заказывает художнику три декоративных панно для собственного дома в Москве. В панно «Танец» (1910, Эрмитаж) представлен экстатический танец, навеянный впечатлениями от русских сезонов С. Дягилева, выступлений Айседоры Дункан и греческой вазовой живописи. В «Музыке» Матисс представляет изолированные фигуры, поющие и играющие на различных инструментах. Третье панно — «Купание, или медитация» — осталось лишь в набросках. Выставленные в парижском Салоне перед отправкой их в Россию, композиции Матисса вызвали скандал эпатирующей обнаженностью персонажей и неожиданностью трактовки образов. В связи с установкой панно Матисс посетил Москву, дал несколько интервью для газет и высказал восхищение древнерусской живописью. В картине «Красные рыбки» (1911, Музей изобразительных искусств, Москва), используя приемы эллипсообразной и обратной перспектив, перекличку тонов и контраст зеленого и красного, Матисс создает эффект кружения рыбок в стеклянном сосуде. В зимние месяцы с 1911 по 1913 художник посещает Танжер (Марокко), создает марокканский триптих «Вид из окна в Танжере», «Зора на террасе» и «Вход в казба» (1912, там же), приобретенные И. А. Морозовым. Мастерски переданы эффекты голубых теней и ослепляющих лучей солнца.</p><p>После Первой мировой войны Матисс преимущественно живет в Ницце. В 1920 исполняет эскизы декораций и костюмов для балета И. Стравинского «Соловей» (хореография Л. Мясина, постановка С. Дягилева). Под влиянием живописи О. Ренуара, с которым Матисс знакомится в Ницце, он увлекается изображением натурщиц в легких одеяниях (цикл «одалисок»); интересуется мастерами рококо. В 1930 едет на Таити, работает над двумя вариантами декоративных панно для фонда Барнеса в Мерионе (Филадельфия), которые должны были быть помещены над высокими окнами главного выставочного зала. Тема панно — танец. Восемь фигур представлены на фоне, состоящем из розовых и синих полос, сами фигуры серовато-розового тона. Композиционное решение нарочито плоскостно, декоративно.</p><p>В процессе создания эскизов Матисс начал использовать технику вырезок из цветной бумаги («декупаж»), которой широко пользовался в дальнейшем (например, в серии «Джаз», 1944-47, воспроизведенной впоследствии в литографиях). Перед Второй мировой войной Матисс иллюстрирует книги, выпускаемые малыми тиражами (гравюра или литография). Для дягилевских постановок делает эскизы декораций балета «Красное и черное» на музыку Д. Шостаковича. Много и плодотворно работает с пластикой, продолжая традиции А. Бари, О. Родена, Э. Дега и А. Э. Бурделя. Стиль его живописи заметно упрощается; рисунок как основа композиции выявляется все определеннее («Румынская блуза», 1940, Центр современного искусства им. Ж. Помпиду). В 1948-53 по заказу доминиканского ордена работает над сооружением и декорацией «Капеллы четок» в Вансе. Над керамической крышей, изображающей небо с облаками, парит ажурный крест; над входом в капеллу — керамическое панно с изображением св. Доминика и Девы Марии. Другие панно, исполненные по эскизам мастера, помещены в интерьере; художник крайне скуп на детали, беспокойные черные линии драматично повествуют о Страшном Суде (западная стена капеллы); рядом с алтарем изображение самого Доминика. Эта последняя работа Матисса, которой он придавал большое значение, — синтез многих предшествующих его исканий. Матисс работал в разных жанрах и видах искусства и использовал разнообразные техники. В пластике, как и в графике, он предпочитал работать сериями (например, четыре варианта рельефа «Стоящая спиной к зрителю», 1930-40, Центр современного искусства им. Ж. Помпиду, Париж).</p><p>Мир Матисса — это мир танцев и пасторалей, музыки и музыкальных инструментов, красивых ваз, сочных плодов и оранжерейных растений, разнообразных сосудов, ковров и пестрых тканей, бронзовых статуэток и бесконечных видов из окна (любимый мотив художника). Стиль его отличается гибкостью линий, то прерывистых, то округлых, передающих разнообразные силуэты и очертания («Темы и вариации», 1941, уголь, перо), четко ритмизирующих его строго продуманные, большей частью уравновешенные композиции. Лаконизм рафинированных художественных средств, колористических гармоний, сочетающих то яркие контрастные созвучия, то равновесие локальных больших пятен и масс цвета, служат главной цели художника — передать наслаждение от чувственной красоты внешних форм.</p><p>Кроме того, Матисс испытал сильное влияние произведений исламского искусства, показанных на выставке в Мюнхене. Две зимы, проведенные художником в Марокко (1912 и 1913), обогатили его знанием восточных мотивов, а долгая жизнь на Ривьере способствовала развитию яркой палитры. В отличие от современного ему кубизма, творчество Матисса не было умозрительным, а основывалось на скрупулезном изучении натуры и законов живописи. Его полотна, изображающие женские фигуры, натюрморты и пейзажи, могут показаться незначительными по теме, однако являются результатом долгого изучения природных форм и их смелого упрощения. Матиссу удавалось гармонично выражать непосредственное эмоциональное ощущение действительности в самой строгой художественной форме. Прекрасный рисовальщик, Матисс был по преимуществу колористом, добивавшимся эффекта согласованного звучания в композиции многих интенсивных цветов. Умер Матисс 3 ноября 1954 года в Симье, близ Ниццы.</p>",
			"en": "<p>Henri-Émile-Benoît Matisse was a French artist, known for his use of colour and his fluid and original draughtsmanship. He was a draughtsman, printmaker, and sculptor, but is known primarily as a painter.</p><p> Matisse is commonly regarded, along with Pablo Picasso and Marcel Duchamp, as one of the three artists who helped to define the revolutionary developments in the plastic arts in the opening decades of the twentieth century, responsible for significant developments in painting and sculpture.</p><p> Although he was initially labelled a Fauve (wild beast), by the 1920s he was increasingly hailed as an upholder of the classical tradition in French painting.His mastery of the expressive language of colour and drawing, displayed in a body of work spanning over a half-century, won him recognition as a leading figure in modern art.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Henri_Matisse.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Матисс,_Анри",
				"en": "http://en.wikipedia.org/wiki/Henri_Matisse",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 186
	},
	{
		"id": 50,
		"name": "Jan van Eyck",
		"years": "1395 - 1441",
		"genre": ["Northern Renaissance"],
		"nationality": ["Flemish"],
		"bio": {
			"ru": "<p>Ван Эйк (van Eyck) Ян, нидерландский живописец. Один из зачинателей искусства Раннего Возрождения в Нидерландах, Ян ван Эйк в 1422–1424 работал над украшением графского замка в Гааге, в 1425 стал придворным художником бургундского герцога Филиппа Доброго, в 1427 посетил Испанию, в 1428–1429 – Португалию. Около 1430 года Ян ван Эйк поселился в Брюгге.</p><p>Крупнейшее произведение ван Эйка – знаменитый “Гентский алтарь”, начатый, согласно позднейшей надписи на внешних створках, старшим братом ван Эйка Хубертом (работал в 1420-х годах в Генте, умер около 1426) и законченный Яном в 1432. Ян ван Эйк – один из первых в Европе мастеров портрета, выделившегося в его творчестве в самостоятельный жанр. Погрудные, обычно изображающие модель в трехчетвертном повороте портреты ван Эйка (“Тимофей”, 1432, “Портрет мужчины в красном тюрбане”, 1433, – оба в Национальной галерее, Лондон; портрет жены художника Маргареты, 1439, Муниципальная художественная галерея, Брюгге) отличаются строгой простотой и отточенностью выразительных средств. Беспристрастно правдивая и тщательная передача облика человека подчинена в них зоркому и проницательному раскрытию главных особенностей его характера. Ян ван Эйк создал первый в европейской живописи парный портрет – проникнутое сложной символикой и в то же время интимно-лирическим чувством изображение купца Джованни Арнольфини с женой.</p><p>Проблема участия художника Хуберта ван Эйка в работе над алтарем остается открытой: по мнению большинства исследователей он мог лишь начать работу над центральной частью алтаря, но в целом произведение исполнено Яном ван Эйком. Несмотря на наличие в ряде сцен алтаря архаических, готических черт, “Гентский алтарь” открыл новую эпоху в развитии искусства Нидерландов. Сложная религиозная символика претворена в нем в конкретные, жизненно убедительные и осязаемые образы. С исключительным реализмом и неприкрашенной выразительностью изображены на внешних створках алтаря обнаженные фигуры Адама и Евы. Фигуры, поющих и музицирующих ангелов на боковых створках, отличаются убедительной пластической осязаемостью. Тонкой поэтичностью, мастерством передачи пространства и световоздушной среды выделяются пейзажные фоны в сцене “Поклонение Агнцу” в центре алтаря.</p><p>Вершина творчества ван Эйка – монументальные алтарные композиции “Мадонна канцлера Ролена” (около 1436, Лувр, Париж) и “Мадонна каноника ван дер Пале” (1436, Муниципальная художественная галерея, Брюгге). Развивая и обогащая достижения своих предшественников, прежде всего Р.Кампена, он превращает традиционную сцену поклонения Богоматери в величественное и красочное изображение зримого, реального мира, исполненное спокойной созерцательности. В равной мере художника интересуют и человек во всей его неповторимой индивидуальности, и окружающий его мир. В его композициях на равных выступают и образуют гармоничное единство портретные изображения, пейзаж, интерьер, натюрморт. Чрезвычайная тщательность и вместе с тем обобщенность живописи выявляют самоценность и красоту каждого предмета, обретающего в творчестве ван Эйка реальный вес и объем, характерную фактуру поверхности. Детали и целое находятся в органической взаимосвязи: архитектурные элементы, предметы обстановки, цветущие растения, роскошные ткани, украшенные драгоценными камнями, как бы воплощают в себе частицы бесконечной красоты мироздания: исполненный света и воздуха панорамный пейзаж в “Мадонне канцлера Ролена” воспринимается как собирательный образ Вселенной.</p><p>Искусство ван Эйка проникнуто глубоким пониманием сущего как логического воплощения Божьего промысла, выражением чего стало строгое, продуманное и вместе с тем жизненно естественное построение композиции, полное тонкого ощущения пространственной соразмерности. Решение вставших перед ван Эйком творческих проблем требовало разработки новых средств художественной выразительности. Одним из первых он освоил пластические возможности масляной живописи , используя тонкие, просвечивающие слои краски, положенные один поверх другого (фламандская манера многослойного прозрачного письма). Этот живописный метод позволил ван Эйку достигать исключительной глубины, богатства и светосилы цвета, тонкости светотеневых и красочных переходов. Звучные, интенсивные, чистые тона красок в картинах ван Эйка, пронизанные воздухом и светом, образуют единое гармоническое целое.</p><p>Творчество художника ван Эйка, ярчайшим образом воссоздававшее красоту и живое многообразие мироздания, в значительной степени определило пути дальнейшего развития нидерландской живописи, круг ее проблем и интересов. Мощное воздействие искусства ван Эйка испытали не только нидерландские, но и итальянские мастера Возрождения (Антонелло да Мессина).</p>",
			"en": "<p>Jan van Eyck  was an Early Netherlandish painter active in Bruges and one of the most significant Northern Renaissance artists of the 15th century. Outside of the Ghent Altarpiece completed with his brother Hubert van Eyck, and the illuminated miniatures ascribed to Hand G—believed to be Jan—of the Turin-Milan Hours, only about 25 surviving works are confidently attributed to him, all dated between 1432 and 1439. Ten, including the Ghent altarpiece, are dated and signed with a variation of his motto, ALS IK KAN (As I (Eyck) can),always written in Greek characters, and transliterate as a pun on his name.</p><p>Little is known of his early life. The few surviving records indicate that he was born c. 1380–90, most likely in Maaseik. He took employment as painter and Valet de chambre with John of Bavaria-Straubing, ruler of Holland, in the Hague around 1422, when he was already a master painter with workshop assistants. After John's death in 1425 he was employed as court painter to Philip the Good, Duke of Burgundy, in Lille, where he remained until 1429 after which he moved to Bruges, working for Philip until his death there in 1441. It is known that he was highly regarded by Philip, and undertook a number of diplomatic visits abroad on his behalf, including to Lisbon in 1428 to arrange the Duke's marriage contract with Isabella of Portugal.</p><p>Van Eyck painted both secular and religious subject matter, including commissioned portraits, donor portraits (with the donor kneeling before a seated Virgin Mary) and both large and portable altarpieces. He worked on panel, either as single panels, diptych, triptychs, or polyptychs. He was well paid by Philip, who sought that the painter was secure financially and thus had artistic freedom and could paint <i>whenever he pleased</i>. His work comes from the International Gothic style, but he soon eclipsed it, in part through a greater emphasis on naturalism and realism. Van Eyck utilised a new level of virtuosity, mainly through the use of oil as a medium; the fact that oil dries so slowly allowed him more time and more scope for blending and mixing layers of different pigments. He was highly influential and his techniques and style were quickly adopted and refined by Robert Campin and Rogier van der Weyden and later generations of Early Netherlandish painters.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Jan_van_Eyck.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Эйк,_Ян_ван",
				"en": "http://en.wikipedia.org/wiki/Jan_van_Eyck",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 81
	},
	{
		"id": 51,
		"name": "John Waterhouse",
		"years": "1849 - 1917",
		"genre": ["Romanticism"],
		"nationality": ["British"],
		"bio": {
			"ru": "<p>Уотерхаус Джон Уильям (Waterhouse John William), английский художник. Джон Уильям Уотерхаус родился в 1849 в Риме, в семье художника. В 1850-х семья вернулась в Англию. В начале 1870-х годов перед поступлением в Королевскую академическую школу Уотерхаус помогал отцу в его студии. Живописи и скульптуре Уотерхаус учился под руководством художника Пикерсгила. Ранние работы Уотерхауса на классические темы в духе сэра Лоренса Альмы-Тадема и Фредерика Лейтона, были показаны в Королевской Академии искусства, Обществе британских художников и галерее живописи Дадли.</p><p>В конце 1870-х и 1880-х Уотерхаус совершил несколько поездок в Италию. После брака с Эстер Кенуорти в 1883 Уотерхаус обосновался в Студиях Примроз Хилл. Там же проживали художники Артур Ракхэм и Патрик Колфилд. В 1884 Уотерхаус добивается признания, его картина 'Леди из Шалот' (1884, Галерея Тэйт, Лондон) была приобретена сэром Генри Тэйт, после выставки в Академии. Живописные работы этого периода показывают рост интереса Уотерхауса к темам связанным с прерафаэлитами, особенно к созданию образов трагических или властных роковых женщин ('Цирцея Инвидиоза', 1892; 'Клеопатра', 1890; 'Цирцея, завлекающая Одиссея', 1891 и другие картины), а также к живописи пленэра. В 1885 году Джон Уильям Уотерхаус был избран в Королевскую Академию, академиком стал в 1895. Дипломной работой Уотерхауса стала картина 'Нереида' (доработана мастером, окончательный вариант картины в 1901).</p><p>В середине 1880-х Уотерхаус много выставляется в галерее Гросвенор, Новой галерее, а также на провинциальных выставках в Бирмингеме, Ливерпуле и Манчестере. Картины этого периода широко показывались в Англии и за границей как часть международного движения символистов. В начале 1890-х Уотерхаус начинает писать портреты. С 1900-х годов принимает активное участие в различных общественных организациях художников и деятелей искусств Англии. Живопись художника  часто относят к прерафаэлитам, хотя Уотерхаус формально и не принадлежал к этому течению.</p><p>За свою жизнь Уотерхаус написал более двухсот картин на мифологические, исторические и литературные сюжеты. Уотерхаус разделял интерес прерафаэлитов к сюжетам, заимствованным из поэзии и мифологии. Он безошибочно передавал драматизм момента, демонстрировал блестящее владение композицией и живописной техникой. Однако своей непреходящей популярностью художник обязан более всего очарованию его задумчивых моделей (считается, что при написании полотна «Леди из Шалот» моделью была жена художника).</p><p>В 1908-1914 годах Уотерхаус создает ряд картин, основанных на литературных и мифологических сюжетах ('Миранда', 'Тристан и Изольда', 'Психея', 'Персефона' и другие). В этих картинах художник пишет свою любимую модель, недавно идентифицированную исследователями творчества Уотерхауса, Кеном и Кэти Бейкр, как мисс Мюриэл Фостер. Очень немного известно о частной жизни Уотерхауса - только несколько писем сохранилось до нашего времени и, собственно, много лет персоналии его моделей оставались тайной. Из воспоминаний современников также известно, что Мэри Ллойд, модель шедевра лорда Лейтона 'Пылающий июнь', позировала и для Уотерхауса. Несмотря на страдания от наступившей болезни, Уотерхаус в течение последних десяти лет жизни продолжал активно заниматься живописью вплоть до своей смерти от рака в 1917 году. Жена художника Эстер Уотерхаус пережила мужа на 27 лет, скончавшись в частном санатории в 1944.</p>",
			"en": "<p>John William Waterhouse was an English painter known for working in the Pre-Raphaelite style. He worked several decades after the breakup of the Pre-Raphaelite Brotherhood, which had seen its heyday in the mid-nineteenth century, leading him to have gained the moniker of <i>the modern Pre-Raphaelite</i>. Borrowing stylistic influences not only from the earlier Pre-Raphaelites but also from his contemporaries, the Impressionists, his artworks were known for their depictions of women from both ancient Greek mythology and Arthurian legend.</p><p>Born in Italy to English parents who were both painters, he later moved to London, where he enrolled in the Royal Academy of Art. He soon began exhibiting at their annual summer exhibitions, focusing on the creation of large canvas works depicting scenes from the daily life and mythology of ancient Greece. Later on in his career he came to embrace the Pre-Raphaelite style of painting despite the fact that it had gone out of fashion in the British art scene several decades before.</p><p>Although not as well known as earlier Pre-Raphaelite artists such as Dante Gabriel Rossetti, John Everett Millais and William Holman Hunt, Waterhouse's work is currently displayed at several major British art galleries, and the Royal Academy of Art organised a major retrospective of his work in 2009.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "John_William_Waterhouse.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Уотерхаус,_Джон_Уильям",
				"en": "http://en.wikipedia.org/wiki/John_William_Waterhouse",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 168
	},
	{
		"id": 52,
		"name": "Egon Schiele",
		"years": "1890 - 1918",
		"genre": ["Expressionism"],
		"nationality": ["Austrian"],
		"bio": {
			"ru": "<p>Шиле (Schiele) Эгон, австрийский художник, один из лучших мастеров европейского модерна. Учился в Венской Академии изящных искусств (1906-1909), где под влиянием Густава Климта обратился к эротической теме. Среди работ Шиле преобладают портреты и, после знакомства с творчеством Ван Гога в 1913, пейзажи. Живопись и графика Эгона Шиле, отмеченная нервными цветовыми контрастами, изощренно-гибким рисунком и драматическим эротизмом, являет смесь модерна и экспрессионизма.</p><p>Находясь под сильным влиянием психоанализа Зигмунда Фрейда, Шиле в своем творчестве давал волю собственным комплексам и сомнениям. Художественная карьера Эгона Шиле была короткой, но плодотворной, а многие произведения носили откровенно сексуальный характер. Это послужило даже причиной тюремного заключения художника за «создание аморальных рисунков».</p><p>Благодаря своему острому нервному стилю Шиле считается одним из важнейших представителей экспрессионизма, хотя он никогда формально не принадлежал к этому движению. Шиле умер совсем молодым от гриппа, в тот момент, когда его творчество получило признание.</p>",
			"en": "<p>Egon Schiele was an Austrian painter. A protégé of Gustav Klimt, Schiele was a major figurative painter of the early 20th century. His work is noted for its intensity and its raw sexuality, and the many self-portraits the artist produced, including naked self-portraits. The twisted body shapes and the expressive line that characterize Schiele's paintings and drawings mark the artist as an early exponent of Expressionism.</p><p>In his early years, Schiele was strongly influenced by Klimt and Kokoschka. Although imitations of their styles, particularly with the former, are noticeably visible in Schiele's first works, he soon evolved into his own distinctive style.Schiele's earliest works between 1907 and 1909 contain strong similarities with those of Klimt, as well as influences from Art Nouveau. In 1910, Schiele began experimenting with nudes and within a year a definitive style featuring emaciated, sickly-coloured figures, often with strong sexual overtones. Schiele also began painting and drawing children.</p><p>Progressively, Schiele's work grew more complex and thematic, and after his imprisonment in 1912 he dealt with themes such as death and rebirth, although female nudes remained his main output. During the war Schiele's paintings became larger and more detailed, when he had the time to produce them. His military service however gave him limited time, and much of his output consisted of linear drawings of scenery and military officers. Around this time Schiele also began experimenting with the theme of motherhood and family. His wife Edith was the model for most of his female figures, but during the war due to circumstance, many of his sitters were male. Since 1915, Schiele's female nudes had become fuller in figure, but many were deliberately illustrated with a lifeless doll-like appearance. Towards the end of his life, Schiele drew many natural and architectural subjects. His last few drawings consisted of female nudes, some in masturbatory poses.</p><p>Some view Schiele's work as being grotesque, erotic, pornographic, or disturbing, focusing on sex, death, and discovery. He focused on portraits of others as well as himself. In his later years, while he still worked often with nudes, they were done in a more realist fashion. He also painted tributes to Van Gogh's Sunflowers as well as landscapes and still lifes.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Egon_Schiele.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Шиле,_Эгон",
				"en": "http://en.wikipedia.org/wiki/Egon_Schiele",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 244
	},
	{
		"id": 53,
		"name": "Edgar Degas",
		"years": "1834 - 1917",
		"genre": ["Impressionism"],
		"nationality": ["French"],
		"bio": {
			"ru": "<p>Дега Эдгар (Degas Edgar), французский живописец, график и скульптор. Учился в парижской Школе изящных искусств (1855–1856), в 1854–1859 ездил в Италию изучать искусство Раннего Возрождения побывал также в США (1872–1873) и Испании. В юности испытал влияние Энгра, усилившее пристрастие Дега к выявлению линейной основы живописной формы. Начав со строгих по композиции исторических картин и портретов (“Семейство Беллелли”, около 1858, Музей Орсе, Париж), Дега в 1870-е годы сблизился с представителями импрессионизма, обратился к изображению современной городской жизни – улиц, кафе, театральных представлений (“Площадь Согласия”, около 1875; “Абсент”, 1876, Музей Орсе, Париж).</p><p>Во многих произведениях Дега показывает характерность поведения и облика людей, порожденную особенностями их быта, выявляет механизм профессионального жеста, позы, движения человека, его пластическую красоту (“Гладильщицы”, 1884, Музей д'Орсе). В утверждении эстетической значимости  жизни людей, их обыденных занятий сказывается своеобразный гуманизм творчества Дега. Искусству Дега присуще соединение прекрасного, порой фантастического, и прозаического: передавая во многих балетных сценах праздничный дух театра (“Звезда”, пастель, 1878, Музей Орсе, Париж).</p><p>Художник, как трезвый и тонкий наблюдатель, одновременно фиксирует скрывающийся за нарядной зрелищностью утомительный будничный труд (“Экзамен танца”, пастель, 1880, частное собрание, Нью-Йорк). Произведения Дега с их строго выверенной и одновременно динамичной, часто асимметричной композицией, точным гибким рисунком, неожиданными ракурсами, активным взаимодействием фигуры и пространства сочетают кажущиеся непредвзятость и случайность мотива и архитектоники картины с тщательной продуманностью и расчетом. Поздние работы Дега выделяются интенсивностью и богатством колорита, которые дополняются эффектами искусственного освещения, укрупненными, почти плоскостными формами, стесненностью пространства, придающей им напряженно-драматический характер (“Голубые танцовщицы”, пастель, Государственный музей изобразительных искусств, Москва). С конца 1880-х годов Дега много занимался скульптурой, добиваясь выразительности в передаче мгновенного движения (“Танцовщица”, бронза, Музей Вальраф-Рихарц-Людвиг, Кельн).</p>",
			"en": "<p>Edgar Degas  was a French artist famous for his paintings, sculptures, prints, and drawings.</p><p>He is especially identified with the subject of dance; more than half of his works depict dancers. He is regarded as one of the founders of Impressionism, although he rejected the term, preferring to be called a realist. He was a superb draftsman, and particularly masterly in depicting movement, as can be seen in his renditions of dancers, racecourse subjects and female nudes. His portraits are notable for their psychological complexity and for their portrayal of human isolation.</p><p>At the beginning of his career, he wanted to be a history painter, a calling for which he was well prepared by his rigorous academic training and close study of classic art. In his early thirties, he changed course, and by bringing the traditional methods of a history painter to bear on contemporary subject matter, he became a classical painter of modern life.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Edgar_Degas.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Дега,_Эдгар",
				"en": "http://en.wikipedia.org/wiki/Edgar_Degas",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 702
	},
	{
		"id": 54,
		"name": "Rembrandt",
		"years": "1606 - 1669",
		"genre": ["Baroque"],
		"nationality": ["Dutch"],
		"bio": {
			"ru": "<p>Рембрандт Харменс ван Рейн (Rembrandt Harmensz van Rijn), голландский живописец, рисовальщик и офортист. Творчество Рембрандта, проникнутое стремлением к глубоко философскому постижению жизни, внутреннего мира человека со всем богатством его душевных переживаний, знаменует собой вершину развития голландского искусства XVII века, один из пиков мировой художественной культуры. Художественное наследие Рембрандта отличается исключительным многообразием: он писал портреты, натюрморты, пейзажи, жанровые сцены, картины на исторические, библейские, мифологические темы, Рембрандт был непревзойденным мастером рисунка и офорта. После кратковременного обучения в Лейденском университете (1620) Рембрандт решил посвятить себя искусству и учился живописи у Я. ван Сваненбюрха в Лейдене (около 1620-1623) и П.Ластмана в Амстердаме (1623); в 1625-1631 работал в Лейдене.</p><p>Картины Рембрандта лейденского периода отмечены поисками творческой самостоятельности, хотя в них ещё заметно воздействие Ластмана и мастеров голландского караваджизма (“Принесение во храм”, около 1628-1629, Кунстхалле, Гамбург). В картинах “Апостол Павел” (около 1629-1630, национальный музей, Нюрнберг) и “Симеон во храме” (1631, Маурицхейс, Гаага) он впервые использовал светотень как средство усиления одухотворенности и эмоциональной выразительности образов. В эти же годы Рембрандт упорно работал над портретом, изучая мимику человеческого лица. В 1632 году Рембрандт переехал в Амстердам, где вскоре женился на богатой патрицианке Саскии ван Эйленбурх. 1630-е годы - период семейного счастья и огромного художественного успеха Рембрандта. Картина “Урок анатомии доктора Тюлпа” (1632, Маурицхёйс, Гаага), в которой художник новаторски разрешил проблему группового портрета, придав композиции жизненную непринужденность и объединив портретируемых единым действием, принесла Рембрандту широкую известность. В портретах, написанных по многочисленным заказам,  Рембрандт ван Рейн тщательно передавал черты лица, одежду, драгоценности (картина “Портрет бургграфа”, 1636, Дрезденская галерея).</p><p>Но более свободны и разнообразны по композиции автопортреты Рембрандта и портреты близких ему людей, в которых художник смело экспериментировал в поисках психологической выразительности (автопортрет, 1634, Лувр, Париж; “Улыбающаяся Саския”, 1633, Картинная галерея, Дрезден). Искания этого периода завершил знаменитый “Автопортрет с Саскией” или “Весёлое общество”; около 1635, Картинная галерея, Дрезден), смело порывающий с художественными канонами, выделяющийся живой непосредственностью композиции, свободной манерой живописи, мажорной, наполненной светом, красочной гаммой.</p><p>Библейские композиции 1630-х годов (“Жертвоприношение Авраама”, 1635, Государственный Эрмитаж, Санкт-Петербург) несут на себе печать воздействия живописи итальянского барокко, которое проявляется в несколько форсированной динамике композиции, остроте ракурсов, светотеневых контрастах. Особое место в творчестве Рембрандта 1630-х годов занимают мифологические сцены, в которых художник бросил смелый вызов классическим канонам и традициям (“Похищение Ганимеда”, 1635, Картинная галерея, Дрезден).</p><p>Ярким воплощением эстетических взглядов художника стала монументальная композиция “Даная” (1636-1647, Государственный Эрмитаж, Санкт-Петербург), в которой он как бы вступает в полемику с великими мастерами Возрождения: обнажённую фигуру Данаи, далекую от классических идеалов, он выполнил со смелой реалистической непосредственностью, а чувственно-телесной, идеальной красоте образов итальянских мастеров противопоставил красоту духовности и теплоты человеческого чувства. В этот же период Рембрандт много работал в технике офорта и гравюры (“Писающая женщина”, 1631; “Продавец крысиного яда”, 1632; “Странствующая пара”, 1634), создавал смелые и обобщенные по манере карандашные рисунки.</p><p>В 1640-х годах назревает конфликт между творчеством Рембрандта и ограниченными эстетическими запросами современного ему общества. Наглядно он проявился в 1642 году, когда картина “Ночной дозор” (Рейксмузеум, Амстердам) вызвала протесты заказчиков, не принявших основную идею мастера - вместо традиционного группового портрета он создал героически-приподнятую композицию со сценой выступления гильдии стрелков по сигналу тревоги, т.е. по существу историческую картину, пробуждающую воспоминания об освободительной борьбе голландского народа. Приток заказов Рембрандта сокращается, его жизненные обстоятельства омрачаются смертью Саскии. Творчество Рембрандта утрачивает внешнюю эффектность и присущие ему ранее ноты мажорности. Он пишет спокойные, исполненные теплоты и интимности библейские и жанровые сцены, раскрывая тонкие оттенки человеческих переживаний, чувства душевной, родственной близости (“Давид и Ионафан”, 1642, “Святое семейство”, 1645, - оба в Эрмитаже, Санкт-Петербург).</p><p>Все большее значение как в живописи, так и в графике Рембрандта приобретает тончайшая светотеневая игра, создающая особую, драматическую, эмоционально напряженную атмосферу (монументальный графический лист “Христос, исцеляющий больных” или “Лист в сто гульденов”, около 1642-1646; полный воздушной и световой динамики пейзаж “Три дерева”, офорт, 1643). 1650-е годы, наполненные для Рембрандта тяжкими жизненными испытаниями, открывают период творческой зрелости художника. Рембрандт все чаще обращается к жанру портрета, изображая наиболее близких ему людей (многочисленные портреты второй жены Рембрандта Хендрикье Стоффельс; “Портрет старухи”, 1654, Государственный Эрмитаж, Санкт-Петербург; “Сын Титус за чтением”, 1657, Музей истории искусств, Вена).</p><p>Все более художника привлекают образы простых людей, стариков, служащих воплощением жизненной мудрости и духовного богатства (так называемый “Портрет жены брата художника”, 1654, Государственный музей изобразительных искусств, Москва; “Портрет старика в красном”, 1652-1654, Эрмитаж, Санкт-Петербург). Рембрандт сосредоточивает внимание на лице и руках, выхваченных из темноты мягким рассеянным светом, едва уловимая мимика лица отражает сложное движение мыслей и чувств; то легкие, то пастозные мазки кисти создают переливающуюся красочными и светотеневыми оттенками поверхность картины.</p><p>В середине 1650-х годов Рембрандт обрел зрелое живописное мастерство. Стихии света и цвета, независимые и даже отчасти противоположные в ранних работах художника, теперь сливаются в единое взаимосвязанное целое. Горячая красно-коричневая, то вспыхивающая, то гаснущая трепетная масса светоносной краски усиливает эмоциональную выразительность произведений Рембрандта, как бы согревая их теплым человеческим чувством. В 1656 году Рембрандт был объявлен несостоятельным должником, все его имущество продано с аукциона. Он переселился в еврейский квартал Амстердама, где в крайне стесненных обстоятельствах провел остаток жизни. Созданные Рембрандтом в 1660-е годы библейские композиции подводят итог его размышлениям о смысле человеческой жизни. В эпизодах, выражающих столкновение темного и светлого в человеческой душе (“Ассур, Аман и Эсфирь”, 1660, ГМИИ, Москва; “Падение Амана” или “Давид и Урия”, 1665, Государственный Эрмитаж, Санкт-Петербург), насыщенная тёплая гамма, гибкая пастозная манера письма, напряженная игра тени и света, сложная фактура красочной поверхности служат раскрытию сложных коллизий и душевных переживаний, утверждению торжества добра над злом.</p><p>Суровым драматизмом и героикой проникнута историческая картина “Заговор Юлия Цивилиса” (“Заговор батавов”, 1661, сохранился фрагмент, Национальный музей, Стокгольм). В последний год жизни Рембрандт создал свой главный шедевр - монументальное полотно “Возвращение блудного сына” (около 1668-1669, Государственный Эрмитаж, Санкт-Петербург), воплотившее всю художественную и морально-этическую проблематику позднего творчества художника. С поразительным мастерством он воссоздает в нем целую гамму сложных и глубоких человеческих чувств, подчиняет художественные средства раскрытию красоты человеческого понимания, сострадания и прощения. Кульминационный момент перехода от напряжения чувств к разрешению страстей воплощен в скульптурно выразительных позах, скупых жестах, в эмоциональном строе колорита, ярко вспыхивающего в центре картины и гаснущего в затененном пространстве фона. Великий голландский живописец, рисовальщик и офортист Рембрандт ван Рейн скончался 4 октября 1669 года в Амстердаме. Влияние искусства Рембрандта было громадным. Оно сказалось на творчестве не только его непосредственных учеников, из которых ближе всех подошел к пониманию учителя Карел Фабрициус, но и на искусстве каждого более или менее значительного голландского художника. Глубочайшее воздействие оказало искусство Рембрандта на развитие всего мирового реалистического искусства впоследствии.</p>",
			"en": "<p>Rembrandt Harmenszoon van Rijn was a Dutch painter and etcher. He is generally considered one of the greatest painters and printmakers in European art and the most important in Dutch history.</p><p>His contributions to art came in a period of great wealth and cultural achievement that historians call the Dutch Golden Age when Dutch Golden Age painting, although in many ways antithetical to the Baroque style that dominated Europe, was extremely prolific and innovative, and gave rise to important new genres in painting.</p><p>Having achieved youthful success as a portrait painter, Rembrandt's later years were marked by personal tragedy and financial hardships. Yet his etchings and paintings were popular throughout his lifetime, his reputation as an artist remained high, and for twenty years he taught many important Dutch painters. Rembrandt's greatest creative triumphs are exemplified especially in his portraits of his contemporaries, self-portraits and illustrations of scenes from the Bible. His self-portraits form a unique and intimate biography, in which the artist surveyed himself without vanity and with the utmost sincerity.</p><p>In his paintings and prints he exhibited knowledge of classical iconography, which he molded to fit the requirements of his own experience; thus, the depiction of a biblical scene was informed by Rembrandt's knowledge of the specific text, his assimilation of classical composition, and his observations of Amsterdam's Jewish population. Because of his empathy for the human condition, he has been called <i>one of the great prophets of civilization.</i></p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Rembrandt.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Рембрандт",
				"en": "http://en.wikipedia.org/wiki/Rembrandt",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 262
	},
	{
		"id": 55,
		"name": "Titian",
		"years": "1488 - 1576",
		"genre": ["High Renaissance", "Mannerism"],
		"nationality": ["Italian"],
		"bio": {
			"ru": "<p>Тициан (собственно Тициано Вечеллио, Tiziano Veccellio), итальянский живописец эпохи Высокого и Позднего Возрождения. Учился в Венеции у Джованни Беллини, в мастерской которого сблизился с Джорджоне; работал в Венеции, а также в Падуе, Ферраре, Мантуе, Урбино, Риме и Аугсбурге. Тесно связанный с художественными кругами Венеции (Джорджоне, архитектор Якопо Сансовино, писатель Пьетро Аретино), выдающийся мастер венецианской школы живописи, Тициан воплотил в своем творчестве гуманистические идеалы Возрождения. Его жизнеутверждающее искусство отличается многогранностью, широтой охвата действительности, раскрытием глубоких драматических конфликтов эпохи. Интерес к пейзажу, поэтичность, лирическая созерцательность, тонкий колорит роднят ранние работы Тициана (так называемая “Цыганская мадонна”, Музей истории искусств, Вена; “Христос и грешница”, Художественная галерея, Глазго) с творчеством Джорджоне; самостоятельный стиль художник начал вырабатывать к середине 1510-х годов, после знакомства с произведениями Рафаэля и Микеланджело. Спокойные и радостные образы его картин отмечены в этот период жизненным полнокровием, яркостью чувств, внутренней просветленностью, мажорный колорит построен на созвучии глубоких, чистых красок (“Любовь земная и небесная”, около 1514-1516, Галерея Боргезе, Рим; “Флора”, около 1515, Уффици; “Динарий кесаря”, 1518, Картинная галерея, Дрезден).</p><p>Тогда же Тициан написал несколько портретов, строгих и спокойных по композиции, и тонко психологичных (“Юноша с перчаткой”, Лувр, Париж; “Мужской портрет”, Национальная галерея, Лондон). Новый период творчества Тициана (конец 1510-х - 1530-е годы) связан с общественным и культурным подъемом Венеции, ставшей в эту эпоху одним из главных оплотов гуманизма и городских свобод в Италии. В это время Тициан создавал исполненные величавого пафоса монументальные алтарные образы (“Вознесение Марии”, около 1516-1518, церковь Санта-Мария Глориоза деи Фрари, Венеция), композиция которых пронизана движением, картины на евангельские и мифологические темы (“Празднество Венеры”, 1518, Прадо, Мадрид; “Положение во гроб”, 1520-е годы, Лувр; “Введение во храм”, 1538, Галерея Академии, Венеция; “Венера Урбинская”, 1538, Уффици), отмеченные звучным, основанным на интенсивных контрастах синих и красных цветовых пятен колоритом, богатыми архитектурными фонами, в которые художник включал небольшие жанровые сцены и бытовые детали.</p><p>Конец 1530-х годов - время расцвета портретного искусства Тициана. С удивительной прозорливостью изображал художник своих современников, запечатлевая различные, порой противоречивые черты их характеров: лицемерие и подозрительность, уверенность и достоинство (“Ипполито Медичи”, 1532, “Ла Белла”, 1538, - все в галерее Палатина, Флоренция). Исполненным глубокого трагизма поздним религиозным полотнам Тициана присущи цельность характеров, стоическое мужество (“Кающаяся Мария Магдалина”, 1560-е годы, Эрмитаж, Санкт-Петербург; “Коронование терновым венцом”, 1570-е, Старая Пинакотека, Мюнхен; “Оплакивание Христа”, 1575, и “Пьета”, 1576, обе - Галерея Академии, Венеция). В основе колорита поздних произведений Тициана лежит тончайший красочный хроматизм: цветовая гамма, в целом подчиненная золотистому тону, строится на тонких оттенках коричневого, сине-стального, розово-красного, блекло-зеленого.</p><p>В поздний период своего творчества Тициан достиг вершин как в своем живописном мастерстве, так и в эмоционально-психологическом толковании религиозных и мифологических тем. Жизнеутверждающая красота человеческого тела, полнокровие окружающего мира стали ведущим мотивом произведений художника с почерпнутыми из античной мифологии сюжетами (“Даная”, около 1554, Прадо, Мадрид и Эрмитаж, Петербург; “Венера перед зеркалом”, 1550-е годы, Национальная галерея искусства, Вашингтон; “Диана и Актеон”, 1556, и “Диана и Каллисто”, 1556-1559, обе картины в Национальной галерее Шотландии в Эдинбурге).</p><p>Манера письма художника становится исключительно свободной, композиция, форма и цвет строятся с помощью смелой пластической лепки, краски накладываются на полотно не только кистью, но и шпателем и даже пальцами. Прозрачные лессировки не скрывают подмалевка, а местами обнажают зернистую фактуру холста. Из сочетания гибких мазков рождаются образы, исполненные трепетной жизненности и драматизма.</p><p>В 1550-е годы характер творчества Тициана меняется, нарастает драматическое начало в его религиозных композициях (“Мученичество святого Лаврентия”, 1555, церковь Джезуити, Венеция; “Положение во гроб”, 1559, Прадо). В то же время он вновь обращается к мифологической тематике, мотиву цветущей женской красоты (“Сизиф”, 1549-1550; “Даная”, 1554; “Венера и Адонис”, 1554, все - Прадо, Мадрид; “Персей и Андромеда”, 1556, Собрание Уоллеса, Лондон). К этим образам близка также горько рыдающая Мария Магдалина в одноименном полотне.</p><p>Существенный перелом в творчестве художника происходит на рубеже 1550-1560-х годов. Полным динамики, смятения, сильных порывов страстей предстает мир в серии мифологических композиций на сюжеты «Метаморфоз» Овидия, написанных Тицианом для Филиппа II: “Диана и Актеон” и “Диана и Каллисто” (1559, Национальная галерея, Эдинбург), “Похищение Европы” (1562, Музей Изабеллы Стюарт Гарднер, Бостон), “Охота Дианы” (около 1565, Национальная галерея, Лондон). В этих полотнах, пронизанных стремительным движением и вибрацией цвета, уже есть элемент так называемой «поздней манеры», характерной для последних работ Тициана (“Святой Себастьян”, 1565-1570, Эрмитаж; “Пастух и нимфа”, 1570, Музей истории искусств, Вена; “Наказание Марсия”, 1570-е годы, Картинная галерея, Кромержиж; “Оплакивание Христа”, 1576, Галерея Академии, Венеция).</p><p>Эти полотна отличает сложная живописная структура, размытость границы между формами и фоном; поверхность холста как бы соткана из наложенных широкой кистью, иногда втертых пальцами мазков. Оттенки дополняющих друг друга, взаимопроникающих или контрастирующих тонов образуют некое единство, из которого рождаются формы или приглушенные мерцающие краски. </p><p>Новаторство «поздней манеры» не была понято современниками и оценено лишь в более позднее время.  Искусство Тициана, наиболее полно раскрывшее своеобразие венецианской школы, оказало большое влияние на становление крупнейших художников 17 века от Рубенса и Веласкеса до Пуссена. Живописная техника Тициана оказала исключительное влияние на дальнейшее, вплоть до 20 века, развитие мирового изобразительного искусства.</p>",
			"en": "<p>Tiziano Vecelli or Tiziano Vecellio known in English as Titian was an Italian painter, the most important member of the 16th-century Venetian school. He was born in Pieve di Cadore, near Belluno (in Veneto, Republic of Venice). During his lifetime he was often called da Cadore, taken from the place of his birth.</p><p>Recognized by his contemporaries as <i>The Sun Amidst Small Stars</i> (recalling the famous final line of Dante's Paradiso), Titian was one of the most versatile of Italian painters, equally adept with portraits, landscape backgrounds, and mythological and religious subjects. His painting methods, particularly in the application and use of color, would exercise a profound influence not only on painters of the Italian Renaissance, but on future generations of Western art.</p><p>During the course of his long life, Titian's artistic manner changed drastically but he retained a lifelong interest in color. Although his mature works may not contain the vivid, luminous tints of his early pieces, their loose brushwork and subtlety of tone are without precedent in the history of Western painting. He was noted for his mastery of colour.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Titian.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Тициан",
				"en": "http://en.wikipedia.org/wiki/Titian",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 255
	},
	{
		"id": 56,
		"name": "Alphonse Mucha",
		"years": "1860 - 1939",
		"genre": ["Art Nouveau"],
		"nationality": ["Czech"],
		"bio": {
			"ru": "<p>Муха Альфонс (Mucha Alphonse Maria), чешский живописец, декоратор, график, основатель и мастер театральной и рекламной афиши в стиле модерн, в частности стиля Арт Нуво (Art Nouveau). Родился Альфонс Мария Муха в городке Иванчице 24 июля 1860 года. Художественное образование получил в Брно. В 1880 работал в Вене театральным художником-декоратором. Продолжил обучение в Академии художеств в Мюнхене (1885–1887) и академии Р.Жюльена в Париже. В 1887–1922 годах Альфонс Муха жил в основном в Париже. Несколько раз (начиная с 1903) посетил США, где работал как живописец и педагог.</p><p>Широкую известность Муха приобрел после создания афиш для спектаклей театра «Ренессанс», парижского театра Сары Бернар («Жисмонда», 1894; «Дама с камелиями» Александра Дюма-сына, 1896; «Лорензаччо» Альфреда де Мюссе, 1896; «Медея» Еврипида, 1898). Муха выступал и как дизайнер этих постановок; по его эскизам создавались платья и сценические ювелирные украшения. В эти же годы Муха становится одним из ведущих художников французской рекламы, его композиции печатались в журналах в виде плакатов – с неизменной фигурой или головой томной дамы, погруженной в пестрый мир роскоши и неги.</p><p>В том же стиле Арт Нуво художником создавались и красочные графические серии («Времена года», 1896; «Цветы», 1897; «Месяцы», 1899; «Звезды», 1900;), которые и до нашего времени широко тиражируются в виде арт-постеров. Именно плакаты, созданием которых Альфонс Муха занимался в 1895-1905 годах, выдвинули чешского художника в число лидеров мирового модерна - стиля, возникшего под влиянием индустриального прогресса и эстетики символизма.</p><p>Альфонс Муха стал очень знаменит еще при жизни, в конце 19 века работы Муха экспонировались во всех основных столицах Европы и в США. После окончания первой мировой войны Муха вернулся на родину. После провозглашения в 1918 году республики, Альфонсу Муха было поручено изготовление первых чехословацких почтовых марок, денежных знаков и государственного герба. С середины 1920-х годов Муха резко меняет направление своего творчества. Художник создает большой цикл картин «Славянская Эпопея», посвященный истории славянства (чехов, поляков, болгар, русских и других славянских народов), и, в частности, языческой, дохристианской истории, что вызвало недовольство католической церкви. Славянская Эпопея стала поэтизацией истории, свершившейся, по мнению чешских искусствоведов, с некоторым опозданием, — зато выполненной художником Муха с поразительным профессионализмом. Среди работ славянского цикла Муха наиболее известны картины: «Апафеоз истории славянства», «Праздник Свентовита», «Славяне на исконной родине», «Введение славянской литургии», «После битвы на Виткове», «После Грюнвальдской битвы», «Славянский праздник под липою» (все полотна в музее замка Моравски Крумлов). Муха скончался в Праге 14 июля 1939 года.</p>",
			"en": "<p>Alfons Maria Mucha often known in English and French as Alphonse Mucha, was a Czech Art Nouveau painter and decorative artist,[3] known best for his distinct style. He produced many paintings, illustrations, advertisements, postcards, and designs.</p><p>Alphonse Maria Mucha was born in the town of Ivančice, Moravia (the present Czech Republic). Although his singing abilities allowed him to continue his education through high school in the Moravian capital of Brno, drawing had been his main hobby since childhood. He worked at decorative painting jobs in Moravia, mostly painting theatrical scenery. In 1879, he relocated to Vienna to work for a major Viennese theatrical design company, while informally augmenting his artistic education. When a fire destroyed his employer's business during 1881 he returned to Moravia, to do freelance decorative and portrait painting. Count Karl Khuen of Mikulov hired Mucha to decorate Hrušovany Emmahof Castle with murals, and was impressed enough that he agreed to sponsor Mucha's formal training at the Munich Academy of Fine Arts.</p><p>Mucha moved to Paris in 1887, and continued his studies at Académie Julian and Académie Colarossi. In addition to his studies, he worked at producing magazine and advertising illustrations. About Christmas 1894, Mucha happened to go into a print shop where there was a sudden and unexpected need for a new advertising poster for a play featuring Sarah Bernhardt, the most famous actress in Paris, at the Théâtre de la Renaissance on the Boulevard Saint-Martin. Mucha volunteered to produce a lithographed poster within two weeks, and on 1 January 1895, the advertisement for the play Gismonda by Victorien Sardou was posted in the city, where it attracted much attention.</p><p>Mucha produced a flurry of paintings, posters, advertisements, and book illustrations, as well as designs for jewelry, carpets, wallpaper, and theatre sets in what was termed initially The Mucha Style but became known as Art Nouveau (French for <i>new art</i>). Mucha's works frequently featured beautiful young women in flowing, vaguely Neoclassical-looking robes, often surrounded by lush flowers which sometimes formed halos behind their heads. In contrast with contemporary poster makers he used pale pastel colors.</p><p>Mucha's style was given international exposure by the 1900 Universal Exhibition in Paris, of which Mucha said, <i>I think [the Exposition Universelle] made some contribution toward bringing aesthetic values into arts and crafts.</i> He decorated the Bosnia and Herzegovina Pavilion and collaborated with decorating the Austrian Pavilion. His Art Nouveau style was often imitated. The Art Nouveau style however, was one that Mucha attempted to disassociate himself from throughout his life; he always insisted that rather than maintaining any fashionable stylistic form, his paintings were entirely a product of himself and Czech art. He declared that art existed only to communicate a spiritual message, and nothing more; hence his frustration at the fame he gained by his commercial art, when he most wanted to concentrate on more artistic projects.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Alphonse_Mucha.html",
			"wikipedia": {
				"ru": "http://ru.wikipedia.org/wiki/Муха,_Альфонс_Мариа",
				"en": "http://en.wikipedia.org/wiki/Alphonse_Mucha",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 252
	},
	{
		"id": 57,
		"name": "Henri de Toulouse-Lautrec",
		"years": "1864 – 1901",
		"genre": ["Post-Impressionism"],
		"nationality": ["French"],
		"bio": {
			"ru": "<p>Граф Анри Мари Раймон де Тулуз-Лотрек-Монфа французский художник-постимпрессионист из графского рода Тулуз-Лотреков, мастер графики и рекламного плаката.</p><p>Анри де Тулуз-Лотрек родился 24 ноября 1864 года в аристократической семье. Первые годы жизни художника прошли в семейном поместье в городе Альби. Анри де Тулуз-Лотрек на протяжении всей жизни был близок с матерью, которая стала главным человеком в его жизни. Отец в обществе был известен как эксцентричная личность, часто менял место жительства, отчего пострадало образование Анри. Т Однако именно благодаря отцу, который любил развлечения, Анри с ранних лет познакомился с ежегодной ярмаркой и цирком, и тема цирка и развлекательных, увеселительных заведений стала основной в творчестве художника. После завершения Франко-прусской войны в 1871 году Тулуз-Лотрек переселяется в Париж — город, который изменит его жизнь, станет вдохновением и сильно повлияет на творчество художника.</p><p>Вдохновлялся искусством импрессионистов, в особенности творчеством Поля Сезанна, Эдгара Дега, и японскими гравюрами. В 1882 г. приехал в Париж, а в 1884 г. обосновался на Монмартре, где прожил до конца своих дней. Одним из первых всерьёз занялся рисованием афиш (литографией). Часто рисовал проституток и жизнь монмартрских кабаре, вёл соответствующий образ жизни. Его моделями были танцовщицы <i>Мулен Руж</i> Луиза Вебер (Ла Гулю) и Жанна Авриль, клоунесса Ша-У-Као, поэт и театральный деятель Аристид Брюан, танцор Валентин Бескостный, певица Иветта Гильбер.</p><p>За творческую жизнь, которая длилась меньше 20 лет, Тулуз-Лотрек создал 737 картин, 275 акварелей, 363 гравюры и плаката, 5084 рисунков, несколько керамик и витражей. При жизни Тулуз-Лотрека критики были в основном настроены недоброжелательно по отношению к художнику и его творчеству. Признание к нему пришло через несколько лет после смерти.</p>",
			"en": "<p>Henri Marie Raymond de Toulouse-Lautrec-Monfa or simply Henri de Toulouse-Lautrec  was a French painter, printmaker, draughtsman and illustrator whose immersion in the colourful and theatrical life of Paris in the late 19th century yielded a collection of exciting, elegant and provocative images of the modern and sometimes decadent life of those times. Toulouse-Lautrec is among the best-known painters of the Post-Impressionist period, a group which includes Cézanne, Van Gogh and Gauguin.</p><p>Henri de Toulouse-Lautrec was born in the Midi-Pyrénées region of France, the firstborn child of Comte Alphonse Charles de Toulouse-Lautrec-Monfa and Adèle Zoë Tapié de Celeyran. He was therefore a member of an aristocratic family (descendants of the Counts of Toulouse and Lautrec and the Viscounts of Montfa, a village and commune of the Tarn department of southern France).</p><p>He became an important Post-Impressionist painter, art nouveau illustrator, and lithographer, and recorded in his works many details of the late-19th-century bohemian lifestyle in Paris. Toulouse-Lautrec contributed a number of illustrations to the magazine Le Rire during the mid-1890s.After initially failing college entrance exams, Henri passed at his second attempt and completed his studies. During a stay in Nice his progress in painting and drawing impressed Princeteau, who persuaded his parents to let him return to Paris and study under the acclaimed portrait painter Léon Bonnat. Henri's mother had high ambitions and, with the aim of Henri becoming a fashionable and respected painter, used the family influence to get him into Bonnat's studio.</p><p>Toulouse-Lautrec was drawn to Montmartre, the area of Paris famous for its bohemian lifestyle and the haunt of artists, writers, and philosophers. Studying with Bonnat placed Henri in the heart of Montmartre, an area he rarely left over the next 20 years. After Bonnat took a new job, Henri moved to the studio of Fernand Cormon in 1882 and studied for a further five years and established the group of friends he kept for the rest of his life. At this time he met Émile Bernard and Vincent van Gogh. Cormon, whose instruction was more relaxed than Bonnat's, allowed his pupils to roam Paris, looking for subjects to paint. In this period Toulouse-Lautrec had his first encounter with a prostitute (reputedly sponsored by his friends), which led him to paint his first painting of prostitutes in Montmartre, a woman rumoured to be called Marie-Charlet.From 1889 until 1894, Henri took part in the <i>Independent Artists' Salon</i> on a regular basis. He made several landscapes of Montmartre.</p><p>An alcoholic for most of his adult life, Toulouse-Lautrec was placed in a sanatorium shortly before his death. He died from complications due to alcoholism and syphilis at the family estate in Malromé at the age of 36. He is buried in Verdelais, Gironde, a few kilometres from the Château Malromé, where he died.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Henri_de_Toulouse-Lautrec.html",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Тулуз-Лотрек,_Анри_де",
				"en": "https://en.wikipedia.org/wiki/Henri_de_Toulouse-Lautrec",
				"de": "https://de.wikipedia.org/wiki/Henri_de_Toulouse-Lautrec",
				"fr": "https://fr.wikipedia.org/wiki/Henri_de_Toulouse-Lautrec",
				"es": "https://es.wikipedia.org/wiki/Henri_de_Toulouse-Lautrec",
				"it": "https://it.wikipedia.org/wiki/Henri_de_Toulouse-Lautrec"
			}
		},
		"paintings": 81
	},
	{
		"id": 58,
		"name": "Gustave Courbet",
		"years": "1819 - 1877",
		"genre": ["Realism"],
		"nationality": ["French"],
		"bio": {
			"ru": "<p>Жан Дезире Гюстав Курбе  французский живописец, пейзажист, жанрист и портретист. Считается одним из завершителей романтизма и основателей реализма в живописи. Один из крупнейших художников Франции на протяжении XIX века, ключевая фигура французского реализма.</p><p>Гюстав Курбе родился в 1819 году в Орнане, городке с населением около трёх тысяч человек, расположенным во Франш-Конте, в 25 км от Безансона, около швейцарской границы. В 1839 году он отправился в Париж, дав отцу обещание, что будет изучать там юриспруденцию. В Париже Курбе познакомился с художественной коллекцией Лувра. На его творчество, в особенности раннее, большое влияние впоследствии оказали малые голландцы и испанские художники, в особенности Веласкес, у которых он заимствовал общие тёмные тона картин. Курбе не стал заниматься юриспруденцией, а вместо этого начал занятия в художественных мастерских, прежде всего у Шарля де Штейбена.</p><p>В 1844 году первая картина Курбе, «Автопортрет с собакой», была выставлена в Парижском салоне (все остальные картины были отвергнуты жюри). С самого начала художник показал себя крайним реалистом, и чем далее, тем сильнее и настойчивее следовал по этому направлению, считая конечной целью искусства передачу голой действительности и жизненной прозы и пренебрегая при этом даже изяществом техники. В 1840-х годах он написал большое количество автопортретов.</p><p>В конце 1840-х годов официальным направлением французской живописи все ещё был академизм, и работы художников реалистического направления периодически отвергались устроителями выставок. Так, в 1847 году все три работы Курбе, представленные в Салон, были отвергнуты жюри. Более того, в этом году жюри Салона отвергло работы большого числа известных художников, включая Эжена Делакруа, Домье и Теодора Руссо.</p><p>При уме и значительном таланте художника, его натурализм, приправленный, в жанровых картинах, социалистической тенденцией, вызвал много шума в артистических и литературных кругах и приобрёл ему немало врагов (к ним относился Александр Дюма-сын), хотя также и массу приверженцев, к числу которых принадлежал известный писатель и теоретик анархизма Прудон. В конце концов, Курбе стал главой реалистической школы, возникшей во Франции и распространившейся оттуда в другие страны, особенно в Бельгию. Уровень его неприязни к прочим художникам дошёл до того, что в течение нескольких лет он не участвовал в парижских салонах, а на всемирных выставках устраивал из своих произведений особые выставки, в отдельных помещениях.</p>",
			"en": "<p>Jean Désiré Gustave Courbet  was a French painter who led the Realist movement in 19th-century French painting. Committed to painting only what he could see, he rejected academic convention and the Romanticism of the previous generation of visual artists. His independence set an example that was important to later artists, such as the Impressionists and the Cubists. Courbet occupies an important place in 19th-century French painting as an innovator and as an artist willing to make bold social statements through his work.</p><p>Courbet's paintings of the late 1840s and early 1850s brought him his first recognition. They challenged convention by depicting unidealized peasants and workers, often on a grand scale traditionally reserved for paintings of religious or historical subjects. Courbet's subsequent paintings were mostly of a less overtly political character: landscapes, seascapes, hunting scenes, nudes and still lifes. He was imprisoned for six months in 1871 for his involvement with the Paris Commune, and lived in exile in Switzerland from 1873 until his death.</p><p>Courbet wrote a Realist manifesto for the introduction to the catalogue of this independent, personal exhibition, echoing the tone of the period's political manifestos. In it he asserts his goal as an artist <i>to translate the customs, the ideas, the appearance of my epoch according to my own estimation.</i></p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Gustave_Courbet",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Курбе,_Гюстав",
				"en": "https://en.wikipedia.org/wiki/Gustave_Courbet",
				"de": "https://de.wikipedia.org/wiki/Gustave_Courbet",
				"fr": "https://fr.wikipedia.org/wiki/Gustave_Courbet",
				"es": "https://es.wikipedia.org/wiki/Gustave_Courbet",
				"it": "https://it.wikipedia.org/wiki/Gustave_Courbet"
			}
		},
		"paintings": 59
	},
	{
		"id": 59,
		"name": "Dante Gabriel Rossetti",
		"years": "1828 - 1882",
		"genre": ["Romanticism", "Aestheticism"],
		"nationality": ["British"],
		"bio": {
			"ru": "<p>Данте Габриэль Россетти, англ. Dante Gabriel Rossetti английский поэт, переводчик, иллюстратор и художник.</p><p>Данте Габриэль Россетти родился в мелкобуржуазной интеллигентской семье. В 1848 году, на выставке Королевской Академии художеств, Россетти знакомится с Уильямом Холменом Хантом, Хант помогает Россетти закончить картину «Детство Девы Марии», которая была выставлена в 1849 году, и он же знакомит Россетти с Дж. Э. Милле. Вместе они основывают Братство Прерафаэлитов. Хант, Милле и Россетти сознательно бросили вызов общепринятым взглядам; они создали свой манифест и опубликовали его в собственном издании «Росток». Впоследствии Россетти отходит от прерафаэлитизма.</p><p>С 1854 по 1862 год он также преподавал рисунок и живопись в первом в Англии образовательном заведении для низших классов общества. При этом оказался превосходным преподавателем, и студенты его боготворили.</p><p>Со временем образ жизни поэта становится замкнутым, и его видели лишь самые близкие друзья. Поздние годы Россетти отмечены все более болезненным настроением, он стал склонным к алкоголю и хлоралгидрату, жил жизнью затворника.</p>",
			"en": "<p>Dante Gabriel Rossetti was an English poet, illustrator, painter and translator. He founded the Pre-Raphaelite Brotherhood in 1848 with William Holman Hunt and John Everett Millais, and was later to be the main inspiration for a second generation of artists and writers influenced by the movement, most notably William Morris and Edward Burne-Jones. His work also influenced the European Symbolists and was a major precursor of the Aesthetic movement.</p><p>Rossetti's art was characterised by its sensuality and its medieval revivalism. His early poetry was influenced by John Keats. His later poetry was characterised by the complex interlinking of thought and feeling, especially in his sonnet sequence The House of Life. Poetry and image are closely entwined in Rossetti's work; he frequently wrote sonnets to accompany his pictures, spanning from The Girlhood of Mary Virgin (1849) and Astarte Syriaca (1877), while also creating art to illustrate poems such as <i>Goblin Market</i> by the celebrated poet Christina Rossetti, his sister.</p><p>Rossetti's personal life was closely linked to his work, especially his relationships with his models and muses Elizabeth Siddal, Fanny Cornforth and Jane Morris.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Dante_Gabriel_Rossetti.html",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Россетти,_Данте_Габриэль",
				"en": "https://en.wikipedia.org/wiki/Dante_Gabriel_Rossetti",
				"de": "https://de.wikipedia.org/wiki/Dante_Gabriel_Rossetti",
				"fr": "https://fr.wikipedia.org/wiki/Dante_Gabriel_Rossetti",
				"es": "https://es.wikipedia.org/wiki/Dante_Gabriel_Rossetti",
				"it": "https://it.wikipedia.org/wiki/Dante_Gabriel_Rossetti"
			}
		},
		"paintings": 57
	},
	{
		"id": 60,
		"name": "John Singer Sargent",
		"years": "1856 - 1925",
		"genre": ["Realism", "Impressionism"],
		"nationality": ["American"],
		"bio": {
			"ru": "<p>Джон Сингер Сарджент - американский художник, двоюродный брат известного ботаника Чарльза Сарджента, один из наиболее успешных живописцев прекрасной эпохи.</p><p>Сын врача, учился в Италии, Германии и Франции где его наставником в 1874—1878 был Эмиль Огюст Каролюс-Дюран. Ранние работы художника высоко оценил Генри Джеймс. Во Франции Сарджент сблизился с импрессионистами, теснее всего — с Клодом Моне (известна картина Сарджента Клод Моне, работающий на опушке леса). Также дружил c Робером де Монтескью, Полем Эллё. По большей части жил во Франции и Великобритании, много путешествовал по Европе, Северной Африке, Ближнему Востоку, часто бывал в Италии, не раз приезжал в США.</p><p>Сарджент — один из первых американских апатридов, художников-космополитов в Европе, денди образца Fin de siècle. Его нередко причисляют к импрессионистам, хотя образцами для него всегда оставались Веласкес, Гейнсборо, Ван Дейк (Роден даже назвал его, не без иронии, Ван Дейком нашего времени). Наиболее известен своими портретами, среди моделей которых были натурщицы Розина Феррара, Кармела Бертанья, Виржини Готро (Портрет мадам Икс), актрисы Эллен Терри и Элеонора Дузе, писательница Жюдит Готье, художница и фотограф, меценатка и собирательница живописи Сара Сирс. Среди мужских портретов — портреты Теодора Рузвельта, Вудро Вильсона, Генри Джеймса, Роберта Льюиса Стивенсона, Уильяма Батлера Йейтса. Занимался также настенной живописью.</p>",
			"en": "<p>John Singer Sargent was an American artist, considered the <i>leading portrait painter of his generation</i> for his evocations of Edwardian era luxury. During his career, he created roughly 900 oil paintings and more than 2,000 watercolors, as well as countless sketches and charcoal drawings. His oeuvre documents worldwide travel, from Venice to the Tyrol, Corfu, the Middle East, Montana, Maine, and Florida.</p><p>His parents were American, but he was trained in Paris prior to moving to London. Sargent enjoyed international acclaim as a portrait painter, although not without controversy and some critical reservation; an early submission to the Paris Salon, his <i>Portrait of Madame X</i>, was intended to consolidate his position as a society painter, but it resulted in scandal instead. From the beginning his work was characterized by remarkable technical facility, particularly in his ability to draw with a brush, which in later years inspired admiration as well as criticism for a supposed superficiality. His commissioned works were consistent with the grand manner of portraiture, while his informal studies and landscape paintings displayed a familiarity with Impressionism.</p><p>In later life Sargent expressed ambivalence about the restrictions of formal portrait work, and devoted much of his energy to mural painting and working en plein air. He lived most of his life in Europe.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "John_Singer_Sargent.html",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Сарджент,_Джон_Сингер",
				"en": "https://en.wikipedia.org/wiki/John_Singer_Sargent",
				"de": "https://de.wikipedia.org/wiki/John_Singer_Sargent",
				"fr": "https://fr.wikipedia.org/wiki/John_Singer_Sargent",
				"es": "https://es.wikipedia.org/wiki/John_Singer_Sargent",
				"it": "https://it.wikipedia.org/wiki/John_Singer_Sargent"
			}
		},
		"paintings": 59
	},
	{
		"id": 61,
		"name": "Camille Pissarro",
		"years": "1830 - 1903",
		"genre": ["Impressionism", "Post-Impressionism"],
		"nationality": ["French"],
		"bio": {
			"ru": "<p>Жакоб Абраам Камиль Писсарро французский живописец, один из первых и наиболее последовательных представителей импрессионизма.</p><p>Камиль Писсарро родился 10 июля 1830 года на острове Сент-Томас (Вест-Индия), в буржуазной семье. До 12 лет Камиль жил в Вест-Индии, затем, уже в возрасте 25 лет, вместе со всей семьёй переехал в Париж. В 1855 году окончательно вернулся во Францию. С 1855 по 1861 год учился в Школе изящных искусств и в Академии Сюиса в Париже. Его учителями были Камиль Коро, Гюстав Курбе и Шарль-Франсуа Добиньи. Брал частные уроки у И. Даньяна. Основные сюжеты его произведений в этот период — сельские пейзажи, а также виды Парижа. Во время франко-прусской войны 1870—1871 годов Писсарро переехал в Лондон. За это время множество его работ, оставленных в Париже, было уничтожено немецкими солдатами, жившими в его доме. Сохранилось лишь сорок картин.</p><p>Писсарро начинал как ученик Камиля Коро. В этом выборе учителя уже сказалась врождённая любовь художника к пейзажной живописи. Но не меньше внимания в начале своего творческого пути Камиль Писсарро уделяет и рисунку. Уже в ранних работах художник особое внимание уделял изображению освещенных предметов в воздушной среде. Свет и воздух стали с тех пор ведущей темой в творчестве Писсарро.</p><p>По своим политическим взглядам Писсарро был убеждённым анархистом, и оказывал регулярную помощь деньгами анархистским изданиям и самим анархистам во Франции и Бельгии. Впрочем, на творчество Писсарро анархизм не оказал никакого влияния. Точно так же анархизм не повлиял и на практическую сторону жизни Писсарро: нуждаясь в деньгах, художник время от времени принимал участие в коммерческой деятельности своего отца.</p><p>Писсарро оказал сильное влияние на импрессионистов, самостоятельно выработав многие принципы, легшие в основу их стиля живописи. Он дружил с такими художниками, как Дега, Сезанн и Гоген. Писсарро — единственный участник всех 8 выставок импрессионистов.</p><p>Художник скончался 12 ноября (по другим сведениям — 13 ноября) 1903 года в Париже. Похоронен на кладбище Пер-Лашез.</p>",
			"en": "<p>Camille Pissarro was a Danish-French Impressionist and Neo-Impressionist painter born on the island of St Thomas (now in the US Virgin Islands, but then in the Danish West Indies). His importance resides in his contributions to both Impressionism and Post-Impressionism. Pissarro studied from great forerunners, including Gustave Courbet and Jean-Baptiste-Camille Corot. He later studied and worked alongside Georges Seurat and Paul Signac when he took on the Neo-Impressionist style at the age of 54.</p><p>n 1873 he helped establish a collective society of fifteen aspiring artists, becoming the <i>pivotal</i> figure in holding the group together and encouraging the other members. Art historian John Rewald called Pissarro the <i>dean of the Impressionist painters</i>, not only because he was the oldest of the group, but also <i>by virtue of his wisdom and his balanced, kind, and warmhearted personality</i>. Cézanne said <i>he was a father for me. A man to consult and a little like the good Lord,</i> and he was also one of Gauguin's masters. Renoir referred to his work as <i>revolutionary</i>, through his artistic portrayals of the <i>common man</i>, as Pissarro insisted on painting individuals in natural settings without <i>artifice or grandeur</i>.</p><p>Pissarro is the only artist to have shown his work at all eight Paris Impressionist exhibitions, from 1874 to 1886. He <i>acted as a father figure not only to the Impressionists</i> but to all four of the major Post-Impressionists, including Georges Seurat, Paul Cézanne, Vincent van Gogh and Paul Gauguin.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Camille_Pissarro.html",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Писсарро,_Камиль",
				"en": "https://en.wikipedia.org/wiki/Camille_Pissarro",
				"de": "https://de.wikipedia.org/wiki/Camille_Pissarro",
				"fr": "https://fr.wikipedia.org/wiki/Camille_Pissarro",
				"es": "https://es.wikipedia.org/wiki/Camille_Pissarro",
				"it": "https://it.wikipedia.org/wiki/Camille_Pissarro"
			}
		},
		"paintings": 91
	},
	{
		"id": 62,
		"name": "William Turner",
		"years": "1775 - 1851",
		"genre": ["Romanticism"],
		"nationality": ["British"],
		"bio": {
			"ru": "<p>Джозеф Мэллорд Уильям Тёрнер британский живописец, мастер романтического пейзажа, акварелист и гравер. Предтеча французских импрессионистов.</p><p>Ещё в Брентфорде он проявил интерес к изобразительному искусству. После учёбы в школе в конце 1780-х он поселился в Лондоне, где работал у архитекторов и топографов, в том числе у Томаса Малтона. В декабре 1789 года 14-летний Тёрнер был зачислен в Королевскую академию, его экзаменовал Рейнолдс. В академии он посещал последние лекции Рейнолдса, оказавшего значительное влияние на Тёрнера. В дальнейшем художник внимательно изучил весь курс лекций первого президента академии, посвящённый идеалистическому направлению в искусстве. Уже через год после поступления акварельная работа Тёрнера экспонировалась на ежегодной выставке Академии художеств. Первая картина маслом, которая удостоилась экспозиции, появилась у Тёрнера в 1790 году. Впоследствии Тёрнер постоянно выставлялся в Академии.</p><p>Тёрнер внимательно изучал мастеров прошлого и современных художников. Копируя чужие работы, он творчески переосмысливал чужие образы, выражая своё собственное видение. Позднее Тёрнер предпринял выпуск альбома Liber Studiorum, выполненный в той же технике, что и альбом рисунков Лоррена — меццо-тинто. Liber Studiorum предназначался для использования в качестве учебника для начинающих художников и гравюры были сгруппированы по тематическим разделам — живопись архитектурная, историческая, пасторальная (мифологическая и бытовая), пейзажи морские и горные.</p><p>Особую известность завоевал благодаря картинам, посвящённым Наполеоновским войнам (<i>Трафальгарская битва</i>, <i>Поле Ватерлоо</i>).</p>",
			"en": "<p>Joseph Mallord William Turner was an English Romanticist landscape painter, water-colourist, and printmaker. Turner was considered a controversial figure in his day, but is now regarded as the artist who elevated landscape painting to an eminence rivalling history painting.</p><p>Although renowned for his oil paintings, Turner is also one of the greatest masters of British watercolour landscape painting. He is commonly known as <i>the painter of light</i> and his work is regarded as a Romantic preface to Impressionism. Some of his works are cited as examples of abstract art prior to its recognition in the early twentieth century.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "J._M._W._Turner.html",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Тёрнер,_Уильям",
				"en": "https://en.wikipedia.org/wiki/J._M._W._Turner",
				"de": "https://de.wikipedia.org/wiki/William_Turner",
				"fr": "https://fr.wikipedia.org/wiki/Joseph_Mallord_William_Turner",
				"es": "https://es.wikipedia.org/wiki/Joseph_Mallord_William_Turner",
				"it": "https://it.wikipedia.org/wiki/William_Turner"
			}
		},
		"paintings": 66
	},
	{
		"id": 63,
		"name": "Edvard Munch",
		"years": "1863 - 1944",
		"genre": ["Symbolism", "Expressionism"],
		"nationality": ["Norwegian"],
		"bio": {
			"ru": "<p>Эдвард Мунк норвежский живописец и график, театральный художник, теоретик искусства. Один из первых представителей экспрессионизма. Его творчество повлияло на современное искусство. Творчество Мунка охвачено мотивами смерти, одиночества, но при этом и жаждой жизни.</p><p>Эдвард Мунк был вторым ребёнком военного врача. В 1879 году Мунк поступил в Высшую техническую школу в Осло, но вскоре перешёл в Государственную академию искусств и художественных ремёсел. Сначала его преподавателем был скульптор Миддльтун, а с 1882 года — живописец Кристиан Крог. Дебют молодого художника состоялся в 1883 году: на второй Осенней художественной выставке в Осло была представлена его картина <i>Девушка, подкладывающая в печь дрова</i>, выполненная в реалистическом духе, под явным влиянием Крога.</p><p>В 1886 году Мунк получил возможность совершить поездку в Париж, где посетил восьмую и последнюю выставку импрессионистов. Тогда же он создал свою первую широко известную картину, <i>Больная девочка</i>. Первая персональная выставка художника состоялась в 1889 году.</p><p>В конце 1890-х Мунк работал над циклом картин, получившим название «Фриз жизни — поэма о любви, жизни и смерти». В него вошли работы, объединённые тематикой любви, женственности, страха, отчаяния и смерти.</p><p>Самая известная работа Мунка — картина <i>Крик</i>. Существует четыре её экземпляра, написанных между 1893 и 1910 годами. Первоначально картина называлась <i>Отчаяние</i>. Охваченный ужасом человек с этой картины стал одним из самых узнаваемых образов в искусстве.</p>",
			"en": "<p>Edvard Munch was a Norwegian painter and printmaker whose intensely evocative treatment of psychological themes built upon some of the main tenets of late 19th-century Symbolism and greatly influenced German Expressionism in the early 20th century. One of his most well-known works is <i>The Scream</i> of 1893.</p><p>Edvard Munch was born in a farmhouse in the village. In 1881, Munch enrolled at the Royal School of Art and Design of Christiania, one of whose founders was his distant relative Jacob Munch. His teachers were sculptor Julius Middelthun and the naturalistic painter Christian Krohg. That year, Munch demonstrated his quick absorption of his figure training at the Academy in his first portraits, including one of his father and his first self-portrait. In 1883, Munch took part in his first public exhibition and shared a studio with other students. His full-length portrait of Karl Jensen-Hjell, a notorious bohemian-about-town, earned a critic's dismissive response: <i>It is impressionism carried to the extreme. It is a travesty of art.</i> Munch's nude paintings from this period survive only in sketches, except for Standing Nude (1887), perhaps confiscated by his father.</p><p>After numerous experiments, Munch concluded that the Impressionist idiom did not allow sufficient expression. He found it superficial and too akin to scientific experimentation. He felt a need to go deeper and explore situations brimming with emotional content and expressive energy. This deeper perspective helped move him to a new view of his art. He wrote that his painting <i>The Sick Child</i> (1886), based on his sister's death, it was his first break from Impressionism.</p><p>Munch continued to employ a variety of brushstroke technique and color palettes throughout the 1880s and early 1890s, as he struggled to define his style.[23] His idiom continued to veer between naturalistic, as seen in Portrait of Hans Jæger, and impressionistic, as in Rue Lafayette. His Inger On the Beach (1889), which caused another storm of confusion and controversy, hints at the simplified forms, heavy outlines, sharp contrasts, and emotional content of his mature style to come.[24] He began to carefully calculate his compositions to create tension and emotion. While stylistically influenced by the Post-Impressionists, what evolved was a subject matter which was symbolist in content, depicting a state of mind rather than an external reality. In 1889, Munch presented his first one-man show of nearly all his works to date.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Edvard_Munch.html",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Мунк,_Эдвард",
				"en": "https://en.wikipedia.org/wiki/Edvard_Munch",
				"de": "https://de.wikipedia.org/wiki/Edvard_Munch",
				"fr": "https://fr.wikipedia.org/wiki/Edvard_Munch",
				"es": "https://es.wikipedia.org/wiki/Edvard_Munch",
				"it": "https://it.wikipedia.org/wiki/Edvard_Munch"
			}
		},
		"paintings": 67
	},
	{
		"id": 64,
		"name": "Antoine Watteau",
		"years": "1684 – 1721",
		"genre": ["Rococo"],
		"nationality": ["French"],
		"bio": {
			"ru": "<p>Жан Антуан Ватто, более известный как Антуан Ватто— французский живописец и художник, основоположник и крупнейший мастер стиля рококо. Ватто принадлежит к числу известнейших художников в мировой истории искусства. Благодаря усилиям братьев Гонкур, Бодлера и Верлена, он занял место сначала в коллекции Уоллес, затем в Лувре (в 1869 году там находилось 8 его картин) и, наконец, в истории искусств.</p><p>Жан Антуан Ватто родился 10 октября 1684 года в городе Валансьен в семье плотника. В раннем возрасте Ватто был учеником художника Жак-Альбер Герена. Ватто приехал в Париж в 1702 году из северной Франции, из Валансьена. С 1703 по 1708 год Ватто работал в мастерской Клода Жилло, копировал и изображал сюжеты итальянской комедии. От этого важного этапа творческого формирования художника сохранилось лишь одно живописное свидетельство — московская картина <i>Сатира на врачей</i>.</p><p>В следующие годы Ватто пробовал себя в разных жанрах, спорная хронология немногих сохранившихся работ этого периода не позволяет сделать определённых выводов об эволюции его интересов, однако его манера становится более свободной, мазок — более свежим и легким.</p><p>В 1717 году Ватто было присвоено звание академика. В 1719-1720 художник посещает Англию. В конце 1717 года Ватто заболел туберкулёзом. Последние дни Антуан Ватто провёл в загородном доме своего друга, он скончался от туберкулёза 18 июля 1721 года. За свои 36 лет он оставил потомкам около двадцати тысяч картин.</p><p>Ватто был создателем своеобразного жанра, традиционно называемого <i>галантными празднествами</i>. Сущность этих сцен раскрывается не столько в их прямом сюжетном значении, сколько в тончайшей поэтичности, которой они проникнуты. <i>Праздник любви</i> (1717), как и другие картины Ватто, содержит в себе богатую гамму эмоциональных оттенков, которым вторит лирическое звучание пейзажного фона. Ватто открыл художественную ценность хрупких нюансов, чувств, едва уловимо сменяющих друг друга. Его искусство впервые ощутило разлад мечты и реальности, и поэтому оно отмечено печатью меланхолической грусти.</p>",
			"en": "<p>Jean-Antoine Watteau, better known as Antoine Watteau, was a French painter whose brief career spurred the revival of interest in colour and movement, as seen in the tradition of Correggio and Rubens. He revitalized the waning Baroque style, shifting it to the less severe, more naturalistic, less formally classical Rococo. Watteau is credited with inventing the genre of fêtes galantes, scenes of bucolic and idyllic charm, suffused with a theatrical air. Some of his best known subjects were drawn from the world of Italian comedy and ballet.</p><p>Watteau was born in the town of Valenciennes in October 1684. Showing an early interest in painting, Jean-Antoine may have been apprenticed to Jacques-Albert Gérin, a local painter. Jean-Antoine's first artistic subjects were charlatans selling quack remedies on the streets of Valenciennes. Watteau left for Paris in about 1702. There he found employment in a workshop at Pont Notre-Dame, making copies of popular genre paintings in the Flemish and Dutch tradition; it was in that period that he developed his characteristic sketchlike technique.</p><p>In 1703 he was employed as an assistant by the painter Claude Gillot, whose work represented a reaction against the turgid official art of Louis XIV's reign. In Gillot's studio Watteau became acquainted with the characters of the commedia dell'arte (its actors had been expelled from France several years before), a favorite subject of Gillot's that would become one of Watteau's lifelong passions. Afterward he moved to the workshop of Claude Audran III, an interior decorator, under whose influence he began to make drawings admired for their consummate elegance. Audran was the curator of the Palais du Luxembourg, where Watteau was able to see the magnificent series of canvases painted by Peter Paul Rubens for Queen Marie de Medici. The Flemish painter would become one of his major influences, together with the Venetian masters he would later study in the collection of his patron and friend, the banker Pierre Crozat.</p><p>In 1709 Watteau tried to obtain the Prix de Rome and was rejected by the Academy. In 1712 he tried again and was considered so good that, rather than receiving the one-year stay in Rome for which he had applied, he was accepted as a full member of the Academy. He took five years to deliver the required <i>reception piece</i>, but it was one of his masterpieces: the Pilgrimage to Cythera, also called the Embarkation for Cythera.</p><p>Although his mature paintings seem to be so many depictions of frivolous fêtes galantes, they in fact display a sober melancholy, a sense of the ultimate futility of life, that makes him, among 18th-century painters, one of the closest to modern sensibilities.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "Jean-Antoine_Watteau.html",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Ватто,_Антуан",
				"en": "https://en.wikipedia.org/wiki/Jean-Antoine_Watteau",
				"de": "https://de.wikipedia.org/wiki/Antoine_Watteau",
				"fr": "https://fr.wikipedia.org/wiki/Antoine_Watteau",
				"es": "https://es.wikipedia.org/wiki/Antoine_Watteau",
				"it": "https://it.wikipedia.org/wiki/Antoine_Watteau"
			}
		},
		"paintings": 30
	},
	{
		"id": 65,
		"name": "William-Adolphe Bouguereau",
		"years": "1825 – 1905",
		"genre": ["Neoclassicism", "Realism"],
		"nationality": ["French"],
		"bio": {
			"ru": "<p>Адольф Вильям Бугро — французский живописец, крупнейший представитель салонного академизма, автор картин на мифологические, аллегорические и библейские сюжеты.</p><p>Вильям Бугро был одним из восьми детей Теодора Бугро и его супруги Марии Маргариты Аделины Бонин. Глава семейства занимался торговлей вином и оливковым маслом. Вильям мог продолжить его дело, однако благодаря своему дяде Эжену, викарию, он пошёл учиться в среднюю школу, где обнаружился его художественный талант. Благодаря своему дяде он получил несколько заказов на портреты, и когда собрал достаточную сумму, переехал в Париж, где кроме занятий в Школе изящных искусств также посещал курсы по истории костюма, археологии и анатомии. Навыки академической живописи Бугро получал в студии Франсуа Пико.</p><p>В 1850 году за картину <i>Зенобия, найденная на берегу Аракса</i> он был удостоен Римской премии, благодаря которой смог поехать в Рим для ознакомления с классическим искусством и усовершенствования мастерства. Результатом стажировки стала копия фрески Рафаэля <i>Триумф Галатеи</i>.Практически до самого конца своей жизни, Бугро ежегодно выставлял свои работы в парижском Салоне. В 1857 году за картину <i>Возвращение Тобиаса</i> он получил почётную медаль. Художник стал одним из клиентов Дюран-Рюэля и уже в начале 1860-х смог приобрести собственный дом со студией на Монпарнасе.</p><p>В 1876 году художник был избран пожизненным членом Академии изящных искусств, в 1883 году — президентом ассоциации барона Тейлора, поддерживающей нуждающихся художников и членов их семей. В 1885 году он стал командором ордена Почётного легиона. В 1894 году Бугро был избран вице-президентом Международной выставки в Антверпене и членом жюри секции живописи. Адольф Бугро скончался 19 августа 1905 года. Похоронен на кладбище Монпарнас.</p>",
			"en": "<p>William-Adolphe Bouguereau was a French academic painter and traditionalist. In his realistic genre paintings he used mythological themes, making modern interpretations of classical subjects, with an emphasis on the female human body. During his life he enjoyed significant popularity in France and the United States, was given numerous official honors, and received top prices for his work. As the quintessential salon painter of his generation, he was reviled by the Impressionist avant-garde. By the early twentieth century, Bouguereau and his art fell out of favor with the public, due in part to changing tastes. In the 1980s, a revival of interest in figure painting led to a rediscovery of Bouguereau and his work. Throughout the course of his life, Bouguereau executed 822 known finished paintings, although the whereabouts of many are still unknown.</p><p>William-Adolphe Bouguereau was born in La Rochelle, France, on November 30, 1825, into a family of wine and olive oil merchants. He showed artistic talent early on. His father was convinced by a client to send him to the École des Beaux-Arts in Bordeaux, where he won first prize in figure painting for a depiction of Saint Roch. To earn extra money, he designed labels for jams and preserves. Through his uncle, Bouguereau was given a commission to paint portraits of parishioners, and when his aunt matched the sum he earned, Bouguereau went to Paris and became a student at the École des Beaux-Arts.  Academic painting placed the highest status on historical and mythological subjects and Bouguereau won the coveted Prix de Rome at age 26 in 1850, with his Zenobia Found by Shepherds on the Banks of the Araxes.</p><p>Bouguereau, painting within the traditional academic style, exhibited at the annual exhibitions of the Paris Salon for his entire working life. Raphael was a favorite of Bouguereau and he took this review as a high compliment. He had fulfilled one of the requirements of the Prix de Rome by completing an old-master copy of Raphael’s The Triumph of Galatea. In many of his works, he followed the same classical approach to composition, form, and subject matter. Bouguereau's graceful portraits of women were considered very charming, partly because he could beautify a sitter while also retaining her likeness.</p><p> On August 19, 1905, Bouguereau died in La Rochelle at the age of 79 from heart disease. He painted 826 paintings.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "William-Adolphe_Bouguereau.html",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Бугро,_Вильям",
				"en": "https://en.wikipedia.org/wiki/William-Adolphe_Bouguereau",
				"de": "https://de.wikipedia.org/wiki/William_Adolphe_Bouguereau",
				"fr": "https://fr.wikipedia.org/wiki/William_Bouguereau",
				"es": "https://es.wikipedia.org/wiki/William-Adolphe_Bouguereau",
				"it": "https://it.wikipedia.org/wiki/William-Adolphe_Bouguereau"
			}
		},
		"paintings": 45
	},
	{
		"id": 66,
		"name": "John Constable",
		"years": "1776 – 1837",
		"genre": ["Romanticism"],
		"nationality": ["British"],
		"bio": {
			"ru": "<p>Джон Констебл или Констэбль — английский художник-романтик. Наибольшую известность ему принесли пейзажи, в частности с видами окрестностей Саффолка, откуда художник был родом. Его картины прославили Дедхэм Вэйл, который называют Земля Констэбля (англ. Constable Country). Среди наиболее известных его работ Dedham Vale (1802) и The Hay Wain (1821). В настоящее время работы Констэбля высоко ценятся и весьма популярны у коллекционеров, однако при жизни художник не добился финансового успеха. Членом Королевской академии художеств он стал в 52 года. Констэблю удалось продать больше своих картин во Франции, нежели на родине в Англии.</p><p>Констэбль родился в небольшой деревушке Ист-Бергхоулт на берегу реки Стаур, в семье зажиточного мельника Голдинга и Энн Констэблей (отцовская мельница несколько раз появляется на его полотнах). Своё образование художник начал в интернате Лавенхема, а позднее был переведён в дневную школу в Дедхэме. В юности Констэбль много путешествовал по окрестностям, где делал зарисовки и этюды. По словам самого художника, эти сценки <i>сделали его художником, за что он очень благодарен.</i></p><p>В 1799 году Констэбль поступил в Королевскую Академию художеств в Лондоне, но основную школу прошел, самостоятельно работая на натуре. По стилю ранние работы Констэбля мало отличались от его зрелых работ: тот же свет, цвета и мазки, которые во многом выдавали влияние на творчество Констэбля так называемых старых мастеров, особенно Клода Лоррена. Сюжеты картин Констэбля были взяты им из жизни и представляли собой бытовые сценки, что для его времен не было модным, поскольку в большей моде были романтические сюжеты с дикими пейзажами и руинами.</p><p>В феврале 1829 года его избрали членом Королевской академии художеств, а в 1831 году был назначен Инспектором Академии, где снискал большую популярность среди студентов. Констэбль стал читать лекции по истории пейзажной живописи. Эти лекции были весьма популярны у широкой публики. На одной из таких лекций в Королевском институте он сформулировал три правила: во-первых, пейзажная живопись столь же технична, сколь и поэтична; во-вторых, воображение не может в одиночку породить художественное мастерство, которое выдержало бы сравнение с действительностью; и в-третьих, ни один из великих художников не был самоучкой. В 1835 году он дал свою последнюю лекцию студентам Королевской академии, в которой он восхвалял Рафаэля, а Академию назвал <i>колыбелью Британского искусства</i>. Он умер 31 марта, по всей видимости от диспепсии. Джона Констэбля похоронили рядом с его любимой женой на городском кладбище Хампстеда.</p>",
			"en": "<p>John Constable was an English Romantic painter. Born in Suffolk, he is known principally for his landscape paintings of Dedham Vale, the area surrounding his home—now known as <i>Constable Country</i>—which he invested with an intensity of affection. His most famous paintings include Wivenhoe Park of 1816, Dedham Vale of 1802 and The Hay Wain of 1821. Although his paintings are now among the most popular and valuable in British art, Constable was never financially successful. He did not become a member of the establishment until he was elected to the Royal Academy at the age of 52. His work was embraced in France, where he sold more works than in his native England and inspired the Barbizon school.</p>",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Констебл,_Джон",
				"en": "https://en.wikipedia.org/wiki/John_Constable",
				"de": "https://de.wikipedia.org/wiki/John_Constable",
				"fr": "https://fr.wikipedia.org/wiki/John_Constable",
				"es": "https://es.wikipedia.org/wiki/John_Constable",
				"it": "https://it.wikipedia.org/wiki/John_Constable"
			}
		},
		"paintings": 38
	},
	{
		"id": 67,
		"name": "John Everett Millais",
		"years": "1829 – 1896",
		"genre": ["Romanticism", "Realism"],
		"nationality": ["British"],
		"bio": {
			"ru": "<p>Джон Эверетт Милле (также иногда Милле́c) — крупный английский живописец, один из основателей Братства прерафаэлитов.</p><p>Милле родился в Саутгемптоне и начал учиться рисованию девяти лет от роду. В 1838 году, когда стали очевидными его способности, семья перебралась в Лондон. В декабре 1840 года в возрасте 11 лет Милле поступил в Королевскую академию художеств, став самым молодым студентом за всю историю Академии. К пятнадцати годам он уже прекрасно владел кистью. В 1846 году его историческая картина <i>Писарро берет в плен перуанских инков</i> была отобрана для летней выставки академии. В итоге критика признала её лучшей на всей академической выставке того года.</p><p> В 1848 году на одной из выставок Милле знакомится с Холманом Хантом и Данте Габриэлем Россетти и вместе с ними основывает Братство прерафаэлитов.</p><p>Его ранние работы характеризуются значительной детализацией, в частности картина <i>Христос в родительском доме</i>, которую сочли излишне реалистичной и окрестили как возмутительную. Однако Милле это не смутило, и он продолжал свое творчество среди прерафаэлитов. На самом деле, техническое совершенство картин Милле сразу выделило его среди других живописцев, поэтому работы Милле всегда принимали на выставках Академии, какими радикальными бы они ни были.</p><p>В настоящее время Милле относится к числу самых любимых англичанами художников середины XIX века. Наиболее известная картина — <i>Офелия</i>, где изображена возлюбленная Россетти Элизабет Сиддал.</p>",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Милле,_Джон_Эверетт",
				"en": "https://en.wikipedia.org/wiki/John_Everett_Millais",
				"de": "https://de.wikipedia.org/wiki/John_Everett_Millais",
				"fr": "https://fr.wikipedia.org/wiki/John_Everett_Millais",
				"es": "https://es.wikipedia.org/wiki/John_Everett_Millais",
				"it": "https://it.wikipedia.org/wiki/John_Everett_Millais"
			}
		},
		"paintings": 33
	},
	{
		"id": 68,
		"name": "Pieter de Hooch",
		"years": "1629 – 1684",
		"genre": ["Baroque"],
		"nationality": ["Dutch"],
		"bio": {
			"ru": "<p>Питер де Хох (или де Хоох) — голландский живописец, который, подобно своему современнику Вермееру, специализировался на изображении повседневных интерьеров и экспериментировал со светом. О жизни этого известнейшего мастера жанровой живописи, чьи творения бесценны, известно очень мало.</p><p>Де Хох, будучи сыном каменщика и повитухи, принадлежал к низам голландского общества.  В молодости он, подобно другим художникам середины века, работал над грубоватыми жанровыми сценками, зачастую изображающими солдат в тавернах и на конюшнях. В это время он находился под влиянием творчества Карела Фабрициуса и Николаса Маса.</p><p>Около 1658 года стиль де Хоха изменился, и открылся наиболее значительный период его творчества. По тонкости письма и геометрической точности композиционного расчета его произведения имеют много общего с работами Вермеера, однако искусствоведы до сих пор не могут прийти к согласию, какой из художников подражал другому.</p><p>В 1660 году художник переезжает в Амстердам. В 1667 году умирает жена де Хоха, что серьёзно повлияло на душевное состояние и творчество художника, он переезжает на окраину Амстердама. Поздние работы амстердамского периода темнее дельфтских по колориту и менее тщательно выписаны.</p><p>В 1684 году де Хох умер в сумасшедшем доме.</p>",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Хох,_Питер_де",
				"en": "https://en.wikipedia.org/wiki/Pieter_de_Hooch",
				"de": "https://de.wikipedia.org/wiki/Pieter_de_Hooch",
				"fr": "https://fr.wikipedia.org/wiki/Pieter_de_Hooch",
				"es": "https://es.wikipedia.org/wiki/Pieter_de_Hooch",
				"it": "https://it.wikipedia.org/wiki/Pieter_de_Hooch"
			}
		},
		"paintings": 21
	},
	{
		"id": 69,
		"name": "Paul Cezanne",
		"years": "1839 – 1906",
		"genre": ["Post-Impressionism"],
		"nationality": ["French"],
		"bio": {
			"ru": "<p>Поль Сезанн — французский художник-живописец, яркий представитель постимпрессионизма.</p><p>Сезанн родился в Экс-ан-Провансе 19 января 1839 года. Он был единственным сыном властного отца и вырос в тихом тенистом Экс-ан-Провансе, старой провинциальной столице Южной Франции, в 15 милях в глубь страны от Марселя. Его образование вполне соответствовало традиции и общественным и религиозным требованиям времени. Сезанн учился хорошо, если не блестяще, и получил немало наград по математике, латинскому и греческому языкам. На протяжении всей последующей жизни он с увлечением читал классических авторов, писал латинские и французские стихи и до последних дней был способен цитировать по памяти целые страницы из Апулея, Вергилия и Лукреция.</p><p>Художественное наследие Сезанна составляет больше 800 работ маслом, не считая акварелей и других произведений. Никто не может подсчитать количества работ, уничтоженных, как несовершенные, самим художником за годы своего долгого творческого пути. В парижском осеннем Салоне 1904 года целый зал был отведен для демонстрации картин Сезанна. Эта выставка стала первым действительным успехом, более того — триумфом художника.</p><p>Ранние работы Сезанна отличаются темпераментом, мрачными сценами и признаками отсутствия профессиональной школы. По сюжетам их можно отнести к романтизму, но сам выбор сюжетов определённо связан с серьёзными психическими проблемами автора. Всё это, вместе взятое: и сюжеты работ, и откровенно слабая школа рисунка и живописи, предопределили невозможность как выставить, так и продать эти работы. В дальнейшем знакомство и совместная работа с Камилем Писарро привели к тому, что палитра Сезанна стала намного более светлой, а мазки - раздельными. Влияние Писарро сказалось в том, что пейзажи заняли ключевое место в творчестве Сезанна.</p><p>В своём творчестве художник попытался ценой титанических усилий примирить классику и современность, Пуссена и природу, законы большого стиля и право на индивидуальный выбор. Конечно, в эпоху торжества индивидуального выбора никакой стиль больше не мог быть образцом для художников, каждый из которых выбирал теперь свой путь в искусстве свободно, повинуясь исключительно внутренним свойствам своей души, а не требованиям художественного сообщества. Поэтому задача, которую ставил перед собой Сезанн, была в принципе невыполнимой, что и предопределило постоянные сомнения художника. Невозможно одновременно утверждать и свободу, и каноны. Но те конкретные художественные результаты, которых достигал в своём творчестве Сезанн, были настолько впечатляющими, что вызывали уважение у представителей самых разных направлений в живописи.</p>",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Сезанн,_Поль",
				"en": "https://en.wikipedia.org/wiki/Paul_Cézanne",
				"de": "https://de.wikipedia.org/wiki/Paul_C%C3%A9zanne",
				"fr": "https://fr.wikipedia.org/wiki/Paul_C%C3%A9zanne",
				"es": "https://es.wikipedia.org/wiki/Paul_C%C3%A9zanne",
				"it": "https://it.wikipedia.org/wiki/Paul_C%C3%A9zanne"
			}
		},
		"paintings": 47
	},
	{
		"id": 70,
		"name": "Theodore Gericault",
		"years": "1791 – 1824",
		"genre": ["Romanticism"],
		"nationality": ["French"],
		"bio": {
			"ru": "<p>Жан Луи Андре Теодор Жерико — французский живописец эпохи романтизма.</p><p>Теодор Жерико родился в 1791 году в Руане. Его отец Жорж Никола Жерико был адвокатом, а мать Луиза Карюэль де Сен-Мартен происходила из старого и богатого буржуазного рода. Теодор Жерико учился у Карла Верне (1808—1810), а потом у Пьера Герена (1810—1811), которого огорчали его приемы передачи природы не в соответствии с принципами школы Жака-Луи Давида и пристрастие к Рубенсу, но впоследствии признавший рациональность стремлений Жерико.</p><p>В 1812 году Жерико представляет в Салоне свою работу <i>Офицер конных императорских егерей во время атаки</i>. С 1810 по 1815 год художник занимается в Лувре, копируя работы П. П. Рубенса, Тициана, Д. Веласкеса и Рембрандта.</p><p>Служа в королевских мушкетерах, Жерико писал преимущественно батальные сцены, однако после путешествия в Италию в 1817—19 гг. он исполнил большую и сложную картину <i>Плот „Медузы“</i> (находится в Лувре, в Париже). Новизна сюжета, глубокий драматизм композиции и жизненная правда этого мастерски написанного произведения не были сразу оценены по достоинству, но вскоре оно получило признание даже со стороны приверженцев академического стиля и принесло художнику славу талантливого и смелого новатора.</p><p>Наслаждаться этой славой ему пришлось недолго: едва успев возвратиться в Париж из Англии, где главным предметом его занятий было изучение лошадей, он погиб в результате несчастного случая — падения с лошади. Этюды с натуры, мастерские литографии и многочисленные жанры, исполненные Жерико в последние годы жизни и изображающие лошадей в различных отношениях к человеку, отличаются необыкновенной энергией и верностью натуре. Преждевременная кончина помешала ему написать уже задуманную большую картину <i>Отступление французов из России в 1812</i>. Помимо полотна <i>Плот „Медузы“</i>, в Лувре находится семь батальных картин и шесть рисунков этого художника.</p>",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Жерико,_Теодор",
				"en": "https://en.wikipedia.org/wiki/Théodore_Géricault",
				"de": "https://de.wikipedia.org/wiki/Th%C3%A9odore_G%C3%A9ricault",
				"fr": "https://fr.wikipedia.org/wiki/Th%C3%A9odore_G%C3%A9ricault",
				"es": "https://es.wikipedia.org/wiki/Th%C3%A9odore_G%C3%A9ricault",
				"it": "https://it.wikipedia.org/wiki/Th%C3%A9odore_G%C3%A9ricault"
			}
		},
		"paintings": 31
	},
	{
		"id": 71,
		"name": "Thomas Gainsborough",
		"years": "1727 – 1788",
		"genre": ["Rococo"],
		"nationality": ["British"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Гейнсборо,_Томас",
				"en": "https://en.wikipedia.org/wiki/Thomas_Gainsborough",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 28
	},
	{
		"id": 72,
		"name": "William Blake",
		"years": "1757 – 1827",
		"genre": ["Romanticism", "Symbolism"],
		"nationality": ["British"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Блейк,_Уильям",
				"en": "https://en.wikipedia.org/wiki/William_Blake",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 42
	},
	{
		"id": 73,
		"name": "Eugene Delacroix",
		"years": "1798 – 1863",
		"genre": ["Romanticism"],
		"nationality": ["French"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Делакруа,_Эжен",
				"en": "https://en.wikipedia.org/wiki/Eugène_Delacroix",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 31
	},
	{
		"id": 74,
		"name": "Johannes Vermeer",
		"years": "1632 – 1675",
		"genre": ["Baroque"],
		"nationality": ["Dutch"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Вермеер,_Ян",
				"en": "https://en.wikipedia.org/wiki/Johannes_Vermeer",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 26
	},
	{
		"id": 75,
		"name": "Henri Rousseau",
		"years": "1844 – 1910",
		"genre": ["Primitivism"],
		"nationality": ["French"],
		"bio": {
			"ru": "Руссо (Rousseau) Анри Жюльен Феликс (5.1844, Лаваль (Майен) - 04.09.1910), французский живописец. Руссо был художником-дилетантом. Он привлек к себе внимание парижского авангарда. когда впервые выставил картины в Салоне Независимых в 1885 году. Творчество Руссо вызывало восхищение Пабло Пикассо и его окружения, где ценили необычное, непринужденное восприятие мира Руссо, абсолютно свободное от догм академического общения. Интенсивный цвет, твердо очерченные формы и тщательно исполненные детали характеризуют наивный стиль Руссо. Фантастические, наивные и непосредственные пейзажи Руссо (“Прогулка в лесу”, около 1886, Кунстхауз, Цюрих), виды Парижа и его пригородов, жанровые сцены, портреты (“Автопортрет с палитрой”, 1889-1890, Национальная галерея, Прага; “Артиллеристы”, 1895, Музей Гугенхейма, Нью-Йорк) отличаются условностью общего решения и буквальной точностью деталей, плоскостностью форм, ярким и пестрым колоритом. Создавая воображаемые джунгли, Руссо черпал вдохновение во время многочисленных посещений ботанического сада в Париже. Прозвище Руссо - Таможенник - обязано своим происхождением его основной профессии. Творчество Руссо послужило импульсом к признанию эстетической ценности примитивизма, к использованию его выразительных средств многими профессиональными художниками ХХ века.",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Руссо,_Анри",
				"en": "https://en.wikipedia.org/wiki/Henri_Rousseau",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 70
	},
	{
		"id": 76,
		"name": "Vladimir Borovikovsky",
		"years": "1757 – 1825",
		"genre": ["Rococo", "Neoclassicism"],
		"nationality": ["Russian", "Ukrainian"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Боровиковский,_Владимир_Лукич",
				"en": "https://en.wikipedia.org/wiki/Vladimir_Borovikovsky",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 45
	},
	{
		"id": 77,
		"name": "Georges Seurat",
		"years": "1859 – 1891",
		"genre": ["Post-Impressionism"],
		"nationality": ["French"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Сёра,_Жорж-Пьер",
				"en": "https://en.wikipedia.org/wiki/Georges_Seurat",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 43
	},
	{
		"id": 78,
		"name": "Lucian Freud",
		"years": "1922 – 2011",
		"genre": ["Expressionism"],
		"nationality": ["British"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Фрейд,_Люсьен",
				"en": "https://en.wikipedia.org/wiki/Lucian_Freud",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 114
	},
	{
		"id": 79,
		"name": "Paul Klee",
		"years": "1879 – 1940",
		"genre": ["Expressionism", "Abstractionism", "Surrealism"],
		"nationality": ["German", "Swiss"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Клее,_Пауль",
				"en": "https://en.wikipedia.org/wiki/Paul_Klee",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 188
	},
	{
		"id": 80,
		"name": "Piet Mondrian",
		"years": "1872 – 1944",
		"genre": ["Neoplasticism"],
		"nationality": ["Dutch"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Мондриан,_Пит",
				"en": "https://en.wikipedia.org/wiki/Piet_Mondrian",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 84
	},
	{
		"id": 81,
		"name": "Pavel Filonov",
		"years": "1883 – 1941",
		"genre": ["Analytical Realism"],
		"nationality": ["Russian"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Филонов,_Павел_Николаевич",
				"en": "https://en.wikipedia.org/wiki/Pavel_Filonov",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 53
	},
	{
		"id": 82,
		"name": "Joan Miro",
		"years": "1893 – 1983",
		"genre": ["Surrealism"],
		"nationality": ["Spanish"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Миро,_Жоан",
				"en": "https://en.wikipedia.org/wiki/Joan_Miró",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 102
	},
	{
		"id": 83,
		"name": "Andy Warhol",
		"years": "1928 – 1987",
		"genre": ["Pop Art"],
		"nationality": ["American"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Уорхол,_Энди",
				"en": "https://en.wikipedia.org/wiki/Andy_Warhol",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 181
	},
	{
		"id": 84,
		"name": "Valentin Serov",
		"years": "1865 – 1911",
		"genre": ["Realism", "Impressionism"],
		"nationality": ["Russian"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Серов,_Валентин_Александрович",
				"en": "https://en.wikipedia.org/wiki/Valentin_Serov",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 149
	},
	{
		"id": 85,
		"name": "Alexei Harlamov",
		"years": "1840 – 1925",
		"genre": ["Realism"],
		"nationality": ["Russian"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Харламов,_Алексей_Алексеевич",
				"en": "https://en.wikipedia.org/wiki/Alexei_Harlamov",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 133
	},
	{
		"id": 86,
		"name": "Vasily Tropinin",
		"years": "1776 – 1857",
		"genre": ["Romanticism"],
		"nationality": ["Russian"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Тропинин,_Василий_Андреевич",
				"en": "https://en.wikipedia.org/wiki/Vasily_Tropinin",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 159
	},
	{
		"id": 87,
		"name": "Fra Angelico",
		"years": "1395 – 1455",
		"genre": ["Early Renaissance"],
		"nationality": ["Italian"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Фра_Беато_Анджелико",
				"en": "https://en.wikipedia.org/wiki/Fra_Angelico",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 91
	},
	{
		"id": 88,
		"name": "Edward Burne-Jones",
		"years": "1833 – 1898",
		"genre": ["Romanticism", "Aestheticism"],
		"nationality": ["British"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Бёрн-Джонс,_Эдвард",
				"en": "https://en.wikipedia.org/wiki/Edward_Burne-Jones",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 241
	},
	{
		"id": 89,
		"name": "Martin Schongauer",
		"years": "1448 – 1491",
		"genre": ["Northern Renaissance"],
		"nationality": ["German"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Шонгауэр,_Мартин",
				"en": "http://en.wikipedia.org/wiki/Martin_Schongauer",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 22
	},
	{
		"id": 90,
		"name": "Rogier van der Weyden",
		"years": "1399 – 1464",
		"genre": ["Northern Renaissance"],
		"nationality": ["Dutch"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Рогир_ван_дер_Вейден",
				"en": "https://en.wikipedia.org/wiki/Rogier_van_der_Weyden",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 91
	},
	{
		"id": 91,
		"name": "Giovanni di Paolo",
		"years": "1403 – 1482",
		"genre": ["Early Renaissance"],
		"nationality": ["Italian"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Джованни_ди_Паоло",
				"en": "http://en.wikipedia.org/wiki/Giovanni_di_Paolo",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 79
	},
	{
		"id": 92,
		"name": "Hans Baldung",
		"years": "1484 – 1545",
		"genre": ["Northern Renaissance"],
		"nationality": ["German"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Бальдунг,_Ханс",
				"en": "https://en.wikipedia.org/wiki/Hans_Baldung",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 46
	},
	{
		"id": 93,
		"name": "Gustave Moreau",
		"years": "1826 – 1898",
		"genre": ["Symbolism"],
		"nationality": ["French"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Моро,_Гюстав",
				"en": "https://en.wikipedia.org/wiki/Gustave_Moreau",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 257
	},
	{
		"id": 94,
		"name": "Paul Gauguin",
		"years": "1848 – 1903",
		"genre": ["Symbolism", "Post-Impressionism"],
		"nationality": ["French"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": "примерно 40 годных картин удалилось, можно переделать, когда будет время"
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Гоген,_Поль",
				"en": "http://en.wikipedia.org/wiki/Paul_Gauguin",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 311
	},
	{
		"id": 95,
		"name": "Raphael",
		"years": "1483 – 1520",
		"genre": ["High Renaissance"],
		"nationality": ["Italian"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Рафаэль_Санти",
				"en": "https://en.wikipedia.org/wiki/Raphael",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 109
	},
	{
		"id": 96,
		"name": "Paul Signac",
		"years": "1863 – 1935",
		"genre": ["Post-Impressionism"],
		"nationality": ["French"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Синьяк,_Поль",
				"en": "http://en.wikipedia.org/wiki/Paul_Signac",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 522
	},
	{
		"id": 97,
		"name": "Nicolas Poussin",
		"years": "1594 – 1665",
		"genre": ["Baroque"],
		"nationality": ["French"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Пуссен,_Никола",
				"en": "https://en.wikipedia.org/wiki/Nicolas_Poussin",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 135
	},
	{
		"id": 98,
		"name": "Hans Holbein",
		"years": "1497 – 1543",
		"genre": ["Northern Renaissance"],
		"nationality": ["German"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Гольбейн,_Ганс_(младший)",
				"en": "http://en.wikipedia.org/wiki/Hans_Holbein_the_Younger",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 117
	},
	{
		"id": 99,
		"name": "William Holman Hunt",
		"years": "1827 – 1910",
		"genre": ["Romanticism", "Symbolism"],
		"nationality": ["British"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Хант,_Уильям_Холман",
				"en": "http://en.wikipedia.org/wiki/William_Holman_Hunt",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 47
	},
	{
		"id": 100,
		"name": "Albrecht Altdorfer",
		"years": "1480 – 1538",
		"genre": ["Northern Renaissance"],
		"nationality": ["German"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Альтдорфер,_Альбрехт",
				"en": "https://en.wikipedia.org/wiki/Albrecht_Altdorfer",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 75
	},
	{
		"id": 101,
		"name": "Antonello da Messina",
		"years": "1430 – 1479",
		"genre": ["Early Renaissance"],
		"nationality": ["Italian"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Антонелло_да_Мессина",
				"en": "https://en.wikipedia.org/wiki/Antonello_da_Messina",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 33
	},
	{
		"id": 102,
		"name": "Arthur Hughes",
		"years": "1832 – 1915",
		"genre": ["Romanticism"],
		"nationality": ["British"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Хьюз,_Артур",
				"en": "https://en.wikipedia.org/wiki/Arthur_Hughes_(artist)",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 63
	},
	{
		"id": 103,
		"name": "Alexandre Benois",
		"years": "1870 – 1960",
		"genre": ["Art Nouveau"],
		"nationality": ["Russian"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Бенуа,_Александр_Николаевич",
				"en": "https://en.wikipedia.org/wiki/Alexandre_Benois",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 202
	},
	{
		"id": 104,
		"name": "Hans Memling",
		"years": "1440 – 1494",
		"genre": ["Northern Renaissance"],
		"nationality": ["Flemish"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Мемлинг,_Ганс",
				"en": "https://en.wikipedia.org/wiki/Hans_Memling",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 149
	},
	{
		"id": 105,
		"name": "Aleksandr Deyneka",
		"years": "1899 – 1969",
		"genre": ["Socialist Realism"],
		"nationality": ["Russian"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Дейнека,_Александр_Александрович",
				"en": "https://en.wikipedia.org/wiki/Aleksandr_Deyneka",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 440
	},
	{
		"id": 106,
		"name": "Giorgione",
		"years": "1477 – 1510",
		"genre": ["High Renaissance"],
		"nationality": ["Italian"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Джорджоне",
				"en": "https://en.wikipedia.org/wiki/Giorgione",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 34
	},
	{
		"id": 107,
		"name": "Alexander Ivanov",
		"years": "1806 – 1858",
		"genre": ["Academic Art"],
		"nationality": ["Russian"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Иванов,_Александр_Андреевич",
				"en": "https://en.wikipedia.org/wiki/Alexander_Andreyevich_Ivanov",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 132
	},
	{
		"id": 108,
		"name": "Correggio",
		"years": "1489 – 1534",
		"genre": ["High Renaissance", "Mannerism"],
		"nationality": ["Italian"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Корреджо",
				"en": "https://en.wikipedia.org/wiki/Antonio_da_Correggio",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 78
	},
	{
		"id": 109,
		"name": "Dmitry Levitzky",
		"years": "1735 – 1822",
		"genre": ["Rococo", "Neoclassicism"],
		"nationality": ["Russian", "Ukrainian"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Левицкий,_Дмитрий_Григорьевич",
				"en": "https://en.wikipedia.org/wiki/Dmitry_Levitzky",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 27
	},
	{
		"id": 110,
		"name": "Lucas van Leyden",
		"years": "1494 – 1533",
		"genre": ["Northern Renaissance"],
		"nationality": ["Dutch"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Лейден,_Лукас_ван",
				"en": "https://en.wikipedia.org/wiki/Lucas_van_Leyden",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 30
	},
	{
		"id": 111,
		"name": "Lucas Cranach the Elder",
		"years": "1472 – 1553",
		"genre": ["Northern Renaissance"],
		"nationality": ["German"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Кранах,_Лукас_(Старший)",
				"en": "https://en.wikipedia.org/wiki/Lucas_Cranach_the_Elder",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 358
	},
	{
		"id": 112,
		"name": "Michelangelo",
		"years": "1475 – 1564",
		"genre": ["High Renaissance"],
		"nationality": ["Italian"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Микеланджело",
				"en": "https://en.wikipedia.org/wiki/Michelangelo",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 49
	},
	{
		"id": 113,
		"name": "Nikolai Ge",
		"years": "1831 – 1894",
		"genre": ["Realism"],
		"nationality": ["Russian"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Ге,_Николай_Николаевич",
				"en": "https://en.wikipedia.org/wiki/Nikolai_Ge",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 43
	},
	{
		"id": 114,
		"name": "Robert Campin",
		"years": "1375 – 1444",
		"genre": ["Northern Renaissance"],
		"nationality": ["Flemish"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Кампен,_Робер",
				"en": "https://en.wikipedia.org/wiki/Robert_Campin",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 42
	},
	{
		"id": 115,
		"name": "Fyodor Rokotov",
		"years": "1736 – 1808",
		"genre": ["Rococo"],
		"nationality": ["Russian"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Рокотов,_Фёдор_Степанович",
				"en": "https://en.wikipedia.org/wiki/Fyodor_Rokotov",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 32
	},
	{
		"id": 116,
		"name": "Rockwell Kent",
		"years": "1882 – 1971",
		"genre": ["Realism"],
		"nationality": ["American"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Кент,_Рокуэлл",
				"en": "https://en.wikipedia.org/wiki/Rockwell_Kent",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 51
	},
	{
		"id": 117,
		"name": "Martiros Saryan",
		"years": "1880 – 1972",
		"genre": ["Realism", "Symbolism"],
		"nationality": ["Armenian"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Сарьян,_Мартирос_Сергеевич",
				"en": "https://en.wikipedia.org/wiki/Martiros_Saryan",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 444
	},
	{
		"id": 118,
		"name": "Jackson Pollock",
		"years": "1912 – 1956",
		"genre": ["Abstract Expressionism"],
		"nationality": ["American"],
		"bio": {
			"ru": "",
			"en": "",
			"de": "",
			"fr": "",
			"es": "",
			"it": ""
		},
		"link": {
			"local": "",
			"wikipedia": {
				"ru": "https://ru.wikipedia.org/wiki/Поллок,_Джексон",
				"en": "http://en.wikipedia.org/wiki/Jackson_Pollock",
				"de": "",
				"fr": "",
				"es": "",
				"it": ""
			}
		},
		"paintings": 24
	}];
	
	var exec = require('child_process').exec;


	for (i =0; i< painters.length; i++){

		painters[i]._id = String(painters[i].id);
	
		var paintings = painters[i].paintings;
		painters[i].paintings = [];
	
		for (z=1; z<= paintings; z++) {

			painters[i].paintings.push({
				id: z,
				name: {
					"ru": "",
					"en": "",
					"de": "",
					"fr": "",
					"es": "",
					"it": "",
					"zn": ""
				},
				year: "",
				genre: "",
				place: ""
			})
		}


		var cmd = "curl -H 'Content-Type: application/json' -X POST http://178.62.133.139:5994/painters/ -d '" + JSON.stringify(painters[i]).replace(/'/g, "") + "'";

		exec(cmd, function(error, stdout, stderr) {
			// console.log(cmd)
			console.log(stdout);
		});	
			
	}
	