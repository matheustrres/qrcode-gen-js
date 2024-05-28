import chalk from 'chalk';
import prompt from 'prompt';
import qr from 'qrcode-terminal';

import { promptSchemaQRCode } from '../../prompts/schemas/qrcode.js';

export class QRCode {
	static create() {
		prompt.get(promptSchemaQRCode, QRCode.#handle);
		prompt.start();
	}

	static #handle(err, result) {
		if (err) {
			console.error('Error on application: ', err);
			return;
		}

		const isSmall = result.type == 2;

		qr.generate(result.link, { small: isSmall }, (qrcode) => {
			console.log(chalk.green('QRCode successfully generated:\n'));
			console.log(qrcode);
		});
	}
}
