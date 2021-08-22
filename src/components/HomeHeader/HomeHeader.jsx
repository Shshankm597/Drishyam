import { Flex, Box, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import banner from "../../assets/images/banner.jpg";


export default function HomeHeader() {
  const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");

  return (
        <Box
          backgroundImage={banner}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          w="100%"
          h={isSmallerThan600 ? "40vh" : "60vh"}
        >
          <Flex
            h="inherit"
            alignItems="center"
            justifyContent="flex-start"
            pl= {isSmallerThan600 ? "8" : "36"}
          >
            <Box w={isSmallerThan600 ? "80%" : "60%"} mt="1rem">
              <Text
                fontSize={isSmallerThan600 ? "1.5rem" : "2.5rem"}
                fontWeight="bold"
                color="coral"
              >
                From <h1 style={{color: "#212529", margin: "1rem 0"}}>Personal&nbsp;Grooming to</h1><h1 style={{color: "#212529", margin: "1rem 0",}}> Fashion&nbsp;Essentials</h1> we've&nbsp;got&nbsp;your&nbsp;back
              </Text>
            </Box>
          </Flex>
        </Box>
  );
}
