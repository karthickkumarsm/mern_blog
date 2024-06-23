import React,{useState,useRef,useEffect} from 'react'
import {useSelector} from 'react-redux';
import {TextInput,Button, Alert} from 'flowbite-react'
import {getDownloadURL, ref, getStorage, uploadBytesResumable} from 'firebase/storage'
import { app } from '../firebase';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const DashProfile = () => {
  const {currentUser} = useSelector(state => state.user);
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const filePickerRef = useRef();
  const [imageFileUploadProgress, setImageFileUploadProgress] = useState(null);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({...formData,[e.target.id] : e.target.value});
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    if(Object.keys(formData).length > 0){
      return;
    }
    try {
      
    } catch (error) {
      
    }
  }

  const handleImageChange=(e)=>{
    const file=e.target.files[0];
    if(file){
      setImageFile(file);
      setImageFileUrl(URL.createObjectURL(file));
    } 
  };
  useEffect(() => {
    if(imageFile){
      uploadImage();
    }
  }, [imageFile]);

  const uploadImage = async() =>{
    setImageFileUploadError(null);
    const storage = getStorage(app);
    const fileName = new Date().getTime() + imageFile.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 100 ;
        setImageFileUploadProgress(progress.toFixed(0));
      },
      (error) =>{
        setImageFileUploadError("Could not upload image (File must be less than 2MB)");
        setImageFileUploadProgress(null);
        setImageFile(null);
        setImageFileUrl(null);
      },
      ()=>{
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
          setImageFileUrl(downloadURL);
          setFormData({...formData,profilePicture:downloadURL});
        })
      }
    )
  }
  

  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
      <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input type='file' accept='image/*' onChange={handleImageChange} ref={filePickerRef} hidden/>
       <div className="relative w-32 h-32 self-center rounded-full cursor-pointer shadow-md overflow-hidden" onClick={()=> filePickerRef.current.click()}>
        {imageFileUploadProgress && (
          <CircularProgressbar value={imageFileUploadProgress || 0} 
          text={`${imageFileUploadProgress}%`}
          strokeWidth={5}
          styles={{
            root:{
              width:'100%',
              height:'100%',
              position:'absolute',
              top:0,
              left:0
            },
            path:{
              stroke:`rgba(62, 152, 199, ${
                    imageFileUploadProgress / 100
                  })`
            }
          }}
          />
        )}
       <img src={imageFileUrl || currentUser.profilePicture} alt='User' className={`rounded-full w-full h-full object-cover border-8 border-[lightgray] ${
              imageFileUploadProgress &&
              imageFileUploadProgress < 100 &&
              'opacity-60'
            }`}/>
       </div>
       {imageFileUploadError && (
        <Alert color='failure'>
          {imageFileUploadError}
        </Alert>
       )}
       <TextInput type='text' id='username' placeholder='Username' defaultValue={currentUser.username} onChange={handChange}/>
       <TextInput type='email' id='email' placeholder='email' defaultValue={currentUser.email} onChange={handChange}/>
       <TextInput type='password' id='password' placeholder='password' onChange={handChange}/>

       <Button type='submit' gradientDuoTone='purpleToBlue' outline>
        Update
       </Button>
      </form>
      <div className="text-red-500 flex justify-between mt-5">
        <span className='cursor-pointer'>
          Delete Account
        </span>
        <span className='cursor-pointer'>
          Sign Out
        </span>
      </div>
    </div>
  )
}
