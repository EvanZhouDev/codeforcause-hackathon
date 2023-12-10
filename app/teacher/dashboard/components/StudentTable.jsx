import Icon from "@/components/Icon";
import { createClient } from "@/utils/supabase/client";
import toast from "react-hot-toast";

// import { getStudentData } from "../actions";
export default async function StudentTable({ classId }) {
	const client = createClient();
	const res = await client
		.from("students")
		.select("student (username, email)")
		.eq("class", classId);
	console.log("kayl", res.data[0].student, res, res.error);
	const data = res.data.map((x) => {
		return { email: x.student.email, name: x.student.username };
	});
	console.log(data);
	return (
		<div className="overflow-x-auto">
			<table className="table mt-5">
				{/* head */}
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Attendance History</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{data.map((student) => (
						<tr>
							<td>
								<div className="flex items-center gap-3">
									<div>
										<div className="font-bold">
											{student.name || "Not implemented"}
										</div>
									</div>
								</div>
							</td>
							<td>{student.email}</td>
							<td>{student?.attendence}</td>
							<th>
								<div className="flex">
									<button className="ml-2 btn btn-secondary">
										<Icon.Outlined
											className="w-4 h-4"
											name="InformationCircle"
										/>
									</button>
									<button
										className="ml-2 btn btn-secondary"
										onClick={() => {
											toast("hi");
										}}
									>
										<Icon.Outlined className="w-4 h-4" name="Trash" />
									</button>
								</div>
							</th>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
