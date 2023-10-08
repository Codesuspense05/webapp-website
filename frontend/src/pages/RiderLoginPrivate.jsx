import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Riderprivatelogin from "../components/Shop/Riderprivatelogin";

const RiderLoginPrivate= () => {
  const navigate = useNavigate();
  const { isRider,isLoading } = useSelector((state) => state.rider);

  useEffect(() => {
    if(isRider === true){
      navigate(`/deliveryrider`);
    }
  }, [navigate,isLoading,isRider])
  return (
    <div>
        <Riderprivatelogin />
    </div>
  )
}

export default RiderLoginPrivate