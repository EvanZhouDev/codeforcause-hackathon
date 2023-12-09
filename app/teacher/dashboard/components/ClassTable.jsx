import Icon from "@/components/Icon"
export default function ClassTable() {
    let data = {

    }
    return (
        <div className="overflow-x-auto">
            <table className="table mt-5">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Student Count</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="flex items-center gap-3">
                                <div>
                                    <div className="font-bold">English 1A</div>
                                </div>
                            </div>
                        </td>
                        <td>10/13</td>
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