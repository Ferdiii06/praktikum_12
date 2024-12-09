function Navbar() {

    return(
        <div className="p-2 flex justify-between">
            <img src="logo.jpg" alt="" className="w-24 h-12"/>
            <div className="flex mt-2 text-sm">
                <p className="text-gray-600">New here?</p>
                <a href="" className="text-blue-600 underline">Create An Account</a>
            </div>
        </div>

    );
}

export default Navbar;