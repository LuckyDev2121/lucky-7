import vectorL from "../assets/Body/BodyPlayboard/Vector1.svg"
import vectorM from "../assets/Body/BodyPlayboard/Vector2.svg"
import vectorR from "../assets/Body/BodyPlayboard/Vector3.svg"
import vectLL from "../assets/Body/BodyPlayboard/vect1.svg"
import vectML from "../assets/Body/BodyPlayboard/vect2.svg"
import vectMR from "../assets/Body/BodyPlayboard/vect3.svg"
import vectRR from "../assets/Body/BodyPlayboard/vect4.svg"
import darkstar from "../assets/Body/BodyPlayboard/DarkStar.svg"
import lightstar from "../assets/Body/BodyPlayboard/LightStar.svg"
import lineL from "../assets/Body/BodyPlayboard/Line 2.svg"
import lineR from "../assets/Body/BodyPlayboard/Line 3.svg"
import lineM from "../assets/Body/BodyPlayboard/Line 4.svg"

export default function PlayBoard() {

    return (
        <div className="absolute h-[230px] w-[316px] top-[96px] left-[39px]  bg-gradient-to-t from-[#1D27BA] to-[#B11ECB] p-[2px] rounded-[9px]">
            <div className="relative h-[226px] w-[310px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#000000] inset-[2px] rounded-[7px] top-1/2 -translate-y-1/2">
                <img src={vectLL} alt="vectLL" className="absolute left-[2px] top-[3px]" />
                <img src={vectorL} alt="vectorL" className="absolute left-[17px] top-[3px]" />
                <img src={vectML} alt="vectML" className="absolute left-[99px] top-[3px]" />
                <img src={vectorM} alt="vectorM" className="absolute left-[114px] top-[3px]" />
                <img src={vectMR} alt="vectMR" className="absolute left-[198px] top-[3px]" />
                <img src={vectorR} alt="vectorR" className="absolute left-[213px] top-[3px]" />
                <img src={vectRR} alt="vectRR" className="absolute left-[290px] top-[3px]" />

                <img src={darkstar} alt="darkstar" className="absolute left-[7px] top-[24px]" />
                <img src={darkstar} alt="darkstar" className="absolute left-[6px] top-[58px]" />
                <img src={darkstar} alt="darkstar" className="absolute left-[5px] top-[92px]" />
                <img src={darkstar} alt="darkstar" className="absolute left-[5px] top-[126px]" />
                <img src={lightstar} alt="lightstar" className="absolute left-[0px] top-[155px]" />
                <img src={darkstar} alt="darkstar" className="absolute left-[7px] top-[194px]" />

                <img src={darkstar} alt="darkstar" className="absolute left-[102px] top-[24px]" />
                <img src={darkstar} alt="darkstar" className="absolute left-[102px] top-[58px]" />
                <img src={darkstar} alt="darkstar" className="absolute left-[102px] top-[92px]" />
                <img src={darkstar} alt="darkstar" className="absolute left-[102px] top-[126px]" />
                <img src={lightstar} alt="lightstar" className="absolute left-[96px] top-[155px]" />
                <img src={darkstar} alt="darkstar" className="absolute left-[102px] top-[194px]" />

                <img src={darkstar} alt="darkstar" className="absolute left-[201px] top-[24px]" />
                <img src={darkstar} alt="darkstar" className="absolute left-[201px] top-[58px]" />
                <img src={darkstar} alt="darkstar" className="absolute left-[201px] top-[92px]" />
                <img src={darkstar} alt="darkstar" className="absolute left-[201px] top-[126px]" />
                <img src={lightstar} alt="lightstar" className="absolute left-[195px] top-[155px]" />
                <img src={darkstar} alt="darkstar" className="absolute left-[201px] top-[194px]" />

                <img src={darkstar} alt="darkstar" className="absolute left-[294px] top-[24px]" />
                <img src={darkstar} alt="darkstar" className="absolute left-[295px] top-[58px]" />
                <img src={darkstar} alt="darkstar" className="absolute left-[296px] top-[92px]" />
                <img src={darkstar} alt="darkstar" className="absolute left-[296px] top-[126px]" />
                <img src={lightstar} alt="lightstar" className="absolute left-[290px] top-[155px]" />
                <img src={darkstar} alt="darkstar" className="absolute left-[294px] top-[194px]" />

                <img src={lineL} alt="lineL" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10" />
                <img src={lineR} alt="lineR" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10" />
                <img src={lineM} alt="lineM" className="absolute top-[41px] z-10" />
                <img src={lineM} alt="lineM" className="absolute top-[185px] z-10" />
                <img src={lineM} alt="lineM" className="absolute top-[113px] z-10" />
            </div>
        </div>
    );
}
