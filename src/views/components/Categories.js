import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { translate } from 'react-i18next'

const showTexts = false

const Categories = ({ t }) => (
    <Fragment>
        <h1 className="my-4">{t('categories')}</h1>
        <div className="list-group">
            <Link className="list-group-item" to="/">{t('category.lessons')}</Link>
            <Link className="list-group-item" to="/exercises">{t('category.exercises')}</Link>
            {showTexts && <Link className="list-group-item" to="/texts">{t('category.texts')}</Link>}
        </div>
    </Fragment>
)

export default translate('translations')(Categories)
