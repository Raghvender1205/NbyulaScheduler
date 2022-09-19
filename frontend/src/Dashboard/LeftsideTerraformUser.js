import React from "react";
import Option from "./Option";
import "./dashboard.css";
import { Link } from "react-router-dom";

const LeftsideTerraformUser = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/terraformUser">
                        <Option Value="Personal Details" />
                    </Link>
                </li>
                <li>
                    <Link to="/terraformUser/searchTerraform">
                        <Option Value="Search Terraform" />
                    </Link>
                </li>
                <li>
                    <Link to="/terraformUser/appointment-status">
                        <Option Value="Appointment Status" />
                    </Link>
                </li>

                <li>
                    <Link to="/terraformUser/previousappointments">
                        <Option Value="Previous Appointments" />
                    </Link>
                </li>


            </ul>
        </div>
    );
};

export default LeftsideTerraformUser;