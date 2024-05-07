// import { updateUser } from "@/app/lib/actions";
// import { fetchUser } from "@/app/lib/data";
import { findByIdProduct } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProducts/singleProducts.module.css";
import Image from "next/image";
// import { useLocation } from "next/navigation";

const SingleProducts = async (props) => {

  // console.log(params.id);
  console.log(props.params.id);

  const id  = props.params.id;
  // const id = '6633275ba1beb3b016337622';
  const products = await findByIdProduct(id);
  console.log("products : "+products);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          {/* <Image src={"/noavatar.png"} alt="" fill /> */}
        </div>
        {/* {username} */} 
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="hidden" name="id" value={products.id}/>
          <label>title</label>
          <input type="text" name="title" placeholder="" value={products.title} />
          <label>price</label>
          <input type="number" name="price" placeholder="" value={products.price}/>
          <label>stock</label>
          <input type="number" name="stock" value={products.stock} />
          <label>color</label>
          <input type="text" name="color" placeholder="" value={products.color} />
          <label>desc</label>
          <textarea type="text" name="desc" placeholder="" value={products.desc} />
          <label>category</label>
          <select name="cat" id="cat">
            {/* <option value={general}>Choose a Category</option>
            <option value="kitchen">Kitchen</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
            <option value={true} >Yes</option>
            <option value={false} >No</option> */}
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProducts;