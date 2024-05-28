import prompt from 'prompt';

import { promptSchemaMain } from './prompts/schemas/main.js';
import { Password } from './services/password/index.js';
import { QRCode } from './services/qrcode/index.js';

(() => {
	prompt.get(promptSchemaMain, (err, result) => {
		if (err) console.error(err);

		if (result.select == 1) QRCode.create();
		if (result.select == 2) Password.create();
	});

	prompt.start();
})();
