import Icon from "@/components/Icon"
export default function StudentTable() {
    let data = {

    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center gap-3">
                                <div>
                                    <div className="font-bold">Yancy Tear</div>
                                    <div className="text-sm opacity-50">Brazil</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Wyman-Ledner
                            <br />
                            <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                        </td>
                        <td>Indigo</td>
                        <th>
                            <div className="flex">
                                <button className="ml-2 btn btn-secondary"><Icon.Outlined className="w-4 h-4" name="InformationCircle" /></button>
                                <button className="ml-2 btn btn-secondary"><Icon.Outlined className="w-4 h-4" name="Trash" /></button>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center gap-3">
                                <div>
                                    <div className="font-bold">Yancy Tear</div>
                                    <div className="text-sm opacity-50">Brazil</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Wyman-Ledner
                            <br />
                            <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                        </td>
                        <td>Indigo</td>
                        <th>
                            <div className="flex">
                                <button className="ml-2 btn btn-secondary"><Icon.Outlined className="w-4 h-4" name="InformationCircle" /></button>
                                <button className="ml-2 btn btn-secondary"><Icon.Outlined className="w-4 h-4" name="Trash" /></button>
                            </div>
                        </th>
                    </tr>
                    {/* row 4 */}
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center gap-3">
                                <div>
                                    <div className="font-bold">Yancy Tear</div>
                                    <div className="text-sm opacity-50">Brazil</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Wyman-Ledner
                            <br />
                            <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                        </td>
                        <td>Indigo</td>
                        <th>
                            <div className="flex">
                                <button className="ml-2 btn btn-secondary"><Icon.Outlined className="w-4 h-4" name="InformationCircle" /></button>
                                <button className="ml-2 btn btn-secondary"><Icon.Outlined className="w-4 h-4" name="Trash" /></button>
                            </div>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}