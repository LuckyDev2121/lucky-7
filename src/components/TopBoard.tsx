import BackTop from "../assets/Top/background_up.svg"

export default function TopBoard() {

    return (
        <div className="absolute flex top-[6px]">
            <img src={BackTop} alt="BackTop" className="relative" />
        </div>
    );
}
