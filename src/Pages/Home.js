import Navbar from '../Components/Navbar'
import Text from '../Components/Text'
import Heading from '../Components/Heading'
import Button from '../Components/Button'

function Home() {
    return (
      <div className="h-screen overflow-hidden">
        <Navbar />
        <div className="relative">
          <img src="images/bg4.png" alt="Foto" className="w-full h-auto" />
          <div className="absolute top-0 left-0 right-0 bottom-0">
            <Heading />
            <hr className="border-t-2 border-gray-400" />
            <Text />
            <div className="flex items-center justify-center pt-14">
              <Button />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  








// function Home(){
//     return(

//         <div>
//         <Navbar />
//         <div >
//         <img src="images/bg2.png" alt="Foto" class="w-full h-auto relative"/>
//         <Heading />
//         <hr className="border-t-2 border-gray-400"/>
//         <Text />
//         <div className="flex items-center justify-center pt-14">
//             <Button />
//         </div>
    
//         </div>

//         </div>

//     );
// }

// export default Home;