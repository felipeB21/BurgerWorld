import Image from "next/image";
import Link from "next/link";

const links = [
    {name: 'Menu', path: '#menu'},
    {name: 'Contact', path: 'contact'},
    {name: 'About', path: 'about'}
] 

export default function Header() {
  return (
    <header className="flex justify-between items-center py-2 font-medium">
        <div className="flex items-center gap-6">
        <Link className="mb-1" href="/">
            <Image className="w-auto h-auto" src="/hamburger.png" alt="BurgerWorld" width={210} height={90}/>
        </Link>
        <nav>
            <ul className="flex gap-4 mt-1">
                {links.map(lnk => (
                    <li key={lnk.path}>
                        <Link className="link-trans" href={lnk.path}>
                            {lnk.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
        </div>
        <div>
            <Link className="py-2 px-8 rounded-full border border-gray-300 hover:bg-gray-200 duration-200" href={''}>Sign in</Link>
        </div>
    </header>
  )
}
