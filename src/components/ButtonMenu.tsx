import React from "react";


type ButtonMenuProps = {
    icon: string;
    background: string;
    onClick: () => void;
    borderColor: string;
    borderWidth: string;
};



const ButtonMenu
    : React.FC<ButtonMenuProps> = ({
        icon,
        background,
        onClick,
    }) => {
        return (
            <button
                type="button"
                aria-label="menu button"
                onClick={onClick}
                style={{
                    background: "linear-gradient(135deg, #34596A 0%, #66AFD0 100%)",
                    cursor: "pointer",
                    padding: 0,
                }}
                className="relative flex h-6 w-6 items-center justify-center rounded-full p-[2px]"
            >
                {/* Background circle */}
                <div
                    className="absolute inset-[2px] rounded-full"
                    style={{
                        backgroundColor: background || "#2D1F76",
                    }}
                ></div>

                {/* Icon */}
                <img
                    src={icon}
                    alt="menu icon"
                    className="relative ml-[1px] mt-[1px] w-[15px] h-[15px] object-contain items-center"
                />
            </button>
        );
    };

export default ButtonMenu
    ;
