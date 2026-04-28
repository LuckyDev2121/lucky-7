import { ButtonMenu, PlusIcon } from "./ButtonMenu";
import { getAssetUrl, GAME_ASSETS, } from "../config/gameconfig";
import { useGame } from "../hooks/useGameHook";
type MenuCoinProps = {
    onOpenModal: (modal: string) => void;
};

export default function MenuCoin({ onOpenModal }: MenuCoinProps) {
    const { playerInfo, } = useGame();
    return (
        <div className="flex items-center bg-gradient-to-tr from-[#34596A] to-[#66AFD0] p-[2px] " style={{ height: "24px" }}>
            <div className="flex items-center relative bg-[#2D1F76]" style={{ width: "85px", height: "20px" }}>
                <img src={getAssetUrl(GAME_ASSETS.diamond)} className="ml-[2px] h-[20px]" />
                <span className="ml-1.5  font-bold pr-[4px]">{Number(playerInfo?.balance)}</span>
                <div>
                    <ButtonMenu
                        icon={<PlusIcon />}
                        background={"#2D1F76"}
                        borderColor="none"
                        borderWidth="0px"
                        onClick={() => onOpenModal("recharge")}
                    />
                </div>
            </div>

        </div >
    )
}
