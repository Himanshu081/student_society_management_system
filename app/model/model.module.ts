import { NgModule } from "@angular/core";
import { StudentRepository } from "./student.repository";
import { StaticDataSource } from "./static.datasource";
import { Record } from './record.model';
import { Update } from './update.model';
import { UpdateRepository } from './update.repository';
import { RestDataSource } from "./rest.datasource";
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from "./auth.service";
@NgModule({
    imports: [HttpClientModule],
    providers: [StudentRepository, Record, Update, UpdateRepository,
        { provide: StaticDataSource, useClass: RestDataSource },
        RestDataSource, AuthService]
})
export class ModelModule { }