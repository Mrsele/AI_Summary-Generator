import React from 'react'

import { useState,useEffect } from 'react';
import {copy,linkIcon,loader,tick} from '../assets';

const Demo = () => {
  const [article,setArticle] = useState({
    url:'',
    summary:'',
  });

  const handleSubmit= async (e)=>{
alert('Submited')
  }
  return (
   <section className='mt-16 w-full max-w-xl'>
   <div className='flex flex-col w-full gap-20'>
   <form className='relative flex justify-center items-center' onSubmit={(handleSubmit)}>
   <img src={linkIcon}
   alt="likned"
   className='absolute left-0 my-2 ml-3 w-5'
   />
   <input 
type='url'
placeholder='enter url'
value={article.url}
onChange={(e)=>setArticle({...article,url:e.target.value})}
required
className='url_input peer'
/>
<button
type='submit'
className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700'
>
↵
</button>
   </form>
  {/**brows url history */}
   </div>
     {/**Display result*/}
   </section>
  )
}

export default Demo