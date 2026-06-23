type ExtensionAPI = {
	registerCommand(name: string, command: {
		description: string;
		handler(args: unknown, ctx: { shutdown(): void }): void | Promise<void>;
	}): void;
};

export default function (pi: ExtensionAPI) {
	pi.registerCommand("exit", {
		description: "Exit pi cleanly",
		handler: async (_args, ctx) => {
			ctx.shutdown();
		},
	});
}
