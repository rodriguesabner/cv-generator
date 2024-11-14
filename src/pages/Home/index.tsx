import Hero from "./Hero";
import Preview from "./Preview";
import Features from "./Features";
import {Container, Layout} from "./styles";
import Pricing from "./Pricing";

export default function Home() {
    return (
        <Layout>
            <Container>
                <Hero/>
                <Features/>
                <Preview/>
                <Pricing/>
            </Container>
        </Layout>
    );
}
