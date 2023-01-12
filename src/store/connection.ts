import { MeiliSearch } from 'meilisearch';
import { setStorage, getStorage, removeStorage } from '@/utils/storage';
import { cli } from '@tauri-apps/api';

const connectionCacheKey = 'meiliadm-store-connections';
const clients = new Map<string, MeiliSearch>();

export const connections = (): Record<string, Connection> => {
    return getStorage(connectionCacheKey) || {};
};

export const storeConnection = (conn: Connection) => {
    const conns = getStorage(connectionCacheKey) || {};
    conns[conn.name] = conn;
    console.log(conns);
    setStorage(connectionCacheKey, conns);
};

export const removeConnection = (name: string) => {
    const conns = getStorage(connectionCacheKey);
    if (!conns) return;
    delete conns[name];
    setStorage(connectionCacheKey, conns);
};

export const getConnection = (name: string): MeiliSearch | undefined => {
    const conns = getStorage(connectionCacheKey);
    if (!conns) return conns;

    const conn = conns[name];
    if (!conn) return conn;

    if (clients.has(conn.name)) {
        return clients.get(conn.name);
    }

    const client = new MeiliSearch({ host: conn.host, apiKey: conn.apiKey });
    clients.set(conn.name, client);
    return client;
};

export const exists = (name: string) => {
    const conns = getStorage(connectionCacheKey);
    if (!conns) return false;

    const conn = conns[name];
    return Boolean(conn);
};
