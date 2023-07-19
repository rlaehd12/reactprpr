import Image from "next/image";
import logo from "../src/logo.svg";

import Test from "../src/components/Test";
import RefTest from "../src/components/RefTest";
import AxiosTest from "../src/components/AxiosTest";
import RenderingTest from "../src/components/RenderingTest";
import ListTest from "../src/components/ListTest";
import CalendarTest from "../src/components/CalendarTest";


function App() {
	return (
		<div className="App">
            <CalendarTest />  
            <ListTest />
            <RenderingTest />
            <AxiosTest />
            <Test />
            <RefTest />
			<header className="App-header">
				<Image
					src={logo}
					className="App-logo"
					width={200}
					height={200}
					alt="logo"
				/>
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>

				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
