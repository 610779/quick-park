import { useState } from "react";
import { Link } from "react-router-dom"; 

import NewInput from "@/components/NewInput";
import Dialog from "@mui/material/Dialog";
import { useNavigate } from 'react-router-dom';
import { createSpace } from "@/utils/client";

export default function HomePage() {
  const navigate = useNavigate();
  const [DialogOpen, setDialogOpen] = useState(false);

  const Init_Spaces = async() => {
    const abc = ["A","B","C","D","E","F"];
    for( let j=0; j<6; j++){
      for( let i=1; i<=20; i++ ){
        await createSpace({
          section: abc[j],
          number: i, 
          priority: false, 
          occupied: false,
          history: []
        })
      console.log(abc[j],i);
    }
  }
  }

  const handleOpen = () => {
    setDialogOpen(true);
  };
  const  handleClose = () => {
    setDialogOpen(false);
  };
  function showAlert(message:string) {
    window.alert(message);
  }
  const handleClick = (password?:string) => {
    if (!password) {
      const message = "請輸入認證密碼"
      showAlert(message)
      return;
    } 
    if (password === "123"){
      navigate('/guardpage');
    }else{
      const message = "密碼錯誤，請重新輸入密碼"
      showAlert(message)
      return;
    }
    setDialogOpen(false);
  };

  return (
    <main className="container max-h-screen max-w-screen">
      <button className="absolute right-0 top-0 h-20 w-20 lg:right-10 lg:top-10 lg:h-28 lg:w-28" onClick={handleOpen}>
        <img
          src="./home_guard.png"
          alt="guard"
        />
      </button>
      <Link to="/clientpage">
        <div className="flex h-screen w-screen flex-col items-center justify-center">
          {/* 在 lg 尺寸下顯示的元素 */}
          <div className="hidden lg:block lg:flex lg:flex-row lg:mt-10 lg:-mb-20 lg:items-center">
            <div className="mr-20">
              <span className="text-7xl">Quick</span>
              <br/>
              <span className="text-7xl ml-20">Parking</span>
            </div>
            <img
              className="h-48 w-64 ml-20"
              src="./home_car.png"
              alt="car"
            />
          </div>

          {/* 在非 lg 尺寸下顯示的元素 */}
          <h1 className="lg:hidden text-6xl">Quick</h1>
          <h1 className="lg:hidden text-6xl">Parking</h1>
          <img
            className="lg:hidden mt-16 h-36 w-52"
            src="./home_car.png"
            alt="car"
          />

          <img
            className="mt-20 h-24 w-72 lg:w-6/12 lg:h-40"
            src="./home_qp.png"
            alt="word: quick park"
          />
        </div>
        
      </Link>
      <Dialog open={DialogOpen} onClose={handleClose}>
        <NewInput
          placeholder="請輸入密碼"
          onClick={handleClick}
        />
      </Dialog>
      {/* 新增600格車位的按鈕 */}
      <button onClick={Init_Spaces} className="border-2 border-white">
        初始化停車位
      </button>
    </main>
  );
}