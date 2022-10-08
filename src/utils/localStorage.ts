import AsyncStorage from "@react-native-async-storage/async-storage";

class LocalStorage {
	async set<T>(key: string, value: T) {
		try {
			const json = JSON.stringify(value);
			await AsyncStorage.setItem(key, json);
		} catch (err) {
			//console.log(err)
		}
	}

	async get<T>(key: string): Promise<T | undefined> {
		try {
			const value = await AsyncStorage.getItem(key);

			if (!value) throw new Error();

			return JSON.parse(value);
		} catch (err) {
			//console.log(err)
			return;
		}
	}
}

export const localStorage = new LocalStorage();
