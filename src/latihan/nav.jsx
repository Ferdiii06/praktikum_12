function Nav() {

    return(
        <div className="p-2 flex justify-between bg-sky-300">
            <img src="Google-Logo.png" alt="" className="w-15 h-12 ms-5"/>
            <div className="flex text-sm gap-3">
            <button className=" px-6 py-3 rounded-full text-xs text-white ">Contact</button>
                <button className=" px-6 py-3 rounded-full text-xs text-white ">About Us</button>
                <button className=" px-6 py-3 rounded-full text-xs text-white ">Template</button>
            </div>
        </div>
    );
}

export default Nav;