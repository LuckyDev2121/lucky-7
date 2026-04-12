import ButtonMenu from "./ButtonMenu";
import close from "../assets/Body/TopMenu/Close.svg"
import quiz from "../assets/Body/TopMenu/Quiz.svg"
import rank from "../assets/Modal/RankingJackpot.svg"
type RankingProps = {
    onCloseRanking: () => void;
    onOpenPrizeDistribution: () => void;
};

export default function Ranking({ onCloseRanking, onOpenPrizeDistribution }: RankingProps) {
    return (
        <div className="h-[530px] bg-gradient-to-t from-[#120D25] to-[#43308B] w-[343px] rounded-t-[20px]">
            <div className="absolute top-[12px] right-[12px] z-20">
                <ButtonMenu
                    borderColor="none"
                    borderWidth="0px"
                    icon={close}
                    background={"#2D1F76"}
                    onClick={() => onCloseRanking()}
                />
            </div>
            <div className="absolute top-[12px] right-[42px] z-20">
                <ButtonMenu
                    borderColor="none"
                    borderWidth="0px"
                    icon={quiz}
                    background={"#2D1F76"}
                    onClick={() => onOpenPrizeDistribution()}
                />
            </div>
            <img src={rank} alt="rank" className="absolute top-[13px] left-1/2 -translate-x-1/2" />
            <div className="absolute top-[122px] left-1/2 w-[170px] h-[20px] rounded-full -translate-x-1/2 bg-[#28105C] item-center justify-center flex">
                <span></span>
                <span className="text-[#12F49E] text-[10px]">21:45:25</span>
            </div>
            <span className="absolute top-[147px] h-[45px] w-[250px] left-1/2 -translate-x-1/2 text-center font-sans text-[12px]">The top 15 players on the leaderboard can receiver a large number of diamonds based on the amount of diamonds played.</span>
            <div className="absolute w-[316px] h-[266px] top-[205px] left-1/2 -translate-x-1/2 bg-[#000000]/25 rounded-[5px]">
                <div className="flex items-center justify-between w-[280px]">
                    <span className="relative font-sans">Ranking</span>
                    <span className=" relative font-sans">Name</span>
                    <span className=" relative font-sans">Diamonds Play</span>
                </div>
                <div className="absolute top-[35px] w-[292px] h-[231px]  scrollbar-hidden overflow-x-hidden overflow-y-auto">
                    <div className="relative w-[292px] h-[47px] mt-[5px] flex">
                        <div className="relative h-[47px] w-[47px] bg-gradient-to-br from-[#cf9800] from-1%  via-50% via-[#FFF987] to-[#fdc21f] to-90% rounded-l-[10px]">
                            {/* <img src="" alt="" /> */}
                        </div>
                        <div className="relative flex h-[47px] w-[255px] bg-gradient-to-t from-[#FBBA07]   to-[#FFF987] items-center">
                            <div></div>
                            <span className="text-[#A45721] font-bold">Sumiya BD</span>
                            {/* <img src="" alt="" /> */}
                            <span></span>
                        </div>
                    </div>
                    <div className="relative w-[292px] h-[47px] mt-[5px] flex">
                        <div className="relative h-[47px] w-[47px] bg-gradient-to-br from-[#44aedf] from-1%  via-50% via-[#b8d6f8] to-[#72ccf7] to-90% rounded-l-[10px]">
                            {/* <img src="" alt="" /> */}
                        </div>
                        <div className="relative flex h-[47px] w-[255px] bg-gradient-to-t from-[#7fd5fd]   to-[#b8d6f8] items-center">
                            <div></div>
                            <span className="text-[#A45721] font-bold">Sumiya BD</span>
                            {/* <img src="" alt="" /> */}
                            <span></span>
                        </div>
                    </div>
                    <div className="relative w-[292px] h-[47px] mt-[5px] flex">
                        <div className="relative h-[47px] w-[47px] bg-gradient-to-br from-[#d47e37] from-1%  via-50% via-[#fec79a] to-[#eea162] to-90% rounded-l-[10px]">
                            {/* <img src="" alt="" /> */}
                        </div>
                        <div className="relative flex h-[47px] w-[255px] bg-gradient-to-t from-[#f1a362]   to-[#fec79a] items-center">
                            <div></div>
                            <span className="text-[#A45721] font-bold">Sumiya BD</span>
                            {/* <img src="" alt="" /> */}
                            <span></span>
                        </div>
                    </div>
                    <div className="relative w-[292px] h-[47px] mt-[5px] flex">
                        <div className="relative h-[47px] w-[47px] bg-gradient-to-br from-[#c29542] from-1%  via-50% via-[#fffae6] to-[#dfba77] to-90% rounded-l-[10px]">
                            {/* <img src="" alt="" /> */}
                        </div>
                        <div className="relative flex h-[47px] w-[255px] bg-gradient-to-t from-[#d6b579]   to-[#fffae6] items-center">
                            <div></div>
                            <span className="text-[#A45721] font-bold">Sumiya BD</span>
                            {/* <img src="" alt="" /> */}
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute flex items-center top-[432px] left-1/2 -translate-x-1/2 w-[316px] h-[48px] bg-gradient-to-br from-[#FBBA07] from-1%  via-30% via-[#FFF987] to-[#D5831F] to-90% rounded-[9px]">
                <div className="absolute flex items-center top-[2px] left-1/2 -translate-x-1/2 w-[312px] h-[44px] bg-gradient-to-t from-[#D2D9FF] to-[#4C2EDE] rounded-[9px]">
                    <span className="text-[#FDF4C1] border-[#7D503B] border-[2px] font-bold text-[16px]">99+</span>
                    <div></div>
                    <span className="text-[#A45721] font-bold">Sumiya BD</span>
                    {/* <img src="" alt="" /> */}
                    <span></span>
                </div>
            </div>
            <div className="absolute top-[489px] left-1/2 -translate-x-1/2 w-[269px] h-[31px] justify-between flex">
                <button className="relative w-[131px] h-[31px] bg-gradient-to-t from-[#705FEC] to-[#C990F7] rounded-[5px] border-[#fde453] border-[1px] text-[#FFFFFF] font-sans">Today</button>
                <button className="relative w-[131px] h-[31px] bg-gradient-to-t from-[#705FEC]/40 to-[#C990F7]/40 rounded-[5px] border-[#fde453]/40 border-[1px] text-[#FFFFFF]/40 font-sans">Yesterday</button>
            </div>
        </div >
    )
}