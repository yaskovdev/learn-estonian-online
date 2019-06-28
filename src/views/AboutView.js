import React, { PureComponent } from 'react'
import { translate } from 'react-i18next'

class AboutView extends PureComponent {

    render() {
        const { t } = this.props
        return (
            <div className="row">
                <div className="col-lg-12">

                    <div className="row my-4">
                        <div className="col-lg-12">
                            <h1 className="my-4">{t('page.about')}</h1>
                        </div>
                        <div className="col-lg-12">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Amet numquam aspernatur!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Amet numquam aspernatur!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Amet numquam aspernatur!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Amet numquam aspernatur!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Amet numquam aspernatur!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Amet numquam aspernatur!</p>
                        </div>
                        <div className="col-lg-12">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Amet numquam aspernatur!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Amet numquam aspernatur!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Amet numquam aspernatur!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Amet numquam aspernatur!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Amet numquam aspernatur!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Amet numquam aspernatur!</p>
                        </div>
                        <div className="col-lg-12">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Amet numquam aspernatur!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Amet numquam aspernatur!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Amet numquam aspernatur!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Amet numquam aspernatur!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Amet numquam aspernatur!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Amet numquam aspernatur!</p>
                        </div>
                        <div className="col-lg-12">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Amet numquam aspernatur!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Amet numquam aspernatur!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Amet numquam aspernatur!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Amet numquam aspernatur!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Amet numquam aspernatur!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Amet numquam aspernatur!</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default translate('translations')(AboutView)
