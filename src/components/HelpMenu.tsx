import { ButtonMenu, CloseIcon } from "./ButtonMenu";
import lineL from "../assets/Modal/lineL.svg"
import lineM from "../assets/Modal/lineM.svg"
import lineR from "../assets/Modal/lineR.svg"
import ring from "../assets/Body/element/ring.svg"
import peach from "../assets/Body/element/peach.svg"
import cherry from "../assets/Body/element/cherry.svg"
import diamond from "../assets/Body/element/diamond.svg"
import seven from "../assets/Body/element/seven.svg"
import grape from "../assets/Body/element/grape.svg"
import watermelon from "../assets/Body/element/watermelon.svg"
import one from "../assets/Modal/1.svg"
import zero from "../assets/Modal/0.svg"
import three from "../assets/Modal/3.svg"
import five from "../assets/Modal/5.svg"

type HelpMenuProps = {
    onCloseHelpModal: () => void;
};

export default function HelpMenu({ onCloseHelpModal }: HelpMenuProps) {
    return (
        <div className="h-[274px] bg-gradient-to-t from-[#5028C1] to-[#7C00D5] w-[393px] rounded-t-[10px]">
            <span className="absolute flex left-[151px] top-[18px] text-[24px]  font-semibold">Class Slot</span>
            <div className="absolute top-[12px] right-[12px]">
                <ButtonMenu
                    borderColor="none"
                    borderWidth="0px"
                    icon={<CloseIcon />}
                    background={"#2D1F76"}
                    onClick={() => onCloseHelpModal()}
                />
            </div>
            <div className="absolute flex bg-[#000000]/25 top-[11px] left-[15px] h-[74px] w-[122px] rounded-[5px]">
                <img src={lineL} alt="Line Left" className="absolute top-[12px] left-[23px] w-[78px] h-[52px]" />
                <img src={lineM} alt="Line Middle" className="absolute top-[12px] left-[23px] w-[78px]" />
                <img src={lineM} alt="Line Middle" className="absolute top-[37px] left-[23px] w-[78px]" />
                <img src={lineM} alt="Line Middle" className="absolute top-[62px] left-[23px] w-[78px]" />
                <img src={lineR} alt="Line Right" className="absolute top-[12px] left-[23px] w-[78px] h-[52px]" />
                <div className="absolute top-[7px] left-[18px] w-[10px] h-[10px] rounded-full bg-[#FFFFFF]"></div>
                <div className="absolute top-[7px] left-[56px] w-[10px] h-[10px] rounded-full bg-[#FFFFFF]"></div>
                <div className="absolute top-[7px] left-[94px] w-[10px] h-[10px] rounded-full bg-[#FFFFFF]"></div>
                <div className="absolute top-[32px] left-[18px] w-[10px] h-[10px] rounded-full bg-[#FFFFFF]"></div>
                <div className="absolute top-[32px] left-[56px] w-[10px] h-[10px] rounded-full bg-[#FFFFFF]"></div>
                <div className="absolute top-[32px] left-[94px] w-[10px] h-[10px] rounded-full bg-[#FFFFFF]"></div>
                <div className="absolute top-[57px] left-[18px] w-[10px] h-[10px] rounded-full bg-[#FFFFFF]"></div>
                <div className="absolute top-[57px] left-[56px] w-[10px] h-[10px] rounded-full bg-[#FFFFFF]"></div>
                <div className="absolute top-[57px] left-[94px] w-[10px] h-[10px] rounded-full bg-[#FFFFFF]"></div>
            </div>
            <div className="absolute top-[91px] left-[12px] grid grid-cols-2 grid-rows-4 gap-[10px]">
                <div className="relative flex bg-[#000000]/25 h-[34px] w-[180px] rounded-[5px] items-center ">
                    <img src={ring} alt="Ring" className="relative  left-[5px] w-[24px] h-[24px]" />
                    <img src={ring} alt="Ring" className="relative left-[5px] w-[24px] h-[24px]" />
                    <img src={ring} alt="Ring" className="relative left-[5px] w-[24px] h-[24px]" />
                    <span className="relative left-[8px] top-[3px] w-[24px] h-[24px]">=</span>
                    <img src={one} alt="Ring" className="relative pl-[5px] w-[18px] h-[18px]" />
                    <img src={zero} alt="Ring" className="relative w-[18px] h-[18px]" />
                    <img src={zero} alt="Ring" className="relative  w-[18px] h-[18px]" />
                    <img src={zero} alt="Ring" className="relative  w-[18px] h-[18px]" />
                    <img src={zero} alt="Ring" className="relative  w-[18px] h-[18px]" />
                    <img src={zero} alt="Ring" className="relative  w-[18px] h-[18px]" />
                    <img src={zero} alt="Ring" className="relative  w-[18px] h-[18px]" />
                </div>
                <div className="relative flex bg-[#000000]/25 h-[34px] w-[180px] rounded-[5px]  items-center">
                    <img src={seven} alt="Seven" className="relative left-[5px] w-[24px] h-[24px]" />
                    <img src={seven} alt="Seven" className="relative left-[5px] w-[24px] h-[24px]" />
                    <img src={seven} alt="Seven" className="relative left-[5px] w-[24px] h-[24px]" />
                    <span className="relative left-[8px] top-[3px] w-[24px] h-[24px]">=</span>
                    <img src={three} alt="Ring" className="relative  w-[18px] h-[18px]" />
                    <img src={zero} alt="Ring" className="relative w-[18px] h-[18px]" />
                    <img src={zero} alt="Ring" className="relative  w-[18px] h-[18px]" />
                    <img src={zero} alt="Ring" className="relative  w-[18px] h-[18px]" />
                    <img src={zero} alt="Ring" className="relative  w-[18px] h-[18px]" />
                    <img src={zero} alt="Ring" className="relative  w-[18px] h-[18px]" />
                </div>
                <div className="relative flex bg-[#000000]/25 h-[34px] w-[180px] rounded-[5px] items-center">
                    <img src={diamond} alt="Diamond" className="relative left-[5px] w-[24px] h-[24px]" />
                    <img src={diamond} alt="Diamond" className="relative left-[5px] w-[24px] h-[24px]" />
                    <img src={diamond} alt="Diamond" className="relative left-[5px] w-[24px] h-[24px]" />
                    <span className="relative left-[8px] top-[3px] w-[24px] h-[24px]">=</span>
                    <img src={one} alt="Ring" className="relative pl-[5px] w-[18px] h-[18px]" />
                    <img src={zero} alt="Ring" className="relative w-[18px] h-[18px]" />
                    <img src={zero} alt="Ring" className="relative  w-[18px] h-[18px]" />
                    <img src={zero} alt="Ring" className="relative  w-[18px] h-[18px]" />
                    <img src={zero} alt="Ring" className="relative  w-[18px] h-[18px]" />
                    <img src={zero} alt="Ring" className="relative  w-[18px] h-[18px]" />
                </div>
                <div className="relative flex bg-[#000000]/25 h-[34px] w-[180px] rounded-[5px] items-center">
                    <img src={watermelon} alt="Watermelon" className="relative left-[5px] w-[24px] h-[24px]" />
                    <img src={watermelon} alt="Watermelon" className="relative left-[5px] w-[24px] h-[24px]" />
                    <img src={watermelon} alt="Watermelon" className="relative left-[5px] w-[24px] h-[24px]" />
                    <span className="relative left-[8px] top-[3px] w-[24px] h-[24px]">=</span>
                    <img src={five} alt="Ring" className="relative  w-[18px] h-[18px]" />
                    <img src={zero} alt="Ring" className="relative w-[18px] h-[18px]" />
                    <img src={zero} alt="Ring" className="relative  w-[18px] h-[18px]" />
                    <img src={zero} alt="Ring" className="relative  w-[18px] h-[18px]" />
                    <img src={zero} alt="Ring" className="relative  w-[18px] h-[18px]" />
                </div>
                <div className="relative flex bg-[#000000]/25 h-[34px] w-[180px] rounded-[5px] items-center">
                    <img src={grape} alt="Grape" className="relative left-[5px] w-[24px] h-[24px]" />
                    <img src={grape} alt="Grape" className="relative left-[5px] w-[24px] h-[24px]" />
                    <img src={grape} alt="Grape" className="relative left-[5px] w-[24px] h-[24px]" />
                    <span className="relative left-[8px] top-[3px] w-[24px] h-[24px]">=</span>
                    <img src={three} alt="Ring" className="relative  w-[18px] h-[18px]" />
                    <img src={zero} alt="Ring" className="relative w-[18px] h-[18px]" />
                    <img src={zero} alt="Ring" className="relative  w-[18px] h-[18px]" />
                    <img src={zero} alt="Ring" className="relative  w-[18px] h-[18px]" />
                    <img src={zero} alt="Ring" className="relative  w-[18px] h-[18px]" />
                </div>
                <div className="relative flex bg-[#000000]/25 h-[34px] w-[180px] rounded-[5px] items-center">
                    <img src={peach} alt="Peach" className="relative left-[5px] w-[24px] h-[24px]" />
                    <img src={peach} alt="Peach" className="relative left-[5px] w-[24px] h-[24px]" />
                    <img src={peach} alt="Peach" className="relative left-[5px] w-[24px] h-[24px]" />
                    <span className="relative left-[8px] top-[3px] w-[24px] h-[24px]">=</span>
                    <img src={one} alt="Ring" className="relative pl-[5px] w-[18px] h-[18px]" />
                    <img src={five} alt="Ring" className="relative w-[18px] h-[18px]" />
                    <img src={zero} alt="Ring" className="relative  w-[18px] h-[18px]" />
                    <img src={zero} alt="Ring" className="relative  w-[18px] h-[18px]" />
                    <img src={zero} alt="Ring" className="relative  w-[18px] h-[18px]" />
                </div>
                <div className="relative flex bg-[#000000]/25 h-[34px] w-[180px] rounded-[5px] items-center">
                    <img src={cherry} alt="Cherry" className="relative left-[5px] w-[24px] h-[24px]" />
                    <img src={cherry} alt="Cherry" className="relative left-[5px] w-[24px] h-[24px]" />
                    <img src={cherry} alt="Cherry" className="relative left-[5px] w-[24px] h-[24px]" />
                    <span className="relative left-[8px] top-[3px] w-[24px] h-[24px]">=</span>
                    <img src={five} alt="Ring" className="relative  w-[18px] h-[18px]" />
                    <img src={zero} alt="Ring" className="relative w-[18px] h-[18px]" />
                    <img src={zero} alt="Ring" className="relative  w-[18px] h-[18px]" />
                    <img src={zero} alt="Ring" className="relative  w-[18px] h-[18px]" />
                </div>
                <div className="relative flex bg-[#000000]/25 h-[34px] w-[180px] rounded-[5px] items-center">
                    <img src={cherry} alt="Cherry" className="relative left-[5px] w-[24px] h-[24px]" />
                    <img src={cherry} alt="Cherry" className="relative left-[5px] w-[24px] h-[24px]" />
                    <div className="relative left-[5px] w-[24px] h-[24px] bg-[#FFFFFF]/20 font-[#FFFFFF] text-[7px] text-white pl-[4px] content-center">ANY</div>
                    <span className="relative left-[8px] top-[3px] w-[24px] h-[24px]">=</span>
                    <img src={five} alt="Ring" className="relative  w-[18px] h-[18px]" />
                    <img src={zero} alt="Ring" className="relative w-[18px] h-[18px]" />
                    <img src={zero} alt="Ring" className="relative  w-[18px] h-[18px]" />
                    <img src={zero} alt="Ring" className="relative  w-[18px] h-[18px]" />
                </div>
            </div>
        </div>
    )
}