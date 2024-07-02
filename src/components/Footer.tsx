const Footer = () => {
    return (
        <>
            <footer className="fixed bottom-0 left-0 w-full flex flex-col">
                <section className="relative flex flex-col justify-center items-center w-full h-[542px] before:content-[''] before:relative before:z-[-999] before:bg-[/*TODO: Adicionar imagem aqui*/] w-full h-[542px] bg-no-repeat bg-cover object-contain">
                    <h2 className="text-white font-semibold text-[6rem] leading-[7rem]">
                        Subcribe to get special price
                    </h2>
                    <p className="font-medium text-[1.8rem] leanding-[3.4rem] text-center mt-[2rem] mx-0 mb-[5rem]">
                        Dont wanna miss something? subscribe right now and get
                        special <br />
                        promotion and monthly newsletter
                    </p>

                    <div className="relative">
                        <input
                            className="rounded-[3.5rem] w-[676px] h-[69px] px-[2rem]"
                            type="email"
                            placeholder="Type your email here"
                        />
                        <button className="absolute right-[8px] top-[10px] rounded-[2.8rem] w-[146px] h-[55px] font-medium text-[2rem] leading-[3.4rem] bg-black text-white">
                            Subscribe
                        </button>
                    </div>
                </section>

                <section className="flex justify-around p-[3rem]">
                    <div className="logo-footer">
                        <img src="./assets/logo 2.png" alt="#" />

                        <p>
                            Lorem ipsum dolor sit amet, consectetur <br />
                            adipiscing elit. Quisque pharetra condimentum.
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-black font-medium text-[2.4rem] leading-[7rem]">
                            Contact Information
                        </h3>
                        <span className="text-[#6C6C6C] font-medium text-[2.4rem] leading-[3.4rem]">
                            <img src="./assets/footer-imgs/localiza.png" />
                            732 Despard St, Atlanta
                        </span>

                        <span className="text-[#6C6C6C] font-medium text-[2.4rem] leading-[3.4rem]">
                            <img src="./assets/footer-imgs/email.png" />
                            +97 888 8888
                        </span>

                        <span className="text-[#6C6C6C] font-medium text-[2.4rem] leading-[3.4rem]">
                            <img src="./assets/footer-imgs/phone.png" />
                            info@traveller.com
                        </span>
                    </div>

                    <div className="flex flex-col ">
                        <h3 className="text-black font-medium text-[2.4rem] leading-[7rem]">
                            Quick Link
                        </h3>
                        <a className="text-[#6C6C6C] font-medium text-[2.4rem] leading-[3.4rem]" href="#">Home</a>
                        <a className="text-[#6C6C6C] font-medium text-[2.4rem] leading-[3.4rem]" href="#">About Us</a>
                        <a className="text-[#6C6C6C] font-medium text-[2.4rem] leading-[3.4rem]" href="#">Tours</a>
                        <a className="text-[#6C6C6C] font-medium text-[2.4rem] leading-[3.4rem]" href="#">Contact</a>
                    </div>

                    <div className="text-center">
                        <h3 className="text-black font-medium text-[2.4rem] leading-[7rem]">
                            Follow Us
                        </h3>

                        <div className="flex gap-[2rem]">
                            <a className="text-[#6C6C6C] font-medium text-[2.4rem] leading-[3.4rem]" href="#">
                                <img src="./assets/footer-imgs/face.png" />
                            </a>

                            <a className="text-[#6C6C6C] font-medium text-[2.4rem] leading-[3.4rem]" href="#">
                                <img src="./assets/footer-imgs/twitter.png" />
                            </a>

                            <a className="text-[#6C6C6C] font-medium text-[2.4rem] leading-[3.4rem]" href="#">
                                <img src="./assets/footer-imgs/youtube.png" />
                            </a>

                            <a className="text-[#6C6C6C] font-medium text-[2.4rem] leading-[3.4rem]" href="#">
                                <img src="./assets/footer-imgs/insta.png" />
                            </a>
                        </div>
                    </div>
                </section>

                <section className="bg-black text-white font-medium leading-[3.4rem] text-[1.8rem] flex justify-center items-center w-full h-[120px]">
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