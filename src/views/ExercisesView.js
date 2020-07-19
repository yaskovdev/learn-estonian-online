import React from 'react'
import { translate } from 'react-i18next'
import Categories from './components/Categories'
import ExerciseCard from './components/ExerciseCard'
import exercise1 from '../exercise-1-card.jpg'
import exercise2 from '../exercise-2-card.jpg'
import exercise3 from '../exercise-3-card.jpg'
import exercise4 from '../exercise-4-card.jpg'
import exercise5 from '../exercise-5-card.jpg'
import exercise7 from '../exercise-7-card.jpg'
import exercise8 from '../exercise-8-card.jpg'
import exercise9 from '../exercise-9-card.jpg'
import exercise10 from '../exercise-10-card.jpg'
import exercise11 from '../exercise-11-card.jpg'
import exercise12 from '../exercise-12-card.jpg'
import exercise13 from '../exercise-13-card.jpg'
import exercise14 from '../exercise-14-card.jpg'
import exercise15 from '../exercise-15-card.jpg'
import exercise16 from '../exercise-16-card.jpg'
import exercise17 from '../exercise-17-card.jpg'

const ExercisesView = () => (
    <div className="row">

        <div className="col-lg-3">
            <Categories/>
        </div>

        <div className="col-lg-9">
            <div className="row my-4">
                <ExerciseCard number="1" imageSrc={exercise1}
                    description="Домашнее задание к первому уроку"/>
                <ExerciseCard number="2" imageSrc={exercise2}
                    description="Домашнее задание ко второму уроку"/>
                <ExerciseCard number="3" imageSrc={exercise3}
                    description="Домашнее задание к третьему уроку"/>
                <ExerciseCard number="4" imageSrc={exercise4}
                    description="Домашнее задание к четвёртому уроку"/>
                <ExerciseCard number="5" imageSrc={exercise5}
                    description="Домашнее задание к пятому уроку"/>
                <ExerciseCard number="6" imageSrc="https://ak4.picdn.net/shutterstock/videos/4689104/thumb/1.jpg"
                    description="Домашнее задание к шестому уроку"/>
                <ExerciseCard number="7" imageSrc={exercise7}
                    description="Домашнее задание к седьмому уроку"/>
                <ExerciseCard number="8" imageSrc={exercise8}
                    description="Домашнее задание к восьмому уроку"/>
                <ExerciseCard number="9" imageSrc={exercise9}
                    description="Домашнее задание к девятому уроку"/>
                <ExerciseCard number="10" imageSrc={exercise10}
                    description="Домашнее задание к десятому уроку"/>
                <ExerciseCard number="11" imageSrc={exercise11}
                    description="Домашнее задание к одиннадцатому уроку"/>
                <ExerciseCard number="12" imageSrc={exercise12}
                    description="Домашнее задание к двенадцатому уроку"/>
                <ExerciseCard number="13" imageSrc={exercise13}
                    description="Домашнее задание к тринадцатому уроку"/>
                <ExerciseCard number="14" imageSrc={exercise14}
                    description="Домашнее задание к четырнадцатому уроку"/>
                <ExerciseCard number="15" imageSrc={exercise15}
                    description="Домашнее задание к пятнадцатому уроку"/>
                <ExerciseCard number="16" imageSrc={exercise16}
                    description="Домашнее задание к шестнадцатому уроку"/>
                <ExerciseCard number="17" imageSrc={exercise17}
                    description="Домашнее задание к семнадцатому уроку"/>
            </div>
        </div>
    </div>
)

export default translate()(ExercisesView)
