import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectGallery = ({images}) => {
	const { singleProjectData } = useContext(SingleProjectContext);

	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			
					<div className="mb-10 sm:mb-0">
						<img
							src={images.one}
							className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
						/>
					</div>
					<div className="mb-10 sm:mb-0">
						<img
							src={images.two}
							className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
						/>
					</div>
					<div className="mb-10 sm:mb-0">
						<img
							src={images.three}
							className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
						/>
					</div>
				
		</div>
	);
};

export default ProjectGallery;
