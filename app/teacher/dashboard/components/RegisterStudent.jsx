"use client";
import { QRCodeSVG } from "qrcode.react";
import StudentTable from "./StudentTable";
import Icon from "@/components/Icon";

export default function RegisterStudent() {
    return (
        <>
            <button className="ml-2 btn btn-ghost" onClick={() => document.getElementById("my_modal_1").showModal()}>
                <Icon.Outlined name="User" />
                Register Students
            </button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box bg-secondary min-w-[90vw]">
                    <div class="flex w-full">
                        <div class="flex h-[75vh] w-[30vw] flex-grow card bg-neutral rounded-box place-items-center flex-col items-center justify-center">
                            <p className="text-3xl mt-2 font text-primary mb-10">
                                Scan code to join the class.
                            </p>
                            <QRCodeSVG
                                value="http://localhost:3000/joinClass?code=1234"
                                renderAs="svg"
                                size="1000"
                                className="w-3/5 h-min bg-black mb-5"
                            />
                            <div className="flex flex-col items-center opacity-50 mb-5 text-center text-lg px-10">
                                For a fast and easy setup, have students scan your code to link them to your class.
                            </div>
                        </div>
                        <div class="divider divider-horizontal">OR</div>
                        <div class="flex h-[75vh] w-[30vw] flex-grow card bg-neutral rounded-box place-items-center">
                            <div className="flex justify-stretch w-full items-center p-10">
                                <label className="label">
                                    <span className="text-base label-text">Student Email: </span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full input input-bordered border-primary form-input"
                                />
                                <button className="btn ml-3 btn-filled">
                                    Add Student
                                </button>
                            </div>
                            <StudentTable data={[
                                {
                                    email: "bob.joe@gmail.com",
                                    deleteMe: () => {
                                        console.log("Bob deleted");
                                    },
                                    attendence: "10/13 classes", // TODO and implement the status codes... get that constnats file
                                },
                            ]} />
                        </div>

                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn btn-ghost">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
}
