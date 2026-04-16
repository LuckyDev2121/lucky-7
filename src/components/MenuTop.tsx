import { useState } from "react";
import { ButtonMenu, HistoryIcon, SpeakerHighIcon, QuestionMarkIcon, CloseIcon } from "./ButtonMenu";

type TopMenuProps = {
    onOpenModal: (modal: string) => void;
};

const TopMenu: React.FC<TopMenuProps> = ({ onOpenModal }) => {

    const [mute, setMute] = useState(false);

    return (
        <div className="relative flex gap-[5px]">
            <ButtonMenu
                icon={<HistoryIcon />}
                background={"#2D1F76"}
                borderColor="none"
                borderWidth="0px"
                onClick={() => onOpenModal("history")}
            />

            <ButtonMenu
                borderColor="none"
                borderWidth="0px"
                icon={<SpeakerHighIcon />}
                background={"#2D1F76"}
                onClick={() => {
                    onOpenModal("music")
                    setMute(!mute)
                }}
            />

            <ButtonMenu
                borderColor="none"
                borderWidth="0px"
                icon={<QuestionMarkIcon />}
                background={"#2D1F76"}
                onClick={() => onOpenModal("help")}
            />
            <ButtonMenu
                borderColor="none"
                borderWidth="0px"
                icon={<CloseIcon />}
                background={"#2D1F76"}
                onClick={() => onOpenModal("close")}
            />
        </div >
    );
};

export default TopMenu;
