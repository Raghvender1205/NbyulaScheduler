import React from "react";
import Option from "./Option";
import "./dashboard.css";
import { Link } from "react-router-dom";

const LeftsideTerraform = () => {
    return (
        <div>
            <ul className="mt-5">
                <li>
                    <Link to="/terraform">
                        <Option Value="Today's Schedule" Option="today" />
                    </Link>
                </li>
                <li style={{ textDecoration: "none" }}>
                    <Link to="/terraform/personaldetails">
                        <Option Value="Personal Details" />
                    </Link>
                </li>

                <li style={{ textDecoration: "none" }}>
                    <Link to="/terraform/payment-history">
                        <Option Value="Previous Appointments" />
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default LeftsideTerraform;