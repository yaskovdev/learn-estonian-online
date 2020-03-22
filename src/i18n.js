import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

/**
 * Always returns Russian as a language since currently all the lessons are in Russian anyways so there is no point
 * to partially translate the Web site into English. In future when the lessons will be available in English, the dummy
 * detector will be removed.
 */
const dummyLanguageDetector = {
    name: 'dummyLanguageDetector',

    lookup() {
        return 'ru'
    }
}

const languageDetector = new LanguageDetector()
languageDetector.addDetector(dummyLanguageDetector)

i18n.use(languageDetector).init({
    resources: {
        en: {
            translations: {
                'title': 'Estonian Online',
                'categories': 'Categories',
                'category.lessons': 'Lessons',
                'category.exercises': 'Exercises',
                'category.texts': 'Texts',
                'page.current': '(current)',
                'page.home': 'Home',
                'page.blog': 'Blog',
                'page.about': 'About',
                'lesson': 'Lesson {{number}}',
                'task': 'Task {{number}}',
                'text': 'Text {{number}}',
                'article': 'Article {{number}}'
            }
        },
        ru: {
            translations: {
                'title': 'Эстонский онлайн',
                'categories': 'Разделы',
                'category.lessons': 'Уроки',
                'category.exercises': 'Задания',
                'category.texts': 'Тексты',
                'page.current': '(текущая)',
                'page.home': 'Главная',
                'page.blog': 'Блог',
                'page.about': 'О себе',
                'lesson': 'Урок {{number}}',
                'task': 'Задание {{number}}',
                'text': 'Текст {{number}}',
                'article': 'Статья {{number}}'
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
        order: ['dummyLanguageDetector', 'navigator', 'querystring', 'cookie', 'localStorage', 'htmlTag', 'path', 'subdomain']
    }
})

export default i18n
