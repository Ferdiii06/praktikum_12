function Footer() {

    return(
        <div className="flex justify-between mt-24 mx-3">
            <div className="flex text-gray-500">
                <p>2021</p>
                <p>&#169;</p>
                <p className="ms-1 underline">Keenthemes</p>
            </div>
            <div className="flex text-blue-500 gap-5">
                <p className="underline">Terms</p>
                <p className="underline">Plans</p>
                <p className="underline">Contact Us</p>
            </div>
        </div>
    );
}

export default Footer;