import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Link from "next/link";
import Image from "next/image";
import Pagenation from "@/app/ui/dashboard/pagination/pagination";
// import {fetchUsers} from "@/app/lib/data";
import { fetchUsers } from "@/app/lib/data";


{/* 
<Link href={{ pathname: "/about", query: { name: "test" } }}>About us</Link>
= /about?name=test
<Link href={{ pathname: "/blog/[slug]", query: { slug: "my-post" } }}>Blog Post</Link> 
=/blog/my-post
*/}

const UsersPage = async ({searchParams}) => {

  const q = searchParams?.q || "";
  const users = await fetchUsers(q);

  // console.log(users);

  
    return (
      <div className={styles.container}>
        <div className={styles.top}>
          <Search placeholder="Search for users..."/>
          <Link href="/dashboard/users/add" >
            <button className={styles.addButton}>Add New</button>
          </Link>
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Created At</td>
              <td>Role</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {users.map((user)=>(
              <tr key={user.id}>
              <td>
                <div className={styles.user}>
                <Image src={user.image || "/noavatar.png"} alt="" width={40} height={40} className={styles.userImage} />
                {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4,16)}</td>
              <td>{user.isAdmin ? 'Admin' : 'Client'}</td>
              <td>{user.isActive ? 'active' : 'passive'}</td>
              <td>
                <div className={styles.buttons}>
                {/* <Link href="/dashboard/users/test"> */}
                <Link href={`/dashboard/users/${user.id}`}>
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
        <Pagenation />
      </div>
    )
  }
  
  export default UsersPage
