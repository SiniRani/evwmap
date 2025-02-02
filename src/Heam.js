import React from "react";
import { Link, Route, Switch } from "react-router-dom";

function Heam() {
    function logout() {
        localStorage.removeItem("id");
        window.location.replace("/");
    }
    return (
        <div className="pcmenu">
            <div className="global_box">
                <ul className="global_join_box">
                    <li className="global_list">
                        {localStorage.getItem("id") == null ? (
                            <Link to="/login">
                                <a className="login_box" href="#">
                                    LOGIN
                                </a>
                            </Link>
                        ) : (
                            <Link to="/">
                                <a
                                    className="login_box"
                                    href="#"
                                    onClick={logout}
                                >
                                    LOGOUT
                                </a>
                            </Link>
                        )}
                    </li>
                    <li className="global_list">
                        {localStorage.getItem("id") == null ? (
                            <Link to="/signup">
                                <a className="join_box" href="#">
                                    JOIN
                                </a>
                            </Link>
                        ) : (
                            <Link to="/activity">
                                <a className="join_box" href="#">
                                    MY PAGE
                                </a>
                            </Link>
                        )}
                    </li>
                </ul>
            </div>
            <div className="global_menu">
                <nav className="gub-wrap">
                    <ul className="mainmenu_ul">
                        <li className="gub_01 main_li">
                            <Link to="/introduction">
                                <a className="main_menu_list" href="">
                                    <h3 className="main_bar">INTRODUCTION</h3>
                                </a>
                            </Link>
                        </li>

                        <li className="gub_02 main_li">
                            <Link to="/map">
                                <a className="map_a main_menu_list" href="">
                                    <h3 className="main_bar">MAP</h3>
                                </a>
                            </Link>
                        </li>

                        <li className="gub_03 main_li">
                            <Link to="/notice">
                                <a className="com_a main_menu_list" href="">
                                    <h3 className="main_bar">COMMUNITY</h3>
                                </a>
                            </Link>
                            {/* <div className="sub sub_left">
                                <div className="sub-list">
                                    
                                </div>
                            </div> */}
                        </li>
                        <li className="gub_04 main_li">
                            <Link to="/faq">
                                <a className="con_a main_menu_list" href="">
                                    <h3 className="main_bar">CONTACT</h3>
                                </a>
                            </Link>
                            {/* <div className="sub sub_left">
                                <div className="sub-list">
                                    
                                </div>
                            </div> */}
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Heam;
