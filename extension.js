// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "jsmacros-intellisense" is now active!');

	const provider = vscode.languages.registerCompletionItemProvider(
		'javascript', // Or a custom language ID if you defined one for JSMacros
		{
			provideCompletionItems(document, position) {
				const linePrefix = document.lineAt(position).text.substr(0, position.character);
				// --- Handle completions for 'Chat.' ---

				if (!linePrefix.match(/\.$/)) { // Checks if linePrefix *doesn't* end with a dot
					const topLevelCompletions = [];

					const chatObject = new vscode.CompletionItem('Chat', vscode.CompletionItemKind.Module);
					chatObject.documentation = new vscode.MarkdownString('Functions for interacting with chat.\n\nAn instance of this class is passed to scripts as the Chat variable.');
					chatObject.sortText = '0_Chat'; // Prioritize with '0_'
					topLevelCompletions.push(chatObject);

					const clientObject = new vscode.CompletionItem('Client', vscode.CompletionItemKind.Module);
					clientObject.documentation = new vscode.MarkdownString('Functions that interact with minecraft that don\'t fit into their own module.\n\nAn instance of this class is passed to scripts as the Client variable.');
					topLevelCompletions.push(clientObject);

					const fileSystemObject = new vscode.CompletionItem('FS', vscode.CompletionItemKind.Module);
					fileSystemObject.documentation = new vscode.MarkdownString('Better File-System functions.\n\nAn instance of this class is passed to scripts as the FS variable.');
					topLevelCompletions.push(fileSystemObject);

					const globalVarsObject = new vscode.CompletionItem('GlobalVars', vscode.CompletionItemKind.Module);
					globalVarsObject.documentation = new vscode.MarkdownString('"Global" variables for passing to other contexts.\n\nAn instance of this class is passed to scripts as the GlobalVars variable.');
					topLevelCompletions.push(globalVarsObject);

					const hudObject = new vscode.CompletionItem('Hud', vscode.CompletionItemKind.Module);
					hudObject.documentation = new vscode.MarkdownString('Functions for displaying stuff in 2 to 3 dimensions\n\nAn instance of this class is passed to scripts as the Hud variable.');
					topLevelCompletions.push(hudObject);

					const javaUtilsObject = new vscode.CompletionItem('javaUtils', vscode.CompletionItemKind.Module);
					javaUtilsObject.documentation = new vscode.MarkdownString('Provides access to java utilities.');
					topLevelCompletions.push(javaUtilsObject);

					const jsMacrosObject = new vscode.CompletionItem('jsMacros', vscode.CompletionItemKind.Module);
					jsMacrosObject.documentation = new vscode.MarkdownString('Functions that interact directly with JsMacros or Events.\n\nAn instance of this class is passed to scripts as the JsMacros variable.');
					topLevelCompletions.push(jsMacrosObject);

					const keybindObject = new vscode.CompletionItem('KeyBind', vscode.CompletionItemKind.Module);
					keybindObject.documentation = new vscode.MarkdownString('Functions for getting and modifying key pressed states.\n\nAn instance of this class is passed to scripts as the KeyBind variable.');
					topLevelCompletions.push(keybindObject);

					const playerObject = new vscode.CompletionItem('Player', vscode.CompletionItemKind.Module);
					playerObject.documentation = new vscode.MarkdownString('Functions for getting and modifying the player\'s state.\n\nAn instance of this class is passed to scripts as the Player variable.');
					topLevelCompletions.push(playerObject);

					const positionCommonObject = new vscode.CompletionItem('PositionCommon', vscode.CompletionItemKind.Module);
					positionCommonObject.documentation = new vscode.MarkdownString('position helper classes.');
					topLevelCompletions.push(positionCommonObject);

					const reflectionObject = new vscode.CompletionItem('Reflection', vscode.CompletionItemKind.Module);
					reflectionObject.documentation = new vscode.MarkdownString('Functions for getting and using raw java classes, methods and functions.\n\nAn instance of this class is passed to scripts as the Reflection variable.');
					topLevelCompletions.push(reflectionObject);

					const requestObject = new vscode.CompletionItem('Request', vscode.CompletionItemKind.Module);
					requestObject.documentation = new vscode.MarkdownString('Functions for getting and using raw java classes, methods and functions.\n\nAn instance of this class is passed to scripts as the Reflection variable.');
					topLevelCompletions.push(requestObject);

					const timeObject = new vscode.CompletionItem('Time', vscode.timeObject.Module);
					timeObject.documentation = new vscode.MarkdownString('Functions for getting and using raw java classes, methods and functions.\n\nAn instance of this class is passed to scripts as the Time variable.');
					topLevelCompletions.push(timeObject);

					const utilsObject = new vscode.CompletionItem('Utils', vscode.timeObject.Module);
					utilsObject.documentation = new vscode.MarkdownString('Utility functions for various tasks.\n\nAn instance of this class is passed to scripts as the Utils variable.');
					topLevelCompletions.push(utilsObject);

					const worldObject = new vscode.CompletionItem('World', vscode.timeObject.Module);
					worldObject.documentation = new vscode.MarkdownString('Functions for getting and using world data.\n\nAn instance of this class is passed to scripts as the World variable.');
					topLevelCompletions.push(worldObject);

					return topLevelCompletions;
				}


				if (linePrefix.endsWith('Chat.')) {
					const chatCompletions = []; // No explicit type needed in JavaScript

					// Chat.log(message)
					const logCompletion1 = new vscode.CompletionItem('log(message)', vscode.CompletionItemKind.Method);
					logCompletion1.detail = 'Chat.log(message: Object): void';
					logCompletion1.documentation = new vscode.MarkdownString('Log to player chat.\n\n**Parameters:**\n- `message: Object`');
					logCompletion1.insertText = new vscode.SnippetString('log(${1:message})');
					chatCompletions.push(logCompletion1);

					// Chat.log(message, await)
					const logCompletion2 = new vscode.CompletionItem('log(message, await)', vscode.CompletionItemKind.Method);
					logCompletion2.detail = 'Chat.log(message: Object, await: boolean): void';
					logCompletion2.documentation = new vscode.MarkdownString('Logs a message to the chat and waits for the message to be sent before proceeding.\n\n**Parameters:**\n- `message: Object`\n- `await: boolean` - whether to wait for message to actually be sent to chat to continue.');
					logCompletion2.insertText = new vscode.SnippetString('log(${1:message}, ${2:await})');
					chatCompletions.push(logCompletion2);

					// Chat.logf(message, args)
					const logfCompletion1 = new vscode.CompletionItem('logf(message, ...args)', vscode.CompletionItemKind.Method);
					logfCompletion1.detail = 'Chat.logf(message: string, ...args: Object[]): void';
					logfCompletion1.documentation = new vscode.MarkdownString('Logs the formatted message to the player\'s chat. The message is formatted using the default Java `String#format(java.lang.String,java.lang.Object...)` syntax.\n\n**Parameters:**\n- `message: string` - the message to format and log\n- `args: Object[]` - the arguments used to format the message');
					logfCompletion1.insertText = new vscode.SnippetString('logf(${1:message}, ${2:...args})');
					chatCompletions.push(logfCompletion1);

					// Chat.logf(message, await, args)
					const logfCompletion2 = new vscode.CompletionItem('logf(message, await, ...args)', vscode.CompletionItemKind.Method);
					logfCompletion2.detail = 'Chat.logf(message: string, await: boolean, ...args: Object[]): void';
					logfCompletion2.documentation = new vscode.MarkdownString('Logs the formatted message to the player\'s chat. The message is formatted using the default Java `String#format(java.lang.String,java.lang.Object...)` syntax.\n\n**Parameters:**\n- `message: string` - the message to format and log\n- `await: boolean` - whether to wait for message to be sent to chat before continuing\n- `args: Object[]` - the arguments used to format the message');
					logfCompletion2.insertText = new vscode.SnippetString('logf(${1:message}, ${2:await}, ${3:...args})');
					chatCompletions.push(logfCompletion2);

					// Chat.logColor(message)
					const logColorCompletion1 = new vscode.CompletionItem('logColor(message)', vscode.CompletionItemKind.Method);
					logColorCompletion1.detail = 'Chat.logColor(message: string): void';
					logColorCompletion1.documentation = new vscode.MarkdownString('Logs with auto wrapping with `FChat#ampersandToSectionSymbol(java.lang.String)`.\n\n**Parameters:**\n- `message: string`');
					logColorCompletion1.insertText = new vscode.SnippetString('logColor(${1:message})');
					chatCompletions.push(logColorCompletion1);

					// Chat.logColor(message, await)
					const logColorCompletion2 = new vscode.CompletionItem('logColor(message, await)', vscode.CompletionItemKind.Method);
					logColorCompletion2.detail = 'Chat.logColor(message: string, await: boolean): void';
					logColorCompletion2.documentation = new vscode.MarkdownString('Logs with auto wrapping with `FChat#ampersandToSectionSymbol(java.lang.String)`.\n\n**Parameters:**\n- `message: string`\n- `await: boolean`');
					logColorCompletion2.insertText = new vscode.SnippetString('logColor(${1:message}, ${2:await})');
					chatCompletions.push(logColorCompletion2);

					// Chat.say(message)
					const sayCompletion1 = new vscode.CompletionItem('say(message)', vscode.CompletionItemKind.Method);
					sayCompletion1.detail = 'Chat.say(message: string): void';
					sayCompletion1.documentation = new vscode.MarkdownString('Say to server as player.\n\n**Parameters:**\n- `message: string`');
					sayCompletion1.insertText = new vscode.SnippetString('say(${1:message})');
					chatCompletions.push(sayCompletion1);

					// Chat.say(message, await)
					const sayCompletion2 = new vscode.CompletionItem('say(message, await)', vscode.CompletionItemKind.Method);
					sayCompletion2.detail = 'Chat.say(message: string, await: boolean): void';
					sayCompletion2.documentation = new vscode.MarkdownString('Say to server as player.\n\n**Parameters:**\n- `message: string`\n- `await: boolean`');
					sayCompletion2.insertText = new vscode.SnippetString('say(${1:message}, ${2:await})');
					chatCompletions.push(sayCompletion2);

					// Chat.sayf(message, args)
					const sayfCompletion1 = new vscode.CompletionItem('sayf(message, ...args)', vscode.CompletionItemKind.Method);
					sayfCompletion1.detail = 'Chat.sayf(message: string, ...args: Object[]): void';
					sayfCompletion1.documentation = new vscode.MarkdownString('Sends the formatted message to the server. The message is formatted using the default Java `String#format(java.lang.String,java.lang.Object...)` syntax.\n\n**Parameters:**\n- `message: string` - the message to format and send to the server\n- `args: Object[]` - the arguments used to format the message');
					sayfCompletion1.insertText = new vscode.SnippetString('sayf(${1:message}, ${2:...args})');
					chatCompletions.push(sayfCompletion1);

					// Chat.sayf(message, await, args)
					const sayfCompletion2 = new vscode.CompletionItem('sayf(message, await, ...args)', vscode.CompletionItemKind.Method);
					sayfCompletion2.detail = 'Chat.sayf(message: string, await: boolean, ...args: Object[]): void';
					sayfCompletion2.documentation = new vscode.MarkdownString('Sends the formatted message to the server. The message is formatted using the default Java `String#format(java.lang.String,java.lang.Object...)` syntax.\n\n**Parameters:**\n- `message: string` - the message to format and send to the server\n- `await: boolean` - whether to wait for message to be sent to chat before continuing\n- `args: Object[]` - the arguments used to format the message');
					sayfCompletion2.insertText = new vscode.SnippetString('sayf(${1:message}, ${2:await}, ${3:...args})');
					chatCompletions.push(sayfCompletion2);

					// Chat.open(message)
					const openCompletion1 = new vscode.CompletionItem('open(message)', vscode.CompletionItemKind.Method);
					openCompletion1.detail = 'Chat.open(message: string): void';
					openCompletion1.documentation = new vscode.MarkdownString('Opens the chat input box with specific text already typed.\n\n**Parameters:**\n- `message: string` - the message to start the chat screen with');
					openCompletion1.insertText = new vscode.SnippetString('open(${1:message})');
					chatCompletions.push(openCompletion1);

					// Chat.open(message, await)
					const openCompletion2 = new vscode.CompletionItem('open(message, await)', vscode.CompletionItemKind.Method);
					openCompletion2.detail = 'Chat.open(message: string, await: boolean): void';
					openCompletion2.documentation = new vscode.MarkdownString('Opens the chat input box with specific text already typed. Hint: you can combine with `FJsMacros#waitForEvent(java.lang.String)` or `FJsMacros#once(java.lang.String,xyz.wagyourtail.jsmacros.core.MethodWrapper,java.lang.Object,?>)` to wait for the chat screen to close and/or to wait for the sent message.\n\n**Parameters:**\n- `message: string` - the message to start the chat screen with\n- `await: boolean`');
					openCompletion2.insertText = new vscode.SnippetString('open(${1:message}, ${2:await})');
					chatCompletions.push(openCompletion2);

					// Chat.title(title, subtitle, fadeIn, remain, fadeOut)
					const titleCompletion = new vscode.CompletionItem('title(title, subtitle, fadeIn, remain, fadeOut)', vscode.CompletionItemKind.Method);
					titleCompletion.detail = 'Chat.title(title: Object, subtitle: Object, fadeIn: number, remain: number, fadeOut: number): void';
					titleCompletion.documentation = new vscode.MarkdownString('Displays a Title to the player.\n\n**Parameters:**\n- `title: Object`\n- `subtitle: Object`\n- `fadeIn: int`\n- `remain: int`\n- `fadeOut: int`');
					titleCompletion.insertText = new vscode.SnippetString('title(${1:title}, ${2:subtitle}, ${3:fadeIn}, ${4:remain}, ${5:fadeOut})');
					chatCompletions.push(titleCompletion);

					// Chat.actionbar(text)
					const actionbarCompletion1 = new vscode.CompletionItem('actionbar(text)', vscode.CompletionItemKind.Method);
					actionbarCompletion1.detail = 'Chat.actionbar(text: Object): void';
					actionbarCompletion1.documentation = new vscode.MarkdownString('Displays the smaller title that\'s above the actionbar.\n\n**Parameters:**\n- `text: Object`');
					actionbarCompletion1.insertText = new vscode.SnippetString('actionbar(${1:text})');
					chatCompletions.push(actionbarCompletion1);

					// Chat.actionbar(text, tinted)
					const actionbarCompletion2 = new vscode.CompletionItem('actionbar(text, tinted)', vscode.CompletionItemKind.Method);
					actionbarCompletion2.detail = 'Chat.actionbar(text: Object, tinted: boolean): void';
					actionbarCompletion2.documentation = new vscode.MarkdownString('Displays the smaller title that\'s above the actionbar.\n\n**Parameters:**\n- `text: Object`\n- `tinted: boolean`');
					actionbarCompletion2.insertText = new vscode.SnippetString('actionbar(${1:text}, ${2:tinted})');
					chatCompletions.push(actionbarCompletion2);

					// Chat.toast(title, desc)
					const toastCompletion = new vscode.CompletionItem('toast(title, desc)', vscode.CompletionItemKind.Method);
					toastCompletion.detail = 'Chat.toast(title: Object, desc: Object): void';
					toastCompletion.documentation = new vscode.MarkdownString('Displays a toast.\n\n**Parameters:**\n- `title: Object`\n- `desc: Object`');
					toastCompletion.insertText = new vscode.SnippetString('toast(${1:title}, ${2:desc})');
					chatCompletions.push(toastCompletion);

					// Chat.createTextHelperFromString(content)
					const createTextHelperFromStringCompletion = new vscode.CompletionItem('createTextHelperFromString(content)', vscode.CompletionItemKind.Method);
					createTextHelperFromStringCompletion.detail = 'Chat.createTextHelperFromString(content: string): TextHelper';
					createTextHelperFromStringCompletion.documentation = new vscode.MarkdownString('Creates a `TextHelper` for use where you need one and not a string.\n\n**Parameters:**\n- `content: string`\n\n**Returns:** `TextHelper` - a new TextHelper');
					createTextHelperFromStringCompletion.insertText = new vscode.SnippetString('createTextHelperFromString(${1:content})');
					chatCompletions.push(createTextHelperFromStringCompletion);

					// Chat.createTextHelperFromTranslationKey(key, content)
					const createTextHelperFromTranslationKeyCompletion = new vscode.CompletionItem('createTextHelperFromTranslationKey(key, content)', vscode.CompletionItemKind.Method);
					createTextHelperFromTranslationKeyCompletion.detail = 'Chat.createTextHelperFromTranslationKey(key: string, content: Object[]): TextHelper';
					createTextHelperFromTranslationKeyCompletion.documentation = new vscode.MarkdownString('**Parameters:**\n- `key: string`\n- `content: Object[]`\n\n**Returns:** `TextHelper` - a new TextHelper');
					createTextHelperFromTranslationKeyCompletion.insertText = new vscode.SnippetString('createTextHelperFromTranslationKey(${1:key}, ${2:content})');
					chatCompletions.push(createTextHelperFromTranslationKeyCompletion);

					// Chat.getLogger()
					const getLoggerCompletion1 = new vscode.CompletionItem('getLogger()', vscode.CompletionItemKind.Method);
					getLoggerCompletion1.detail = 'Chat.getLogger(): Logger';
					getLoggerCompletion1.documentation = new vscode.MarkdownString('**Returns:** `Logger`');
					getLoggerCompletion1.insertText = new vscode.SnippetString('getLogger()');
					chatCompletions.push(getLoggerCompletion1);

					// Chat.getLogger(name)
					const getLoggerCompletion2 = new vscode.CompletionItem('getLogger(name)', vscode.CompletionItemKind.Method);
					getLoggerCompletion2.detail = 'Chat.getLogger(name: string): Logger';
					getLoggerCompletion2.documentation = new vscode.MarkdownString('Returns a log4j logger, for logging to console only.\n\n**Parameters:**\n- `name: string`\n\n**Returns:** `Logger`');
					getLoggerCompletion2.insertText = new vscode.SnippetString('getLogger(${1:name})');
					chatCompletions.push(getLoggerCompletion2);

					// Chat.createTextHelperFromJSON(json)
					const createTextHelperFromJSONCompletion = new vscode.CompletionItem('createTextHelperFromJSON(json)', vscode.CompletionItemKind.Method);
					createTextHelperFromJSONCompletion.detail = 'Chat.createTextHelperFromJSON(json: string): TextHelper';
					createTextHelperFromJSONCompletion.documentation = new vscode.MarkdownString('Creates a `TextHelper` for use where you need one and not a string.\n\n**Parameters:**\n- `json: string`\n\n**Returns:** `TextHelper` - a new TextHelper');
					createTextHelperFromJSONCompletion.insertText = new vscode.SnippetString('createTextHelperFromJSON(${1:json})');
					chatCompletions.push(createTextHelperFromJSONCompletion);

					// Chat.createTextBuilder()
					const createTextBuilderCompletion = new vscode.CompletionItem('createTextBuilder()', vscode.CompletionItemKind.Method);
					createTextBuilderCompletion.detail = 'Chat.createTextBuilder(): TextBuilder';
					createTextBuilderCompletion.documentation = new vscode.MarkdownString('**Returns:** `TextBuilder` - a new builder');
					createTextBuilderCompletion.insertText = new vscode.SnippetString('createTextBuilder()');
					chatCompletions.push(createTextBuilderCompletion);

					// Chat.createCommandBuilder(name) - Deprecated
					const createCommandBuilderCompletion = new vscode.CompletionItem('createCommandBuilder(name)', vscode.CompletionItemKind.Method);
					createCommandBuilderCompletion.detail = 'Chat.createCommandBuilder(name: string): CommandBuilder';
					createCommandBuilderCompletion.documentation = new vscode.MarkdownString('**Deprecated.**\n\n**Parameters:**\n- `name: string` - name of command\n\n**Returns:** `CommandBuilder`');
					createCommandBuilderCompletion.insertText = new vscode.SnippetString('createCommandBuilder(${1:name})');
					createCommandBuilderCompletion.tags = [vscode.CompletionItemTag.Deprecated]; // Mark as deprecated
					chatCompletions.push(createCommandBuilderCompletion);

					// Chat.unregisterCommand(name) - Deprecated
					const unregisterCommandCompletion = new vscode.CompletionItem('unregisterCommand(name)', vscode.CompletionItemKind.Method);
					unregisterCommandCompletion.detail = 'Chat.unregisterCommand(name: string): CommandNodeHelper';
					unregisterCommandCompletion.documentation = new vscode.MarkdownString('**Deprecated.**\n\n**Parameters:**\n- `name: string`\n\n**Returns:** `CommandNodeHelper`');
					unregisterCommandCompletion.insertText = new vscode.SnippetString('unregisterCommand(${1:name})');
					unregisterCommandCompletion.tags = [vscode.CompletionItemTag.Deprecated]; // Mark as deprecated
					chatCompletions.push(unregisterCommandCompletion);

					// Chat.reRegisterCommand(node) - Deprecated
					const reRegisterCommandCompletion = new vscode.CompletionItem('reRegisterCommand(node)', vscode.CompletionItemKind.Method);
					reRegisterCommandCompletion.detail = 'Chat.reRegisterCommand(node: CommandNodeHelper): void';
					reRegisterCommandCompletion.documentation = new vscode.MarkdownString('**Deprecated.**\n\n**Parameters:**\n- `node: CommandNodeHelper`');
					reRegisterCommandCompletion.insertText = new vscode.SnippetString('reRegisterCommand(${1:node})');
					reRegisterCommandCompletion.tags = [vscode.CompletionItemTag.Deprecated]; // Mark as deprecated
					chatCompletions.push(reRegisterCommandCompletion);

					// Chat.getCommandManager()
					const getCommandManagerCompletion = new vscode.CompletionItem('getCommandManager()', vscode.CompletionItemKind.Method);
					getCommandManagerCompletion.detail = 'Chat.getCommandManager(): CommandManager';
					getCommandManagerCompletion.documentation = new vscode.MarkdownString('**Returns:** `CommandManager`');
					getCommandManagerCompletion.insertText = new vscode.SnippetString('getCommandManager()');
					chatCompletions.push(getCommandManagerCompletion);

					// Chat.getHistory()
					const getHistoryCompletion = new vscode.CompletionItem('getHistory()', vscode.CompletionItemKind.Method);
					getHistoryCompletion.detail = 'Chat.getHistory(): ChatHistoryManager';
					getHistoryCompletion.documentation = new vscode.MarkdownString('**Returns:** `ChatHistoryManager`');
					getHistoryCompletion.insertText = new vscode.SnippetString('getHistory()');
					chatCompletions.push(getHistoryCompletion);

					// Chat.getTextWidth(text)
					const getTextWidthCompletion = new vscode.CompletionItem('getTextWidth(text)', vscode.CompletionItemKind.Method);
					getTextWidthCompletion.detail = 'Chat.getTextWidth(text: string): number';
					getTextWidthCompletion.documentation = new vscode.MarkdownString('**Parameters:**\n- `text: string` - the text to get the width of\n\n**Returns:** `int` - the width of the given text in pixels.');
					getTextWidthCompletion.insertText = new vscode.SnippetString('getTextWidth(${1:text})');
					chatCompletions.push(getTextWidthCompletion);

					// Chat.sectionSymbolToAmpersand(string)
					const sectionSymbolToAmpersandCompletion = new vscode.CompletionItem('sectionSymbolToAmpersand(string)', vscode.CompletionItemKind.Method);
					sectionSymbolToAmpersandCompletion.detail = 'Chat.sectionSymbolToAmpersand(string: string): string';
					sectionSymbolToAmpersandCompletion.documentation = new vscode.MarkdownString('Escapes `§` to `&` (escapes `&` to `&&` since 1.9.0).\n\n**Parameters:**\n- `string: string`\n\n**Returns:** `String`');
					sectionSymbolToAmpersandCompletion.insertText = new vscode.SnippetString('sectionSymbolToAmpersand(${1:string})');
					chatCompletions.push(sectionSymbolToAmpersandCompletion);

					// Chat.ampersandToSectionSymbol(string)
					const ampersandToSectionSymbolCompletion = new vscode.CompletionItem('ampersandToSectionSymbol(string)', vscode.CompletionItemKind.Method);
					ampersandToSectionSymbolCompletion.detail = 'Chat.ampersandToSectionSymbol(string: string): string';
					ampersandToSectionSymbolCompletion.documentation = new vscode.MarkdownString('Escapes `&` to `§` (escapes `&&` to `&` since 1.9.0).\n\n**Parameters:**\n- `string: string`\n\n**Returns:** `String`');
					ampersandToSectionSymbolCompletion.insertText = new vscode.SnippetString('ampersandToSectionSymbol(${1:string})');
					chatCompletions.push(ampersandToSectionSymbolCompletion);

					// Chat.stripFormatting(string)
					const stripFormattingCompletion = new vscode.CompletionItem('stripFormatting(string)', vscode.CompletionItemKind.Method);
					stripFormattingCompletion.detail = 'Chat.stripFormatting(string: string): string';
					stripFormattingCompletion.documentation = new vscode.MarkdownString('**Parameters:**\n- `string: string`\n\n**Returns:** `String`');
					stripFormattingCompletion.insertText = new vscode.SnippetString('stripFormatting(${1:string})');
					chatCompletions.push(stripFormattingCompletion);


					return chatCompletions;
				}
				// --- Handle completions for 'World.' ---
				if (linePrefix.endsWith('World.')) {
					const worldCompletions = [];

					// World.getBlock(x, y, z)
					const getBlock = new vscode.CompletionItem('getBlock(x, y, z)', vscode.CompletionItemKind.Method);
					getBlock.detail = 'World.getBlock(x: number, y: number, z: number): Block';
					getBlock.documentation = new vscode.MarkdownString('Gets the block at the specified coordinates.');
					getBlock.insertText = new vscode.SnippetString('getBlock(${1:x}, ${2:y}, ${3:z})');
					worldCompletions.push(getBlock);

					// World.getBiome(x, z)
					const getBiome = new vscode.CompletionItem('getBiome(x, z)', vscode.CompletionItemKind.Method);
					getBiome.detail = 'World.getBiome(x: number, z: number): Biome';
					getBiome.documentation = new vscode.MarkdownString('Gets the biome at the specified coordinates.');
					getBiome.insertText = new vscode.SnippetString('getBiome(${1:x}, ${2:z})');
					worldCompletions.push(getBiome);

					// Add more World methods/properties here...
					return worldCompletions;
				}

				// --- Handle completions for 'Player.' ---
				if (linePrefix.endsWith('Player.')) {
					const playerCompletions = [];

					// Player.getName()
					const getName = new vscode.CompletionItem('getName()', vscode.CompletionItemKind.Method);
					getName.detail = 'Player.getName(): string';
					getName.documentation = new vscode.MarkdownString('Gets the name of the current player.');
					getName.insertText = new vscode.SnippetString('getName()');
					playerCompletions.push(getName);

					// Player.getHealth()
					const getHealth = new vscode.CompletionItem('getHealth()', vscode.CompletionItemKind.Method);
					getHealth.detail = 'Player.getHealth(): number';
					getHealth.documentation = new vscode.MarkdownString('Gets the current health of the player.');
					getHealth.insertText = new vscode.SnippetString('getHealth()');
					playerCompletions.push(getHealth);

					// Add more Player methods/properties here...
					return playerCompletions;
				}

				// --- Handle top-level completions (e.g., 'World', 'Player', 'Chat', etc.) ---
				// Only provide these if the linePrefix doesn't end with a dot,
				// meaning the user is typing at the root level or after a space.



				return undefined; // No completions if no specific prefix matched
			}
		},
		'.' // Trigger character for autocompletion
	);

	// const disposable = vscode.commands.registerCommand('jsmacros-intellisense.helloWorld', function () {
	// 	// The code you place here will be executed every time your command is executed

	// 	// Display a message box to the user
	// 	vscode.window.showInformationMessage('Hello from the extension that is NOT FUCKING WORKING');
	// });



	context.subscriptions.push(provider);
}

// This method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
