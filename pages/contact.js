import Layout from "../components/Layout";
import useNavColor from "../helpers/useNavColor";
import { navColors } from "../utils/dataColors";

const Contact = () => {
  const navColor = useNavColor(navColors);

  return (
    <Layout color={navColor} description="contact page">
      <div>
        <h1>Contact</h1>
      </div>
    </Layout>
  );
};

export default Contact;
