"use client";
import Icon from "@/components/Icon";
import { useEffect, useState } from "react";
import ClassTable from "./ClassTable";
import StudentTable from "./StudentTable";
import RegisterStudent from "./RegisterStudent";

// import { createClass, getStudentData } from "../actions";
import NewClass from "./NewClass";
import { getStudentData } from "../actions";
import { createClient } from "@/utils/supabase/client";
export default function Dashboard({
	classes,
}: { classes: { name: string; id: string }[] }) {
	const supabase = createClient();
	const [selectedClass, setSelectedClass] = useState(classes[0].id);
	const [studentData, setStudentData] = useState([
		{
			email: "bob.joe@gmail.com",
			deleteMe: () => {
				console.log("Bob deleted");
			},
			attendence: "10/13 classes", // TODO and implement the status codes... get that constnats file
		},
	]);
	return (
		<div className="w-fill h-screen bg-secondary overflow-hidden">
			{/* class list and management */}
			{/* button to start the attendance page */}
			{/* class */}
			<div className="w-full flex flex-row justify-center h-full mt-[8.5vh]">
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
										onChange={async (event) => {
											console.log("asdfsdfsa");
											setSelectedClass(event.target.value);

											const client = createClient();
											const res = await client
												.from("students")
												.select("profiles (username)")
												.eq("class", event.target.value);
											console.log(res); // rls issues?
											setStudentData(res.data);
										}}
									>
										<option disabled defaultValue={""}>
											Pick a class...
										</option>
										{classes.map((x) => (
											<option value={x.id}>{x.name}</option>
										))}
									</select>
									<RegisterStudent />
								</div>
								<h1 className="website-title pt-5 !-pt-2">
									Students Registered in Class 1
								</h1>
								<StudentTable data={studentData} />
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
									<NewClass />
								</div>

								<ClassTable classes={classes} />
							</div>
						</div>
					</div>
				</div>
				<div className="bg-base-100 outline outline-1 outline-[#CAC8C5] w-[48.5%] ml-[0.5%] h-[90vh] rounded-xl">
					<a
						className="btn btn-shadow ml-[5%] h-[10%] w-[90%] !flex !flex-row !justify-center !items-center text-3xl mt-5"
						href={`/teacher/attendance?classId=${selectedClass}`}
					>
						<Icon.Outlined className="!w-10 !h-10" name="UserGroup" />
						Start Attendance
					</a>
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
