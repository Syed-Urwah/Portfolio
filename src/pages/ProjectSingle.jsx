import { useParams } from 'react-router-dom';
import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectHeader from '../components/projects/ProjectHeader';
import ProjectInfo from '../components/projects/ProjectInfo';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects';
import { SingleProjectProvider } from '../context/SingleProjectContext';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import chat1 from '../components/projects/images/chat-1.png'
import chat2 from '../components/projects/images/chat-2.png'
import chat3 from '../components/projects/images/chat-3.png'
import eco1 from '../components/projects/images/eco1.png'
import eco2 from '../components/projects/images/eco2.png'
import eco3 from '../components/projects/images/eco3.png'







const ProjectSingle = () => {

	const {id} = useParams();

	const chatImages = {
		one: chat1,
		two: chat2,
		three: chat3
	}
	const ecoImages = {
		one: eco1,
		two: eco2,
		three: eco3
	}

	useEffect(()=>{
		console.log(id);
	},[])


	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0.15,
			}}
			className="container mx-auto mt-5 sm:mt-10"
		>
			<SingleProjectProvider>
				<ProjectHeader id={id}/>
				<ProjectGallery  images={id == 2 ? chatImages : id == 3 ? ecoImages : ""}/>
				<ProjectInfo id={id} />
				{/* <ProjectRelatedProjects /> */}
			</SingleProjectProvider>
		</motion.div>
	);
};

export default ProjectSingle;
