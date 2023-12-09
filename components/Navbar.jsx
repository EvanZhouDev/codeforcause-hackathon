"use client"
import Icon from "./Icon"
import { usePathname } from "next/navigation"

export default function Navbar() {
    const pathname = usePathname();
    let pathToData = {
        "/teacher/dashboard": {
            name: "Teacher Dashboard",
            icon: "ComputerDesktop",
        },
        "/teacher/attendance": {
            name: "Attendance",
            icon: "Clipboard",
        },
    };
    console.log(pathToData[pathname].icon)
    return (
        <div className="w-full navbar absolute bg-base-100 flex flex-row justify-between">
            <div className="website-title !m-0 w-[20%]">Project CH20</div>
            <div className="bg-secondary p-4 rounded-full">
                <Icon.Outlined className="!w-5 !h-5 !stroke-[2px] mx-2" name={pathToData[pathname].icon} />
                {pathToData[pathname].name}
            </div>
            <div className="w-[20%] flex justify-end">
                <Icon.Outlined className="!w-10 !h-10 !stroke-[1.5px] mx-2" name="Moon" />
                <Icon.Outlined className="!w-10 !h-10 !stroke-[1.5px] mx-2" name="InformationCircle" />
            </div>
        </div>
    )
}