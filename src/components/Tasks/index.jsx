import s from './tasks.module.css';
import Task from './../Task/index';

const Tasks = () => {
	return (
		<section className={s.tasks}>
			<header className={s.header}>
				<div>
					<p>Create Tasks</p>
					<span>10</span>
				</div>
				<div>
					<p className={s.textPurple}>Completed</p>
					<span>1 of 10</span>
				</div>
			</header>
			<div className={s.list}>
				<Task />
			</div>
		</section>
	);
};

export default Tasks;
