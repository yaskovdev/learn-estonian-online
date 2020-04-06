import React from 'react'
import { translate } from 'react-i18next'
import { Link } from 'react-router-dom'

const TextCard = ({ number, imageUrl, description, t }) => (
    <div className="card h-100">
        <Link to={`/texts/${number}`}>
            <img className="card-img-top" src={imageUrl} alt=""/>
        </Link>
        <div className="card-body">
            <h4 className="card-title">
                <Link to={`/texts/${number}`}>{t('text', { number })}</Link>
            </h4>
            <p className="card-text">{description}</p>
        </div>
    </div>
)

export default translate()(TextCard)
