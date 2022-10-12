import React from 'react';
import fb from "../assets/images/fb.png";
import github from "../assets/images/github.png";
import twitter from "../assets/images/twitter.png";
import google from "../assets/images/google.png";
import linkedin from "../assets/images/linkedin.png";
import instagram from "../assets/images/instagram.jpeg";
import APIURL from '../services/Url';

// import { GetGoogleApi } from "../services/socialapi";

const Signup = () => {

    const ImgStyle = {
        width: '3rem',
        height: '2rem',
        marginLeft: '1rem',
    }

    const BtnStyle = {
        border : 'none',
        marginLeft : '2rem',
        color : 'none'
    }

    const PageDisplay = "toolbar=0,status=0,width=548,height=700";

    const OnGoogleClicked = () => {
        window.open(`${APIURL}auth/google`, "_self", PageDisplay);
    };
 
    const OnGithubClicked = () => {
        window.open(`${APIURL}auth/github`, "sharer", PageDisplay);
    };

    const OnFbClicked = () => {
        window.open(`${APIURL}auth/facebook`, "sharer", PageDisplay);
    };

    const OnInstagramClicked = () => {
        window.open(`${APIURL}auth/instagram`, "sharer", PageDisplay);
    }

    const OnLinkedinClicked = () => {
        window.open(`${APIURL}auth/linkedin`, "sharer", PageDisplay);
    }

    const OnTwitterClicked = () => { 
        window.open(`${APIURL}auth/twitter`, "sharer", PageDisplay);
    };

    return (
        <>
            <div className="container">
                <div className="structure">
                    <ul className="signup">
                        <div className="signup_li" >
                            <button 
                            onClick={OnGoogleClicked}
                            style={BtnStyle}>
                                <li className="google">
                                    <img src={google}
                                        alt="cant load google"
                                        style={ImgStyle} />
                                </li>
                            </button>
                            <button 
                            onClick={OnGithubClicked}
                            style={BtnStyle}>
                                <li className="github">
                                    <img src={github}
                                        alt="cant load github"
                                        style={ImgStyle} />
                                </li>
                            </button>
                            <button 
                            onClick={OnFbClicked} 
                            style={BtnStyle}>
                                <li className="fb">
                                    <img src={fb}
                                        alt="cant load fb"
                                        style={ImgStyle} />
                                </li>
                            </button>
                            <button 
                            onClick={OnInstagramClicked} 
                            style={BtnStyle}>
                                <li className="instagram">
                                    <img src={instagram}
                                        alt="cant load instagram"
                                        style={ImgStyle} />
                                </li>
                            </button>
                            <button 
                            onClick={OnTwitterClicked}
                            style={BtnStyle}>
                                <li className="twitter">
                                    <img src={twitter}
                                        alt="cant load twitter"
                                        style={ImgStyle} />
                                </li>
                            </button>
                            <button 
                            onClick={OnLinkedinClicked}
                            style={BtnStyle}>
                                <li className="linkedin">
                                    <img src={linkedin}
                                        alt="cant load linkedin"
                                        style={ImgStyle} />
                                </li>
                            </button>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Signup;