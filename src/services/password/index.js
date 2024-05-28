import chalk from 'chalk';

import { permittedCharacters } from './utils/permitted-chars.js';

export class Password {
	static create() {
		const password = Password.#handle();

		console.log(chalk.green(`Password: ${chalk.red(password)}`));
	}

	static #handle() {
		let chars = [];
		let password = '';

		const passwordLength = process.env.PASSWORD_LENGTH;

		chars = permittedCharacters();

		for (let i = 0; i < passwordLength; i++) {
			const index = Math.floor(Math.random() * chars.length);

			password += chars[index];
		}

		return password;
	}
}
