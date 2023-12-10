'use client'

import Icon from "@/components/Icon"
import { useSearchParams } from 'next/navigation'

export default function Page() {
    const searchParams = useSearchParams();
    console.log(searchParams);
    return (
        <div className="hero min-h-screen bg-neutral">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">You're all done.</h1>
                    <p className="mt-5">Joined with code "{searchParams.get("code")}"</p>
                    <p className="py-6 max-w">
                        Not actually here? Select a reason and change your status.
                    </p>
                    <div className="flex flex-col justify-stretch">
                        <select
                            className="select select-bordered w-full"
                        // value={selectedClass}
                        // onChange={(event) => {
                        //     // setSelectedClass(event.target.value);
                        // }}
                        >
                            <option disabled selected>
                                Pick a reason for absence...
                            </option>
                            <option>Doctor's Appointment</option>
                            <option>Family Issues</option>
                            <option>Busy With Other Clubs</option>
                            <option>Homework</option>
                            <option>Other</option>
                        </select>
                        <button className="ml-2 mt-5 btn btn-filled">
                            <Icon.Outlined name="ArrowRightOnRectangle" />
                            Mark me as absent
                        </button>
                        <p className="py-6 max-w opacity-50">
                            It is safe to close this tab.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}