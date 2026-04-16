import BackBoard from "../assets/Body/background_down.svg"
import BackBorder from "../assets/Body/background_border.svg"
import MenuCoin from "./MenuCoin";
import MenuTop from "./MenuTop";
import cup from "../assets/Body/BodyTop/cup.svg"
import shine from "../assets/Body/BodyTop/shine.svg"
import light from "../assets/Body/BodyPlayboard/Light.svg"
import digital from "../assets/Body/BodyPlayboard/Digital7.svg"
import player from "../assets/Body/player.svg"
import dotthree from "../assets/Body/BodyPlayboard/DotsThree.svg"
import betmin from "../assets/Body/BodyBottom/BetMin.svg"
import betplu from "../assets/Body/BodyBottom/BetPlu.svg"
import auto from "../assets/Body/BodyBottom/Auto.svg"
import spin from "../assets/Body/BodyBottom/Spin.svg"
import PlayBoard from "../components/PlayBoard"

type BodyBoardProps = {
    onOpenModal: (modal: string) => void;
};
export default function BodyBoard({ onOpenModal }: BodyBoardProps) {

    return (
        <div className="absolute top-[135px] left-0  h-[454px] w-[393px]">
            <img src={BackBoard} alt="BackBoard" className="absolute inset-0 -z-10" />
            <div
                className="absolute bottom-0 left-0 h-[70px] w-full bg-gradient-to-br from-[#D5831F] from-1% via-30% via-[#FFF987]  to-[#D5831F] to-90%"
                style={{
                    clipPath: "polygon(0 28%, 4.5% 0, 95.5% 0, 100% 22%, 100% 100%, 0 100%)",
                }}
            />
            <img src={BackBorder} alt="BackBorder" className="absolute inset-0 z-10" />
            <div className="absolute -top-[17px] left-0 flex w-full items-center justify-between pl-[7px] pr-[20px] z-20">
                <MenuCoin onOpenModal={onOpenModal} />
                <MenuTop onOpenModal={onOpenModal} />
            </div>
            <button className="absolute z-20 top-[25px] left-[28px] h-[72px] w-[72px] rounded-full flex items-center justify-center"
                onClick={() => onOpenModal("ranking")}>
                <img src={shine} alt="shine" className="absolute h-[60px] w-[60px] top-[4px]" />
                <img src={cup} alt="cup" className="absolute h-[50px] w-[50px] left-[11px] top-[11px]" />
            </button>
            <div className="absolute h-[66px] w-[266px] top-[30px] left-[91px] bg-gradient-to-t from-[#0E0038] to-[#140433] rounded-[4px]">
                <div className="relative grid grid-cols-4 justify-center h-[60px] w-[260px] pt-[2px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-t from-[#1A0D38] to-[#160A38] border-2 border-[#A75991] rounded-[4px]">
                    <div className="relative ">
                        <img src={player} alt="player" className="absolute left-1/2 -translate-x-1/2" />
                        <span className="absolute inset-x-0 text-center top-[42px]  text-[8px]">Sumiya BD</span>
                    </div>
                    <div className="relative">
                        <img src={player} alt="player" className="absolute left-1/2 -translate-x-1/2" />
                        <span className="absolute inset-x-0 text-center top-[42px] align-middle text-[8px]">Sumiya BD</span>
                    </div>
                    <div className="relative">
                        <img src={player} alt="player" className="absolute left-1/2 -translate-x-1/2" />
                        <span className="absolute inset-x-0 text-center top-[42px] algin-middle text-[8px]">Sumiya BD</span>
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
                    </div>
                </div>
            </div>
            <PlayBoard />
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
                    <img src={betmin} alt="betmin" />
                </button>
                <button className="relative mx-[4px]">
                    <img src={betplu} alt="betplu" />
                </button>
                <button className="relative mx-[4px]">
                    <img src={auto} alt="auto" />
                </button>
                <button className="relative mx-[4px]">
                    <img src={spin} alt="spin" />
                </button>
            </div>
        </div >
    );
}
