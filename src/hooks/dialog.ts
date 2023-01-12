import { message } from '@tauri-apps/api/dialog';

export async function success(msg: string, title: string) {
    await message(msg, { title, type: 'info' });
}

export async function error(msg: string, title: string) {
    await message(msg, { title, type: 'error' });
}
