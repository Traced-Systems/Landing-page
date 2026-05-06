import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useCases } from "@/data/useCases";
import IndustrySheetCTA from "@/components/shared/IndustrySheetCTA";
import { ArrowLeft, ChevronRight, Home } from "lucide-react";

const UseCasePage = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();

    const useCase = useCases.find((c) => c.slug === slug);



    // Determine which hero image to show based on the use case
    const getUseCaseImage = () => {
        if (!useCase) return "";
        if (useCase.title.includes("BLK DNM")) {
            return "/lovable-uploads/9db7c859-32c0-401e-b88a-1dbeb280f592.png";
        } else if (
            useCase.title.includes("Battery") ||
            useCase.fullContent?.title.includes("DPP pilot")
        ) {
            return "/lovable-uploads/e2ba693f-4ec8-408e-9145-4fe6fc1bd629.png";
        }
        return "/lovable-uploads/455ee019-a81c-4318-b9c9-b8238118d40b.png";
    };



    // ── Author line ──
    const renderAuthorLine = () => {
        if (useCase.title.includes("BLK DNM")) {
            return (
                <>
                    Written by Traced Systems x{" "}
                    <a
                        href="https://chromia.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-800 underline"
                    >
                        Chromia
                    </a>{" "}
                    x{" "}
                    <a
                        href="https://digital.blkdnm.com/?ref=blog.chromia.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-800 underline"
                    >
                        BLK DNM
                    </a>
                </>
            );
        }
        return (
            <>
                Written by Traced Systems x{" "}
                <a
                    href="https://www.clingsystems.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 underline"
                >
                    Cling
                </a>{" "}
                x{" "}
                <a
                    href="https://batteriretur.no/hoyenergibatterier/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 underline"
                >
                    BatteriRetur
                </a>{" "}
                x{" "}
                <a
                    href="https://instagrid.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 underline"
                >
                    Instagrid
                </a>
            </>
        );
    };

    return (
        <div className="min-h-screen bg-[#F7F7F5]">
            {/* ── Breadcrumb ── */}
            <div className="max-w-4xl mx-auto px-6 pt-28 pb-4">
                <nav
                    aria-label="Breadcrumb"
                    className="flex items-center gap-1.5 text-sm text-gray-500"
                >
                    <Link
                        to="/"
                        className="hover:text-[#C66600] transition-colors flex items-center gap-1"
                    >
                        <Home className="w-3.5 h-3.5" />
                        Home
                    </Link>
                    <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                    <Link to="/use-cases" className="hover:text-[#C66600] transition-colors">
                        Use Cases
                    </Link>                </nav>
            </div>

            {/* ── Article ── */}
            <article className="max-w-4xl mx-auto px-6 pb-16">
                {useCase.fullContent ? (
                    <>
                        {/* Author */}
                        <div className="flex items-center gap-2 mb-6">
                            <img
                                src="/lovable-uploads/5ce2f433-ac13-4162-97af-4ed813cff152.png"
                                alt="Traced Systems"
                                className="w-6 h-6"
                            />
                            <span className="text-gray-600">{renderAuthorLine()}</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl font-bold text-[#173A44] mb-6">
                            {useCase.fullContent.title}
                        </h1>

                        {/* Hero Image */}
                        <div className="flex justify-center mb-10">
                            <img
                                src={getUseCaseImage()}
                                alt={useCase.title}
                                className="w-full max-w-3xl object-cover rounded-lg"
                            />
                        </div>

                        {/* Introduction */}
                        <div className="prose max-w-none mb-12">
                            <p className="text-gray-600 mb-8 text-lg">
                                {useCase.fullContent.introduction}
                            </p>

                            {/* Sections */}
                            {useCase.fullContent.content.map((section, index) => (
                                <div key={index} className="mb-8">
                                    <h2 className="text-2xl font-bold text-[#173A44] mb-4">
                                        {section.heading}
                                    </h2>
                                    <div className="text-gray-600 whitespace-pre-line">
                                        {section.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <>
                        {/* Fallback — "Be Our Next Use Case" style */}
                        <h1 className="text-4xl font-bold text-[#173A44] mb-6">
                            {useCase.title}
                        </h1>

                        <div className="flex justify-center mb-10">
                            <img
                                src="/lovable-uploads/455ee019-a81c-4318-b9c9-b8238118d40b.png"
                                alt={useCase.title}
                                className="w-full max-w-3xl object-cover rounded-lg"
                            />
                        </div>

                        <div className="prose max-w-none mb-12">
                            <p className="text-gray-600 mb-4">{useCase.description}</p>

                            <h2 className="text-2xl font-bold text-[#173A44] mb-4">
                                The Challenge
                            </h2>
                            <p className="text-gray-600 mb-4">
                                Global supply chains are increasingly complex, regulations are
                                tightening, and consumers expect transparency. Without the right
                                tools, businesses face higher costs, reputational risks, and lost
                                opportunities.
                            </p>

                            <h2 className="text-2xl font-bold text-[#173A44] mb-4">
                                The Solution
                            </h2>
                            <p className="text-gray-600 mb-4">
                                Traced Systems' Digital Product Passport (DPP) is sector-agnostic,
                                integrating supplier data, compliance requirements, and consumer
                                insights on a secure blockchain. This provides full traceability,
                                streamlined processes, and sustainability metrics.
                            </p>

                            <h2 className="text-2xl font-bold text-[#173A44] mb-4">
                                The Results
                            </h2>
                            <p className="text-gray-600 mb-4">
                                Companies using our DPP reduce compliance headaches, strengthen brand
                                trust, and minimize waste. They gain actionable insights that drive
                                innovation and boost profitability.
                            </p>

                            <h2 className="text-2xl font-bold text-[#173A44] mb-4">
                                Why You Need a DPP
                            </h2>
                            <p className="text-gray-600 mb-4">
                                With mounting pressures from regulators and consumers, a reliable DPP
                                is your strategic advantage. Embrace transparency, protect your
                                brand, and lead in sustainability—become our next success story.
                            </p>
                        </div>
                    </>
                )}
            </article>

            {/* ── CTA Banner ── */}
            <IndustrySheetCTA
                title="Want to Learn More About Our Solutions?"
                description="Discover how our digital product passport can transform your business operations and help you meet sustainability goals."
            />
        </div>
    );
};

export default UseCasePage;