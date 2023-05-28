import styled from "styled-components";
import AllRoutes from "./AllRoutes";
import Navbar from "./components/Navbar";

function App() {
    return (
        <Container>
            <Navbar />
            <AllRoutes />
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url('/assets/background.jpg');
    background-size: cover;
    background-position: center;
`;

export default App;
