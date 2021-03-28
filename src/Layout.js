import SideBar from "./SideBar/SideBar";
import {useState} from "react";


const Layout = (props) => {
    const [isOpened, setOpened] = useState(false);

    const SideBarHandler = () => {
        setOpened(prevState => !prevState);
    }

    let MainContentClasses = ["MainContent"];
    if (isOpened) {
        MainContentClasses.push("Opened");
    }
    else {
        MainContentClasses.push("Closed");
    }
    return (
        <div className="Container">
            <SideBar isOpened={isOpened} SideBarHandler={SideBarHandler} />
            <main className={MainContentClasses.join(" ")}>
                {props.children}
            </main>
        </div>
    )
}

export default Layout;