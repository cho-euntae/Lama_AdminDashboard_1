// import { updateUser } from "@/app/lib/actions";
// import { fetchUser } from "@/app/lib/data";
import { updateProduct } from "@/app/lib/actions";
import { findByIdProduct } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProducts/singleProducts.module.css";
// import Image from "next/image";
// import { useLocation } from "next/navigation";


const SingleProducts = async (props) => {

  const id  = props.params.id;
  const product = await findByIdProduct(id);

  console.log(product);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          {/* <Image src={"/noavatar.png"} alt="" fill /> */}
        </div>
        {/* {username} */} 
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product.id}/>
          <label>title</label>
          <input type="text" name="title" placeholder="" value={product.title} />
          <label>price</label>
          <input type="number" name="price" placeholder="" value={product.price}/>
          <label>stock</label>
          <input type="number" name="stock" value={product.stock} />
          <label>color</label>
          <input type="text" name="color" placeholder="" value={product.color} />
          <label>desc</label>
          <textarea type="text" name="desc" placeholder="" value={product.desc} />
          <label>category</label>
          <input type="text" name="cat" value={product.cat} />
          {/* <select name="cat" id="cat" defaultValue={product.cat}>
            <option value="kitchen">kitchen</option>
            <option value="phone">phone</option>
            <option value="computer">computer</option>
          </select> */}
          {/* <select name="cat" id="cat" defaultValue={product.cat}>
            <option value="kitchen">Kitchen</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
          </select> */}
          <button >Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProducts;