import React from 'react'
import { translate } from 'react-i18next'

const TextCard = ({ number, imageUrl, description, t }) => (
    <div className="card h-100">
        <a href="#"><img className="card-img-top" src={imageUrl} alt=""/></a>
        <div className="card-body">
            <h4 className="card-title">
                <a href="#">{t('text', { number })}</a>
            </h4>
            <p className="card-text">{description}</p>
        </div>
    </div>
)

export default translate('translations')(TextCard)
