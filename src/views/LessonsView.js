import React from 'react'
import { translate } from 'react-i18next'
import Categories from './components/Categories'
import LessonCard from './components/LessonCard'
import lesson1 from '../lesson-1-card.jpg'
import lesson2 from '../lesson-2-card.jpg'
import lesson3 from '../lesson-3-card.jpg'
import lesson4 from '../lesson-4-card.jpg'
import lesson5 from '../lesson-5-card.jpg'
import lesson6 from '../lesson-6-card.jpg'
import lesson7 from '../lesson-7-card.jpg'
import lesson8 from '../lesson-8-card.jpg'
import lesson9 from '../lesson-9-card.jpg'
import lesson10 from '../lesson-10-card.jpg'
import lesson11 from '../lesson-11-card.jpg'
import lesson12 from '../lesson-12-card.jpg'
import lesson13 from '../lesson-13-card.jpg'
import lesson14 from '../lesson-14-card.jpg'
import lesson15 from '../lesson-15-card.jpg'
import lesson16 from '../lesson-16-card.jpg'
import lesson17 from '../lesson-17-card.jpg'

const LessonsView = () => (
    <div className="row">

        <div className="col-lg-3">
            <Categories/>
        </div>

        <div className="col-lg-9">
            <div className="row my-4">

                <LessonCard number="1" imageSrc={lesson1}
                    description="Алфавит. Первые слова"/>
                <LessonCard number="2" imageSrc={lesson2}
                    description="Личные местоимения"/>
                <LessonCard number="3" imageSrc={lesson3}
                    description="Спряжение глаголов настоящего времени"/>
                <LessonCard number="4" imageSrc={lesson4}
                    description="Вопросительные слова"/>
                <LessonCard number="5" imageSrc={lesson5}
                    description="Падежи"/>
                <LessonCard number="6" imageSrc={lesson6}
                    description="Возьмем оставшиеся пять падежей прямо сейчас"/>
                <LessonCard number="7" imageSrc={lesson7}
                    description="Падежи места, часть II. Города и страны"/>
                <LessonCard number="8" imageSrc={lesson8}
                    description="Падеж Saav"/>
                <LessonCard number="9" imageSrc={lesson9}
                    description="Предлоги и послелоги"/>
                <LessonCard number="10" imageSrc={lesson10}
                    description="Числительные. Arvsõnad"/>
                <LessonCard number="11" imageSrc={lesson11}
                    description="Продолжаем говорить о предлогах и послелогах"/>
                <LessonCard number="12" imageSrc={lesson12}
                    description="Прилагательные"/>
                <LessonCard number="13" imageSrc={lesson13}
                    description="Продолжаем говорить о прилагательных"/>
                <LessonCard number="14" imageSrc={lesson14}
                    description="Более подробно про инфинитивы"/>
                <LessonCard number="15" imageSrc={lesson15}
                    description="Модальные глаголы"/>
                <LessonCard number="16" imageSrc={lesson16}
                    description="Множественное число"/>
                <LessonCard number="17" imageSrc={lesson17}
                    description="Местоимения"/>
            </div>
        </div>
    </div>
)

export default translate()(LessonsView)
