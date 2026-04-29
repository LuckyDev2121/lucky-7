import { AnimatePresence, motion, } from "framer-motion";
import { useEffect, useState } from "react";
import RechargeMenu from "./RechargeMenu";
import HelpMenu from "./HelpMenu";
import HistoryMenu from "./HistoryMenu";
import Ranking from "./RankingMenu";
import PrizeDistribution from "./PrizeDistribution";
import { GAME_ASSETS, getAssetUrl } from "../config/gameconfig";
import MenuCoin from "./MenuCoin";
import MenuTop from "./MenuTop";
import light from "../assets/Body/BodyPlayboard/Light.svg"
import player from "../assets/Body/player.svg"
import dotthree from "../assets/Body/BodyPlayboard/DotsThree.svg"
import { ResultPending, LightsAni, WinAni, RiseAni, RainMoney, StartAni, StopAni, RepeatAni, PendingStar, RollingStar, ResultStar, TopBottomAni, BottomTopAni, TopAni, MiddleAni, BottomAni } from "./Assets";
import { useGame, resolveAssetUrl } from "../hooks/useGameHook";
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
    const [isFirst, setIsFirst] = useState(true)
    const [isPending, setIsPending] = useState(true)
    const [isRolling, setIsRolling] = useState(false)
    const [isResulting, setIsResulting] = useState(false)
    const [resultPending, setResultPending] = useState(false)
    const [isAutoMode, setIsAutoMode] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const isOverlayOpen = (activeModal !== null || prizeModal !== null);
    const { betAmounts, options, placeBet, playerInfo, handleWinToday, handlePlayerInfo } = useGame()
    const [currentBet, setCurrentBet] = useState(0)
    const [second, setSecond] = useState(0);
    const [startValue, setStartValue] = useState([13, 13, 13, 14, 14, 14, 15, 15, 15,])
    const [endValue, setEndValue] = useState([13, 13, 13, 14, 14, 14, 15, 15, 15,])
    const [statusArray, setStatusArray] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [winAmount, setWinAmount] = useState(0)
    const [showWinAmount, setShowWinAmount] = useState(0)
    const [winToday, setWinToday] = useState(0)
    const [isWinAniShowed, setIsWinAniShowed] = useState(false)
    const [pressedBtn, setPressedBtn] = useState<string | null>(null);
    const [forCoinBoard, setForCoinBoard] = useState(0)
    const [normalWin, setNormalWin] = useState(true)
    const [normalResult, setNormalResult] = useState(true)
    const rows = [0, 1, 2];
    useEffect(() => {
        if (!isPlaying)
            return
        const timer = setInterval(() => {
            if (second === 0) {
                if (Number.parseFloat(playerInfo?.balance ?? "0") < Number.parseFloat(betAmounts[currentBet]?.amount)) {
                    setIsPlaying(false)
                    setSecond(0)
                    return
                }
                void placeBet(Number.parseFloat(betAmounts[currentBet]?.amount))
                    .then((response) => {
                        setEndValue([response.result.set_A[0].option_id, response.result.set_A[1].option_id, response.result.set_A[2].option_id,
                        response.result.set_B[0].option_id, response.result.set_B[1].option_id, response.result.set_B[2].option_id,
                        response.result.set_C[0].option_id, response.result.set_C[1].option_id, response.result.set_C[2].option_id,])
                        setStartValue([response.result.set_A[0].option_id, response.result.set_A[1].option_id, response.result.set_A[2].option_id,
                        response.result.set_B[0].option_id, response.result.set_B[1].option_id, response.result.set_B[2].option_id,
                        response.result.set_C[0].option_id, response.result.set_C[1].option_id, response.result.set_C[2].option_id,])
                        setWinAmount(Number.parseFloat(response.win_amount))
                    })
                setStatusArray([0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setShowWinAmount(0)
                setForCoinBoard(Number(playerInfo?.balance) - Number.parseFloat(betAmounts[currentBet]?.amount))
                handlePlayerInfo()
                setIsWinAniShowed(false)
                setIsFirst(false)
                setResultPending(false)
                setIsResulting(false)
                setIsPending(false);
                setIsRolling(true);
            }
            if (second === 2900) {
                setStatusArray((prev) => {
                    const newStatus = [...prev];
                    if (endValue[0] === endValue[4] && endValue[0] === endValue[8]) {
                        newStatus[0] = 1;
                        newStatus[4] = 1;
                        newStatus[8] = 1;
                    }
                    if (endValue[6] === endValue[4] && endValue[6] === endValue[2]) {
                        newStatus[4] = 1;
                        newStatus[6] = 1;
                        newStatus[2] = 1;
                    }
                    if (endValue[0] === endValue[1] && endValue[0] === endValue[2]) {
                        newStatus[0] = 1;
                        newStatus[1] = 1;
                        newStatus[2] = 1;
                    }
                    if (endValue[3] === endValue[4] && endValue[3] === endValue[5]) {
                        newStatus[3] = 1;
                        newStatus[4] = 1;
                        newStatus[5] = 1;
                    }
                    if (endValue[6] === endValue[7] && endValue[6] === endValue[8]) {
                        newStatus[6] = 1;
                        newStatus[7] = 1;
                        newStatus[8] = 1;
                    }
                    return newStatus;
                });
                setIsRolling(false)
                setIsResulting(true)
                setShowWinAmount(winAmount)
                void handleWinToday()
                    .then((res) => {
                        setWinToday(res.win)
                    })
            }
            if (normalWin) {
                if (second === 3300) {
                    setForCoinBoard(0)
                }
                if (second === 4900) {
                    if (isAutoMode) {
                        setSecond(-100)
                    }
                    else {
                        if (winAmount) {
                            setResultPending(true)
                        } else {
                            setIsResulting(false)
                            setIsPending(true)
                        }
                        setIsPlaying(false)
                        setSecond(0)
                        return
                    }
                }
            }
            else {
                if (second === 6900) {
                    if (isAutoMode) {
                        setSecond(-100)
                        setIsResulting(false)
                    }
                    else {
                        if (winAmount) {
                            setResultPending(true)
                        } else {
                            setIsResulting(false)
                            setIsPending(true)
                        }
                        setIsPlaying(false)
                        setSecond(0)
                        return
                    }
                }
            }

            setSecond((s) => s + 100);
        }, 100);
        return () => {
            clearInterval(timer)
        };
    }, [second, isPlaying])

    const getClass = (name: string) => {
        if (isAutoMode) {
            return `relative mx-[4px] transition ${name !== "auto" ? "brightness-50" : ""
                }`;
        }
        return `relative mx-[4px] transition ${pressedBtn && pressedBtn !== name ? "brightness-50" : ""
            }`;
    };

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
                                <MenuCoin onOpenModal={() => setActiveModal("recharge")}
                                    current={forCoinBoard} />
                                <MenuTop onOpenModal={(modal) => { setActiveModal(modal) }}
                                    onToggleMusic={onToggleMusic}
                                    isMusicPlaying={isMusicPlaying} />
                            </div>
                            <button className="absolute z-20 top-[25px] left-[28px] h-[72px] w-[72px] rounded-full flex items-center justify-center"
                                onClick={() => setActiveModal("ranking")}>
                                <>
                                    <motion.img src={getAssetUrl(GAME_ASSETS.rotated)} alt="shine" className="absolute h-[60px] w-[60px] top-[4px]"
                                        animate={{ rotate: 360 }}
                                        transition={{
                                            rotate: { repeat: Infinity, duration: 5, ease: "linear" },
                                        }} />
                                    {isResulting && winAmount ? <motion.img src={getAssetUrl(GAME_ASSETS.cup)} alt="cup" className="absolute  h-[50px] w-[50px] left-[11px] top-[11px]"
                                        animate={{ rotate: [5, -5, 5] }}
                                        transition={{
                                            rotate: { repeat: Infinity, duration: 1, ease: "linear" },
                                        }} /> :
                                        <motion.img src={getAssetUrl(GAME_ASSETS.cup)} alt="cup" className="absolute  h-[50px] w-[50px] left-[11px] top-[11px]"
                                            animate={{}}
                                            transition={{
                                                rotate: { repeat: Infinity, duration: 1, ease: "linear" },
                                            }} />}
                                    <span className="absolute top-[55px] left-1/2 -translate-x-1/2 z-[20] font-bold font-sans text-[#ffffff] [text-shadow:1px_0_0_brown,-1px_0_0_brown,0_1px_0_brown,0_-1px_0_brown]">+99</span>
                                    {isResulting && winAmount > 0 && <RiseAni left={30} top={-35} />}
                                    {isResulting && winAmount > 0 && <motion.span className="absolute z-[20] font-bold font-sans text-[#fac594] [text-shadow:1px_0_0_brown,-1px_0_0_brown,0_1px_0_brown,0_-1px_0_brown]"
                                        initial={{ y: -5, }}
                                        animate={{ y: 5, }}
                                        transition={{
                                            duration: 0.4,
                                            repeat: Infinity, // 👈 add this
                                            repeatType: "reverse"
                                        }}
                                    >+{formatNumber(winAmount)}</motion.span>}
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
                                <div className="relative  h-[226px] w-[310px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  inset-[2px] rounded-[7px] ">
                                    {isPending && (
                                        <>
                                            {isFirst ? (
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
                                                    {endValue.map((element, index) => (
                                                        <>
                                                            {index % 3 === 0 && (
                                                                <img src={resolveAssetUrl(options[element - 13]?.logo ?? "0")} alt="a" className="absolute   h-[65px] w-[65px]"
                                                                    style={{ left: `${26}px`, top: `${10 + Math.floor(index / 3) * 70}px` }} />)}
                                                            {index % 3 === 1 && (<img src={resolveAssetUrl(options[element - 13]?.logo)} alt="b" className="absolute   h-[65px] w-[65px]"
                                                                style={{ left: `${123}px`, top: `${10 + Math.floor(index / 3) * 70}px` }} />)}
                                                            {index % 3 === 2 && (<img src={resolveAssetUrl(options[element - 13]?.logo)} alt="c" className="absolute   h-[65px] w-[65px]"
                                                                style={{ left: `${218}px`, top: `${10 + Math.floor(index / 3) * 70}px` }} />)}
                                                        </>
                                                    ))}
                                                </>
                                            )}
                                        </>
                                    )}
                                    {isRolling && (<>
                                        <StartAni left={26} delay={0} num0={startValue[0]} num1={startValue[3]} num2={startValue[6]} />
                                        <StartAni left={123} delay={0.3} num0={startValue[1]} num1={startValue[4]} num2={startValue[7]} />
                                        <StartAni left={218} delay={0.6} num0={startValue[2]} num1={startValue[5]} num2={startValue[8]} />
                                        <RepeatAni left={26} delay={0} num={4} />
                                        <RepeatAni left={123} delay={0.3} num={1} />
                                        <RepeatAni left={218} delay={0.6} num={3} />
                                        <RepeatAni left={26} delay={0.6} num={4} />
                                        <RepeatAni left={123} delay={0.9} num={5} />
                                        <RepeatAni left={218} delay={1.2} num={4} />
                                        <RepeatAni left={26} delay={1.2} num={2} />
                                        <RepeatAni left={123} delay={1.5} num={4} />
                                        <RepeatAni left={218} delay={1.8} num={5} />
                                        <RepeatAni left={26} delay={1.8} num={6} />
                                        <RepeatAni left={123} delay={2.1} num={7} />
                                        <RepeatAni left={218} delay={2.4} num={3} />
                                        <StopAni left={26} delay={2.4} num0={endValue[6]} num1={endValue[3]} num2={endValue[0]} />
                                        <StopAni left={123} delay={2.7} num0={endValue[7]} num1={endValue[4]} num2={endValue[1]} />
                                        <StopAni left={218} delay={3.0} num0={endValue[8]} num1={endValue[5]} num2={endValue[2]} />
                                    </>)}
                                    {isResulting && (<>
                                        {endValue.map((element, index) => (
                                            <>
                                                {index % 3 === 0 && (
                                                    <>
                                                        {statusArray[index] ?
                                                            <motion.img src={resolveAssetUrl(options[element - 13]?.logo ?? "0")} alt="a" className="absolute   h-[65px] w-[65px]"
                                                                style={{ left: `${26}px`, top: `${10 + Math.floor(index / 3) * 70}px`, }}
                                                                animate={{
                                                                    opacity: [1, 0, 1, 0,],
                                                                    filter: "brightness(5)"
                                                                }}
                                                                transition={{
                                                                    duration: 2,
                                                                    ease: "easeInOut",
                                                                    repeat: Infinity
                                                                }} />
                                                            :
                                                            <img src={resolveAssetUrl(options[element - 13]?.logo ?? "0")} alt="a" className="absolute transition opacity-50  h-[65px] w-[65px]"
                                                                style={{ left: `${26}px`, top: `${10 + Math.floor(index / 3) * 70}px`, }} />
                                                        }
                                                    </>)}
                                                {index % 3 === 1 && (
                                                    <>
                                                        {statusArray[index] ?
                                                            <motion.img src={resolveAssetUrl(options[element - 13]?.logo)} alt="b" className="absolute h-[65px] w-[65px] "
                                                                style={{ left: `${123}px`, top: `${10 + Math.floor(index / 3) * 70}px` }}
                                                                animate={{
                                                                    opacity: [1, 0, 1, 0,],
                                                                    filter: "brightness(5)"
                                                                }}
                                                                transition={{
                                                                    duration: 2,
                                                                    ease: "easeInOut",
                                                                    repeat: Infinity
                                                                }} />

                                                            : <img src={resolveAssetUrl(options[element - 13]?.logo)} alt="b" className="absolute transition opacity-50 h-[65px] w-[65px]"
                                                                style={{ left: `${123}px`, top: `${10 + Math.floor(index / 3) * 70}px`, }} />
                                                        }
                                                    </>)}
                                                {index % 3 === 2 && (
                                                    <>
                                                        {statusArray[index] ?
                                                            <motion.img src={resolveAssetUrl(options[element - 13]?.logo)} alt="c" className="absolute h-[65px] w-[65px]"
                                                                style={{ left: `${218}px`, top: `${10 + Math.floor(index / 3) * 70}px` }}
                                                                animate={{
                                                                    opacity: [1, 0, 1, 0,],
                                                                    filter: "brightness(5)"
                                                                }}
                                                                transition={{
                                                                    duration: 2,
                                                                    ease: "easeInOut",
                                                                    repeat: Infinity
                                                                }} />
                                                            :
                                                            <img src={resolveAssetUrl(options[element - 13]?.logo)} alt="c" className="absolute transition opacity-50 h-[65px] w-[65px]"
                                                                style={{ left: `${218}px`, top: `${10 + Math.floor(index / 3) * 70}px`, }} />
                                                        }
                                                    </>)}
                                            </>
                                        ))}</>)}
                                    <div className="absolute inset-0 z-30 pointer-events-none">
                                        {isPending && (
                                            <PendingStar />
                                        )}
                                        {isRolling && (
                                            <RollingStar />
                                        )}
                                        {isResulting && (
                                            <>
                                                {winAmount ? <ResultStar /> : <PendingStar />}
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute h-[226px] w-[310px] left-1/2 top-[97px] -translate-x-1/2  inset-[2px] rounded-[7px]" >
                                {isResulting && !resultPending && winAmount > 0 && endValue[0] === endValue[4] && endValue[0] === endValue[8] && (
                                    <TopBottomAni />)}
                                {isResulting && !resultPending && winAmount > 0 && endValue[6] === endValue[4] && endValue[6] === endValue[2] && (
                                    <BottomTopAni />)}
                                {isResulting && !resultPending && winAmount > 0 && endValue[0] === endValue[1] && endValue[0] === endValue[2] && (
                                    <TopAni />)}
                                {isResulting && !resultPending && winAmount > 0 && endValue[3] === endValue[4] && endValue[3] === endValue[5] && (
                                    <MiddleAni />)}
                                {isResulting && !resultPending && winAmount > 0 && endValue[6] === endValue[7] && endValue[6] === endValue[8] && (
                                    <BottomAni />)}
                                {resultPending &&
                                    <ResultPending status={statusArray} />
                                }
                            </div>
                            <div className="absolute left-[39px] top-[322px] h-[40px] w-[315px] grid grid-row-2">
                                <div className="relative h-[18px] w-full">
                                    <span className="absolute left-[10px]">TOTAL BET</span>
                                    <span className="absolute left-[112px]">TODAY'S WIN</span>
                                    <span className="absolute left-[217px]">WIN</span>
                                </div>
                                <div className="relative h-[26] grid grid-cols-3 pl-[4px]">
                                    <div className="flex bg-[#000000] h-[24px] w-[100px] rounded-[4px] pt-[2px] pl-[4px]">
                                        <span className="absolute right-[220px]"
                                            style={{ fontFamily: "MyBoldFont", letterSpacing: "2px" }}>{parseFloat(betAmounts[currentBet]?.amount).toString()}</span>
                                    </div>
                                    <div className="bg-[#000000] h-[24px] w-[100px] rounded-[4px] text-center">
                                        <span className="bg-gradient-to-t from-[#EFC32F] to-[#FBF9D2] bg-clip-text text-transparent font-bold text-[17px] align-middle ">{winToday}</span>
                                    </div>
                                    <div className="bg-[#000000] h-[24px] w-[100px] rounded-[4px] text-center ">
                                        {isResulting && winAmount > 0 && (<motion.img src={light} alt="light" className="absolute"
                                            animate={{
                                                opacity: [1, 0, 1, 0, 1, 0,],
                                                filter: "brightness(5)"
                                            }}
                                            transition={{
                                                duration: 2,
                                                ease: "easeInOut",
                                                repeat: Infinity
                                            }} />)}
                                        <span className="bg-gradient-to-t from-[#EFC32F] to-[#FBF9D2] bg-clip-text text-transparent font-bold text-[17px] align-middle">{showWinAmount}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-[390px] h-[60px] pl-[18px] pr-[5px] w-full ">
                                <button
                                    className={getClass("minus")}
                                    onPointerDown={() => setPressedBtn("minus")}
                                    onPointerUp={() => setPressedBtn(null)}
                                    onPointerLeave={() => setPressedBtn(null)}
                                    onClick={() => {
                                        if (currentBet) setCurrentBet(currentBet - 1);
                                    }}
                                >
                                    <img src={getAssetUrl(GAME_ASSETS.minusBtn)} alt="betmin" />
                                </button>
                                <button
                                    className={getClass("plus")}
                                    onPointerDown={() => setPressedBtn("plus")}
                                    onPointerUp={() => setPressedBtn(null)}
                                    onPointerLeave={() => setPressedBtn(null)}
                                    onClick={() => {
                                        if (currentBet + 1 !== betAmounts.length)
                                            setCurrentBet(currentBet + 1);
                                    }}
                                >
                                    <img src={getAssetUrl(GAME_ASSETS.plusBtn)} alt="betplu" />
                                </button>
                                <button
                                    className={getClass("auto")}
                                    onPointerDown={() => setPressedBtn("auto")}
                                    onPointerUp={() => setPressedBtn(null)}
                                    onPointerLeave={() => setPressedBtn(null)}
                                    onClick={() => {
                                        if (isAutoMode) {
                                            setIsAutoMode(false);
                                            setPressedBtn(null)
                                        } else {
                                            setPressedBtn("auto")
                                            setIsAutoMode(true);
                                            setIsPlaying(true);
                                        }
                                    }}
                                >
                                    <img src={getAssetUrl(GAME_ASSETS.autoBtn)} alt="auto" />
                                </button>
                                <button
                                    className={getClass("spin")}
                                    onPointerDown={() => setPressedBtn("spin")}
                                    onPointerUp={() => setPressedBtn(null)}
                                    onPointerLeave={() => setPressedBtn(null)}
                                    onClick={() => {
                                        setIsPlaying(true);
                                    }}
                                >
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
                            )}
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
                        {isRolling && (<LightsAni />)}
                        {isResulting && winAmount > 0 && !isWinAniShowed && (
                            <WinAni />
                        )}

                        {/* <RainMoney /> */}
                    </div>
                </div>
            </div >
        </div >
    );
}
