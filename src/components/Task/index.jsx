import s from './task.module.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { TbTrash } from 'react-icons/tb';

// https://www.youtube.com/watch?v=36a__1Vn6B8&ab_channel=DevGB
// 23:23
const Task = () => {
	return (
		<div className={s.task}>
			<button className={s.checkContainer}>
				<div></div>
			</button>
		</div>
	);
};

export default Task;
