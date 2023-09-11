import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Shopprivatelogin from "../components/Shop/Shopprivatelogin";

const ShopLoginPrivate= () => {
  const navigate = useNavigate();
  const { isSeller,isLoading } = useSelector((state) => state.seller);

  useEffect(() => {
    if(isSeller === true){
      navigate(`/dashboard`);
    }
  }, [navigate,isLoading,isSeller])
  return (
    <div>
        <Shopprivatelogin />
    </div>
  )
}

export default ShopLoginPrivate