import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'

export default class Nav extends Component {
	render() {
		return (
			<div className="nav">
				<div className="nav-heading">
					<img src="/assets/img/library/bee-logo.svg" />
				</div>
				<div className="nav-list">
					<div className="nav-item">
						<Link to="dashboard" activeClassName="nav-item__active-link">Dashboard</Link>
					</div>
					<div className="nav-item">
						<Link to="content" activeClassName="nav-item__active-link">Content Library</Link>
					</div>
					<div className="nav-item">
						<Link to="edit" activeClassName="nav-item__active-link">New Article</Link>
					</div>
					<div className="nav-item">
						<a href="#" onClick={this.props.toggleMediaOverlay}>Media</a>
					</div>					
					<div className="nav-item disabled">Author</div>
					<div className="nav-item disabled">Collections</div>
					<div className="nav-item disabled">Configuration</div>
				</div>
				<div className="nav-toolbelt">
					<a href="http://toolbelt.cnbc.com">
						<i className="iconcss icon-toolbelt-logo"></i> Go to toolbelt
					</a>
				</div>
			</div>
		)
	}
}
