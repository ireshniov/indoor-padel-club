// reCAPTCHA v3 configuration
// Для разработки на localhost используйте тестовый ключ Google
// Для продакшена замените на ваш реальный ключ v3

// Тестовый ключ Google для разработки (localhost)
const TEST_KEY = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';

// Получаем ключ из переменных окружения или используем тестовый
export const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || TEST_KEY;

// Проверяем, какой ключ используется
if (process.env.NODE_ENV === 'development') {
  console.log('🔐 reCAPTCHA v3 Configuration:');
  console.log('📍 Environment:', process.env.NODE_ENV);
  console.log('🔑 Site Key:', RECAPTCHA_SITE_KEY);
  console.log('📝 Key Type:', RECAPTCHA_SITE_KEY === TEST_KEY ? 'Test Key (Google)' : 'Custom Key');
  console.log('🌐 Domain:', typeof window !== 'undefined' ? window.location.hostname : 'Server');
}

// reCAPTCHA v3 работает "невидимо" и оценивает риск на основе поведения пользователя
