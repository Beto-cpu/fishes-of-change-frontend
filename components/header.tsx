import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png"

export default function Header() {
    return (
        <div className="w-full">
            <div className="w-full bg-gray-800 flex justify-center">
                <div className="max-w-7xl w-full mx-2">
                    <div className="flex flex-row justify-center sm:justify-start items-center py-2">
                        <Link href="/">
                            <a>
                                <div className="w-24 transform hover:scale-105">
                                    <Image src={logo} />
                                </div>
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="ml-3 text-white text-2xl font-bold hover:text-yellow-300 hover:scale-105 hidden sm:block">
                                Fishes Of Change
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full bg-blue-400 flex justify-center">
                <div className="flex justify-center sm:justify-end max-w-7xl w-full mx-2 py-2">
                    <ul className="flex flex-col sm:flex-row items-center space-x-5 text-white font-bold">
                        <li>
                            <Link href="/">
                                <a className="hover:text-yellow-300 hover:underline">Click The Oil</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a className="hover:text-yellow-300 hover:underline">Contacto</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a className="hover:text-yellow-300 hover:underline">Acerca de Nosotros</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}