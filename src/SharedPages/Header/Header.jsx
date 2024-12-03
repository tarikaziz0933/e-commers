import InformationBar from "./InformationBar";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

const Header = () => {
    return (
        <div>
            <InformationBar></InformationBar>
            <SearchBar></SearchBar>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;