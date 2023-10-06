import React from 'react'
import WebNavbar from './WebNavbar'
const WebAbout = () => {

   
  return (
    <>
    <WebNavbar/>
      
      <section
        className="800px:grid 800px:grid-cols-2 grid grid-cols-1 bg-gray-100 800px:px-20 pb-10 h-[70vh] ease-in duration-300  py-20" 
        data-aos="fade-down"
        data-aos-delay="400"
      >
     
        <div className="bg-blue-500 800px:rounded-bl-[20px] shadow-lg grid grid-cols-1 max-400px:px-5">
          <h1 className="font-bold text-center text-[20px] 800px:px-20 800px:pt-20 max-400px:text-[20px] 400px:py-2 390px:py-2 390px:text-[20px] 400px:text-[20px] max-400px:pt-5">
            ABOUT US
          </h1>
          <p className="800px:px-20 text-justify 800px:py-10 400px:px-5 390px:px-5 text-white ">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ex
            sint incidunt sed reiciendis saepe dolore recusandae. Mollitia
            blanditiis debitis, deserunt amet repellat recusandae unde assumenda
            animi. Assumenda, maiores. Et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ex
            sint incidunt sed reiciendis saepe dolore recusandae. Mollitia
            blanditiis debitis, deserunt amet repellat recusandae unde assumenda
            animi. Assumenda, maiores. Et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ex
            sint incidunt sed reiciendis saepe dolore recusandae. Mollitia
            blanditiis debitis, deserunt amet repellat recusandae unde assumenda
            animi. Assumenda, maiores. Et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ex
            sint incidunt sed reiciendis saepe dolore recusandae. Mollitia
            blanditiis debitis, deserunt amet repellat recusandae unde assumenda
            animi. Assumenda, maiores. Et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ex
            sint incidunt sed reiciendis saepe dolore recusandae. Mollitia
            blanditiis debitis, deserunt amet repellat recusandae unde assumenda
            animi. Assumenda, maiores. Et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ex
            sint incidunt sed reiciendis saepe dolore recusandae. Mollitia
            blanditiis debitis, deserunt amet repellat recusandae unde assumenda
            animi. Assumenda, maiores. Et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ex
            sint incidunt sed reiciendis saepe dolore recusandae. Mollitia
            blanditiis debitis, deserunt amet repellat recusandae unde assumenda
            animi. Assumenda, maiores. Et.
          </p>
        </div>
        <div className="bg-white 800px:px-20 800px:py-20 800px:rounded-br-[20px] shadow-md max-400px:px-5 ">
          <img
            src="https://img.freepik.com/free-photo/front-view-water-recipients-ice-cube-copy-space_23-2148728782.jpg?size=626&ext=jpg&ga=GA1.1.1737282160.1690642300&semt=ais"
            alt=""
          />
        </div>
      </section>
      
    </>
  )
}

export default WebAbout
