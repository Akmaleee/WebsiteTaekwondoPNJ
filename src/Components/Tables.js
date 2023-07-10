export default function Tables(){
    return(
        <div className="flex justify-center pt-12 ">
            <div className="">
                <h1 className="bg-[#606C5D] h-[60px] xl:w-[400px] sm:w-[50px]  mb-10  rounded-full text-center flex items-center justify-center mx-auto font-extrabold tracking-tight shadow-xl text-[#F7FFE5] lg:text-4xl">Jadwal Latihan Rutin</h1>
                <table className=" xl:w-[800px] sm:w-[100px]  text-center ">
                    <thead className="uppercase bg-[#A4907C] text-[#FBFFDC]">
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



