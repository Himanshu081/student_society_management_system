import { Injectable } from "@angular/core";
import { Record } from "./record.model";
@Injectable()
export class Update {
public id: number;
public name: string;
public address: string;
public city: string;
public state: string;
public zip: string;
public country: string;
public shipped: boolean = false;
constructor(public record: Record) { }
clear() {
this.id = null;
this.name = this.address = this.city = null;
this.state = this.zip = this.country = null;
this.shipped = false;
this.record.clear();
}
}