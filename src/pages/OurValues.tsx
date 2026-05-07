import AccordionSection from "@/components/our-values/AccordionSection";
import TabsSection from "@/components/our-values/TabsSection";
import AboutCTA from "@/components/shared/AboutCTA";
import SheetBackgroundSection from "@/components/shared/SheetBackgroundSection";
import TitleBanner from "@/components/shared/TitleBanner";
import React from "react";


const OurValues = () => {
    return (
        <div className="container mx-auto mt-24">

            <div >
                <div

                    className="bg-[#F7F7F5] flex flex-col items-center justify-center"
                >


                    <div className="w-full">
                        <TitleBanner title="Our Values" />
                    </div>

                    <div className="h-full flex flex-col pt-16 py-0">
                        <div className="mx-12">
                            <SheetBackgroundSection>
                                <div className="pt-8 px-8 py-[31px] my-0">
                                    <div className="text-center mb-12">
                                        <h2 className="text-2xl font-medium text-[#173A44] mb-8">
                                            Traced Systems
                                        </h2>
                                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                                            Traced Systems, powered by Chromia offers businesses an
                                            intuitive, secure solution to track products throughout
                                            their entire lifecycle from production to end-of-life
                                            ensuring full transparency, compliance, and trust at every
                                            stage.
                                        </p>
                                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                            By merging traditional processes with modern technology, we
                                            help organizations unlock new efficiencies, engage customers
                                            more deeply, and confidently embrace the future of
                                            sustainable innovation.
                                        </p>
                                    </div>
                                </div>
                            </SheetBackgroundSection>

                            <div className="px-8 space-y-12 flex-grow">
                                <TabsSection />
                                <AccordionSection />
                            </div>
                        </div>
                        <AboutCTA />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OurValues