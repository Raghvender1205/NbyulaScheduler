import React, { useState, useEffect} from "react";
import Axios from "axios";
import Scrollbar from "react-scrollbars-custom";
import { Link } from "react-router-dom";
import {
    Row,
    Col,
    Input,
    Button,
    InputGroup,
    InputGroupAddon,
} from "reactstrap";

const Search = () => {
    const [text, setText] = useState();
    const [suggestions, setSuggestions] = useState([]);

    function onTextChanged(e) {
        let value = e.target.value;
        setText(value);
        fetchTerraform();
        value = value.toLowerCase();
    }

    function suggestionSelected(value) {
        setText(value);
        setSuggestions([]);
    }

    function renderSuggestions() {
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <InputGroup>
                <ul className="list-group dropdown-menu pt-0 pb-0">
                    {suggestions.map((item) => (
                        <li
                            className="list-group-item list-group-item-action"
                            onClick={() => suggestionSelected(item)}
                            key={item}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </InputGroup>
        );
    }

    const [Terraform, setTerraform] = useState([]);

    const fetchTerraform = async () => {
        const { data } = await Axios.get(
            `${process.env.REACT_APP_SERVER_URL}/terraform/`
        );
        setTerraform(data);
        console.log(data);
    };

    const UpdateDisplay = (text) => {
        setTerraform((Doctor) => {
            return Terraform.filter(
                (doctor) => doctor.specialization.toLowerCase() === text.toLowerCase()
            );
        });
        console.log(Terraform);
    };

    useEffect(() => {
        fetchTerraform();
    }, []);

    return (
        <div>
            <Row className="mb-3">
                <Col>
                    <InputGroup>
                        <Input
                            value={text}
                            type="text"
                            placeholder="Search Your Doctor"
                            onChange={onTextChanged}
                            className="mb-1"
                        />
                        <div style={{ height: 10 }} className="">
                            <InputGroupAddon addonType="append">
                                <Button
                                    className="h-10 d-inline-block"
                                    color="primary"
                                    onClick={() => UpdateDisplay(text)}
                                >
                                    Search Terraform
                                </Button>
                            </InputGroupAddon>
                        </div>
                    </InputGroup>
                    {renderSuggestions()}
                </Col>
            </Row>

            {/* <ListGroup> */}
            <Scrollbar
                noScrollX
                style={{ position: "", height: "64vh", width: "144vh" }}
                className="col-12 col-md-12"
            >
                <div className="row">
                    {Terraform.map((terraform) => (
                        // <ListGroupItem key={doc.id} className="mb-3">
                        <div className="col-sm-6 mb-2" key={terraform._id}>
                            <div className="card">
                                <div className="card-body">
                                    <div className="text-info">
                                        <h6>
                                            Name:
                                            <span className="text-uppercase"> {terraform.name}</span>
                                        </h6>
                                    </div>
                                    <div>Phone Number : {terraform.phoneNumber}</div>
                                    <div className="row mb-0 pb-0">
                                        <div className="col-md-6 ">
                                            FeesPerSession: {terraform.feesPerSession}
                                        </div>
                                        <div
                                            className=" col align-self-end col-md-2 offset-md-3 inline"
                                            style={{ textAlign: "center" }}
                                        ><Link to={{ pathname: "/terraformUser/selectdate", terraform: { terraform: terraform } }}>
                                                <button className="btn btn-sm btn-primary"

                                                >  Book</button> </Link>
                                        </div>
                                    </div>

                                    {/* </ListGroupItem> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Scrollbar>
            {/* </ListGroup> */}
        </div>
    );
};

export default Search;