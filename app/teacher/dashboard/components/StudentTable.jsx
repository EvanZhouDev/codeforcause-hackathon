import Icon from "@/components/Icon"
export default function StudentTable() {
    let data = {

    }
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
                    {/* row 1 */}
                    <tr>
                        <td>
                            <div className="flex items-center gap-3">
                                <div>
                                    <div className="font-bold">Billy Bob Joe</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            bob.joe@gmail.com
                        </td>
                        <td>10/13 classes</td>
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