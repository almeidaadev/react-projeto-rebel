const Home = () => {
    return (
        <>
            <main className="font-poppins">
                <div className="background-image">
                    <img
                        className="absolute top-0 left-0 z-[-1] w-screen h-screen bg-cover"
                        src="/background/header.jpg"
                        alt="header"
                    />
                </div>

                <div className="complement-header h-screen">
                    <div className="text-white font-semibold">
                        <h1 className="text-[5rem]">Make in <br /> your journey.</h1>
                        <p>Explore the world with what you love beautiful <br /> natural beauty.</p>

                        <div className=""></div>

                        <p><span className="text-white font-black">Popular Place:</span> Bali, Istanbul, Rome, Paris.</p>
                    </div>
                </div>

                <div className="carousel h-screen">
                    <h2 className="text-[3.75rem] font-semibold leading-[4.375rem] text-center ">Explore new worlds with <br /> exotic natural scenery</h2>
                    <p className="font-medium text-center leading-[2.25rem] text-[1.125rem] text-[#878787]">Explore the world with what you love beautiful natural beauty.</p>


                </div>
            </main>
        </>
    );
};

export default Home;
