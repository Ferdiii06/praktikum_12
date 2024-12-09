function Body() {

    return(
        <div className="">
            <div className="px-16 py-10">
                <p className="text-2xl font-sans">Welcome To Keen</p>
                <p className="text-sm mt-9">Email</p>
                <input type="text" className="w-96 h-10 mt-2 rounded-md bg-gray-200" />
                <div className="flex justify-between mt-9">
                    <p className="text-sm">Password <a href="" className="text-blue-500 underline text-sm ms-52">Forgot Password ?</a></p>
                </div>
                <input type="password" className="w-96 h-10 mt-2 rounded-md bg-gray-200"/>
                <div className="flex gap-5 mt-8">
                    <button className="text-white font-semibold px-7 py-4 border bg-blue-500 w-28 h-16 rounded-md ">Sign In</button>
                    <button className="flex border w-44 h-16 bg-gray-200 rounded-md px-4 py-5 text-sm text-blue-400 gap-2"><img src="google.png" alt="" className="w-5 h-5"/>Sign with Google </button>
                </div>
            </div>
        </div>
    );
}

export default Body;