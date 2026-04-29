// import { useState, useEffect } from "react"
import { motion } from "framer-motion";
import { PendingStar, RollingStar, ResultStar, StartAni, StopAni, RepeatAni } from "./Assets";
import { resolveAssetUrl, useGame } from "../hooks/useGameHook";


export default function PlayBoard({
    isFirstStart, Pending, Rolling, Result,
}: {
    isFirstStart: boolean; Pending: boolean; Rolling: boolean; Result: boolean
}) {

    const { options } = useGame();
    const rows = [0, 1, 2];
    return (
        <div className="relative  h-[226px] w-[310px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  inset-[2px] rounded-[7px] ">

            {Pending && (
                <>
                    {isFirstStart ? (
                        <>
                            {rows.map((element) => (
                                <>
                                    <img src={resolveAssetUrl(options[element]?.logo ?? "0")} alt="a" className="absolute   h-[65px] w-[65px]"
                                        style={{ left: `${26}px`, top: `${10 + element * 70}px` }} />
                                    <img src={resolveAssetUrl(options[element]?.logo)} alt="b" className="absolute   h-[65px] w-[65px]"
                                        style={{ left: `${123}px`, top: `${10 + element * 70}px` }} />
                                    <img src={resolveAssetUrl(options[element]?.logo)} alt="c" className="absolute   h-[65px] w-[65px]"
                                        style={{ left: `${218}px`, top: `${10 + element * 70}px` }} />
                                </>
                            ))}
                        </>
                    ) : (
                        <>
                            {rows.map((element) => (
                                <>
                                    <img src={resolveAssetUrl(options[element + 3]?.logo ?? "0")} alt="a" className="absolute   h-[65px] w-[65px]"
                                        style={{ left: `${26}px`, top: `${10 + element * 70}px` }} />
                                    <img src={resolveAssetUrl(options[element + 3]?.logo)} alt="b" className="absolute   h-[65px] w-[65px]"
                                        style={{ left: `${123}px`, top: `${10 + element * 70}px` }} />
                                    <img src={resolveAssetUrl(options[element + 3]?.logo)} alt="c" className="absolute   h-[65px] w-[65px]"
                                        style={{ left: `${218}px`, top: `${10 + element * 70}px` }} />
                                </>
                            ))}
                        </>
                    )}
                </>
            )}
            {Rolling && (<>
                <StartAni left={26} delay={0} />
                <StartAni left={123} delay={0.1} />
                <StartAni left={218} delay={0.2} />
                <RepeatAni left={26} delay={0} />
                <RepeatAni left={123} delay={0.1} />
                <RepeatAni left={218} delay={0.2} />
                <StopAni left={26} delay={2.4} />
                <StopAni left={123} delay={2.5} />
                <StopAni left={218} delay={2.6} />
            </>)}
            {Result && (<></>)}
            <div className="absolute inset-0 z-30 pointer-events-none">
                {Pending && (
                    <PendingStar />
                )}
                {Rolling && (
                    <RollingStar />
                )}
                {Result && (
                    <ResultStar />
                )}
            </div>
        </div>
    );
}

<>
    <div className="absolute inset-0 z-30 pointer-events-none">
        <svg className="" width="600" height="400">
            {/* background path */}
            <path
                d="M30 35 L60 35 L255 185 L280 185"
                stroke="none"
                strokeWidth="10"
                fill="transparent"
            />

            {/* animated progress */}
            <motion.path
                d="M30 35 L60 35 L255 185 L280 185"
                stroke="rgba(255, 220, 0, 0.8)"
                strokeWidth="10"
                fill="transparent"
                strokeDasharray="500"
                initial={{ strokeDashoffset: 500 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 3, ease: "linear" }}
            />
            <motion.path
                d="M30 35 L60 35 L255 185 L280 185"
                stroke="rgba(255,255,255,1)"
                strokeWidth="3"
                fill="transparent"
                strokeDasharray="500"
                initial={{ strokeDashoffset: 500 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 3, ease: "linear" }}
                style={{ filter: "blur(2px)", }}
            />
        </svg>
    </div>
    <div className="absolute inset-0 z-30 pointer-events-none">
        <svg className="" width="600" height="400">
            {/* background path */}
            <path
                d="M30 185 L60 185 L250 35 L280 35"
                stroke="none"
                strokeWidth="10"
                fill="transparent"
            />

            {/* animated progress */}
            <motion.path
                d="M30 185 L60 185 L250 35 L280 35"
                stroke="rgba(180, 80, 255, 0.8)"
                strokeWidth="10"
                fill="transparent"
                strokeDasharray="500"
                initial={{ strokeDashoffset: 500 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 3, ease: "linear" }}
            />
            <motion.path
                d="M30 185 L60 185 L250 35 L280 35"
                stroke="rgba(255,255,255,1)"
                strokeWidth="4"
                fill="transparent"
                strokeDasharray="500"
                initial={{ strokeDashoffset: 500 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 3, ease: "linear" }}
                style={{ filter: "blur(2px)", }}
            />
        </svg>
    </div>
    <div className="absolute inset-0 z-30 pointer-events-none">
        <svg className="" width="600" height="400">
            {/* background path */}
            <path
                d="M30 40 L280 40"
                stroke="none"
                strokeWidth="10"
                fill="transparent"
            />

            {/* animated progress */}
            <motion.path
                d="M30 40 L280 40"
                stroke="rgba(0, 150, 255, 0.8)"
                strokeWidth="10"
                fill="transparent"
                strokeDasharray="500"
                initial={{ strokeDashoffset: 500 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 3, ease: "linear" }}
            />
            <motion.path
                d="M30 40 L280 40"
                stroke="rgba(255,255,255,1)"
                strokeWidth="4"
                fill="transparent"
                strokeDasharray="500"
                initial={{ strokeDashoffset: 500 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 3, ease: "linear" }}
                style={{ filter: "blur(2px)", }}
            />
        </svg>
    </div>
    <div className="absolute inset-0 z-30 pointer-events-none">
        <svg className="" width="600" height="400">
            {/* background path */}
            <path
                d="M30 140 L280 140"
                stroke="none"
                strokeWidth="10"
                fill="transparent"
            />

            {/* animated progress */}
            <motion.path
                d="M30 110 L280 110"
                stroke="rgba(255, 60, 60, 0.8)"
                strokeWidth="10"
                fill="transparent"
                strokeDasharray="500"
                initial={{ strokeDashoffset: 500 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 3, ease: "linear" }}
            />
            <motion.path
                d="M30 110 L280 110"
                stroke="rgba(255,255,255,1)"
                strokeWidth="4"
                fill="transparent"
                strokeDasharray="500"
                initial={{ strokeDashoffset: 500 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 3, ease: "linear" }}
                style={{ filter: "blur(2px)", }}
            />
        </svg>
    </div>
    <div className="absolute inset-0 z-30 pointer-events-none">
        <svg className="" width="600" height="400">
            {/* background path */}
            <path
                d="M30 180 L280 180"
                stroke="none"
                strokeWidth="10"
                fill="transparent"
            />

            {/* animated progress */}
            <motion.path
                d="M30 180 L280 180"
                stroke="rgba(0,255,0,0.8)"
                strokeWidth="10"
                fill="transparent"
                strokeDasharray="500"
                initial={{ strokeDashoffset: 500 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 3, ease: "linear" }}
            />
            <motion.path
                d="M30 180 L280 180"
                stroke="rgba(255,255,255,1)"
                strokeWidth="4"
                fill="transparent"
                strokeDasharray="500"
                initial={{ strokeDashoffset: 500 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 3, ease: "linear" }}
                style={{ filter: "blur(2px)", }}
            />
        </svg>
    </div>
</>