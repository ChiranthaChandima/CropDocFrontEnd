import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { auth, db, storage } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";

const New = ({ inputs, route, title }) => {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [per, setPerc] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;

      console.log(name);
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  console.log(data);

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, route), {
        ...data,
      });
      navigate(-1);
    } catch (err) {
      console.log(err);
    }
  };
console.log("inputs : ", inputs)
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
                //     <select id={input.id} onChange={handleInput}>
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
                //     />
                //   )}
                // </div>
                  <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    {input.type === "select" ? (
                      <select id={input.id} onChange={handleInput}>
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
                      />
                    )}
                  </div>
              ))}

              <button disabled={per !== null && per < 100} type="submit">
                Add {route}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
