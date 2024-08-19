import { useRouter } from 'next/router';
import React from 'react';


export async function getServerSideProps(context) {
    const id = context.params.id
    const res = await fetch(`https://altclan-brands-api-1-1.onrender.com/api/communities/${id}`)
    //const res = await fetch(`http://127.0.0.1:8000/api/brand_profile/${id}`);
    const data = await res.json()
    console.log(data)
  
    return {
      props: {brand:data}
    }
  
  }
  
const Id = () => {
    const router = useRouter();
    return (
        <div style={{fontFamily:'Poppins, Sans-serif', lineHeight:'100%', letterSpacing:2}} className=''>
            <div className="ml-5 mt-2 text-xs p-5">
   <button type="button" onClick={()=> router.back()} class="w-full flex items-center justify-center w-1/2 px-5 py-2 text-xs text-black transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
    <svg class="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
    </svg>
    <span>Go back</span>
</button>
   </div>
            <section className='p-5 bg-gray-100'>
            <button style={{float:'right'}} className="bg-green-800 p-3 text-xs rounded ml-2 text-white">
                        Invite
                    </button>
                    <button style={{float:'right'}} className="bg-green-800 p-3 text-xs rounded text-white">
                       Create Poll
                    </button>
                <div class="p-5 mb-4 " >

<img src="/images/increase.png" style={{height:120}} alt="" />
<div className='flex'>
<span> </span> <span className='font-bold text-xl pt-3 pl-3'>Event Name</span>
</div>
 
 <p class=" text-sm font-semibold mt-2 ml-3">
  13k Members
 </p>

 

 <p class=" text-xs mt-2 ml-3">
   A community connecting lovers of goth clothing
 </p>

 

</div>

            </section>
          <section className='p-10'>
          <h2 className="ml-5 font-bold mb-2 text-2xl">My Polls (1)</h2>
            <div  class="p-10 ml-5 bg-white rounded-lg border border-gray-200 shadow-md">
       <div class="flex justify-between items-center mb-5 text-gray-500">
           <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
               <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
               Poll
           </span>
           <span class="text-sm">14 days ago</span>
       </div>
       <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">Title</a></h2>
    
       <div class="flex justify-between items-center">
   
           <a href="#" class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
               View
               <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
           </a>
       </div>
   </div> 
           
          </section>
        </div>
    );
}

export default Id;
