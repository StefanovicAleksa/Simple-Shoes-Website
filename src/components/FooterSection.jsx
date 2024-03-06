import React from 'react'

export default function FooterSection({title, links}) {
  return (
    <div>
        <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>{title}</h4>
        <ul>
            {links.map(link => 
                <li key={link.name} className='cursor-pointer mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'>
                    <a href={link.href}>{link.name}</a>
                </li>    
            )}
        </ul>
    </div>
  )
}
