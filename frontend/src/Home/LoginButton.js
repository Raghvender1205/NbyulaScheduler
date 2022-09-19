import React from "react";
import Card from "./Card";

import terraformlogin from "../image/doctorlogin.png";
import terraformUserlogin from "../image/patientlogin.png";

const LoginButton = () => {
    return (
        <div className="d-flex flex-md-row flex-column justify-content-around align-items-center my-4">
            <Card Image={terraformlogin} link={"/terraformlogin"} />
            <Card
                LoginButton="terraformUser"
                Image={terraformUserlogin}
                link={"/terraformUser"}
                login="terraformUserLogin"
            />
        </div>
    );
};

export default LoginButton;