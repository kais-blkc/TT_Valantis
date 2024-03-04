import './style.scss';
import { FC, useEffect } from 'react';
import { BtnCircle } from '@/4_ui/Btns';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch } from '@/hooks/hooks';
import { setPage, updateOffset } from '../store/reducer';

interface IPaginationProps {
	baseUrl?: string;
	paramsUrl?: string;
}

export const Pagination: FC<IPaginationProps> = ({
	baseUrl = '/',
	paramsUrl = '',
}) => {
	const dispatch = useAppDispatch();
	const params = useParams();
	const page = params.page ? +params.page : 1; // +params.page = Number(params.page)

	useEffect(() => {
		dispatch(setPage(page));
		dispatch(updateOffset());
	}, [page]);

	return (
		<div className="pagination">
			{page > 1 && (
				<Link key={page - 1} to={`${baseUrl}${page - 1}${paramsUrl}`}>
					<BtnCircle>{page - 1}</BtnCircle>
				</Link>
			)}

			<span key={page}>
				<BtnCircle classes="__active">{page}</BtnCircle>
			</span>

			<Link key={page + 1} to={`${baseUrl}${page + 1}${paramsUrl}`}>
				<BtnCircle>{page + 1}</BtnCircle>
			</Link>

			{page === 1 && (
				<Link key={page + 2} to={`${baseUrl}${page + 2}${paramsUrl}`}>
					<BtnCircle>{page + 2}</BtnCircle>
				</Link>
			)}
		</div>
	);
};
