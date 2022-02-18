import { Box } from '@chakra-ui/react';
import {ControlPanel} from "./components/controlPanel"

function App() {
  return (
    <>
    <Box w={'100%'} h='40vh' bg={'yellow'}>
      仮の操作画面
    </Box><ControlPanel />
    </>
  );
}

export default App;
