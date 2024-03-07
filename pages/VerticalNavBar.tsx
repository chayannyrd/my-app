import React from "react";

function VerticalNavBar() {
    return (
        <div className="h-full bg-gray-800 text-white w-24 flex flex-col justify-between">
            <div className="py-4">
                <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                    Meu Perfil
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                    Minha Atividade
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                    Documentos
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                    Segurança
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                    Termos de Uso
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                    Privacidade
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                    Suporte
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                    Sair
                </a>
            </div>
        </div>
    );
}

export default VerticalNavBar;
