const Footer = () => {
    return (
        <>
            <footer className="fixed bottom-0 left-0 w-full flex flex-col">
                <section className="relative flex flex-col justify-center items-center w-full h-[542px] before:content-[''] before:absolute before:z-[-999] before:bg-before-bg-footer before:w-full before:h-[542px] before:bg-no-repeat before:bg-cover before:object-contain">
                    <h2 className="text-white font-semibold text-[3.75rem] leading-[4.375rem]">
                        Subcribe to get special price
                    </h2>
                    <p className="text-white font-medium text-[1.125rem] leanding-[2.125rem] text-center mt-[1.25rem] mx-0 mb-[3.125rem]">
                        Dont wanna miss something? subscribe right now and get
                        special <br />
                        promotion and monthly newsletter
                    </p>

                    <div className="relative">
                        <input
                            className="rounded-[2.1875rem] w-[676px] h-[69px] px-[1.25rem]"
                            type="email"
                            placeholder="Type your email here"
                        />
                        <button className="absolute right-[8px] top-[8px] rounded-[1.75rem] w-[146px] h-[55px] font-medium text-[1.25rem] leading-[2.125rem] bg-black text-white">
                            Subscribe
                        </button>
                    </div>
                </section>

                <section className="flex justify-around p-[1.875rem]">
                    <div className="flex flex-col items-center">
                        <img src="/background/logo-footer.jpg" alt="#" />

                        <p>
                            Lorem ipsum dolor sit amet, consectetur <br />
                            adipiscing elit. Quisque pharetra condimentum.
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-black font-medium text-[1.5rem] leading-[4.375rem]">
                            Contact Information
                        </h3>
                        <span className="flex text-[#6C6C6C] font-medium text-[1.5rem] leading-[2.125rem]">
                            <img className="mr-[.5rem]" src="/icons/location.svg" />
                            732 Despard St, Atlanta
                        </span>

                        <span className="flex  text-[#6C6C6C] font-medium text-[1.5rem] leading-[2.125rem]">
                            <img className="mr-[.5rem]" src="/icons/email.svg" />
                            +97 888 8888
                        </span>

                        <span className="flex  text-[#6C6C6C] font-medium text-[1.5rem] leading-[2.125rem]">
                            <img className="mr-[.5rem]" src="/icons/phone.svg" />
                            info@traveller.com
                        </span>
                    </div>

                    <div className="flex flex-col ">
                        <h3 className="text-black font-medium text-[1.5rem] leading-[4.375rem]">
                            Quick Link
                        </h3>

                        <a className="text-[#6C6C6C] font-medium text-[1.5rem] leading-[2.125rem]" href="#">Home</a>
                        <a className="text-[#6C6C6C] font-medium text-[1.5rem] leading-[2.125rem]" href="#">About Us</a>
                        <a className="text-[#6C6C6C] font-medium text-[1.5rem] leading-[2.125rem]" href="#">Tours</a>
                        <a className="text-[#6C6C6C] font-medium text-[1.5rem] leading-[2.125rem]" href="#">Contact</a>
                    </div>

                    <div className="text-center">
                        <h3 className="text-black font-medium text-[1.5rem] leading-[4.375rem]">
                            Follow Us
                        </h3>

                        <div className="flex gap-[2rem] items-center">
                            <a className="text-[#6C6C6C] font-medium text-[1.5rem] leading-[2.125rem]" href="#">
                                <img src="/icons/social/facebook.svg" />
                            </a>

                            <a className="text-[#6C6C6C] font-medium text-[1.5rem] leading-[2.125rem]" href="#">
                                <img src="/icons/social/twitter.svg" />
                            </a>

                            <a className="text-[#6C6C6C] font-medium text-[1.5rem] leading-[2.125rem]" href="#">
                                <img src="/icons/social/youtube.svg" />
                            </a>

                            <a className="text-[#6C6C6C] font-medium text-[1.5rem] leading-[2.125rem]" href="#">
                                <img src="/icons/social/instagram.svg" />
                            </a>
                        </div>
                    </div>
                </section>

                <section className="bg-black text-white font-medium leading-[2.125rem] text-[1.125rem] flex justify-center items-center w-full h-[120px]">
                    <div className="copy">
                        Copyright © All rights reserved (Website Developed &
                        Managed by creativechroma)
                    </div>
                </section>
            </footer>
        </>
    );
};

export default Footer;