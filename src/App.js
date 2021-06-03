import "./styles.css";
import ImageSlider from "./components/ImageSlider";
import { SliderData } from "./components/SliderData";

export default function App() {
  return <ImageSlider slides={SliderData} />;
}
