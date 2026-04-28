import { ButtonMenu, CloseIcon, QuestionMarkIcon, } from "./ButtonMenu";
import { getAssetUrl, GAME_ASSETS } from "../config/gameconfig";
import { useEffect, useState } from "react";
import { resolveAssetUrl, useGame } from "../hooks/useGameHook";
export function HistoryIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 15 15" fill="none" aria-hidden="true">
            <circle cx="7.5" cy="7.5" r="4.8" stroke="#12F49E" strokeWidth="1.2" />
            <path d="M7.5 5.1V7.7" stroke="#12F49E" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M7.5 7.7L9.3 8.9" stroke="#12F49E" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
    );
}

type RankingProps = {
    onCloseRanking: () => void;
    onOpenPrizeDistribution: () => void;
};

export default function Ranking({ onCloseRanking, onOpenPrizeDistribution }: RankingProps) {
    const [isTodayRanking, setIsTodayRanking] = useState(true)
    const { handleRankingToday, handleRankingYesterday, rankingToday, rankingYesterday } = useGame()
    useEffect(() => {
        handleRankingToday()
        handleRankingYesterday()
    }, [])
    return (
        <div className="h-[530px] bg-gradient-to-t from-[#120D25] to-[#43308B] w-[343px] rounded-t-[20px]">
            <div className="absolute top-[12px] right-[12px] z-20">
                <ButtonMenu
                    borderColor="none"
                    borderWidth="0px"
                    icon={<CloseIcon />}
                    background={"#2D1F76"}
                    onClick={() => onCloseRanking()}
                />
            </div>
            <div className="absolute top-[12px] right-[42px] z-20">
                <ButtonMenu
                    borderColor="none"
                    borderWidth="0px"
                    icon={<QuestionMarkIcon />}
                    background={"#2D1F76"}
                    onClick={() => onOpenPrizeDistribution()}
                />
            </div>
            <img src={getAssetUrl(GAME_ASSETS.jackpot)} alt="rank" className="absolute top-[13px] left-1/2 -translate-x-1/2" />
            <span className="absolute right-[5px] top-[86px]  text-[#fffc59] text-[24px] font-sans tracking-[12px]">12344869</span>
            <div className="absolute  top-[135px] left-1/2 w-[170px] h-[20px] rounded-full -translate-x-1/2 bg-[#28105C] item-center justify-center flex">
                <span className="relative mt-[2px]"><HistoryIcon /></span>
                <span className="text-[#12F49E] text-[12px] font-sans">21:45:25</span>
            </div>
            <span className="absolute top-[155px] h-[45px] w-[250px] left-1/2 -translate-x-1/2 text-center font-sans text-[12px]">The top 15 players on the leaderboard can receiver a large number of diamonds based on the amount of diamonds played.</span>
            <div className="absolute w-[316px] h-[266px] top-[210px] left-1/2 -translate-x-1/2 bg-[#000000]/25 rounded-[5px]">
                <div className="flex items-center justify-between w-[280px] pl-[20px] pt-[10px]">
                    <span className="relative font-sans text-[#ffffff]/60">Ranking</span>
                    <span className=" relative pr-[20px] font-sans text-[#ffffff]/60">Name</span>
                    <span className=" relative font-sans text-[#ffffff]/60">Diamonds Play</span>
                </div>
                <div className="absolute top-[35px] w-[292px] h-[231px] left-1/2 -translate-x-1/2 scrollbar-hidden overflow-x-hidden overflow-y-auto">
                    {isTodayRanking ?
                        <div className="relative w-[292px] h-[47px] mt-[5px] flex ">
                            <div className="relative h-[47px] w-[47px] bg-gradient-to-br from-[#cf9800] from-1%  via-50% via-[#FFF987] to-[#fdc21f] to-90% rounded-l-[10px]">
                                <img src={""} alt="prize" className=" absolute h-[35px] w-[35px] left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2" />
                            </div>
                            <div className="relative flex h-[47px] w-[245px] bg-gradient-to-t from-[#FBBA07]   to-[#FFF987] items-center rounded-r-[10px] {resolveAssetUrl(rankingToday[0].player?.">
                                <img src={resolveAssetUrl(rankingToday[0].player?.avater ?? "")} alt="avatar" className="h-[45px] w-[45px] rounded-full" />
                                <span className="absolute left-[50px] text-[#fde4c7] font-bold  h-[40px] w-[80px] content-center">{rankingToday[0].player?.username}</span>
                                <img src={getAssetUrl(GAME_ASSETS.diamond)} alt="diamond" className="absolute left-[130px] h-[40px] w-[40px]" />
                                <span className="absolute left-[160px] text-[#fde4c7] font-bold  h-[40px] w-[80px] content-center">{rankingToday[0].total_win}</span>
                            </div>
                        </div>
                        :
                        <div className="relative w-[292px] h-[47px] mt-[5px] flex ">
                            <div className="relative h-[47px] w-[47px] bg-gradient-to-br from-[#cf9800] from-1%  via-50% via-[#FFF987] to-[#fdc21f] to-90% rounded-l-[10px]">
                                <img src={""} alt="prize" className=" absolute h-[35px] w-[35px] left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2" />
                            </div>
                            <div className="relative flex h-[47px] w-[245px] bg-gradient-to-t from-[#FBBA07]   to-[#FFF987] items-center rounded-r-[10px] {resolveAssetUrl(rankingToday[0].player?.">
                                <img src={resolveAssetUrl(rankingYesterday[0].player?.avater ?? "")} alt="avatar" className="h-[45px] w-[45px] rounded-full" />
                                <span className="absolute left-[50px] text-[#fde4c7] font-bold  h-[40px] w-[80px] content-center">{rankingYesterday[0].player?.username}</span>
                                <img src={getAssetUrl(GAME_ASSETS.diamond)} alt="diamond" className="absolute left-[130px] h-[40px] w-[40px]" />
                                <span className="absolute left-[160px] text-[#fde4c7] font-bold  h-[40px] w-[80px] content-center">{rankingYesterday[0].total_win}</span>
                            </div>
                        </div>}
                    {isTodayRanking ?
                        <div className="relative w-[292px] h-[47px] mt-[5px] flex ">
                            <div className="relative h-[47px] w-[47px] bg-gradient-to-br from-[#cf9800] from-1%  via-50% via-[#FFF987] to-[#fdc21f] to-90% rounded-l-[10px]">
                                <img src={""} alt="prize" className=" absolute h-[35px] w-[35px] left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2" />
                            </div>
                            <div className="relative flex h-[47px] w-[245px] bg-gradient-to-t from-[#FBBA07]   to-[#FFF987] items-center rounded-r-[10px] {resolveAssetUrl(rankingToday[0].player?.">
                                <img src={resolveAssetUrl(rankingToday[0].player?.avater ?? "")} alt="avatar" className="h-[45px] w-[45px] rounded-full" />
                                <span className="absolute left-[50px] text-[#fde4c7] font-bold  h-[40px] w-[80px] content-center">{rankingToday[1].player?.username}</span>
                                <img src={getAssetUrl(GAME_ASSETS.diamond)} alt="diamond" className="absolute left-[130px] h-[40px] w-[40px]" />
                                <span className="absolute left-[160px] text-[#fde4c7] font-bold  h-[40px] w-[80px] content-center">{rankingToday[1].total_win}</span>
                            </div>
                        </div>
                        :
                        <div className="relative w-[292px] h-[47px] mt-[5px] flex ">
                            <div className="relative h-[47px] w-[47px] bg-gradient-to-br from-[#cf9800] from-1%  via-50% via-[#FFF987] to-[#fdc21f] to-90% rounded-l-[10px]">
                                <img src={""} alt="prize" className=" absolute h-[35px] w-[35px] left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2" />
                            </div>
                            <div className="relative flex h-[47px] w-[245px] bg-gradient-to-t from-[#FBBA07]   to-[#FFF987] items-center rounded-r-[10px] {resolveAssetUrl(rankingToday[0].player?.">
                                <img src={resolveAssetUrl(rankingYesterday[0].player?.avater ?? "")} alt="avatar" className="h-[45px] w-[45px] rounded-full" />
                                <span className="absolute left-[50px] text-[#fde4c7] font-bold  h-[40px] w-[80px] content-center">{rankingYesterday[1].player?.username}</span>
                                <img src={getAssetUrl(GAME_ASSETS.diamond)} alt="diamond" className="absolute left-[130px] h-[40px] w-[40px]" />
                                <span className="absolute left-[160px] text-[#fde4c7] font-bold  h-[40px] w-[80px] content-center">{rankingYesterday[1].total_win}</span>
                            </div>
                        </div>}
                    {isTodayRanking ?
                        <div className="relative w-[292px] h-[47px] mt-[5px] flex ">
                            <div className="relative h-[47px] w-[47px] bg-gradient-to-br from-[#cf9800] from-1%  via-50% via-[#FFF987] to-[#fdc21f] to-90% rounded-l-[10px]">
                                <img src={""} alt="prize" className=" absolute h-[35px] w-[35px] left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2" />
                            </div>
                            <div className="relative flex h-[47px] w-[245px] bg-gradient-to-t from-[#FBBA07]   to-[#FFF987] items-center rounded-r-[10px] {resolveAssetUrl(rankingToday[0].player?.">
                                <img src={resolveAssetUrl(rankingToday[0].player?.avater ?? "")} alt="avatar" className="h-[45px] w-[45px] rounded-full" />
                                <span className="absolute left-[50px] text-[#fde4c7] font-bold  h-[40px] w-[80px] content-center">{rankingToday[2].player?.username}</span>
                                <img src={getAssetUrl(GAME_ASSETS.diamond)} alt="diamond" className="absolute left-[130px] h-[40px] w-[40px]" />
                                <span className="absolute left-[160px] text-[#fde4c7] font-bold  h-[40px] w-[80px] content-center">{rankingToday[2].total_win}</span>
                            </div>
                        </div>
                        :
                        <div className="relative w-[292px] h-[47px] mt-[5px] flex ">
                            <div className="relative h-[47px] w-[47px] bg-gradient-to-br from-[#cf9800] from-1%  via-50% via-[#FFF987] to-[#fdc21f] to-90% rounded-l-[10px]">
                                <img src={""} alt="prize" className=" absolute h-[35px] w-[35px] left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2" />
                            </div>
                            <div className="relative flex h-[47px] w-[245px] bg-gradient-to-t from-[#FBBA07]   to-[#FFF987] items-center rounded-r-[10px] {resolveAssetUrl(rankingToday[0].player?.">
                                <img src={resolveAssetUrl(rankingYesterday[0].player?.avater ?? "")} alt="avatar" className="h-[45px] w-[45px] rounded-full" />
                                <span className="absolute left-[50px] text-[#fde4c7] font-bold  h-[40px] w-[80px] content-center">{rankingYesterday[2].player?.username}</span>
                                <img src={getAssetUrl(GAME_ASSETS.diamond)} alt="diamond" className="absolute left-[130px] h-[40px] w-[40px]" />
                                <span className="absolute left-[160px] text-[#fde4c7] font-bold  h-[40px] w-[80px] content-center">{rankingYesterday[2].total_win}</span>
                            </div>
                        </div>}
                    {isTodayRanking ?
                        <div className="relative w-[292px] h-[47px] mt-[5px] flex">
                            <div className="relative content-center pl-[20px] h-[47px] w-[47px] text-[#ffcf68] text-[20px] bg-gradient-to-br from-[#7fd5fd] from-1%  via-50% via-[#fbfdff] to-[#7fd5fd] to-90% [text-shadow:1px_0_0_brown,-1px_0_0_brown,0_1px_0_brown,0_-1px_0_brown] rounded-l-[10px]">
                                {9}
                            </div>
                            <div className="relative flex h-[47px] w-[245px] bg-gradient-to-t from-[#7fd5fd]   to-[#b8d6f8] items-center rounded-r-[10px]">
                                <img src={resolveAssetUrl(rankingToday[1].player?.avater ?? "")} alt="avatar" />
                                <span className="absolute left-[50px] text-[#fde4c7] font-bold  h-[40px] w-[80px] content-center">{rankingYesterday[2].player?.username}</span>
                                <img src={getAssetUrl(GAME_ASSETS.diamond)} alt="diamond" className="absolute left-[130px] h-[40px] w-[40px]" />
                                <span className="absolute left-[160px] text-[#fde4c7] font-bold  h-[40px] w-[80px] content-center">{rankingYesterday[2].total_win}</span>
                            </div>
                        </div>
                        :
                        <div className="relative w-[292px] h-[47px] mt-[5px] flex">
                            <div className="relative content-center pl-[20px] h-[47px] w-[47px] text-[#ffcf68] text-[20px] bg-gradient-to-br from-[#7fd5fd] from-1%  via-50% via-[#fbfdff] to-[#7fd5fd] to-90% [text-shadow:1px_0_0_brown,-1px_0_0_brown,0_1px_0_brown,0_-1px_0_brown] rounded-l-[10px]">
                                {9}
                            </div>
                            <div className="relative flex h-[47px] w-[245px] bg-gradient-to-t from-[#7fd5fd]   to-[#b8d6f8] items-center rounded-r-[10px]">
                                <img src={resolveAssetUrl(rankingYesterday[1].player?.avater ?? "")} alt="avatar" />
                                <span className="absolute left-[50px] text-[#fde4c7] font-bold  h-[40px] w-[80px] content-center">00000</span>
                                <img src={getAssetUrl(GAME_ASSETS.diamond)} alt="diamond" className="absolute left-[130px] h-[40px] w-[40px]" />
                                <span className="absolute left-[160px] text-[#fde4c7] font-bold  h-[40px] w-[80px] content-center">dfd</span>
                            </div>
                        </div>}
                    {isTodayRanking ? <div className="relative w-[292px] h-[47px] mt-[5px] flex">
                        <div className="relative h-[47px] w-[47px] bg-gradient-to-br from-[#d47e37] from-1%  via-50% via-[#fec79a] to-[#eea162] to-90% rounded-l-[10px]">

                        </div>
                        <div className="relative flex h-[47px] w-[245px] bg-gradient-to-t from-[#f1a362]   to-[#fec79a] items-center rounded-r-[10px]">
                            <div></div>
                            <span className="text-[#A45721] font-bold">Sumiya BD</span>
                            {/* <img src="" alt="" /> */}
                            <span></span>
                        </div>
                    </div>
                        :
                        <div className="relative w-[292px] h-[47px] mt-[5px] flex">
                            <div className="relative h-[47px] w-[47px] bg-gradient-to-br from-[#d47e37] from-1%  via-50% via-[#fec79a] to-[#eea162] to-90% rounded-l-[10px]">

                            </div>
                            <div className="relative flex h-[47px] w-[245px] bg-gradient-to-t from-[#f1a362]   to-[#fec79a] items-center rounded-r-[10px]">
                                <div></div>
                                <span className="text-[#A45721] font-bold">Sumiya BD</span>
                                {/* <img src="" alt="" /> */}
                                <span></span>
                            </div>
                        </div>}
                    {isTodayRanking ?
                        <div className="relative w-[292px] h-[47px] mt-[5px] flex">
                            <div className="relative h-[47px] w-[47px] bg-gradient-to-br from-[#c29542] from-1%  via-50% via-[#fffae6] to-[#dfba77] to-90% rounded-l-[10px]">
                                {/* <img src="" alt="" /> */}
                            </div>
                            <div className="relative flex h-[47px] w-[245px] bg-gradient-to-t from-[#d6b579]   to-[#fffae6] items-center rounded-r-[10px]">
                                <div></div>
                                <span className="text-[#A45721] font-bold">Sumiya BD</span>
                                {/* <img src="" alt="" /> */}
                                <span></span>
                            </div>
                        </div>
                        :
                        <div className="relative w-[292px] h-[47px] mt-[5px] flex">
                            <div className="relative h-[47px] w-[47px] bg-gradient-to-br from-[#c29542] from-1%  via-50% via-[#fffae6] to-[#dfba77] to-90% rounded-l-[10px]">
                                {/* <img src="" alt="" /> */}
                            </div>
                            <div className="relative flex h-[47px] w-[245px] bg-gradient-to-t from-[#d6b579]   to-[#fffae6] items-center rounded-r-[10px]">
                                <div></div>
                                <span className="text-[#A45721] font-bold">Sumiya BD</span>
                                {/* <img src="" alt="" /> */}
                                <span></span>
                            </div>
                        </div>}
                </div>
            </div>
            <div className="absolute flex items-center top-[432px] left-1/2 -translate-x-1/2 w-[316px] h-[48px] bg-gradient-to-br from-[#FBBA07] from-1%  via-30% via-[#FFF987] to-[#D5831F] to-90% rounded-[9px]">
                <div className="absolute flex items-center top-[2px] left-1/2 -translate-x-1/2 w-[312px] h-[44px] bg-gradient-to-t from-[#D2D9FF] to-[#4C2EDE] rounded-[9px]">
                    <div className="relative content-center pl-[20px] h-[47px] w-[47px] font-sans text-[#ffcf68] text-[20px] [text-shadow:1px_0_0_brown,-1px_0_0_brown,0_1px_0_brown,0_-1px_0_brown] rounded-l-[10px]">
                        99+
                    </div>
                    <span className="text-[#A45721] font-bold">Sumiya BD</span>
                    {/* <img src="" alt="" /> */}
                    <span></span>
                </div>
            </div>
            <div className="absolute top-[489px] left-1/2 -translate-x-1/2 w-[269px] h-[31px] justify-between flex">
                {isTodayRanking ?
                    <>
                        <button className="relative w-[131px] h-[31px] bg-gradient-to-t from-[#705FEC] to-[#C990F7] rounded-[5px] border-[#fde453] border-[1px] text-[#FFFFFF] font-sans" onClick={() => { }}>Today</button>
                        <button className="relative w-[131px] h-[31px] bg-gradient-to-t from-[#705FEC]/40 to-[#C990F7]/40 rounded-[5px] border-[#fde453]/40 border-[1px] text-[#FFFFFF]/40 font-sans" onClick={() => { setIsTodayRanking(false) }}>Yesterday</button>
                    </> : <>
                        <button className="relative w-[131px] h-[31px] bg-gradient-to-t from-[#705FEC]/40 to-[#C990F7]/40 rounded-[5px] border-[#fde453]/40 border-[1px] text-[#FFFFFF]/40  font-sans" onClick={() => { setIsTodayRanking(true) }}>Today</button>
                        <button className="relative w-[131px] h-[31px] bg-gradient-to-t from-[#705FEC] to-[#C990F7] rounded-[5px] border-[#fde453]/40 border-[1px] text-[#FFFFFF] font-sans" onClick={() => { }}>Yesterday</button>
                    </>}
            </div>
        </div >
    )
}