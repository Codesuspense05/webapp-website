import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RiderCreate from "../components/Shop/RiderCreate";

const RiderCreatePage = () => {
  const navigate = useNavigate();
  const { isRider,rider } = useSelector((state) => state.rider);

  useEffect(() => {
    if(isRider === true){
      navigate(`/rider/${rider._id}`);
    }
  }, [isRider,navigate,rider._id])
  return (
    <div>
        <RiderCreate />
    </div>
  )
}

export default RiderCreatePage