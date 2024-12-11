import { Injectable } from "@angular/core";
import { Drivers, Storage } from "@ionic/storage";
import cordovaSQLiteDriver from "localforage-cordovasqlitedriver";
@Injectable({
    providedIn: 'root'
})
export class DatabaseService {
    private _storage: Storage | null = null;
    constructor(private storage: Storage) {
        this.initDb()
    }

    private async initDb(){
        this.storage = new Storage({
            driverOrder: [cordovaSQLiteDriver._driver, Drivers.IndexedDB,
                 Drivers.LocalStorage]
        });

        await this.storage.defineDriver(cordovaSQLiteDriver);
        const storage = await this.storage.create();
        this._storage = storage;
    }

    public set(key: string, value: any) {
        this._storage?.set(key, value);
    }
}