import React from 'react'
import { Link } from 'react-router-dom'
import { translate } from 'react-i18next'

const ExerciseCard = ({ number, imageUrl, description, t }) => (
    <div className="card h-100">
        <Link to={`/exercises/${number}`}>
            <img className="card-img-top" src={imageUrl} alt=""/>
        </Link>
        <div className="card-body">
            <h4 className="card-title">
                <Link to={`/exercises/${number}`}>{t('task', { number })}</Link>
            </h4>
            <p className="card-text">{description}</p>
        </div>
    </div>
)

export default translate('translations')(ExerciseCard)
