import React from "react";
import { Link } from "react-router-dom";
import AboutCTA from "@/components/shared/AboutCTA";
import { ChevronRight } from "lucide-react";
import { useCases } from "@/data/useCases";

const UseCase = () => {
    return (
        <div className="container mx-auto flex items-center justify-center mt-20">
            <div className="!w-full sm:!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:!max-w-[66vw] overflow-y-auto shadow-sm p-0">
                <div className="h-full flex flex-col">
                    <div>
                        <div className="pt-24 px-8">
                            <h1 className="text-3xl font-medium tetx-[#173A44] text-center mb-8">
                                Use Cases
                            </h1>

                            <div className="text-center mb-12">
                                <p className="text-gray-700">
                                    Discover how Traced Systems transforms challenges into
                                    opportunities for businesses.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="px-8">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {useCases.map((item, index) => {
                                const hasDetail = !!item.slug;

                                const card = (
                                    <div
                                        key={index}
                                        className="bg-white rounded-xl shadow-[4px_4px_10px_0px_rgba(0,0,0,0.05),-4px_-4px_10px_0px_rgba(255,255,255,0.9)] hover:shadow-[6px_6px_12px_0px_rgba(0,0,0,0.1),-6px_-6px_12px_0px_rgba(255,255,255,0.95)] transition-all duration-300 cursor-pointer"
                                    >
                                        <div className="aspect-[430/243] w-full">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-48 object-cover rounded-t-lg mb-4"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-lg font-medium text-[#173A44] mb-2">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-600 mb-4">
                                                {item.description}
                                            </p>
                                            <button className="transition-colors text-[#E4AC70] hover:text-[#C66600] flex items-center gap-0.5">
                                                Learn More{" "}
                                                <ChevronRight className="w-4 h-4 mt-0.5" />
                                            </button>
                                        </div>
                                    </div>
                                );

                                if (hasDetail) {
                                    return (
                                        <Link
                                            key={index}
                                            to={`/use-case/${item.slug}`}
                                            className="block"
                                        >
                                            {card}
                                        </Link>
                                    );
                                }

                                return card;
                            })}
                        </div>
                    </div>

                    <AboutCTA />
                </div>
            </div>
        </div>
    );
};

export default UseCase;
