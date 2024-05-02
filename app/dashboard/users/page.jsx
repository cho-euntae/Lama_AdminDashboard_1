import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Link from "next/link";
import Image from "next/image";
import Pagenation from "@/app/ui/dashboard/pagination/pagination";
// import {fetchUsers} from "@/app/lib/data";
import { fetchUsers } from "@/app/lib/data";


const UsersPage = async () => {

  const users = await fetchUsers();

  console.log(users);
  
  console.log(users[0].isActive);
  
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
                <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} />
                {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>2022.01.13</td>
              <td>{user.isAdmin == true ? 'true' : 'false'}</td>
              <td>{user.isActive == true ? 'true' : 'false'}</td>
              <td>
                <div className={styles.buttons}>
                <Link href="/dashboard/users/test">
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
