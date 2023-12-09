"use client";
import Icon from "@/components/Icon";
import { useState } from "react";
import ClassTable from "./ClassTable";
import StudentTable from "./StudentTable";

export default async function Dashboard({
	classes,
}: { classes: { name: string }[] }) {
	const [selectedClass, setSelectedClass] = useState(classes[0]?.name);
	// const [studentData, setStudentData]
	return (
		<div className="w-fill h-screen bg-secondary overflow-hidden">
			{/* class list and management */}
			{/* button to start the attendance page */}
			{/* class */}
			<div className="w-full flex flex-row justify-center h-full mt-[4vh]">
				<div className=" w-[48.5%] mr-[0.5%] h-[90vh]overflow-hidden">
					<div role="tablist" className="tabs tabs-lifted">
						<input
							type="radio"
							name="my_tabs_2"
							role="tab"
							className="tab min-w-[15vw]"
							aria-label="Manage Students"
							defaultChecked
						/>
						<div
							role="tabpanel"
							className="tab-content bg-base-100 border-base-300 rounded-box p-6"
						>
							<div className="min-h-[calc(90vh-78px)]">
								<div className="flex justify-stretch">
									<select
										className="select select-bordered w-full"
										value={selectedClass}
										onChange={(event) => {
											setSelectedClass(event.target.value);
										}}
									>
										<option disabled selected>
											Pick a class...
										</option>
										{classes.map((x) => (
											<option>{x.name}</option>
										))}
									</select>
									<button className="ml-2 btn btn-ghost">
										<Icon.Outlined name="User" />
										Register Students
									</button>
								</div>
								<h1 className="website-title pt-5 !-pt-2">
									Students Registered in Class 1
								</h1>
								<StudentTable
									data={[
										{
											email: "bob.joe@gmail.com",
											deleteMe: () => {
												console.log("Bob deleted");
											},
											attendence: "10/13 classes", // TODO and implement the status codes... get that constnats file
										},
									]}
								/>
							</div>
						</div>
						<input
							type="radio"
							name="my_tabs_2"
							role="tab"
							className="tab min-w-[15vw]"
							aria-label="Manage Classes"
						/>
						<div
							role="tabpanel"
							className="tab-content bg-base-100 border-base-300 rounded-box p-6"
						>
							<div className="min-h-[calc(90vh-78px)]">
								<div className="flex flex-row justify-between items-center">
									<h1 className="website-title">All of Your Classes: </h1>
									<button className="ml-2 btn btn-ghost">
										<Icon.Outlined name="User" />
										Create Class
									</button>
								</div>

								<ClassTable />
							</div>
						</div>
					</div>
				</div>
				<div className="bg-base-100 outline outline-1 outline-[#CAC8C5] w-[48.5%] ml-[0.5%] h-[90vh] rounded-xl">
					<button className="btn btn-shadow ml-[5%] h-[10%] w-[90%] !flex !flex-row !justify-center !items-center text-3xl mt-5">
						<Icon.Outlined className="!w-10 !h-10" name="UserGroup" />
						Start Attendance
					</button>
					<div className="ml-[5%] mt-5">
						<h1 className="website-title !text-2xl !text-secondary-content">
							Configure Your Attendance Session:
						</h1>
						<label className="form-control w-full max-w-xs my-2">
							<div className="label">
								<span className="label-text">
									Session Length (Leave empty for indefinite)
								</span>
							</div>
							<input
								type="text"
								placeholder="Type here"
								className="input input-bordered w-full max-w-xs"
							/>
						</label>
						<label className="form-control w-full max-w-xs my-2">
							<div className="label">
								<span className="label-text">
									Session Timeout (Leave empty for indefinite)
								</span>
							</div>
							<input
								type="text"
								placeholder="Type here"
								className="input input-bordered w-full max-w-xs"
							/>
						</label>
						<label className="form-control w-full max-w-xs flex flex-row items-center my-2">
							<input
								type="checkbox"
								className="toggle"
								defaultChecked={false}
							/>
							<div className="label">
								<span className="label-text">
									Allow People Not in Class
									<br />
								</span>
							</div>
						</label>
					</div>
				</div>
			</div>
		</div>
	);
}
