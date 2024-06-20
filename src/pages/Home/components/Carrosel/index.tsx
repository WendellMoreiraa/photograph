import { Box, Flex } from "@chakra-ui/react";
import { SwiperSlide, Swiper } from "swiper/react";
import Carrosel1 from "../../../../lib/assets/carrosel1.jpg";
import Carrosel2 from "../../../../lib/assets/carrosel2.jpg";
import Carrosel3 from "../../../../lib/assets/carrosel3.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "./styles/styles.css";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

const Carrosel = () => {
  const pagination = { clickable: true };

  return (
    <Flex h={"580px"} w="full" cursor="pointer">
      <Swiper
        pagination={pagination}
        modules={[EffectFade, Pagination, Autoplay]}
        loop={true}
        effect={"fade"}
        height={580}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Box
            backgroundImage={Carrosel1}
            w="full"
            h="full"
            backgroundSize="cover"
            backgroundPosition="center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            backgroundImage={Carrosel2}
            w="full"
            h="full"
            backgroundSize="cover"
            backgroundPosition="center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            backgroundImage={Carrosel3}
            w="full"
            h="full"
            backgroundSize="cover"
            backgroundPosition="center"
          />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
};

export default Carrosel;
