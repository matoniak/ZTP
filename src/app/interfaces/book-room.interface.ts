import { FormControl } from '@angular/forms';

export interface BookRoomForm {
  name: FormControl<string>;
  surname: FormControl<string>;
}
