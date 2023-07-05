export default function Tables(){
    return(
        <div className="flex justify-center pt-6 ">
            <div className="relative overflow-x-auto">
                <h1 className="pt-12 mb-4 pb-[40px]  font-extrabold tracking-tight text-center text-gray-700 lg:text-4xl">JADWAL LATIHAN RUTIN</h1>
                <table className="w-[1000px] text-center text-gray-500 dark:text-gray-400">
                    <thead className="uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Practice Day
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Time of Activity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Location
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                Senin
                            </th>
                            <td className="px-6 py-4">
                                16.00-18.00
                            </td>
                            <td className="px-6 py-4">
                                Teknik
                            </td>
                            <td className="px-6 py-4">
                                Parkiran lantai 100
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Rabu
                            </th>
                            <td className="px-6 py-4">
                                16.00-17.30
                            </td>
                            <td className="px-6 py-4">
                                Fisik
                            </td>
                            <td className="px-6 py-4">
                                Kantin Teknik
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                Jumat
                            </th>
                            <td className="px-6 py-4">
                                00.00 - 03.00
                            </td>
                            <td className="px-6 py-4">
                                Mental
                            </td>
                            <td className="px-6 py-4">
                                Kuburan
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}



