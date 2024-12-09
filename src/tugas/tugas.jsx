import Navbar from "./navbar";
import Body from "./body";
import Body2 from "./body2";
import Footer from "./footer";

function Tugas() {

    return(
        <div className="">
            <Navbar/>
            <div className="flex justify-center mt-8">
            <Body/>
            <Body2/>
            </div>
            <Footer/>
        </div>
        
    );
}

export default Tugas;