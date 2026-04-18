import { motion } from "framer-motion";

export function DarkStarIcon() {
    return (
        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" aria-hidden="true">
            <polygon
                points="5.5,0.8 6.7,3.2 9.4,3.6 7.45,5.45 7.9,8.1 5.5,6.85 3.1,8.1 3.55,5.45 1.6,3.6 4.3,3.2"
                fill="#D9D9D9"
            />
        </svg>
    );
}
export function PinkStarIcon() {
    return (
        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" aria-hidden="true">
            <polygon
                points="5.5,0.8 6.7,3.2 9.4,3.6 7.45,5.45 7.9,8.1 5.5,6.85 3.1,8.1 3.55,5.45 1.6,3.6 4.3,3.2"
                fill="#e673fd"
            />
        </svg>
    );
}
export function BlueStarIcon() {
    return (
        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" aria-hidden="true">
            <polygon
                points="5.5,0.8 6.7,3.2 9.4,3.6 7.45,5.45 7.9,8.1 5.5,6.85 3.1,8.1 3.55,5.45 1.6,3.6 4.3,3.2"
                fill="#2b67d6"
            />
        </svg>
    );
}
// export function LightStarIcon() {
//     return (
//         <svg width="23" height="22" viewBox="0 0 23 22" fill="none" aria-hidden="true">
//             <polygon
//                 points="11.5,6.2 12.9,9.1 16.1,9.55 13.8,11.75 14.35,14.9 11.5,13.4 8.65,14.9 9.2,11.75 6.9,9.55 10.1,9.1"
//                 fill="#FFFFFF"
//                 opacity="0.45"
//             />
//             <polygon
//                 points="11.5,6.2 12.9,9.1 16.1,9.55 13.8,11.75 14.35,14.9 11.5,13.4 8.65,14.9 9.2,11.75 6.9,9.55 10.1,9.1"
//                 fill="#FBFBFC"
//             />
//         </svg>
//     );
// }
export function PendingAni({ active }: { active: boolean }) {
    return (
        <div className="relative inline-block">
            <motion.div
                className="absolute inset-0"
                animate={{
                    scale: active ? 2.2 : 1,
                    opacity: active ? 0.7 : 0,
                    filter: active ? "brightness(3) blur(2px)" : "brightness(1) blur(0px)",
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                <DarkStarIcon />
            </motion.div>

            <motion.div
                className="relative"
                animate={{
                    scale: active ? 1.5 : 1,
                    filter: active ? "brightness(2)" : "brightness(1)",
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                <DarkStarIcon />
            </motion.div>
        </div>
    );
}
export function ResultAni({ active, color }: { active: boolean; color: number }) {
    return (
        <div className="relative inline-block">
            <motion.div
                className="absolute inset-0"
                animate={{
                    scale: active ? 2.2 : 1,
                    opacity: active ? 0.7 : 0,
                    filter: active ? "brightness(3) blur(2px)" : "brightness(1) blur(0px)",
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                {color === 1 ? <BlueStarIcon /> : <PinkStarIcon />}
            </motion.div>

            <motion.div
                className="relative"
                animate={{
                    scale: active ? 1.5 : 1,
                    filter: active ? "brightness(2)" : "brightness(1)",
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                {color === 1 ? <BlueStarIcon /> : <PinkStarIcon />}
            </motion.div>
        </div>
    );
}

