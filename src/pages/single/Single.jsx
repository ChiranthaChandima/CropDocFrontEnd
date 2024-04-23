import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { auth, db, storage } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Single = ({ inputs, route, title }) => {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [per, setPerc] = useState(null);
  const navigate = useNavigate()
  const {id} = useParams();
  
  useEffect(async () => {
    if(id){
      const docRef = doc(db, route, id);
const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setData(docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    }
    
  }, [id]);

  console.log(data);

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    
    try {
     
      await setDoc(doc(db, route, id), {
        ...data,
      });
      navigate(-1)
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">

          <div className="right">
            <form onSubmit={handleAdd}>


               {inputs.map((input) => (
                // <div className="formInput" key={input.id}>
                //   <label>{input.label}</label>
                //   {input.type === "select" ? (
                //     <select defaultValue={data[input.id]} id={input.id} onChange={handleInput}>
                //     <option value="" disabled>Select...</option>
                //     {input.options.map((option) => <option key={option} value={option}>{option}</option>)}
                //     {/* <option value="option1">Option 1</option> */}

                    
                //   </select>
                //   ) : (
                //     <input
                //       id={input.id}
                //       type={input.type}
                //       placeholder={input.placeholder}
                //       onChange={handleInput}
                //       defaultValue={data[input.id]}
                //     />
                //   )}
                // </div>
                <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    {input.type === "select" ? (
                      <select defaultValue={data[input.id]} id={input.id} onChange={handleInput}>
                        <option value="" disabled>Select...</option>
                        {input.options.map((option) => <option key={option} value={option}>{option}</option>)}
                      </select>
                    ) : input.type === "textarea" ? (
                      <textarea
                        rows={4}
                        id={input.id}
                        placeholder={input.placeholder}
                        onChange={handleInput}
                        defaultValue={data[input.id]}
                      />
                    ) : (
                      <input
                        id={input.id}
                        type={input.type}
                        placeholder={input.placeholder}
                        onChange={handleInput}
                        defaultValue={data[input.id]}
                      />
                    )}
                  </div>
              ))}
              <button disabled={per !== null && per < 100} type="submit">
                Update {route}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
