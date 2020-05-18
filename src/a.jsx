import React from 'react';

export default function TestA() {
	const img = require('./assets/img/order-pay.png')

	return <div>
		test...Component
		<img src={img} alt=""/>
		{/*<img src={require('./assets/img/test1.14db315c.jpg')} alt=""/>*/}
		<div className="img-a"></div>
	</div>
}
