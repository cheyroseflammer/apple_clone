import Navbar from "./components/Navbar";
import Highlights from "./components/Highlights";
import Hero from "./components/Hero";
import ThreeDModel from "./components/3DModel";

const App = () => {
	return (
		<main className="bg-black">
			<Navbar />
			<Hero />
			<Highlights />
			<ThreeDModel />
		</main>
	);
};

export default App;
