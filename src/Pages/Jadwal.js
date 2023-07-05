import Navbar from '../Components/Navbar'
import List from '../Components/List'
import Tables from '../Components/Tables';

function Jadwal(){
    return(

        <>
        <Navbar />
        <div className="relative">
          <img src="images/bg7.png" alt="Foto" className="w-full " />
          <div className="absolute top-0 left-0 right-0 bottom-0">
        <Tables />
        
        <List />
        </div>
        </div>
      
        </>

    );
}

export default Jadwal;