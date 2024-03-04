import '@/style.scss';
import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';

interface ILayoutProps {
	children: ReactElement;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
	return (
		<main>
			<header>
				<h1>
					<Link to={'/'}>TT Valantis</Link>
				</h1>
			</header>

			<div className="content">{children}</div>
		</main>
	);
};

export default Layout;
