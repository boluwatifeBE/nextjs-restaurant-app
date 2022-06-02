import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children, admin }) => {
	return (
		<>
			<Navbar admin={admin} />
			{children}
			<Footer />
		</>
	);
};

export default Layout;

export const getServerSideProps = async (ctx) => {
	const myCookie = ctx.req?.cookies || '';
	let admin = false;

	if (myCookie.token === process.env.TOKEN) {
		admin = true;
	}

	// const res = await axios.get('http://localhost:3000/api/products');
	return {
		props: {
			admin,
		},
	};
};
