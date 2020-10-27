import React, { useState } from 'react';

const Sign = ({ isAnswering, message }) => {
	
	const ranges = [
	  '\ud83c[\udf00-\udfff]', // U+1F300 to U+1F3FF
	  '\ud83d[\udc00-\ude4f]', // U+1F400 to U+1F64F
	  '\ud83d[\ude80-\udeff]', // U+1F680 to U+1F6FF
	  ' ', // Also allow spaces
	].join('|');

	const removeEmoji = str => str.replace(new RegExp(ranges, 'g'), '');

	const isOnlyEmojis = str => !removeEmoji(str).length;

	return (
		<div className={isAnswering ? "sign" : "sign sign-active"}>
			<div className={ isOnlyEmojis(message) ? 'sign-board emoji' : 'sign-board'}>{ message }</div>
			<div className="sign-post"></div>
		</div>
	)
}

export default Sign;