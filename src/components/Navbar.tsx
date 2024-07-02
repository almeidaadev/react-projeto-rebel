const NavBar = () => {
    return (
        <>
            <header className="relative flex justify-between px-[4rem] py-[2rem] items-center bg-[#120B0B82] text-white font-semibold font-poppins text-[18px] leading-[27px] ">
                <img src="/logoRebel.png" alt="" />

                <nav className="flex items-center gap-[4rem]">
                    <ul className="flex gap-[4rem]">
                        <li className=""><a href="#" className="opacity-[.7] hover:opacity-[1]">Home</a></li>
                        <li className=""><a href="#" className="opacity-[.7] hover:opacity-[1]">Package</a></li>
                        <li className=""><a href="#" className="opacity-[.7] hover:opacity-[1]">Destination</a></li>
                        <li className=""><a href="#" className="opacity-[.7] hover:opacity-[1]">Blog</a></li>
                        <li className=""><a href="#" className="opacity-[.7] hover:opacity-[1]">Contact</a></li>
                    </ul>

                    <div className="search">
                        <img className="cursor-pointer" src="/icons/lupa.svg" alt="Lupa" />
                    </div>
                </nav>
            </header>
        </>
    );
};

export default NavBar;