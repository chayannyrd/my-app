import React from "react";

const NavBar = () => {
    return (
        <nav className="bg-white p-1 flex justify-between items-center">
            <div className="flex items-center">
                <img
                    src="https://static.vecteezy.com/ti/vetor-gratis/p1/20109992-sgc-plano-contabilidade-logotipo-projeto-em-branco-fundo-sgc-criativo-iniciais-crescimento-grafico-carta-logotipo-concept-sgc-o-negocio-financa-logotipo-projeto-vetor.jpg"
                    alt="Logo"
                    className="h-8"
                    mr-2s
                />
                <span className="text-slate-800 font-bold">Página Inicial</span>
            </div>
            {/* Aqui você pode adicionar outros elementos do menu, como links para outras páginas */}
        </nav>
    );
};

export default NavBar;
