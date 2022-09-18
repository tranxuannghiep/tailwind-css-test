
export interface NavItemProps {
    label: string;
    icon: JSX.Element;
    active?: boolean;
}

export default function NavItem({ label, icon, active }: NavItemProps) {
    return (
        <li className={`flex items-center justify-end p-2 cursor-pointer ${active ? 'bg-primary text-white' : ''}`}>
            <h3 className="mr-2">{label}</h3>
            {icon}
        </li>
    );
}
