import React from 'react'
import { translate } from 'react-i18next'
import ArticleCard from './components/ArticleCard'

const BlogView = () => (
    <div className="row">
        <div className="col-lg-12">
            <div className="row my-4">
                <div className="col-lg-3 col-md-6 mb-4">
                    <ArticleCard number="1" imageUrl="http://placehold.it/700x400"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"/>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <ArticleCard number="2" imageUrl="http://placehold.it/700x400"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"/>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <ArticleCard number="3" imageUrl="http://placehold.it/700x400"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"/>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <ArticleCard number="4" imageUrl="http://placehold.it/700x400"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"/>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <ArticleCard number="5" imageUrl="http://placehold.it/700x400"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"/>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <ArticleCard number="6" imageUrl="http://placehold.it/700x400"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"/>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <ArticleCard number="7" imageUrl="http://placehold.it/700x400"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"/>
                </div>
            </div>
        </div>
    </div>
)

export default translate('translations')(BlogView)
