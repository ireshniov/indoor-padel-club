'use client';

import { useState, useEffect } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import GDPRConsent from './GDPRConsent';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  language: string;
  source: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
  gdpr?: string;
  captcha?: string;
}

interface ContactFormProps {
  language: string;
}

export default function ContactForm({ language }: ContactFormProps) {
  const { executeRecaptcha } = useGoogleReCaptcha();
  
  // Проверяем доступность reCAPTCHA
  useEffect(() => {
    console.log('🔍 reCAPTCHA v3 initialization:', {
      executeRecaptcha: !!executeRecaptcha,
      language,
      timestamp: new Date().toISOString()
    });
  }, [executeRecaptcha, language]);

  console.log('🔍 reCAPTCHA status:', {
    executeRecaptcha: !!executeRecaptcha,
    language,
    timestamp: new Date().toISOString()
  });

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    language: language,
    source: 'contact-form'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<FormErrors>({});
  const [gdprConsent, setGdprConsent] = useState(false);
  // captchaToken теперь генерируется при каждой отправке, не храним в состоянии

  const translations = {
    de: {
      title: 'Kontakt aufnehmen',
      name: 'Name *',
      email: 'E-Mail *',
      phone: 'Telefon',
      company: 'Unternehmen',
      message: 'Nachricht *',
      submit: 'Nachricht senden',
      submitting: 'Wird gesendet...',
      success: 'Nachricht erfolgreich gesendet!',
      error: 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.',
      required: 'Dieses Feld ist erforderlich',
      invalidEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
      captchaRequired: 'reCAPTCHA-Überprüfung erforderlich',
      gdprRequired: 'GDPR-Zustimmung erforderlich'
    },
    en: {
      title: 'Contact us',
      name: 'Name *',
      email: 'Email *',
      phone: 'Phone',
      company: 'Company',
      message: 'Message *',
      submit: 'Send Message',
      submitting: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Error sending message. Please try again.',
      required: 'This field is required',
      invalidEmail: 'Please enter a valid email address',
      captchaRequired: 'reCAPTCHA verification required',
      gdprRequired: 'GDPR consent required'
    },
    ru: {
      title: 'Связаться с нами',
      name: 'Имя *',
      email: 'Email *',
      phone: 'Телефон',
      company: 'Компания',
      message: 'Сообщение *',
      submit: 'Отправить сообщение',
      submitting: 'Отправляется...',
      success: 'Сообщение успешно отправлено!',
      error: 'Ошибка при отправке сообщения. Попробуйте еще раз.',
      required: 'Это поле обязательно для заполнения',
      invalidEmail: 'Пожалуйста, введите корректный email',
      captchaRequired: 'Требуется проверка reCAPTCHA',
      gdprRequired: 'Требуется согласие GDPR'
    }
  };

  const t = translations[language as keyof typeof translations] || translations.en;

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t.required;
    }

    if (!formData.email.trim()) {
      newErrors.email = t.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.invalidEmail;
    }

    if (!formData.message.trim()) {
      newErrors.message = t.required;
    }

    if (!gdprConsent) {
      newErrors.gdpr = t.gdprRequired;
    }

    // reCAPTCHA проверяется автоматически при отправке, не нужно проверять здесь
    // if (!captchaToken) {
    //   newErrors.captcha = t.captchaRequired;
    // }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleGdprChange = (consent: boolean) => {
    setGdprConsent(consent);
    if (errors.gdpr) {
      setErrors(prev => ({
        ...prev,
        gdpr: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Execute reCAPTCHA v3 автоматически при отправке
      let token = null;
      if (executeRecaptcha) {
        try {
          console.log('🔐 Executing reCAPTCHA v3...');
          token = await executeRecaptcha('contact_form');
          console.log('✅ reCAPTCHA token received:', token ? 'Yes' : 'No');
          // setCaptchaToken(token); // Удалено из состояния
        } catch (error) {
          console.error('❌ reCAPTCHA execution error:', error);
          setErrors(prev => ({ ...prev, captcha: t.captchaRequired }));
          setIsSubmitting(false);
          return;
        }
      } else {
        console.error('❌ executeRecaptcha not available');
        setErrors(prev => ({ ...prev, captcha: t.captchaRequired }));
        setIsSubmitting(false);
        return;
      }

      if (!token) {
        console.error('❌ No reCAPTCHA token received');
        setErrors(prev => ({ ...prev, captcha: t.captchaRequired }));
        setIsSubmitting(false);
        return;
      }

      // Подготавливаем данные для отправки
      const formPayload = {
        ...formData,
        gdprConsent,
        'g-recaptcha-response': token  // Formspree ожидает именно это поле
      };

      console.log('📤 Sending form data:', {
        ...formPayload,
        'g-recaptcha-response': token ? 'Present' : 'Missing'
      });

      const response = await fetch('https://formspree.io/f/xeozwkbw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formPayload),
      });

      console.log('📥 Response status:', response.status);
      console.log('📥 Response ok:', response.ok);

      if (response.ok) {
        const responseData = await response.text();
        console.log('✅ Form submitted successfully:', responseData);
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          language: language,
          source: 'contact-form'
        });
        setGdprConsent(false);
        // setCaptchaToken(null); // Удалено из состояния
      } else {
        const errorText = await response.text();
        console.error('❌ Form submission failed:', response.status, errorText);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('❌ Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.title}</h3>
      
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          {t.success}
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {t.error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              {t.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              {t.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              {t.phone}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
              {t.company}
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            {t.message}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
        </div>

        {/* GDPR Consent */}
        <GDPRConsent
          consent={gdprConsent}
          onConsentChange={handleGdprChange}
          language={language}
        />
        {errors.gdpr && <p className="mt-1 text-sm text-red-600">{errors.gdpr}</p>}

        {/* reCAPTCHA v3 - невидимый */}
        {errors.captcha && <p className="mt-1 text-sm text-red-600">{errors.captcha}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting ? t.submitting : t.submit}
        </button>
      </form>
    </div>
  );
}
