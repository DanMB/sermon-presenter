import { ICommand } from '@src/ts/commands/AllCommands';
import Commands from '@src/ts/commands/Commands';
import CustomEvents, { Events } from '@src/ts/CustomEvents';
import { Command } from 'cmdk';
import Mousetrap from 'mousetrap';
import { useEffect, useState } from 'react';
import './CommandDialog.scss';

const CommandDialog = () => {
	const [isOpen, setOpen] = useState(false);
	const [commands, setCommands] = useState<ICommand[]>([]);
	const [value, setValue] = useState('');

	const toggleOpen = () => {
		setOpen(current => !current);
	};

	useEffect(() => {
		if (isOpen) {
			setCommands(Commands.getAll());
		}
	}, [isOpen]);

	useEffect(() => {
		CustomEvents.listen(Events.COMMANDS, toggleOpen);

		return function () {
			CustomEvents.remove(Events.COMMANDS, toggleOpen);
		};
	}, []);

	return (
		<Command.Dialog
			className={'CommandDialog'}
			open={isOpen}
			onOpenChange={setOpen}
			value={value}
			onValueChange={setValue}
		>
			<Command.Input className={'CommandInput'} />

			<Command.List className={'CommandList'}>
				<Command.Empty className={'CommandEmpty'}>No results found.</Command.Empty>

				{commands.map(command => (
					<CommandItem
						key={command.name}
						command={command}
						onSelect={() => {
							setOpen(false);
						}}
					/>
				))}
			</Command.List>
		</Command.Dialog>
	);
};

const CommandItem = ({ command, onSelect }: { command: ICommand; onSelect: () => void }) => {
	if (command.hidden) return null;
	return (
		<Command.Item
			className={'CommandItem'}
			onSelect={() => {
				command.call();
				onSelect();
			}}
		>
			<span>{command.name}</span>
			<span>
				{Commands.getKeybinds(command).map(keybind => (
					<span key={keybind}>
						{keybind.split('+').map(key => (
							<kbd key={key}>{Commands.keycode(key)}</kbd>
						))}
					</span>
				))}
			</span>
		</Command.Item>
	);
};

export default CommandDialog;
