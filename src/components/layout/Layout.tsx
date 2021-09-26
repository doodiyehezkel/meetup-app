import { FC } from "react";
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";


const Layout: FC = (props) => {
    return (
        <>
            <MainNavigation />
            <main className={classes.main}> {props.children} </main>
        </>
    )
}

export default Layout;