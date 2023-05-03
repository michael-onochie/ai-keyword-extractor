import { Heading, Image, Text } from "@chakra-ui/react";
import Logo from '../assets/light-bulb.svg';
import TechHunterLogo from '../assets/tech_hunter_logo.png';

const Header = () => {
  return (
    <>
        <Image src={TechHunterLogo} alt='logo' width={120} height={120} marginBottom='1rem' />
        <Heading color='white' marginBottom='1rem'>
          AI Keyword Extractor
        </Heading>
        <Text fontSize={25} textAlign='center'>
          Paste in your text below and we'll extract the keyword for you
        </Text>
    </>
  )
}

export default Header;