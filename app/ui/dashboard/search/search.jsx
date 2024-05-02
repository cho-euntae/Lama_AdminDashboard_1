"use client"

import { MdSearch } from "react-icons/md"
import styles from "./search.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Search = ({placeholder}) => {
    const searchParams = useSearchParams();
    const {replace} = useRouter();
    const pathName = usePathname();

    const handleSearch = (e) => {
      console.log('aaaaaaaaaaaaaaaa');
      const params = new URLSearchParams(searchParams);

      if(e.target.value){
        params.set("q",e.target.value);
      }else {
        params.delete("q");
      }
      console.log("ttttttttttttttttttt"+replace(`${pathName}?${params}`));
      replace(`${pathName}?${params}`);
      
    };

    // console.log("Search searchParams = "+searchParams)
    // console.log("Search pathName = " + pathName);
    return (
      <div className={styles.container}>
        <MdSearch />
        <input type="text" placeholder={placeholder} className={styles.input} onChange={handleSearch}/>
      </div>
    )
}
  
export default Search
