
export default function Profile2() {
    return (
      <div className=" h-auto sm:h-screen flex-col my-7 p-7 shadow-xl min-w-[200px] flex mx-auto flex-wrap">
          <div className="max-w-sm min-w-[200px] bg-white rounded-xl shadow-2x1 p-14 md:p-4 sm:p-3 mx-auto my-14  shadow-xl  max-w-[60vw] flex-col justify-center">
              <img src="images/salma.jpg" alt="image" className=" rounded-t-xl "/>
              <h2 className="font-bold text-lg my-2 mx-4 hover:cursor-default">Salma Kamila - DAN 8</h2>
              <p className="font-medium text-sm my-4 mx-4 hover:cursor-default">
              Salma Kamila sekarang adalah salah satu anggota di taekwondo pnj yang berasal dari jurusan Teknik Informatika. diusianya yang masih sangat muda dia sudah menorehkan kemenangan dibeberapa kejuaraan internasional.
              </p>
              <button className="bg-blue-600 text-white font-bold px-4 py-1 mx-4 rounded-md my-2 hover:bg-blue-700 hover:scale-105 duration-300 mb-8">Detail</button>
          </div>
  
          <div className="max-w-sm min-w-[200px] bg-white rounded-xl shadow-2x1 p-14 md:p-4 sm:p-3 mx-auto my-14  shadow-xl  max-w-[60vw] flex-col justify-center">
              <img src="images/akmal.jpg" alt="image" className=" rounded-t-xl "/>
              <h2 className="font-bold text-lg my-2 mx-4 hover:cursor-default">Akmal Nur Wahid - DAN 9</h2>
              <p className="font-medium text-sm my-4 mx-4 hover:cursor-default">
              Akmal adalah anggota yang berasal dari jurusan Teknik Informatika.hanya sedikit kemenangan yang dia menorehkan pada turnamen yang dia ikuti. pencapaian terbesarnya saat ini adalah memenangkan kejuaraan antar RT/RW.
              </p>
              <button className="bg-blue-600 text-white font-bold px-4 py-1 mx-4 rounded-md my-2 hover:bg-blue-700 hover:scale-105 duration-300 mb-8">Detail</button>
          </div>
  
          <div className="max-w-sm min-w-[200px] bg-white rounded-xl shadow-2x1 p-14 md:p-4 sm:p-3 mx-auto my-14  shadow-xl  max-w-[60vw] flex-col justify-center">
              <img src="images/akmal.jpg" alt="image" className=" rounded-t-xl "/>
              <h2 className="font-bold text-lg my-2 mx-4 hover:cursor-default">Abdul</h2>
              <p className="font-medium text-sm my-4 mx-4 hover:cursor-default">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of 
              </p>
              <button className="bg-blue-600 text-white font-bold px-4 py-1 mx-4 rounded-md my-2 hover:bg-blue-700 hover:scale-105 duration-300 mb-8">Detail</button>
          </div>
  
      </div>
    );
  }
  