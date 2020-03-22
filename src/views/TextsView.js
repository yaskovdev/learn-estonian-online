import React from 'react'
import { translate } from 'react-i18next'
import Categories from './components/Categories'
import TextCard from './components/TextCard'

const TextsView = () => (
    <div className="row">

        <div className="col-lg-3">
            <Categories/>
        </div>

        <div className="col-lg-9">
            <div className="row my-4">
                <div className="col-lg-4 col-md-6 mb-4">
                    <TextCard number="1" imageUrl="http://placehold.it/700x400"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"/>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                    <TextCard number="2" imageUrl="http://placehold.it/700x400"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"/>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                    <TextCard number="3" imageUrl="http://placehold.it/700x400"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"/>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                    <TextCard number="4" imageUrl="http://placehold.it/700x400"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"/>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                    <TextCard number="5" imageUrl="http://placehold.it/700x400"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"/>
                </div>
            </div>
        </div>
    </div>
)

export default translate('translations')(TextsView)
