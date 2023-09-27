import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from '../../shared/types';
type Props={
    page:string,
    selectedPage:SelectedPage,
    setSelectedPage:(value:SelectedPage) =>void
}

const Link = ({page,selectedPage,setSelectedPage}:Props) => {
    const lowercasePage=page.toLowerCase().replace(/ /g, '') as SelectedPage;
  return (
    <div>
      <AnchorLink href={`#${lowercasePage}`} onClick={()=>setSelectedPage(lowercasePage)} className={`${selectedPage===lowercasePage?"text-primary-500" :""} transition-all duration-500 hover:text-primary-300`}>
        {page}
      </AnchorLink>
    </div>
  )
}

export default Link
