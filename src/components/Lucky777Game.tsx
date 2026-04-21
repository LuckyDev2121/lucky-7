// import { useState } from "react";
import coin1 from "../assets/coin1.svg"
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import TopBoard from "./TopBoard";
import BodyBoard from "./BodyBoard";
import RechargeMenu from "./RechargeMenu";
import HelpMenu from "./HelpMenu";
import HistoryMenu from "./HistoryMenu";
import Ranking from "./RankingMenu";
import PrizeDistribution from "./PrizeDistribution";

const GAME_WIDTH = 393;
const GAME_HEIGHT = 589;
const duration = [0.9, 0.9, 0.9, 0.9, 0.9,
    0.9, 0.9, 0.9, 0.9, 0.9,
];
const rotateX = [360, 326, 360, 326, 297,
    110, 38, 10, 320, 194,
];
const rotateY = [310, 310, 0, 1, 110,
    17, 24, 10, 31, 90,
];
const rotateZ = [211, 100, 3, 0, 0,
    0, 1, 4, 35, 20,
];
const positionYStart = [0, 1, 6, 2, 4,
    5, 2, 3, 5, 8,
];
const positionYMiddle = [12, 53, 32, 6, 79,
    7, 49, 16, 54, 33,
];
const positionYEnd = [-300, -300, -300, -300, -300,
-300, -300, -300, -300, -300,
];
const positionXStart = [0, 4, 5, 3, 5,
    2, 3, 5, 6, 6,
];
const positionXMiddle = [22, 60, 35, 46, 11,
    31, 52, 39, 50, 38,
];
const positionXEnd = [-300, -300, -300, -300, -300,
-300, -300, -300, -300, -300,
];


export default function Lucky777Game() {

    const [activeModal, setActiveModal] = useState<string | null>(null);
    const [prizeModal, setPrizeModal] = useState<string | null>(null);
    const isOverlayOpen = (activeModal !== null || prizeModal !== null);
    return (
        <div className="relative flex min-h-[100dvh] w-full border-[#130E2C] border-[4px,4px,0px,4px] items-end justify-center overflow-hidden">
            <div className="fixed inset-0 flex items-end justify-center overflow-hidden ">
                <div
                    className="relative"
                    style={{
                        width: `${GAME_WIDTH}px`,
                        height: `${GAME_HEIGHT}px`,
                    }}
                >
                    <div
                        className="relative left-0 top-0 origin-top-left "
                        style={{
                            width: `${GAME_WIDTH}px`,
                            height: `${GAME_HEIGHT}px`,
                        }}
                    >
                        <TopBoard />
                        <BodyBoard onOpenModal={(modal) => setActiveModal(modal)} />
                        <AnimatePresence>
                            {activeModal === "help" && (
                                <motion.div
                                    key={activeModal}
                                    initial={{ y: GAME_HEIGHT, opacity: 0 }}
                                    animate={{ y: 315, opacity: 1 }}
                                    exit={{ y: GAME_HEIGHT, opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute z-50 h-[342px] w-[393px]"
                                >
                                    <HelpMenu onCloseHelpModal={() => setActiveModal(null)} />
                                </motion.div>
                            )}
                            {activeModal === "recharge" && (
                                <motion.div
                                    key={activeModal}
                                    initial={{ y: GAME_HEIGHT, opacity: 0 }}
                                    animate={{ y: 443, opacity: 1 }}
                                    exit={{ y: GAME_HEIGHT, opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute z-50 h-[146px] w-[393px]"
                                >
                                    <RechargeMenu onCloseRechargeModal={() => setActiveModal(null)} />
                                </motion.div>
                            )}
                            {activeModal === "history" && (
                                <motion.div
                                    key={activeModal}
                                    initial={{ y: GAME_HEIGHT, opacity: 0 }}
                                    animate={{ y: 161, opacity: 1 }}
                                    exit={{ y: GAME_HEIGHT, opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute z-50 left-[25px] h-[428px] w-[343px]"
                                >
                                    <HistoryMenu onCloseHistory={() => setActiveModal(null)} />
                                </motion.div>
                            )}
                            {activeModal === "ranking" && (
                                <motion.div
                                    key={activeModal}
                                    initial={{ y: GAME_HEIGHT, opacity: 0 }}
                                    animate={{ y: 61, opacity: 1 }}
                                    exit={{ y: GAME_HEIGHT, opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute z-30 left-[25px] h-[428px] w-[343px]"
                                >
                                    <Ranking onCloseRanking={() => setActiveModal(null)}
                                        onOpenPrizeDistribution={() => setPrizeModal("prize")} />
                                </motion.div>
                            )
                            }
                            {prizeModal === "prize" && (
                                <motion.div
                                    key={activeModal}
                                    initial={{ y: GAME_HEIGHT, opacity: 0 }}
                                    animate={{ y: 80, opacity: 1 }}
                                    exit={{ y: GAME_HEIGHT, opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute z-50 left-[25px] h-[428px] w-[343px]"
                                >
                                    <PrizeDistribution onClosePrize={() => setPrizeModal(null)} />
                                </motion.div>
                            )}
                            {isOverlayOpen && (
                                <motion.div
                                    key="modal-backdrop"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.25 }}
                                    className="absolute inset-0 z-20 rounded-t-[110px] bg-black/60"
                                />
                            )}
                            {/* {
                                duration.map((index, i) => (<motion.img
                                    key={i}
                                    src={coin1}
                                    className="absolute w-10 h-10 left-1/2 -translate-x-1/2"
                                    animate={{
                                        x: [positionXStart[i], positionXMiddle[i], positionXEnd[i]],
                                        y: [positionYStart[i], positionYMiddle[i], positionYEnd[i]],   // rise then drop
                                        rotateX: [0, rotateX[i]],
                                        rotateY: [0, rotateY[i]],
                                        rotateZ: [0, rotateZ[i]],    // spin
                                    }}
                                    transition={{
                                        duration: index,
                                        ease: "easeInOut",
                                        repeat: Infinity,
                                    }}
                                />))
                            } */}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
