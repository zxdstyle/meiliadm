import { MeiliSearch } from 'meilisearch';
import { setStorage, getStorage, removeStorage } from '@/utils/storage';
import { cli } from '@tauri-apps/api';

const connectionCacheKey = 'meiliadm-store-connections';
const clients = new Map<string, MeiliSearch>();

export const storeConnection = (conn: Connection) => {
    setStorage(`${connectionCacheKey}-${conn.name}`, conn);
};

export const removeConnection = (name: string) => {
    removeStorage(name);
};

export const getConnection = (name: string) => {
    const conn = getStorage(name);
    if (!conn) return conn;

    if (clients.has(conn.name)) {
        return clients.get(conn.name);
    }

    const client = new MeiliSearch({ host: conn.host, apiKey: conn.apiKey });
    clients.set(conn.name, client);
    return client;
};

export const exists = (name: string) => {
    return Boolean(getStorage(name));
};
