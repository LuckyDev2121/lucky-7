// import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import RechargeMenu from "./RechargeMenu";
import HelpMenu from "./HelpMenu";
import HistoryMenu from "./HistoryMenu";
import Ranking from "./RankingMenu";
import PrizeDistribution from "./PrizeDistribution";
import { GAME_ASSETS, getAssetUrl } from "../config/gameconfig";
import MenuCoin from "./MenuCoin";
import MenuTop from "./MenuTop";
import cup from "../assets/Body/BodyTop/cup.svg"
import shine from "../assets/Body/BodyTop/shine.svg"
import light from "../assets/Body/BodyPlayboard/Light.svg"
import digital from "../assets/Body/BodyPlayboard/Digital7.svg"
import player from "../assets/Body/player.svg"
import dotthree from "../assets/Body/BodyPlayboard/DotsThree.svg"
import PlayBoard from "../components/PlayBoard"
import { LightsAni, WinAni, RiseAni, RainMoney, PendingStar, RollingStar, ResultStar } from "./Assets";

const GAME_WIDTH = 393;
const GAME_HEIGHT = 589;

function formatNumber(num: number): string {
    if (num >= 1_000_000_000) {
        return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
    }
    if (num >= 1_000_000) {
        return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1_000) {
        return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num.toString();
}


export default function Lucky777Game({
    onToggleMusic,
    isMusicPlaying,
}: {
    onToggleMusic: () => void;
    isMusicPlaying: boolean;
}) {

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
                        <img src={getAssetUrl(GAME_ASSETS.bg)} alt="bg" className="absolute inset-0 " />
                        <div className="absolute top-[135px] left-0  h-[454px] w-[393px]">
                            <div className="absolute -top-[17px] left-0 flex w-full items-center justify-between pl-[7px] pr-[20px] z-20">
                                <MenuCoin onOpenModal={() => setActiveModal("recharge")} />
                                <MenuTop onOpenModal={(modal) => { setActiveModal(modal) }}
                                    onToggleMusic={onToggleMusic}
                                    isMusicPlaying={isMusicPlaying} />
                            </div>
                            <button className="absolute z-20 top-[25px] left-[28px] h-[72px] w-[72px] rounded-full flex items-center justify-center"
                                onClick={() => setActiveModal("ranking")}>
                                <>
                                    <motion.img src={shine} alt="shine" className="absolute h-[60px] w-[60px] top-[4px]"
                                        animate={{ rotate: 360 }}
                                        transition={{
                                            rotate: { repeat: Infinity, duration: 5, ease: "linear" },
                                        }} />
                                    <motion.img src={cup} alt="cup" className="absolute  h-[50px] w-[50px] left-[11px] top-[11px]"
                                        animate={{ rotate: [5, -5, 5] }}
                                        transition={{
                                            rotate: { repeat: Infinity, duration: 1, ease: "linear" },
                                        }} />
                                    {/* <RiseAni left={30} top={-35} /> */}
                                    {/* <motion.span className="absolute z-[20] font-bold font-sans text-[#fac594] [text-shadow:1px_0_0_brown,-1px_0_0_brown,0_1px_0_brown,0_-1px_0_brown]"
                                        initial={{ y: -5, }}
                                        animate={{ y: 5, }}
                                        transition={{
                                            duration: 0.4,
                                            repeat: Infinity, // 👈 add this
                                            repeatType: "reverse"
                                        }}
                                    >+{formatNumber(100000000)}</motion.span> */}
                                </>
                            </button>
                            <div className="absolute h-[66px] w-[266px] top-[30px] left-[91px] bg-gradient-to-t from-[#0E0038] to-[#140433] rounded-[4px]">
                                <div className="relative grid grid-cols-4 justify-center h-[60px] w-[260px] pt-[2px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-t from-[#1A0D38] to-[#160A38] border-2 border-[#A75991] rounded-[4px]">
                                    <div className="relative items-center justify-center">
                                        <img src={player} alt="player" className="absolute left-1/2 -translate-x-1/2" />
                                        <span className="absolute inset-x-0 text-center top-[42px]  text-[8px]">Sumiya BD</span>
                                        {/* <RiseAni left={25} top={-50} /> */}
                                        {/* <motion.span className="absolute left-[10px] top-[10px]  z-[20] font-bold font-sans text-[#fac594] [text-shadow:1px_0_0_brown,-1px_0_0_brown,0_1px_0_brown,0_-1px_0_brown]"
                                            initial={{ y: -5, }}
                                            animate={{ y: 5, }}
                                            transition={{
                                                duration: 0.4,
                                                repeat: Infinity, // 👈 add this
                                                repeatType: "reverse"
                                            }}
                                        >+{formatNumber(100000000)}</motion.span> */}
                                    </div>
                                    <div className="relative">
                                        <img src={player} alt="player" className="absolute left-1/2 -translate-x-1/2" />
                                        <span className="absolute inset-x-0 text-center top-[42px] align-middle text-[8px]">Sumiya BD</span>
                                        {/* <RiseAni left={25} top={-50} /> */}
                                        {/* <motion.span className="absolute left-[10px] top-[10px] z-[20] font-bold font-sans text-[#fac594] [text-shadow:1px_0_0_brown,-1px_0_0_brown,0_1px_0_brown,0_-1px_0_brown]"
                                            initial={{ y: -5, }}
                                            animate={{ y: 5, }}
                                            transition={{
                                                duration: 0.4,
                                                repeat: Infinity, // 👈 add this
                                                repeatType: "reverse"
                                            }}
                                        >+{formatNumber(1000000)}</motion.span> */}
                                    </div>
                                    <div className="relative">
                                        <img src={player} alt="player" className="absolute left-1/2 -translate-x-1/2" />
                                        <span className="absolute inset-x-0 text-center top-[42px] algin-middle text-[8px]">Sumiya BD</span>
                                        {/* <RiseAni left={25} top={-50} /> */}
                                        {/* <motion.span className="absolute left-[10px] top-[10px] z-[20] font-bold font-sans text-[#fac594] [text-shadow:1px_0_0_brown,-1px_0_0_brown,0_1px_0_brown,0_-1px_0_brown]"
                                            initial={{ y: -5, }}
                                            animate={{ y: 5, }}
                                            transition={{
                                                duration: 0.4,
                                                repeat: Infinity, // 👈 add this
                                                repeatType: "reverse"
                                            }}
                                        >+{formatNumber(1000000)}</motion.span> */}
                                    </div>
                                    <div className="relative ">
                                        <img src={player} alt="player" className="absolute top-[10px] left-[10px] h-[20px] z-30" />
                                        <img src={player} alt="player" className="absolute top-[10px] left-[20px] h-[20px] z-20" />
                                        <div className="absolute top-[10px] left-[35px] h-[20px] w-[20px] bg-gray-700 rounded-full z-10">
                                            <img src={dotthree} alt="dotthree" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 " />
                                        </div>
                                        <div className="absolute top-[30px] inset-x-0 text-center">
                                            <span className="text-[8px]">Online : </span>
                                            <span className="text-[10px]">248</span>
                                        </div>
                                        {/* <motion.span className="absolute left-[10px] top-[10px] z-[30] font-bold font-sans text-[#fac594] [text-shadow:1px_0_0_brown,-1px_0_0_brown,0_1px_0_brown,0_-1px_0_brown]"
                                            initial={{ y: -5, }}
                                            animate={{ y: 5, }}
                                            transition={{
                                                duration: 0.4,
                                                repeat: Infinity, // 👈 add this
                                                repeatType: "reverse"
                                            }}
                                        >+{formatNumber(1000000)}</motion.span> */}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute h-[226px] w-[316px] top-[97px] left-[37px]  bg-gradient-to-t from-[#1D27BA] to-[#B11ECB] rounded-[9px]">
                                <img src={getAssetUrl(GAME_ASSETS.gameBoard)} alt="gameboard" className="absolute h-[236px] w-[320px] left-[0px] -top-[5px] rounded-[9px]" />
                                <PlayBoard />
                            </div>
                            <div className="absolute left-[39px] top-[325px] h-[40px] w-[315px] grid grid-row-2">
                                <div className="relative h-[18px] w-full">
                                    <span className="absolute left-[10px]">TOTAL BET</span>
                                    <span className="absolute left-[112px]">TODAY'S WIN</span>
                                    <span className="absolute left-[217px]">WIN</span>
                                </div>
                                <div className="relative h-[26] grid grid-cols-3 pl-[4px]">
                                    <div className="flex bg-[#000000] h-[26px] w-[100px] rounded-[4px] pt-[2px] pl-[4px]">
                                        <img src={digital} alt="digital" className="h-[22px]" />
                                        <img src={digital} alt="digital" className="h-[22px]" />
                                        <img src={digital} alt="digital" className="h-[22px]" />
                                        <img src={digital} alt="digital" className="h-[22px]" />
                                        <img src={digital} alt="digital" className="h-[22px]" />
                                        <img src={digital} alt="digital" className="h-[22px]" />
                                    </div>
                                    <div className="bg-[#000000] h-[26px] w-[100px] rounded-[4px] text-center">
                                        <span className="bg-gradient-to-t from-[#EFC32F] to-[#FBF9D2] bg-clip-text text-transparent font-bold text-[17px] align-middle ">109000</span>
                                    </div>
                                    <div className="bg-[#000000] h-[26px] w-[100px] rounded-[4px] text-center ">
                                        <img src={light} alt="light" className="absolute" />
                                        <span className="bg-gradient-to-t from-[#EFC32F] to-[#FBF9D2] bg-clip-text text-transparent font-bold text-[17px] align-middle">1050</span>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-[390px] h-[60px] pl-[18px] pr-[5px] w-full ">
                                <button className="relative mx-[4px]">
                                    <img src={getAssetUrl(GAME_ASSETS.minusBtn)} alt="betmin" />
                                </button>
                                <button className="relative mx-[4px]">
                                    <img src={getAssetUrl(GAME_ASSETS.plusBtn)} alt="betplu" />
                                </button>
                                <button className="relative mx-[4px]">
                                    <img src={getAssetUrl(GAME_ASSETS.autoBtn)} alt="auto" />
                                </button>
                                <button className="relative mx-[4px]">
                                    <img src={getAssetUrl(GAME_ASSETS.spinBtn)} alt="spin" />
                                </button>
                            </div>
                        </div >
                        <AnimatePresence>
                            {activeModal === "help" && (
                                <motion.div
                                    key={activeModal}
                                    initial={{ y: GAME_HEIGHT, opacity: 0 }}
                                    animate={{ y: 315, opacity: 1 }}
                                    exit={{ y: GAME_HEIGHT, opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute z-[30] h-[342px] w-[393px]"
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
                                    className="absolute z-[50] h-[146px] w-[393px]"
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
                                    className="absolute z-[30] left-[25px] h-[428px] w-[343px]"
                                >
                                    <Ranking onCloseRanking={() => setActiveModal(null)}
                                        onOpenPrizeDistribution={() => setPrizeModal("prize")} />
                                </motion.div>
                            )
                            }
                            {prizeModal === "prize" && (
                                <motion.div
                                    key={prizeModal}
                                    initial={{ y: GAME_HEIGHT, opacity: 0 }}
                                    animate={{ y: 80, opacity: 1 }}
                                    exit={{ y: GAME_HEIGHT, opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute z-[50] left-[25px] h-[428px] w-[343px]"
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
                                    className="absolute inset-0 z-[20] rounded-t-[110px] bg-black/60"
                                />
                            )}
                        </AnimatePresence>
                        {/* <LightsAni /> */}
                        {/* <WinAni /> */}

                        {/* <RainMoney /> */}
                    </div>
                </div>
            </div >
        </div >
    );
}
