import Inferno from 'inferno';
import { Link } from 'inferno-router';
import Card from '../tags/Card';

export default function (props) {
	return (
		<div className="page page__home">
			<Card>
				<h1>Error404</h1>
				<p>This is the Error404 page.</p>
			</Card>
		</div>
	);
}
