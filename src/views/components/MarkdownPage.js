import React from 'react'
import { translate } from 'react-i18next'
import Categories from './Categories'
import ReactMarkdown from 'react-markdown'

const MarkdownPage = ({ title, source }) => (
    <div className="row">

        <div className="col-lg-3">
            <Categories/>
        </div>

        <div className="col-lg-9">

            <div className="row">
                <div className="col-lg-12">
                    <h1 className="my-4">{title}</h1>
                </div>
                <div className="col-lg-12">
                    <ReactMarkdown source={source} escapeHtml={false}/>
                </div>
            </div>
        </div>
    </div>
)

export default translate('translations')(MarkdownPage)
