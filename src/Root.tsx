import {Outlet, useNavigation} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalSpinner from "./components/GlobalSpinner";

export function Root() {
    const navigation = useNavigation();

    return (
        <div>
            {navigation.state === "loading" && <GlobalSpinner/>}
            <Header/>

            <div>
                <Outlet/>
                <Footer/>
            </div>
        </div>
    );
}
