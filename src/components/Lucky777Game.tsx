// import { useState } from "react";

import TopBoard from "./TopBoard";
import BodyBoard from "./BodyBoard";

const GAME_WIDTH = 393;
const GAME_HEIGHT = 589;

export default function Lucky777Game() {

    // const [scale, setScale] = useState(1);

    return (
        <div className="relative flex min-h-[100dvh] w-full items-end justify-center overflow-hidden">
            <div className="fixed inset-0 flex items-end justify-center overflow-hidden ">
                <div
                    className="relative"
                    style={{
                        width: `${GAME_WIDTH}px`,
                        height: `${GAME_HEIGHT}px`,
                    }}
                >
                    <div
                        className="relative left-0 top-0 origin-top-left "
                        style={{
                            width: `${GAME_WIDTH}px`,
                            height: `${GAME_HEIGHT}px`,
                            // transform: `scale(${scale})`,
                        }}
                    >
                        <TopBoard />
                        <BodyBoard onOpenModal={() => console.log("adf")} />
                    </div>
                </div>
            </div>
        </div>
    );
}
