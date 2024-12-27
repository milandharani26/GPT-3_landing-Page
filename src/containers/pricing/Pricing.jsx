import React from 'react'
import "./pricing.css"
import Plans from '../../componants/planCards/Plans'

const Pricing = () => {
    return (
        <div>
            <div className="pricing__header-content section__margin" id='pricing'>
                <h1 className="gradient__text">
                    Ready to Modernize Your Attendance System?
                </h1>
                <p>
                    Join the growing number of businesses benefiting from our AI-powered face attendance solution.
                </p>

                <div className='pricing__cards-container'>
                    <Plans />
                </div>
            </div>
        </div>
    )
}

export default Pricing
