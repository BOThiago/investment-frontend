"use client";
import { LoginContainer } from "../../../components/LoginContainer";
import { LinkComponent } from "../../../components/Link";
import { useState } from "react";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { Form } from "../../../components/Form";
import { Logo } from "../../../components/Logo";
import GoogleSigninButton from "../../../components/GoogleSigninButton";
import ThemeSwitch from "../../../components/ThemeSwitch";
// import axios from "axios";

export default function Signup() {
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    // const createAccount = async () => {
    //     if (email && name && password) {
    //         try {
    //             axios.post(`http://localhost:5500/users`, {
    //                 email,
    //                 name,
    //                 password,
    //             });
    //         } catch (err) {
    //             console.error(err);
    //         }
    //     }
    // };

    return (
        // Se usuario estiver logado nao faz sentido entrar nessa tela também
        <LoginContainer>
            <Form>
                <div className="relative flex items-center justify-center flex-col gap-6 lg:gap-4 w-full mt-6 lg:mt-2">
                    <Logo />

                    <h1 className="text-3xl font-bold text-center text-black">
                        Cadastre-se
                    </h1>
                </div>

                <Input
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    value={email}
                    title="Email"
                    type="email"
                />
                <Input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setName(e.target.value);
                    }}
                    value={name}
                    title="Nome"
                    type="name"
                />
                <Input
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    value={password}
                    title="Senha"
                    type="password"
                />

                <LinkComponent title="Esqueceu sua senha?" href="/forget" />

                <Button
                    onClick={() => console.log("Clique cadastro")}
                    title="Cadastrar-se"
                />

                <div className="relative flex items-center justify-center w-full mt-10 lg:mt-6 border border-t">
                    <div className="absolute font-normal px-2 text-black bg-gray-300 border-2 border-t rounded-md focus:ring-2 focus:ring-offset-1">
                        Cadastre-se via Google
                    </div>
                </div>

                <GoogleSigninButton />

                <p className="mt-4 lg:mt-2 text-sm text-center text-black">
                    Já possui uma conta?{" "}
                    <LinkComponent title="Entre" href="/" />
                </p>
            </Form>
            <ThemeSwitch />
        </LoginContainer>
    );
}
