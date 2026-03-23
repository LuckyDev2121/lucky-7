import ButtonMenu from "./ButtonMenu";
import coin from "../assets/Body/TopMenu/Coin.svg"
import plus from "../assets/Body/TopMenu/Plus.svg"

type MenuCoinProps = {
    onOpenModal: (modal: string) => void;
};

export default function MenuCoin({ onOpenModal }: MenuCoinProps) {
    return (
        <div className="flex items-center bg-gradient-to-tr from-[#34596A] to-[#66AFD0] p-[2px] " style={{ height: "24px" }}>
            <div className="flex items-center relative bg-[#2D1F76]" style={{ width: "85px", height: "20px" }}>
                <img src={coin} className="ml-[9px]" />
                <span className="ml-1.5  font-bold pr-[4px]">4000000</span>
                <div>
                    <ButtonMenu
                        icon={plus}
                        background={"#2D1F76"}
                        borderColor="none"
                        borderWidth="0px"
                        onClick={() => onOpenModal("history")}
                    />
                </div>
            </div>

        </div >
    )
}
