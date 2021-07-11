import { motion } from 'framer-motion';

const Card = ({ data, i }) => {
	const variants = {
		visible: (i) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.1,
				duration: 0.5,
				ease: 'easeIn',
				type: 'spring',
				stiffness: 50,
			},
		}),
		hidden: { opacity: 0, y: 200 },
	};

	const handleClick = () => {
		window.open(data.url, '_blank');
	};

	return (
		<motion.div
			className="card"
			onClick={handleClick}
			initial="hidden"
			animate="visible"
			custom={i}
			variants={variants}
		>
			<img src={data.cover} alt={data.alt} />
			<h3>{data.name}</h3>
			<div className="focus-content">
				<p>{data.text}</p>
			</div>
		</motion.div>
	);
};

export default Card;
