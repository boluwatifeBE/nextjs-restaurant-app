import Image from 'next/image';
import styles from '../styles/Footer.module.css';

const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<Image src='/img/bg.png' objectFit='cover' layout='fill' alt='' />
			</div>
			<div className={styles.item}>
				<div className={styles.card}>
					<h2 className={styles.motto}>
						OH YES, WE DID.THE PIZZARIER, WELL BAKED SLICE OF PIZZA.
					</h2>
				</div>
				<div className={styles.card}>
					<h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
					<p className={styles.text}>
						5 Kajolo Road. Opposite Area.
						<br /> Lagos State.
						<br /> +234 70 555 555 555
					</p>
					<p className={styles.text}>
						KM 22 Mr. Sule Ex. Along Side-side.
						<br /> Ogun State.
						<br /> +234 90 234 432 324
					</p>
					<p className={styles.text}>
						15 Odogbo Street, Junction Bus-stop.
						<br /> Lagos State.
						<br /> +234 70 563 555 255
					</p>
					<p className={styles.text}>
						33 Cresent street, Nigeria Bus-stop.
						<br /> Abuja.
						<br /> +234 70 220 114 333
					</p>
				</div>
				<div className={styles.card}>
					<h1 className={styles.title}>WORKING HOURS</h1>
					<p className={styles.text}>
						MONDAY UNTIL FRIDAY
						<br /> 9:00 – 22:00
					</p>
					<p className={styles.text}>
						SATURDAY - SUNDAY
						<br /> 12:00 – 24:00
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
