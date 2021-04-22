import React, { useState } from "react";
import "./css/Header.scss";
import { Link, Route, Switch } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heam from "./Heam.js";
import $ from "jquery";

function Header(props) {
    // $(function () {
    //     $(".header-back").hover(
    //         function () {
    //             $(".main_bar").css("color", "black");
    //         },
    //         function () {
    //             $(".main_bar").css("color", "white");
    //         }
    //     );
    // });
    // $(function () {
    //   $(document).ready(function () {
    //   })
    // })
    // $(function () {
    //     var headerScroll = $(".header-back").offset();
    //     $(window).on("beforeunload", function () {
    //         $(window).scrollTop(0);
    //     });
    //     $(document).ready(function () {
    //         $(".inner").mouseover(function () {
    //             $(".sub-wrap").css("opacity", "1");
    //             $(".sub-wrap").css("transform", "translateY(0px)");
    //             $("sub-list_li").css("opacity", "1");
    //             $(".main_bar").css("color", "black");
    //             $(".login_box").css("color", "black");
    //             $(".header-back").css("opacity", "1");
    //             $(".header-back").css("transform", "translateY(0px)");
    //             $(".header-back").css("border-bottom", "none");
    //             // if ($(document).scrollTop() > headerScroll.top) {
    //             // }
    //         });
    //         $(".sub-wrap").mouseleave(function () {
    //             $(".sub-wrap").css("opacity", "0");
    //             $(".sub-wrap").css("transform", "translateY(-90px)");
    //             $(".sub-wrap").css("transition-delay", "0s");
    //             $("sub-list_li").css("opacity", "0");

    //             if ($(document).scrollTop() > headerScroll.top) {
    //                 $(".header-back").css("opacity", "1");
    //                 $(".main_bar").css("color", "black");
    //                 $(".login_box").css("color", "black");
    //                 $(".header-back").css("border-bottom", "1px solid #d4d4d4");
    //             } else {
    //                 $(".header-back").css("opacity", "0");
    //                 $(".header-back").css("transform", "translateY(0px)");
    //                 $(".main_bar").css("color", "white");
    //                 $(".login_box").css("color", "white");
    //             }
    //         });
    //         $(window).scroll(function () {
    //             var scroll = $(window).scrollTop();

    //             console.log("백그라운드" + headerScroll.top);
    //             console.log(scroll);
    //             console.log("헤더 스크롤" + 0);
    //             if ($(document).scrollTop() > headerScroll.top) {
    //                 $(".header-back").css("opacity", "1");
    //                 $(".header-back").css("border-bottom", "1px solid #d4d4d4");
    //                 $(".main_bar").css("color", "black");
    //                 $(".login_box").css("color", "black");
    //             } else {
    //                 $(".header-back").css("opacity", "0");
    //                 $(".main_bar").css("color", "white");
    //                 $(".login_box").css("color", "white");
    //             }
    //         });
    //     });
    // });

    return (
        <>
            <div className="dHead">
                {/* <div className="header-back" /> */}
                <div className="header-wrap">
                    <div className="inner">
                        <h2 className="headerh2">
                            <a href="#" className="arrow">
                                <FontAwesomeIcon
                                    icon={faBars}
                                    className="arrow-btn"
                                    onClick={() => {
                                        props.setMenu(!props.menu);
                                    }}
                                />
                            </a>
                        </h2>
                        <h1 className="mainlogo">
                            <Link to="/">
                                <a href="#" className="Logo">
                                    "EV WMap"
                                </a>
                            </Link>
                        </h1>
                        <Heam />
                    </div>
                </div>
                <div className="sub-wrap on"></div>
                <div className="sub sub_left">
                    <div className="sub-list">
                        <ul className="sub-list_ul sub-ul-01">
                            <li className="sub-list_li">
                                <Link to="/map">
                                    <a href="">충전소 조회</a>
                                </Link>
                            </li>
                            <li className="sub-list_li">
                                <Link to="/navigate">
                                    <a href="">길찾기</a>
                                </Link>
                            </li>
                        </ul>
                        <ul className="sub-list_ul sub-ul-02">
                            <li className="sub-list_li">
                                <Link to="/notice">
                                    <a href="">공지사항</a>
                                </Link>
                            </li>

                            <li className="sub-list_li">
                                <Link to="/freeboard">
                                    <a href="">자유게시판</a>
                                </Link>
                            </li>
                            <li className="sub-list_li">
                                <Link to="/tipboard">
                                    <a href="">TIP게시판</a>
                                </Link>
                            </li>
                            <li className="sub-list_li">
                                <Link to="/news">
                                    <a href="">뉴스게시판</a>
                                </Link>
                            </li>
                        </ul>
                        <ul className="sub-list_ul sub-ul-03">
                            <li className="sub-list_li">
                                <Link to="/faq">
                                    <a href="">FAQ</a>
                                </Link>
                            </li>
                            <li className="sub-list_li">
                                <Link to="/questions">
                                    <a href="">문의하기</a>
                                </Link>
                            </li>
                            <li className="sub-list_li">
                                <Link to="/qlist">
                                    <a href="">문의내역</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="null">{props.menu === true ? <Heam2 /> : null}</div>
        </>
    );
}

function Heam2() {
    return (
        <>
            <div className="end"></div>
            <div className="MH">
                <div className="heammenu">
                    <div className="joinbox">
                        <ul className="global_join_box">
                            <li className="global_list">
                                <a className="login_box" href="#">
                                    로그인크크
                                </a>
                            </li>
                            <li className="global_list">
                                <a className="join_box" href="#">
                                    회원가입
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="global_menu">
                        <nav className="gub-wrap">
                            <ul className="mainmenu_ul">
                                <li className="area01 main_li">
                                    <p className="out">
                                        <p className="in" href="#">
                                            소개
                                        </p>
                                    </p>
                                </li>

                                <li className="area02 main_li">
                                    <p className="out">
                                        <p className="in">지도</p>
                                    </p>
                                    <div className="sub">
                                        <div className="sub-list">
                                            <ul className="sub-list_ul">
                                                <li className="sub-list_li">
                                                    <a href="">길찾기</a>
                                                </li>
                                                <li className="sub-list_li">
                                                    <a href="">예약</a>
                                                </li>
                                                <li className="sub-list_li">
                                                    <a href="">조회</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                <li className="area03 main_li">
                                    <p className="out">
                                        <p className="in">커뮤니티</p>
                                    </p>
                                    <div className="sub">
                                        <div className="sub-list">
                                            <ul className="sub-list_ul">
                                                <Link to="/notice">
                                                    <li className="sub-list_li">
                                                        <a href="">공지사항</a>
                                                    </li>
                                                </Link>
                                                <Link to="/freeboard">
                                                    <li className="sub-list_li">
                                                        <a href="">게시판</a>
                                                    </li>
                                                </Link>
                                                <li className="sub-list_li">
                                                    <a href="">뉴스</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                <li className="area04 main_li">
                                    <p className="out">
                                        <p className="in">문의하기</p>
                                    </p>
                                    <div className="sub">
                                        <div className="sub-list">
                                            <ul className="sub-list_ul">
                                                <li className="sub-list_li">
                                                    <a href="">FAQ</a>
                                                </li>
                                                <li className="sub-list_li">
                                                    <a href="">문의하긔기</a>
                                                </li>
                                                <li className="sub-list_li">
                                                    <a href="">문의내크역</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
