import { isPermissionGranted, requestPermission, sendNotification } from '@tauri-apps/api/notification';

export async function success(title: string, body: string) {
    let has = await isPermissionGranted();
    if (!has) {
        const permission = await requestPermission();
        has = permission === 'granted';
    }
    if (has) {
        sendNotification({ title, body });
        return;
    }
    console.error('No permission to send notifications');
}
