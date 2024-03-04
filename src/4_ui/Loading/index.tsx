import './style.scss';
import loadingTime from '@/assets/loading-time.gif';
import { FC } from 'react';

export const Loading: FC = () => {
	return (
		<div className="loading-screen">
			<h2>Загрузка...</h2>
			<img src={loadingTime} alt="" />
		</div>
	);
};
