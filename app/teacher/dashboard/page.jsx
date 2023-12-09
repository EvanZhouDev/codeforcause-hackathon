import Icon from "@/components/Icon";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Index() {
	const cookieStore = cookies();
	const client = createClient(cookieStore);

	const { data: classes, error } = await client
		.from("classes")
		.select("name")
		.eq("admin", (await client.auth.getUser()).data.user.id);
	if (error) {
		console.log(error);
		return <p>An error occured</p>;
	}
    return (
        <div className="w-fill h-screen bg-secondary overflow-hidden">
            {/* class list and management */}
            {/* button to start the attendance page */}
            {/* class */}
            <div className="w-full flex flex-row justify-center h-full mt-[4vh]">
                <div className=" w-[48.5%] mr-[0.5%] h-[90vh]overflow-hidden">
                    <div role="tablist" className="tabs tabs-lifted">
                        <input type="radio" name="my_tabs_2" role="tab" className="tab min-w-[15vw]" aria-label="Manage Students" defaultChecked />
                        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                            <div className="min-h-[calc(90vh-78px)]">
                                <div className="flex">
                                    <select className="select select-bordered">
										<option disabled selected>
											Pick a class...
										</option>
										{classes.map((x) => (
											<option>{x.name}</option>
										))}
                                    </select>
                                    {/* <button className="ml-2 btn btn-ghost"><Icon.Solid name="AdjustmentsHorizontal" /></button> */}
                                </div>
                                <StudentTable />
                            </div>
                        </div>

                        <input type="radio" name="my_tabs_2" role="tab" className="tab min-w-[15vw]" aria-label="Manage Classes" />
                        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                            <div className="min-h-[calc(90vh-78px)]">
                                <ClassTable />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-base-100 outline outline-1 outline-[#CAC8C5] w-[48.5%] ml-[0.5%] h-[90vh] rounded-xl">
                    <button className="btn btn-shadow">Do Attendance</button>
                </div>
            </div>
        </div>
    );
}