import s from './header.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import Logo from './../../assets/images/todo-logo.svg';

const Header = () => {
	return (
		<header className={s.header}>
			<img src={Logo} alt='Logo' />
			<form className={s.newTaskForm}>
				<input type='text' placeholder='Add a new task' />
				<button type='submit'>
					Create
					<AiOutlinePlusCircle size={30} />
				</button>
			</form>
		</header>
	);
};

export default Header;
