import React from "react";

import Image from "../image/doctor.jpg";

const About = () => {
    return (
        <div className="container">
            <div className="card my-5  ">
                <div className="row g-0">
                    <div className="col-md-4 order-md-2">
                        <img src={Image} className="img-fluid rounded-start" alt="..."
                            width={300}
                            height={300}
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title"> Terraform Appointment Scheduler </h5>
                            <p className="card-text">
                                Nbyula, a german technology brand, is a horizontal marketplace encompassing people, content, technology & services for international studies and work, to enable and empower "Skillizens without Borders". Nbyula aims at building a global digital technology ecosystem for international studies and work. Nbyula takes a contrarian approach to bringing trust and transparency to the field of international studies and work. This is done on the basis of massive data-gathering infrastructure and international alumni contributed content.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;