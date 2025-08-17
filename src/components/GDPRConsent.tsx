'use client';

interface GDPRConsentProps {
  consent: boolean;
  onConsentChange: (consent: boolean) => void;
  language: string;
}

const translations = {
  de: {
    title: 'Datenschutz und Einverständnis',
    description: 'Ich stimme zu, dass meine Daten zur Bearbeitung meiner Anfrage verwendet werden dürfen. Weitere Informationen finden Sie in unserer',
    privacyPolicy: 'Datenschutzerklärung',
    required: 'Dieses Feld ist erforderlich',
    consent: 'Ich stimme der Verarbeitung meiner Daten zu *'
  },
  en: {
    title: 'Privacy and Consent',
    description: 'I agree that my data may be used to process my request. For more information, see our',
    privacyPolicy: 'Privacy Policy',
    required: 'This field is required',
    consent: 'I agree to the processing of my data *'
  },
  ru: {
    title: 'Конфиденциальность и согласие',
    description: 'Я соглашаюсь с тем, что мои данные могут быть использованы для обработки моего запроса. Для получения дополнительной информации см. нашу',
    privacyPolicy: 'Политику конфиденциальности',
    required: 'Это поле обязательно для заполнения',
    consent: 'Я соглашаюсь на обработку моих данных *'
  }
};

export default function GDPRConsent({ consent, onConsentChange, language }: GDPRConsentProps) {
  const t = translations[language as keyof typeof translations] || translations.en;

  const handleConsentChange = (checked: boolean) => {
    onConsentChange(checked);
  };

  const handlePrivacyPolicyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Здесь можно открыть модальное окно с политикой конфиденциальности
    // или перейти на отдельную страницу
    alert('Privacy Policy / Datenschutzerklärung / Политика конфиденциальности');
  };

  return (
    <div className="space-y-3">
      <div className="flex items-start">
        <input
          type="checkbox"
          id="gdpr-consent"
          checked={consent}
          onChange={(e) => handleConsentChange(e.target.checked)}
          className="w-4 h-4 mt-1 mr-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
          required
        />
        <div className="text-sm text-gray-700">
          <label htmlFor="gdpr-consent" className="font-medium">
            {t.consent}
          </label>
          <p className="mt-1 text-gray-600">
            {t.description}{' '}
            <button
              type="button"
              onClick={handlePrivacyPolicyClick}
              className="text-blue-600 hover:text-blue-800 underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            >
              {t.privacyPolicy}
            </button>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
