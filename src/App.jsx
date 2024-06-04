import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  usePostCategoryMutation
  ,
  useGetAllCategoriesQuery,
  useGetAllCategoriesByIdQuery,
  useDeleteCategoriesByIdMutation
} from "./Services/productSlice";

function App() {
  const [myinp, setmyinp] = useState({ name: "", description: "" });
  const [deletefunc] = useDeleteCategoriesByIdMutation();
  const [postCategory]=usePostCategoryMutation()
  const { data: dataall, refetch } = useGetAllCategoriesQuery();
  const { data: category } = useGetAllCategoriesByIdQuery(2);
  console.log(category);
  return (
    <>
      <form onSubmit={async(e)=>{
        e.preventDefault()
       await postCategory(myinp)
        refetch()
      }}>
        <input type="text" value={myinp.name} onChange={(e)=>setmyinp({...myinp,name:e.target.value})} />
        <input type="text" value={myinp.description} onChange={(e)=>(setmyinp({...myinp,description:e.target.value}))}/>
        <br />
        <button>Submit</button>
      </form>
      {dataall &&
        dataall.map((x) => (
          <ul key={x.id}>
            <li>
              {x.name}{" "}
              <button
                onClick={async () => {
                  await deletefunc(x.id);
                  refetch();
                }}
              >
                Delete
              </button>
            </li>
          </ul>
        ))}
      <h1>{category && category.name}</h1>
    </>
  );
}

export default App;
