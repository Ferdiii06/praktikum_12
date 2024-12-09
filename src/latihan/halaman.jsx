function Halaman() {

    return(
        <div className="flex justify-center mt-8">
            <div className="px-16 py-10">
                <p className="text-2xl font-sans">Welcome To Website</p>
                <p className="text-sm mt-9">Email</p>
                <input type="text" placeholder="Enter your Email" className="w-96 h-10 mt-2 rounded-md bg-gray-200" />
                <div className="flex justify-between mt-9">
                    <p className="text-sm">Password <a href="" className="text-blue-500 underline text-sm ms-52">Forgot Password ?</a></p>
                </div>
                <input type="password" placeholder="Enter your Password" className="w-96 h-10 mt-2 rounded-md bg-gray-200"/>
                <div className="flex gap-5 mt-8">
                    <button className="text-white font-semibold px-7 py-4 border bg-sky-300 w-28 h-16 rounded-md ">Sign In</button>
                    <button className="flex border w-44 h-16 bg-gray-200 rounded-md px-4 py-5 text-sm text-blue-400 gap-2"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkRJREFUSEvl1snLjlEYx/HPa45kZUhhZaNYGEMWFooMURKxIMPKvOEfsGBjKIVMxcKGhSIpVoYFIaQMKUOGopAhMp1T96un03nu57yvxZvcy/v8zvW9rnOuc36nTRd9bV3E9U+BY7KDMQzf8ATvOrpypRX3wkrMw1T0T0DPcA4ncLEkiRLwTOzDiJKAuIPFuFenbwVeU0Fb6VLGx2ormm5BXcBlOFZYZaPsO+bjTGcqnojL6JGZ/DUEvoVreIsxWFDpfoQlXhT+nWqVcK7i7qGJblQB00p2YBs+J4EHYimelkDj3Bx4eWikI0ngWOV43G1VSel4Dnwac5MAa7G3NGiJLgXHZX6Pfg2TY4cOwM+SgKWaFDwSD5LJZ0Mjzc4EjMmU3libsKsxRgoeh+sJZAtiU6VfR8C7Q5Ib68CjcTshbMCeDDhemx8Kl3Zn0G6uAw/ByyTY0WAEK/6y4q3YXgeOY68q92nX3cTYDDg24rTM/1GZE7CkMpA/8txxOl5dBu2iX4hGcb5wWQ9gdYM2zh+EN60qnp6xtti9kzIdn+Yyo7LHbg0DV0PSU1JhM5O4gsmJ+Eu4m9cF1zmUqbxnZYXRPvsm4wtxshQcr8dL6J2BRHN4iOfog+FVkvFVkn7xaE7IbVGdLcZOPly4rznZ66opX3QUHPWxSfY3MZO6nB6Fi2gO7jcTlbwsZuEghhZWH1dpPT7V6UvAcX587K2qXCv32HsczvSF6oYrss5ScHoEG5+3sdHSh0HLxekMuGXQEsH/B/4N9xBeH8WBoaEAAAAASUVORK5CYII=" className="w-5 h-5"/>Sign with Google</button>
                </div>
            </div>
        </div>
    );
}

export default Halaman;