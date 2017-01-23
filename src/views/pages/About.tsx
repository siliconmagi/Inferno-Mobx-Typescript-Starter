import Inferno from 'inferno';
import { Link } from 'inferno-router';
import Card from '../tags/Card';

export default function (props) {
	return (
		<div className="page page__home">
			<Card>
				<h1>About</h1>
				<p>This is the About page.</p>
			</Card>
		</div>
	);
}
