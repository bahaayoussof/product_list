import { Suspense, lazy } from "react";
import "./app.css";

const Navbar = lazy(() => import("./components/navbar.js/Navbar"));
const Products = lazy(() => import("./components/products/Products"));

function App() {
	return (
		<Suspense fallback={<>Loading...</>}>
			<Navbar />
			<main className="page_content">
				<Products />
			</main>
		</Suspense>
	);
}

export default App;
