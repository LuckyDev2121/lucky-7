import vectorL from "../assets/Body/BodyPlayboard/Vector1.svg"
import vectorM from "../assets/Body/BodyPlayboard/Vector2.svg"
import vectorR from "../assets/Body/BodyPlayboard/Vector3.svg"
import vectLL from "../assets/Body/BodyPlayboard/vect1.svg"
import vectML from "../assets/Body/BodyPlayboard/vect2.svg"
import vectMR from "../assets/Body/BodyPlayboard/vect3.svg"
import vectRR from "../assets/Body/BodyPlayboard/vect4.svg"
import lineL from "../assets/Body/BodyPlayboard/Line 2.svg"
import lineR from "../assets/Body/BodyPlayboard/Line 3.svg"
import lineM from "../assets/Body/BodyPlayboard/Line 4.svg"
import { PendingAni, ResultAni } from "./Assets"
import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion";

export function PendingStar() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % 6);
        }, 800);
        return () => clearInterval(interval);
    }, []);

    const topPosition = [24, 58, 92, 126, 160, 194];
    const leftPosition1 = [7, 6, 5, 5, 6, 7];
    const leftPosition2 = [294, 295, 296, 296, 295, 294];

    return (
        <>
            {topPosition.map((top, i) => (
                <div
                    key={i}
                    className="absolute"
                    style={{ left: `${leftPosition1[i]}px`, top: `${top}px` }}
                >
                    <PendingAni active={i === activeIndex} />
                </div>
            ))}
            {topPosition.map((top, i) => (
                <div
                    key={i}
                    className="absolute"
                    style={{ left: "102px", top: `${top}px` }}
                >
                    <PendingAni active={i === activeIndex} />
                </div>
            ))}
            {topPosition.map((top, i) => (
                <div
                    key={i}
                    className="absolute"
                    style={{ left: "201px", top: `${top}px` }}
                >
                    <PendingAni active={i === activeIndex} />
                </div>
            ))}
            {topPosition.map((top, i) => (
                <div
                    key={i}
                    className="absolute"
                    style={{ left: `${leftPosition2[i]}px`, top: `${top}px` }}
                >
                    <PendingAni active={i === activeIndex} />
                </div>
            ))}

        </>
    );
}

export function RollingStar() {
    const [activeIndex, setActiveIndex] = useState(-1);

    useEffect(() => {
        const timers = Array.from({ length: 9 }, (_, index) =>
            setTimeout(() => {
                setActiveIndex(index);
            }, index * 200)
        );

        return () => {
            timers.forEach((timer) => clearTimeout(timer));
        };
    }, []);

    const topPosition = [24, 58, 92, 126, 160, 194];
    const leftPosition1 = [7, 6, 5, 5, 6, 7];
    const leftPosition2 = [294, 295, 296, 296, 295, 294];

    return (
        <>
            {topPosition.map((top, i) => (
                <div
                    key={i}
                    className="absolute"
                    style={{ left: `${leftPosition1[i]}px`, top: `${top}px` }}
                >
                    <PendingAni active={activeIndex - 2 <= i && i <= activeIndex} />
                </div>
            ))}
            {topPosition.map((top, i) => (
                <div
                    key={i}
                    className="absolute"
                    style={{ left: "102px", top: `${top}px` }}
                >
                    <PendingAni active={activeIndex - 2 <= i && i <= activeIndex} />
                </div>
            ))}
            {topPosition.map((top, i) => (
                <div
                    key={i}
                    className="absolute"
                    style={{ left: "201px", top: `${top}px` }}
                >
                    <PendingAni active={activeIndex - 2 <= i && i <= activeIndex} />
                </div>
            ))}
            {topPosition.map((top, i) => (
                <div
                    key={i}
                    className="absolute"
                    style={{ left: `${leftPosition2[i]}px`, top: `${top}px` }}
                >
                    <PendingAni active={activeIndex - 2 <= i && i <= activeIndex} />
                </div>
            ))}
        </>
    );
}
export function ResultStar() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % 2);
        }, 800);
        return () => clearInterval(interval);
    }, []);

    const topPosition = [24, 58, 92, 126, 160, 194];
    const leftPosition1 = [7, 6, 5, 5, 6, 7];
    const leftPosition2 = [294, 295, 296, 296, 295, 294];

    return (
        <>
            {topPosition.map((top, i) => (
                <div
                    key={i}
                    className="absolute"
                    style={{ left: `${leftPosition1[i]}px`, top: `${top}px` }}
                >
                    <ResultAni active={i % 2 === activeIndex} color={activeIndex + 1} />
                </div>
            ))}
            {topPosition.map((top, i) => (
                <div
                    key={i}
                    className="absolute"
                    style={{ left: "102px", top: `${top}px` }}
                >
                    <ResultAni active={i % 2 === activeIndex} color={activeIndex + 1} />
                </div>
            ))}
            {topPosition.map((top, i) => (
                <div
                    key={i}
                    className="absolute"
                    style={{ left: "201px", top: `${top}px` }}
                >
                    <ResultAni active={i % 2 === activeIndex} color={activeIndex + 1} />
                </div>
            ))}
            {topPosition.map((top, i) => (
                <div
                    key={i}
                    className="absolute"
                    style={{ left: `${leftPosition2[i]}px`, top: `${top}px` }}
                >
                    <ResultAni active={i % 2 === activeIndex} color={activeIndex + 1} />
                </div>
            ))}
        </>
    );
}



export default function PlayBoard() {
    return (
        <div className="absolute h-[230px] w-[316px] top-[96px] left-[39px]  bg-gradient-to-t from-[#1D27BA] to-[#B11ECB] p-[2px] rounded-[9px]">
            <div className="relative h-[226px] w-[310px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#000000] inset-[2px] rounded-[7px] ">
                <img src={vectLL} alt="vectLL" className="absolute left-[2px] top-[3px] z-10" />
                <img src={vectorL} alt="vectorL" className="absolute left-[17px] top-[3px] z-10" />
                <img src={vectML} alt="vectML" className="absolute left-[99px] top-[3px] z-10" />
                <img src={vectorM} alt="vectorM" className="absolute left-[114px] top-[3px] z-10" />
                <img src={vectMR} alt="vectMR" className="absolute left-[198px] top-[3px] z-10" />
                <img src={vectorR} alt="vectorR" className="absolute left-[213px] top-[3px] z-10" />
                <img src={vectRR} alt="vectRR" className="absolute left-[290px] top-[3px] z-10" />
                {/* <PendingStar /> */}
                {/* <RollingStar /> */}
                {/* < ResultStar /> */}
                <img src={lineL} alt="lineL" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20" />
                <img src={lineR} alt="lineR" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20" />
                <img src={lineM} alt="lineM" className="absolute top-[41px] z-20" />
                <img src={lineM} alt="lineM" className="absolute top-[185px] z-20" />
                <img src={lineM} alt="lineM" className="absolute top-[113px] z-20" />
                <AnimatePresence>
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
                </AnimatePresence>
            </div>

        </div >
    );
}



