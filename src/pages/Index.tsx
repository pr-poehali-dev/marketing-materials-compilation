import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { toast } from "@/components/ui/use-toast";

// Определение типов для медиа и публикаций
interface Publication {
  title: string;
  description?: string;
  date?: string;
  url: string;
}

interface MediaSource {
  name: string;
  description?: string;
  icon?: string;
  publications: Publication[];
}

const Index = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Массив данных о медиа-источниках и публикаций
  const mediaSources: MediaSource[] = [
    {
      name: "Эхо Севера",
      description: "Популярное информационное агентство Архангельской области",
      icon: "Newspaper",
      publications: [
        {
          title: "Культурное мероприятие в Архангельске",
          date: "19.04.2015",
          url: "https://www.echosevera.ru/culture/2015/04/19/1705.html",
        },
        {
          title: "Новостная статья",
          date: "23.03.2015",
          url: "https://www.echosevera.ru/news/2015/03/23/12267.html",
        },
        {
          title: "Культурное обозрение",
          date: "25.03.2015",
          url: "https://www.echosevera.ru/culture/2015/03/25/1677.html",
        },
        {
          title: "Актуальные новости региона",
          date: "23.04.2015",
          url: "https://www.echosevera.ru/news/2015/04/23/12630.html",
        },
      ],
    },
    {
      name: "Правда Северо-Запада",
      description: "Авторитетная газета Архангельской области",
      icon: "FileText",
      publications: [
        {
          title: "ТАХОГРАФЫ ГЛОНАСС",
          description: "Статья о внедрении современных технологий мониторинга",
          url: "https://telegra.ph/TAHOGRAFY-GLONASS-06-19",
        },
      ],
    },
    {
      name: "Fashion Collection",
      description: "Глянцевый журнал о моде и стиле, Архангельск",
      icon: "Shirt",
      publications: [
        {
          title: "ПРАЗДНИК КРАСОТЫ",
          description: "Обзор модных событий региона",
          url: "https://telegra.ph/PRAZDNIK-KRASOTY-06-19",
        },
        {
          title: "FASHION BIRTHDAY",
          description: "Юбилейное мероприятие в мире моды",
          url: "https://telegra.ph/FASHION-BIRTHDAY-06-19",
        },
      ],
    },
    {
      name: "ВМАШИНЕ",
      description: "Специализированный журнал об автомобилях",
      icon: "Car",
      publications: [
        {
          title: "ДРАЙВ БЕЗ ПРЕДЕЛА",
          description: "Обзор мощных автомобилей",
          url: "https://telegra.ph/DRAJV-BEZ-PREDELA-06-19",
        },
        {
          title: "WELCOME TO ГОРОД РАЗБИТЫХ ДОРОГ",
          description: "Проблемы городской инфраструктуры",
          url: "https://telegra.ph/WELCOME-TO-GOROD-RAZBITYH-DOROG-06-19",
        },
        {
          title: "АВТОГАДЖЕТ",
          description: "Инновационные технологии для автомобилистов",
          url: "https://telegra.ph/AVTOGADZHET-06-19",
        },
      ],
    },
    {
      name: "Никита Прокшин в СМИ",
      description: "Медиа-присутствие в ведущих изданиях",
      icon: "User",
      publications: [
        {
          title: "Публикация в Эхо Севера",
          date: "04.02.2014",
          url: "https://www.echosevera.ru/news/2014/02/04/8714.html",
        },
        {
          title: "Еще одна публикация в Эхо Севера",
          date: "05.02.2014",
          url: "https://www.echosevera.ru/news/2014/02/05/8718.html",
        },
        {
          title: "Сет, гейм, матч! Где поиграть в теннис в ЮЗАО",
          description: "Статья в Аргументы и Факты",
          url: "https://uzao.aif.ru/stати/set-geim-matc-gde-poigrat-v-tennis-v-yuzao",
        },
        {
          title: "Партия ЛДПР представила предвыборную программу",
          description: "Публикация на Первом канале",
          url: "https://www.1tv.ru/news/2016-03-09/61296-partiya_ldpr_predставила_preдvybornую_programmu_s_kotoroy_poydyot_na_parlamentskoe_golosovanie",
        },
      ],
    },
    {
      name: "BQ в СМИ",
      description: "Упоминания в СМИ бренда бытовой техники и электроники",
      icon: "Laptop",
      publications: [
        {
          title:
            "Обзор новой линейки беспроводных пылесосов BQ на телеканале Россия-1",
          description: "Видеоматериал о новинках бытовой техники",
          url: "https://smotrim.ru/video/2593342",
        },
        {
          title: "Бренд BQ представил новую линейку беспроводных пылесосов",
          description: "Обзор технических характеристик и преимуществ",
          url: "https://upweek.ru/brend-bq-predставил-novuyu-linejku-беспроводных-пылесосов",
        },
        {
          title: "BQ выпустил четыре новых беспроводных пылесоса",
          description: "Анонс продуктовой линейки для российского рынка",
          url: "https://mpp-news.ru/2023/03/15/bq-vypustил-chetyre-novyh-беспроводных-пылесоса/",
        },
        {
          title:
            "BQ-1036L Exion Advant: недорогой 10-дюймовый планшет с Full HD экраном",
          description: "Детальный обзор новой модели планшета",
          url: "https://www.dgl.ru/technique/tablets/bq-1036l-exion-advant-nedorogoj-10-дюймовый-планшет-с-full-hd-экраном.html",
        },
        {
          title: "Обзор планшета BQ-1036L Exion Advant",
          description: "Технический обзор с тестированием производительности",
          url: "https://itndaily.ru/2023/05/12/obзор-планшета-bq-1036l-exion-advant/",
        },
        {
          title: "Какую технику покупали в подарок на 8 марта?",
          description: "Аналитика продаж на официальном сайте бренда",
          url: "https://bq.ru/news/kakuyu-tekhniku-pokupали-в-подарок-на-8-марта--/",
        },
        {
          title: "В России появился вертикальный пылесос на замену Dyson",
          description: "Сравнительный анализ с конкурентами на рынке",
          url: "https://bq.ru/news/v-rossii-появился-вертикальный-пылесос-на-замену-dyson/",
        },
        {
          title: "Бренд BQ представил новую линейку беспроводных пылесосов",
          description: "Пресс-релиз на официальном сайте компании",
          url: "https://bq.ru/news/brend-bq-пredставил-novuyu-lineyку-беспроводных-пылесосов/",
        },
      ],
    },
    {
      name: "Виктория Татосян в СМИ",
      description: "Упоминания в СМИ известного косметолога",
      icon: "Sparkles",
      publications: [
        {
          title:
            "Новый побочный эффект пандемии: маски вызвали проблемы с кожей",
          description: "Интервью для МК о влиянии масок на здоровье кожи",
          url: "https://www.mk.ru/social/2021/02/06/novый-пobochnyj-эффект-пандемии-мaski-vyzвали-проблемы-с-kozhey.html",
        },
        {
          title:
            "Новый побочный эффект пандемии: маски вызвали проблемы с кожей",
          description: "Экспертное мнение в журнале Profile Russia",
          url: "https://profilerussia.com/2021/02/06/novyi-пobochnyj-эффект-пандемии-мaski-vyzвали-проблемы-с-kojey/",
        },
        {
          title:
            "Новый побочный эффект пандемии: маски вызвали проблемы с кожей",
          description: "Аналитический материал с комментариями эксперта",
          url: "https://newvesti.info/2021/02/06/novый-пobochnyj-эффект-пандемии-мaski-vyzвали-проблемы-с-kozhey.html",
        },
        {
          title:
            "Новый нежелательные последствия сильной эпидемии: маски вызвали трудности с кожей",
          description: "Статья о последствиях длительного ношения масок",
          url: "https://a-climat.ru/novyj-nezhelatelnye-пosledstviya-сильной-эпидемии-мaski-vyzвали-трудности-с-kozhey.html",
        },
        {
          title: "Интервью с Викторией Татосян",
          description: "Видеоинтервью с экспертом в области косметологии",
          url: "https://www.youtube.com/watch?v=bL2o4cFTUd8",
        },
      ],
    },
    {
      name: "Избирательная кампания 2021",
      description:
        "Материалы для СМИ, подготовленные в рамках кампании по выборам в Госдуму в Калуге, Туле и Рязани",
      icon: "Vote",
      publications: [
        {
          title: "Справедливая Россия поможет волонтерам",
          description:
            "Публикация в КП Тула о поддержке волонтерского движения",
          url: "https://www.tula.kp.ru/daily/27264/4397722/",
        },
        {
          title: "Справедливая Россия: кому достанутся путевки в Крым",
          description: "Информация о социальной программе партии",
          url: "https://myslo.ru/news/company/2021-04-15-spravedливая-rossия-komu-dostanutsya-putevki-v-crym",
        },
        {
          title: "Справедливая Россия поможет калужским волонтерам",
          description: "Публикация в КП Калуга о помощи добровольцам",
          url: "https://www.kaluga.kp.ru/daily/27264/4397271/",
        },
        {
          title: "Справедливая Россия: кто выиграет путешествие в Крым",
          description: "Анонс конкурса для жителей Рязани",
          url: "https://rzn.mk.ru/politics/2021/04/16/spravedливая-rossия-kто-vyigraet-путешествие-в-Crym.html",
        },
        {
          title: "Справедливая Россия объявила о слиянии с другими партиями",
          description: "Публикация о политическом объединении",
          url: "https://www.tula.kp.ru/daily/27271/4405341/",
        },
        {
          title: "У пенсионеров украли 45 млрд рублей пенсий",
          description: "Публикация о пенсионной политике в КП Тула",
          url: "https://www.tula.kp.ru/daily/27279/4414450/",
        },
        {
          title:
            "Захар Прилепин: «Надо, чтобы количество сортов йогуртов в стране начало соответствовать количеству качественных дорог»",
          description: "Интервью с политическим деятелем",
          url: "https://newstula.ru/fn_719009.html",
        },
        {
          title: "Названы шокирующие цифры смертности и рождаемости",
          description: "Аналитический материал о демографической ситуации",
          url: "https://rzn.mk.ru/social/2021/06/09/nazvany-шокирующие-цифры-смертности-и-rozhдаемости.html",
        },
        {
          title: "Справедливая Россия запустила свое приложение на Андроид",
          description: "Новость о цифровизации партийной работы",
          url: "https://www.kaluga.kp.ru/daily/27291/4429436/",
        },
        {
          title: "Справедливая Россия представила свою предвыборную программу",
          description: "Обзор программных тезисов партии",
          url: "https://myslo.ru/news/company/2021-07-05-spravedlivая-rossия-представила-свою-predvybornую-программу",
        },
        {
          title: "Справедливая Россия представила свою предвыборную программу",
          description: "Публикация программных положений партии",
          url: "https://ryazannews.ru/fn_743352.html",
        },
        {
          title:
            "Александр Бабичев выступил за введение двух дополнительных выходных после вакцинации",
          description: "Инициатива по поддержке вакцинируемых граждан",
          url: "https://www.kaluga.kp.ru/daily/28318/4460656/",
        },
        {
          title:
            "Большинство рязанцев выступили против принудительной вакцинации",
          description: "Результаты социологического опроса",
          url: "https://www.rzn.info/news/2021/7/14/bolольшинство-ryazancev-вystupили-против-принудительной-вакцинации.html",
        },
        {
          title: "В беге не оставим",
          description: "Социальная инициатива партии в Калуге",
          url: "https://www.kaluga-poisk.ru/news/obschestvo/v-bede-ne-ostavим",
        },
      ],
    },
    // Добавляем новый раздел про Есенин-центр
    {
      name: "Есенин-центр",
      description:
        "Публикации об открытии Захаром Прилепиным «Есенин-центра» в Рязани",
      icon: "BookOpen",
      publications: [
        {
          title: "Захар Прилепин открыл в Рязани «Есенин-центр»",
          description: "Репортаж с церемонии открытия арт-пространства",
          url: "https://www.rzn.info/articles/zahar-prilepin-otkryl-v-ryazani-esenin-centr.html",
        },
        {
          title: "Рязанские новости: открытие «Есенин-центра»",
          description: "Подробности о новом культурном пространстве",
          url: "https://ryazannews.ru/fn_737139.html",
        },
        {
          title: "Прилепин открыл культурное пространство в Рязани",
          description: "Публикация в Комсомольской правде о новом арт-центре",
          url: "https://www.ryazan.kp.ru/daily/28305.5/4450123/",
        },
        {
          title:
            "От слова к делу: Захар Прилепин открыл в Рязани арт-пространство «Есенин-центр»",
          description: "Репортаж с церемонии открытия в МК Рязань",
          url: "https://rzn.mk.ru/social/2021/07/27/ot-slova-k-delu-zakhar-prilepin-otkryl-v-ryazani-artprostranstvo-esenincentr.html",
        },
        {
          title: "Арт-пространство «Есенин-центр» открылось в Рязани",
          description:
            "Публикация в Интерфакс о новом туристическом объекте региона",
          url: "https://www.interfax-russia.ru/tourism/news/art-prostranstvo-esenin-centr-otkrylos-v-ryazani",
        },
        {
          title: "В Рязани официально открыт Есенин Центр",
          description: "Статья в Викиновостях о культурном событии",
          url: "https://ru.wikinews.org/wiki/%D0%92_%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D0%B8_%D0%BE%D1%84%D0%B8%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE_%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82_%D0%95%D1%81%D0%B5%D0%BD%D0%B8%D0%BD_%D0%A6%D0%B5%D0%BD%D1%82%D1%80",
        },
        {
          title: "Есенин-центр начинает работу",
          description: "Публикация в литературном издании «Завтра»",
          url: "https://zavtra.ru/blogs/esenin_tcentr_nachinaet_rabotu_",
        },
        {
          title: "Информация об открытии «Есенин-центра»",
          description: "Новостная публикация в нижегородском издании",
          url: "https://progorodnn.ru/news/96623",
        },
      ],
    },
    // Добавляем раздел про Федеральный центр прикладного развития ИИ
    {
      name: "ИИ-технологии",
      description:
        "Присутствие в СМИ и социальных медиа Федерального центра прикладного развития искусственного интеллекта",
      icon: "Brain",
      publications: [
        {
          title: "Запущен новый проект поддержки разработчиков нейросетей",
          description: "Публикация о проекте «ПРОГРЕССИИВ» в Robotics World",
          url: "https://roboticsworld.ru/gover-sup/progressiiv-zapushchen-novyy-proект-поддерdzhki-razrabotchikov-neyrosetey/",
        },
        {
          title:
            "Господдержка ждет разработчиков в области искусственного интеллекта",
          description: "Информация о государственной поддержке ИИ-проектов",
          url: "https://sibirnews.ru/news/2023-12-13-gospodderzhka-zhdet-razработчиков-в-области-искусственного-интеллекта/",
        },
        {
          title:
            "Федеральный центр приладного развития ИИ запустил проект «ПРОГРЕССИИВ»",
          description:
            "Официальная публикация на портале «Искусственный интеллект России»",
          url: "https://ai.gov.ru/mediacenter/federalnyy-tsentr-prikладного-razвитиya-искусственного-интеллекта-zapustil-proект-progressiiv-dlya-p/",
        },
        {
          title: "Публикация о проекте поддержки разработчиков нейросетей",
          description: "Материал в новосибирском издании Деловой квартал",
          url: "https://nsk.dk.ru/news/237195239",
        },
        {
          title:
            "Федеральный центр приладного развития ИИ поддержит разработчиков нейросетей",
          description: "Публикация в CNews о запуске проекта «ПРОГРЕССИИВ»",
          url: "https://www.cnews.ru/news/line/2023-12-12_federalnyj_tsentr_prikladnogo",
        },
        {
          title: "Информация о проекте поддержки разработчиков нейросетей",
          description: "Публикация в IT-издании о государственной поддержке",
          url: "https://www.novostiitkanala.ru/news/detail.php?ID=173899",
        },
        {
          title: "Металлоинфо: о проекте «ПРОГРЕССИИВ»",
          description:
            "Публикация в отраслевом издании о высокотехнологичном проекте",
          url: "https://www.metalinfo.ru/ru/news/155934",
        },
        {
          title:
            "Номинация «Цифра в промышленности»: кто станет лауреатом премии",
          description:
            "Публикация в издании «Эксперт-Урал» о номинантах премии",
          url: "https://expert-ural.com/news/nominaciya-cifra-v-promishlennosti-kто-stanet-laureатом-премии.html",
        },
        {
          title: "Публикация в социальных медиа о проекте",
          description: "Пост в сообществе ВКонтакте",
          url: "https://m.vk.com/wall-41425853_2753",
        },
        {
          title: "Телеграм-канал Эксперт-Урал о проекте",
          description: "Публикация в телеграм-канале издания",
          url: "https://t.me/experturall/4467",
        },
        {
          title: "Пост в социальных сетях о проекте",
          description: "Информация о проекте в сообществе ВКонтакте",
          url: "https://m.vk.com/wall-77318376_4192",
        },
      ],
    },
  ];

  // Общее количество публикаций
  const totalPublications = mediaSources.reduce(
    (acc, source) => acc + source.publications.length,
    0,
  );

  // Функция для открытия ссылки в новой вкладке
  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Хедер с заголовком */}
      <header className="bg-white dark:bg-gray-950 shadow-sm py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center font-[Montserrat]">
            Рекламные материалы
            <span className="text-purple-500 block font-medium mt-2">
              г. Архангельск
            </span>
          </h1>
          <p className="mt-4 text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-[Source Sans Pro]">
            Коммерческое предложение для потенциальных партнеров, содержащее
            подборку медиа-материалов в ведущих изданиях Архангельска и
            федеральных СМИ.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Статистика */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <Card className="w-64 bg-white/80 dark:bg-gray-900/80 backdrop-blur">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Издания</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-purple-600">
                {mediaSources.length}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                ведущих СМИ
              </p>
            </CardContent>
          </Card>

          <Card className="w-64 bg-white/80 dark:bg-gray-900/80 backdrop-blur">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Публикации</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-purple-600">
                {totalPublications}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                рекламных материалов
              </p>
            </CardContent>
          </Card>

          <Card className="w-64 bg-white/80 dark:bg-gray-900/80 backdrop-blur">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Охват</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-purple-600">500K+</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                потенциальный охват аудитории
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Табы для фильтрации по источникам */}
        <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-flow-col auto-cols-max gap-2">
              <TabsTrigger value="all" className="px-6">
                Все издания
              </TabsTrigger>
              {mediaSources.map((source, index) => (
                <TabsTrigger
                  key={index}
                  value={source.name.toLowerCase().replace(/\s+/g, "-")}
                  className="px-4"
                >
                  <Icon
                    name={source.icon || "Newspaper"}
                    className="mr-2 h-4 w-4"
                  />
                  {source.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {mediaSources.map((source, sourceIndex) =>
                source.publications.map((pub, pubIndex) => (
                  <PublicationCard
                    key={`${sourceIndex}-${pubIndex}`}
                    publication={pub}
                    mediaSource={source}
                    onClick={() => openLink(pub.url)}
                  />
                )),
              )}
            </div>
          </TabsContent>

          {mediaSources.map((source, index) => (
            <TabsContent
              key={index}
              value={source.name.toLowerCase().replace(/\s+/g, "-")}
              className="animate-fade-in"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 font-[Montserrat]">
                  {source.name}
                </h2>
                {source.description && (
                  <p className="text-gray-600 dark:text-gray-400 max-w-3xl font-[Source Sans Pro]">
                    {source.description}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {source.publications.map((pub, pubIndex) => (
                  <PublicationCard
                    key={pubIndex}
                    publication={pub}
                    mediaSource={source}
                    onClick={() => openLink(pub.url)}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </main>

      {/* Футер */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 font-[Montserrat]">
                Контактная информация
              </h3>
              <p className="font-[Source Sans Pro]">
                Для получения дополнительной информации о рекламном
                сотрудничестве свяжитесь с нашими представителями.
              </p>
              <Button
                className="mt-4 bg-purple-600 hover:bg-purple-700"
                onClick={() =>
                  toast({
                    title: "Связаться с нами",
                    description: "Email: info@example.com",
                  })
                }
              >
                <Icon name="Mail" className="mr-2 h-4 w-4" />
                Связаться с нами
              </Button>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 font-[Montserrat]">
                О презентации
              </h3>
              <p className="font-[Source Sans Pro]">
                Эта презентация содержит рекламные материалы, опубликованные в
                ведущих СМИ г. Архангельска и федеральных изданиях. Все
                материалы представлены исключительно в информационных целях.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} Рекламная презентация. Все права
              защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Компонент карточки публикации
interface PublicationCardProps {
  publication: Publication;
  mediaSource: MediaSource;
  onClick: () => void;
}

const PublicationCard = ({
  publication,
  mediaSource,
  onClick,
}: PublicationCardProps) => {
  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer h-full bg-white/90 dark:bg-gray-900/90 backdrop-blur"
      onClick={onClick}
    >
      <CardHeader className="pb-2 border-b">
        <div className="flex items-center mb-2">
          <Icon
            name={mediaSource.icon || "Newspaper"}
            className="mr-2 h-5 w-5 text-purple-500"
          />
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {mediaSource.name}
          </span>
        </div>
        <CardTitle className="text-xl font-medium line-clamp-2">
          {publication.title}
        </CardTitle>
        {publication.date && (
          <CardDescription className="text-gray-500 text-sm">
            Опубликовано: {publication.date}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="pt-4">
        {publication.description && (
          <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
            {publication.description}
          </p>
        )}
      </CardContent>
      <CardFooter className="pt-0 flex justify-end">
        <Button
          variant="ghost"
          size="sm"
          className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 dark:hover:bg-gray-800 gap-1"
        >
          Просмотреть
          <Icon name="ExternalLink" className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Index;
