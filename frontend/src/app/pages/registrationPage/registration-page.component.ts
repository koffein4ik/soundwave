import {Component} from "@angular/core";
import {RegistrationService} from "../../services/registration/registration.service";
import {RegistrationModel} from "../../models/registration.model";

@Component({
  selector: 'app-registration',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.less']
})
export class RegistrationPageComponent {
  constructor(private regService: RegistrationService) {}

  public onClickSubmit(regData: RegistrationModel): void {
    this.regService.register(regData).subscribe();
    console.log(regData);
  }


}
