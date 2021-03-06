const products = [
	{
		id: 1,
		category: "Headphones",
		name: "boAt Bassheads 900 On Ear Wired Headphones(Carbon Black)",
		rating: 4,
		reviewnum: 2343,
		price: 520,
		imgurl: "https://m.media-amazon.com/images/I/61xeIT6UHrL._AC_UY218_.jpg",
	},
	{
		id: 2,
		category: "Headphones",
		name: "Sony MDR-ZX110AP Wired Headphones",
		rating: 0,
		reviewnum: 0,
		price: 5120,
		imgurl: "https://m.media-amazon.com/images/I/41BoLKMYjnL._AC_UY218_.jpg",
	},
	{
		id: 3,
		category: "Headphones",
		name: "Sony WH-XB900N Wireless speaker",
		rating: 3.5,
		reviewnum: 2343,
		price: 820,
		imgurl: "https://m.media-amazon.com/images/I/81cJ1kUT1LL._AC_UY218_.jpg",
	},
	{
		id: 4,
		category: "Headphones",
		name: "JBL E45BT Wireless Headphones",
		rating: 2.5,
		reviewnum: 833,
		price: 920,
		imgurl: "https://m.media-amazon.com/images/I/81lLGM7SKbL._AC_UY218_.jpg",
	},
	{
		id: 5,
		category: "Headphones",
		name: "Bose QuietComfort 35 II Wireless Headphones",
		rating: 0,
		reviewnum: 0,
		price: 990,
		imgurl: "https://m.media-amazon.com/images/I/61ihz46SLOL._AC_UY218_.jpg",
	},
	{
		id: 6,
		category: "Headphones",
		name: "Sony WH-1000XM4",
		rating: 4.5,
		reviewnum: 23143,
		price: 5120,
		imgurl: "https://m.media-amazon.com/images/I/71r6AArbBBL._AC_UY218_.jpg",
	},
	{
		id: 7,
		category: "Headphones",
		name: "Sennheiser HD 560S",
		rating: 2,
		reviewnum: 143,
		price: 590,
		imgurl: "https://m.media-amazon.com/images/I/61stQYWQO4L._AC_UY218_.jpg",
	},
	{
		id: 8,
		category: "Headphones",
		name: "Philips PH805",
		rating: 5,
		reviewnum: 443,
		price: 5120,
		imgurl: "https://m.media-amazon.com/images/I/513mDbXPxaS._AC_UY218_.jpg",
	},
	{
		id: 9,
		category: "Headphones",
		name: "Sennheiser Momentum Wireless ",
		rating: 4,
		reviewnum: 43,
		price: 520,
		imgurl: "https://m.media-amazon.com/images/I/71rSu40EANL._AC_UY218_.jpg",
	},
	{
		id: 10,
		category: "Headphones",
		name: "Audeze LCD-1. ",
		rating: 4.5,
		reviewnum: 343,
		price: 520,
		imgurl: "https://m.media-amazon.com/images/I/61LuTKQUDwL._AC_UY218_.jpg",
	},
	{
		id: 11,
		category: "Speakers",
		name: "Bose SoundLink Mini II Bluetooth Speaker.",
		rating: 4,
		reviewnum: 2343,
		price: 520,
		imgurl: "https://images-eu.ssl-images-amazon.com/images/I/61CcvfVAQHL._AC_UL200_SR200,200_.jpg",
	},
	{
		id: 12,
		category: "Speakers",
		name: "Ultimate Ears Boom 3 Wireless Bluetooth Speaker",
		rating: 0,
		reviewnum: 0,
		price: 5120,
		imgurl: "https://images-eu.ssl-images-amazon.com/images/I/61fAoBkYQ1L._AC_UL200_SR200,200_.jpg",
	},
	{
		id: 13,
		category: "Speakers",
		name: "Sony SRS-XB12 Wireless Bluetooth Speaker",
		rating: 3.5,
		reviewnum: 2343,
		price: 820,
		imgurl: "https://images-eu.ssl-images-amazon.com/images/I/713s1hhyPbL._AC_UL200_SR200,200_.jpg",
	},
	{
		id: 14,
		category: "Speakers",
		name: "Anker SoundCore Sport XL Portable Bluetooth Speaker.",
		rating: 2.5,
		reviewnum: 833,
		price: 920,
		imgurl: "https://images-eu.ssl-images-amazon.com/images/I/61D5DMDOdLL._AC_UL200_SR200,200_.jpg",
	},
	{
		id: 15,
		category: "Speakers",
		name: "JBL Charge 4 Bluetooth Speaker.",
		rating: 3.5,
		reviewnum: 743,
		price: 990,
		imgurl: "https://images-eu.ssl-images-amazon.com/images/I/7195XDbPRGL._AC_UL200_SR200,200_.jpg",
	},
	{
		id: 16,
		category: "Speakers",
		name: "boAt Stone 1000 Wireless Speaker",
		rating: 4.5,
		reviewnum: 23143,
		price: 5120,
		imgurl: "https://images-eu.ssl-images-amazon.com/images/I/61Mq3HQ5MqL._AC_UL200_SR200,200_.jpg",
	},
	{
		id: 17,
		category: "Speakers",
		name: "JBL clip 3",
		rating: 0,
		reviewnum: 0,
		price: 590,
		imgurl: "https://images-eu.ssl-images-amazon.com/images/I/71YXa2%2BAyNL._AC_UL200_SR200,200_.jpg",
	},
	{
		id: 18,
		category: "Speakers",
		name: "JBL Flip 4",
		rating: 5,
		reviewnum: 443,
		price: 5120,
		imgurl: "https://images-eu.ssl-images-amazon.com/images/I/91WrXcf79eL._AC_UL200_SR200,200_.jpg",
	},
	{
		id: 19,
		category: "Speakers",
		name: "mivi portable speakers",
		rating: 4,
		reviewnum: 43,
		price: 520,
		imgurl: "https://images-eu.ssl-images-amazon.com/images/I/61UJnlIHF9S._AC_UL200_SR200,200_.jpg",
	},
	{
		id: 20,
		category: "Speakers",
		name: "Audeze LCD-1 portable speakers ",
		rating: 4.5,
		reviewnum: 343,
		price: 520,
		imgurl: "https://images-eu.ssl-images-amazon.com/images/I/81cyVGquiqL._AC_UL200_SR200,200_.jpg",
	},
];

export default products;
