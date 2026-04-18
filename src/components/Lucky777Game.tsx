// import { useState } from "react";

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

export default function Lucky777Game() {

    const [activeModal, setActiveModal] = useState<string | null>(null);
    const [prizeModal, setPrizeModal] = useState<string | null>(null);
    const isOverlayOpen = (activeModal !== null || prizeModal !== null);
    const lights = [59, 139, 154, 236, 255, 331];
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

                            {lights.map((left,) => (
                                <AnimatePresence>
                                    <motion.div
                                        className="absolute w-[5px] h-[60px] rounded-full"
                                        initial={{ y: 140, opacity: 0 }}
                                        animate={{ y: 460, opacity: 1 }}
                                        transition={{
                                            duration: 1.6,
                                            ease: "linear",
                                            repeat: Infinity,
                                        }}
                                        style={{
                                            background: "linear-gradient(to bottom, transparent, white, transparent)",
                                            filter: "blur(1px)",
                                            left: `${left}px`
                                        }}
                                    />
                                    <motion.div
                                        className="absolute w-[5px] h-[10px] my-[25px] rounded-full"
                                        initial={{ y: 140, opacity: 0 }}
                                        animate={{ y: 460, opacity: 1 }}
                                        transition={{
                                            duration: 1.6,
                                            ease: "linear",
                                            repeat: Infinity,
                                        }}
                                        style={{
                                            background: "white",
                                            filter: "blur(2px)",
                                            left: `${left}px`
                                        }}
                                    />
                                </AnimatePresence>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
