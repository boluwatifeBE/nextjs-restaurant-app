import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import AddButton from '../components/AddButton';
import { useState } from 'react';
import Add from '../components/Add';

const Navbar = ({ admin }) => {
	const [close, setClose] = useState(true);
	const quantity = useSelector((state) => state.cart.quantity);
	return (
		<>
			{' '}
			<div className={styles.container}>
				<div className={styles.item}>
					<div className={styles.callButton}>
						<img src='/img/telephone.png' alt='' />
						{/* <Image src='/img/telephone.png' alt='' width='32' height='32' /> */}
					</div>
					<div className={styles.texts}>
						<div className={styles.text}>ORDER NOW!</div>
						<div className={styles.text}>012 345 678</div>
					</div>
				</div>
				<div className={styles.item}>
					<div className={styles.list}>
						<Link href='/' passHref>
							<span className={styles.listItem}>Homepage</span>
						</Link>
						<span className={styles.listItem}>Products</span>
						<span className={styles.listItem}>Menu</span>
						<div className={styles.listimage}>
							<Image src='/img/logo.png' alt='' width='50px' height='50px' />
						</div>
						<span className={styles.listItem}>Events</span>
						<span className={styles.listItem}>Blog</span>
						<span className={styles.listItem}>Contact</span>
					</div>
				</div>
				<div className={styles.item}>
					{admin && <AddButton setClose={setClose} />}
					<Link href='/cart' passHref>
						<div className={styles.cart}>
							<Image src='/img/cart.png' alt='' width='30px' height='30px' />
							<div className={styles.counter}>{quantity}</div>
						</div>
					</Link>
				</div>
			</div>
			{!close && <Add setClose={setClose} />}
		</>
	);
};

// export const getServerSideProps = async (ctx) => {
// 	const myCookie = ctx.req?.cookies || '';
// 	let admin = false;

// 	if (myCookie.token === process.env.TOKEN) {
// 		admin = true;
// 	}

// 	// const res = await axios.get('http://localhost:3000/api/products');
// 	return {
// 		props: {
// 			admin,
// 		},
// 	};
// };

export default Navbar;
