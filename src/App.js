import { Suspense, lazy } from "react";

const Navbar = lazy(() => import("./components/navbar.js/Navbar"));
const Products = lazy(() => import("./components/products/Products"));

function App() {
	return (
    <Suspense fallback={<>Loading...</>}>
			{/* <Navbar /> */}
			<main>
				<Products />
			</main>
		</Suspense>
	);
}

export default App;
