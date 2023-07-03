import Navbar from '../Components/Navbar'
import List from '../Components/List'
import Tables from '../Components/Tables';

function Jadwal(){
    return(

        <>
        <Navbar />
        <h1 className="pt-12 mb-4 text-4xl font-extrabold tracking-tight text-center text-gray-700 lg:text-4xl ">JADWAL LATIHAN RUTIN</h1>
        <div className='pt-10 ml-16 mr-16'>
        <Tables />
        </div>
        <div>
        <h1 className="pt-12 text-4xl font-extrabold tracking-tight text-center text-gray-700 lg:text-4xl ">Road Map Tournament</h1>
        <List />
        </div>
        </>

    );
}

export default Jadwal;