import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n.use(LanguageDetector).init({
    resources: {
        en: {
            translations: {
                'title': 'Estonian online',
                'categories': 'Categories',
                'category.lessons': 'Lessons',
                'category.tasks': 'Tasks',
                'category.texts': 'Texts',
                'page.current': '(current)',
                'page.home': 'Home',
                'page.blog': 'Blog',
                'page.about': 'About',
                'lesson': 'Lesson {{number}}'
            }
        },
        ru: {
            translations: {
                'title': 'Эстонский онлайн',
                'categories': 'Разделы',
                'category.lessons': 'Уроки',
                'category.tasks': 'Задания',
                'category.texts': 'Тексты',
                'page.current': '(текущая)',
                'page.home': 'Главная',
                'page.blog': 'Блог',
                'page.about': 'О себе',
                'lesson': 'Урок {{number}}'
            }
        }
    },
    fallbackLng: 'en',
    debug: true,

    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false,

    interpolation: {
        escapeValue: false,
        formatSeparator: ','
    },

    react: {
        wait: true
    },

    detection: {
        order: ['navigator', 'querystring', 'cookie', 'localStorage', 'htmlTag', 'path', 'subdomain']
    }
})

export default i18n
