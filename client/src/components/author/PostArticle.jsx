// import {useContext} from 'react'
// import axios from 'axios';
// import {UserAuthorContextObj} from '../../contexts/UserAuthorContext';
// import {useNavigate} from 'react-router-dom';
// import {useForm} from 'react-hook-form'




// function PostArticle() {

//   const {register,handleSubmit,formState:{errors}}=useForm();
//   const {currentUser}=useContext(UserAuthorContextObj);
//   const navigate=useNavigate();


// async function postArticle(articleObj){
//     console.log(articleObj);
//     const authorData={
//       nameOfAuthor:currentUser.firstName,
//       email:currentUser.email,
//       profileImageUrl:currentUser.profileImageUrl
//     }

//     articleObj.authorData=authorData;

//     articleObj.articleId=Date.now();
//     let currentDate=new Date();


//     articleObj.dateOfCreation=currentDate.getDate()
//     +"-"+currentDate.getMonth()+"-"+
//     currentDate.getFullYear()+"-"+currentDate.toLocaleTimeString("en-US",{hour12:true})

//     articleObj.dateOfModification = currentDate.getDate() + "-"
//     + currentDate.getMonth() + "-"
//     + currentDate.getFullYear() + " "
//     + currentDate.toLocaleTimeString("en-US", { hour12: true })

//     articleObj.comments=[];

//     articleObj.isArticleActive=true;


//     let res=await axios.post('http://localhost:3000/author-api/article',articleObj);
//     if(res.status===201){
//       navigate(`/author-profile/${currentUser.email}/articles`)

//     }else{
//       //
//     }
//   }
//   return (
//     <div className='container'>
//       <div className="row justify-content-center mt-5">
//         <div className="col-lg-8 col-md-8 col-sm-10">
//           <div className="card shadow">
//             <div className="card-title text-center border-bottom">
//               <h2 className="p-3 " style={{ color: "goldenrod" }}>
//                 Write an Article
//               </h2>
//             </div>
//       <div className='card-body bg-light'>
//         <form onSubmit={handleSubmit(postArticle)}>
//           <div className="mb-4">
//             <label htmlFor="title" className="form-label">Title</label>
//             <input type="text" className='form-control'  id="title" {...register("title")}/>
//           </div>


//       <div className='mb-4'>
//         <label htmlFor="category" className="form-label">Select a category</label>
//        <select {...register("category")} id="category" className="form-select">
//         <option value="" disabled>Categories</option>
//         <option value="Web-development">Web Development</option>
//         <option value="data-science">Data Science</option>
//         <option value="cyber-security">Cyber Security</option>
//         <option value="cloud-computing">Cloud Computing</option>
//         <option value="AI&ML">AI&ML</option>
//        </select>
//       </div>



//       <div className='mb-4'>
//         <label htmlFor="content" className='form-label'>Content</label>
//         <textarea {...register("content")} id="content" className='content w-100 brod' rows="10"></textarea>

//       </div>

//           <div className="text-end">
//               <button type="submit" className="btn btn-success">Post</button>
//           </div>

//       </form>
//       </div>

//     </div>
//     </div>
//       </div>
//     </div>
//   )
// }

// export default PostArticle


import {useContext} from 'react'
import axios from 'axios';
import {UserAuthorContextObj} from '../../contexts/UserAuthorContext';
import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form'

const API_URL = process.env.REACT_APP_API_URL || 'https://thearticlehub-2.onrender.com';

function PostArticle() {

  const {register,handleSubmit,formState:{errors}}=useForm();
  const {currentUser}=useContext(UserAuthorContextObj);
  const navigate=useNavigate();

async function postArticle(articleObj){
    console.log(articleObj);
    const authorData={
      nameOfAuthor:currentUser.firstName,
      email:currentUser.email,
      profileImageUrl:currentUser.profileImageUrl
    }

    articleObj.authorData=authorData;

    articleObj.articleId=Date.now();
    let currentDate=new Date();

    articleObj.dateOfCreation=currentDate.getDate()
    +"-"+currentDate.getMonth()+"-"+
    currentDate.getFullYear()+"-"+currentDate.toLocaleTimeString("en-US",{hour12:true})

    articleObj.dateOfModification = currentDate.getDate() + "-"
    + currentDate.getMonth() + "-"
    + currentDate.getFullYear() + " "
    + currentDate.toLocaleTimeString("en-US", { hour12: true })

    articleObj.comments=[];

    articleObj.isArticleActive=true;

    let res=await axios.post(`${API_URL}/author-api/article`,articleObj);
    if(res.status===201){
      navigate(`/author-profile/${currentUser.email}/articles`)

    }else{
      //
    }
  }
  return (
    <div className='container'>
      <div className="row justify-content-center mt-5">
        <div className="col-lg-8 col-md-8 col-sm-10">
          <div className="card shadow">
            <div className="card-title text-center border-bottom">
              <h2 className="p-3 " style={{ color: "goldenrod" }}>
                Write an Article
              </h2>
            </div>
      <div className='card-body bg-light'>
        <form onSubmit={handleSubmit(postArticle)}>
          <div className="mb-4">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className='form-control'  id="title" {...register("title")}/>
          </div>

      <div className='mb-4'>
        <label htmlFor="category" className="form-label">Select a category</label>
       <select {...register("category")} id="category" className="form-select">
        <option value="" disabled>Categories</option>
        <option value="Web-development">Web Development</option>
        <option value="data-science">Data Science</option>
        <option value="cyber-security">Cyber Security</option>
        <option value="cloud-computing">Cloud Computing</option>
        <option value="AI&ML">AI&ML</option>
       </select>
      </div>

      <div className='mb-4'>
        <label htmlFor="content" className='form-label'>Content</label>
        <textarea {...register("content")} id="content" className='content w-100 brod' rows="10"></textarea>
      </div>

          <div className="text-end">
              <button type="submit" className="btn btn-success">Post</button>
          </div>

      </form>
      </div>
    </div>
    </div>
      </div>
    </div>
  )
}

export default PostArticle;
