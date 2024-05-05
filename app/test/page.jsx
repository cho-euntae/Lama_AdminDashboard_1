// "use client"

// const { useState } = require("react")

// const Page=()=>{

//     const [input, setInput] = useState("");

//     return(
//         <div>
//             <form>
//                 <input type="" onChange={e=>setInput(e.target.value)}/>
//                 <button onClick={send(input)}>Send</button>
//             </form>
//         </div>
//     )
// }

const Page=()=>{

    const handleForm = async (formData) =>{
        "use server"
        console.log(formData);
        const username = formData.get("username");
        console.log("Hello" , username);
        console.log("=========handleForm=========");
    }

    return(
        <div>
            <form action={handleForm}>
                <input type="text" name="username" />
                <input type="text" name="email" />
                <button> Send </button>
            </form>
        </div>
    )
}

export default Page;