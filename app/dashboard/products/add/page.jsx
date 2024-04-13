import styles from '@/app/ui/dashboard/products/addProduct/addProduct.module.css'

const AddProductPage = () => {
    return (
        <div>
            <from action="" className={styles.form} >
                <input type="text" placeholder='title' name='title' required />
                <select name="cat" id='cat'>
                    <option value="kitchen">Kitchen</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="kitchen">Kitchen</option>
                </select>
            </from>
        </div>
    )
}

export default AddProductPage