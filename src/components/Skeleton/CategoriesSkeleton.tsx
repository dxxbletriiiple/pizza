import ContentLoader from 'react-content-loader';

export const CategoriesSkeleton = (): JSX.Element => {
	return (
		<ContentLoader speed={2} width={820} height={50} viewBox='0 0 820 50' backgroundColor='#f3f3f3' foregroundColor='#ecebeb'>
			<rect x='0' y='0' rx='25' ry='25' width='88' height='48' />
			<rect x='100' y='0' rx='25' ry='25' width='88' height='48' />
			<rect x='200' y='0' rx='25' ry='25' width='88' height='48' />
			<rect x='300' y='0' rx='25' ry='25' width='88' height='48' />
			<rect x='400' y='0' rx='25' ry='25' width='88' height='48' />
			<rect x='500' y='0' rx='25' ry='25' width='88' height='48' />
			<rect x='600' y='0' rx='25' ry='25' width='88' height='48' />
			<rect x='700' y='0' rx='25' ry='25' width='88' height='48' />
		</ContentLoader>
	);
};
