import Layout from "../components/Layout";
import useNavColor from "../helpers/useNavColor";
import { navColors } from "../utils/dataColors";

const About = () => {
  const navColor = useNavColor(navColors);

  return (
    <Layout color={navColor} description="about page">
      <div>
        <h1>About</h1>
      </div>
    </Layout>
  );
};

export default About;
