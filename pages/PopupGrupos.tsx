import React from "react";

interface PopupGruposProps {
    onClose: () => void;
}

const PopupGrupos: React.FC<PopupGruposProps> = ({ onClose }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white rounded-md p-4">
                <h2 className="text-lg font-semibold mb-2 text-gray-900">
                    Grupos de Serviço de Campo
                </h2>
                <div className="mb-4">
                    {/* Espaço para lista (atualmente vazio) */}
                </div>
                <div className="flex justify-end">
                    <button
                        onClick={onClose}
                        className="mr-2 px-4 py-2 bg-gray-800 text-white rounded-md"
                    >
                        Fechar
                    </button>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                        Adicionar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PopupGrupos;
