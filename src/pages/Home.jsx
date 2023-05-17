import { Link } from 'react-router-dom';
import AppBanner from '../components/shared/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';
import Button from '../components/reusable/Button';
import html from '../images/HTML5.png'
import css from '../images/css.png'
import js from '../images/js.png'

const Home = () => {
	return (
		<div className="container mx-auto">
			<AppBanner></AppBanner>

			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
					Tech Stack
				</p>

				
			</div>

			<div className="tech-stack w-full flex flex-wrap justify-center gap-4 text-3xl text-ternary-dark dark:text-ternary-light font-semibold py-6">
					<p>Html</p>
					<p>CSS</p>
					<p>Javascript</p>
					<p>Reactjs</p>
					<p>Nodejs</p>
					<p>Expressjs</p>
					<p>MongoDB</p>
					<p>MySQL</p>
					<p>Java</p>
					<p>FireBase</p>
					
				</div>

			<ProjectsProvider>
				<ProjectsGrid></ProjectsGrid>
			</ProjectsProvider>

			{/* <div className="mt-8 sm:mt-10 flex justify-center">
				<Link
					to="/projects"
					className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
					aria-label="More Projects"
				>
					<Button title="More Projects" />
				</Link>
			</div> */}
		</div>
	);
};

export default Home;
