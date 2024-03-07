import React from "react";

interface PopupTPLProps {
    onClose: () => void;
}

const PopupTPL = ({ onClose }: PopupTPLProps) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white rounded-md p-4">
                <h2 className="text-lg font-semibold mb-2">
                    Testemunho Público Local
                </h2>
                <p>
                    Conteúdo específico para o testemunho público local aqui...
                </p>
                <button
                    onClick={onClose}
                    className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md"
                >
                    Fechar
                </button>
            </div>
        </div>
    );
};

export default PopupTPL;
