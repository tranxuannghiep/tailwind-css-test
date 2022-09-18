import { useState } from "react";
import { BiHomeAlt, BiMoviePlay, BiInfoCircle, BiMenu } from "react-icons/bi";
import NavItem from "./NavItem";

export interface NavProps {
}


const items = [
    { label: 'Home', icon: <BiHomeAlt size="1.875rem" />, active: true },
    { label: 'Movie', icon: <BiMoviePlay size="1.875rem" /> },
    { label: 'About', icon: <BiInfoCircle size="1.875rem" /> },
]

export default function Nav(props: NavProps) {
    const [isNavMenuMobileOpen, setIsNavMenuMobileOpen] = useState(false)
    return (
        <nav className='col-span-1 bg-cyan-200'>
            <div className='flex justify-between items-center mx-4 md:block'>
                <h4 className='uppercase font-bold text-primary py-4 border-b border-primary text-right'>Phimmoi.net</h4>
                <BiMenu className="cursor-pointer md:hidden" fontSize="1.875rem" onClick={() => setIsNavMenuMobileOpen(!isNavMenuMobileOpen)} />
            </div>
            <ul className={`mx-4 my-2 ${isNavMenuMobileOpen ? "block" : 'hidden'} md:block`}>
                {items.map(item => (<NavItem key={item.label} label={item.label} icon={item.icon} active={item.active} />))}
            </ul>
        </nav>
    );
}
