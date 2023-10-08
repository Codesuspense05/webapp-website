import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RiderLogin from "../components/Shop/RaiderLogin";

const RiderLoginPage = () => {
  const navigate = useNavigate();
  const { isRider,isLoading } = useSelector((state) => state.rider);

  useEffect(() => {
    if(isRider === true){
      navigate(`/dashboard`);
    }
  }, [isLoading,isRider,navigate])
  return (
    <div>
        <RiderLogin />
    </div>
  )
}

export default RiderLoginPage