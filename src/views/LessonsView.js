import React from 'react'
import { translate } from 'react-i18next'
import Categories from './components/Categories'
import LessonCard from './components/LessonCard'

const LessonsView = () => (
    <div className="row">

        <div className="col-lg-3">
            <Categories/>
        </div>

        <div className="col-lg-9">
            <div className="row my-4">

                <div className="col-lg-4 col-md-6 mb-4">
                    <LessonCard number="6" imageUrl="https://shortpixel.com/img/slider/berries-optimized-by-shortpixel.jpg"
                        description="Возьмем оставшиеся пять падежей прямо сейчас"/>
                </div>

            </div>
        </div>
    </div>
)

export default translate()(LessonsView)
