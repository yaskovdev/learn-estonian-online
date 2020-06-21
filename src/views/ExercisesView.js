import React from 'react'
import { translate } from 'react-i18next'
import Categories from './components/Categories'
import ExerciseCard from './components/ExerciseCard'
import exercise1 from '../exercise-1-card.jpg'

const ExercisesView = () => (
    <div className="row">

        <div className="col-lg-3">
            <Categories/>
        </div>

        <div className="col-lg-9">
            <div className="row my-4">
                <ExerciseCard number="1" imageSrc={exercise1}
                    description="Домашнее задание к первому уроку"/>
                <ExerciseCard number="6" imageSrc="https://ak4.picdn.net/shutterstock/videos/4689104/thumb/1.jpg"
                    description="Домашнее задание к шестому уроку"/>
            </div>
        </div>
    </div>
)

export default translate()(ExercisesView)
