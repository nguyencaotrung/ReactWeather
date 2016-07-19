var React = require('react');
var {Link, IndexLink} = require('react-router');



var Nav = () =>{
	return (
			<div>
				<h2>New Component</h2>
				<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
				<Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
				<Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>
			</div>
		);
};
module.exports = Nav;