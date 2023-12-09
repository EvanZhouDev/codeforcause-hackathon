"use client";
import Icon from "@/components/Icon";
export default function NewClass() {
	return (
		<>
			<button
				className="btn btn-ghost"
				onClick={() => document.getElementById("my_modal_1").showModal()}
			>
				<Icon.Outlined name="User" onclick="my_modal_1.showModal()" />
				Create Classes
			</button>
			<dialog id="my_modal_1" className="modal">
				<div className="modal-box">
					<h3 className="font-bold text-lg">Create a Class</h3>
					<p className="py-4">
						First, name your class. Afterwards, go to Mange Students and hit
						Enroll Students to continue.
					</p>
					<div>
						<label className="label">
							<span className="text-base label-text">Class Name</span>
						</label>
						<input
							type="text"
							className="w-full input input-bordered border-primary form-input"
						/>
					</div>
					<p className="py-4 opacity-50">
						You can rename your class at any time. To make sure the name is
						unique, it is recommended to include your period.
					</p>
					<div className="modal-action">
						<form method="dialog">
							<button className="btn">Close</button>
							<button className="btn btn-primary ml-3">Create Class</button>
						</form>
					</div>
				</div>
			</dialog>
		</>
	);
}
