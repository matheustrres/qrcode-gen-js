import chalk from 'chalk';

export const promptSchemaQRCode = [
	{
		name: 'link',
		description: chalk.yellow('Enter the link to generate the QR CODE'),
	},
	{
		name: 'type',
		description: chalk.yellow(
			'Choose between the QRcode type (1- NORMAL or 2- TERMINAL).',
		),
		pattern: /^[1-2]+$/,
		message: chalk.red.italic('Choose only between 1 and 2'),
		required: true,
	},
];
