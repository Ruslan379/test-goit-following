// import { useDispatch, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';

import { changeAvatar } from 'redux/auth/authOperations';


import css from './UploadAvatarPage.module.css';

//? НЕ НАДО для Kapu$ta:
// //!  +++++++++++++++++++ firebase ++++++++++++++++++++++++++++
// import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";


// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAJCkgGuoopUtogXXP5uwOnsJ29-UCECiY",
//   authDomain: "contacts-book-backend.firebaseapp.com",
//   projectId: "contacts-book-backend",
//   storageBucket: "contacts-book-backend.appspot.com",
//   messagingSenderId: "328355692785",
//   appId: "1:328355692785:web:a473dcce1b45a071456950"
// };

// //! Initialize Firebase
// const app = initializeApp(firebaseConfig);
// console.log("app:", app);//!

// const storage = getStorage(app);
// //!  +++++++++++++++++++ firebase ++++++++++++++++++++++++++++


//----------------------------------------------------------------------
export default function UploadAvatarPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("event.target.image:", event.target.avatar); //!
    const avatar = event.target.avatar.files[0];
    console.log("avatar:", avatar); //!
    console.log("avatar.name:", avatar.name); //!

    const formData = new FormData();
    // data.append('avatar', avatar, avatar.name);
    formData.append('avatar', avatar);
    console.log("formData:", formData); //!


    //? НЕ НАДО для Kapu$ta:
    // //!++++++++++++++++++++++++++++++++++++ Загрузка ссылки АВАТАРКИ на Firebase Storage без обработки++++++++++++++++++++++++++++++++++++++++++++++
    // //! Отправка АВАТАР на Storage
    // const avatarName = avatar.name;

    // async function uploadAvatarDownloadURLfirebaseStorage() {
    //   const storageRef = ref(storage, `avatars/${avatarName}`);
    //   console.log("storageRef:", storageRef); //!

    //   // const blob = new Blob([formData], { type: 'image/png' }); //! так НЕ работает
    //   // const blob = new Blob(formData, { type: 'image/jpeg' }); //! так НЕ работает
    //   // const blob = await formData.blob(); //! TypeError: formData.blob is not a function
    //   const blob = new Blob([avatar], { type: 'image/png' });
    //   console.log("blob:", blob); //!

    //   // const uploadBytesAvatar = await uploadBytes(storageRef, blob); //* так тоже работает
    //   const uploadBytesAvatar = await uploadBytes(storageRef, avatar);
    //   console.log("uploadBytesAvatar:", uploadBytesAvatar); //!

    //   //! Получение АБСОЛЮТНОЙ ссылки на на АВАТАР
    //   const avatarURL2 = await getDownloadURL(ref(storage, `avatars/${avatarName}`));
    //   console.log("АСОЛЮТНЫЙ (ПОЛНЫЙ) путь к новому Jimp-файлу аватара в папке назначения -> avatarURL2:", avatarURL2); //!;

    //   return avatarURL2;
    // };
    // uploadAvatarDownloadURLfirebaseStorage();
    // //!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    dispatch(changeAvatar(formData));
    navigate("/expenses", { replace: true });
  };



  // const form = document.getElementById("form");
  // form.addEventListener("submit", function (event) {
  //   event.preventDefault();
  //   const { image } = this.elements;
  //   console.log("image.value ==>", image.value); //!
  //   console.log("image.files[0] ==>", image.files[0]); //!
  //   const data = new FormData();
  //   data.append("image", image.files[0]);
  //   console.log("data:", data); //!
  // })



  return (
    <div className={css.Сontainer}>

      <div className={css.UserProfileTitle}>User profile</div>

      <p className={css.Title}>Change avatar</p>

      <form
        // id="form"
        // className={css.Form}
        onSubmit={handleSubmit}
      // encType="multipart/form-data"
      >

        <label className={css.FormLabel}>
          {/* <label className={s.label} htmlFor="imageUpload">Choose file</label> //! Вариант Юры */}
          {/* <input type="file" id="imageUpload" accept="image/png, image/jpeg" style={{ display: 'none' }} {...register('avatar')} />  //! Вариант Юры */}
          <input
            // className={css.FormInput}
            // id="inputImage"
            type="file"
            name="avatar"
          // multiple
          // required
          />
        </label>
        {/* <br /> */}

        <button
          // className={css.FormBtn}
          type="submit"
        // disabled={isLoading}
        >
          Отправить файл
        </button>
      </form>
      <NavLink className={css.btnGoToHomePage} to="/expenses">
        <span className={css.btnGoToHomePageText}>Go to home page</span>
      </NavLink>

      {/* <ToastContainer autoClose={1500} theme={"colored"} /> */}
    </div>
  );
}


//! Вариант Юры
// export default function FormInputFile({ register }) {
//   return <div className={s.box}>
//     <label htmlFor="imageUpload" className={s.label}>Choose file</label>
//     <input type="file" id="imageUpload" accept="image/png, image/jpeg" style={{ display: 'none' }} {...register('avatar')} />
//   </div>
// }
