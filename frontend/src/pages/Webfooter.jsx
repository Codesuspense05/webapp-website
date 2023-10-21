import React from 'react'

const Webfooter = () => {
  return (
    <div>
      <section className="flex w-full ">
        <div class=" bg-blue-900 w-full">
          <div class="max-w-2xl mx-auto text-white py-5">
            <div class="text-center">
              <h3 class="text-3xl mb-3 max-400px:text-[25px]">
                {" "}
                Download our app{" "}
              </h3>
              <p> Stay hydrated. All day, every day. </p>
              <div class="flex justify-center my-10 max-400px:my-2">
                <div class="flex items-center border rounded-lg px-4 py-2 w-52 mx-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                    alt=""
                    class="w-7 md:w-8 max-400px:w-5  max-400px:h-6"
                  />
                  <div class="text-left ml-3">
                    <p class="text-xs text-gray-200 max-400px:text-[10px]">
                      Download on{" "}
                    </p>
                    <p class="text-sm md:text-base max-400px:text-[12px]">
                      {" "}
                      Google Play Store{" "}
                    </p>
                  </div>
                </div>
                <div class="flex items-center border  rounded-lg px-4 py-2 w-44 mx-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                    alt=""
                    class="w-7 md:w-8 max-400px:w-6  max-400px:h-6"
                  />
                  <div class="text-left ml-3">
                    <p class="text-xs text-gray-200 max-400px:text-[10px]">
                      Download on{" "}
                    </p>
                    <p class="text-sm md:text-base max-400px:text-[12px]">
                      {" "}
                      Apple Store{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-5 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
              <p class="order-2 md:order-1 mt-8 md:mt-0 max-400px:mt-4">
                {" "}
                &copy; Capstonev2, 2023.{" "}
              </p>
              <div class="order-1 md:order-2">
                <span class="px-2">About us</span>
                <span class="px-2 border-l">Contact us</span>
                <span class="px-2 border-l">Privacy Policy</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Webfooter
