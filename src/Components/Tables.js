export default function Tables(){
    return(

        
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Practice Day
                </th>
                <th scope="col" class="px-6 py-3">
                    time of activity
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Location
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Senin
                </th>
                <td class="px-6 py-4">
                    16.00-18.00
                </td>
                <td class="px-6 py-4">
                    Teknik
                </td>
                <td class="px-6 py-4">
                    Parkiran lantai 100
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Rabu
                </th>
                <td class="px-6 py-4">
                    16.00-17.30
                </td>
                <td class="px-6 py-4">
                    Fisik
                </td>
                <td class="px-6 py-4">
                    Kantin Teknik
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Jumat
                </th>
                <td class="px-6 py-4">
                    00.00 - 03.00
                </td>
                <td class="px-6 py-4">
                    Mental
                </td>
                <td class="px-6 py-4">
                    Kuburan
                </td>
            </tr>
        </tbody>
    </table>
</div>



    );
}