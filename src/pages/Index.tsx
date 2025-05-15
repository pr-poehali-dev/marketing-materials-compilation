
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

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

  // Массив данных о медиа-источниках и публикациях
  const mediaSources: MediaSource[] = [
    {
      name: "Эхо Севера",
      description: "Популярное информационное агентство Архангельской области",
      icon: "Newspaper",
      publications: [
        {
          title: "Культурное мероприятие в Архангельске",
          date: "19.04.2015",
          url: "https://www.echosevera.ru/culture/2015/04/19/1705.html"
        },
        {
          title: "Новостная статья",
          date: "23.03.2015",
          url: "https://www.echosevera.ru/news/2015/03/23/12267.html"
        },
        {
          title: "Культурное обозрение",
          date: "25.03.2015",
          url: "https://www.echosevera.ru/culture/2015/03/25/1677.html"
        },
        {
          title: "Актуальные новости региона",
          date: "23.04.2015",
          url: "https://www.echosevera.ru/news/2015/04/23/12630.html"
        }
      ]
    },
    {
      name: "Правда Северо-Запада",
      description: "Авторитетная газета Архангельской области",
      icon: "FileText",
      publications: [
        {
          title: "ТАХОГРАФЫ ГЛОНАСС",
          description: "Статья о внедрении современных технологий мониторинга",
          url: "https://telegra.ph/TAHOGRAFY-GLONASS-06-19"
        }
      ]
    },
    {
      name: "Fashion Collection",
      description: "Глянцевый журнал о моде и стиле, Архангельск",
      icon: "Shirt",
      publications: [
        {
          title: "ПРАЗДНИК КРАСОТЫ",
          description: "Обзор модных событий региона",
          url: "https://telegra.ph/PRAZDNIK-KRASOTY-06-19"
        },
        {
          title: "FASHION BIRTHDAY",
          description: "Юбилейное мероприятие в мире моды",
          url: "https://telegra.ph/FASHION-BIRTHDAY-06-19"
        }
      ]
    },
    {
      name: "ВМАШИНЕ",
      description: "Специализированный журнал об автомобилях",
      icon: "Car",
      publications: [
        {
          title: "ДРАЙВ БЕЗ ПРЕДЕЛА",
          description: "Обзор мощных автомобилей",
          url: "https://telegra.ph/DRAJV-BEZ-PREDELA-06-19"
        },
        {
          title: "WELCOME TO ГОРОД РАЗБИТЫХ ДОРОГ",
          description: "Проблемы городской инфраструктуры",
          url: "https://telegra.ph/WELCOME-TO-GOROD-RAZBITYH-DOROG-06-19"
        },
        {
          title: "АВТОГАДЖЕТ",
          description: "Инновационные технологии для автомобилистов",
          url: "https://telegra.ph/AVTOGADZHET-06-19"
        }
      ]
    },
    {
      name: "Никита Прокшин в СМИ",
      description: "Медиа-присутствие в ведущих изданиях",
      icon: "User",
      publications: [
        {
          title: "Публикация в Эхо Севера",
          date: "04.02.2014",
          url: "https://www.echosevera.ru/news/2014/02/04/8714.html"
        },
        {
          title: "Еще одна публикация в Эхо Севера",
          date: "05.02.2014",
          url: "https://www.echosevera.ru/news/2014/02/05/8718.html"
        },
        {
          title: "Сет, гейм, матч! Где поиграть в теннис в ЮЗАО",
          description: "Статья в Аргументы и Факты",
          url: "https://uzao.aif.ru/stati/set-geim-matc-gde-poigrat-v-tennis-v-yuzao"
        },
        {
          title: "Партия ЛДПР представила предвыборную программу",
          description: "Публикация на Первом канале",
          url: "https://www.1tv.ru/news/2016-03-09/61296-partiya_ldpr_predstavila_predvybornuyu_programmu_s_kotoroy_poydyot_na_parlamentskoe_golosovanie"
        }
      ]
    }
  ];

  // Общее количество публикаций
  const totalPublications = mediaSources.reduce(
    (acc, source) => acc + source.publications.length, 0
  );

  // Функция для открытия ссылки в новой вкладке
  const openLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Хедер с заголовком */}
      <header className="bg-white dark:bg-gray-950 shadow-sm py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center font-[Montserrat]">
            Рекламные материалы
            <span className="text-purple-500 block font-medium mt-2">г. Архангельск</span>
          </h1>
          <p className="mt-4 text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-[Source Sans Pro]">
            Коммерческое предложение для потенциальных партнеров, содержащее подборку медиа-материалов 
            в ведущих изданиях Архангельска и федеральных СМИ.
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
              <p className="text-4xl font-bold text-purple-600">{mediaSources.length}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">ведущих СМИ</p>
            </CardContent>
          </Card>

          <Card className="w-64 bg-white/80 dark:bg-gray-900/80 backdrop-blur">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Публикации</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-purple-600">{totalPublications}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">рекламных материалов</p>
            </CardContent>
          </Card>

          <Card className="w-64 bg-white/80 dark:bg-gray-900/80 backdrop-blur">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Охват</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-purple-600">500K+</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">потенциальный охват аудитории</p>
            </CardContent>
          </Card>
        </div>

        {/* Табы для фильтрации по источникам */}
        <Tabs 
          defaultValue="all" 
          className="mb-12"
          onValueChange={setActiveTab}
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-flow-col auto-cols-max gap-2">
              <TabsTrigger value="all" className="px-6">
                Все издания
              </TabsTrigger>
              {mediaSources.map((source, index) => (
                <TabsTrigger key={index} value={source.name.toLowerCase().replace(/\s+/g, '-')} className="px-4">
                  <Icon name={source.icon || "Newspaper"} className="mr-2 h-4 w-4" />
                  {source.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {mediaSources.map((source, sourceIndex) => (
                source.publications.map((pub, pubIndex) => (
                  <PublicationCard 
                    key={`${sourceIndex}-${pubIndex}`}
                    publication={pub}
                    mediaSource={source}
                    onClick={() => openLink(pub.url)}
                  />
                ))
              ))}
            </div>
          </TabsContent>

          {mediaSources.map((source, index) => (
            <TabsContent 
              key={index} 
              value={source.name.toLowerCase().replace(/\s+/g, '-')}
              className="animate-fade-in"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 font-[Montserrat]">{source.name}</h2>
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
              <h3 className="text-xl font-bold mb-4 font-[Montserrat]">Контактная информация</h3>
              <p className="font-[Source Sans Pro]">
                Для получения дополнительной информации о рекламном сотрудничестве 
                свяжитесь с нашими представителями.
              </p>
              <Button className="mt-4 bg-purple-600 hover:bg-purple-700">
                <Icon name="Mail" className="mr-2 h-4 w-4" />
                Связаться с нами
              </Button>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 font-[Montserrat]">О презентации</h3>
              <p className="font-[Source Sans Pro]">
                Эта презентация содержит рекламные материалы, опубликованные 
                в ведущих СМИ г. Архангельска и федеральных изданиях.
                Все материалы представлены исключительно в информационных целях.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Рекламная презентация. Все права защищены.</p>
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

const PublicationCard = ({ publication, mediaSource, onClick }: PublicationCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer h-full bg-white/90 dark:bg-gray-900/90 backdrop-blur" onClick={onClick}>
      <CardHeader className="pb-2 border-b">
        <div className="flex items-center mb-2">
          <Icon name={mediaSource.icon || "Newspaper"} className="mr-2 h-5 w-5 text-purple-500" />
          <span className="text-sm text-gray-500 dark:text-gray-400">{mediaSource.name}</span>
        </div>
        <CardTitle className="text-xl font-medium line-clamp-2">{publication.title}</CardTitle>
        {publication.date && (
          <CardDescription className="text-gray-500 text-sm">
            Опубликовано: {publication.date}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="pt-4">
        {publication.description && (
          <p className="text-gray-600 dark:text-gray-400 line-clamp-3">{publication.description}</p>
        )}
      </CardContent>
      <CardFooter className="pt-0 flex justify-end">
        <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 dark:hover:bg-gray-800 gap-1">
          Просмотреть
          <Icon name="ExternalLink" className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Index;
