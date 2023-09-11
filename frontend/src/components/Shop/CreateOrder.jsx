import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { categoriesData, colorTypeData } from "../../static/data";
import { toast } from "react-toastify";
import { createOrder } from "../../redux/actions/order";

const CreateProduct = () => {
  const { seller } = useSelector((state) => state.seller);
  const { success, error } = useSelector((state) => state.products);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [images, ] = useState([]);
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");
  const [originalPrice, setOriginalPrice] = useState();
  const [quantity, setQuantity] = useState();

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (success) {
      toast.success("Order created successfully!");
      navigate("/dashboard-create-orders");
      window.location.reload();
    }
  }, [dispatch,navigate, error, success]);

 

  const handleSubmit = (e) => {
    e.preventDefault();

    
 
    dispatch(
      createOrder({
        name,
        color,
        category,
        originalPrice,
        quantity,
        shopId: seller._id,
        images,
      })
    );
  };

  return (
    <div className="w-[90%] 800px:w-[50%] bg-white  shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll">
      <h5 className="text-[30px] font-Poppins text-center">Create Orders</h5>
      {/* create product form */}
      <form onSubmit={handleSubmit}>
        <br />
        <div>
          <label className="pb-2">
           Product Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={name}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your product name..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
           Product Category <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full mt-2 border h-[35px] rounded-[5px]"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Choose a category">Choose a category</option>
            {categoriesData &&
              categoriesData.map((i) => (
                <option value={i.title} key={i.title}>
                  {i.title}
                </option>
              ))}
          </select>
        </div>
      <br />
        <div>
          <label className="pb-2">
            Color <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full mt-2 border h-[35px] rounded-[5px]"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          >
            <option value="Choose a category">Choose Color Type</option>
            {colorTypeData &&
              colorTypeData.map((i) => (
                <option value={i.title} key={i.title}>
                  {i.title}
                </option>
              ))}
          </select>
        </div>
        
        <br />
       
        <br />
        <div>
          <label className="pb-2"> Price</label>
          <input
            type="number"
            name="price"
            value={originalPrice}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setOriginalPrice(e.target.value)}
            placeholder="Enter your product price..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
           Quantity <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="price"
            value={quantity}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Enter your product stock..."
          />
        </div>
        <br />
        <div>
            <input
              type="submit"
              value="Create"
              className="mt-2 cursor-pointer appearance-none text-center block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
      </form>
    </div>
  );
};

export default CreateProduct;
