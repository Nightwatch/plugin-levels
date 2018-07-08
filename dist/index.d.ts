import { CommandoClient } from 'discord.js-commando';
import { Config } from '@nightwatch/util';
export declare class Module {
    static config: Config;
    static client: CommandoClient;
    static id: string;
    static description: string;
    /**
     * Initializes module
     * @param client
     * @param config
     */
    init(client: CommandoClient, config: Config): Promise<void>;
    /**
     * Register events
     * @param client
     */
    private registerListeners(client, config);
}
