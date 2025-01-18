import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SelectButton } from 'primeng/selectbutton';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@Component({
  selector: 'language-switcher',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SelectButton],
  templateUrl: './language-switcher.component.html',
})
export class LanguageSwitcherComponent {
  stateOptions: any[] = [
    { label: 'Polish', value: 'pl' },
    { label: 'English', value: 'en' },
  ];

  readonly languageForm = new FormGroup({
    value: new FormControl('english'),
  });

  //constructor(private translate: TranslateService) {}

  switchLanguage(lang: 'en' | 'pl') {
    //this.translate.use(lang);
  }
}
