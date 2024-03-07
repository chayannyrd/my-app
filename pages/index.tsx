import React, { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // nao tem logica aqui. esta apenas encaminho para a home
        router.push("/home");
    };

    return (
        <div
            className="min-h-screen flex items-center 
    justify-center bg-slate-500"
        >
            <div className="bg-white p-8 rounded-lg shadow-md">
                <Head>
                    <title>SGC - Sistema de Gestão de Congregação</title>
                </Head>
                <div className="flex items-center mb-4">
                    <img
                        src="https://static.vecteezy.com/ti/vetor-gratis/p1/20109992-sgc-plano-contabilidade-logotipo-projeto-em-branco-fundo-sgc-criativo-iniciais-crescimento-grafico-carta-logotipo-concept-sgc-o-negocio-financa-logotipo-projeto-vetor.jpg"
                        alt="Logo"
                        className="h-8 mr-2"
                    />
                    <h2 className="text-center text-2xl font-bold text-slate-800">
                        Login
                    </h2>
                </div>
                <form
                    className="space-y-6"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium
             text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 p-2 block w-full border-gray-300 
              rounded-md shadow-sm focus:ring-blue-500
               focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium
             text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 p-2 block w-full
               border-gray-300 rounded-md shadow-sm
                focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            onClick={handleLogin}
                            className="w-full flex justify-center 
              py-2 px-4 border border-transparent 
              rounded-md shadow-sm text-sm font-medium
               text-white bg-slate-800 hover:bg-slate-900 
               focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-blue-500"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
