"use client"

import { MdSearch } from "react-icons/md"
import styles from "./search.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = ({placeholder}) => {
    const searchParams = useSearchParams();
    const {replace} = useRouter();
    const pathName = usePathname();

    // const handleSearch = (e) => {
    const handleSearch = useDebouncedCallback((e) => {
      // console.log('aaaaaaaaaaaaaaaa');
      const params = new URLSearchParams(searchParams);
      console.log("searchParams = "+searchParams);
      params.set("page",1);


      if(e.target.value){
        // 글자수가 2개 이상일때 검색
        e.target.value.length > 2 && params.set("q",e.target.value);
      }else {
        params.delete("q");
      }
      // console.log("ttttttttttttttttttt"+replace(`${pathName}?${params}`));
      replace(`${pathName}?${params}`);
      
    },300);

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
