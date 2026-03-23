import { useState } from "react";
import ButtonMenu from "./ButtonMenu";
import close from "../assets/Body/TopMenu/Close.svg"
import quiz from "../assets/Body/TopMenu/Quiz.svg"
import music from "../assets/Body/TopMenu/Music.svg"
import unmute from "../assets/Body/TopMenu/Unmute.svg"
import history from "../assets/Body/TopMenu/History.svg"

type TopMenuProps = {
    onOpenModal: (modal: string) => void;
};

const TopMenu: React.FC<TopMenuProps> = ({ onOpenModal }) => {

    const [mute, setMute] = useState(false);

    return (
        <div className="relative flex gap-[5px]">
            <ButtonMenu
                icon={history}
                background={"#2D1F76"}
                borderColor="none"
                borderWidth="0px"
                onClick={() => onOpenModal("history")}
            />

            <ButtonMenu
                borderColor="none"
                borderWidth="0px"
                icon={`${mute ? music : unmute}`}
                background={"#2D1F76"}
                onClick={() => {
                    onOpenModal("music")
                    setMute(!mute)
                }}
            />

            <ButtonMenu
                borderColor="none"
                borderWidth="0px"
                icon={quiz}
                background={"#2D1F76"}
                onClick={() => onOpenModal("quiz")}
            />
            <ButtonMenu
                borderColor="none"
                borderWidth="0px"
                icon={close}
                background={"#2D1F76"}
                onClick={() => onOpenModal("close")}
            />
        </div >
    );
};

export default TopMenu;
