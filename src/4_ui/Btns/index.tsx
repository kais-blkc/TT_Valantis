import './style.scss';
import { FC, ReactElement } from 'react';

interface IBtnProps {
	classes?: string;
	children: ReactElement | string | number;
}

export const Btn: FC<IBtnProps> = ({ classes, children }) => {
	return <button className={'btn ' + classes}>{children}</button>;
};

export const BtnCircle: FC<IBtnProps> = ({ classes, children }) => {
	return <button className={'btn btn-circle ' + classes}>{children}</button>;
};

export const BtnRounded: FC<IBtnProps> = ({ classes, children }) => {
	return <button className={'btn btn-rounded ' + classes}>{children}</button>;
};
