'use client';

import { useLanguage } from '@/lib/useLanguage';
import Navigation from '@/components/Navigation';
import Link from 'next/link';

const translations = {
  de: {
    hero: {
      title: 'Moderner Indoor-Padel-Club in Berlin',
      subtitle: 'Projekt in Entwicklung. Wir suchen Partner und Investoren.',
      cta: 'Kontakt aufnehmen'
    },
    about: {
      title: 'Über das Projekt',
      founder: 'Mein Name ist Igor Reshnev, ich bin Initiator und Gründer des Berlin Indoor Padel Club Projekts.',
      story: 'Kürzlich habe ich Padel kennengelernt und spiele es seitdem immer häufiger. Dieser Sport fasziniert durch seine Dynamik und Einfachheit.',
      problem: 'In Berlin gibt es einen Mangel an Plätzen: Die Plätze sind oft wochenlang im Voraus ausgebucht, besonders bei schlechtem Wetter.',
      goal: 'Mein Ziel ist es, einen modernen Indoor-Club zu eröffnen, um die Verfügbarkeit von Padel in Berlin zu erhöhen und eine Sportgemeinschaft aufzubauen.'
    },
    cta: {
      title: 'Bereit zur Zusammenarbeit?',
      subtitle: 'Ich freue mich darauf, über Zusammenarbeit, Partnerschaft oder Investitionen zu sprechen.',
      button: 'Kontakt aufnehmen'
    },
    footer: {
      description: 'Moderner Indoor-Padel-Club in Berlin',
      project: 'Projekt',
      projectItems: {
        about: 'Über uns',
        plans: 'Entwicklungspläne',
        investment: 'Investitionen'
      },
      contact: 'Kontakt',
      contactItems: {
        founder: 'Gründer: Igor Reshnev',
        email: 'Email: info@berlinpadelclub.com',
        location: 'Standort: Berlin, Deutschland'
      },
      status: 'Status',
      statusItems: {
        development: 'Projekt in Entwicklung',
        partners: 'Partnersuche',
        investors: 'Investorensuche'
      },
      copyright: '© 2024 Berlin Indoor Padel Club. Alle Rechte vorbehalten.'
    }
  },
  en: {
    hero: {
      title: 'Modern Indoor Padel Club in Berlin',
      subtitle: 'Project in development. We are looking for partners and investors.',
      cta: 'Contact us'
    },
    about: {
      title: 'About the Project',
      founder: 'My name is Igor Reshnev, I am the initiator and founder of the Berlin Indoor Padel Club project.',
      story: 'Recently I discovered padel and since then I play it more and more often. This sport fascinates with its dynamics and simplicity.',
      problem: 'In Berlin there is a shortage of courts: courts are often booked weeks in advance, especially in bad weather.',
      goal: 'My goal is to open a modern indoor club to increase the availability of padel in Berlin and build a sports community.'
    },
    cta: {
      title: 'Ready to collaborate?',
      subtitle: 'I look forward to discussing cooperation, partnership or investment.',
      button: 'Contact us'
    },
    footer: {
      description: 'Modern Indoor Padel Club in Berlin',
      project: 'Project',
      projectItems: {
        about: 'About us',
        plans: 'Development plans',
        investment: 'Investment'
      },
      contact: 'Contact',
      contactItems: {
        founder: 'Founder: Igor Reshnev',
        email: 'Email: info@berlinpadelclub.com',
        location: 'Location: Berlin, Germany'
      },
      status: 'Status',
      statusItems: {
        development: 'Project in development',
        partners: 'Looking for partners',
        investors: 'Looking for investors'
      },
      copyright: '© 2024 Berlin Indoor Padel Club. All rights reserved.'
    }
  },
  ru: {
    hero: {
      title: 'Современный крытый падел-клуб в Берлине',
      subtitle: 'Проект в разработке. Мы ищем партнёров и инвесторов.',
      cta: 'Связаться с нами'
    },
    about: {
      title: 'О проекте',
      founder: 'Меня зовут Игорь Решнёв, я инициатор и основатель проекта Berlin Indoor Padel Club.',
      story: 'Недавно я познакомился с паделом и с тех пор всё чаще играю в него. Этот спорт завораживает своей динамикой и простотой.',
      problem: 'В Берлине ощущается нехватка площадок: корты часто забронированы на недели вперёд, особенно при плохой погоде.',
      goal: 'Моя цель — открыть современный крытый клуб, чтобы увеличить доступность падела в Берлине и создать спортивное сообщество.'
    },
    cta: {
      title: 'Готовы к сотрудничеству?',
      subtitle: 'Буду рад обсудить сотрудничество, партнёрство или инвестиции.',
      button: 'Связаться с нами'
    },
    footer: {
      description: 'Современный крытый падел-клуб в Берлине',
      project: 'Проект',
      projectItems: {
        about: 'О нас',
        plans: 'Планы развития',
        investment: 'Инвестиции'
      },
      contact: 'Контакты',
      contactItems: {
        founder: 'Основатель: Игорь Решнёв',
        email: 'Email: info@berlinpadelclub.com',
        location: 'Локация: Берлин, Германия'
      },
      status: 'Статус',
      statusItems: {
        development: 'Проект в разработке',
        partners: 'Поиск партнёров',
        investors: 'Поиск инвесторов'
      },
      copyright: '© 2024 Berlin Indoor Padel Club. Все права защищены.'
    }
  }
};

export default function Home() {
  const { lang, changeLanguage } = useLanguage();
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Navigation lang={lang} onLanguageChange={changeLanguage} />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            {t.hero.title}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              {t.hero.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t.about.title}
          </h2>
          <div className="prose prose-lg mx-auto text-gray-700">
            <p className="mb-6">
              {t.about.founder}
            </p>
            <p className="mb-6">
              {t.about.story}
            </p>
            <p className="mb-6">
              {t.about.problem}
            </p>
            <p className="mb-8">
              {t.about.goal}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t.cta.title}
          </h2>
          <p className="text-green-100 mb-8 text-lg">
            {t.cta.subtitle}
          </p>
          <Link
            href="/contact-us"
            className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            {t.cta.button}
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Berlin Indoor Padel Club</h3>
              <p className="text-gray-400">{t.footer.description}</p>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">{t.footer.project}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">{t.footer.projectItems.about}</Link></li>
                <li>{t.footer.projectItems.plans}</li>
                <li>{t.footer.projectItems.investment}</li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">{t.footer.contact}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>{t.footer.contactItems.founder}</li>
                <li><a href="mailto:info@berlinpadelclub.com" className="hover:text-white transition-colors">{t.footer.contactItems.email}</a></li>
                <li>{t.footer.contactItems.location}</li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">{t.footer.status}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>{t.footer.statusItems.development}</li>
                <li>{t.footer.statusItems.partners}</li>
                <li><Link href="/contact-us" className="hover:text-white transition-colors">{t.footer.statusItems.investors}</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
