'use client';

import { useLanguage } from '@/lib/useLanguage';
import Navigation from '@/components/Navigation';
import Link from 'next/link';

const translations = {
  de: {
    title: 'Über uns',
    subtitle: 'Berlin Indoor Padel Club - Ein Projekt mit Zukunft',
    founder: {
      title: 'Der Gründer',
      name: 'Igor Reshnev',
      role: 'Initiator und Gründer',
      story: 'Als begeisterter Padel-Spieler und Unternehmer habe ich die Vision, den ersten modernen Indoor-Padel-Club in Berlin zu eröffnen. Mein Ziel ist es, eine hochwertige Sporteinrichtung zu schaffen, die das wachsende Interesse an diesem faszinierenden Sport befriedigt.'
    },
    mission: {
      title: 'Unsere Mission',
      description: 'Wir möchten Padel in Berlin zugänglicher machen und eine Gemeinschaft von Spielern aller Niveaus aufbauen.',
      goals: [
        'Erhöhung der Verfügbarkeit von Padel-Plätzen in Berlin',
        'Schaffung einer inklusiven Sportgemeinschaft',
        'Förderung des Padel-Sports bei Jugendlichen',
        'Entwicklung einer modernen Sportinfrastruktur'
      ]
    },
    vision: {
      title: 'Unsere Vision',
      description: 'Wir träumen von einem modernen, technologisch fortschrittlichen Padel-Club, der zum Zentrum der Berliner Padel-Community wird.',
      features: [
        'Mehrere hochwertige Indoor-Plätze',
        'Moderne Ausrüstung und Technologie',
        'Professionelle Trainer und Kurse',
        'Gemeinschaftsbereiche und Gastronomie',
        'Flexible Öffnungszeiten'
      ]
    },
    market: {
      title: 'Marktanalyse',
      description: 'Der Padel-Markt in Deutschland wächst rasant, aber das Angebot kann mit der Nachfrage nicht Schritt halten.',
      insights: [
        'Wachsende Popularität des Sports',
        'Begrenzte Anzahl von Indoor-Plätzen',
        'Hohe Auslastung bestehender Einrichtungen',
        'Steigendes Interesse bei Unternehmen für Teambuilding'
      ]
    },
    investment: {
      title: 'Investitionsmöglichkeiten',
      description: 'Wir suchen strategische Partner und Investoren, die an der Entwicklung des Padel-Sports in Berlin interessiert sind.',
      opportunities: [
        'Eigenkapitalbeteiligung',
        'Strategische Partnerschaften',
        'Franchise-Möglichkeiten',
        'Sponsoring und Marketing-Partnerschaften'
      ],
      contactButton: 'Kontakt aufnehmen',
      backButton: '← Zurück zur Startseite'
    }
  },
  en: {
    title: 'About Us',
    subtitle: 'Berlin Indoor Padel Club - A Project with Future',
    founder: {
      title: 'The Founder',
      name: 'Igor Reshnev',
      role: 'Initiator and Founder',
      story: 'As an enthusiastic padel player and entrepreneur, I have the vision to open the first modern indoor padel club in Berlin. My goal is to create a high-quality sports facility that satisfies the growing interest in this fascinating sport.'
    },
    mission: {
      title: 'Our Mission',
      description: 'We want to make padel more accessible in Berlin and build a community of players of all levels.',
      goals: [
        'Increase the availability of padel courts in Berlin',
        'Create an inclusive sports community',
        'Promote padel sports among youth',
        'Develop modern sports infrastructure'
      ]
    },
    vision: {
      title: 'Our Vision',
      description: 'We dream of a modern, technologically advanced padel club that becomes the center of Berlin\'s padel community.',
      features: [
        'Multiple high-quality indoor courts',
        'Modern equipment and technology',
        'Professional trainers and courses',
        'Community areas and gastronomy',
        'Flexible opening hours'
      ]
    },
    market: {
      title: 'Market Analysis',
      description: 'The padel market in Germany is growing rapidly, but supply cannot keep up with demand.',
      insights: [
        'Growing popularity of the sport',
        'Limited number of indoor facilities',
        'High utilization of existing facilities',
        'Increasing interest from companies for team building'
      ]
    },
    investment: {
      title: 'Investment Opportunities',
      description: 'We are looking for strategic partners and investors interested in developing padel sports in Berlin.',
      opportunities: [
        'Equity participation',
        'Strategic partnerships',
        'Franchise opportunities',
        'Sponsorship and marketing partnerships'
      ],
      contactButton: 'Contact Us',
      backButton: '← Back to Home'
    }
  },
  ru: {
    title: 'О нас',
    subtitle: 'Berlin Indoor Padel Club - Проект с будущим',
    founder: {
      title: 'Основатель',
      name: 'Игорь Решнёв',
      role: 'Инициатор и основатель',
      story: 'Как увлеченный игрок в падел и предприниматель, у меня есть видение открыть первый современный крытый падел-клуб в Берлине. Моя цель - создать высококачественную спортивную площадку, которая удовлетворит растущий интерес к этому увлекательному спорту.'
    },
    mission: {
      title: 'Наша миссия',
      description: 'Мы хотим сделать падел более доступным в Берлине и создать сообщество игроков всех уровней.',
      goals: [
        'Увеличение доступности падел-кортов в Берлине',
        'Создание инклюзивного спортивного сообщества',
        'Продвижение падела среди молодежи',
        'Развитие современной спортивной инфраструктуры'
      ]
    },
    vision: {
      title: 'Наше видение',
      description: 'Мы мечтаем о современном, технологически продвинутом падел-клубе, который станет центром падел-сообщества Берлина.',
      features: [
        'Несколько высококачественных крытых кортов',
        'Современное оборудование и технологии',
        'Профессиональные тренеры и курсы',
        'Общественные зоны и гастрономия',
        'Гибкие часы работы'
      ]
    },
    market: {
      title: 'Анализ рынка',
      description: 'Рынок падела в Германии быстро растет, но предложение не поспевает за спросом.',
      insights: [
        'Растущая популярность спорта',
        'Ограниченное количество крытых площадок',
        'Высокая загрузка существующих объектов',
        'Растущий интерес компаний к тимбилдингу'
      ]
    },
    investment: {
      title: 'Инвестиционные возможности',
      description: 'Мы ищем стратегических партнеров и инвесторов, заинтересованных в развитии падела в Берлине.',
      opportunities: [
        'Долевое участие',
        'Стратегические партнерства',
        'Франчайзинговые возможности',
        'Спонсорство и маркетинговые партнерства'
      ],
      contactButton: 'Связаться с нами',
      backButton: '← Назад на главную'
    }
  }
};

export default function About() {
  const { lang, changeLanguage } = useLanguage();
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Navigation lang={lang} onLanguageChange={changeLanguage} />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            {t.title}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t.founder.title}
          </h2>
          <div className="text-center mb-8">
            <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl font-bold text-green-600">IR</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">{t.founder.name}</h3>
            <p className="text-green-600 font-medium">{t.founder.role}</p>
          </div>
          <p className="text-lg text-gray-700 text-center leading-relaxed">
            {t.founder.story}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            {t.mission.title}
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            {t.mission.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.mission.goals.map((goal, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-semibold">{index + 1}</span>
                  </div>
                  <p className="text-gray-700">{goal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            {t.vision.title}
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            {t.vision.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.vision.features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Analysis Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            {t.market.title}
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            {t.market.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.market.insights.map((insight, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <p className="text-gray-700">{insight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            {t.investment.title}
          </h2>
          <p className="text-green-100 text-lg mb-8">
            {t.investment.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {t.investment.opportunities.map((opportunity, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <p className="text-white font-medium">{opportunity}</p>
              </div>
            ))}
          </div>
          <Link
            href="/contact-us"
            className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            {t.investment.contactButton}
          </Link>
          
          <div className="mt-6">
            <Link
              href="/"
              className="text-white hover:text-green-200 font-medium transition-colors duration-200"
            >
              {t.investment.backButton}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
