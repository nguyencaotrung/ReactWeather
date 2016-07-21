var React = require('react');
var {Link} = require('react-router');


var Examples = () => {
	return(
		<div>
			<h1 className="text-center page-title">Examples</h1>
			<p>here are a few examples locations to try out !</p>

			<ol>
				<li>
					<Link to='/?location=London'>London, PA</Link>
				</li>

				<li>
					<Link to='/location=Rio'>Rio, Brazil</Link>
				</li>
			</ol>

		</div>
		
	);
};

module.exports = Examples;