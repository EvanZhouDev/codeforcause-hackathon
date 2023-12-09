"use client";
import { usePathname } from "next/navigation";
import Icon from "./Icon";

export default function Navbar() {
	const pathname = usePathname();
	const pathToData = {
		"/teacher/dashboard": {
			name: "Teacher Dashboard",
			icon: "ComputerDesktop",
		},
		"/teacher/attendance": {
			name: "Attendance",
			icon: "Clipboard",
		},
		"/": {
			name: "Main Page",
			icon: "Clipboard",
		},
	};
	return (
		<div className="w-full navbar absolute bg-base-100 flex flex-row justify-between h-[5%]">
			<div className="website-title !m-0 w-[20%]">Project CH20</div>
			<div className="bg-secondary p-3 rounded-full">
				<Icon.Outlined
					className="!w-5 !h-5 !stroke-[2px] mx-2"
					name={pathToData[pathname].icon}
				/>
				{pathToData[pathname].name}
			</div>
			<div className="w-[20%] flex justify-end">
				<Icon.Outlined
					className="!w-10 !h-10 !stroke-[1.5px] mx-2"
					name="Moon"
				/>
				<Icon.Outlined
					className="!w-10 !h-10 !stroke-[1.5px] mx-2"
					name="InformationCircle"
				/>
			</div>
		</div>
	);
}
