import React from 'react'
import { translate } from 'react-i18next'
import Categories from './components/Categories'
import ExerciseCard from './components/ExerciseCard'

const ExercisesView = () => (
    <div className="row">

        <div className="col-lg-3">
            <Categories/>
        </div>

        <div className="col-lg-9">
            <div className="row my-4">

                <div className="col-lg-4 col-md-6 mb-4">
                    <ExerciseCard number="6" imageUrl="https://ak4.picdn.net/shutterstock/videos/4689104/thumb/1.jpg"
                        description="Домашнее задание к шестому уроку"/>
                </div>

            </div>
        </div>
    </div>
)

export default translate()(ExercisesView)
