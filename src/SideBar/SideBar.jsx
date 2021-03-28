import { Link } from "react-router-dom";
import { FaTimes, FaBars } from 'react-icons/fa';

import Logo from "./logo.svg";
import "./SideBar.css";
import { Links, SocialLinks } from "./SideBarRoutes";



const SideBar = ({ isOpened, SideBarHandler }) => {

    let ClassNames = ["Wrapper"];
    if (isOpened) {
        ClassNames.push("Opened");
    }
    else {
        ClassNames.push("Closed");
    }


    // if the side Bar was closed this component displays an button to get it back ;
    // if the side bar was opened the button is not rendered ;

    return (
        <>
            {isOpened && <div className="Layout" onClick={SideBarHandler} />}

            <aside>

                {
                    // Side Bar Toggler 
                    !isOpened &&
                    <button className="SideBarToggler" onClick={SideBarHandler} aria-label = "open side bar">
                        <FaBars />
                    </button>
                }



                <div className={ClassNames.join(" ").trim()}>

                    {
                        <header>
                            <h1 className="Heading">
                                <img src={Logo} alt="Coding Addict" title="Coding Addict" />
                                <button onClick={SideBarHandler} aria-label = "close side bar"> <FaTimes /></button>
                            </h1>
                        </header>
                    }


                    {
                        // the Routes;
                        <ul className="Routes">
                            {Links.map(({ id, url, text, icon }) => {
                                return (
                                    <li key={id}>
                                        <Link to={url}>
                                            {icon}
                                            <span>{text}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    }



                    {
                        // the Social Links ;
                        <ul className="SocialLinksList">
                            {SocialLinks.map(({ icon, id, url , label }) => {
                                return (
                                    <li key={id}>
                                        <a href={url} target="_blank" rel="noreferrer" aria-label={label}>{icon}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    }
                </div>
            </aside>

        </>
    )
}
export default SideBar;