'use client';

import { useLanguage } from '@/lib/useLanguage';
import Navigation from '@/components/Navigation';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';

const translations = {
  de: {
    title: 'Kontakt aufnehmen',
    subtitle: 'Lassen Sie uns über Zusammenarbeit, Partnerschaft oder Investitionen sprechen',
    info: {
      title: 'Kontaktinformationen',
      founder: 'Igor Reshnev',
      role: 'Gründer und Initiator',
      email: 'info@berlinpadelclub.com',
      location: 'Berlin, Deutschland',
      availability: 'Verfügbar für Gespräche und Meetings'
    },
    form: {
      title: 'Senden Sie uns eine Nachricht',
      subtitle: 'Ich freue mich darauf, von Ihnen zu hören und über mögliche Zusammenarbeit zu sprechen.'
    },
    additional: {
      title: 'Weitere Möglichkeiten der Zusammenarbeit',
      description: 'Neben direkten Investitionen sind wir offen für verschiedene Formen der Partnerschaft:',
      opportunities: [
        'Strategische Beratung und Expertise',
        'Netzwerk und Kontakte in der Sportbranche',
        'Marketing und PR-Unterstützung',
        'Technische und operative Partnerschaften',
        'Franchise-Entwicklung'
      ]
    },
    navigation: {
      nextStep: 'Bereit für den nächsten Schritt?',
      nextStepDescription: 'Lassen Sie uns gemeinsam den Berlin Indoor Padel Club zum Leben erwecken.',
      learnMore: 'Mehr erfahren',
      backToHome: 'Zurück zur Startseite'
    }
  },
  en: {
    title: 'Contact us',
    subtitle: 'Let\'s discuss cooperation, partnership or investment',
    info: {
      title: 'Contact Information',
      founder: 'Igor Reshnev',
      role: 'Founder and Initiator',
      email: 'info@berlinpadelclub.com',
      location: 'Berlin, Germany',
      availability: 'Available for calls and meetings'
    },
    form: {
      title: 'Send us a message',
      subtitle: 'I look forward to hearing from you and discussing potential cooperation.'
    },
    additional: {
      title: 'Additional Cooperation Opportunities',
      description: 'Beyond direct investment, we are open to various forms of partnership:',
      opportunities: [
        'Strategic consulting and expertise',
        'Network and contacts in the sports industry',
        'Marketing and PR support',
        'Technical and operational partnerships',
        'Franchise development'
      ]
    },
    navigation: {
      nextStep: 'Ready for the next step?',
      nextStepDescription: 'Let\'s bring the Berlin Indoor Padel Club to life together.',
      learnMore: 'Learn more',
      backToHome: 'Back to home'
    }
  },
  ru: {
    title: 'Связаться с нами',
    subtitle: 'Давайте обсудим сотрудничество, партнёрство или инвестиции',
    info: {
      title: 'Контактная информация',
      founder: 'Игорь Решнёв',
      role: 'Основатель и инициатор',
      email: 'info@berlinpadelclub.com',
      location: 'Берлин, Германия',
      availability: 'Доступен для звонков и встреч'
    },
    form: {
      title: 'Отправьте нам сообщение',
      subtitle: 'Буду рад услышать от вас и обсудить возможное сотрудничество.'
    },
    additional: {
      title: 'Дополнительные возможности сотрудничества',
      description: 'Помимо прямых инвестиций, мы открыты для различных форм партнёрства:',
      opportunities: [
        'Стратегическое консультирование и экспертиза',
        'Сеть и контакты в спортивной индустрии',
        'Маркетинговая и PR-поддержка',
        'Технические и операционные партнёрства',
        'Развитие франчайзинга'
      ]
    },
    navigation: {
      nextStep: 'Готовы к следующему шагу?',
      nextStepDescription: 'Давайте вместе воплотим в жизнь Berlin Indoor Padel Club.',
      learnMore: 'Узнать больше',
      backToHome: 'На главную'
    }
  }
};

export default function Contact() {
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

      {/* Contact Information Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {t.info.title}
              </h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-green-600">IR</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{t.info.founder}</h3>
                    <p className="text-green-600">{t.info.role}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <a href={`mailto:${t.info.email}`} className="text-gray-700 hover:text-green-600 transition-colors">
                      {t.info.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{t.info.location}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{t.info.availability}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Opportunities */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t.additional.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {t.additional.description}
              </p>
              <div className="space-y-3">
                {t.additional.opportunities.map((opportunity, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{opportunity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t.form.title}
            </h2>
            <p className="text-lg text-gray-600">
              {t.form.subtitle}
            </p>
          </div>
          <ContactForm language={lang} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t.navigation.nextStep}
          </h2>
          <p className="text-green-100 mb-8 text-lg">
            {t.navigation.nextStepDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              {t.navigation.learnMore}
            </Link>
            <Link
              href="/"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              {t.navigation.backToHome}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
