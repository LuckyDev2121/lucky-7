// import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import TopBoard from "./TopBoard";
import BodyBoard from "./BodyBoard";
import RechargeMenu from "./RechargeMenu";
import HelpMenu from "./HelpMenu";

const GAME_WIDTH = 393;
const GAME_HEIGHT = 589;

export default function Lucky777Game() {

    const [activeModal, setActiveModal] = useState<string | null>(null);
    // const [scale, setScale] = useState(1);

    return (
        <div className="relative flex min-h-[100dvh] w-full items-end justify-center overflow-hidden">
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
                            // transform: `scale(${scale})`,
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


                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
