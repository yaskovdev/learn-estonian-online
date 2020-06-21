import React from 'react'
import { translate } from 'react-i18next'
import Categories from './components/Categories'
import LessonCard from './components/LessonCard'
import lesson1 from '../lesson-1-card.jpg'

const LessonsView = () => (
    <div className="row">

        <div className="col-lg-3">
            <Categories/>
        </div>

        <div className="col-lg-9">
            <div className="row my-4">

                <LessonCard number="1" imageSrc={lesson1}
                    description="Возьмем оставшиеся пять падежей прямо сейчас"/>
                <LessonCard number="6" imageSrc="https://shortpixel.com/img/slider/berries-optimized-by-shortpixel.jpg"
                    description="Возьмем оставшиеся пять падежей прямо сейчас"/>

            </div>
        </div>
    </div>
)

export default translate()(LessonsView)
