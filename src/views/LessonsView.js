import React from 'react'
import { translate } from 'react-i18next'
import Categories from './components/Categories'
import LessonCard from './components/LessonCard'
import lesson1 from '../lesson-1-card.jpg'
import lesson2 from '../lesson-2-card.jpg'
import lesson3 from '../lesson-3-card.jpg'
import lesson4 from '../lesson-4-card.jpg'
import lesson5 from '../lesson-5-card.jpg'
import lesson7 from '../lesson-7-card.jpg'
import lesson8 from '../lesson-8-card.jpg'
import lesson9 from '../lesson-9-card.jpg'
import lesson10 from '../lesson-10-card.jpg'

const LessonsView = () => (
    <div className="row">

        <div className="col-lg-3">
            <Categories/>
        </div>

        <div className="col-lg-9">
            <div className="row my-4">

                <LessonCard number="1" imageSrc={lesson1}
                    description="Возьмем оставшиеся пять падежей прямо сейчас"/>
                <LessonCard number="2" imageSrc={lesson2}
                    description="Возьмем оставшиеся пять падежей прямо сейчас"/>
                <LessonCard number="3" imageSrc={lesson3}
                    description="Возьмем оставшиеся пять падежей прямо сейчас"/>
                <LessonCard number="4" imageSrc={lesson4}
                    description="Возьмем оставшиеся пять падежей прямо сейчас"/>
                <LessonCard number="5" imageSrc={lesson5}
                    description="Возьмем оставшиеся пять падежей прямо сейчас"/>
                <LessonCard number="6" imageSrc="https://shortpixel.com/img/slider/berries-optimized-by-shortpixel.jpg"
                    description="Возьмем оставшиеся пять падежей прямо сейчас"/>
                <LessonCard number="7" imageSrc={lesson7}
                    description="Возьмем оставшиеся пять падежей прямо сейчас"/>
                <LessonCard number="8" imageSrc={lesson8}
                    description="Возьмем оставшиеся пять падежей прямо сейчас"/>
                <LessonCard number="9" imageSrc={lesson9}
                    description="Возьмем оставшиеся пять падежей прямо сейчас"/>
                <LessonCard number="10" imageSrc={lesson10}
                    description="Возьмем оставшиеся пять падежей прямо сейчас"/>

            </div>
        </div>
    </div>
)

export default translate()(LessonsView)
