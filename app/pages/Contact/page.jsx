import React from 'react'

function about() {
  return (
    <>
    
    <div className=' flex flex-col items-center text-center w-full mb-12 mt-[7rem] sm:text-4xl text-4xl font-extrabold lg:w-[100%] title-font mb-6  ' >
       <h1> Contact Us</h1>
       <h3 className=' lg:w-[40%] mt-7 text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quasi eius velit natus blanditiis veritatis unde praesentium odit, nemo optio provident cum distinctio!</h3>
    </div>

    <section className=' flex mt-[5rem] lg:w-[80%] mx-auto flex flex-wrap items-center justify-between  '>

      <div className=' flex w-[15rem] lg:w-[35rem] lg:ml-[-2rem]  lg:mt-0  '>
        <img src="/About/About1.png" alt="" />

      </div>

      <div className=' flex absolute right-14  w-full max-w-xl '>
        {/* <h4 className=''> Lorem, ipsum dolor sit amet consectetur adipisicing.</h4> */}

        <div class=" w-full ">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 lg:w-[85%] mx-auto">
    <div class="mb-7">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="Name">
        Name
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Name"/>
    </div>
    <div class="mb-7">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="Email-Id">
        Email-Id
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Email-Id"/>
  
    </div>

    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="Message">
        Message
      </label>
      <textarea class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Type your message"/>
  
    </div>

    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Send
      </button>
     
    </div>
  </form>

</div>
      </div>
    </section>

    <div className=' flex flex-col items-center text-center w-full mb-12 mt-[7rem] sm:text-4xl text-4xl font-extrabold lg:w-[100%] title-font mb-6  ' >
       <h1> GET IN TOUCH WITH US</h1>
       <h3 className=' lg:w-[40%]  mt-7 text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quasi eius velit natus blanditiis veritatis unde praesentium odit, nemo optio provident cum distinctio!</h3>

    </div>

<section className='flex  '>

<div className=' flex mx-auto gap-12 items-center w-[10]  text-center mt-[6rem] '>
  <img src="/About/Instagram.svg" alt="" />
  <img src="/About/Linkedin.svg" alt="" />
  <img src="/About/Twitter.svg" alt="" />
</div>



</section>

    <section className='flex  mt-[6rem]   mt-[5rem] lg:w-[80%] mx-auto flex flex-wrap items-center justify-between '>

      <div className='col mt-[6rem] w-[60%] '>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor excepturi consequatur officia, corporis sit corrupti sequi consectetur doloremque tempore quidem cupiditate reprehenderit tenetur!</h1>

      <h3 className='col lg:w-[40%]  mt-[2rem] w-[60%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut molestiae, ad expedita asperiores quae velit consequuntur corrupti sunt, repudiandae reiciendis nihil nisi suscipit molestias maiores animi quis repellat dolor fuga. Esse delectus dicta, amet, ratione explicabo tenetur vero at itaque obcaecati asperiores, quos praesentium nihil?</h3>


      </div>

      <div className='w-[25rem] '>
       <img src="/About/Map.png" alt="" />
      </div>


    </section>


    <section className='flex mx-auto items-center text-center mt-[6rem]   '>
       
       <div className='  mx-auto items-center text-center mt-[6rem]   '>
        <img src="/About/Group.svg" alt="" />
       <h2>24/7 customer care</h2> 
       <h3> call +91 865846411</h3>
       <h3>MON TO FRI : 9am-6pm</h3>
       </div>

    </section>

    </>
  )
}

export default about