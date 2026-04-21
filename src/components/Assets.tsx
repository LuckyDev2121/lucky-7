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


// <AnimatePresence>
//     <div className="absolute inset-0 z-30 pointer-events-none">
//         <svg className="" width="600" height="400">
//             {/* background path */}
//             <path
//                 d="M30 35 L60 35 L255 185 L280 185"
//                 stroke="none"
//                 strokeWidth="10"
//                 fill="transparent"
//             />

//             {/* animated progress */}
//             <motion.path
//                 d="M30 35 L60 35 L255 185 L280 185"
//                 stroke="rgba(255, 220, 0, 0.8)"
//                 strokeWidth="10"
//                 fill="transparent"
//                 strokeDasharray="500"
//                 initial={{ strokeDashoffset: 500 }}
//                 animate={{ strokeDashoffset: 0 }}
//                 transition={{ duration: 3, ease: "linear" }}
//             />
//             <motion.path
//                 d="M30 35 L60 35 L255 185 L280 185"
//                 stroke="rgba(255,255,255,1)"
//                 strokeWidth="3"
//                 fill="transparent"
//                 strokeDasharray="500"
//                 initial={{ strokeDashoffset: 500 }}
//                 animate={{ strokeDashoffset: 0 }}
//                 transition={{ duration: 3, ease: "linear" }}
//                 style={{ filter: "blur(2px)", }}
//             />
//         </svg>
//     </div>
//     <div className="absolute inset-0 z-30 pointer-events-none">
//         <svg className="" width="600" height="400">
//             {/* background path */}
//             <path
//                 d="M30 185 L60 185 L250 35 L280 35"
//                 stroke="none"
//                 strokeWidth="10"
//                 fill="transparent"
//             />

//             {/* animated progress */}
//             <motion.path
//                 d="M30 185 L60 185 L250 35 L280 35"
//                 stroke="rgba(180, 80, 255, 0.8)"
//                 strokeWidth="10"
//                 fill="transparent"
//                 strokeDasharray="500"
//                 initial={{ strokeDashoffset: 500 }}
//                 animate={{ strokeDashoffset: 0 }}
//                 transition={{ duration: 3, ease: "linear" }}
//             />
//             <motion.path
//                 d="M30 185 L60 185 L250 35 L280 35"
//                 stroke="rgba(255,255,255,1)"
//                 strokeWidth="4"
//                 fill="transparent"
//                 strokeDasharray="500"
//                 initial={{ strokeDashoffset: 500 }}
//                 animate={{ strokeDashoffset: 0 }}
//                 transition={{ duration: 3, ease: "linear" }}
//                 style={{ filter: "blur(2px)", }}
//             />
//         </svg>
//     </div>
//     <div className="absolute inset-0 z-30 pointer-events-none">
//         <svg className="" width="600" height="400">
//             {/* background path */}
//             <path
//                 d="M30 40 L280 40"
//                 stroke="none"
//                 strokeWidth="10"
//                 fill="transparent"
//             />

//             {/* animated progress */}
//             <motion.path
//                 d="M30 40 L280 40"
//                 stroke="rgba(0, 150, 255, 0.8)"
//                 strokeWidth="10"
//                 fill="transparent"
//                 strokeDasharray="500"
//                 initial={{ strokeDashoffset: 500 }}
//                 animate={{ strokeDashoffset: 0 }}
//                 transition={{ duration: 3, ease: "linear" }}
//             />
//             <motion.path
//                 d="M30 40 L280 40"
//                 stroke="rgba(255,255,255,1)"
//                 strokeWidth="4"
//                 fill="transparent"
//                 strokeDasharray="500"
//                 initial={{ strokeDashoffset: 500 }}
//                 animate={{ strokeDashoffset: 0 }}
//                 transition={{ duration: 3, ease: "linear" }}
//                 style={{ filter: "blur(2px)", }}
//             />
//         </svg>
//     </div>
//     <div className="absolute inset-0 z-30 pointer-events-none">
//         <svg className="" width="600" height="400">
//             {/* background path */}
//             <path
//                 d="M30 140 L280 140"
//                 stroke="none"
//                 strokeWidth="10"
//                 fill="transparent"
//             />

//             {/* animated progress */}
//             <motion.path
//                 d="M30 110 L280 110"
//                 stroke="rgba(255, 60, 60, 0.8)"
//                 strokeWidth="10"
//                 fill="transparent"
//                 strokeDasharray="500"
//                 initial={{ strokeDashoffset: 500 }}
//                 animate={{ strokeDashoffset: 0 }}
//                 transition={{ duration: 3, ease: "linear" }}
//             />
//             <motion.path
//                 d="M30 110 L280 110"
//                 stroke="rgba(255,255,255,1)"
//                 strokeWidth="4"
//                 fill="transparent"
//                 strokeDasharray="500"
//                 initial={{ strokeDashoffset: 500 }}
//                 animate={{ strokeDashoffset: 0 }}
//                 transition={{ duration: 3, ease: "linear" }}
//                 style={{ filter: "blur(2px)", }}
//             />
//         </svg>
//     </div>
//     <div className="absolute inset-0 z-30 pointer-events-none">
//         <svg className="" width="600" height="400">
//             {/* background path */}
//             <path
//                 d="M30 180 L280 180"
//                 stroke="none"
//                 strokeWidth="10"
//                 fill="transparent"
//             />

//             {/* animated progress */}
//             <motion.path
//                 d="M30 180 L280 180"
//                 stroke="rgba(0,255,0,0.8)"
//                 strokeWidth="10"
//                 fill="transparent"
//                 strokeDasharray="500"
//                 initial={{ strokeDashoffset: 500 }}
//                 animate={{ strokeDashoffset: 0 }}
//                 transition={{ duration: 3, ease: "linear" }}
//             />
//             <motion.path
//                 d="M30 180 L280 180"
//                 stroke="rgba(255,255,255,1)"
//                 strokeWidth="4"
//                 fill="transparent"
//                 strokeDasharray="500"
//                 initial={{ strokeDashoffset: 500 }}
//                 animate={{ strokeDashoffset: 0 }}
//                 transition={{ duration: 3, ease: "linear" }}
//                 style={{ filter: "blur(2px)", }}
//             />
//         </svg>
//     </div>
// </AnimatePresence>

// const lights = [59, 139, 154, 236, 255, 331];
// {
//     lights.map((left,) => (
//         <AnimatePresence>
//             <motion.div
//                 className="absolute w-[5px] h-[60px] rounded-full"
//                 initial={{ y: 140, opacity: 0 }}
//                 animate={{ y: 460, opacity: 1 }}
//                 transition={{
//                     duration: 1.6,
//                     ease: "linear",
//                     repeat: Infinity,
//                 }}
//                 style={{
//                     background: "linear-gradient(to bottom, transparent, white, transparent)",
//                     filter: "blur(1px)",
//                     left: `${left}px`
//                 }}
//             />
//             <motion.div
//                 className="absolute w-[5px] h-[10px] my-[25px] rounded-full"
//                 initial={{ y: 140, opacity: 0 }}
//                 animate={{ y: 460, opacity: 1 }}
//                 transition={{
//                     duration: 1.6,
//                     ease: "linear",
//                     repeat: Infinity,
//                 }}
//                 style={{
//                     background: "white",
//                     filter: "blur(2px)",
//                     left: `${left}px`
//                 }}
//             />
//         </AnimatePresence>
//     ))
// }

// import coin1 from "../assets/coin1.svg"
// import coin2 from "../assets/coin2.svg"
// const duration = [0.9, 0.9, 1.1, 1.2, 1.1,
//     0.9, 0.8, 0.7, 1.2, 1.3,];
// const rotateX = [360, 326, 360, 326, 297,
//     110, 38, 10, 320, 194];
// const rotateY = [310, 310, 0, 1, 110,
//     17, 24, 10, 31, 90,];
// const rotateZ = [211, 100, 3, 0, 0,
//     0, 1, 4, 35, 20];
// const positionYStart = [70, 68, 70, 70, 69,
//     67, 69, 66, 60, 73];
// const positionYMiddle = [12, 10, 8, 7, 9,
//     7, 12, 14, 15, 21];
// const positionYEnd = [110, 120, 130, 128, 125,
//     110, 120, 113, 124, 125];
// const positionXStart = [0, -3, -7, -10, -20,
//     12, 8, -2, 10, 6];
// const positionXMiddle = [10, -20, -15, -26, -21,
//     21, 12, -39, 30, 18];
// const positionXEnd = [16, -28, -21, -38, -29,
//     24, 19, -43, 35, 24];

// const duration1 = [2.5, 0.9, 1.4, 1.6, 1.7,
//     0.9, 0.8, 0.7, 1.2, 1.3,];
// const rotateX1 = [297, 326, 360, 326, 360,
//     110, 38, 10, 320, 194];
// const rotateY1 = [178, 384, 330, 221, 110,
//     143, 44, 10, 31, 90,];
// const rotateZ1 = [211, 100, 3, 300, 290,
//     47, 2, 234, 315, 230];
// const positionYStart1 = [74, 68, 70, 70, 69,
//     67, 69, 66, 70, 68];
// const positionYMiddle1 = [15, 8, 5, 7, 9,
//     7, 12, 14, 15, 21];
// const positionYEnd1 = [110, 120, 130, 128, 125,
//     130, 110, 120, 113, 124,];
// const positionXStart1 = [0, -3, -9, -10, -30,
//     12, 8, -2, 10, 6];
// const positionXMiddle1 = [28, -24, -27, -10, -9,
//     12, 28, -39, 30, 18];
// const positionXEnd1 = [49, -49, -44, -50, -28,
//     34, 34, -43, 45, 34];

// {
//     duration.map((index, i) => (<motion.img
//         key={i}
//         src={coin1}
//         className="absolute w-10 h-10 left-1/2 -translate-x-1/2"
//         animate={{
//             x: [positionXStart[i], positionXMiddle[i], positionXEnd[i]],
//             y: [positionYStart[i], positionYMiddle[i], positionYEnd[i]],   // rise then drop
//             rotateX: [0, rotateX[i]],
//             rotateY: [0, rotateY[i]],
//             rotateZ: [0, rotateZ[i]],    // spin
//         }}
//         transition={{
//             duration: index,
//             ease: "easeInOut",
//             repeat: Infinity,
//         }}
//     />))
// }
// {
//     duration1.map((index, i) => (<motion.img
//         key={i}
//         src={coin2}
//         className="absolute w-10 h-10 left-1/2 -translate-x-1/2"
//         animate={{
//             x: [positionXStart1[i], positionXMiddle1[i], positionXEnd1[i]],
//             y: [positionYStart1[i], positionYMiddle1[i], positionYEnd1[i]],   // rise then drop
//             rotateX: [0, rotateX1[i]],
//             rotateY: [0, rotateY1[i]],
//             rotateZ: [0, rotateZ1[i]],    // spin
//         }}
//         transition={{
//             duration: index,
//             ease: "easeInOut",
//             repeat: Infinity,
//         }}
//     />))
// }





// const duration = [0.9, 0.9, 1.1, 1.2, 1.1,
//     0.9, 0.8, 0.7, 1.5, 1.3,
//     0.9, 0.9, 1.5, 1.2, 1.1,
//     0.9, 1.8, 0.9, 1.2, 1.3,];
// const rotateX = [360, 326, 360, 326, 297,
//     110, 38, 10, 320, 194,
//     360, 326, 360, 326, 297,
//     110, 38, 10, 320, 194];
// const rotateY = [310, 310, 0, 1, 110,
//     17, 24, 10, 31, 90,
//     360, 326, 360, 326, 297,
//     110, 38, 10, 320, 194];
// const rotateZ = [211, 100, 3, 0, 0,
//     0, 1, 4, 35, 20,
//     360, 326, 360, 326, 297,
//     110, 38, 10, 320, 194];
// const positionYStart = [52, 50, 58, 37, 79,
//     37, 42, 24, 55, 71,
//     15, 16, 81, 61, 95,
//     64, 28, 59, 26, 94,];
// const positionYMiddle = [40, 88, 40, 70, 39,
//     47, 89, 56, 30, 73,
//     54, 84, 54, 71, 48,
//     16, 46, 51, 95, 73];
// const positionYEnd = [210, 220, 230, 228, 225,
//     210, 220, 213, 224, 225,
//     210, 220, 230, 228, 225,
//     210, 220, 213, 224, 225];
// const positionXStart = [-200, -200, -200, -200, -200,
// -200, -200, -200, -200, -200,
// -200, -200, -200, -200, -200,
// -200, -200, -200, -200, -200];
// const positionXMiddle = [-42, -80, -35, -46, -61,
// -21, -62, -79, -20, -78,
// -54, -35, -87, -38, -7,
// -35, -85, -75, -75, -65,];
// const positionXEnd = [76, 68, 91, 68, 59,
//     74, 59, 63, 85, 74,
//     78, 84, 91, 75, 45,
//     19, 34, 84, 98, 56,];

// const duration1 = [2.5, 0.9, 1.4, 1.6, 1.7,
//     0.9, 0.8, 0.7, 1.2, 1.3,
//     2.5, 0.9, 1.4, 1.3, 1.7,
//     0.9, 0.8, 1.7, 1.8, 1.3,];
// const rotateX1 = [297, 326, 360, 326, 360,
//     110, 38, 10, 320, 194,
//     178, 384, 330, 221, 110,
//     143, 44, 10, 31, 90,];
// const rotateY1 = [178, 384, 330, 221, 110,
//     143, 44, 10, 31, 90,
//     297, 326, 360, 326, 360,
//     110, 38, 10, 320, 194,];
// const rotateZ1 = [211, 100, 3, 300, 290,
//     47, 2, 234, 315, 230,
//     297, 326, 360, 326, 360,
//     110, 38, 10, 320, 194,];
// const positionYStart1 = [54, 28, 70, 10, 49,
//     47, 59, 86, 50, 58,
//     12, 48, 65, 49, 15,
//     75, 61, 54, 56, 98];
// const positionYMiddle1 = [15, 8, 5, 7, 9,
//     7, 12, 74, 85, 21,
//     15, 54, 15, 64, 76,
//     24, 28, 46, 84, 26];
// const positionYEnd1 = [210, 220, 230, 228, 225,
//     230, 210, 220, 213, 224,
//     210, 220, 230, 228, 225,
//     230, 210, 220, 213, 224,];
// const positionXStart1 = [200, 200, 200, 200, 200,
//     200, 200, 200, 200, 200,
//     200, 200, 200, 200, 200,
//     200, 200, 200, 200, 200];
// const positionXMiddle1 = [98, 24, 67, 60, 39,
//     82, 98, 19, 70, 68,
//     45, 65, 18, 59, 25,
//     48, 95, 35, 68, 95,];
// const positionXEnd1 = [-149, -129, -144, -150, -28,
// -34, -34, -43, -145, -34,
// -45, -52, -47, -82, -46,
// -47, -57, -51, -67, -63,];