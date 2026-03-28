import React from "react";
import Link from "next/link";

const ContactInfo = () => {
    return (
        <>
            <section className="dark:bg-darkmode lg:pt-20 pt-16 lg:pb-24 pb-10">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
                    <div className="flex md:flex-row flex-col lg:items-center items-start justify-center md:gap-28 gap-8">
                        <div className="flex sm:flex-row flex-col items-start sm:gap-8 gap-4">
                            <div className="bg-primary/20 w-14 h-14 flex items-center justify-center rounded-full">
                                <i className="bg-[url('/images/contact-page/email.svg')] bg-no-repeat bg-contain w-9 h-9 inline-block"></i>
                            </div>
                            <div className="flex md:flex-col sm:flex-row flex-col md:items-start sm:items-center items-start h-full justify-between">
                                <div>
                                    <span className="text-secondary dark:text-white text-xl font-bold">
                                        ¿Tienes dudas?
                                    </span>
                                    <p className="text-SlateBlueText font-normal text-xl max-w-80 pt-3 pb-7 dark:text-opacity-80">
                                        Escríbenos y con gusto te ayudamos a resolver cualquier pregunta sobre el hackathon.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex sm:flex-row flex-col items-start sm:gap-8 gap-4">
                            <div className="bg-primary/20 w-14 h-14 flex items-center justify-center rounded-full">
                                <i className="bg-[url('/images/contact-page/Career.svg')] bg-no-repeat bg-contain w-9 h-9 inline-block"></i>
                            </div>
                            <div className="flex md:flex-col sm:flex-row flex-col md:items-start sm:items-center items-start h-full justify-between">
                                <div>
                                    <span className="text-secondary dark:text-white text-xl font-bold">
                                        ¿Quieres formar parte?
                                    </span>
                                    <p className="text-SlateBlueText font-normal text-xl max-w-80 pt-3 pb-7 dark:text-opacity-80">
                                        Este evento está abierto para desarrolladores, diseñadores y entusiastas de la tecnología que quieran crear algo increíble.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-b border-solid  dark:border-dark_border"></div>
            </section>
        </>
    );
};

export default ContactInfo;
