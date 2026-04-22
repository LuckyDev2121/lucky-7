import { ButtonMenu, CloseIcon } from "./ButtonMenu";

type RankingProps = {
    onClosePrize: () => void;
};

export default function PrizeDistribution({ onClosePrize }: RankingProps) {
    return (
        <div className="h-[490px] bg-gradient-to-t from-[#120D25] to-[#43308B] w-[343px] rounded-t-[20px]">
            <div className="absolute top-[12px] right-[12px] z-20">
                <ButtonMenu
                    borderColor="none"
                    borderWidth="0px"
                    icon={<CloseIcon />}
                    background={"#2D1F76"}
                    onClick={() => onClosePrize()}
                />
            </div>
            <span className="absolute top-[30px] left-1/2 -translate-x-1/2 text-[20px] font-sans text-white">PRIZE distribution</span>
            <div className="absolute w-[316px] h-[266px] top-[73px] left-1/2 -translate-x-1/2 bg-[#000000]/25 rounded-[5px]">
                <div className="flex items-center justify-between w-[280px] pt-[10px]">
                    <span className="relative font-sans ml-[50px] text-[#C499F4]">Ranking</span>
                    <span className=" relative font-sans mr-[30px] text-[#C499F4]">Diamonds</span>
                    <div className="absolute h-[1px] w-[300px] bg-[#C499F4] left-1/2 -translate-x-1/2 top-[30px]"></div>
                </div>
                <div>
                    <span></span>
                </div>
            </div>
            <div className="absolute grid top-[357px] h-[105px] w-[294px] left-1/2 -translate-x-1/2">
                <span className="relative text-left  font-sans text-[12px]">1. The prize money will increase after each game round</span>
                <span className="relative text-left  font-sans text-[12px]">2. There are a total of 15 people in the ranking list.</span>
                <span className="relative text-left  font-sans text-[12px]">The list is updated at 0 o'clock every day.</span>
                <span className="relative text-left  font-sans text-[12px]">3. The ranking of the leaderboard depends on the amount of players' bets. The more bets, the higher the ranking and the richer the rewards.</span>
            </div>
        </div>
    )
}