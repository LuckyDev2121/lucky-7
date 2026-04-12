import coin from "../assets/Body/TopMenu/Coin.svg"

export default function RecordBoard() {
    return (
        <div className="relative  h-[141px] w-[302px] rounded-[5px]">
            <div className="absolute h-[22px] w-[302px] bg-[#000000]/25 rounded-t-[5px] px-[6px]">
                <span className="">16531687164786476837</span>
                <span className="">16/03/2026 20:20:47</span>
            </div>
            <div className="absolute top-[23px] h-[117px] w-[302px] bg-[#000000]/25 rounded-b-[5px] px-[6px]">
                <div>
                    <span>winning pattern : </span>
                </div>
                <div className="flex">
                    <span>Bet : </span>
                    <img src={coin} alt="coin" />
                </div>
                <div className="flex">
                    <span>Win Diamonds : </span>
                    <img src={coin} alt="coin" />
                </div>
                <div>
                    <span>Diamond Balance : </span>
                </div>
                <div className="m-[10px]">
                    <img src={coin} alt="coin" />
                </div>
            </div >
        </div >
    )
}