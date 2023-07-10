export default function Tables(){
    return(
        <div className="flex justify-center pt-12 ">
            <div className="">
                <h1 className="bg-[#C2DEDC] h-[40px]  xl:w-[400px] sm:w-[50px] pt-10 pb-10 mb-10 pb-[40px] rounded-full text-center flex items-center justify-center mx-auto font-extrabold tracking-tight text-gray-700 lg:text-4xl">Jadwal Latihan Rutin</h1>
                <table className="xl:w-[800px] sm:w-[100px]  text-center text-black ">
                    <thead className="uppercase bg-[#9BA4B5]">
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
                        <tr className="border-b bg-[#F1F6F9] dark:border-gray-700">
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
                                Parkiran lantai 4
                            </td>
                        </tr>
                        <tr className=" border-b bg-[#F1F6F9] ">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Rabu
                            </th>
                            <td className="px-6 py-4">
                                16.00-18.00
                            </td>
                            <td className="px-6 py-4">
                                Teknik
                            </td>
                            <td className="px-6 py-4">
                                Parkiran lantai 4
                            </td>
                        </tr>
                        <tr className="bg-[#F1F6F9]">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                Sabtu
                            </th>
                            <td className="px-6 py-4">
                                09.00-12.00
                            </td>
                            <td className="px-6 py-4">
                                Fisik
                            </td>
                            <td className="px-6 py-4">
                                Lapangan Spirit
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}



