import React from 'react'
import Heading from "./Heading"
import {Link} from 'gatsby'

export default function infoblock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
            <div className="container">
                <Heading title={heading}/>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-white mb-4">
                        ACTEMRA is a prescription medicine called an interleukin-6 (IL-6) receptor antagonist. 
                        ACTEMRA is used to treat: Adults with moderately to severely active rheumatoid arthritis (RA) 
                        after at least one other medicine called a disease modifying antirheumatic drug (DMARD)
                         has been used and did not work well.
                        </p>
                        <Link to="/about/">
                            <button className="btn btn-warning btn-lg">
                                {heading}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            
        </section>
    )
}
