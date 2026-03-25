import rectangle from "../assets/Modal/Rectangle.svg"
import ButtonMenu from "./ButtonMenu";
import close from "../assets/Body/TopMenu/Close.svg"
import RecordBoard from "./RecordBoard";

type HistoryMenuProps = {
    onCloseHistory: () => void;
};

export default function HistoryMenu({ onCloseHistory }: HistoryMenuProps) {
    return (
        <div className="h-[428px] bg-gradient-to-t from-[#5028C1] to-[#7C00D5] w-[343px] rounded-t-[20px]">
            <img src={rectangle} alt="Rectangle" className="absolute left-1/2 transform -translate-x-1/2" />
            <span className="absolute top-[4px] left-1/2 transform -translate-x-1/2 text-[16px] font-bold mt-1">Game Records</span>
            <div className="absolute top-[12px] right-[12px]">
                <ButtonMenu
                    borderColor="none"
                    borderWidth="0px"
                    icon={close}
                    background={"#2D1F76"}
                    onClick={() => onCloseHistory()}
                />
            </div>
            <div className="absolute top-[57px] left-[21px] ">
                <RecordBoard />
            </div>
            <div className="absolute top-[210px] left-[21px]">
                <RecordBoard />
            </div>
            <div className="absolute top-[364px] left-[21px]">
                <RecordBoard />
            </div>
        </div>
    )
}