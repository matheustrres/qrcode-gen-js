import chalk from 'chalk';

export const promptSchemaMain = [
	{
		name: 'select',
		description: chalk.yellow.bold(
			'Choose a tool: 1) Generate QRCode | 2) Create a random password',
		),
		pattern: /^[1-2]+$/,
		message: chalk.red.italic('Choose only between 1 and 2'),
		required: true,
	},
];
