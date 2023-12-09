import Icon from "@/components/Icon";
import { QRCodeSVG } from "qrcode.react";
export default async function Index() {
    return (
        <div className="w-fill h-screen bg-secondary overflow-hidden">
            {/* class list and management */}
            {/* button to start the attendance page */}
            {/* class */}
            {/* <h1 className="website-title !text-3xl">Attendance for Class 1</h1> */}
            <div className="w-full flex flex-row justify-center h-full mt-[4vh]">
                <div className="bg-base-100 outline outline-1 outline-[#CAC8C5] w-[48.5%] mr-[0.5%] h-[90vh] rounded-xl flex flex-col justify-around items-center">
                    <div className="flex flex-col items-center">
                        <p className="text-3xl mt-2 font text-primary mb-10">Scan code to mark attendance.</p>
                        <QRCodeSVG value="http://localhost:3000/join?code=hi" renderAs="svg" size="1000" className="w-3/5 h-min bg-black mb-5" />
                    </div>

                    <div className="flex flex-col items-center mb-5">
                        <p className="text-l text-secondary-content">Alternatively, join the class with the code:</p>
                        <h1 className="text-5xl mt-3 font-bold text-primary">123456</h1>
                    </div>
                </div>
                <div className="bg-base-100 outline outline-1 outline-[#CAC8C5] w-[48.5%] ml-[0.5%] h-[90vh] rounded-xl">
                    <div className="flex flex-row justify-between px-4 mt-4">
                        <h1 className="website-title !text-5xl">Students</h1>

                        <button className="btn btn-primary">End Session</button>
                    </div>
                    <div className="ml-[5%] stats w-[90%] shadow my-5">
                        <div className="stat">
                            <div className="stat-figure text-primary">
                                <Icon.Outlined className="w-10" name="UserGroup" />
                            </div>
                            <div className="stat-title">Count</div>
                            <div className="stat-value text-primary">13 students</div>
                            <div className="stat-desc">out of 25</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-primary">
                                <Icon.Outlined className="w-10" name="Clock" />
                            </div>
                            <div className="stat-title">Time Elapsed</div>
                            <div className="stat-value text-primary">3 minutes</div>
                            <div className="stat-desc">Ends in 13 minutes</div>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>Favorite Color</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <th>2</th>
                                    <td>Hart Hagerty</td>
                                    <td>Desktop Support Technician</td>
                                    <td>Purple</td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <th>3</th>
                                    <td>Brice Swyre</td>
                                    <td>Tax Accountant</td>
                                    <td>Red</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}