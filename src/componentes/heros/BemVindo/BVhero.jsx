import { Swiper, SwiperSlide } from "swiper/react";
import { SlideBV } from "../../../api/CatGet";
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from "react";

const BVhero = () => {
  const { slideCat } = SlideBV();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
    >
      {slideCat.map((item, index) => (
        <SwiperSlide key={item.id}>
          <div className="relative">
            <img
              src={item.image}
              alt=""
              className="min-w-[450px] min-h-[210px] max-h-[210px] w-full md:max-h-[400px] object-cover"
            />

            <AnimatePresence mode="wait">
              {index === activeIndex && (
                <motion.div
                  key={item.id}
                  initial={{ x: 50,y:50, opacity: 0}}
                  animate={{ x: 0,y:0, opacity: 1 }}
                  exit={{ x: 50,y:50, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p
                    className={`absolute max-w-[250px] left-6 font-[Inter] font-medium text-[#D1D1D1] text-[20px] text-center 
                    ${item.id === 1 ? 'top-16.5 md:top-27.5' : item.id === 2 ? 'top-16.5       md:top-32' : item.id === 3 ? 'top-18.5 md:top-32' : ''}
                     md:left-90 md:md:max-w-[550px] md:text-[35px] md:text-[white]
                    `}
                  >
                    {item.texto}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BVhero;
